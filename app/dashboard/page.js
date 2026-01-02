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
  const [showPremiumModal, setShowPremiumModal] = useState(false)
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

  const handlePremiumCheckout = async () => {
    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userEmail: user.email,
          userId: user.id
        })
      })
      
      const { url, error } = await response.json()
      
      if (error) {
        alert('Error: ' + error)
        return
      }
      
      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong. Please try again!')
    }
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="ScamSmart" className="w-10 h-10" />
              <h1 className="text-2xl font-bold text-gray-900">ScamSmart</h1>
            </div>
            <div className="flex items-center gap-4">
              {!progress?.is_premium && (
                <button
                  onClick={() => setShowPremiumModal(true)}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-2 rounded-full font-bold hover:from-yellow-500 hover:to-yellow-700 shadow-lg transform hover:scale-105 transition-all"
                >
                  ⭐ Go Premium
                </button>
              )}
              {progress?.is_premium && (
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-full font-bold premium-glow">
                  ⭐ Premium Member
                </div>
              )}
              <button 
                onClick={handleSignOut}
                className="text-gray-600 hover:text-gray-900"
              >
                Sign Out
              </button>
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex gap-2 border-t border-gray-200 pt-4">
            <button
              className="px-4 py-2 rounded-lg font-semibold bg-blue-600 text-white"
            >
              📚 Dashboard
            </button>
            <button
              onClick={() => router.push('/profile')}
              className="px-4 py-2 rounded-lg font-semibold bg-white text-gray-700 hover:bg-gray-100 transition-all"
            >
              👤 Profile
            </button>
            <button
              onClick={() => router.push('/leaderboard')}
              className="px-4 py-2 rounded-lg font-semibold bg-white text-gray-700 hover:bg-gray-100 transition-all"
            >
              🏆 Leaderboard
            </button>
            <button
              onClick={() => router.push('/settings')}
              className="px-4 py-2 rounded-lg font-semibold bg-white text-gray-700 hover:bg-gray-100 transition-all"
            >
              ⚙️ Settings
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600 font-semibold">Total XP</h3>
              <span className="text-3xl">⭐</span>
            </div>
            <p className="text-4xl font-bold text-blue-600">{progress?.total_xp || 0}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600 font-semibold">Lessons Completed</h3>
              <span className="text-3xl">📚</span>
            </div>
            <p className="text-4xl font-bold text-green-600">{completedLessons.length} / 115</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600 font-semibold">Day Streak</h3>
              <span className="text-3xl">🔥</span>
            </div>
            <p className="text-4xl font-bold text-orange-600">{progress?.streak_count || 0}</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl shadow-lg p-6 mb-8 flex items-center gap-4">
          <img src="/logo.png" alt="Mibo" className="w-16 h-16" />
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Hi, I'm Mibo! 👋</h2>
            <p className="text-gray-700">Your AI companion helping you master scam detection. Complete lessons in order to unlock new sections!</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Learning Path (23 Sections • 115 Lessons)</h2>
          
          <div className="space-y-4">
            {sections.map((section) => {
              const { completed, total } = getSectionProgress(section.id)
              const isExpanded = expandedSections[section.id]
              const sectionUnlocked = section.id === 1 || completedLessons.includes(getLessonId(section.id - 1, 5))

              return (
                <div key={section.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <button
                    onClick={() => sectionUnlocked && toggleSection(section.id)}
                    className={`w-full p-6 flex items-center justify-between ${
                      sectionUnlocked ? 'hover:bg-gray-50 cursor-pointer' : 'opacity-50 cursor-not-allowed'
                    }`}
                    disabled={!sectionUnlocked}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{section.emoji}</div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-gray-900">
                          {section.id}. {section.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {completed}/{total} lessons completed
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {!sectionUnlocked && <span className="text-gray-400">🔒 Locked</span>}
                      {completed === total && <span className="text-green-600">✓ Complete</span>}
                      {sectionUnlocked && (
                        <span className="text-gray-400">{isExpanded ? '▼' : '▶'}</span>
                      )}
                    </div>
                  </button>

                  {isExpanded && sectionUnlocked && (
                    <div className="border-t border-gray-200 p-4 bg-gray-50">
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
                                className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                                  isCompleted
                                    ? 'bg-green-50 border-green-300'
                                    : isUnlocked
                                      ? 'bg-white border-blue-300 hover:border-blue-500 hover:shadow cursor-pointer'
                                      : 'bg-gray-100 border-gray-300 opacity-50 cursor-not-allowed'
                                }`}
                              >
                                <div className="flex items-center justify-between mb-2">
                                  <span className="font-bold text-gray-900">{section.id}.{lessonType.num}</span>
                                  {isCompleted && <span className="text-green-600">✓</span>}
                                  {!isUnlocked && <span className="text-gray-400">🔒</span>}
                                </div>
                                <p className="text-sm text-gray-700">{lessonType.title}</p>
                              </button>
                              
                              {isCompleted && progress?.is_premium && (
                                <button
                                  onClick={() => router.push(`/lesson/${lessonId}?review=true`)}
                                  className="w-full bg-purple-100 border-2 border-purple-300 text-purple-700 py-2 px-3 rounded-lg text-sm font-semibold hover:bg-purple-200 transition-all"
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
        </div>
      </main>

      {showPremiumModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-white">⭐ ScamSmart Premium</h2>
                <button 
                  onClick={() => setShowPremiumModal(false)}
                  className="text-white hover:bg-yellow-700 rounded-full w-10 h-10 flex items-center justify-center text-2xl"
                >
                  ✕
                </button>
              </div>
              <p className="text-yellow-50 mt-2">Unlock unlimited Mibo AI and advanced features</p>
            </div>

            <div className="p-6">
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-xl p-6 mb-6 text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">$5<span className="text-2xl text-gray-600">/month</span></div>
                <p className="text-gray-600">Cancel anytime • 7-day free trial</p>
              </div>

              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What You Get:</h3>
                
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🔄</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Review Completed Lessons</h4>
                    <p className="text-sm text-gray-600">Practice as many times as you want</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">💬</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Unlimited Mibo Chat</h4>
                    <p className="text-sm text-gray-600">Ask Mibo anything, anytime</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">🚫</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Ad-Free Experience</h4>
                    <p className="text-sm text-gray-600">No interruptions while you learn</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Exclusive Badges & Achievements</h4>
                    <p className="text-sm text-gray-600">Show off your scam-spotting skills</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">🔔</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Early Scam Alerts</h4>
                    <p className="text-sm text-gray-600">Get notified about new scams before everyone else</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={handlePremiumCheckout}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-700 shadow-lg transform hover:scale-105 transition-all"
                >
                  Start 7-Day Free Trial 🚀
                </button>
                <button 
                  onClick={() => setShowPremiumModal(false)}
                  className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300"
                >
                  Maybe Later
                </button>
              </div>

              <p className="text-xs text-gray-500 text-center mt-4">
                Subscription auto-renews. Cancel anytime from your account settings.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}