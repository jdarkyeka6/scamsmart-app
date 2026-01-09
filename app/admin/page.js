'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase';

export default function Admin() {
  const router = useRouter();
  const [stats, setStats] = useState(null);
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('stats'); // 'stats' or 'feedback'

  useEffect(() => {
    checkAdmin();
  }, []);

  const checkAdmin = async () => {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user || user.email !== 'jake.dryka@gmail.com') {
      router.push('/dashboard');
      return;
    }

    await loadStats();
    await loadFeedback();
  };

  const loadStats = async () => {
    try {
      const { data: allUsers } = await supabase
        .from('user_progress')
        .select('*');

      const { data: allLessons } = await supabase
        .from('lesson_completions')
        .select('*');

      const { data: allReferrals } = await supabase
        .from('referrals')
        .select('*');

      const totalUsers = allUsers?.length || 0;
      const premiumUsers = allUsers?.filter(u => u.is_premium)?.length || 0;
      const totalLessons = allLessons?.length || 0;
      const avgCompletion = totalUsers > 0 ? (totalLessons / totalUsers).toFixed(1) : 0;
      const totalReferrals = allReferrals?.length || 0;

      // Active users (logged in within last 7 days)
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      const activeUsers = allUsers?.filter(u => 
        new Date(u.last_activity) > sevenDaysAgo
      )?.length || 0;

      setStats({
        totalUsers,
        premiumUsers,
        activeUsers,
        avgCompletion,
        totalReferrals
      });

      setLoading(false);
    } catch (error) {
      console.error('Error loading stats:', error);
      setLoading(false);
    }
  };

  const loadFeedback = async () => {
    try {
      const { data } = await supabase
        .from('feedback')
        .select('*')
        .order('created_at', { ascending: false });

      setFeedback(data || []);
    } catch (error) {
      console.error('Error loading feedback:', error);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="ScamSmart" className="w-12 h-12 drop-shadow-md" />
              <div>
                <h1 className="text-2xl font-black text-gray-900">Admin Panel</h1>
                <p className="text-xs text-gray-500">ScamSmart Analytics</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button onClick={() => router.push('/dashboard')} className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Dashboard
              </button>
              <button onClick={handleSignOut} className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('stats')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === 'stats'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            📊 Statistics
          </button>
          <button
            onClick={() => setActiveTab('feedback')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === 'feedback'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            💬 Feedback ({feedback.length})
          </button>
        </div>

        {/* Stats Tab */}
        {activeTab === 'stats' && (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-black text-gray-900 mb-2">Platform Overview</h2>
              <p className="text-gray-600">Key metrics and user statistics</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <StatCard
                icon="👥"
                label="Total Users"
                value={stats?.totalUsers || 0}
                color="blue"
              />
              <StatCard
                icon="⭐"
                label="Premium Users"
                value={stats?.premiumUsers || 0}
                color="yellow"
              />
              <StatCard
                icon="🔥"
                label="Active Users (7d)"
                value={stats?.activeUsers || 0}
                color="orange"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StatCard
                icon="📚"
                label="Avg Lessons/User"
                value={stats?.avgCompletion || 0}
                color="green"
              />
              <StatCard
                icon="🎁"
                label="Total Referrals"
                value={stats?.totalReferrals || 0}
                color="purple"
              />
            </div>
          </>
        )}

        {/* Feedback Tab */}
        {activeTab === 'feedback' && (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-black text-gray-900 mb-2">User Feedback</h2>
              <p className="text-gray-600">See what users think about ScamSmart</p>
            </div>

            {feedback.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-sm p-12 text-center border border-gray-100">
                <p className="text-gray-500 text-lg">No feedback yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {feedback.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="font-bold text-gray-900">{item.user_name}</p>
                        <p className="text-sm text-gray-500">{item.user_email}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          {new Date(item.created_at).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-xl">
                            {i < item.rating ? '⭐' : '☆'}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700 whitespace-pre-wrap">{item.feedback}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

function StatCard({ icon, label, value, color }) {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    yellow: 'from-yellow-500 to-yellow-600',
    orange: 'from-orange-500 to-orange-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600'
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <span className="text-4xl">{icon}</span>
        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${colorClasses[color]}`}></div>
      </div>
      <p className="text-sm font-semibold text-gray-600 mb-1">{label}</p>
      <p className="text-4xl font-black text-gray-900">{value}</p>
    </div>
  );
}