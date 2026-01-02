'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'

export default function Profile() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [progress, setProgress] = useState(null)
  const [completedLessons, setCompletedLessons] = useState([])
  const [loading, setLoading] = useState(true)

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
    loadData(user.id)
  }

  const loadData = async (userId) => {
    try {
      // Load progress
      const { data: progress } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId)
        .single()
      
      setProgress(progress)

      // Load completed lessons
      const { data: completions } = await supabase
        .from('lesson_completions')
        .select('*')
        .eq('user_id', userId)
        .order('completed_at', { ascending: false })
      
      setCompletedLessons(completions || [])
    } catch (error) {
      console.error('Error loading data:', error)
    } finally {
      setLoading(false)
    }
  }

  const calculateLevel = (xp) => {
    return Math.floor(xp / 500) + 1
  }

  const getXPForNextLevel = (xp) => {
    const currentLevel = calculateLevel(xp)
    const xpForNextLevel = currentLevel * 500
    return xpForNextLevel - xp
  }

  const getAchievements = () => {
    const achievements = []
    const xp = progress?.total_xp || 0
    const lessonsCompleted = completedLessons.length
    const streak = progress?.streak_count || 0

    if (lessonsCompleted >= 1) achievements.push({ icon: '🎓', name: 'First Steps', desc: 'Complete your first lesson' })
    if (lessonsCompleted >= 10) achievements.push({ icon: '📚', name: 'Knowledge Seeker', desc: 'Complete 10 lessons' })
    if (lessonsCompleted >= 50) achievements.push({ icon: '🏆', name: 'Scam Expert', desc: 'Complete 50 lessons' })
    if (lessonsCompleted >= 115) achievements.push({ icon: '👑', name: 'Master Detective', desc: 'Complete all 115 lessons' })
    if (streak >= 7) achievements.push({ icon: '🔥', name: 'Week Warrior', desc: 'Maintain a 7-day streak' })
    if (streak >= 30) achievements.push({ icon: '💪', name: 'Unstoppable', desc: 'Maintain a 30-day streak' })
    if (xp >= 1000) achievements.push({ icon: '⭐', name: 'XP Hunter', desc: 'Earn 1000 XP' })
    if (xp >= 5000) achievements.push({ icon: '💎', name: 'Elite Learner', desc: 'Earn 5000 XP' })

    return achievements
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    )
  }

  const level = calculateLevel(progress?.total_xp || 0)
  const xpForNext = getXPForNextLevel(progress?.total_xp || 0)
  const achievements = getAchievements()

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
            <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl text-white font-bold">
              {user?.email?.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{user?.email}</h2>
              <div className="flex items-center gap-4">
                <span className="text-lg text-gray-600">Level {level}</span>
                {progress?.is_premium && (
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ⭐ Premium
                  </span>
                )}
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Progress to Level {level + 1}</span>
                  <span className="text-sm text-gray-600">{xpForNext} XP to go</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all"
                    style={{width: `${((500 - xpForNext) / 500) * 100}%`}}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-2">⭐</div>
            <div className="text-3xl font-bold text-blue-600">{progress?.total_xp || 0}</div>
            <div className="text-sm text-gray-600">Total XP</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-2">📚</div>
            <div className="text-3xl font-bold text-green-600">{completedLessons.length}</div>
            <div className="text-sm text-gray-600">Lessons Completed</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-2">🔥</div>
            <div className="text-3xl font-bold text-orange-600">{progress?.streak_count || 0}</div>
            <div className="text-sm text-gray-600">Day Streak</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-2">🏆</div>
            <div className="text-3xl font-bold text-purple-600">{achievements.length}</div>
            <div className="text-sm text-gray-600">Achievements</div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Achievements</h2>
          
          {achievements.length === 0 ? (
            <p className="text-gray-600">Complete lessons to unlock achievements!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-2 border-yellow-300">
                  <div className="text-4xl">{achievement.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900">{achievement.name}</h3>
                    <p className="text-sm text-gray-600">{achievement.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          
          {completedLessons.length === 0 ? (
            <p className="text-gray-600">No lessons completed yet. Start learning!</p>
          ) : (
            <div className="space-y-3">
              {completedLessons.slice(0, 10).map((completion) => (
                <div key={completion.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900">Lesson {completion.lesson_id}</h3>
                    <p className="text-sm text-gray-600">
                      Score: {completion.score}/{completion.total_questions} ({Math.round((completion.score / completion.total_questions) * 100)}%)
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-yellow-600 font-bold">+{completion.xp_earned} XP</div>
                    <div className="text-xs text-gray-500">
                      {new Date(completion.completed_at).toLocaleDateString()}
                    </div>
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