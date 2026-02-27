'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../lib/supabase';

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  // If logged in, redirect to dashboard
  if (user) {
    router.push('/learn');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="ScamSmart" className="w-12 h-12" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">ScamSmart</h1>
                <p className="text-sm text-gray-600">Think Before You Click</p>
              </div>
            </div>
            <button
              onClick={() => router.push('/signin')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg text-lg transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="text-7xl mb-6">🛡️</div>
          <h2 className="text-5xl font-black text-gray-900 mb-6">
            Learn to Spot Scams.<br />Protect Yourself Online.
          </h2>
          <p className="text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Free interactive lessons teaching you how to identify and avoid online scams, phishing, and fraud.
          </p>
          <button
            onClick={() => router.push('/signin')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 py-5 rounded-xl text-2xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Start Learning - It's Free
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon="📚"
            title="48 Expert Lessons"
            description="Learn everything from basic phishing to advanced scams. Step-by-step, interactive content."
          />
          <FeatureCard
            icon="🎮"
            title="Practice Challenges"
            description="Test your skills with real-world scam scenarios. Get instant feedback."
          />
          <FeatureCard
            icon="🏆"
            title="Track Progress"
            description="Earn XP, maintain streaks, and compete on leaderboards while you learn."
          />
        </div>

        {/* What You'll Learn */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12 mb-16">
          <h3 className="text-3xl font-black text-gray-900 mb-8 text-center">
            What You'll Learn
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <LearningPoint text="Identify phishing emails and fake websites" />
            <LearningPoint text="Recognize phone and SMS scams" />
            <LearningPoint text="Protect your personal information online" />
            <LearningPoint text="Secure your passwords and accounts" />
            <LearningPoint text="Spot investment and romance scams" />
            <LearningPoint text="Know what to do if you've been scammed" />
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-12 text-white text-center mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-black mb-2">48</div>
              <p className="text-xl">Interactive Lessons</p>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">Free</div>
              <p className="text-xl">No Credit Card Required</p>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">15 min</div>
              <p className="text-xl">Average Completion Time</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-4xl font-black text-gray-900 mb-6">
            Ready to Protect Yourself?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands learning to spot scams and stay safe online.
          </p>
          <button
            onClick={() => router.push('/signin')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 py-5 rounded-xl text-2xl transition-all shadow-lg"
          >
            Get Started Free
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4">ScamSmart</h4>
              <p className="text-gray-400">
                Learn to spot scams and protect yourself online with free interactive lessons.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/signin" className="text-gray-400 hover:text-white transition-colors">
                    Sign In
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <p className="text-gray-400">
                Questions? Email us at:<br />
                <a href="mailto:jake.dryka@gmail.com" className="text-blue-400 hover:text-blue-300">
                  jake.dryka@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 ScamSmart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  );
}

function LearningPoint({ text }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-2xl text-green-600 flex-shrink-0">✓</span>
      <p className="text-lg text-gray-700">{text}</p>
    </div>
  );
}