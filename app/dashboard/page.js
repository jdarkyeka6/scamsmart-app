'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase';
import { sections } from '../../lib/sections';
import DarkModeToggle from '../components/DarkModeToggle';
import ShareProgress from '../components/ShareProgress';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      router.push('/signin');
      return;
    }

    setUser(user);
    await loadProgress(user.id);
    await loadCompletedLessons(user.id);
  };

  const loadProgress = async (userId) => {
    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error && error.code === 'PGRST116') {
        const { data: newProgress } = await supabase
          .from('user_progress')
          .insert([
            {
              user_id: userId,
              email: user?.email,
              total_xp: 0,
              lessons_completed: 0,
              streak_count: 0,
              last_activity: new Date().toISOString(),
              is_premium: false
            }
          ])
          .select()
          .single();

        setProgress(newProgress);
      } else {
        // Check if premium expired
        if (data?.premium_until) {
          const premiumUntil = new Date(data.premium_until);
          const now = new Date();

          if (now > premiumUntil && data.is_premium) {
            // Premium expired, downgrade
            await supabase
              .from('user_progress')
              .update({ is_premium: false })
              .eq('user_id', userId);

            data.is_premium = false;
          }
        }

        setProgress(data);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error loading progress:', error);
      setLoading(false);
    }
  };

  const loadCompletedLessons = async (userId) => {
    try {
      const { data } = await supabase
        .from('lesson_completions')
        .select('lesson_id')
        .eq('user_id', userId);

      setCompletedLessons(data?.map(l => l.lesson_id) || []);
    } catch (error) {
      console.error('Error loading completed lessons:', error);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  const isLessonCompleted = (lessonId) => {
    return completedLessons.includes(lessonId);
  };

  const getLevel = () => Math.floor((progress?.total_xp || 0) / 500) + 1;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="ScamSmart" className="w-12 h-12 drop-shadow-md" />
              <div>
                <h1 className="text-2xl font-black text-gray-900 dark:text-white">ScamSmart</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Think Before You Click</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <DarkModeToggle />

              {/* Stats */}
              <div className="hidden md:flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-blue-600 dark:text-blue-400">{progress?.total_xp || 0}</span>
                  <span className="text-gray-600 dark:text-gray-400">XP</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-orange-600 dark:text-orange-400">{progress?.streak_count || 0}</span>
                  <span>🔥</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-purple-600 dark:text-purple-400">Lvl {getLevel()}</span>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => router.push('/chat')}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
                >
                  Chat
                </button>
                <button
                  onClick={() => router.push('/daily-challenge')}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
                >
                  Daily
                </button>
                <button
                  onClick={() => router.push('/leaderboard')}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
                >
                  Leaderboard
                </button>
                <button
                  onClick={() => router.push('/achievements')}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
                >
                  Achievements
                </button>
                <button
                  onClick={() => router.push('/certificates')}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
                >
                  Certificates
                </button>
                <button
                  onClick={() => router.push('/referrals')}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
                >
                  Refer
                </button>
                <button
                  onClick={() => router.push('/profile')}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
                >
                  Profile
                </button>
                <button
                  onClick={() => router.push('/settings')}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
                >
                  Settings
                </button>
                <button
                  onClick={handleSignOut}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2">
            Welcome back, {user?.email?.split('@')[0] || 'Learner'}! 👋
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Ready to continue your scam detection journey?</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <QuickAction
            icon="🎯"
            label="Daily Challenge"
            onClick={() => router.push('/daily-challenge')}
          />
          <QuickAction
            icon="🎁"
            label="Refer Friends"
            onClick={() => router.push('/referrals')}
          />
          <QuickAction
            icon="🎓"
            label="Certificates"
            onClick={() => router.push('/certificates')}
          />
          <QuickAction
            icon="💬"
            label="Chat with Mibo"
            onClick={() => router.push('/chat')}
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatCard icon="⭐" label="Total XP" value={progress?.total_xp || 0} color="blue" />
          <StatCard icon="📚" label="Lessons Completed" value={progress?.lessons_completed || 0} color="green" />
          <StatCard icon="🔥" label="Day Streak" value={progress?.streak_count || 0} color="orange" />
          <StatCard icon="🏆" label="Level" value={getLevel()} color="purple" />
        </div>

        {/* Share Progress */}
        <div className="mb-8">
          <ShareProgress progress={progress} userEmail={user?.email} />
        </div>

        {/* Premium CTA */}
        {!progress?.is_premium && (
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-6 mb-8 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-black text-white mb-2">⭐ Upgrade to Premium</h3>
                <p className="text-white/90 mb-4">
                  Unlock advanced lessons, priority support, and exclusive features for just $5/month!
                </p>
                <button
                  onClick={() => router.push('/premium')}
                  className="bg-white text-yellow-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-md"
                >
                  Upgrade Now → 
                </button>
              </div>
              <div className="hidden md:block text-8xl">🌟</div>
            </div>
          </div>
        )}

        {/* Premium Active */}
        {progress?.is_premium && progress?.premium_until && (
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-6 mb-8 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-black text-white mb-2">⭐ Premium Active</h3>
                <p className="text-white/90">
                  Your premium access is active until {new Date(progress.premium_until).toLocaleDateString()}
                </p>
              </div>
              <div className="hidden md:block text-8xl">🌟</div>
            </div>
          </div>
        )}

        {/* Sections */}
        <div>
          <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">Learning Paths</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => {
              const completed = isLessonCompleted(section.id);

              return (
                <button
                  key={section.id}
                  onClick={() => router.push(`/lesson/${section.id}`)}
                  className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-2 transition-all hover:scale-105 hover:shadow-xl text-left ${
                    completed
                      ? 'border-green-400 dark:border-green-600'
                      : 'border-gray-100 dark:border-gray-700'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-5xl">{section.emoji}</span>
                    {completed && (
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                        ✓ Complete
                      </span>
                    )}
                  </div>

                  <h4 className="text-xl font-black text-gray-900 dark:text-white mb-2">
                    {section.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {section.description}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Lesson {section.id}</span>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">
                      {completed ? 'Review →' : 'Start →'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ icon, label, value, color }) {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600',
    purple: 'from-purple-500 to-purple-600'
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <span className="text-3xl">{icon}</span>
        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${colorClasses[color]}`}></div>
      </div>
      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">{label}</p>
      <p className="text-3xl font-black text-gray-900 dark:text-white">{value}</p>
    </div>
  );
}

function QuickAction({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-100 dark:border-gray-700 hover:shadow-md hover:scale-105 transition-all text-center"
    >
      <div className="text-4xl mb-2">{icon}</div>
      <p className="text-sm font-semibold text-gray-900 dark:text-white">{label}</p>
    </button>
  );
}
