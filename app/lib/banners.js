export const BANNERS = {
  DEFAULT: {
    id: 'DEFAULT',
    name: 'Default',
    emoji: '🎨',
    gradient: 'from-blue-500 to-purple-600',
    description: 'Your starting banner',
    requirement: { type: 'default' }
  },
  FIRE_STORM: {
    id: 'FIRE_STORM',
    name: 'Fire Storm',
    emoji: '🔥',
    gradient: 'from-red-500 via-orange-500 to-yellow-500',
    description: 'Unlock by completing 10 lessons',
    requirement: { type: 'lessons', count: 10 }
  },
  OCEAN_WAVE: {
    id: 'OCEAN_WAVE',
    name: 'Ocean Wave',
    emoji: '🌊',
    gradient: 'from-blue-400 via-cyan-500 to-teal-500',
    description: 'Unlock by completing 25 lessons',
    requirement: { type: 'lessons', count: 25 }
  },
  SPACE_NEBULA: {
    id: 'SPACE_NEBULA',
    name: 'Space Nebula',
    emoji: '🌌',
    gradient: 'from-purple-600 via-pink-600 to-indigo-700',
    description: 'Unlock by completing 50 lessons',
    requirement: { type: 'lessons', count: 50 }
  },
  NEON_CITY: {
    id: 'NEON_CITY',
    name: 'Neon City',
    emoji: '🌃',
    gradient: 'from-pink-500 via-purple-500 to-blue-500',
    description: 'Unlock by completing 75 lessons',
    requirement: { type: 'lessons', count: 75 }
  },
  GOLDEN_SUNSET: {
    id: 'GOLDEN_SUNSET',
    name: 'Golden Sunset',
    emoji: '🌅',
    gradient: 'from-yellow-400 via-orange-500 to-pink-500',
    description: 'Unlock by completing 100 lessons',
    requirement: { type: 'lessons', count: 100 }
  },
  MASTER_CROWN: {
    id: 'MASTER_CROWN',
    name: 'Master Crown',
    emoji: '👑',
    gradient: 'from-yellow-300 via-yellow-500 to-orange-600',
    description: 'Unlock by completing ALL 115 lessons!',
    requirement: { type: 'lessons', count: 115 }
  },
  DIAMOND_ELITE: {
    id: 'DIAMOND_ELITE',
    name: 'Diamond Elite',
    emoji: '💎',
    gradient: 'from-cyan-300 via-blue-400 to-indigo-500',
    description: 'Unlock by earning 5,000 XP',
    requirement: { type: 'xp', count: 5000 }
  },
  STREAK_KING: {
    id: 'STREAK_KING',
    name: 'Streak King',
    emoji: '⚡',
    gradient: 'from-orange-400 via-red-500 to-pink-500',
    description: 'Unlock with a 30-day streak',
    requirement: { type: 'streak', count: 30 }
  },
  PREMIUM_STAR: {
    id: 'PREMIUM_STAR',
    name: 'Premium Star',
    emoji: '⭐',
    gradient: 'from-yellow-200 via-yellow-400 to-yellow-600',
    description: 'Exclusive to Premium members',
    requirement: { type: 'premium' }
  }
};

export function checkBannerUnlocks(progress) {
  const unlockedBanners = [];

  Object.values(BANNERS).forEach((banner) => {
    let unlocked = false;

    switch (banner.requirement.type) {
      case 'default':
        unlocked = true;
        break;
      case 'lessons':
        unlocked = progress?.lessons_completed >= banner.requirement.count;
        break;
      case 'xp':
        unlocked = progress?.total_xp >= banner.requirement.count;
        break;
      case 'streak':
        unlocked = progress?.streak_count >= banner.requirement.count;
        break;
      case 'premium':
        unlocked = progress?.is_premium === true;
        break;
    }

    if (unlocked) {
      unlockedBanners.push(banner.id);
    }
  });

  return unlockedBanners;
}