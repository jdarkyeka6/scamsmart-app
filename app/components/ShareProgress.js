'use client';
import { useState } from 'react';

export default function ShareProgress({ progress, userEmail }) {
  const [copied, setCopied] = useState(false);

  const shareText = `🎯 I just completed ${progress?.lessons_completed || 0} scam detection lessons on ScamSmart and earned ${progress?.total_xp || 0} XP! 

Join me in learning how to spot scams and protect yourself online! 🛡️

#ScamSmart #CyberSecurity`;

  const shareUrl = 'https://scamsmart.click';

  const handleShare = (platform) => {
    const encodedText = encodeURIComponent(shareText);
    const encodedUrl = encodeURIComponent(shareUrl);

    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      gmail: `https://mail.google.com/mail/?view=cm&fs=1&su=${encodeURIComponent('Check out ScamSmart!')}&body=${encodedText}%0A%0A${encodedUrl}`,
      whatsapp: `https://wa.me/?text=${encodedText}%0A%0A${encodedUrl}`,
      reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodeURIComponent('ScamSmart - Learn to Detect Scams')}`,
    };

    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
      <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">📢 Share Your Progress</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
        Inspire your friends and family to learn scam detection!
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <button
          onClick={() => handleShare('twitter')}
          className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
        >
          <span>🐦</span>
          <span className="hidden sm:inline">Twitter</span>
        </button>

        <button
          onClick={() => handleShare('facebook')}
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
        >
          <span>📘</span>
          <span className="hidden sm:inline">Facebook</span>
        </button>

        <button
          onClick={() => handleShare('linkedin')}
          className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
        >
          <span>💼</span>
          <span className="hidden sm:inline">LinkedIn</span>
        </button>

        <button
          onClick={() => handleShare('gmail')}
          className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
        >
          <span>📧</span>
          <span className="hidden sm:inline">Gmail</span>
        </button>

        <button
          onClick={() => handleShare('whatsapp')}
          className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
        >
          <span>💬</span>
          <span className="hidden sm:inline">WhatsApp</span>
        </button>

        <button
          onClick={() => handleShare('reddit')}
          className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
        >
          <span>🤖</span>
          <span className="hidden sm:inline">Reddit</span>
        </button>

        <button
          onClick={copyToClipboard}
          className="col-span-2 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
        >
          <span>{copied ? '✅' : '📋'}</span>
          <span>{copied ? 'Copied!' : 'Copy Link'}</span>
        </button>
      </div>
    </div>
  );
}