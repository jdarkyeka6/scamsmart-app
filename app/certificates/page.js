'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'
import DarkModeToggle from '../components/DarkModeToggle'

export default function Certificates() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [progress, setProgress] = useState(null)
  const [certificates, setCertificates] = useState([])
  const [loading, setLoading] = useState(true)
  const [generating, setGenerating] = useState(null)

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
      generateCertificatesList(data)
      setLoading(false)
    } catch (error) {
      console.error('Error loading progress:', error)
      setLoading(false)
    }
  }

  const generateCertificatesList = (progressData) => {
    const lessonsCompleted = progressData?.lessons_completed || 0
    const certs = []

    // Certificate milestones: 10, 25, 50, 75, 100, 115 (all lessons)
    const milestones = [
      { lessons: 10, title: "ScamSmart Novice", emoji: "🎯", color: "from-blue-400 to-blue-600" },
      { lessons: 25, title: "Scam Detector", emoji: "🔍", color: "from-green-400 to-green-600" },
      { lessons: 50, title: "Security Expert", emoji: "🛡️", color: "from-purple-400 to-purple-600" },
      { lessons: 75, title: "Fraud Fighter", emoji: "⚔️", color: "from-red-400 to-red-600" },
      { lessons: 100, title: "Master Guardian", emoji: "👑", color: "from-yellow-400 to-yellow-600" },
      { lessons: 115, title: "ScamSmart Legend", emoji: "🏆", color: "from-pink-400 to-pink-600" }
    ]

    milestones.forEach(milestone => {
      certs.push({
        ...milestone,
        earned: lessonsCompleted >= milestone.lessons,
        progress: Math.min((lessonsCompleted / milestone.lessons) * 100, 100)
      })
    })

    setCertificates(certs)
  }

  const downloadCertificate = async (cert) => {
    if (!cert.earned) return

    setGenerating(cert.lessons)

    try {
      // Generate certificate canvas
      const canvas = document.createElement('canvas')
      canvas.width = 1200
      canvas.height = 900
      const ctx = canvas.getContext('2d')

      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      if (cert.color === "from-blue-400 to-blue-600") {
        gradient.addColorStop(0, '#60a5fa')
        gradient.addColorStop(1, '#2563eb')
      } else if (cert.color === "from-green-400 to-green-600") {
        gradient.addColorStop(0, '#4ade80')
        gradient.addColorStop(1, '#16a34a')
      } else if (cert.color === "from-purple-400 to-purple-600") {
        gradient.addColorStop(0, '#c084fc')
        gradient.addColorStop(1, '#9333ea')
      } else if (cert.color === "from-red-400 to-red-600") {
        gradient.addColorStop(0, '#f87171')
        gradient.addColorStop(1, '#dc2626')
      } else if (cert.color === "from-yellow-400 to-yellow-600") {
        gradient.addColorStop(0, '#facc15')
        gradient.addColorStop(1, '#ca8a04')
      } else if (cert.color === "from-pink-400 to-pink-600") {
        gradient.addColorStop(0, '#f472b6')
        gradient.addColorStop(1, '#db2777')
      }

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // White border
      ctx.strokeStyle = '#ffffff'
      ctx.lineWidth = 20
      ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80)

      // Inner border
      ctx.strokeStyle = '#ffffff'
      ctx.lineWidth = 3
      ctx.strokeRect(70, 70, canvas.width - 140, canvas.height - 140)

      // Title
      ctx.fillStyle = '#ffffff'
      ctx.font = 'bold 72px Arial'
      ctx.textAlign = 'center'
      ctx.fillText('CERTIFICATE OF ACHIEVEMENT', canvas.width / 2, 180)

      // Subtitle
      ctx.font = '36px Arial'
      ctx.fillText('This certifies that', canvas.width / 2, 260)

      // User name
      ctx.font = 'bold 64px Arial'
      const userName = user?.email?.split('@')[0] || 'Learner'
      ctx.fillText(userName, canvas.width / 2, 360)

      // Achievement text
      ctx.font = '36px Arial'
      ctx.fillText('has successfully completed', canvas.width / 2, 440)

      // Lessons count
      ctx.font = 'bold 72px Arial'
      ctx.fillText(`${cert.lessons} Lessons`, canvas.width / 2, 540)

      // Title earned
      ctx.font = '42px Arial'
      ctx.fillText('and earned the title of', canvas.width / 2, 620)

      // Badge title with emoji
      ctx.font = 'bold 56px Arial'
      ctx.fillText(`${cert.emoji} ${cert.title} ${cert.emoji}`, canvas.width / 2, 710)

      // Date
      ctx.font = '28px Arial'
      const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      ctx.fillText(today, canvas.width / 2, 800)

      // ScamSmart branding
      ctx.font = 'bold 32px Arial'
      ctx.fillText('ScamSmart', canvas.width / 2, 850)

      // Download
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `ScamSmart-Certificate-${cert.title.replace(/\s/g, '-')}.png`
        a.click()
        URL.revokeObjectURL(url)
        setGenerating(null)
      })

    } catch (error) {
      console.error('Error generating certificate:', error)
      alert('Failed to generate certificate')
      setGenerating(null)
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
          <p className="text-gray-600 dark:text-gray-400 text-lg">Loading certificates...</p>
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
                <p className="text-xs text-gray-500 dark:text-gray-400">Certificates</p>
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
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2">🎓 Your Certificates</h1>
          <p className="text-gray-600 dark:text-gray-400">Earn certificates as you progress through ScamSmart</p>
          <div className="mt-4 inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-6 py-2 rounded-full font-bold">
            {progress?.lessons_completed || 0} / 115 Lessons Completed
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.lessons}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-2 transition-all ${
                cert.earned 
                  ? 'border-green-400 dark:border-green-600' 
                  : 'border-gray-200 dark:border-gray-700 opacity-75'
              }`}
            >
              {/* Certificate Preview */}
              <div className={`bg-gradient-to-br ${cert.color} rounded-xl p-6 text-white mb-4 aspect-[4/3] flex flex-col items-center justify-center relative overflow-hidden`}>
                {/* Decorative border */}
                <div className="absolute inset-2 border-4 border-white/30 rounded-lg"></div>
                
                <div className="relative z-10 text-center">
                  <div className={`text-6xl mb-3 ${cert.earned ? '' : 'grayscale opacity-40'}`}>
                    {cert.emoji}
                  </div>
                  <h3 className="text-2xl font-black mb-2">{cert.title}</h3>
                  <p className="text-sm opacity-90">{cert.lessons} Lessons</p>
                  
                  {cert.earned && (
                    <div className="mt-3 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">
                      ✓ EARNED
                    </div>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="space-y-3">
                {cert.earned ? (
                  <>
                    <p className="text-center text-green-600 dark:text-green-400 font-bold text-sm">
                      🎉 Certificate Unlocked!
                    </p>
                    <button
                      onClick={() => downloadCertificate(cert)}
                      disabled={generating === cert.lessons}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 disabled:opacity-50 transition-colors"
                    >
                      {generating === cert.lessons ? '⏳ Generating...' : '📥 Download Certificate'}
                    </button>
                  </>
                ) : (
                  <>
                    <div className="text-center mb-2">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Progress: {Math.floor(cert.progress)}%
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {progress?.lessons_completed || 0} / {cert.lessons} lessons
                      </p>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div
                        className={`bg-gradient-to-r ${cert.color} h-3 rounded-full transition-all duration-500`}
                        style={{ width: `${cert.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                      {cert.lessons - (progress?.lessons_completed || 0)} more lessons to unlock
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {certificates.filter(c => !c.earned).length > 0 && (
          <div className="mt-12 text-center bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
              Keep Learning to Unlock More Certificates!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Complete lessons to earn all {certificates.length} certificates and become a ScamSmart Legend
            </p>
            <button
              onClick={() => router.push('/dashboard')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              Continue Learning →
            </button>
          </div>
        )}

        {/* All earned */}
        {certificates.every(c => c.earned) && (
          <div className="mt-12 text-center bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl shadow-xl p-12">
            <div className="text-8xl mb-4">🏆</div>
            <h2 className="text-4xl font-black text-white mb-4">Congratulations!</h2>
            <p className="text-white text-xl mb-6">
              You've earned all {certificates.length} certificates and completed ScamSmart!
            </p>
            <p className="text-white/90 text-lg">
              You're now a certified ScamSmart Legend! 🎉
            </p>
          </div>
        )}
      </main>
    </div>
  )
}