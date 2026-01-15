export const SKILLS = {
  DECEPTION_DETECTION: {
    id: 'deception_detection',
    name: 'Deception Detection',
    emoji: '🔍',
    description: 'Spot lies, fake claims, and misleading information',
    color: 'from-red-500 to-pink-600',
    bgColor: 'bg-red-50',
    darkBgColor: 'dark:bg-red-900/20',
    textColor: 'text-red-600',
    darkTextColor: 'dark:text-red-400'
  },
  PRESSURE_RESISTANCE: {
    id: 'pressure_resistance',
    name: 'Pressure Resistance',
    emoji: '🛡️',
    description: 'Stay calm under urgency, threats, and emotional manipulation',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50',
    darkBgColor: 'dark:bg-blue-900/20',
    textColor: 'text-blue-600',
    darkTextColor: 'dark:text-blue-400'
  },
  PATTERN_RECOGNITION: {
    id: 'pattern_recognition',
    name: 'Pattern Recognition',
    emoji: '🧩',
    description: 'Identify common scam tactics, templates, and structures',
    color: 'from-purple-500 to-indigo-600',
    bgColor: 'bg-purple-50',
    darkBgColor: 'dark:bg-purple-900/20',
    textColor: 'text-purple-600',
    darkTextColor: 'dark:text-purple-400'
  },
  DIGITAL_SELF_DEFENSE: {
    id: 'digital_self_defense',
    name: 'Digital Self-Defense',
    emoji: '🔒',
    description: 'Protect your data, accounts, and digital identity',
    color: 'from-green-500 to-teal-600',
    bgColor: 'bg-green-50',
    darkBgColor: 'dark:bg-green-900/20',
    textColor: 'text-green-600',
    darkTextColor: 'dark:text-green-400'
  },
  MANIPULATION_AWARENESS: {
    id: 'manipulation_awareness',
    name: 'Manipulation Awareness',
    emoji: '🎭',
    description: 'Recognize psychological tricks and social engineering',
    color: 'from-yellow-500 to-orange-600',
    bgColor: 'bg-yellow-50',
    darkBgColor: 'dark:bg-yellow-900/20',
    textColor: 'text-yellow-600',
    darkTextColor: 'dark:text-yellow-400'
  }
};

// Map lessons to skills (each lesson can test multiple skills)
// Format: lessonId: { skillId: weight (0-1) }
export const LESSON_SKILL_MAP = {
  '01-general-scam-red-flags': {
    deception_detection: 0.6,
    pattern_recognition: 0.4
  },
  '02-stop-check-protect': {
    pressure_resistance: 0.5,
    digital_self_defense: 0.5
  },
  '03-phishing-email-basics': {
    deception_detection: 0.7,
    pattern_recognition: 0.3
  },
  '04-fake-websites': {
    deception_detection: 0.5,
    digital_self_defense: 0.5
  },
  '05-social-media-scams': {
    deception_detection: 0.6,
    manipulation_awareness: 0.4
  },
  // ... We'll add all 115 lessons in the next step
};

/**
 * Calculate new skill rating based on performance
 * Uses: 60% last 10 activities + 30% cumulative + 10% accuracy
 */
export async function calculateSkillRating(userId, skillType, supabase) {
  try {
    // Get last 10 activities for this skill
    const { data: recentActivities } = await supabase
      .from('skill_activity_log')
      .select('performance_score, accuracy_percentage')
      .eq('user_id', userId)
      .eq('skill_type', skillType)
      .order('created_at', { ascending: false })
      .limit(10);

    if (!recentActivities || recentActivities.length === 0) {
      return 0; // Not yet rated
    }

    // 60% - Average of last 10 activities
    const recentAverage = recentActivities.reduce((sum, act) => sum + act.performance_score, 0) / recentActivities.length;
    const recentComponent = recentAverage * 0.6;

    // 30% - Cumulative with diminishing returns
    const { data: allActivities } = await supabase
      .from('skill_activity_log')
      .select('performance_score')
      .eq('user_id', userId)
      .eq('skill_type', skillType)
      .order('created_at', { ascending: false })
      .limit(50);

    const totalActivities = allActivities?.length || 0;
    const cumulativeAverage = allActivities ? 
      allActivities.reduce((sum, act) => sum + act.performance_score, 0) / totalActivities : 0;
    
    // Apply diminishing returns (logarithmic scale)
    const experienceFactor = Math.min(1, Math.log10(totalActivities + 1) / 2);
    const cumulativeComponent = cumulativeAverage * experienceFactor * 0.3;

    // 10% - Overall accuracy percentage
    const avgAccuracy = recentActivities.reduce((sum, act) => sum + (act.accuracy_percentage || 0), 0) / recentActivities.length;
    const accuracyComponent = (avgAccuracy / 100) * 10 * 0.1;

    // Final rating (0-10)
    const finalRating = Math.min(10, Math.max(0, recentComponent + cumulativeComponent + accuracyComponent));

    return Math.round(finalRating * 10) / 10; // Round to 1 decimal
  } catch (error) {
    console.error('Error calculating skill rating:', error);
    return 0;
  }
}

/**
 * Log a skill activity and update user's skill ratings
 */
export async function logSkillActivity(userId, lessonId, performanceScore, accuracyPercentage, supabase) {
  try {
    const lessonSkills = LESSON_SKILL_MAP[lessonId];
    
    if (!lessonSkills) {
      console.warn(`No skill mapping found for lesson: ${lessonId}`);
      return;
    }

    // Log activity for each skill this lesson tests
    for (const [skillType, weight] of Object.entries(lessonSkills)) {
      const weightedScore = performanceScore * weight;

      await supabase.from('skill_activity_log').insert([
        {
          user_id: userId,
          lesson_id: lessonId,
          skill_type: skillType,
          performance_score: weightedScore,
          accuracy_percentage: accuracyPercentage
        }
      ]);

      // Recalculate and update skill rating
      const newRating = await calculateSkillRating(userId, skillType, supabase);
      
      const columnName = `skill_${skillType}`;
      await supabase
        .from('user_progress')
        .update({ [columnName]: newRating })
        .eq('user_id', userId);
    }
  } catch (error) {
    console.error('Error logging skill activity:', error);
  }
}

/**
 * Get user's skill ratings
 */
export async function getUserSkills(userId, supabase) {
  try {
    const { data } = await supabase
      .from('user_progress')
      .select('skill_deception_detection, skill_pressure_resistance, skill_pattern_recognition, skill_digital_self_defense, skill_manipulation_awareness')
      .eq('user_id', userId)
      .single();

    if (!data) return null;

    return {
      deception_detection: data.skill_deception_detection || 0,
      pressure_resistance: data.skill_pressure_resistance || 0,
      pattern_recognition: data.skill_pattern_recognition || 0,
      digital_self_defense: data.skill_digital_self_defense || 0,
      manipulation_awareness: data.skill_manipulation_awareness || 0
    };
  } catch (error) {
    console.error('Error getting user skills:', error);
    return null;
  }
}