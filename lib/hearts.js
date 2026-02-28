export const MAX_HEARTS = 5;
export const HEART_REGEN_TIME_MS = 60 * 60 * 1000;

export function calculateHeartRegen(lastRegenTime) {
  if (!lastRegenTime) return 0;
  
  const timePassed = Date.now() - new Date(lastRegenTime).getTime();
  const hoursPassedTotal = timePassed / HEART_REGEN_TIME_MS;
  
  return Math.floor(hoursPassedTotal);
}

export function getTimeUntilNextHeart(lastRegenTime) {
  if (!lastRegenTime) return 0;
  
  const timePassed = Date.now() - new Date(lastRegenTime).getTime();
  const timeUntilNext = HEART_REGEN_TIME_MS - (timePassed % HEART_REGEN_TIME_MS);
  
  return timeUntilNext;
}

export function formatTimeRemaining(milliseconds) {
  const totalSeconds = Math.ceil(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

export async function updateUserHearts(userId, supabase) {
  try {
    const { data: progress } = await supabase
      .from('user_progress')
      .select('hearts, last_heart_regen, is_premium')
      .eq('user_id', userId)
      .single();

    if (!progress) return null;

    if (progress.is_premium) {
      return { hearts: MAX_HEARTS, isPremium: true };
    }

    const heartsToRegen = calculateHeartRegen(progress.last_heart_regen);
    
    if (heartsToRegen > 0 && progress.hearts < MAX_HEARTS) {
      const newHearts = Math.min(MAX_HEARTS, progress.hearts + heartsToRegen);
      
      await supabase
        .from('user_progress')
        .update({ 
          hearts: newHearts,
          last_heart_regen: new Date().toISOString()
        })
        .eq('user_id', userId);

      return { hearts: newHearts, isPremium: false };
    }

    return { hearts: progress.hearts, isPremium: false };
  } catch (error) {
    console.error('Error updating hearts:', error);
    return null;
  }
}

export async function loseHeart(userId, supabase) {
  try {
    const { data: progress } = await supabase
      .from('user_progress')
      .select('hearts, is_premium')
      .eq('user_id', userId)
      .single();

    if (progress?.is_premium) {
      return { hearts: MAX_HEARTS, canContinue: true };
    }

    if (!progress || progress.hearts <= 0) {
      return { hearts: 0, canContinue: false };
    }

    const newHearts = progress.hearts - 1;

    await supabase
      .from('user_progress')
      .update({ hearts: newHearts })
      .eq('user_id', userId);

    return { 
      hearts: newHearts, 
      canContinue: newHearts > 0 
    };
  } catch (error) {
    console.error('Error losing heart:', error);
    return { hearts: 0, canContinue: false };
  }
}

export async function refillHearts(userId, supabase) {
  try {
    await supabase
      .from('user_progress')
      .update({ 
        hearts: MAX_HEARTS,
        last_heart_regen: new Date().toISOString()
      })
      .eq('user_id', userId);

    return { success: true, hearts: MAX_HEARTS };
  } catch (error) {
    console.error('Error refilling hearts:', error);
    return { success: false };
  }
}