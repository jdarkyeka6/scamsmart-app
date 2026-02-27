'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabase';
import { getRandomChallenges, CHALLENGE_TYPES, calculateChallengeScore } from '../../../lib/challenges';
import { loseHeart } from '../../../lib/hearts';
import { OutOfHeartsModal } from '../../../components/HeartsDisplay';
import { getTimeUntilNextHeart, formatTimeRemaining } from '../../../lib/hearts';

export default function SpotRedFlags() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(null);
  const [challenge, setChallenge] = useState(null);
  const [selectedFlags, setSelectedFlags] = useState([]);
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
    
    const challenges = getRandomChallenges(CHALLENGE_TYPES.SPOT_RED_FLAGS, 1);
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

  const toggleFlag = (flagId) => {
    if (showResult) return;
    
    if (selectedFlags.includes(flagId)) {
      setSelectedFlags(selectedFlags.filter(id => id !== flagId));
    } else {
      setSelectedFlags([...selectedFlags, flagId]);
    }
  };

  const submitAnswer = async () => {
    if (selectedFlags.length === 0) {
      alert('⚠️ Please select at least one red flag before submitting!');
      return;
    }

    setShowResult(true);

    const correctFlags = challenge.redFlags.map(f => f.id);
    const foundCorrect = selectedFlags.filter(id => correctFlags.includes(id)).length;
    const accuracy = ((foundCorrect / correctFlags.length) * 100);
    const isSuccess = foundCorrect === correctFlags.length && selectedFlags.length === correctFlags.length;

    if (!isSuccess && !progress?.is_premium) {
      const result = await loseHeart(user.id, supabase);
      setHeartsRemaining(result.hearts);
      
      if (!result.canContinue) {
        setShowOutOfHearts(true);
        setGameOver(true);
        return;
      }
    }

    const xpEarned = Math.round((accuracy / 100) * challenge.xp);
    await supabase
      .from('user_progress')
      .update({ 
        total_xp: (progress?.total_xp || 0) + xpEarned 
      })
      .eq('user_id', user.id);

    const performanceScore = (accuracy / 100) * 10;
    await supabase.from('skill_activity_log').insert([
      {
        user_id: user.id,
        lesson_id: 'challenge-spot-red-flags',
        skill_type: challenge.skill,
        performance_score: performanceScore,
        accuracy_percentage: Math.round(accuracy)
      }
    ]);

    setTimeout(() => {
      setGameOver(true);
    }, 3000);
  };

  if (!challenge) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-red-600"></div>
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
    const correctFlags = challenge.redFlags.map(f => f.id);
    const foundCorrect = selectedFlags.filter(id => correctFlags.includes(id)).length;
    const accuracy = ((foundCorrect / correctFlags.length) * 100);
    const xpEarned = Math.round((accuracy / 100) * challenge.xp);

    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl border border-gray-200 p-12">
          <div className="text-center mb-8">
            <div className="text-8xl mb-6">
              {accuracy >= 100 ? '🎉' : accuracy >= 60 ? '👍' : '💪'}
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-3">Challenge Complete!</h2>
            <p className="text-xl text-gray-600">Spot the Red Flags</p>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 rounded-xl p-6 text-center border border-green-200">
              <p className="text-base text-gray-600 mb-2">Found</p>
              <p className="text-4xl font-black text-green-600">{foundCorrect}/{correctFlags.length}</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 text-center border border-purple-200">
              <p className="text-base text-gray-600 mb-2">Accuracy</p>
              <p className="text-4xl font-black text-purple-600">{Math.round(accuracy)}%</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-6 text-center border border-yellow-200">
              <p className="text-base text-gray-600 mb-2">XP Earned</p>
              <p className="text-4xl font-black text-yellow-600">+{xpEarned}</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">All Red Flags:</h3>
            <div className="space-y-3">
              {challenge.redFlags.map((flag) => {
                const wasFound = selectedFlags.includes(flag.id);
                return (
                  <div key={flag.id} className={`p-4 rounded-lg border-2 ${
                    wasFound ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'
                  }`}>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl flex-shrink-0">{wasFound ? '✅' : '❌'}</span>
                      <div>
                        <p className="text-lg font-bold text-gray-900">{flag.text}</p>
                        <p className="text-sm text-gray-600 mt-1">Location: {flag.location}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl text-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const correctFlags = challenge.redFlags.map(f => f.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-pink-500 p-6">
      <div className="max-w-5xl mx-auto py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 text-white font-bold text-xl">
            🚩 Spot the Red Flags
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 text-white font-bold flex items-center gap-3">
            <span className="text-2xl">❤️</span>
            <span className="text-3xl">{heartsRemaining}</span>
          </div>
        </div>

        {/* Challenge Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-10 mb-8">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            {challenge.title}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Find all suspicious elements. Click each red flag you spot!
          </p>

          {/* Content Display */}
          <div className="bg-gray-50 rounded-xl p-8 mb-8 border-2 border-gray-200">
            {challenge.content.from && (
              <div className="mb-6 pb-6 border-b-2 border-gray-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-base font-bold text-gray-700">From:</span>
                  <span className="text-lg text-gray-900">{challenge.content.from}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-base font-bold text-gray-700">Subject:</span>
                  <span className="text-lg text-gray-900">{challenge.content.subject}</span>
                </div>
              </div>
            )}
            
            {challenge.content.title && (
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{challenge.content.title}</h3>
              </div>
            )}
            
            {challenge.content.company && (
              <div className="mb-3">
                <span className="text-base text-gray-600">Company: </span>
                <span className="text-lg font-semibold text-gray-900">{challenge.content.company}</span>
              </div>
            )}
            
            {challenge.content.body && (
              <div className="whitespace-pre-wrap text-lg text-gray-800 leading-relaxed">
                {challenge.content.body}
              </div>
            )}
            
            {challenge.content.description && (
              <div className="mb-4 text-lg text-gray-800 leading-relaxed">
                {challenge.content.description}
              </div>
            )}
            
            {challenge.content.requirements && (
              <div className="mt-6 pt-6 border-t-2 border-gray-300">
                <span className="text-base font-bold text-gray-700">Requirements: </span>
                <span className="text-lg text-gray-800">{challenge.content.requirements}</span>
              </div>
            )}
          </div>

          {/* Red Flags Selection */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Select all red flags ({selectedFlags.length} selected):
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {challenge.redFlags.map((flag) => {
                const isSelected = selectedFlags.includes(flag.id);
                const isCorrect = showResult && correctFlags.includes(flag.id);
                const isWrong = showResult && isSelected && !correctFlags.includes(flag.id);

                return (
                  <button
                    key={flag.id}
                    onClick={() => toggleFlag(flag.id)}
                    disabled={showResult}
                    className={`p-6 rounded-xl border-3 transition-all text-left text-lg ${
                      showResult
                        ? isCorrect
                          ? 'bg-green-50 border-green-500'
                          : isWrong
                          ? 'bg-red-50 border-red-500'
                          : 'bg-gray-50 border-gray-300'
                        : isSelected
                        ? 'bg-red-100 border-red-500 border-3'
                        : 'bg-white border-gray-300 border-2 hover:border-red-400 hover:bg-red-50'
                    } ${showResult ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded border-3 flex items-center justify-center flex-shrink-0 ${
                        showResult
                          ? isCorrect
                            ? 'bg-green-500 border-green-600'
                            : isWrong
                            ? 'bg-red-500 border-red-600'
                            : 'border-gray-400'
                          : isSelected
                          ? 'bg-red-500 border-red-600'
                          : 'border-gray-400'
                      }`}>
                        {((showResult && isCorrect) || (isSelected && !showResult)) && (
                          <span className="text-white text-lg font-bold">✓</span>
                        )}
                        {showResult && isWrong && (
                          <span className="text-white text-lg font-bold">✗</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-900">{flag.text}</p>
                        {showResult && (
                          <p className="text-base text-gray-600 mt-2">
                            Location: {flag.location}
                          </p>
                        )}
                      </div>
                      {showResult && isCorrect && (
                        <span className="text-3xl flex-shrink-0">✅</span>
                      )}
                      {showResult && isWrong && (
                        <span className="text-3xl flex-shrink-0">❌</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {!showResult ? (
            <button
              onClick={submitAnswer}
              disabled={selectedFlags.length === 0}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-black py-6 rounded-xl text-2xl transition-all shadow-lg disabled:cursor-not-allowed"
            >
              Submit Answer
            </button>
          ) : (
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
              <p className="text-2xl font-bold text-gray-900">
                {selectedFlags.filter(id => correctFlags.includes(id)).length === correctFlags.length 
                  ? '🎉 Perfect! You found all the red flags!'
                  : '📚 Review the flags you missed above'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}