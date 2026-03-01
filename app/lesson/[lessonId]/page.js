'use client';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { supabase } from '../../../lib/supabase';
import { getLessonData, parseLessonId, sections, getLessonId } from '../../sections';
import { loseHeart } from '../../lib/hearts';
import { OutOfHeartsModal } from '../../components/HeartsDisplay';
import { getTimeUntilNextHeart, formatTimeRemaining } from '../../lib/hearts';

export default function Lesson() {
  const router = useRouter();
  const params = useParams();
  const lessonId = params.lessonId;

  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(null);
  const [lesson, setLesson] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [lessonComplete, setLessonComplete] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showOutOfHearts, setShowOutOfHearts] = useState(false);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      router.push('/signin');
      return;
    }

    setUser(user);
    await loadLesson(user.id);
  };

  const loadLesson = async (userId) => {
    try {
      const lessonData = getLessonData(lessonId);
      
      if (!lessonData) {
        router.push('/learn');
        return;
      }

      setLesson(lessonData);

      const { data } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId)
        .single();

      setProgress(data);
      setLoading(false);
    } catch (error) {
      console.error('Error loading lesson:', error);
      setLoading(false);
    }
  };

  const handleAnswerSelect = (answerIndex) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = async () => {
    if (selectedAnswer === null) {
      alert('Please select an answer!');
      return;
    }

    const currentQuestion = lesson.questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correct;

    const newAnswers = [...answers, { correct: isCorrect }];
    setAnswers(newAnswers);
    setShowResult(true);

    if (!isCorrect && !progress?.is_premium) {
      const result = await loseHeart(user.id, supabase);
      
      if (!result.canContinue) {
        setShowOutOfHearts(true);
        return;
      }
    }

    setTimeout(() => {
      if (currentQuestionIndex < lesson.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        completeLesson(newAnswers);
      }
    }, 3000);
  };

  const completeLesson = async (finalAnswers) => {
    setLessonComplete(true);

    const correctCount = finalAnswers.filter(a => a.correct).length;
    const accuracy = (correctCount / lesson.questions.length) * 100;
    const xpEarned = Math.round((accuracy / 100) * (lesson.xp || 100));

    await supabase.from('lesson_completions').upsert([
      {
        user_id: user.id,
        lesson_id: lessonId,
        completed_at: new Date().toISOString()
      }
    ]);

    await supabase
      .from('user_progress')
      .update({
        total_xp: (progress?.total_xp || 0) + xpEarned,
        lessons_completed: (progress?.lessons_completed || 0) + 1
      })
      .eq('user_id', user.id);

    const today = new Date().toDateString();
    const lastActive = progress?.last_active ? new Date(progress.last_active).toDateString() : null;
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    let newStreak = progress?.streak_count || 0;
    if (lastActive !== today) {
      if (lastActive === yesterday) {
        newStreak += 1;
      } else {
        newStreak = 1;
      }

      await supabase
        .from('user_progress')
        .update({
          streak_count: newStreak,
          last_active: new Date().toISOString()
        })
        .eq('user_id', user.id);
    }
  };

  const findNextLesson = () => {
    const { sectionIndex, lessonIndex } = parseLessonId(lessonId);
    const section = sections[sectionIndex];

    if (lessonIndex < section.lessons.length - 1) {
      return getLessonId(sectionIndex, lessonIndex + 1);
    }

    if (sectionIndex < sections.length - 1) {
      return getLessonId(sectionIndex + 1, 0);
    }

    return null;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  if (showOutOfHearts) {
    return (
      <OutOfHeartsModal
        onClose={() => router.push('/learn')}
        onUpgrade={() => router.push('/premium')}
        timeRemaining={formatTimeRemaining(getTimeUntilNextHeart(progress?.last_heart_regen))}
      />
    );
  }

  if (lessonComplete) {
    const correctCount = answers.filter(a => a.correct).length;
    const accuracy = (correctCount / lesson.questions.length) * 100;
    const xpEarned = Math.round((accuracy / 100) * (lesson.xp || 100));
    const nextLessonId = findNextLesson();

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl border border-gray-200 p-12">
          <div className="text-center mb-8">
            <div className="text-8xl mb-6">
              {accuracy >= 80 ? '🎉' : accuracy >= 60 ? '👍' : '💪'}
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-3">Lesson Complete!</h2>
            <p className="text-xl text-gray-600">{lesson.title}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 rounded-xl p-6 text-center border border-blue-200">
              <p className="text-base text-gray-600 mb-2">Score</p>
              <p className="text-4xl font-black text-blue-600">{Math.round(accuracy)}%</p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 text-center border border-green-200">
              <p className="text-base text-gray-600 mb-2">Correct</p>
              <p className="text-4xl font-black text-green-600">{correctCount}/{lesson.questions.length}</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-6 text-center border border-yellow-200">
              <p className="text-base text-gray-600 mb-2">XP Earned</p>
              <p className="text-4xl font-black text-yellow-600">+{xpEarned}</p>
            </div>
          </div>

          <div className={`rounded-xl p-6 mb-8 border-2 ${
            accuracy >= 80 
              ? 'bg-green-50 border-green-300'
              : accuracy >= 60
              ? 'bg-blue-50 border-blue-300'
              : 'bg-orange-50 border-orange-300'
          }`}>
            <p className="text-lg font-bold text-gray-900 text-center">
              {accuracy >= 80 
                ? '🌟 Excellent work! You really understand this topic!'
                : accuracy >= 60
                ? '✅ Good job! You\'re learning well.'
                : '💪 Keep practicing! Review the material and try again.'}
            </p>
          </div>

          <div className="space-y-3">
            {nextLessonId ? (
              <button
                onClick={() => router.push(`/lesson/${nextLessonId}`)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl text-xl transition-colors"
              >
                Next Lesson →
              </button>
            ) : (
              <button
                onClick={() => router.push('/learn')}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl text-xl transition-colors"
              >
                🎉 All Lessons Complete! →
              </button>
            )}
            
            <button
              onClick={() => router.push('/learn')}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-4 rounded-xl text-xl transition-colors"
            >
              Back to Learn
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = lesson.questions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / lesson.questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.push('/learn')}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              ← Exit Lesson
            </button>

            <div className="flex items-center gap-6">
              <div className="text-lg font-bold text-gray-900">
                Question {currentQuestionIndex + 1} / {lesson.questions.length}
              </div>
              {!progress?.is_premium && (
                <div className="flex items-center gap-2 bg-red-50 px-4 py-2 rounded-lg border border-red-200">
                  <span className="text-xl">❤️</span>
                  <span className="font-bold text-red-600">{progress?.hearts || 0}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="bg-gray-200 h-2">
        <div
          className="bg-blue-600 h-2 transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {currentQuestionIndex === 0 && (
          <div className="mb-8 text-center">
            <div className="text-5xl mb-4">{lesson.sectionEmoji}</div>
            <h1 className="text-4xl font-black text-gray-900 mb-3">{lesson.title}</h1>
            <p className="text-xl text-gray-600">{lesson.description}</p>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {currentQuestion.prompt}
          </h2>

          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.correct;
              const showCorrect = showResult && isCorrect;
              const showWrong = showResult && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all text-lg font-semibold ${
                    showCorrect
                      ? 'bg-green-50 border-green-500 text-gray-900'
                      : showWrong
                      ? 'bg-red-50 border-red-500 text-gray-900'
                      : isSelected
                      ? 'bg-blue-50 border-blue-500 text-gray-900'
                      : 'bg-white border-gray-300 hover:border-blue-400 hover:bg-blue-50 text-gray-900'
                  } ${showResult ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex-1">{option}</span>
                    {showCorrect && <span className="text-3xl ml-4">✅</span>}
                    {showWrong && <span className="text-3xl ml-4">❌</span>}
                  </div>
                </button>
              );
            })}
          </div>

          {showResult && (
            <div className={`mt-6 p-6 rounded-xl border-2 ${
              selectedAnswer === currentQuestion.correct
                ? 'bg-green-50 border-green-300'
                : 'bg-red-50 border-red-300'
            }`}>
              <p className="text-lg font-bold text-gray-900 mb-2">
                {selectedAnswer === currentQuestion.correct ? '✅ Correct!' : '❌ Incorrect'}
              </p>
              <p className="text-base text-gray-700">
                {currentQuestion.explanation}
              </p>
            </div>
          )}
        </div>

        {!showResult && (
          <button
            onClick={handleSubmitAnswer}
            disabled={selectedAnswer === null}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-5 rounded-xl text-2xl transition-colors disabled:cursor-not-allowed"
          >
            Submit Answer
          </button>
        )}

        {showResult && (
          <div className="text-center">
            <p className="text-gray-600 text-lg">
              {currentQuestionIndex < lesson.questions.length - 1
                ? 'Next question in 3 seconds...'
                : 'Completing lesson...'}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}