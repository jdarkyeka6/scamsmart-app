'use client';
import { useState } from 'react';

const AVATAR_OPTIONS = {
  face: ['oval', 'round', 'square', 'heart', 'long'],
  hair: ['short', 'long', 'curly', 'bald', 'ponytail', 'buzz', 'mohawk', 'wavy'],
  hairColor: ['black', 'brown', 'blonde', 'red', 'gray', 'blue', 'pink', 'purple'],
  eyeColor: ['brown', 'blue', 'green', 'hazel', 'gray', 'amber'],
  skinTone: ['pale', 'light', 'medium', 'tan', 'brown', 'dark']
};

export default function AvatarBuilder({ currentAvatar, onSave, onCancel }) {
  const [avatar, setAvatar] = useState(currentAvatar || {
    face: 'oval',
    hair: 'short',
    hairColor: 'brown',
    eyeColor: 'brown',
    skinTone: 'light'
  });

  const updateAvatar = (key, value) => {
    setAvatar({ ...avatar, [key]: value });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
      <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6 text-center">
        Create Your Avatar
      </h3>

      {/* Avatar Preview */}
      <div className="mb-8">
        <AvatarPreview avatar={avatar} size="large" />
      </div>

      {/* Face Shape */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Face Shape
        </label>
        <div className="grid grid-cols-5 gap-2">
          {AVATAR_OPTIONS.face.map((option) => (
            <button
              key={option}
              onClick={() => updateAvatar('face', option)}
              className={`px-3 py-2 rounded-lg font-medium text-sm transition-all ${
                avatar.face === option
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Hairstyle */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Hairstyle
        </label>
        <div className="grid grid-cols-4 gap-2">
          {AVATAR_OPTIONS.hair.map((option) => (
            <button
              key={option}
              onClick={() => updateAvatar('hair', option)}
              className={`px-3 py-2 rounded-lg font-medium text-sm transition-all ${
                avatar.hair === option
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Hair Color */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Hair Color
        </label>
        <div className="grid grid-cols-4 gap-2">
          {AVATAR_OPTIONS.hairColor.map((option) => (
            <button
              key={option}
              onClick={() => updateAvatar('hairColor', option)}
              className={`px-3 py-2 rounded-lg font-medium text-sm transition-all capitalize ${
                avatar.hairColor === option
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Eye Color */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Eye Color
        </label>
        <div className="grid grid-cols-3 gap-2">
          {AVATAR_OPTIONS.eyeColor.map((option) => (
            <button
              key={option}
              onClick={() => updateAvatar('eyeColor', option)}
              className={`px-3 py-2 rounded-lg font-medium text-sm transition-all capitalize ${
                avatar.eyeColor === option
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Skin Tone */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Skin Tone
        </label>
        <div className="grid grid-cols-3 gap-2">
          {AVATAR_OPTIONS.skinTone.map((option) => (
            <button
              key={option}
              onClick={() => updateAvatar('skinTone', option)}
              className={`px-3 py-2 rounded-lg font-medium text-sm transition-all capitalize ${
                avatar.skinTone === option
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => onSave(avatar)}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
        >
          Save Avatar
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

// Avatar Preview Component
export function AvatarPreview({ avatar, size = 'medium' }) {
  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-24 h-24',
    large: 'w-32 h-32'
  };

  const skinColors = {
    pale: '#FFE4C4',
    light: '#F4D3B0',
    medium: '#D9A571',
    tan: '#C68642',
    brown: '#8D5524',
    dark: '#5C4033'
  };

  const hairColors = {
    black: '#000000',
    brown: '#5C4033',
    blonde: '#F4E4C1',
    red: '#C1440E',
    gray: '#808080',
    blue: '#4169E1',
    pink: '#FF69B4',
    purple: '#8B008B'
  };

  const eyeColors = {
    brown: '#5C4033',
    blue: '#4169E1',
    green: '#228B22',
    hazel: '#8E7618',
    gray: '#808080',
    amber: '#FFBF00'
  };

  return (
    <div className={`${sizeClasses[size]} mx-auto relative`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Face */}
        <ellipse
          cx="50"
          cy="50"
          rx={avatar.face === 'long' ? '30' : avatar.face === 'round' ? '40' : '35'}
          ry={avatar.face === 'long' ? '45' : avatar.face === 'round' ? '40' : '42'}
          fill={skinColors[avatar.skinTone]}
          stroke="#000"
          strokeWidth="2"
        />
        
        {/* Eyes */}
        <circle cx="38" cy="45" r="4" fill={eyeColors[avatar.eyeColor]} />
        <circle cx="62" cy="45" r="4" fill={eyeColors[avatar.eyeColor]} />
        <circle cx="38" cy="45" r="2" fill="#000" />
        <circle cx="62" cy="45" r="2" fill="#000" />
        
        {/* Nose */}
        <line x1="50" y1="50" x2="50" y2="58" stroke="#000" strokeWidth="1.5" />
        
        {/* Mouth */}
        <path d="M 42 65 Q 50 70 58 65" stroke="#000" strokeWidth="2" fill="none" />
        
        {/* Hair */}
        {avatar.hair !== 'bald' && (
          <>
            {avatar.hair === 'short' && (
              <ellipse cx="50" cy="25" rx="38" ry="20" fill={hairColors[avatar.hairColor]} />
            )}
            {avatar.hair === 'long' && (
              <>
                <ellipse cx="50" cy="25" rx="38" ry="20" fill={hairColors[avatar.hairColor]} />
                <rect x="20" y="35" width="60" height="40" fill={hairColors[avatar.hairColor]} />
              </>
            )}
            {avatar.hair === 'curly' && (
              <>
                <circle cx="30" cy="25" r="12" fill={hairColors[avatar.hairColor]} />
                <circle cx="50" cy="20" r="15" fill={hairColors[avatar.hairColor]} />
                <circle cx="70" cy="25" r="12" fill={hairColors[avatar.hairColor]} />
              </>
            )}
            {avatar.hair === 'ponytail' && (
              <>
                <ellipse cx="50" cy="25" rx="38" ry="20" fill={hairColors[avatar.hairColor]} />
                <ellipse cx="75" cy="40" rx="10" ry="15" fill={hairColors[avatar.hairColor]} />
              </>
            )}
            {avatar.hair === 'buzz' && (
              <ellipse cx="50" cy="25" rx="37" ry="15" fill={hairColors[avatar.hairColor]} />
            )}
            {avatar.hair === 'mohawk' && (
              <rect x="45" y="10" width="10" height="25" fill={hairColors[avatar.hairColor]} />
            )}
            {avatar.hair === 'wavy' && (
              <>
                <path d="M 12 30 Q 20 15, 30 25 Q 40 15, 50 25 Q 60 15, 70 25 Q 80 15, 88 30" 
                      fill={hairColors[avatar.hairColor]} stroke={hairColors[avatar.hairColor]} strokeWidth="3" />
              </>
            )}
          </>
        )}
      </svg>
    </div>
  );
}