'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'
import DarkModeToggle from '../components/DarkModeToggle'

// Define all available achievements
const ACHIEVEMENTS = [
  {
    id: 'first_lesson',
    title: 'Getting Started',
    description: 'Complete your first lesson',
    emoji: '🎯',
    requirement: 1,
    type: 'lessons_completed'
  },
  {
    id: 'five_lessons',
    title: 'Quick Learner',
    description: 'Complete 5 lessons',
    emoji: '📚',
    requirement: 5,
    type: 'lessons_completed'
  },
  {
    id: 'ten_lessons',
    title: 'Dedicated Student',
    description: 'Complete 10 lessons',
    emoji: '⭐',
    requirement: 10,
    type: 'lessons_completed'
  },
  {
    id: 'twenty_five_lessons',
    title: 'Scam Detective',
    description: 'Complete 25 lessons',
    emoji: '🕵️',
    requirement: 25,
    type: 'lessons_completed'
  },
  {
    id: 'fifty_lessons',
    title: 'Expert Protector',
    description: 'Complete 50 lessons',
    emoji: '🛡️',
    requirement: 50,
    type: 'lessons_completed'
  },
  {
    id: 'all_lessons',
    title: 'Master of Security',
    description: 'Complete all 115 lessons',
    emoji: '👑',
    requirement: 115,
    type: 'lessons_completed'
  },
  {
    id: 'first_streak',
    title: 'Consistency',
    description: 'Maintain a 3-day streak',
    emoji: '🔥',
    requirement: 3,
    type: 'streak_count'
  },
  {
    id: 'week_streak',
    title: 'Week Warrior',
    description: 'Maintain a 7-day streak',
    emoji: '📅',
    requirement: 7,
    type: 'streak_count'
  },
  {
    id: 'month_streak',
    title: 'Monthly Master',
    description: 'Maintain a 30-day streak',
    emoji: '🌟',
    requirement: 30,
    type: 'streak_count'
  },
  {
    id: 'hundred_streak',
    title: 'Century Club',
    description: 'Maintain a 100-day streak',
    emoji: '💯',
    requirement: 100,
    type: 'streak_count'
  },
  {
    id: 'thousand_xp',
    title: 'XP Collector',
    description: 'Earn 1,000 XP',
    emoji: '💎',
    requirement: 1000,
    type: 'total_xp'
  },
  {
    id: 'five_thousand_xp',
    title: 'XP Champion',
    description: 'Earn 5,000 XP',
    emoji: '💰',
    requirement: 5000,
    type: 'total_xp'
  },
  {
    id: 'ten_thousand_xp',
    title: 'XP Legend',
    description: 'Earn 10,000 XP',
    emoji: '🏆',
    requirement: 10000,
    type: 'total_xp'
  },
  {
    id: 'premium_member',
    title: 'Premium Member',
    description: 'Upgrade to Premium',
    emoji: '⭐',
    requirement: true,
    type: 'is_premium'
  },
  {
    id: 'section_master',
    title: 'Section Master',
    description: 'Complete an entire section',
    emoji: '📖',
    requirement: 1,
    type: 'sections_completed'
  },
  {
    id: 'five_sections',
    title: 'Multi-Specialist',
    description: 'Complete 5 sections',
    emoji: '🎓',
    requirement: 5,
    type: 'sections_completed'
  },
  {
    id: 'early_bird',
    title: 'Early Bird',
    description: 'Complete a lesson before 8 AM',
    emoji: '🌅',
    requirement: 1,
    type: 'special'
  },
  {
    id: 'night_owl',
    title: 'Night Owl',
    description: 'Complete a lesson after 10 PM',
    emoji: '🦉',
    requirement: 1,
    type: 'special'
  },
  {
    id: 'speed_demon',
    title: 'Speed Demon',
    description: 'Complete 5 lessons in one day',
    emoji: '⚡',
    requirement: 5,
    type: 'special'
  },
  {
    id: 'perfectionist',
    title: 'Perfectionist',
    description: 'Get 100% on 10 lessons',
    emoji: '💯',
    requirement: 10,
    type: 'special'
  }
]

export default function Achievements() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [progress, setProgress] = useState(null)
  const [unlockedAchievements, setUnlockedAchievements] = useState([])
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
    await loadProgress(user.id)
  }

  const loadProgress = async (userId) => {
    try {
      const { data } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId)
        .single()
      
      setProgress(data)
      checkUnlockedAchievements(data)
      setLoading(false)
    } catch (error) {
      console.error('Error loading progress:', error)
      setLoading(false)
    }
  }

  const checkUnlockedAchievements = (progressData) => {
    if (!progressData) return

    const unlocked = ACHIEVEMENTS.filter(achievement => {
      switch (achievement.type) {
        case 'lessons_completed':
          return (progressData.lessons_completed || 0) >= achievement.requirement
        case 'streak_count':
          return (progressData.streak_count || 0) >= achievement.requirement
        case 'total_xp':
          return (progressData.total_xp || 0) >= achievement.requirement
        case 'is_premium':
          return progressData.is_premium === true
        case 'sections_completed':
          return (progressData.sections_completed || 0) >= achievement.requirement
        case 'special':
          // These would be tracked separately - for now just return false
          return false
        default:
          return false
      }
    })

    setUnlockedAchievements(unlocked.map(a => a.id))
  }

  const getProgressForAchievement = (achievement) => {
    if (!progress) return 0

    switch (achievement.type) {
      case 'lessons_completed':
        return Math.min((progress.lessons_completed || 0) / achievement.requirement * 100, 100)
      case 'streak_count':
        return Math.min((progress.streak_count || 0) / achievement.requirement * 100, 100)
      case 'total_xp':
        return Math.min((progress.total_xp || 0) / achievement.requirement * 100, 100)
      case 'is_premium':
        return progress.is_premium ? 100 : 0
      case 'sections_completed':
        return Math.min((progress.sections_completed || 0) / achievement.requirement * 100, 100)
      default:
        return 0
    }
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Loading achievements...</p>
        </div>
      </div>
    )
  }

  const unlockedCount = unlockedAchievements.length
  const totalCount = ACHIEVEMENTS.length

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
                <p className="text-xs text-gray-500 dark:text-gray-400">Achievements</p>
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

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2">🏆 Achievements</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Unlock badges as you learn!</p>
          
          {/* Progress Stats */}
          <div className="inline-block bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg border border-gray-100 dark:border-gray-700">
            <span className="text-2xl font-black text-blue-600 dark:text-blue-400">{unlockedCount}</span>
            <span className="text-gray-600 dark:text-gray-400 mx-2">/</span>
            <span className="text-lg font-bold text-gray-900 dark:text-white">{totalCount}</span>
            <span className="text-gray-600 dark:text-gray-400 ml-2">unlocked</span>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((achievement) => {
            const isUnlocked = unlockedAchievements.includes(achievement.id)
            const progressPercent = getProgressForAchievement(achievement)

            return (
              <div
                key={achievement.id}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border transition-all ${
                  isUnlocked
                    ? 'border-yellow-400 dark:border-yellow-600 shadow-yellow-200 dark:shadow-yellow-900/50'
                    : 'border-gray-100 dark:border-gray-700 opacity-75'
                }`}
              >
                {/* Badge Icon */}
                <div className="text-center mb-4">
                  <div className={`text-6xl mb-2 ${isUnlocked ? '' : 'grayscale opacity-40'}`}>
                    {achievement.emoji}
                  </div>
                  {isUnlocked && (
                    <div className="text-yellow-500 text-2xl font-black">✓ UNLOCKED</div>
                  )}
                </div>

                {/* Title & Description */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {achievement.description}
                  </p>
                </div>

                {/* Progress Bar */}
                {!isUnlocked && (
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                        Progress
                      </span>
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                        {progressPercent.toFixed(0)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}