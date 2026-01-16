'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabase';
import { getRandomChallenges, CHALLENGE_TYPES, calculateChallengeScore } from '../../../lib/challenges';
import { loseHeart } from '../../../lib/hearts';
import { OutOfHeartsModal } from '../../../components/HeartsDisplay';
import { getTimeUntilNextHeart, formatTimeRemaining } from '../../../lib/hearts';

export default function ScamVsSafe() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(null);
  const [challenges, setChallenges] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(10);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [showOutOfHearts, setShowOutOfHearts] = useState(false);
  const [heartsRemaining, setHeartsRemaining] = useState(5);

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    if (challenges.length > 0 && !showResult && !gameOver) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleAnswer(null); // Time's up
            return 10;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [currentIndex, showResult, gameOver, challenges]);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      router.push('/signin');
      return;
    }

    setUser(user);
    await loadProgress(user.id);
    
    // Load challenges
    const randomChallenges = getRandomChallenges(CHALLENGE_TYPES.SCAM_VS_SAFE, 5);
    setChallenges(randomChallenges);
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

  const handleAnswer = async (answer) => {
    if (showResult) return;

    const challenge = challenges[currentIndex];
    const isCorrect = answer === challenge.isScam;
    
    setSelectedAnswer(answer);
    setShowResult(true);
    
    // Record answer
    const newAnswers = [...answers, { 
      challengeId: challenge.id, 
      correct: isCorrect,
      timeTaken: 10 - timeLeft
    }];
    setAnswers(newAnswers);

    // Lose heart if wrong
    if (!isCorrect && !progress?.is_premium) {
      const result = await loseHeart(user.id, supabase);
      setHeartsRemaining(result.hearts);
      
      if (!result.canContinue) {
        setShowOutOfHearts(true);
        setGameOver(true);
        return;
      }
    }

    // Wait 3 seconds then move to next
    setTimeout(() => {
      if (currentIndex < challenges.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setShowResult(false);
        setSelectedAnswer(null);
        setTimeLeft(10);
      } else {
        finishChallenge(newAnswers);
      }
    }, 3000);
  };

  const finishChallenge = async (finalAnswers) => {
    setGameOver(true);
    
    const correct = finalAnswers.filter(a => a.correct).length;
    const avgTime = finalAnswers.reduce((sum, a) => sum + a.timeTaken, 0) / finalAnswers.length;
    const timeBonus = avgTime < 5 ? 50 : avgTime < 7 ? 25 : 0;
    
    const score = calculateChallengeScore(correct, challenges.length, timeBonus);

    // Award XP
    await supabase
      .from('user_progress')
      .update({ 
        total_xp: (progress?.total_xp || 0) + score.totalXP 
      })
      .eq('user_id', user.id);

    // Log skill activity (for skill rating calculation)
    const performanceScore = (score.accuracy / 100) * 10; // Convert to 0-10 scale
    
    await supabase.from('skill_activity_log').insert([
      {
        user_id: user.id,
        lesson_id: 'challenge-scam-vs-safe',
        skill_type: 'pressure_resistance',
        performance_score: performanceScore,
        accuracy_percentage: score.accuracy
      }
    ]);
  };

  if (!challenges.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading challenge...</p>
        </div>
      </div>
    );
  }

  if (showOutOfHearts) {
    return (
      <OutOfHeartsModal
        onClose={() => router.push('/challenges')}
        onUpgrade={() => router.push('/premium-feedback')}
        timeRemaining={formatTimeRemaining(getTimeUntilNextHeart(progress?.last_heart_regen))}
      />
    );
  }

  if (gameOver) {
    const correct = answers.filter(a => a.correct).length;
    const score = calculateChallengeScore(correct, challenges.length);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-6">
            <div className="text-7xl mb-4">
              {score.accuracy >= 80 ? '🎉' : score.accuracy >= 60 ? '👍' : '💪'}
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-2">Challenge Complete!</h2>
            <p className="text-gray-600">Scam vs Safe</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-sm text-gray-600 mb-1">Correct</p>
              <p className="text-3xl font-black text-blue-600">{score.correct}/{score.total}</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 text-center">
              <p className="text-sm text-gray-600 mb-1">Accuracy</p>
              <p className="text-3xl font-black text-purple-600">{score.accuracy}%</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-4 text-center">
              <p className="text-sm text-gray-600 mb-1">XP Earned</p>
              <p className="text-3xl font-black text-yellow-600">+{score.totalXP}</p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            {answers.map((answer, i) => (
              <div key={i} className={`p-4 rounded-lg border-2 ${
                answer.correct 
                  ? 'bg-green-50 border-green-500' 
                  : 'bg-red-50 border-red-500'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">Question {i + 1}</span>
                  <span className="text-2xl">{answer.correct ? '✅' : '❌'}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => router.push('/challenges')}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-lg transition-colors"
            >
              Back to Challenges
            </button>
            <button
              onClick={() => window.location.reload()}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const challenge = challenges[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white font-bold">
            Question {currentIndex + 1} / {challenges.length}
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white font-bold flex items-center gap-2">
              <span>⏱️</span>
              <span className={`text-2xl ${timeLeft <= 3 ? 'text-red-300 animate-pulse' : ''}`}>
                {timeLeft}s
              </span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white font-bold flex items-center gap-2">
              <span>❤️</span>
              <span>{heartsRemaining}</span>
            </div>
          </div>
        </div>

        {/* Challenge Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6">
          <h2 className="text-2xl font-black text-gray-900 mb-6 text-center">
            Is this a scam or safe?
          </h2>

          <div className="bg-gray-50 rounded-xl p-6 mb-6 min-h-[200px] flex items-center">
            <p className="text-lg text-gray-800 leading-relaxed">
              {challenge.scenario}
            </p>
          </div>

          {!showResult ? (
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleAnswer(true)}
                className="bg-red-500 hover:bg-red-600 text-white font-black py-6 rounded-xl text-2xl transition-all transform hover:scale-105 shadow-lg"
              >
                🚨 SCAM
              </button>
              <button
                onClick={() => handleAnswer(false)}
                className="bg-green-500 hover:bg-green-600 text-white font-black py-6 rounded-xl text-2xl transition-all transform hover:scale-105 shadow-lg"
              >
                ✅ SAFE
              </button>
            </div>
          ) : (
            <div className={`p-6 rounded-xl ${
              selectedAnswer === challenge.isScam
                ? 'bg-green-50 border-4 border-green-500'
                : 'bg-red-50 border-4 border-red-500'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">
                  {selectedAnswer === challenge.isScam ? '✅' : '❌'}
                </span>
                <span className="text-2xl font-black text-gray-900">
                  {selectedAnswer === challenge.isScam ? 'Correct!' : 'Wrong!'}
                </span>
              </div>
              <p className="text-gray-700 font-semibold mb-2">
                {challenge.isScam ? '🚨 This is a SCAM' : '✅ This is SAFE'}
              </p>
              <p className="text-gray-600">
                {challenge.explanation}
              </p>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="bg-white/20 backdrop-blur-sm rounded-full h-3 overflow-hidden">
          <div 
            className="bg-white h-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / challenges.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}