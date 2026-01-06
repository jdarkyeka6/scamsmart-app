'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'
import DarkModeToggle from '../components/DarkModeToggle'

export default function Profile() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [progress, setProgress] = useState(null)
  const [completedLessons, setCompletedLessons] = useState([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)
  const [displayName, setDisplayName] = useState('')

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/signin')
      return
    }
    setUser(user)
    await loadProgress(user.id)
    await loadCompletedLessons(user.id)
  }

  const loadProgress = async (userId) => {
    try {
      const { data } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId)
        .single()
      
      setProgress(data)
      setDisplayName(data?.display_name || user?.email?.split('@')[0] || 'User')
      setLoading(false)
    } catch (error) {
      console.error('Error loading progress:', error)
      setLoading(false)
    }
  }

  const loadCompletedLessons = async (userId) => {
    try {
      const { data } = await supabase
        .from('lesson_completions')
        .select('*')
        .eq('user_id', userId)
        .order('completed_at', { ascending: false })
      
      setCompletedLessons(data || [])
    } catch (error) {
      console.error('Error loading lessons:', error)
    }
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const saveDisplayName = async () => {
    try {
      const { error } = await supabase
        .from('user_progress')
        .update({ display_name: displayName })
        .eq('user_id', user.id)

      if (error) throw error
      
      setEditing(false)
      alert('Display name updated!')
    } catch (error) {
      console.error('Error updating name:', error)
      alert('Failed to update name')
    }
  }

  const getLevel = () => Math.floor((progress?.total_xp || 0) / 500) + 1
  const getXPForNextLevel = () => {
    const currentLevel = getLevel()
    return currentLevel * 500
  }
  const getCurrentLevelXP = () => (progress?.total_xp || 0) % 500
  const getXPProgress = () => (getCurrentLevelXP() / 500) * 100

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Loading profile...</p>
        </div>
      </div>
    )
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
                <p className="text-xs text-gray-500 dark:text-gray-400">Your Profile</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <DarkModeToggle />
              <button
                onClick={() => router.push('/dashboard')}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
              >
                Dashboard
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
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-6 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-6">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-black shadow-xl">
              {displayName[0]?.toUpperCase() || 'U'}
            </div>

            {/* Info */}
            <div className="flex-1">
              {editing ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white dark:bg-gray-700"
                  />
                  <button
                    onClick={saveDisplayName}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditing(false)}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <h2 className="text-3xl font-black text-gray-900 dark:text-white">{displayName}</h2>
                  <button
                    onClick={() => setEditing(true)}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm"
                  >
                    ✏️ Edit
                  </button>
                </div>
              )}
              <p className="text-gray-600 dark:text-gray-400 text-sm">{user?.email}</p>
              {progress?.is_premium && (
                <span className="inline-block mt-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  ⭐ Premium Member
                </span>
              )}
            </div>

            {/* Level */}
            <div className="text-center">
              <div className="text-5xl font-black text-blue-600 dark:text-blue-400">
                {getLevel()}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">Level</p>
            </div>
          </div>

          {/* XP Progress */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Level {getLevel()} Progress
              </span>
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                {getCurrentLevelXP()} / 500 XP
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-500"
                style={{ width: `${getXPProgress()}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <StatCard icon="⭐" label="Total XP" value={progress?.total_xp || 0} color="blue" />
          <StatCard icon="📚" label="Lessons Completed" value={progress?.lessons_completed || 0} color="green" />
          <StatCard icon="🔥" label="Day Streak" value={progress?.streak_count || 0} color="orange" />
          <StatCard icon="🏆" label="Level" value={getLevel()} color="purple" />
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
          
          {completedLessons.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400 text-center py-8">
              No lessons completed yet. Start learning to see your progress!
            </p>
          ) : (
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {completedLessons.slice(0, 20).map((lesson) => (
                <div
                  key={lesson.id}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                >
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Lesson {lesson.lesson_id}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Completed {new Date(lesson.completed_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      +{lesson.xp_earned || 50} XP
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

function StatCard({ icon, label, value, color }) {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600',
    purple: 'from-purple-500 to-purple-600'
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <span className="text-3xl">{icon}</span>
        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${colorClasses[color]}`}></div>
      </div>
      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">{label}</p>
      <p className="text-3xl font-black text-gray-900 dark:text-white">{value}</p>
    </div>
  )
}