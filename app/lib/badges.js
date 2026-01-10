export const BADGES = {
  // Lesson Completion Badges
  LESSONS_5: {
    id: 'LESSONS_5',
    name: 'Getting Started',
    description: 'Complete 5 lessons',
    emoji: '📚',
    requirement: { type: 'lessons', count: 5 }
  },
  LESSONS_10: {
    id: 'LESSONS_10',
    name: 'Learner',
    description: 'Complete 10 lessons',
    emoji: '📖',
    requirement: { type: 'lessons', count: 10 }
  },
  LESSONS_25: {
    id: 'LESSONS_25',
    name: 'Dedicated Student',
    description: 'Complete 25 lessons',
    emoji: '🎓',
    requirement: { type: 'lessons', count: 25 }
  },
  LESSONS_50: {
    id: 'LESSONS_50',
    name: 'Scholar',
    description: 'Complete 50 lessons',
    emoji: '🏆',
    requirement: { type: 'lessons', count: 50 }
  },
  LESSONS_ALL: {
    id: 'LESSONS_ALL',
    name: 'Master',
    description: 'Complete all 115 lessons',
    emoji: '👑',
    requirement: { type: 'lessons', count: 115 }
  },

  // Streak Badges
  STREAK_3: {
    id: 'STREAK_3',
    name: 'On Fire',
    description: '3 day streak',
    emoji: '🔥',
    requirement: { type: 'streak', count: 3 }
  },
  STREAK_7: {
    id: 'STREAK_7',
    name: 'Week Warrior',
    description: '7 day streak',
    emoji: '⚡',
    requirement: { type: 'streak', count: 7 }
  },
  STREAK_30: {
    id: 'STREAK_30',
    name: 'Unstoppable',
    description: '30 day streak',
    emoji: '💪',
    requirement: { type: 'streak', count: 30 }
  },
  STREAK_100: {
    id: 'STREAK_100',
    name: 'Legend',
    description: '100 day streak',
    emoji: '🌟',
    requirement: { type: 'streak', count: 100 }
  },

  // XP Badges
  XP_1000: {
    id: 'XP_1000',
    name: 'Rising Star',
    description: 'Earn 1,000 XP',
    emoji: '⭐',
    requirement: { type: 'xp', count: 1000 }
  },
  XP_5000: {
    id: 'XP_5000',
    name: 'Expert',
    description: 'Earn 5,000 XP',
    emoji: '💎',
    requirement: { type: 'xp', count: 5000 }
  },
  XP_10000: {
    id: 'XP_10000',
    name: 'Elite',
    description: 'Earn 10,000 XP',
    emoji: '🏅',
    requirement: { type: 'xp', count: 10000 }
  },

  // Special Badges
  PREMIUM: {
    id: 'PREMIUM',
    name: 'Premium Member',
    description: 'Unlock Premium',
    emoji: '⭐',
    requirement: { type: 'premium' }
  },
  FEEDBACK: {
    id: 'FEEDBACK',
    name: 'Feedback Hero',
    description: 'Gave valuable feedback',
    emoji: '💬',
    requirement: { type: 'feedback' }
  },
  REFERRAL_1: {
    id: 'REFERRAL_1',
    name: 'Friend Bringer',
    description: 'Refer 1 friend',
    emoji: '🎁',
    requirement: { type: 'referrals', count: 1 }
  },
  REFERRAL_5: {
    id: 'REFERRAL_5',
    name: 'Ambassador',
    description: 'Refer 5 friends',
    emoji: '🎯',
    requirement: { type: 'referrals', count: 5 }
  },
  REFERRAL_10: {
    id: 'REFERRAL_10',
    name: 'Influencer',
    description: 'Refer 10 friends',
    emoji: '🚀',
    requirement: { type: 'referrals', count: 10 }
  },

  // Daily Challenge Badges
  DAILY_1: {
    id: 'DAILY_1',
    name: 'Challenge Accepted',
    description: 'Complete 1 daily challenge',
    emoji: '🎯',
    requirement: { type: 'daily_challenges', count: 1 }
  },
  DAILY_7: {
    id: 'DAILY_7',
    name: 'Daily Grinder',
    description: 'Complete 7 daily challenges',
    emoji: '🎲',
    requirement: { type: 'daily_challenges', count: 7 }
  },
  DAILY_30: {
    id: 'DAILY_30',
    name: 'Challenge Master',
    description: 'Complete 30 daily challenges',
    emoji: '🎪',
    requirement: { type: 'daily_challenges', count: 30 }
  }
};

// Check which badges a user has unlocked
export async function checkBadgeUnlocks(userId, supabase) {
  const unlockedBadges = [];

  try {
    // Get user progress
    const { data: progress } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .single();

    // Get referral count
    const { data: referrals } = await supabase
      .from('referrals')
      .select('id')
      .eq('referrer_user_id', userId);

    // Get daily challenge count
    const { data: dailyChallenges } = await supabase
      .from('daily_challenges')
      .select('id')
      .eq('user_id', userId);

    // Get feedback status
    const { data: feedback } = await supabase
      .from('feedback')
      .select('id')
      .eq('user_id', userId)
      .single();

    // Check each badge
    Object.values(BADGES).forEach((badge) => {
      let unlocked = false;

      switch (badge.requirement.type) {
        case 'lessons':
          unlocked = progress?.lessons_completed >= badge.requirement.count;
          break;
        case 'streak':
          unlocked = progress?.streak_count >= badge.requirement.count;
          break;
        case 'xp':
          unlocked = progress?.total_xp >= badge.requirement.count;
          break;
        case 'premium':
          unlocked = progress?.is_premium === true;
          break;
        case 'feedback':
          unlocked = !!feedback;
          break;
        case 'referrals':
          unlocked = (referrals?.length || 0) >= badge.requirement.count;
          break;
        case 'daily_challenges':
          unlocked = (dailyChallenges?.length || 0) >= badge.requirement.count;
          break;
      }

      if (unlocked) {
        unlockedBadges.push(badge.id);
      }
    });

    // Save unlocked badges to database
    for (const badgeId of unlockedBadges) {
      await supabase
        .from('user_badges')
        .upsert(
          { user_id: userId, badge_id: badgeId },
          { onConflict: 'user_id,badge_id', ignoreDuplicates: true }
        );
    }

    return unlockedBadges;
  } catch (error) {
    console.error('Error checking badge unlocks:', error);
    return [];
  }
}