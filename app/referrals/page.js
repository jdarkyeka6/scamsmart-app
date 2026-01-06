'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'
import DarkModeToggle from '../components/DarkModeToggle'

export default function Referrals() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [referralCode, setReferralCode] = useState('')
  const [referrals, setReferrals] = useState([])
  const [stats, setStats] = useState({ total: 0, xpEarned: 0 })
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
    await loadReferralData(user.id)
  }

  const loadReferralData = async (userId) => {
    try {
      // Get or create referral code
      const { data: progressData } = await supabase
        .from('user_progress')
        .select('referral_code')
        .eq('user_id', userId)
        .single()

      let code = progressData?.referral_code

      // Generate code if doesn't exist
      if (!code) {
        code = generateReferralCode()
        await supabase
          .from('user_progress')
          .update({ referral_code: code })
          .eq('user_id', userId)
      }

      setReferralCode(code)

      // Load referrals
      const { data: referralData } = await supabase
        .from('referrals')
        .select('*')
        .eq('referrer_id', userId)
        .order('created_at', { ascending: false })

      setReferrals(referralData || [])

      // Calculate stats
      const totalReferrals = referralData?.length || 0
      const xpEarned = totalReferrals * 100 // 100 XP per referral

      setStats({ total: totalReferrals, xpEarned })
      setLoading(false)
    } catch (error) {
      console.error('Error loading referral data:', error)
      setLoading(false)
    }
  }

  const generateReferralCode = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
    let code = ''
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return code
  }

  const getReferralLink = () => {
    return `${window.location.origin}/signup?ref=${referralCode}`
  }

  const copyReferralLink = () => {
    navigator.clipboard.writeText(getReferralLink())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareReferral = (platform) => {
    const text = `Join me on ScamSmart and learn to protect yourself from scams! Use my referral code: ${referralCode} and get 1 week Premium free!`
    const url = getReferralLink()

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank')
        break
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`, '_blank')
        break
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank')
        break
      case 'email':
        window.location.href = `mailto:?subject=Join ScamSmart&body=${encodeURIComponent(text + '\n\n' + url)}`
        break
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
          <p className="text-gray-600 dark:text-gray-400 text-lg">Loading referrals...</p>
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
                <p className="text-xs text-gray-500 dark:text-gray-400">Referral Program</p>
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
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2">🎁 Refer & Earn</h1>
          <p className="text-gray-600 dark:text-gray-400">Invite friends and earn rewards together!</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
            <div className="text-5xl mb-3">👥</div>
            <h3 className="text-xl font-bold mb-1 opacity-90">Total Referrals</h3>
            <p className="text-5xl font-black">{stats.total}</p>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg p-8 text-white">
            <div className="text-5xl mb-3">⭐</div>
            <h3 className="text-xl font-bold mb-1 opacity-90">Rewards Earned</h3>
            <p className="text-3xl font-black">{stats.xpEarned} XP</p>
            <p className="text-sm opacity-75 mt-2">+ {stats.total} weeks Premium!</p>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                1️⃣
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Share Your Link</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Send your unique referral link to friends and family
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                2️⃣
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">They Sign Up</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                When they create an account using your link
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900/30 w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                3️⃣
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Earn Rewards</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                You both get 100 XP + 1 week Premium free!
              </p>
            </div>
          </div>
        </div>

        {/* Referral Link */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6">Your Referral Code</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800 mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Your Code:</p>
            <p className="text-4xl font-black text-blue-600 dark:text-blue-400 tracking-wider mb-4">
              {referralCode}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Your Link:</p>
            <div className="flex gap-2">
              <input
                type="text"
                value={getReferralLink()}
                readOnly
                className="flex-1 px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white font-mono text-sm"
              />
              <button
                onClick={copyReferralLink}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                {copied ? '✓ Copied!' : '📋 Copy'}
              </button>
            </div>
          </div>

          {/* Share Buttons */}
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Share via:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button
              onClick={() => shareReferral('twitter')}
              className="flex items-center justify-center gap-2 bg-[#1DA1F2] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[#1a8cd8] transition-colors"
            >
              <span className="text-xl">𝕏</span>
              Twitter
            </button>
            
            <button
              onClick={() => shareReferral('facebook')}
              className="flex items-center justify-center gap-2 bg-[#1877F2] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[#1664d8] transition-colors"
            >
              <span className="text-xl">f</span>
              Facebook
            </button>
            
            <button
              onClick={() => shareReferral('whatsapp')}
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[#20ba5a] transition-colors"
            >
              <span className="text-xl">💬</span>
              WhatsApp
            </button>
            
            <button
              onClick={() => shareReferral('email')}
              className="flex items-center justify-center gap-2 bg-gray-600 dark:bg-gray-700 text-white px-4 py-3 rounded-lg font-semibold hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
            >
              <span className="text-xl">✉️</span>
              Email
            </button>
          </div>
        </div>

        {/* Referral History */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6">Referral History</h2>
          
          {referrals.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">👥</div>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">No referrals yet</p>
              <p className="text-gray-500 dark:text-gray-500 text-sm">
                Share your link to start earning rewards!
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {referrals.map((referral, index) => (
                <div
                  key={referral.id}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-black">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        Referral #{index + 1}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Joined {new Date(referral.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-green-600 dark:text-green-400">+100 XP</p>
                    <p className="text-xs text-yellow-600 dark:text-yellow-400 font-semibold">+1 Week Premium</p>
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