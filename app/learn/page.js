'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase';
import { sections, getLessonId, isLessonUnlocked } from '../sections';

export default function Learn() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [loading, setLoading] = useState(true);

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

      const { data: lessons } = await supabase
        .from('lesson_completions')
        .select('lesson_id')
        .eq('user_id', userId);

      setCompletedLessons(lessons?.map(l => l.lesson_id) || []);
      setLoading(false);
    } catch (error) {
      console.error('Error loading progress:', error);
      setLoading(false);
    }
  };

  const findNextLesson = () => {
    for (let sectionIndex = 0; sectionIndex < sections.length; sectionIndex++) {
      const section = sections[sectionIndex];
      for (let lessonIndex = 0; lessonIndex < section.lessons.length; lessonIndex++) {
        const lessonId = getLessonId(sectionIndex, lessonIndex);
        const isCompleted = completedLessons.includes(lessonId);
        const isUnlocked = isLessonUnlocked(lessonId, completedLessons);

        if (isUnlocked && !isCompleted) {
          return { lessonId, lesson: section.lessons[lessonIndex], section };
        }
      }
    }
    return null;
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  const nextLesson = findNextLesson();
  const totalLessons = sections.reduce((sum, s) => sum + s.lessons.length, 0);
  const completionPercentage = (completedLessons.length / totalLessons) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="ScamSmart" className="w-12 h-12" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">ScamSmart</h1>
                <p className="text-sm text-gray-600">Learn</p>
              </div>
            </div>

            <nav className="flex items-center gap-6">
              <button 
                onClick={() => router.push('/learn')}
                className="text-lg font-semibold text-blue-600"
              >
                📚 Learn
              </button>
              <button 
                onClick={() => router.push('/challenges')}
                className="text-lg font-semibold text-gray-700 hover:text-gray-900"
              >
                🎯 Practice
              </button>
              <button 
                onClick={() => router.push('/leaderboard')}
                className="text-lg font-semibold text-gray-700 hover:text-gray-900"
              >
                🏆 Compete
              </button>
              <button 
                onClick={() => router.push('/profile')}
                className="text-lg font-semibold text-gray-700 hover:text-gray-900"
              >
                👤 Profile
              </button>
              {!progress?.is_premium && (
                <button 
                  onClick={() => router.push('/premium')}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-4 py-2 rounded-lg text-base"
                >
                  ⭐ Upgrade
                </button>
              )}
              <button 
                onClick={handleSignOut}
                className="text-lg font-semibold text-gray-700 hover:text-gray-900"
              >
                Sign Out
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Welcome Message */}
        <div className="mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-3">
            Welcome back, {progress?.display_name || 'Learner'}!
          </h2>
          <p className="text-xl text-gray-600">
            You've completed {completedLessons.length} of {totalLessons} lessons
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-gray-900">Your Progress</h3>
            <span className="text-3xl font-black text-blue-600">
              {Math.round(completionPercentage)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-6">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-6 rounded-full transition-all"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
          <p className="text-gray-600 mt-3 text-lg">
            {totalLessons - completedLessons.length} lessons remaining
          </p>
        </div>

        {/* Continue Learning Card */}
        {nextLesson && (
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-10 mb-8 text-white">
            <h3 className="text-3xl font-black mb-4">Continue Learning</h3>
            <p className="text-xl mb-2 opacity-90">Next Lesson:</p>
            <p className="text-2xl font-bold mb-6">{nextLesson.lesson.title}</p>
            <button
              onClick={() => router.push(`/lesson/${nextLesson.lessonId}`)}
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl text-xl transition-colors"
            >
              Start Lesson →
            </button>
          </div>
        )}

        {/* All Completed */}
        {!nextLesson && (
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-xl p-10 mb-8 text-white text-center">
            <div className="text-7xl mb-4">🎉</div>
            <h3 className="text-4xl font-black mb-4">Congratulations!</h3>
            <p className="text-2xl mb-6">You've completed all lessons!</p>
            <button
              onClick={() => router.push('/challenges')}
              className="bg-white text-green-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl text-xl transition-colors"
            >
              Practice Your Skills →
            </button>
          </div>
        )}

        {/* Sections List */}
        <div className="space-y-6">
          <h3 className="text-3xl font-black text-gray-900 mb-6">All Sections</h3>
          {sections.map((section, sectionIndex) => {
            const sectionCompleted = section.lessons.filter((_, i) =>
              completedLessons.includes(getLessonId(sectionIndex, i))
            ).length;

            return (
              <div
                key={section.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl">{section.emoji}</span>
                      <h4 className="text-2xl font-bold text-gray-900">
                        {section.title}
                      </h4>
                    </div>
                    <p className="text-lg text-gray-600 mb-4">{section.description}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-lg font-semibold text-gray-700">
                        {sectionCompleted} / {section.lessons.length} lessons
                      </span>
                      <div className="flex-1 max-w-xs bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-blue-500 h-3 rounded-full"
                          style={{ width: `${(sectionCompleted / section.lessons.length) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => router.push(`/section/${section.id}`)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg text-lg transition-colors ml-6"
                  >
                    View Lessons →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}