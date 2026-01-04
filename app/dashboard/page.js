'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'
import { sections, lessonTypes, getLessonId, isLessonUnlocked } from '../lib/sections'

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [progress, setProgress] = useState(null)
  const [completedLessons, setCompletedLessons] = useState([])
  const [loading, setLoading] = useState(true)
  const [expandedSections, setExpandedSections] = useState({1: true})

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
      let { data: progress } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId)
        .single()

      if (!progress) {
        const { data: newProgress } = await supabase
          .from('user_progress')
          .insert({
            user_id: userId,
            total_xp: 0,
            lessons_completed: 0,
            streak_count: 0,
            last_lesson_date: null,
            email: user.email
          })
          .select()
          .single()
        
        setProgress(newProgress)
      } else {
        setProgress(progress)
      }
    } catch (error) {
      console.error('Error loading progress:', error)
    } finally {
      setLoading(false)
    }
  }

  const loadCompletedLessons = async (userId) => {
    try {
      const { data } = await supabase
        .from('lesson_completions')
        .select('lesson_id')
        .eq('user_id', userId)
      
      if (data) {
        setCompletedLessons(data.map(l => l.lesson_id))
      }
    } catch (error) {
      console.error('Error loading completed lessons:', error)
    }
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  const getSectionProgress = (sectionId) => {
    const sectionLessons = lessonTypes.map(lt => getLessonId(sectionId, lt.num))
    const completed = sectionLessons.filter(l => completedLessons.includes(l)).length
    return { completed, total: 5 }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading your progress...</p>
        </div>
      </div>
    )
  }

  const completionPercentage = Math.round((completedLessons.length / 115) * 100)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="ScamSmart" className="w-12 h-12 drop-shadow-md" />
              <div>
                <h1 className="text-2xl font-black text-gray-900">ScamSmart</h1>
                <p className="text-xs text-gray-500">Think Before You Click</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              {!progress?.is_premium && (
                <button
                  onClick={() => router.push('/premium-feedback')}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-5 py-2.5 rounded-full font-bold hover:from-yellow-500 hover:to-yellow-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center gap-2"
                >
                  <span className="text-lg">⭐</span>
                  <span>Get Premium FREE</span>
                </button>
              )}
              {progress?.is_premium && (
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-4 py-2 rounded-full font-bold shadow-md flex items-center gap-2">
                  <span>⭐</span>
                  <span>Premium</span>
                </div>
              )}
              <button 
                onClick={handleSignOut}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex gap-2 border-t border-gray-100 pt-3 overflow-x-auto pb-1">
            <NavTab active onClick={() => {}}>📚 Learn</NavTab>
            <NavTab onClick={() => router.push('/profile')}>👤 Profile</NavTab>
            <NavTab onClick={() => router.push('/leaderboard')}>🏆 Leaderboard</NavTab>
            <NavTab onClick={() => router.push('/settings')}>⚙️ Settings</NavTab>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatCard 
            icon="⭐" 
            label="Total XP" 
            value={progress?.total_xp || 0}
            color="blue"
          />
          <StatCard 
            icon="📚" 
            label="Lessons" 
            value={`${completedLessons.length}/115`}
            subtext={`${completionPercentage}% complete`}
            color="green"
          />
          <StatCard 
            icon="🔥" 
            label="Streak" 
            value={`${progress?.streak_count || 0} days`}
            color="orange"
          />
          <StatCard 
            icon="🎯" 
            label="Level" 
            value={Math.floor((progress?.total_xp || 0) / 500) + 1}
            color="purple"
          />
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-900">Overall Progress</h3>
            <span className="text-sm font-semibold text-blue-600">{completionPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-500 ease-out"
              style={{width: `${completionPercentage}%`}}
            ></div>
          </div>
        </div>

        {/* Mibo Welcome */}
        <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-2xl shadow-sm p-6 mb-8 flex items-center gap-4 border border-blue-200">
          <img src="/logo.png" alt="Mibo" className="w-16 h-16 drop-shadow-lg" />
          <div className="flex-1">
            <h2 className="text-xl font-black text-gray-900 mb-1">Hey there! 👋</h2>
            <p className="text-gray-700">I'm Mibo, your AI scam detective. Complete lessons in order to unlock new sections and level up your protection skills!</p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Learning Path</h2>
          
          {sections.map((section) => {
            const { completed, total } = getSectionProgress(section.id)
            const isExpanded = expandedSections[section.id]
            const sectionUnlocked = section.id === 1 || completedLessons.includes(getLessonId(section.id - 1, 5))
            const isComplete = completed === total

            return (
              <div 
                key={section.id} 
                className={`bg-white rounded-2xl shadow-sm overflow-hidden border transition-all ${
                  sectionUnlocked ? 'border-gray-200 hover:shadow-md' : 'border-gray-100 opacity-60'
                }`}
              >
                <button
                  onClick={() => sectionUnlocked && toggleSection(section.id)}
                  className={`w-full p-6 flex items-center justify-between ${
                    sectionUnlocked ? 'hover:bg-gray-50 cursor-pointer' : 'cursor-not-allowed'
                  } transition-colors`}
                  disabled={!sectionUnlocked}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">{section.emoji}</div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-gray-900">
                        {section.id}. {section.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm text-gray-600">{completed}/{total} completed</span>
                        {!sectionUnlocked && <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">🔒 Locked</span>}
                        {isComplete && <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">✓ Complete</span>}
                      </div>
                    </div>
                  </div>
                  {sectionUnlocked && (
                    <span className="text-gray-400 text-xl">{isExpanded ? '▼' : '▶'}</span>
                  )}
                </button>

                {isExpanded && sectionUnlocked && (
                  <div className="border-t border-gray-100 p-5 bg-gray-50">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                      {lessonTypes.map((lessonType) => {
                        const lessonId = getLessonId(section.id, lessonType.num)
                        const isCompleted = completedLessons.includes(lessonId)
                        const isUnlocked = isLessonUnlocked(lessonId, completedLessons)

                        return (
                          <div key={lessonType.num} className="space-y-2">
                            <button
                              onClick={() => isUnlocked && router.push(`/lesson/${lessonId}`)}
                              disabled={!isUnlocked}
                              className={`w-full p-4 rounded-xl text-left transition-all ${
                                isCompleted
                                  ? 'bg-green-50 border-2 border-green-400 shadow-sm'
                                  : isUnlocked
                                    ? 'bg-white border-2 border-blue-400 hover:border-blue-500 hover:shadow-md cursor-pointer'
                                    : 'bg-gray-100 border-2 border-gray-200 opacity-50 cursor-not-allowed'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-black text-gray-900">{section.id}.{lessonType.num}</span>
                                {isCompleted && <span className="text-green-600 text-lg">✓</span>}
                                {!isUnlocked && <span className="text-gray-400">🔒</span>}
                              </div>
                              <p className="text-sm font-semibold text-gray-700">{lessonType.title}</p>
                            </button>
                            
                            {isCompleted && progress?.is_premium && (
                              <button
                                onClick={() => router.push(`/lesson/${lessonId}?review=true`)}
                                className="w-full bg-purple-100 border-2 border-purple-400 text-purple-700 py-2 px-3 rounded-xl text-sm font-bold hover:bg-purple-200 transition-all"
                              >
                                🔄 Review
                              </button>
                            )}
                          </div>
                        )
                      })}
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

function NavTab({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${
        active 
          ? 'bg-blue-600 text-white shadow-sm' 
          : 'bg-white text-gray-700 hover:bg-gray-100'
      }`}
    >
      {children}
    </button>
  )
}

function StatCard({ icon, label, value, subtext, color }) {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600',
    purple: 'from-purple-500 to-purple-600'
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <span className="text-3xl">{icon}</span>
        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${colorClasses[color]}`}></div>
      </div>
      <p className="text-sm font-semibold text-gray-600 mb-1">{label}</p>
      <p className="text-3xl font-black text-gray-900">{value}</p>
      {subtext && <p className="text-xs text-gray-500 mt-1">{subtext}</p>}
    </div>
  )
}