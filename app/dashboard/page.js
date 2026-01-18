'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'
import DarkModeToggle from '../components/DarkModeToggle'
import HeartsDisplay from '../components/HeartsDisplay'
import { updateUserHearts } from '../lib/hearts'
import { LessonPathCompact } from '../components/LessonPath'

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [progress, setProgress] = useState(null)
  const [completedLessons, setCompletedLessons] = useState([])
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)

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
      // Update hearts first (handles regeneration)
      await updateUserHearts(userId, supabase)
      
      const { data } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId)
        .single()

      setProgress(data)

      // Load completed lessons for lesson path
      const { data: lessons } = await supabase
        .from('lesson_completions')
        .select('lesson_id')
        .eq('user_id', userId)

      setCompletedLessons(lessons?.map(l => l.lesson_id) || [])
      setLoading(false)
    } catch (error) {
      console.error('Error loading progress:', error)
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const getLevel = () => Math.floor((progress?.total_xp || 0) / 500) + 1

  const getXPForNextLevel = () => {
    const currentLevel = getLevel()
    return currentLevel * 500
  }

  const handleShare = (platform) => {
    const shareText = `🎯 I just completed ${progress?.lessons_completed || 0} scam detection lessons on ScamSmart and earned ${progress?.total_xp || 0} XP! 

Join me in learning how to spot scams and protect yourself online! 🛡️

#ScamSmart #CyberSecurity`

    const shareUrl = 'https://scamsmart.click'
    const encodedText = encodeURIComponent(shareText)
    const encodedUrl = encodeURIComponent(shareUrl)

    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      gmail: `https://mail.google.com/mail/?view=cm&fs=1&su=${encodeURIComponent('Check out ScamSmart!')}&body=${encodedText}%0A%0A${encodedUrl}`,
      whatsapp: `https://wa.me/?text=${encodedText}%0A%0A${encodedUrl}`,
      reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodeURIComponent('ScamSmart - Learn to Detect Scams')}`
    }

    window.open(urls[platform], '_blank', 'width=600,height=400')
  }

  const copyToClipboard = () => {
    const shareText = `🎯 I just completed ${progress?.lessons_completed || 0} scam detection lessons on ScamSmart and earned ${progress?.total_xp || 0} XP! 

Join me in learning how to spot scams and protect yourself online! 🛡️

https://scamsmart.click`

    navigator.clipboard.writeText(shareText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-3 md:px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <img src="/logo.png" alt="ScamSmart" className="w-10 h-10 md:w-12 md:h-12 drop-shadow-md" />
              <div>
                <h1 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white">ScamSmart</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">Think Before You Click</p>
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
                onClick={() => router.push('/browse')} 
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors text-sm md:text-base"
              >
                Browse
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

      <main className="max-w-7xl mx-auto px-3 md:px-4 py-6 md:py-8">
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2">
            Welcome back, {progress?.display_name || 'User'}! 👋
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Ready to continue your scam detection journey?</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
          <QuickAction
            icon="🎯"
            label="Daily Challenge"
            onClick={() => router.push('/daily-challenge')}
          />
          <QuickAction
            icon="💬"
            label="Give Feedback"
            onClick={() => router.push('/premium-feedback')}
          />
          <QuickAction
            icon="🎓"
            label="Certificates"
            onClick={() => router.push('/certificates')}
          />
          <QuickAction
            icon="🎁"
            label="Refer Friends"
            onClick={() => router.push('/referrals')}
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
          <StatCard icon="⭐" label="Total XP" value={progress?.total_xp || 0} color="yellow" />
          <StatCard icon="📚" label="Lessons Completed" value={`${progress?.lessons_completed || 0}/115`} color="blue" />
          <StatCard icon="🔥" label="Day Streak" value={progress?.streak_count || 0} color="orange" />
          <StatCard icon="🏆" label="Level" value={getLevel()} color="purple" />
        </div>

        {/* Hearts Display */}
        <div className="mb-6 md:mb-8">
          <HeartsDisplay 
            hearts={progress?.hearts || 0}
            isPremium={progress?.is_premium || false}
            lastRegenTime={progress?.last_heart_regen}
            compact={false}
          />
        </div>

        {/* Share Progress */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-4 md:p-6 border border-gray-100 dark:border-gray-700 mb-6 md:mb-8">
          <h3 className="text-lg md:text-xl font-black text-gray-900 dark:text-white mb-3 md:mb-4">📢 Share Your Progress</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-3 md:mb-4 text-xs md:text-sm">
            Inspire your friends and family to learn scam detection!
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
            <button
              onClick={() => handleShare('twitter')}
              className="flex items-center justify-center gap-1 md:gap-2 bg-blue-500 hover:bg-blue-600 text-white px-2 md:px-4 py-2 md:py-3 rounded-lg font-semibold transition-colors text-xs md:text-sm"
            >
              <span>🐦</span>
              <span className="hidden sm:inline">Twitter</span>
            </button>

            <button
              onClick={() => handleShare('facebook')}
              className="flex items-center justify-center gap-1 md:gap-2 bg-blue-600 hover:bg-blue-700 text-white px-2 md:px-4 py-2 md:py-3 rounded-lg font-semibold transition-colors text-xs md:text-sm"
            >
              <span>📘</span>
              <span className="hidden sm:inline">Facebook</span>
            </button>

            <button
              onClick={() => handleShare('linkedin')}
              className="flex items-center justify-center gap-1 md:gap-2 bg-blue-700 hover:bg-blue-800 text-white px-2 md:px-4 py-2 md:py-3 rounded-lg font-semibold transition-colors text-xs md:text-sm"
            >
              <span>💼</span>
              <span className="hidden sm:inline">LinkedIn</span>
            </button>

            <button
              onClick={() => handleShare('gmail')}
              className="flex items-center justify-center gap-1 md:gap-2 bg-red-500 hover:bg-red-600 text-white px-2 md:px-4 py-2 md:py-3 rounded-lg font-semibold transition-colors text-xs md:text-sm"
            >
              <span>📧</span>
              <span className="hidden sm:inline">Gmail</span>
            </button>

            <button
              onClick={() => handleShare('whatsapp')}
              className="flex items-center justify-center gap-1 md:gap-2 bg-green-500 hover:bg-green-600 text-white px-2 md:px-4 py-2 md:py-3 rounded-lg font-semibold transition-colors text-xs md:text-sm"
            >
              <span>💬</span>
              <span className="hidden sm:inline">WhatsApp</span>
            </button>

            <button
              onClick={() => handleShare('reddit')}
              className="flex items-center justify-center gap-1 md:gap-2 bg-orange-500 hover:bg-orange-600 text-white px-2 md:px-4 py-2 md:py-3 rounded-lg font-semibold transition-colors text-xs md:text-sm"
            >
              <span>🤖</span>
              <span className="hidden sm:inline">Reddit</span>
            </button>

            <button
              onClick={copyToClipboard}
              className="col-span-2 flex items-center justify-center gap-1 md:gap-2 bg-gray-700 hover:bg-gray-800 text-white px-2 md:px-4 py-2 md:py-3 rounded-lg font-semibold transition-colors text-xs md:text-sm"
            >
              <span>{copied ? '✅' : '📋'}</span>
              <span>{copied ? 'Copied!' : 'Copy Link'}</span>
            </button>
          </div>
        </div>

        {/* Premium CTA */}
        {!progress?.is_premium && (
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-4 md:p-6 mb-6 md:mb-8 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left w-full md:flex-1">
                <h3 className="text-xl md:text-2xl font-black text-white mb-2">⭐ Want Premium FREE?</h3>
                <p className="text-white/90 mb-4 text-sm md:text-base">
                  Share your feedback and get 1 week of Premium absolutely FREE! Or upgrade for just $5/month.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <button
                    onClick={() => router.push('/premium-feedback')}
                    className="bg-white text-yellow-600 px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-md text-sm md:text-base"
                  >
                    Give Feedback (FREE Premium!)
                  </button>
                  <button
                    onClick={() => router.push('/premium')}
                    className="bg-yellow-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold hover:bg-yellow-700 transition-colors shadow-md text-sm md:text-base"
                  >
                    Or Upgrade Now →
                  </button>
                </div>
              </div>
              <div className="hidden lg:block text-6xl md:text-8xl">🌟</div>
            </div>
          </div>
        )}

        {/* Start Learning Button */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 md:p-8 text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-3 md:mb-4">Ready to Learn?</h3>
          <p className="text-white/90 mb-4 md:mb-6 text-sm md:text-base">
            Master scam detection with {115 - (progress?.lessons_completed || 0)} lessons waiting for you!
          </p>
          <button
            onClick={() => router.push('/browse')}
            className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-black text-base md:text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Browse All Lessons →
          </button>
        </div>
      </main>
    </div>
  )
}

function QuickAction({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 md:p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md hover:scale-105 transition-all text-center"
    >
      <div className="text-3xl md:text-4xl mb-2">{icon}</div>
      <p className="text-xs md:text-sm font-bold text-gray-900 dark:text-white">{label}</p>
    </button>
  )
}

function StatCard({ icon, label, value, color }) {
  const colorClasses = {
    yellow: 'from-yellow-500 to-yellow-600',
    blue: 'from-blue-500 to-blue-600',
    orange: 'from-orange-500 to-orange-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600'
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-4 md:p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2 md:mb-3">
        <span className="text-2xl md:text-4xl">{icon}</span>
        <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full bg-gradient-to-r ${colorClasses[color]}`}></div>
      </div>
      <p className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">{label}</p>
      <p className="text-2xl md:text-4xl font-black text-gray-900 dark:text-white">{value}</p>
    </div>
  )
}