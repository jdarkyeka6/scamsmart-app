'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase';
import DarkModeToggle from '../components/DarkModeToggle';
import HeartsDisplay from '../components/HeartsDisplay';
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
      skill: 'Pressure Resistance',
      difficulty: 'Easy',
      xp: 100,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      type: CHALLENGE_TYPES.SPOT_RED_FLAGS,
      title: 'Spot the Red Flags',
      emoji: '🚩',
      description: 'Identify all suspicious elements in emails, messages, and posts',
      skill: 'Deception Detection',
      difficulty: 'Medium',
      xp: 150,
      color: 'from-red-500 to-pink-500'
    },
    {
      type: CHALLENGE_TYPES.FAKE_INBOX,
      title: 'Fake Inbox',
      emoji: '📧',
      description: 'Review multiple messages and identify which are scams',
      skill: 'Pattern Recognition',
      difficulty: 'Medium',
      xp: 200,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      type: CHALLENGE_TYPES.PATTERN_MATCH,
      title: 'Pattern Matching',
      emoji: '🧩',
      description: 'Connect scam types with their tactics and techniques',
      skill: 'Manipulation Awareness',
      difficulty: 'Hard',
      xp: 250,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Loading challenges...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-3 md:px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <img src="/logo.png" alt="ScamSmart" className="w-10 h-10 md:w-12 md:h-12 drop-shadow-md" />
              <div>
                <h1 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white">Challenges</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">Test Your Skills</p>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <HeartsDisplay 
                hearts={progress?.hearts || 0}
                isPremium={progress?.is_premium || false}
                lastRegenTime={progress?.last_heart_regen}
                compact={true}
              />
              <DarkModeToggle />
              <button 
                onClick={() => router.push('/dashboard')} 
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors text-sm md:text-base"
              >
                Dashboard
              </button>
              <button 
                onClick={handleSignOut} 
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors text-sm md:text-base"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
            Choose Your Challenge
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Test your scam detection skills and earn XP!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challengeModes.map((mode) => (
            <button
              key={mode.type}
              onClick={() => router.push(`/challenges/${mode.type}`)}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105"
            >
              {/* Gradient Header */}
              <div className={`bg-gradient-to-r ${mode.color} p-6 text-white`}>
                <div className="text-6xl mb-3">{mode.emoji}</div>
                <h3 className="text-2xl font-black mb-2">{mode.title}</h3>
                <p className="text-white/90 text-sm">{mode.description}</p>
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Skill</p>
                    <p className="font-bold text-gray-900 dark:text-white text-sm">{mode.skill}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Difficulty</p>
                    <p className="font-bold text-gray-900 dark:text-white text-sm">{mode.difficulty}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Reward</p>
                    <p className="font-bold text-yellow-600 dark:text-yellow-400 text-sm">+{mode.xp} XP</p>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 text-center">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">
                    Start Challenge →
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-12 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-6">
          <h3 className="text-lg font-black text-gray-900 dark:text-white mb-3">💡 How Challenges Work</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
              <span>Each challenge tests specific scam detection skills</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
              <span>Wrong answers cost hearts - answer carefully!</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
              <span>Earn XP and improve your skill ratings</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
              <span>Premium members get unlimited hearts for practice</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}