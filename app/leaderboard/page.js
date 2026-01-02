'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'

export default function Leaderboard() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [leaders, setLeaders] = useState([])
  const [loading, setLoading] = useState(true)
  const [timeframe, setTimeframe] = useState('all') // all, week, month

  useEffect(() => {
    checkUser()
    loadLeaderboard()
  }, [timeframe])

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/signin')
      return
    }
    setUser(user)
  }

  const loadLeaderboard = async () => {
    try {
      let query = supabase
        .from('user_progress')
        .select('*')
        .order('total_xp', { ascending: false })
        .limit(100)

      const { data, error } = await query

      if (error) throw error

      setLeaders(data || [])
    } catch (error) {
      console.error('Error loading leaderboard:', error)
    } finally {
      setLoading(false)
    }
  }

  const getRankEmoji = (rank) => {
    if (rank === 1) return '🥇'
    if (rank === 2) return '🥈'
    if (rank === 3) return '🥉'
    return `#${rank}`
  }

  const getEmailDisplay = (email) => {
    // Show first 3 chars + ***@domain for privacy
    const [name, domain] = email.split('@')
    return name.substring(0, 3) + '***@' + domain
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading leaderboard...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => router.push('/dashboard')}
              className="text-gray-600 hover:text-gray-900"
            >
              ← Back
            </button>
            <img src="/logo.png" alt="ScamSmart" className="w-10 h-10" />
            <h1 className="text-2xl font-bold text-gray-900">Leaderboard</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl shadow-lg p-8 mb-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-2">🏆 Top Learners</h2>
          <p className="text-lg">Compete with others and master scam detection!</p>
        </div>

        {/* Timeframe Selector */}
        <div className="flex gap-2 mb-6 justify-center">
          <button
            onClick={() => setTimeframe('all')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              timeframe === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Time
          </button>
          <button
            onClick={() => setTimeframe('month')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              timeframe === 'month'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            This Month
          </button>
          <button
            onClick={() => setTimeframe('week')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              timeframe === 'week'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            This Week
          </button>
        </div>

        {/* Top 3 Podium */}
        {leaders.length >= 3 && (
          <div className="grid grid-cols-3 gap-4 mb-8">
            {/* 2nd Place */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform translate-y-4">
              <div className="text-5xl mb-2">🥈</div>
              <div className="text-sm text-gray-600 mb-2">2nd Place</div>
              <div className="font-bold text-gray-900 mb-1">{getEmailDisplay(leaders[1].email)}</div>
              <div className="text-2xl font-bold text-blue-600">{leaders[1].total_xp} XP</div>
              <div className="text-sm text-gray-600 mt-2">{leaders[1].lessons_completed} lessons</div>
            </div>

            {/* 1st Place */}
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl shadow-xl p-6 text-center border-4 border-yellow-400">
              <div className="text-6xl mb-2">🥇</div>
              <div className="text-sm text-yellow-800 font-bold mb-2">1st Place</div>
              <div className="font-bold text-gray-900 text-lg mb-1">{getEmailDisplay(leaders[0].email)}</div>
              <div className="text-3xl font-bold text-yellow-600">{leaders[0].total_xp} XP</div>
              <div className="text-sm text-gray-700 mt-2">{leaders[0].lessons_completed} lessons</div>
            </div>

            {/* 3rd Place */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform translate-y-8">
              <div className="text-4xl mb-2">🥉</div>
              <div className="text-sm text-gray-600 mb-2">3rd Place</div>
              <div className="font-bold text-gray-900 mb-1">{getEmailDisplay(leaders[2].email)}</div>
              <div className="text-xl font-bold text-blue-600">{leaders[2].total_xp} XP</div>
              <div className="text-sm text-gray-600 mt-2">{leaders[2].lessons_completed} lessons</div>
            </div>
          </div>
        )}

        {/* Full Leaderboard */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-4 bg-gray-50 border-b border-gray-200">
            <h3 className="font-bold text-gray-900">Full Rankings</h3>
          </div>
          
          <div className="divide-y divide-gray-200">
            {leaders.length === 0 ? (
              <div className="p-8 text-center text-gray-600">
                No learners yet. Be the first!
              </div>
            ) : (
              leaders.map((leader, index) => {
                const isCurrentUser = leader.user_id === user?.id
                return (
                  <div 
                    key={leader.id}
                    className={`p-4 flex items-center justify-between hover:bg-gray-50 transition-colors ${
                      isCurrentUser ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="text-2xl font-bold w-12 text-center">
                        {getRankEmoji(index + 1)}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">
                          {getEmailDisplay(leader.email)}
                          {isCurrentUser && (
                            <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-1 rounded">You</span>
                          )}
                          {leader.is_premium && (
                            <span className="ml-2 text-xs bg-yellow-500 text-white px-2 py-1 rounded">⭐ Premium</span>
                          )}
                        </div>
                        <div className="text-sm text-gray-600">
                          {leader.lessons_completed} lessons • {leader.streak_count} day streak 🔥
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-blue-600">{leader.total_xp}</div>
                      <div className="text-xs text-gray-500">XP</div>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </main>
    </div>
  )
}