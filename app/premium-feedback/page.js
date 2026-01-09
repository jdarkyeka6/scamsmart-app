'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase';

export default function PremiumFeedback() {
  const router = useRouter();
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);

  useEffect(() => {
    checkIfAlreadySubmitted();
  }, []);

  const checkIfAlreadySubmitted = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data } = await supabase
        .from('feedback')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (data) {
        setAlreadySubmitted(true);
      }
    } catch (error) {
      // No feedback yet
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.push('/signin');
        return;
      }

      // Get user email
      const { data: progressData } = await supabase
        .from('user_progress')
        .select('email, display_name')
        .eq('user_id', user.id)
        .single();

      // Save feedback
      await supabase.from('feedback').insert([
        {
          user_id: user.id,
          user_email: progressData?.email || user.email,
          user_name: progressData?.display_name || 'Anonymous',
          feedback: feedback,
          rating: rating,
          created_at: new Date().toISOString()
        }
      ]);

      // Grant 1 week Premium
      const oneWeekFromNow = new Date();
      oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);

      await supabase
        .from('user_progress')
        .update({
          is_premium: true,
          premium_until: oneWeekFromNow.toISOString()
        })
        .eq('user_id', user.id);

      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Error submitting feedback. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (alreadySubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-black text-gray-900 mb-4">Already Submitted!</h2>
          <p className="text-gray-600 mb-6">
            You've already submitted feedback and received your Premium trial. Thank you!
          </p>
          <button
            onClick={() => router.push('/dashboard')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-black text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your feedback is invaluable! You've been upgraded to <span className="font-bold text-yellow-600">Premium for 1 week FREE!</span>
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-yellow-800">
              ⭐ Premium features unlocked for 7 days!
            </p>
          </div>
          <button
            onClick={() => router.push('/dashboard')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <img src="/logo.png" alt="ScamSmart" className="w-20 h-20 mx-auto mb-4 drop-shadow-lg" />
          <h1 className="text-3xl font-black text-gray-900 mb-2">Get Premium FREE!</h1>
          <p className="text-gray-600">Share your feedback to unlock 1 week of Premium</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-4 mb-6 text-center">
            <p className="text-white font-bold text-lg mb-1">🎁 Special Offer</p>
            <p className="text-white text-sm">
              Premium Trial (Worth $5) - FREE for your feedback!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3 text-center">
                Rate Your Experience
              </label>
              <div className="flex gap-2 justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="text-4xl transition-transform hover:scale-110"
                  >
                    {star <= rating ? '⭐' : '☆'}
                  </button>
                ))}
              </div>
              {rating > 0 && (
                <p className="text-center text-sm text-gray-500 mt-2">
                  {rating === 5 ? '🎉 Awesome!' : rating >= 3 ? '👍 Thanks!' : '💭 We appreciate your honesty'}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Feedback <span className="text-red-500">*</span>
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows="6"
                placeholder="We'd love to hear your thoughts! What do you like? What could be better? Any features you'd like to see?"
                required
                minLength={10}
              />
              <p className="text-xs text-gray-500 mt-1">Minimum 10 characters</p>
            </div>

            <button
              type="submit"
              disabled={loading || rating === 0 || feedback.length < 10}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {loading ? 'Submitting...' : '🎉 Submit & Unlock Premium FREE'}
            </button>
          </form>

          <button
            onClick={() => router.push('/dashboard')}
            className="w-full mt-4 text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm"
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}