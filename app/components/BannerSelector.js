'use client';
import { BANNERS } from '../lib/banners';

export default function BannerSelector({ unlockedBanners, selectedBanner, onSelect, onCancel, onSave }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
      <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 text-center">
        Choose Your Banner
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6 text-center text-sm">
        Unlock more banners by completing lessons and achievements!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 max-h-[60vh] overflow-y-auto pr-2">
        {Object.values(BANNERS).map((banner) => {
          const isUnlocked = unlockedBanners.includes(banner.id);
          const isSelected = selectedBanner === banner.id;

          return (
            <button
              key={banner.id}
              onClick={() => isUnlocked && onSelect(banner.id)}
              disabled={!isUnlocked}
              className={`relative rounded-xl p-6 transition-all ${
                isUnlocked
                  ? `cursor-pointer hover:scale-105 ${
                      isSelected
                        ? 'ring-4 ring-blue-500 shadow-xl'
                        : 'hover:shadow-lg'
                    }`
                  : 'cursor-not-allowed opacity-50'
              }`}
            >
              {/* Banner Preview */}
              <div className={`bg-gradient-to-r ${banner.gradient} rounded-lg p-6 mb-4 shadow-md relative overflow-hidden`}>
                <div className="text-5xl mb-2">{banner.emoji}</div>
                <div className="text-white font-black text-xl">{banner.name}</div>
                
                {/* Lock overlay for locked banners */}
                {!isUnlocked && (
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-6xl">🔒</span>
                  </div>
                )}
              </div>

              {/* Banner Info */}
              <p className={`text-sm ${isUnlocked ? 'text-gray-700 dark:text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>
                {banner.description}
              </p>

              {isSelected && (
                <div className="mt-3 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold inline-block">
                  ✓ Selected
                </div>
              )}

              {!isUnlocked && (
                <div className="mt-3 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-bold inline-block">
                  🔒 Locked
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="flex gap-3">
        <button
          onClick={onSave}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
        >
          Save Banner
        </button>
        <button
          onClick={onCancel}
          className="px-6 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-bold py-3 rounded-lg transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

// Banner Display Component (for showing user's banner)
export function BannerDisplay({ bannerId, userProgress, size = 'medium' }) {
  const banner = BANNERS[bannerId] || BANNERS.DEFAULT;
  
  const sizeClasses = {
    small: 'h-24 text-sm',
    medium: 'h-32 text-base',
    large: 'h-48 text-lg'
  };

  const level = Math.floor((userProgress?.total_xp || 0) / 500) + 1;

  return (
    <div className={`bg-gradient-to-r ${banner.gradient} rounded-2xl shadow-xl ${sizeClasses[size]} relative overflow-hidden`}>
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
      </div>

      <div className="relative h-full flex items-center justify-between px-6 text-white">
        <div>
          <div className="text-4xl mb-2">{banner.emoji}</div>
          <h3 className="font-black text-2xl">{userProgress?.display_name || 'User'}</h3>
          <p className="text-white/90 text-sm font-semibold">Level {level}</p>
        </div>

        <div className="text-right">
          <div className="text-3xl font-black mb-1">{userProgress?.total_xp?.toLocaleString() || 0}</div>
          <p className="text-white/90 text-xs font-semibold">XP</p>
          {userProgress?.streak_count > 0 && (
            <p className="text-white/90 text-sm font-bold mt-2">
              🔥 {userProgress.streak_count} day streak
            </p>
          )}
          {userProgress?.is_premium && (
            <span className="inline-block bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold mt-2">
              ⭐ Premium
            </span>
          )}
        </div>
      </div>
    </div>
  );
}