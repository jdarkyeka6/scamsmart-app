'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'

export default function SignIn() {
  const router = useRouter()
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)

    try {
      if (isSignUp) {
        // Validate username
        if (!username || username.trim().length < 3) {
          setError('Username must be at least 3 characters')
          setLoading(false)
          return
        }

        // Validate password
        if (password.length < 6) {
          setError('Password must be at least 6 characters')
          setLoading(false)
          return
        }

        // Check if username exists
        const { data: existingUser } = await supabase
          .from('user_progress')
          .select('display_name')
          .eq('display_name', username.trim())
          .single()

        if (existingUser) {
          setError('Username already taken')
          setLoading(false)
          return
        }

        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              username: username.trim()
            }
          }
        })

        if (error) throw error

        // Create user progress with username
        if (data.user) {
          const referralCode = Math.random().toString(36).substring(2, 10).toUpperCase()
          
          await supabase.from('user_progress').insert([
            {
              user_id: data.user.id,
              email: email,
              display_name: username.trim(),
              total_xp: 0,
              lessons_completed: 0,
              streak_count: 0,
              last_activity: new Date().toISOString(),
              is_premium: false,
              referral_code: referralCode
            }
          ])
        }

        setMessage('🎉 Account created! Check your email to verify your account.')
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (error) throw error

        window.location.href = '/dashboard'
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center px-4 py-8">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-md w-full relative z-10">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-white rounded-3xl p-4 shadow-2xl mb-6 transform hover:scale-105 transition-transform">
            <img src="/logo.png" alt="ScamSmart" className="w-20 h-20" />
          </div>
          <h1 className="text-5xl font-black text-white mb-3 drop-shadow-lg">
            ScamSmart
          </h1>
          <p className="text-xl text-white/90 font-semibold">Think Before You Click</p>
          <p className="text-white/70 mt-2">Master scam detection with interactive lessons</p>
        </div>

        {/* Main Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
          {/* Tab Switcher */}
          <div className="flex gap-2 mb-8 bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => {
                setIsSignUp(false)
                setError('')
                setMessage('')
              }}
              className={`flex-1 py-3 rounded-lg font-bold transition-all ${
                !isSignUp
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setIsSignUp(true)
                setError('')
                setMessage('')
              }}
              className={`flex-1 py-3 rounded-lg font-bold transition-all ${
                isSignUp
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {isSignUp && (
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Username <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-gray-400 text-lg">👤</span>
                  </div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 font-medium"
                    placeholder="Choose a cool username"
                    required={isSignUp}
                    minLength={3}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1 ml-1">At least 3 characters</p>
              </div>
            )}

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-gray-400 text-lg">📧</span>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 font-medium"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-gray-400 text-lg">🔒</span>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 font-medium"
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <span className="text-lg">{showPassword ? '👁️' : '👁️‍🗨️'}</span>
                </button>
              </div>
              {isSignUp && (
                <p className="text-xs text-gray-500 mt-1 ml-1">At least 6 characters</p>
              )}
            </div>

            {error && (
              <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-semibold flex items-center gap-2">
                <span>⚠️</span>
                <span>{error}</span>
              </div>
            )}

            {message && (
              <div className="bg-green-50 border-2 border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm font-semibold flex items-center gap-2">
                <span>✅</span>
                <span>{message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-black py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-lg"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  {isSignUp ? 'Creating Account...' : 'Signing In...'}
                </span>
              ) : (
                <span>{isSignUp ? '🚀 Create Account' : '🔓 Sign In'}</span>
              )}
            </button>
          </form>

          {!isSignUp && (
            <div className="mt-6 text-center">
              <button
                onClick={() => router.push('/reset-password')}
                className="text-sm text-blue-600 hover:text-blue-700 font-bold hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          )}

          {/* Terms and Privacy */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-center text-gray-500">
              By {isSignUp ? 'creating an account' : 'signing in'}, you agree to our{' '}
              <button 
                onClick={() => router.push('/terms')} 
                className="text-blue-600 hover:underline font-semibold"
              >
                Terms of Service
              </button>
              {' '}and{' '}
              <button 
                onClick={() => router.push('/privacy')} 
                className="text-blue-600 hover:underline font-semibold"
              >
                Privacy Policy
              </button>
            </p>
          </div>
        </div>

        {/* Feature highlights */}
        {isSignUp && (
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-4 border border-white/30">
              <div className="text-3xl mb-2">📚</div>
              <p className="text-white font-bold text-sm">115 Lessons</p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-4 border border-white/30">
              <div className="text-3xl mb-2">🤖</div>
              <p className="text-white font-bold text-sm">AI Assistant</p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-4 border border-white/30">
              <div className="text-3xl mb-2">🏆</div>
              <p className="text-white font-bold text-sm">Achievements</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
