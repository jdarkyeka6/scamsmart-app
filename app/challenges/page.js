'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase';
import { updateUserHearts } from '../lib/hearts';
import { CHALLENGE_TYPES } from '../lib/challenges';

export default function Challenges() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);

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
  };

  const loadProgress = async (userId) => {
    try {
      await updateUserHearts(userId, supabase);
      
      const { data } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId)
        .single();

      setProgress(data);
      setLoading(false);
    } catch (error) {
      console.error('Error loading progress:', error);
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  const challengeModes = [
    {
      type: CHALLENGE_TYPES.SCAM_VS_SAFE,
      title: 'Scam vs Safe',
      emoji: '⚡',
      description: 'Quick judgment calls - decide if scenarios are scams or safe in 10 seconds each',
      difficulty: 'Easy',
      xp: 100,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-300'
    },
    {
      type: CHALLENGE_TYPES.SPOT_RED_FLAGS,
      title: 'Spot the Red Flags',
      emoji: '🚩',
      description: 'Identify all suspicious elements in emails, messages, and posts',
      difficulty: 'Medium',
      xp: 150,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-300'
    },
    {
      type: CHALLENGE_TYPES.FAKE_INBOX,
      title: 'Fake Inbox',
      emoji: '📧',
      description: 'Review multiple messages and identify which are scams',
      difficulty: 'Medium',
      xp: 200,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-300'
    },
    {
      type: CHALLENGE_TYPES.PATTERN_MATCH,
      title: 'Pattern Matching',
      emoji: '🧩',
      description: 'Connect scam types with their tactics and techniques',
      difficulty: 'Hard',
      xp: 250,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-300'
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="ScamSmart" className="w-12 h-12" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">ScamSmart</h1>
                <p className="text-sm text-gray-600">Practice</p>
              </div>
            </div>

            <nav className="flex items-center gap-6">
              <button 
                onClick={() => router.push('/learn')}
                className="text-lg font-semibold text-gray-700 hover:text-gray-900"
              >
                📚 Learn
              </button>
              <button 
                onClick={() => router.push('/challenges')}
                className="text-lg font-semibold text-blue-600"
              >
                🎯 Practice
              </button>
              <button 
                onClick={() => router.push('/leaderboard')}
                className="text-lg font-semibold text-gray-700 hover:text-gray-900"
              >
                🏆 Compete
              </button>
              <button 
                onClick={() => router.push('/profile')}
                className="text-lg font-semibold text-gray-700 hover:text-gray-900"
              >
                👤 Profile
              </button>
              {!progress?.is_premium && (
                <button 
                  onClick={() => router.push('/premium')}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-4 py-2 rounded-lg text-base"
                >
                  ⭐ Upgrade
                </button>
              )}
              <button 
                onClick={handleSignOut}
                className="text-lg font-semibold text-gray-700 hover:text-gray-900"
              >
                Sign Out
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-7xl mb-6">🎯</div>
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            Practice Your Skills
          </h2>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
            Test your scam detection abilities with interactive challenges
          </p>
        </div>

        {/* Hearts Display */}
        {!progress?.is_premium && (
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-4xl">❤️</span>
              <span className="text-4xl font-black text-red-600">{progress?.hearts || 0} / 5</span>
            </div>
            <p className="text-lg text-gray-700">
              You lose hearts when you get answers wrong. Hearts regenerate 1 per hour.
            </p>
            <button
              onClick={() => router.push('/premium')}
              className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded-lg text-lg"
            >
              ⭐ Get Unlimited Hearts with Premium
            </button>
          </div>
        )}

        {/* Challenge Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {challengeModes.map((mode) => (
            <button
              key={mode.type}
              onClick={() => router.push(`/challenges/${mode.type}`)}
              className="group bg-white rounded-2xl shadow-md border-2 border-gray-200 overflow-hidden hover:shadow-xl hover:border-blue-400 transition-all text-left"
            >
              {/* Gradient Header */}
              <div className={`bg-gradient-to-r ${mode.color} p-8`}>
                <div className="text-7xl mb-4">{mode.emoji}</div>
                <h3 className="text-3xl font-black text-white mb-2">{mode.title}</h3>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-lg text-gray-700 mb-6">
                  {mode.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-6 mb-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Difficulty</p>
                    <p className="text-lg font-bold text-gray-900">{mode.difficulty}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Reward</p>
                    <p className="text-lg font-bold text-yellow-600">+{mode.xp} XP</p>
                  </div>
                </div>

                {/* Start Button */}
                <div className="bg-blue-600 group-hover:bg-blue-700 text-white font-bold text-center py-4 rounded-xl text-xl transition-colors">
                  Start Challenge →
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
          <h3 className="text-3xl font-black text-gray-900 mb-6 text-center">
            How Challenges Work
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-3">🎯</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Test Your Skills</h4>
              <p className="text-base text-gray-600">
                Each challenge tests specific scam detection abilities
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">❤️</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Use Hearts</h4>
              <p className="text-base text-gray-600">
                Wrong answers cost hearts. Answer carefully!
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">⭐</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Earn Rewards</h4>
              <p className="text-base text-gray-600">
                Get XP and improve your skills with each challenge
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}