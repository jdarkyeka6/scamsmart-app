'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabase';
import { getRandomChallenges, CHALLENGE_TYPES, calculateChallengeScore } from '../../../lib/challenges';
import { loseHeart } from '../../../lib/hearts';
import { OutOfHeartsModal } from '../../../components/HeartsDisplay';
import { getTimeUntilNextHeart, formatTimeRemaining } from '../../../lib/hearts';

export default function FakeInbox() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(null);
  const [challenge, setChallenge] = useState(null);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showOutOfHearts, setShowOutOfHearts] = useState(false);
  const [heartsRemaining, setHeartsRemaining] = useState(5);

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
    await loadProgress(user.id);
    
    const challenges = getRandomChallenges(CHALLENGE_TYPES.FAKE_INBOX, 1);
    setChallenge(challenges[0]);
  };

  const loadProgress = async (userId) => {
    try {
      const { data } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId)
        .single();

      setProgress(data);
      setHeartsRemaining(data?.hearts || 0);
    } catch (error) {
      console.error('Error loading progress:', error);
    }
  };

  const handleAnswer = async (isScam) => {
    const message = challenge.messages[currentMessageIndex];
    const isCorrect = isScam === message.isScam;

    const newAnswers = {
      ...answers,
      [message.id]: { userAnswer: isScam, correct: isCorrect }
    };
    setAnswers(newAnswers);
    setShowResult(true);

    if (!isCorrect && !progress?.is_premium) {
      const result = await loseHeart(user.id, supabase);
      setHeartsRemaining(result.hearts);
      
      if (!result.canContinue) {
        setShowOutOfHearts(true);
        setGameOver(true);
        return;
      }
    }

    setTimeout(() => {
      if (currentMessageIndex < challenge.messages.length - 1) {
        setCurrentMessageIndex(currentMessageIndex + 1);
        setShowResult(false);
      } else {
        finishChallenge(newAnswers);
      }
    }, 3000);
  };

  const finishChallenge = async (finalAnswers) => {
    setGameOver(true);
    
    const correct = Object.values(finalAnswers).filter(a => a.correct).length;
    const score = calculateChallengeScore(correct, challenge.messages.length);

    await supabase
      .from('user_progress')
      .update({ 
        total_xp: (progress?.total_xp || 0) + score.totalXP 
      })
      .eq('user_id', user.id);

    const performanceScore = (score.accuracy / 100) * 10;
    await supabase.from('skill_activity_log').insert([
      {
        user_id: user.id,
        lesson_id: 'challenge-fake-inbox',
        skill_type: challenge.skill,
        performance_score: performanceScore,
        accuracy_percentage: score.accuracy
      }
    ]);
  };

  if (!challenge) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600"></div>
      </div>
    );
  }

  if (showOutOfHearts) {
    return (
      <OutOfHeartsModal
        onClose={() => router.push('/challenges')}
        onUpgrade={() => router.push('/premium')}
        timeRemaining={formatTimeRemaining(getTimeUntilNextHeart(progress?.last_heart_regen))}
      />
    );
  }

  if (gameOver) {
    const correct = Object.values(answers).filter(a => a.correct).length;
    const score = calculateChallengeScore(correct, challenge.messages.length);

    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl border border-gray-200 p-12">
          <div className="text-center mb-8">
            <div className="text-8xl mb-6">
              {score.accuracy >= 80 ? '🎉' : score.accuracy >= 60 ? '👍' : '💪'}
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-3">Inbox Reviewed!</h2>
            <p className="text-xl text-gray-600">Fake Inbox Challenge</p>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 rounded-xl p-6 text-center border border-green-200">
              <p className="text-base text-gray-600 mb-2">Correct</p>
              <p className="text-4xl font-black text-green-600">{score.correct}/{score.total}</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 text-center border border-purple-200">
              <p className="text-base text-gray-600 mb-2">Accuracy</p>
              <p className="text-4xl font-black text-purple-600">{score.accuracy}%</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-6 text-center border border-yellow-200">
              <p className="text-base text-gray-600 mb-2">XP Earned</p>
              <p className="text-4xl font-black text-yellow-600">+{score.totalXP}</p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            {challenge.messages.map((message) => {
              const answer = answers[message.id];
              return (
                <div key={message.id} className={`p-6 rounded-xl border-2 ${
                  answer?.correct 
                    ? 'bg-green-50 border-green-300' 
                    : 'bg-red-50 border-red-300'
                }`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <p className="font-bold text-gray-900 text-lg mb-2">{message.from}</p>
                      <p className="text-base text-gray-700">{message.subject}</p>
                    </div>
                    <span className="text-3xl flex-shrink-0 ml-4">{answer?.correct ? '✅' : '❌'}</span>
                  </div>
                  <p className="text-base text-gray-700 mt-3 pt-3 border-t border-gray-300">
                    <strong>{message.isScam ? '🚨 SCAM' : '✅ SAFE'}:</strong> {message.explanation}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => router.push('/challenges')}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-4 rounded-xl text-lg transition-colors"
            >
              Back to Challenges
            </button>
            <button
              onClick={() => window.location.reload()}
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl text-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const message = challenge.messages[currentMessageIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-500 p-6">
      <div className="max-w-4xl mx-auto py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 text-white font-bold text-xl">
            📧 Message {currentMessageIndex + 1} / {challenge.messages.length}
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 text-white font-bold flex items-center gap-3">
            <span className="text-2xl">❤️</span>
            <span className="text-3xl">{heartsRemaining}</span>
          </div>
        </div>

        {/* Email Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
          {/* Email Header */}
          <div className="bg-gray-100 p-8 border-b-2 border-gray-200">
            <div className="mb-4">
              <span className="text-sm text-gray-500 font-bold">FROM:</span>
              <p className="text-2xl font-bold text-gray-900 mt-1">{message.from}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500 font-bold">SUBJECT:</span>
              <p className="text-2xl font-bold text-gray-900 mt-1">{message.subject}</p>
            </div>
          </div>

          {/* Email Body */}
          <div className="p-8 min-h-[250px] flex items-center">
            <p className="text-gray-800 text-2xl leading-relaxed">{message.preview}</p>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
            Is this email a scam or safe?
          </h2>

          {!showResult ? (
            <div className="grid grid-cols-2 gap-6">
              <button
                onClick={() => handleAnswer(true)}
                className="bg-red-500 hover:bg-red-600 text-white font-black py-8 rounded-xl text-3xl transition-all transform hover:scale-105 shadow-lg"
              >
                🚨 SCAM
              </button>
              <button
                onClick={() => handleAnswer(false)}
                className="bg-green-500 hover:bg-green-600 text-white font-black py-8 rounded-xl text-3xl transition-all transform hover:scale-105 shadow-lg"
              >
                ✅ SAFE
              </button>
            </div>
          ) : (
            <div className={`p-8 rounded-xl border-4 ${
              answers[message.id]?.correct
                ? 'bg-green-50 border-green-500'
                : 'bg-red-50 border-red-500'
            }`}>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">
                  {answers[message.id]?.correct ? '✅' : '❌'}
                </span>
                <span className="text-3xl font-black text-gray-900">
                  {answers[message.id]?.correct ? 'Correct!' : 'Wrong!'}
                </span>
              </div>
              <p className="text-xl text-gray-700 font-bold mb-3">
                {message.isScam ? '🚨 This is a SCAM' : '✅ This is SAFE'}
              </p>
              <p className="text-lg text-gray-600">
                {message.explanation}
              </p>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="bg-white/20 backdrop-blur-sm rounded-full h-4 overflow-hidden">
          <div 
            className="bg-white h-4 transition-all duration-300"
            style={{ width: `${((currentMessageIndex + 1) / challenge.messages.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}