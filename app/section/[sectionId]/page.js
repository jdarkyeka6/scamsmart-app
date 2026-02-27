'use client';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { supabase } from '../../../lib/supabase';
import { sections, getLessonId, isLessonUnlocked } from '../../sections';

export default function SectionDetail() {
  const router = useRouter();
  const params = useParams();
  const sectionId = params.sectionId;
  
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

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  const handleLessonClick = (lessonId, isUnlocked) => {
    if (!isUnlocked) {
      alert('🔒 Complete previous lessons to unlock this one!');
      return;
    }
    router.push(`/lesson/${lessonId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  // Find the section
  const sectionIndex = sections.findIndex(s => s.id === sectionId);
  if (sectionIndex === -1) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-gray-600 mb-4">Section not found</p>
          <button
            onClick={() => router.push('/learn')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold"
          >
            Back to Learn
          </button>
        </div>
      </div>
    );
  }

  const section = sections[sectionIndex];
  const sectionCompleted = section.lessons.filter((_, i) =>
    completedLessons.includes(getLessonId(sectionIndex, i))
  ).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
        {/* Back Button */}
        <button
          onClick={() => router.push('/learn')}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg mb-8"
        >
          ← Back to All Sections
        </button>

        {/* Section Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex items-start gap-6">
            <div className="text-7xl">{section.emoji}</div>
            <div className="flex-1">
              <h2 className="text-4xl font-black text-gray-900 mb-3">
                {section.title}
              </h2>
              <p className="text-xl text-gray-600 mb-6">{section.description}</p>
              
              {/* Progress */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl font-bold text-gray-900">
                  {sectionCompleted} / {section.lessons.length} completed
                </span>
                <div className="flex-1 max-w-md bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-blue-500 h-4 rounded-full transition-all"
                    style={{ width: `${(sectionCompleted / section.lessons.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {sectionCompleted === section.lessons.length && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 inline-flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span className="text-green-700 font-bold text-lg">Section Complete!</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Lessons List */}
        <div className="space-y-4">
          <h3 className="text-3xl font-black text-gray-900 mb-6">Lessons</h3>
          
          {section.lessons.map((lesson, lessonIndex) => {
            const lessonId = getLessonId(sectionIndex, lessonIndex);
            const isCompleted = completedLessons.includes(lessonId);
            const isUnlocked = isLessonUnlocked(lessonId, completedLessons);

            return (
              <button
                key={lessonId}
                onClick={() => handleLessonClick(lessonId, isUnlocked)}
                disabled={!isUnlocked}
                className={`w-full text-left transition-all ${
                  !isUnlocked ? 'cursor-not-allowed opacity-60' : 'cursor-pointer hover:shadow-lg'
                }`}
              >
                <div className={`bg-white rounded-xl shadow-sm border-2 p-6 ${
                  isCompleted
                    ? 'border-green-500'
                    : isUnlocked
                    ? 'border-blue-500 hover:border-blue-600'
                    : 'border-gray-300'
                }`}>
                  <div className="flex items-center justify-between">
                    {/* Lesson Info */}
                    <div className="flex items-start gap-4 flex-1">
                      {/* Status Icon */}
                      <div className="text-4xl flex-shrink-0 mt-1">
                        {isCompleted ? '✅' : isUnlocked ? '📖' : '🔒'}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
                            Lesson {lessonIndex + 1}
                          </span>
                          {isCompleted && (
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                              ✓ Completed
                            </span>
                          )}
                          {!isUnlocked && (
                            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-bold">
                              🔒 Locked
                            </span>
                          )}
                        </div>

                        <h4 className="text-2xl font-bold text-gray-900 mb-2">
                          {lesson.title}
                        </h4>
                        
                        <p className="text-lg text-gray-600 mb-3">
                          {lesson.description}
                        </p>

                        {/* Meta Info */}
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>⭐ {lesson.xp || 100} XP</span>
                          <span>•</span>
                          <span>📝 {lesson.questions?.length || 5} Questions</span>
                          {lesson.difficulty && (
                            <>
                              <span>•</span>
                              <span className="capitalize">{lesson.difficulty}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    {isUnlocked && (
                      <div className="ml-4 flex-shrink-0">
                        <div className={`px-6 py-3 rounded-lg font-bold text-lg ${
                          isCompleted
                            ? 'bg-green-50 text-green-700'
                            : 'bg-blue-600 text-white'
                        }`}>
                          {isCompleted ? 'Review' : 'Start'} →
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Locked Message */}
                  {!isUnlocked && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-gray-600 text-base">
                        Complete the previous lesson to unlock this one
                      </p>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-12">
          <button
            onClick={() => router.push('/learn')}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold px-6 py-4 rounded-xl text-lg transition-colors"
          >
            ← Back to All Sections
          </button>
          
          {sectionIndex < sections.length - 1 && (
            <button
              onClick={() => router.push(`/section/${sections[sectionIndex + 1].id}`)}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-4 rounded-xl text-lg transition-colors"
            >
              Next Section: {sections[sectionIndex + 1].title} →
            </button>
          )}
        </div>
      </main>
    </div>
  );
}