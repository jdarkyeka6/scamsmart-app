'use client';
import { SKILLS } from '../lib/skills';

export default function SkillMeters({ skills }) {
  if (!skills) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
      <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">Your Skills</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
        Master these 5 core skills to become a scam detection expert
      </p>

      <div className="space-y-4">
        {Object.values(SKILLS).map((skill) => {
          const rating = skills[skill.id] || 0;
          const percentage = (rating / 10) * 100;
          const isRated = rating > 0;

          return (
            <div key={skill.id}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{skill.emoji}</span>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white text-sm">
                      {skill.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {skill.description}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  {isRated ? (
                    <p className={`text-2xl font-black ${skill.textColor} ${skill.darkTextColor}`}>
                      {rating.toFixed(1)}
                    </p>
                  ) : (
                    <p className="text-sm text-gray-400 dark:text-gray-500">Not rated</p>
                  )}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-500`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>

              {!isRated && (
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  Complete lessons to get your first rating
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Compact version for dashboard
export function SkillMetersCompact({ skills }) {
  if (!skills) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
      {Object.values(SKILLS).map((skill) => {
        const rating = skills[skill.id] || 0;
        const percentage = (rating / 10) * 100;
        const isRated = rating > 0;

        return (
          <div key={skill.id} className={`${skill.bgColor} ${skill.darkBgColor} rounded-xl p-4 border-2 ${skill.textColor} dark:border-gray-700`}>
            <div className="text-3xl mb-2">{skill.emoji}</div>
            <p className="font-bold text-gray-900 dark:text-white text-xs mb-1">
              {skill.name}
            </p>
            {isRated ? (
              <>
                <p className={`text-2xl font-black ${skill.textColor} ${skill.darkTextColor}`}>
                  {rating.toFixed(1)}
                </p>
                <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2 mt-2">
                  <div
                    className={`bg-gradient-to-r ${skill.color} h-2 rounded-full`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </>
            ) : (
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Not yet rated</p>
            )}
          </div>
        );
      })}
    </div>
  );
}