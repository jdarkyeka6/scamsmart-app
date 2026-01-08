// Import all lesson data files with .js extension
import lesson1 from './lessons/01-general-scam-red-flags/data.js'
import lesson2 from './lessons/02-stop-check-protect/data.js'
import lesson3 from './lessons/03-phishing-scams/data.js'
import lesson4 from './lessons/04-email-sms-scams/data.js'
import lesson5 from './lessons/05-online-buying-selling-scams/data.js'
import lesson6 from './lessons/06-romance-scams/data.js'
import lesson7 from './lessons/07-investment-scams/data.js'
import lesson8 from './lessons/08-crypto-investment-scams/data.js'
import lesson9 from './lessons/09-job-employment-scams/data.js'
import lesson10 from './lessons/10-rental-scams/data.js'
import lesson11 from './lessons/11-puppy-scams/data.js'
import lesson12 from './lessons/12-prize-lottery-scams/data.js'
import lesson13 from './lessons/13-impersonation-scams/data.js'
import lesson14 from './lessons/14-ato-mygov-tax-scams/data.js'
import lesson15 from './lessons/15-medicare-centrelink-scams/data.js'
import lesson16 from './lessons/16-delivery-parcel-scams/data.js'
import lesson17 from './lessons/17-marketplace-postage-scams/data.js'
import lesson18 from './lessons/18-charity-scams/data.js'
import lesson19 from './lessons/19-remote-access-scams/data.js'
import lesson20 from './lessons/20-recovery-scams/data.js'
import lesson21 from './lessons/21-credit-card-scams/data.js'
import lesson22 from './lessons/22-payment-redirection-invoice-scams/data.js'
import lesson23 from './lessons/23-fake-invoice-scams/data.js'
import lesson24 from './lessons/24-tech-support-scams/data.js'
import lesson25 from './lessons/25-social-media-scams/data.js'
import lesson26 from './lessons/26-qr-code-scams/data.js'
import lesson27 from './lessons/27-fake-shopping-websites/data.js'
import lesson28 from './lessons/28-subscription-scams/data.js'
import lesson29 from './lessons/29-dating-app-scams/data.js'
import lesson30 from './lessons/30-scholarship-education-scams/data.js'
import lesson31 from './lessons/31-travel-vacation-scams/data.js'
import lesson32 from './lessons/32-insurance-scams/data.js'
import lesson33 from './lessons/33-banking-scams/data.js'
import lesson34 from './lessons/34-gift-card-scams/data.js'
import lesson35 from './lessons/35-fake-job-interview-scams/data.js'
import lesson36 from './lessons/36-pyramid-schemes/data.js'
import lesson37 from './lessons/37-identity-theft/data.js'
import lesson38 from './lessons/38-sim-swap-scams/data.js'
import lesson39 from './lessons/39-fake-reviews-testimonials/data.js'
import lesson40 from './lessons/40-overpayment-scams/data.js'
import lesson41 from './lessons/41-tax-refund-scams/data.js'
import lesson42 from './lessons/42-government-impersonation/data.js'
import lesson43 from './lessons/43-utility-bill-scams/data.js'
import lesson44 from './lessons/44-medical-health-scams/data.js'
import lesson45 from './lessons/45-fake-lawyer-legal-scams/data.js'
import lesson46 from './lessons/46-inheritance-scams/data.js'
import lesson47 from './lessons/47-ai-voice-cloning/data.js'
import lesson48 from './lessons/48-deepfake-video-scams/data.js'
import lesson49 from './lessons/49-ai-generated-fake-content/data.js'
import lesson50 from './lessons/50-australia-social-media-ban-scams/data.js'

// Create sections array from imported data
export const sections = [
  lesson1, lesson2, lesson3, lesson4, lesson5,
  lesson6, lesson7, lesson8, lesson9, lesson10,
  lesson11, lesson12, lesson13, lesson14, lesson15,
  lesson16, lesson17, lesson18, lesson19, lesson20,
  lesson21, lesson22, lesson23, lesson24, lesson25,
  lesson26, lesson27, lesson28, lesson29, lesson30,
  lesson31, lesson32, lesson33, lesson34, lesson35,
  lesson36, lesson37, lesson38, lesson39, lesson40,
  lesson41, lesson42, lesson43, lesson44, lesson45,
  lesson46, lesson47, lesson48, lesson49, lesson50
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

// Helper function to get lesson data
export function getLessonData(sectionId, lessonNum) {
  const section = sections[sectionId - 1]
  if (!section || !section.questions) return null
  
  // Filter questions by lesson type
  const questions = section.questions.filter(q => q.type === lessonNum)
  
  return {
    ...section,
    questions
  }
}