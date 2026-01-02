'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleAuth = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      if (isSignUp) {
        // Sign up
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        })
        
        if (error) throw error
        
        console.log('Sign up success:', data)
        setMessage('Account created! You can now sign in.')
        setIsSignUp(false)
      } else {
        // Sign in
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        
        if (error) throw error
        
        console.log('Sign in success:', data)
        setMessage('Signed in successfully!')
        // Redirect to dashboard (we'll build this later)
        window.location.href = '/dashboard'
      }
    } catch (error) {
      console.log('Full error:', error)
      setMessage(error.message || 'Something went wrong. Check console.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <img src="/logo.png" alt="ScamSmart" className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {isSignUp ? 'Create Account' : 'Welcome Back!'}
          </h1>
          <p className="text-gray-600">
            {isSignUp ? 'Start learning with Mibo' : 'Sign in to continue learning with Mibo'}
          </p>
        </div>

        {message && (
          <div className={`mb-4 p-4 rounded-lg ${
            message.includes('success') || message.includes('created') 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {message}
          </div>
        )}

        <form onSubmit={handleAuth} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? 'Loading...' : (isSignUp ? 'Create Account' : 'Sign In')}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button 
              onClick={() => {
                setIsSignUp(!isSignUp)
                setMessage('')
              }}
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>

        <div className="mt-4 text-center">
          <a href="/" className="text-sm text-gray-500 hover:text-gray-700">← Back to Home</a>
        </div>
      </div>
    </div>
  )
}