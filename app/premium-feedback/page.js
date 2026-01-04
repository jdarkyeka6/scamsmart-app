'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'

export default function PremiumFeedback() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    feedback: '',
    rating: 0
  })

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
    setFormData(prev => ({ ...prev, email: user.email }))
    setLoading(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.fullName || !formData.feedback || !formData.rating) {
      alert('Please fill in all fields!')
      return
    }

    if (formData.feedback.length < 20) {
      alert('Please provide more detailed feedback (at least 20 characters)')
      return
    }

    setSubmitting(true)

    try {
      // Submit feedback
      const { error: feedbackError } = await supabase
        .from('premium_feedback')
        .insert({
          user_id: user.id,
          user_email: formData.email,
          full_name: formData.fullName,
          feedback: formData.feedback,
          rating: formData.rating
        })

      if (feedbackError) throw feedbackError

      // Grant premium
      const oneMonthFromNow = new Date()
      oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1)

      const { error: premiumError } = await supabase
        .from('user_progress')
        .update({
          is_premium: true,
          premium_expires_at: oneMonthFromNow.toISOString()
        })
        .eq('user_id', user.id)

      if (premiumError) throw premiumError

      alert('🎉 Thank you for your feedback! Premium activated for 1 month!')
      router.push('/dashboard')
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong. Please try again!')
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Get 1 Month FREE Premium</h1>
          <p className="text-gray-600 mb-6">Share your honest feedback to unlock premium features!</p>

          {/* Warning Box */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6 rounded">
            <p className="text-sm text-yellow-800">
              <strong>⚠️ Please take this seriously.</strong><br/>
              We read ALL feedback forms. Invalid info (e.g., "apamin", fake details, or spam) will result in your free premium being cancelled. 
              <strong> Honest feedback is wanted!</strong> Don't glaze us to get premium - all feedback is taken onboard. 
              You are not rewarded greater or less for a better or worse rating. Be real with us! 🙏
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John Smith"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                required
                disabled
              />
              <p className="text-xs text-gray-500 mt-1">Using your account email</p>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                How would you rate ScamSmart so far? *
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => setFormData({ ...formData, rating })}
                    className={`w-12 h-12 rounded-lg border-2 font-bold transition-all ${
                      formData.rating === rating
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                    }`}
                  >
                    {rating}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-1">1 = Poor, 5 = Excellent</p>
            </div>

            {/* Feedback */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Honest Feedback *
              </label>
              <textarea
                value={formData.feedback}
                onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={6}
                placeholder="What do you think of ScamSmart? What can we improve? What do you love? Be honest - we want real feedback!"
                required
                minLength={20}
              />
              <p className="text-xs text-gray-500 mt-1">Minimum 20 characters</p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-700 shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Submitting...' : 'Submit Feedback & Activate Premium 🎉'}
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-6">
            By submitting, you agree to provide honest feedback. Premium will be active for 1 month from today.
          </p>
        </div>
      </div>
    </div>
  )
}