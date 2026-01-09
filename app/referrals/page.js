'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase';
import DarkModeToggle from '../components/DarkModeToggle';

export default function Referrals() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(null);
  const [referrals, setReferrals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

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
    await loadReferrals(user.id);
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

  const loadReferrals = async (userId) => {
    try {
      const { data } = await supabase
        .from('referrals')
        .select('*, referred_user:user_progress!referrals_referred_user_id_fkey(email, display_name)')
        .eq('referrer_user_id', userId)
        .order('created_at', { ascending: false });

      setReferrals(data || []);
    } catch (error) {
      console.error('Error loading referrals:', error);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  const copyReferralLink = () => {
    const referralLink = `https://scamsmart.click?ref=${progress?.referral_code}`;
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareVia = (platform) => {
    const referralLink = `https://scamsmart.click?ref=${progress?.referral_code}`;
    const message = `🎯 Join me on ScamSmart and learn how to detect scams! Use my referral code and we'll both get 100 XP + 1 week of Premium FREE! 🛡️`;
    
    const urls = {
      gmail: `https://mail.google.com/mail/?view=cm&fs=1&su=${encodeURIComponent('Join me on ScamSmart!')}&body=${encodeURIComponent(message)}%0A%0A${encodeURIComponent(referralLink)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(message + '\n\n' + referralLink)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(referralLink)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}&quote=${encodeURIComponent(message)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(referralLink)}`,
      reddit: `https://reddit.com/submit?url=${encodeURIComponent(referralLink)}&title=${encodeURIComponent('ScamSmart - Learn to Detect Scams')}`,
    };

    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="ScamSmart" className="w-12 h-12 drop-shadow-md" />
              <div>
                <h1 className="text-2xl font-black text-gray-900 dark:text-white">ScamSmart</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Think Before You Click</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <DarkModeToggle />
              <button onClick={() => router.push('/dashboard')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors">
                Dashboard
              </button>
              <button onClick={handleSignOut} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2">🎁 Refer Friends</h2>
          <p className="text-gray-600 dark:text-gray-400">Share ScamSmart and earn rewards together!</p>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 mb-8 text-white shadow-xl">
          <h3 className="text-2xl font-black mb-4">Your Referral Link</h3>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4 break-all">
            <code className="text-sm">https://scamsmart.click?ref={progress?.referral_code}</code>
          </div>
          
          <button
            onClick={copyReferralLink}
            className="w-full bg-white text-blue-600 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors mb-4"
          >
            {copied ? '✅ Copied!' : '📋 Copy Link'}
          </button>

          <div className="border-t border-white/20 pt-4 mb-4">
            <p className="text-sm font-semibold mb-3">Share via:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <button
                onClick={() => shareVia('gmail')}
                className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-3 rounded-lg font-semibold transition-colors"
              >
                <span>📧</span>
                <span>Gmail</span>
              </button>

              <button
                onClick={() => shareVia('whatsapp')}
                className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-3 rounded-lg font-semibold transition-colors"
              >
                <span>💬</span>
                <span>WhatsApp</span>
              </button>

              <button
                onClick={() => shareVia('twitter')}
                className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-3 rounded-lg font-semibold transition-colors"
              >
                <span>🐦</span>
                <span>Twitter</span>
              </button>

              <button
                onClick={() => shareVia('facebook')}
                className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-3 rounded-lg font-semibold transition-colors"
              >
                <span>📘</span>
                <span>Facebook</span>
              </button>

              <button
                onClick={() => shareVia('linkedin')}
                className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-3 rounded-lg font-semibold transition-colors"
              >
                <span>💼</span>
                <span>LinkedIn</span>
              </button>

              <button
                onClick={() => shareVia('reddit')}
                className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-3 rounded-lg font-semibold transition-colors"
              >
                <span>🤖</span>
                <span>Reddit</span>
              </button>
            </div>
          </div>

          <div className="text-sm">
            <p className="font-semibold mb-2">🎉 Referral Rewards:</p>
            <ul className="space-y-1 text-white/90">
              <li>• You get 100 XP + 1 week Premium FREE</li>
              <li>• Your friend gets 100 XP + 1 week Premium FREE</li>
              <li>• Unlimited referrals!</li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
          <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">📊 Your Referrals ({referrals.length})</h3>
          
          {referrals.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400 text-lg mb-2">No referrals yet</p>
              <p className="text-gray-400 dark:text-gray-500 text-sm">Share your link to start earning rewards!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {referrals.map((referral, index) => (
                <div key={referral.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {referral.referred_user?.display_name || referral.referred_user?.email || 'User'}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(referral.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-600 dark:text-green-400 font-bold">+100 XP</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Premium unlocked</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}