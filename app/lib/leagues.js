export const LEAGUES = {
  BRONZE: {
    id: 'BRONZE',
    name: 'Bronze League',
    emoji: '🥉',
    minXP: 0,
    maxXP: 999,
    color: 'from-orange-600 to-orange-800',
    bgColor: 'bg-orange-50',
    darkBgColor: 'dark:bg-orange-900/20',
    textColor: 'text-orange-600',
    darkTextColor: 'dark:text-orange-400',
    borderColor: 'border-orange-300',
    description: 'Just starting your scam detection journey'
  },
  SILVER: {
    id: 'SILVER',
    name: 'Silver League',
    emoji: '🥈',
    minXP: 1000,
    maxXP: 2499,
    color: 'from-gray-400 to-gray-600',
    bgColor: 'bg-gray-50',
    darkBgColor: 'dark:bg-gray-700/20',
    textColor: 'text-gray-600',
    darkTextColor: 'dark:text-gray-400',
    borderColor: 'border-gray-300',
    description: 'Building your scam detection skills'
  },
  GOLD: {
    id: 'GOLD',
    name: 'Gold League',
    emoji: '🥇',
    minXP: 2500,
    maxXP: 4999,
    color: 'from-yellow-400 to-yellow-600',
    bgColor: 'bg-yellow-50',
    darkBgColor: 'dark:bg-yellow-900/20',
    textColor: 'text-yellow-600',
    darkTextColor: 'dark:text-yellow-400',
    borderColor: 'border-yellow-300',
    description: 'A skilled scam detector'
  },
  DIAMOND: {
    id: 'DIAMOND',
    name: 'Diamond League',
    emoji: '💎',
    minXP: 5000,
    maxXP: 9999,
    color: 'from-cyan-400 to-blue-600',
    bgColor: 'bg-cyan-50',
    darkBgColor: 'dark:bg-cyan-900/20',
    textColor: 'text-cyan-600',
    darkTextColor: 'dark:text-cyan-400',
    borderColor: 'border-cyan-300',
    description: 'Elite scam detection expert'
  },
  MASTER: {
    id: 'MASTER',
    name: 'Master League',
    emoji: '👑',
    minXP: 10000,
    maxXP: Infinity,
    color: 'from-purple-500 to-pink-600',
    bgColor: 'bg-purple-50',
    darkBgColor: 'dark:bg-purple-900/20',
    textColor: 'text-purple-600',
    darkTextColor: 'dark:text-purple-400',
    borderColor: 'border-purple-300',
    description: 'Legendary scam detection master'
  }
};

export function getUserLeague(xp) {
  if (xp >= LEAGUES.MASTER.minXP) return LEAGUES.MASTER;
  if (xp >= LEAGUES.DIAMOND.minXP) return LEAGUES.DIAMOND;
  if (xp >= LEAGUES.GOLD.minXP) return LEAGUES.GOLD;
  if (xp >= LEAGUES.SILVER.minXP) return LEAGUES.SILVER;
  return LEAGUES.BRONZE;
}

export function getNextLeague(currentLeague) {
  const leagueOrder = ['BRONZE', 'SILVER', 'GOLD', 'DIAMOND', 'MASTER'];
  const currentIndex = leagueOrder.indexOf(currentLeague.id);
  
  if (currentIndex === leagueOrder.length - 1) return null; // Already at max
  
  return LEAGUES[leagueOrder[currentIndex + 1]];
}

export function getXPToNextLeague(xp, currentLeague) {
  const nextLeague = getNextLeague(currentLeague);
  if (!nextLeague) return 0;
  
  return nextLeague.minXP - xp;
}

export function getLeagueProgress(xp, currentLeague) {
  if (currentLeague.id === 'MASTER') return 100;
  
  const leagueRange = currentLeague.maxXP - currentLeague.minXP + 1;
  const progressInLeague = xp - currentLeague.minXP;
  
  return Math.min(100, (progressInLeague / leagueRange) * 100);
}