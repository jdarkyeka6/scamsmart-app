'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'

export default function Settings() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [progress, setProgress] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  // Password change
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

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
    loadProgress(user.id)
  }

  const loadProgress = async (userId) => {
    try {
      const { data } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId)
        .single()
      
      setProgress(data)
    } catch (error) {
      console.error('Error loading progress:', error)
    } finally {
      setLoading(false)
    }
  }

  const handlePasswordChange = async (e) => {
    e.preventDefault()
    
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match!')
      return
    }

    if (newPassword.length < 6) {
      setMessage('Password must be at least 6 characters')
      return
    }

    setSaving(true)
    setMessage('')

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      })

      if (error) throw error

      setMessage('Password updated successfully!')
      setNewPassword('')
      setConfirmPassword('')
    } catch (error) {
      setMessage('Error updating password: ' + error.message)
    } finally {
      setSaving(false)
    }
  }

  const handleCancelSubscription = async () => {
    if (!confirm('Are you sure you want to cancel your premium subscription?')) {
      return
    }

    setMessage('Please contact support@scamsmart.click to cancel your subscription.')
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
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => router.push('/dashboard')}
              className="text-gray-600 hover:text-gray-900"
            >
              ← Back
            </button>
            <img src="/logo.png" alt="ScamSmart" className="w-10 h-10" />
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Account Info */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Account Information</h2>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-gray-600">Email</label>
              <p className="text-lg text-gray-900">{user?.email}</p>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-600">Account Status</label>
              <p className="text-lg">
                {progress?.is_premium ? (
                  <span className="text-yellow-600 font-bold">⭐ Premium Member</span>
                ) : (
                  <span className="text-gray-600">Free Account</span>
                )}
              </p>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-600">Member Since</label>
              <p className="text-lg text-gray-900">
                {new Date(user?.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Change Password */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Change Password</h2>
          
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter new password"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Confirm new password"
                required
              />
            </div>

            {message && (
              <div className={`p-4 rounded-lg ${
                message.includes('success') 
                  ? 'bg-green-50 text-green-800' 
                  : 'bg-red-50 text-red-800'
              }`}>
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={saving}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400"
            >
              {saving ? 'Updating...' : 'Update Password'}
            </button>
          </form>
        </div>

        {/* Subscription Management */}
        {progress?.is_premium && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscription</h2>
            
            <div className="space-y-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <p className="text-sm text-yellow-800">
                  <strong>Premium Member</strong><br/>
                  Your subscription renews monthly. Cancel anytime.
                </p>
              </div>

              <button
                onClick={handleCancelSubscription}
                className="bg-red-100 text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-red-200 border-2 border-red-300"
              >
                Cancel Subscription
              </button>
            </div>
          </div>
        )}

        {/* Danger Zone */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-red-200">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Danger Zone</h2>
          
          <div className="space-y-4">
            <p className="text-gray-700">
              Deleting your account will permanently remove all your progress, achievements, and data. This action cannot be undone.
            </p>

            <button
              onClick={() => {
                if (confirm('Are you ABSOLUTELY sure you want to delete your account? This cannot be undone!')) {
                  alert('Account deletion feature coming soon. Please contact support@scamsmart.click')
                }
              }}
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700"
            >
              Delete Account
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}