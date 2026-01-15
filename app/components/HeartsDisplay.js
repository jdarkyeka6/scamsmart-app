'use client';
import { useState, useEffect } from 'react';
import { MAX_HEARTS, getTimeUntilNextHeart, formatTimeRemaining } from '../lib/hearts';

export default function HeartsDisplay({ hearts, isPremium, lastRegenTime, compact = false }) {
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    if (isPremium || hearts >= MAX_HEARTS) return;

    const updateTimer = () => {
      const ms = getTimeUntilNextHeart(lastRegenTime);
      setTimeRemaining(formatTimeRemaining(ms));
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [hearts, isPremium, lastRegenTime]);

  if (compact) {
    return (
      <div className="flex items-center gap-1">
        {isPremium ? (
          <span className="text-lg">❤️ ∞</span>
        ) : (
          <>
            {[...Array(MAX_HEARTS)].map((_, i) => (
              <span key={i} className="text-lg">
                {i < hearts ? '❤️' : '🤍'}
              </span>
            ))}
          </>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-black text-gray-900 dark:text-white">Hearts</h3>
        {isPremium && (
          <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
            ⭐ Premium
          </span>
        )}
      </div>

      {isPremium ? (
        <div className="text-center py-8">
          <div className="text-6xl mb-4">❤️</div>
          <p className="text-2xl font-black text-gray-900 dark:text-white mb-2">Unlimited Hearts</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Premium members never run out of hearts!
          </p>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-center gap-2 mb-6">
            {[...Array(MAX_HEARTS)].map((_, i) => (
              <div key={i} className="text-5xl">
                {i < hearts ? '❤️' : '🤍'}
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-3xl font-black text-gray-900 dark:text-white mb-2">
              {hearts} / {MAX_HEARTS}
            </p>
            
            {hearts < MAX_HEARTS && (
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Next heart in:
                </p>
                <p className="text-2xl font-black text-blue-600 dark:text-blue-400">
                  {timeRemaining}
                </p>
              </div>
            )}

            {hearts === 0 && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-red-700 dark:text-red-300 mb-2">
                  ⚠️ Out of hearts!
                </p>
                <p className="text-xs text-red-600 dark:text-red-400">
                  Wait for hearts to regenerate or upgrade to Premium for unlimited hearts
                </p>
              </div>
            )}

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                💡 <strong>How hearts work:</strong>
              </p>
              <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1 text-left">
                <li>• Lose 1 heart when you get an answer wrong</li>
                <li>• Hearts regenerate 1 per hour (max 5)</li>
                <li>• Premium members get unlimited hearts!</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Modal when out of hearts
export function OutOfHeartsModal({ onClose, onUpgrade, timeRemaining }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-md w-full border border-gray-100 dark:border-gray-700">
        <div className="text-center mb-6">
          <div className="text-7xl mb-4">💔</div>
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2">
            Out of Hearts!
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            You've run out of hearts. Wait for them to regenerate or upgrade to Premium!
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Next heart in:
          </p>
          <p className="text-3xl font-black text-blue-600 dark:text-blue-400">
            {timeRemaining}
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={onUpgrade}
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-black py-4 rounded-xl transition-all shadow-lg text-lg"
          >
            ⭐ Get Premium - Unlimited Hearts!
          </button>
          
          <button
            onClick={onClose}
            className="w-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-bold py-3 rounded-xl transition-colors"
          >
            Wait for Hearts
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            💡 Hearts regenerate automatically 1 per hour
          </p>
        </div>
      </div>
    </div>
  );
}