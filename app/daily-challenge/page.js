'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'
import DarkModeToggle from '../components/DarkModeToggle'

// Daily challenges rotate based on day of year
const DAILY_CHALLENGES = [
  {
    id: 1,
    title: "Phishing Email Detective",
    description: "Identify 5 red flags in this suspicious email",
    emoji: "📧",
    xp: 100,
    scenario: `
Subject: URGENT: Your Account Has Been Suspended!!!

Dear Valued Customer,

We have detected unusual activity on your account. Your account will be permanently deleted in 24 hours unless you verify your identity immediately.

Click here to verify: http://totally-real-bank.sketchy-site.ru/verify

Best regards,
Your Bank Security Team
(Do not reply to this email)
    `,
    question: "How many red flags can you spot?",
    options: [
      "2-3 red flags",
      "4-5 red flags", 
      "6-8 red flags",
      "9+ red flags"
    ],
    correct: 2,
    redFlags: [
      "❌ Generic greeting ('Dear Valued Customer')",
      "❌ Sense of urgency ('24 hours')",
      "❌ Threatening language ('permanently deleted')",
      "❌ Suspicious URL (sketchy-site.ru)",
      "❌ Poor grammar and excessive punctuation (!!!)",
      "❌ Requests to click link",
      "❌ 'Do not reply' instruction",
      "❌ Vague 'unusual activity' claim"
    ]
  },
  {
    id: 2,
    title: "Romance Scam Red Flags",
    description: "Identify warning signs in this dating profile",
    emoji: "💔",
    xp: 100,
    scenario: `
Dating Profile: "Sarah Johnson"

Photos: Professional model photos
Location: Claims to live locally but has "traveling for work"
About Me: "Successful oil rig engineer, currently working overseas. Looking for true love and someone to share my wealth with. I've been hurt before and trust is important to me. I don't use this app much - let's move to WhatsApp/email quickly."

First Message: "You're the most beautiful person I've ever seen! I feel like we have a special connection. I think you could be my soulmate!"
    `,
    question: "What are the biggest red flags here?",
    options: [
      "Just the quick move to other platforms",
      "Professional photos and quick declarations of love",
      "All of the above plus financial hints",
      "Nothing seems suspicious"
    ],
    correct: 2,
    redFlags: [
      "❌ Professional model photos (likely stolen)",
      "❌ Vague job ('oil rig engineer overseas')",
      "❌ Quick move off platform",
      "❌ Immediate declarations of love",
      "❌ Mentions of wealth unprompted",
      "❌ Claims to be traveling/overseas",
      "❌ Building trust narrative ('been hurt before')",
      "❌ Too good to be true compliments"
    ]
  },
  {
    id: 3,
    title: "Investment Scam Spotter",
    description: "Analyze this investment opportunity",
    emoji: "📈",
    xp: 100,
    scenario: `
"EXCLUSIVE INVESTMENT OPPORTUNITY! 🚀

Join our private crypto trading group! Our AI bot guarantees 300% returns in just 30 days!

✅ Minimum investment: $500
✅ Guaranteed returns - NO RISK!
✅ Our team has made $50 million this year
✅ Limited spots available - ACT NOW!
✅ Testimonials from satisfied investors
✅ Celebrity endorsed!

Send Bitcoin to get started. No refunds. Results may vary. Not financial advice."
    `,
    question: "What makes this a scam?",
    options: [
      "Only the 'guaranteed returns' claim",
      "The cryptocurrency aspect",
      "Multiple red flags including guarantees and urgency",
      "It's legitimate - crypto can make big returns"
    ],
    correct: 2,
    redFlags: [
      "❌ Guaranteed returns (impossible in investing)",
      "❌ Unrealistic returns (300% in 30 days)",
      "❌ High-pressure urgency ('ACT NOW')",
      "❌ Requests cryptocurrency payment",
      "❌ 'No refunds' policy",
      "❌ Vague disclaimers contradicting promises",
      "❌ Celebrity endorsement claims (likely fake)",
      "❌ No regulatory information",
      "❌ Private group (avoiding oversight)"
    ]
  },
  {
    id: 4,
    title: "Tech Support Scam",
    description: "Identify the scam tactics being used",
    emoji: "💻",
    xp: 100,
    scenario: `
Pop-up on screen:
"⚠️ CRITICAL SECURITY ALERT ⚠️
Your computer has been infected with 5 viruses!
Your personal data is at risk!
Call Microsoft Support NOW: 1-800-FAKE-NUM
DO NOT TURN OFF YOUR COMPUTER
This is an official Microsoft warning"

*Computer speaker making loud beeping sounds*
    `,
    question: "What should you do?",
    options: [
      "Call the number immediately to fix it",
      "Pay for their remote access service",
      "Close the browser/restart computer - it's fake",
      "Give them your credit card for 'protection'"
    ],
    correct: 2,
    redFlags: [
      "❌ Pop-up alert (Microsoft doesn't use these)",
      "❌ Scare tactics ('infected with viruses')",
      "❌ Urgency ('DO NOT TURN OFF')",
      "❌ Phone number in alert (major red flag)",
      "❌ Claims to be 'official Microsoft'",
      "❌ Loud sounds to create panic",
      "❌ Threatening data loss",
      "❌ Prevents you from closing/restarting"
    ]
  },
  {
    id: 5,
    title: "Job Scam Detection",
    description: "Evaluate this job offer",
    emoji: "💼",
    xp: 100,
    scenario: `
Email Subject: "You've Been Selected for High-Paying Remote Position!"

Dear Applicant,

Congratulations! After reviewing thousands of resumes, we've selected you for our Executive Assistant position.

Salary: $5,000/week for part-time work from home
Requirements: Must have computer and bank account
Duties: Process payments, receive packages, forward items

To get started:
1. Send $50 for background check
2. Provide bank account for direct deposit setup
3. Sign employment contract (PDF attached)

Start immediately! No interview necessary - we know you're perfect for this role!
    `,
    question: "What indicates this is a scam?",
    options: [
      "Only the upfront payment request",
      "The high salary for simple work",
      "Multiple red flags including no interview and reshipping",
      "Nothing - this seems like a great opportunity"
    ],
    correct: 2,
    redFlags: [
      "❌ No interview required",
      "❌ Unrealistic salary ($260k/year part-time)",
      "❌ Requests upfront payment",
      "❌ Asks for bank account info immediately",
      "❌ 'Receive and forward packages' (reshipping scam)",
      "❌ Vague job duties",
      "❌ Claims you were 'selected' without applying",
      "❌ Pressure to start immediately",
      "❌ Generic greeting"
    ]
  },
  {
    id: 6,
    title: "Fake Delivery Notification",
    description: "Spot the scam in this SMS",
    emoji: "📦",
    xp: 100,
    scenario: `
SMS Message:
"AusPost: Your parcel is awaiting delivery. A customs fee of $2.50 is required. Pay now to avoid return to sender: auspost-delivery.com.pk/track?id=AU892347"

*Link provided*
    `,
    question: "What's wrong with this message?",
    options: [
      "Nothing - Australia Post does charge small fees",
      "The amount is too small to be real",
      "Suspicious domain and SMS delivery notification",
      "Only the weird tracking number"
    ],
    correct: 2,
    redFlags: [
      "❌ Wrong domain (.com.pk not .com.au)",
      "❌ Small fee designed to seem legitimate",
      "❌ Urgency ('avoid return to sender')",
      "❌ SMS for payment (real ones use mail)",
      "❌ Suspicious URL shortener/tracking link",
      "❌ Generic message (no recipient name)",
      "❌ Unexpected package notification",
      "❌ Requests immediate payment via link"
    ]
  },
  {
    id: 7,
    title: "Charity Scam After Disaster",
    description: "Identify fake charity tactics",
    emoji: "❤️",
    xp: 100,
    scenario: `
Facebook Post (hours after major bushfire):
"🔥 URGENT BUSHFIRE RELIEF 🔥

Help Australian families who lost everything! Every dollar counts!

Our charity 'Helping Hands Australia' is on the ground NOW providing immediate relief.

DONATE TODAY - Every minute matters!
➡️ PayPal: helpinghands.donations@gmail.com
➡️ Cash App: $HelpingHandsAU
➡️ Bitcoin accepted!

100% of donations go directly to victims* 
(New charity, not yet registered. Admin fees may apply)

Share this to save lives! ❤️"
    `,
    question: "Why is this suspicious?",
    options: [
      "Only because they accept Bitcoin",
      "Just the Gmail address seems odd",
      "Multiple red flags including timing, payment methods, and lack of registration",
      "It's legitimate - people need help urgently"
    ],
    correct: 2,
    redFlags: [
      "❌ Appears immediately after disaster",
      "❌ Generic charity name",
      "❌ Not registered as charity",
      "❌ Personal email/payment accounts",
      "❌ Accepts untraceable payments (Bitcoin)",
      "❌ Contradictory claims (100% vs admin fees)",
      "❌ Extreme urgency",
      "❌ No verifiable information",
      "❌ Emotional manipulation"
    ]
  }
]

export default function DailyChallenge() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [challenge, setChallenge] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [hasCompletedToday, setHasCompletedToday] = useState(false)

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
    await loadTodaysChallenge(user.id)
  }

  const loadTodaysChallenge = async (userId) => {
    try {
      // Get day of year to determine which challenge
      const now = new Date()
      const start = new Date(now.getFullYear(), 0, 0)
      const diff = now - start
      const oneDay = 1000 * 60 * 60 * 24
      const dayOfYear = Math.floor(diff / oneDay)
      
      // Cycle through challenges
      const challengeIndex = dayOfYear % DAILY_CHALLENGES.length
      const todaysChallenge = DAILY_CHALLENGES[challengeIndex]
      
      setChallenge(todaysChallenge)

      // Check if already completed today
      const today = new Date().toISOString().split('T')[0]
      const { data } = await supabase
        .from('daily_challenges')
        .select('*')
        .eq('user_id', userId)
        .eq('challenge_date', today)
        .single()

      if (data) {
        setHasCompletedToday(true)
      }

      setLoading(false)
    } catch (error) {
      console.error('Error loading challenge:', error)
      setLoading(false)
    }
  }

  const submitAnswer = async () => {
    if (selectedAnswer === null) return

    const isCorrect = selectedAnswer === challenge.correct

    // Award XP if correct
    if (isCorrect && !hasCompletedToday) {
      try {
        // Record completion
        const today = new Date().toISOString().split('T')[0]
        await supabase.from('daily_challenges').insert([
          {
            user_id: user.id,
            challenge_date: today,
            challenge_id: challenge.id,
            completed: true,
            correct: true
          }
        ])

        // Award XP
        const { data: currentProgress } = await supabase
          .from('user_progress')
          .select('total_xp')
          .eq('user_id', user.id)
          .single()

        await supabase
          .from('user_progress')
          .update({ 
            total_xp: (currentProgress.total_xp || 0) + challenge.xp 
          })
          .eq('user_id', user.id)

        setHasCompletedToday(true)
      } catch (error) {
        console.error('Error saving challenge:', error)
      }
    }

    setShowResult(true)
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
          <p className="text-gray-600 dark:text-gray-400 text-lg">Loading daily challenge...</p>
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
                <p className="text-xs text-gray-500 dark:text-gray-400">Daily Challenge</p>
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

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm mb-4">
            🎯 NEW CHALLENGE EVERY DAY
          </div>
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2">
            {challenge.emoji} {challenge.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{challenge.description}</p>
          <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-lg font-bold">
            Reward: +{challenge.xp} XP
          </div>
        </div>

        {hasCompletedToday && !showResult && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 mb-8 text-center">
            <div className="text-5xl mb-3">✅</div>
            <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2">
              Challenge Already Completed!
            </h3>
            <p className="text-green-700 dark:text-green-400">
              Come back tomorrow for a new challenge!
            </p>
          </div>
        )}

        {/* Challenge Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 dark:border-gray-700">
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 mb-6 font-mono text-sm whitespace-pre-wrap border border-gray-200 dark:border-gray-700">
            {challenge.scenario}
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            {challenge.question}
          </h3>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {challenge.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showResult && setSelectedAnswer(index)}
                disabled={showResult}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  selectedAnswer === index
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                } ${
                  showResult && index === challenge.correct
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                    : ''
                } ${
                  showResult && selectedAnswer === index && index !== challenge.correct
                    ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                    : ''
                } disabled:cursor-not-allowed`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900 dark:text-white">{option}</span>
                  {showResult && index === challenge.correct && (
                    <span className="text-green-600 dark:text-green-400 text-xl">✓</span>
                  )}
                  {showResult && selectedAnswer === index && index !== challenge.correct && (
                    <span className="text-red-600 dark:text-red-400 text-xl">✗</span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {!showResult && !hasCompletedToday && (
            <button
              onClick={submitAnswer}
              disabled={selectedAnswer === null}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Submit Answer
            </button>
          )}

          {/* Results */}
          {showResult && (
            <div className={`mt-6 p-6 rounded-xl ${
              selectedAnswer === challenge.correct
                ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
            }`}>
              <div className="text-center mb-6">
                <div className="text-6xl mb-3">
                  {selectedAnswer === challenge.correct ? '🎉' : '💡'}
                </div>
                <h3 className={`text-2xl font-black mb-2 ${
                  selectedAnswer === challenge.correct
                    ? 'text-green-800 dark:text-green-300'
                    : 'text-red-800 dark:text-red-300'
                }`}>
                  {selectedAnswer === challenge.correct 
                    ? `Correct! +${challenge.xp} XP` 
                    : 'Not Quite Right'}
                </h3>
                <p className={
                  selectedAnswer === challenge.correct
                    ? 'text-green-700 dark:text-green-400'
                    : 'text-red-700 dark:text-red-400'
                }>
                  {selectedAnswer === challenge.correct
                    ? "Great job spotting those red flags!"
                    : "Let's review what to look for:"}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">🚩 Red Flags Found:</h4>
                <ul className="space-y-2">
                  {challenge.redFlags.map((flag, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300 text-sm">
                      {flag}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => router.push('/dashboard')}
                className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                Back to Dashboard
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}