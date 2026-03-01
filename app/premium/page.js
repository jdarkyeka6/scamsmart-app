'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase';

export default function Premium() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [checkingOut, setCheckingOut] = useState(false);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      router.push('/signin');
      return;
    }

    setUser(user);
    await loadProgress(user.id);
  };

  const loadProgress = async (userId) => {
    try {
      const { data } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId)
        .single();

      setProgress(data);
      setLoading(false);
    } catch (error) {
      console.error('Error loading progress:', error);
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  const handleUpgrade = async () => {
    setCheckingOut(true);

    try {
      // Call your backend to create Stripe checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          email: user.email,
          priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID || 'price_1T66ARLPBnUeKZYz7XUIiV1B' // Your Stripe Price ID
        }),
      });

      const { url, error } = await response.json();

      if (error) {
        alert('Error creating checkout session. Please try again.');
        setCheckingOut(false);
        return;
      }

      // Redirect to Stripe Checkout
      window.location.href = url;
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
      setCheckingOut(false);
    }
  };

  const handleManageSubscription = async () => {
    try {
      // Call your backend to create Stripe portal session
      const response = await fetch('/api/create-portal-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id
        }),
      });

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Error:', error);
      alert('Unable to open billing portal. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="ScamSmart" className="w-12 h-12" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">ScamSmart</h1>
                <p className="text-sm text-gray-600">Premium</p>
              </div>
            </div>

            <nav className="flex items-center gap-6">
              <button 
                onClick={() => router.push('/learn')}
                className="text-lg font-semibold text-gray-700 hover:text-gray-900"
              >
                📚 Learn
              </button>
              <button 
                onClick={() => router.push('/challenges')}
                className="text-lg font-semibold text-gray-700 hover:text-gray-900"
              >
                🎯 Practice
              </button>
              <button 
                onClick={() => router.push('/profile')}
                className="text-lg font-semibold text-gray-700 hover:text-gray-900"
              >
                👤 Profile
              </button>
              <button 
                onClick={handleSignOut}
                className="text-lg font-semibold text-gray-700 hover:text-gray-900"
              >
                Sign Out
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Already Premium */}
        {progress?.is_premium ? (
          <div className="text-center">
            <div className="text-8xl mb-6">⭐</div>
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              You're Premium!
            </h2>
            <p className="text-2xl text-gray-600 mb-8">
              Thank you for supporting ScamSmart
            </p>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Premium Benefits:</h3>
              <div className="space-y-4 text-left">
                <BenefitItem icon="❤️" text="Unlimited hearts - never run out" />
                <BenefitItem icon="🎓" text="Access to exclusive advanced lessons" />
                <BenefitItem icon="🤖" text="Priority chat with Mibo AI assistant" />
                <BenefitItem icon="📜" text="Download certificates for completed sections" />
                <BenefitItem icon="🚫" text="Ad-free experience" />
                <BenefitItem icon="⚡" text="Early access to new features" />
              </div>
            </div>

            <button
              onClick={handleManageSubscription}
              className="bg-gray-700 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-xl text-xl transition-colors mb-4"
            >
              Manage Subscription
            </button>

            <div className="mt-6">
              <button
                onClick={() => router.push('/learn')}
                className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
              >
                Continue Learning →
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Pricing Header */}
            <div className="text-center mb-12">
              <div className="text-8xl mb-6">⭐</div>
              <h2 className="text-6xl font-black text-gray-900 mb-4">
                Go Premium
              </h2>
              <p className="text-2xl text-gray-600">
                Unlock unlimited learning and exclusive features
              </p>
            </div>

            {/* Pricing Card */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl shadow-2xl overflow-hidden border-4 border-yellow-600">
                {/* Header */}
                <div className="bg-yellow-600 text-white text-center py-6">
                  <h3 className="text-3xl font-black">Premium Membership</h3>
                </div>

                {/* Price */}
                <div className="bg-white p-10 text-center border-b-4 border-yellow-600">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-6xl font-black text-gray-900">$5</span>
                    <span className="text-2xl text-gray-600">/month</span>
                  </div>
                  <p className="text-lg text-gray-600">Cancel anytime • No hidden fees</p>
                </div>

                {/* Features */}
                <div className="bg-white p-10">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Everything Premium Includes:
                  </h4>
                  <div className="space-y-4">
                    <FeatureItem icon="❤️" title="Unlimited Hearts" description="Never lose hearts on wrong answers - practice as much as you want" />
                    <FeatureItem icon="🎓" title="Exclusive Lessons" description="Access advanced scam detection content not available to free users" />
                    <FeatureItem icon="🤖" title="Priority AI Chat" description="Get faster responses from Mibo with extended message limits" />
                    <FeatureItem icon="📜" title="Certificates" description="Download beautiful certificates for completed sections" />
                    <FeatureItem icon="🚫" title="Ad-Free" description="Enjoy ScamSmart without any advertisements" />
                    <FeatureItem icon="⚡" title="Early Access" description="Be the first to try new features and challenges" />
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-white p-10 pt-0">
                  <button
                    onClick={handleUpgrade}
                    disabled={checkingOut}
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-black py-6 rounded-xl text-2xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {checkingOut ? '⏳ Loading...' : '⭐ Upgrade to Premium'}
                  </button>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Secure payment powered by Stripe
                  </p>
                </div>
              </div>

              {/* Money Back Guarantee */}
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 mt-8 text-center">
                <div className="text-4xl mb-3">✅</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">7-Day Money Back Guarantee</h4>
                <p className="text-gray-700">
                  Not satisfied? Get a full refund within 7 days, no questions asked.
                </p>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

function BenefitItem({ icon, text }) {
  return (
    <div className="flex items-center gap-4 text-lg">
      <span className="text-3xl flex-shrink-0">{icon}</span>
      <span className="text-gray-700 font-semibold">{text}</span>
    </div>
  );
}

function FeatureItem({ icon, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <span className="text-4xl flex-shrink-0">{icon}</span>
      <div>
        <h5 className="text-xl font-bold text-gray-900 mb-1">{title}</h5>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
