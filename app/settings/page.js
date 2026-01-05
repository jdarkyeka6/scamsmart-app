'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'
import DarkModeToggle from '../components/Dark-Mode-Toggle'

export default function Settings() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  
  // Settings state
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [streakReminders, setStreakReminders] = useState(true)
  const [weeklyDigest, setWeeklyDigest] = useState(false)
  
  // Password change
  const [showPasswordChange, setShowPasswordChange] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  
  // Delete account
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [deleteConfirmText, setDeleteConfirmText] = useState('')

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
    await loadSettings(user.id)
  }

  const loadSettings = async (userId) => {
    try {
      const { data } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId)
        .single()
      
      // Load settings (you can expand this with actual DB fields later)
      setEmailNotifications(data?.email_notifications ?? true)
      setStreakReminders(data?.streak_reminders ?? true)
      setWeeklyDigest(data?.weekly_digest ?? false)
      
      setLoading(false)
    } catch (error) {
      console.error('Error loading settings:', error)
      setLoading(false)
    }
  }

  const saveSettings = async () => {
    setSaving(true)
    try {
      const { error } = await supabase
        .from('user_progress')
        .update({
          email_notifications: emailNotifications,
          streak_reminders: streakReminders,
          weekly_digest: weeklyDigest
        })
        .eq('user_id', user.id)

      if (error) throw error
      
      alert('✅ Settings saved!')
    } catch (error) {
      console.error('Error saving settings:', error)
      alert('Failed to save settings')
    } finally {
      setSaving(false)
    }
  }

  const changePassword = async () => {
    if (newPassword.length < 6) {
      alert('Password must be at least 6 characters')
      return
    }
    
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      })

      if (error) throw error
      
      alert('✅ Password changed successfully!')
      setNewPassword('')
      setConfirmPassword('')
      setShowPasswordChange(false)
    } catch (error) {
      console.error('Error changing password:', error)
      alert('Failed to change password: ' + error.message)
    }
  }

  const deleteAccount = async () => {
    if (deleteConfirmText !== 'DELETE') {
      alert('Please type DELETE to confirm')
      return
    }

    try {
      // Delete user data
      await supabase.from('user_progress').delete().eq('user_id', user.id)
      await supabase.from('lesson_completions').delete().eq('user_id', user.id)
      
      // Sign out
      await supabase.auth.signOut()
      
      alert('Account deleted. We\'re sorry to see you go!')
      router.push('/')
    } catch (error) {
      console.error('Error deleting account:', error)
      alert('Failed to delete account')
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
          <p className="text-gray-600 dark:text-gray-400 text-lg">Loading settings...</p>
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
                <p className="text-xs text-gray-500 dark:text-gray-400">Settings</p>
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
        <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-8">Settings</h1>

        {/* Appearance */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-6 border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">🎨 Appearance</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Dark Mode</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Toggle between light and dark theme</p>
            </div>
            <DarkModeToggle />
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-6 border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">🔔 Notifications</h2>
          
          <div className="space-y-4">
            <ToggleSetting
              label="Email Notifications"
              description="Receive updates about your progress"
              checked={emailNotifications}
              onChange={setEmailNotifications}
            />
            
            <ToggleSetting
              label="Streak Reminders"
              description="Daily reminders to maintain your streak"
              checked={streakReminders}
              onChange={setStreakReminders}
            />
            
            <ToggleSetting
              label="Weekly Digest"
              description="Weekly summary of your learning progress"
              checked={weeklyDigest}
              onChange={setWeeklyDigest}
            />
          </div>

          <button
            onClick={saveSettings}
            disabled={saving}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {saving ? 'Saving...' : 'Save Notification Settings'}
          </button>
        </div>

        {/* Security */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-6 border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">🔒 Security</h2>
          
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-900 dark:text-white mb-1">Email</p>
              <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
            </div>

            {!showPasswordChange ? (
              <button
                onClick={() => setShowPasswordChange(true)}
                className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Change Password
              </button>
            ) : (
              <div className="space-y-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white dark:bg-gray-700"
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white dark:bg-gray-700"
                />
                <div className="flex gap-2">
                  <button
                    onClick={changePassword}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
                  >
                    Update Password
                  </button>
                  <button
                    onClick={() => {
                      setShowPasswordChange(false)
                      setNewPassword('')
                      setConfirmPassword('')
                    }}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-4"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl shadow-lg p-6 border border-red-200 dark:border-red-800">
          <h2 className="text-xl font-bold text-red-800 dark:text-red-400 mb-4">⚠️ Danger Zone</h2>
          
          {!showDeleteConfirm ? (
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Deleting your account will permanently remove all your data, including progress, achievements, and XP. This action cannot be undone.
              </p>
              <button
                onClick={() => setShowDeleteConfirm(true)}
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
              >
                Delete Account
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                Are you absolutely sure? This action is permanent and cannot be undone.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Type <span className="font-mono font-bold">DELETE</span> to confirm:
              </p>
              <input
                type="text"
                value={deleteConfirmText}
                onChange={(e) => setDeleteConfirmText(e.target.value)}
                className="w-full px-4 py-3 border border-red-300 dark:border-red-700 rounded-lg text-gray-900 dark:text-white dark:bg-gray-700"
                placeholder="Type DELETE"
              />
              <div className="flex gap-2">
                <button
                  onClick={deleteAccount}
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700"
                >
                  Permanently Delete Account
                </button>
                <button
                  onClick={() => {
                    setShowDeleteConfirm(false)
                    setDeleteConfirmText('')
                  }}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

function ToggleSetting({ label, description, checked, onChange }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 last:border-0">
      <div>
        <p className="font-semibold text-gray-900 dark:text-white">{label}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
          checked ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
        }`}
      >
        <span
          className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
            checked ? 'translate-x-7' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  )
}