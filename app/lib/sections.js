export const sections = [
  { id: 1, file: 'phishing-scams.json', title: 'Phishing Scams', emoji: '🎣' },
  { id: 2, file: 'delivery-parcel-scams.json', title: 'Delivery/Parcel Scams', emoji: '📦' },
  { id: 3, file: 'romance-scams.json', title: 'Romance Scams', emoji: '💔' },
  { id: 4, file: 'remote-access-scams.json', title: 'Remote Access Scams', emoji: '💻' },
  { id: 5, file: 'crypto-investment-scams.json', title: 'Crypto Investment Scams', emoji: '₿' },
  { id: 6, file: 'job-employment-scams.json', title: 'Job/Employment Scams', emoji: '💼' },
  { id: 7, file: 'ato-mygov-tax-scams.json', title: 'ATO/Tax Scams', emoji: '💰' },
  { id: 8, file: 'impersonation-scams.json', title: 'Impersonation Scams', emoji: '🎭' },
  { id: 9, file: 'investment-scams.json', title: 'Investment Scams', emoji: '📈' },
  { id: 10, file: 'charity-scams.json', title: 'Charity Scams', emoji: '❤️' },
  { id: 11, file: 'online-buying-selling-scams.json', title: 'Online Shopping Scams', emoji: '🛒' },
  { id: 12, file: 'rental-scams.json', title: 'Rental Scams', emoji: '🏠' },
  { id: 13, file: 'prize-lottery-scams.json', title: 'Prize/Lottery Scams', emoji: '🎰' },
  { id: 14, file: 'credit-card-scams.json', title: 'Credit Card Scams', emoji: '💳' },
  { id: 15, file: 'fake-invoice-scams.json', title: 'Fake Invoice Scams', emoji: '📄' },
  { id: 16, file: 'marketplace-postage-scams.json', title: 'Marketplace Scams', emoji: '📮' },
  { id: 17, file: 'puppy-scams.json', title: 'Puppy Scams', emoji: '🐶' },
  { id: 18, file: 'recovery-scams.json', title: 'Recovery Scams', emoji: '🔄' },
  { id: 19, file: 'payment-redirection-invoice-scams.json', title: 'Payment Redirection Scams', emoji: '⚠️' },
  { id: 20, file: 'medicare-centrelink-scams.json', title: 'Medicare/Centrelink Scams', emoji: '🏥' },
  { id: 21, file: 'mygov-scams.json', title: 'myGov Scams', emoji: '🏛️' },
  { id: 22, file: 'general-scam-red-flags.json', title: 'General Scam Red Flags', emoji: '🚩' },
  { id: 23, file: 'stop-check-protect.json', title: 'Stop, Check, Protect', emoji: '🛡️' }
]

export const lessonTypes = [
  { num: 1, title: 'Introduction', type: 'intro' },
  { num: 2, title: 'Spot the Red Flags', type: 'red_flags' },
  { num: 3, title: 'What Should You Do?', type: 'what_to_do' },
  { num: 4, title: 'How It Works', type: 'how_it_works' },
  { num: 5, title: 'Final Challenge', type: 'quiz' }
]

export function getLessonId(sectionId, lessonNum) {
  return `${sectionId}.${lessonNum}`
}

export function parseLessonId(lessonId) {
  const [section, lesson] = lessonId.split('.').map(Number)
  return { section, lesson }
}

export function isLessonUnlocked(lessonId, completedLessons) {
  const { section, lesson } = parseLessonId(lessonId)
  
  // First lesson is always unlocked
  if (section === 1 && lesson === 1) return true
  
  // Check if previous lesson is completed
  let prevLesson
  if (lesson > 1) {
    prevLesson = getLessonId(section, lesson - 1)
  } else {
    prevLesson = getLessonId(section - 1, 5)
  }
  
  return completedLessons.includes(prevLesson)
}