'use client'
import { useState } from 'react'

export default function ShareProgress({ progress, userEmail }) {
  const [copied, setCopied] = useState(false)

  const getLevel = () => Math.floor((progress?.total_xp || 0) / 500) + 1

  const shareText = `🛡️ I'm Level ${getLevel()} on ScamSmart!
📚 ${progress?.lessons_completed || 0} lessons completed
⭐ ${progress?.total_xp || 0} XP earned
🔥 ${progress?.streak_count || 0} day streak

Think Before You Click! 🚀
https://scamsmart.click`

  const shareToTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`
    window.open(url, '_blank', 'width=550,height=420')
  }

  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://scamsmart.click')}&quote=${encodeURIComponent(shareText)}`
    window.open(url, '_blank', 'width=550,height=420')
  }

  const shareToLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://scamsmart.click')}`
    window.open(url, '_blank', 'width=550,height=420')
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">📢 Share Your Progress</h3>
      
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white mb-6">
        <div className="flex items-center gap-3 mb-4">
          <img src="/logo.png" alt="ScamSmart" className="w-12 h-12 rounded-lg" />
          <div>
            <h4 className="font-black text-lg">ScamSmart</h4>
            <p className="text-xs opacity-90">Think Before You Click</p>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <p className="text-2xl font-black">Level {getLevel()} 🏆</p>
          <div className="grid grid-cols-3 gap-2 text-sm">
            <div>
              <p className="opacity-90">Lessons</p>
              <p className="font-bold text-lg">{progress?.lessons_completed || 0}</p>
            </div>
            <div>
              <p className="opacity-90">XP</p>
              <p className="font-bold text-lg">{progress?.total_xp || 0}</p>
            </div>
            <div>
              <p className="opacity-90">Streak</p>
              <p className="font-bold text-lg">{progress?.streak_count || 0}🔥</p>
            </div>
          </div>
        </div>
        
        <p className="text-xs opacity-75">scamsmart.click</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={shareToTwitter}
          className="flex items-center justify-center gap-2 bg-[#1DA1F2] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[#1a8cd8] transition-colors"
        >
          <span className="text-xl">𝕏</span>
          Twitter
        </button>
        
        <button
          onClick={shareToFacebook}
          className="flex items-center justify-center gap-2 bg-[#1877F2] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[#1664d8] transition-colors"
        >
          <span className="text-xl">f</span>
          Facebook
        </button>
        
        <button
          onClick={shareToLinkedIn}
          className="flex items-center justify-center gap-2 bg-[#0A66C2] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[#094d92] transition-colors"
        >
          <span className="text-xl">in</span>
          LinkedIn
        </button>
        
        <button
          onClick={copyToClipboard}
          className="flex items-center justify-center gap-2 bg-gray-600 dark:bg-gray-700 text-white px-4 py-3 rounded-lg font-semibold hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
        >
          <span className="text-xl">{copied ? '✓' : '📋'}</span>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  )
}