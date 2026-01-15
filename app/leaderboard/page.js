'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase';
import DarkModeToggle from '../components/DarkModeToggle';
import { AvatarPreview } from '../components/AvatarBuilder';
import { LEAGUES, getUserLeague } from '../lib/leagues';

export default function Leaderboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [userProgress, setUserProgress] = useState(null);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeFilter, setTimeFilter] = useState('all-time');
  const [selectedLeague, setSelectedLeague] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    if (user) {
      loadLeaderboard();
    }
  }, [timeFilter, selectedLeague, user]);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      router.push('/signin');
      return;
    }

    setUser(user);
    await loadUserProgress(user.id);
  };

  const loadUserProgress = async (userId) => {
    try {
      const { data } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId)
        .single();

      setUserProgress(data);
      
      // Set user's league as default selected
      const userLeague = getUserLeague(data?.total_xp || 0);
      setSelectedLeague(userLeague.id);
      
      setLoading(false);
    } catch (error) {
      console.error('Error loading user progress:', error);
      setLoading(false);
    }
  };

  const loadLeaderboard = async () => {
    try {
      let query = supabase
        .from('user_progress')
        .select('*')
        .order('total_xp', { ascending: false });

      // Filter by league
      if (selectedLeague) {
        const league = LEAGUES[selectedLeague];
        query = query
          .gte('total_xp', league.minXP)
          .lte('total_xp', league.maxXP === Infinity ? 1000000 : league.maxXP);
      }

      const { data } = await query.limit(50);

      setLeaderboardData(data || []);
    } catch (error) {
      console.error('Error loading leaderboard:', error);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  const getUserRank = () => {
    const index = leaderboardData.findIndex(u => u.user_id === user?.id);
    return index !== -1 ? index + 1 : null;
  };

  const filteredData = searchQuery
    ? leaderboardData.filter(u => 
        u.display_name?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : leaderboardData;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Loading leaderboard...</p>
        </div>
      </div>
    );
  }

  const currentLeague = LEAGUES[selectedLeague];
  const userLeague = getUserLeague(userProgress?.total_xp || 0);
  const userRank = getUserRank();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-3 md:px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <img src="/logo.png" alt="ScamSmart" className="w-10 h-10 md:w-12 md:h-12 drop-shadow-md" />
              <div>
                <h1 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white">Leaderboard</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">Compete with other learners</p>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <DarkModeToggle />
              <button onClick={() => router.push('/dashboard')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors text-sm md:text-base">
                Dashboard
              </button>
              <button onClick={handleSignOut} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors text-sm md:text-base">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-3 md:px-4 py-6 md:py-8">
        {/* Your League Card */}
        <div className={`bg-gradient-to-r ${userLeague.color} rounded-2xl p-6 md:p-8 mb-6 md:mb-8 text-white shadow-xl`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <div className="text-5xl md:text-6xl mb-3">{userLeague.emoji}</div>
              <h2 className="text-2xl md:text-3xl font-black mb-2">{userLeague.name}</h2>
              <p className="text-white/90 text-sm md:text-base">{userLeague.description}</p>
              <p className="text-white/80 text-xs md:text-sm mt-2">
                {userLeague.minXP.toLocaleString()} - {userLeague.maxXP === Infinity ? '∞' : userLeague.maxXP.toLocaleString()} XP
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black mb-2">{userProgress?.total_xp?.toLocaleString() || 0}</div>
              <p className="text-white/90 font-semibold text-sm md:text-base">Your XP</p>
              {userRank && (
                <p className="text-white/80 text-xs md:text-sm mt-2">
                  Rank #{userRank} in {userLeague.name}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* League Selector */}
        <div className="mb-6 md:mb-8">
          <h3 className="text-lg md:text-xl font-black text-gray-900 dark:text-white mb-4">Select League</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
            {Object.values(LEAGUES).map((league) => (
              <button
                key={league.id}
                onClick={() => setSelectedLeague(league.id)}
                className={`p-4 rounded-xl border-2 transition-all transform hover:scale-105 ${
                  selectedLeague === league.id
                    ? `bg-gradient-to-r ${league.color} text-white border-transparent shadow-lg`
                    : `bg-white dark:bg-gray-800 ${league.borderColor} dark:border-gray-700 hover:shadow-md`
                }`}
              >
                <div className="text-3xl md:text-4xl mb-2">{league.emoji}</div>
                <p className={`font-bold text-xs md:text-sm ${
                  selectedLeague === league.id ? 'text-white' : `${league.textColor} ${league.darkTextColor}`
                }`}>
                  {league.name.replace(' League', '')}
                </p>
                <p className={`text-xs mt-1 ${
                  selectedLeague === league.id ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {league.minXP.toLocaleString()}+ XP
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="text-gray-400 text-lg">🔍</span>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by username..."
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 dark:text-white"
            />
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className={`bg-gradient-to-r ${currentLeague.color} text-white`}>
                <tr>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-bold">Rank</th>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-bold">User</th>
                  <th className="px-4 md:px-6 py-4 text-center text-xs md:text-sm font-bold hidden sm:table-cell">Level</th>
                  <th className="px-4 md:px-6 py-4 text-center text-xs md:text-sm font-bold">XP</th>
                  <th className="px-4 md:px-6 py-4 text-center text-xs md:text-sm font-bold hidden md:table-cell">Lessons</th>
                  <th className="px-4 md:px-6 py-4 text-center text-xs md:text-sm font-bold hidden lg:table-cell">Streak</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center text-gray-500 dark:text-gray-400">
                      No users in this league yet. Be the first!
                    </td>
                  </tr>
                ) : (
                  filteredData.map((userData, index) => {
                    const isCurrentUser = userData.user_id === user?.id;
                    const rank = index + 1;
                    const level = Math.floor(userData.total_xp / 500) + 1;

                    const avatar = {
                      face: userData.avatar_face || 'oval',
                      hair: userData.avatar_hair || 'short',
                      hairColor: userData.avatar_hair_color || 'brown',
                      eyeColor: userData.avatar_eye_color || 'brown',
                      skinTone: userData.avatar_skin_tone || 'light'
                    };

                    return (
                      <tr
                        key={userData.user_id}
                        className={`border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${
                          isCurrentUser ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                        }`}
                      >
                        <td className="px-4 md:px-6 py-4">
                          <div className="flex items-center gap-2">
                            {rank <= 3 ? (
                              <span className="text-2xl md:text-3xl">
                                {rank === 1 ? '🥇' : rank === 2 ? '🥈' : '🥉'}
                              </span>
                            ) : (
                              <span className="text-base md:text-lg font-bold text-gray-600 dark:text-gray-400">
                                #{rank}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-4 md:px-6 py-4">
                          <div className="flex items-center gap-2 md:gap-3">
                            <AvatarPreview avatar={avatar} size="small" />
                            <div>
                              <p className="font-bold text-gray-900 dark:text-white text-sm md:text-base">
                                {userData.display_name || 'User'}
                                {isCurrentUser && (
                                  <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-1 rounded">You</span>
                                )}
                              </p>
                              {userData.is_premium && (
                                <span className="text-xs text-yellow-600 dark:text-yellow-400 font-semibold">⭐ Premium</span>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-4 md:px-6 py-4 text-center hidden sm:table-cell">
                          <span className="inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full font-bold text-sm">
                            {level}
                          </span>
                        </td>
                        <td className="px-4 md:px-6 py-4 text-center">
                          <span className="font-bold text-gray-900 dark:text-white text-sm md:text-base">
                            {userData.total_xp?.toLocaleString() || 0}
                          </span>
                        </td>
                        <td className="px-4 md:px-6 py-4 text-center hidden md:table-cell">
                          <span className="text-gray-600 dark:text-gray-400 font-semibold text-sm md:text-base">
                            {userData.lessons_completed || 0}
                          </span>
                        </td>
                        <td className="px-4 md:px-6 py-4 text-center hidden lg:table-cell">
                          <span className="font-bold text-orange-600 dark:text-orange-400 text-sm md:text-base">
                            {userData.streak_count || 0} 🔥
                          </span>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* League Info */}
        <div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
          <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">How Leagues Work</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
              <span>Complete lessons and earn XP to climb through the leagues</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
              <span>Each league shows the top 50 users at that XP range</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
              <span>Reach Master League (10,000+ XP) to join the elite!</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}