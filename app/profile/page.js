'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase';
import DarkModeToggle from '../components/DarkModeToggle';
import AvatarBuilder, { AvatarPreview } from '../components/AvatarBuilder';
import { BADGES, checkBadgeUnlocks } from '../lib/badges';

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(null);
  const [displayName, setDisplayName] = useState('');
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showAvatarBuilder, setShowAvatarBuilder] = useState(false);
  const [showBadgeSelector, setShowBadgeSelector] = useState(false);
  const [unlockedBadges, setUnlockedBadges] = useState([]);
  const [selectedBadges, setSelectedBadges] = useState([]);

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
  };

  const loadProgress = async (userId) => {
    try {
      const { data } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId)
        .single();

      setProgress(data);
      setDisplayName(data?.display_name || '');
      setSelectedBadges(data?.selected_badges || []);
      
      // Check badge unlocks
      const badges = await checkBadgeUnlocks(userId, supabase);
      setUnlockedBadges(badges);
      
      setLoading(false);
    } catch (error) {
      console.error('Error loading progress:', error);
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  const updateDisplayName = async () => {
    try {
      await supabase
        .from('user_progress')
        .update({ display_name: displayName })
        .eq('user_id', user.id);

      setEditing(false);
      alert('Display name updated!');
    } catch (error) {
      console.error('Error updating display name:', error);
      alert('Failed to update display name');
    }
  };

  const saveAvatar = async (avatar) => {
    try {
      await supabase
        .from('user_progress')
        .update({
          avatar_face: avatar.face,
          avatar_hair: avatar.hair,
          avatar_hair_color: avatar.hairColor,
          avatar_eye_color: avatar.eyeColor,
          avatar_skin_tone: avatar.skinTone
        })
        .eq('user_id', user.id);

      setShowAvatarBuilder(false);
      await loadProgress(user.id);
      alert('Avatar saved!');
    } catch (error) {
      console.error('Error saving avatar:', error);
      alert('Failed to save avatar');
    }
  };

  const toggleBadgeSelection = (badgeId) => {
    if (selectedBadges.includes(badgeId)) {
      setSelectedBadges(selectedBadges.filter(id => id !== badgeId));
    } else if (selectedBadges.length < 3) {
      setSelectedBadges([...selectedBadges, badgeId]);
    } else {
      alert('You can only display 3 badges at a time!');
    }
  };

  const saveBadgeSelection = async () => {
    try {
      await supabase
        .from('user_progress')
        .update({ selected_badges: selectedBadges })
        .eq('user_id', user.id);

      setShowBadgeSelector(false);
      await loadProgress(user.id);
      alert('Badge selection saved!');
    } catch (error) {
      console.error('Error saving badges:', error);
      alert('Failed to save badges');
    }
  };

  const getLevel = () => Math.floor((progress?.total_xp || 0) / 500) + 1;
  const getXPForNextLevel = () => {
    const currentLevel = getLevel();
    return currentLevel * 500;
  };

  const currentAvatar = progress ? {
    face: progress.avatar_face,
    hair: progress.avatar_hair,
    hairColor: progress.avatar_hair_color,
    eyeColor: progress.avatar_eye_color,
    skinTone: progress.avatar_skin_tone
  } : null;

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

  if (showAvatarBuilder) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <AvatarBuilder
            currentAvatar={currentAvatar}
            onSave={saveAvatar}
            onCancel={() => setShowAvatarBuilder(false)}
          />
        </div>
      </div>
    );
  }

  if (showBadgeSelector) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
              Select Your Badges (Choose 3)
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Selected: {selectedBadges.length}/3
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {unlockedBadges.map((badgeId) => {
                const badge = BADGES[badgeId];
                const isSelected = selectedBadges.includes(badgeId);

                return (
                  <button
                    key={badgeId}
                    onClick={() => toggleBadgeSelection(badgeId)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <div className="text-4xl mb-2">{badge.emoji}</div>
                    <p className="font-bold text-gray-900 dark:text-white text-sm">{badge.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{badge.description}</p>
                  </button>
                );
              })}
            </div>

            {unlockedBadges.length === 0 && (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                Complete lessons and challenges to unlock badges!
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={saveBadgeSelection}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
              >
                Save Selection
              </button>
              <button
                onClick={() => setShowBadgeSelector(false)}
                className="px-6 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-bold py-3 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
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
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Your Profile</h2>
          <p className="text-gray-600 dark:text-gray-400">Customize your ScamSmart experience</p>
        </div>

        {/* Avatar & Basic Info */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 mb-6">
          <div className="flex items-center gap-6 mb-6">
            <div>
              {currentAvatar && <AvatarPreview avatar={currentAvatar} size="large" />}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                {progress?.display_name || 'User'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{user?.email}</p>
              <button
                onClick={() => setShowAvatarBuilder(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                Edit Avatar
              </button>
            </div>
          </div>

          {/* Display Name Editor */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Display Name
            </label>
            {editing ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <button
                  onClick={updateDisplayName}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditing(false)}
                  className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <p className="text-lg text-gray-900 dark:text-white">{progress?.display_name || 'Not set'}</p>
                <button
                  onClick={() => setEditing(true)}
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-semibold"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Badges Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-black text-gray-900 dark:text-white">Your Badges</h3>
            <button
              onClick={() => setShowBadgeSelector(true)}
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-semibold"
            >
              Edit Selection
            </button>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Unlocked: {unlockedBadges.length}/{Object.keys(BADGES).length} badges
          </p>

          {/* Selected Badges Display */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {selectedBadges.map((badgeId) => {
              const badge = BADGES[badgeId];
              return (
                <div key={badgeId} className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl text-center border-2 border-blue-200 dark:border-blue-800">
                  <div className="text-4xl mb-2">{badge.emoji}</div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">{badge.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{badge.description}</p>
                </div>
              );
            })}
            {[...Array(3 - selectedBadges.length)].map((_, i) => (
              <div key={`empty-${i}`} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-xl text-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                <div className="text-4xl mb-2 opacity-30">🏆</div>
                <p className="text-sm text-gray-400 dark:text-gray-500">Empty Slot</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
          <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">Your Stats</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Level</p>
              <p className="text-3xl font-black text-blue-600 dark:text-blue-400">{getLevel()}</p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total XP</p>
              <p className="text-3xl font-black text-purple-600 dark:text-purple-400">{progress?.total_xp || 0}</p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Lessons Completed</p>
              <p className="text-3xl font-black text-green-600 dark:text-green-400">{progress?.lessons_completed || 0}</p>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Streak</p>
              <p className="text-3xl font-black text-orange-600 dark:text-orange-400">{progress?.streak_count || 0} 🔥</p>
            </div>
          </div>

          {/* XP Progress Bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Progress to Level {getLevel() + 1}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {progress?.total_xp || 0} / {getXPForNextLevel()} XP
              </p>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all"
                style={{ width: `${((progress?.total_xp || 0) % 500) / 5}%` }}
              ></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}