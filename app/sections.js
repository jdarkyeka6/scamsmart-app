import lesson1 from './lib/lessons/01-general-scam-red-flags/data.js';
import lesson2 from './lib/lessons/02-stop-check-protect/data.js';
import lesson3 from './lib/lessons/03-phishing-scams/data.js';
import lesson4 from './lib/lessons/04-email-sms-scams/data.js';
import lesson5 from './lib/lessons/05-online-buying-selling-scams/data.js';
import lesson6 from './lib/lessons/06-romance-scams/data.js';
import lesson7 from './lib/lessons/07-investment-scams/data.js';
import lesson8 from './lib/lessons/08-crypto-investment-scams/data.js';
import lesson9 from './lib/lessons/09-job-employment-scams/data.js';
import lesson10 from './lib/lessons/10-rental-scams/data.js';
import lesson11 from './lib/lessons/11-puppy-scams/data.js';
import lesson12 from './lib/lessons/12-prize-lottery-scams/data.js';
import lesson13 from './lib/lessons/13-impersonation-scams/data.js';
import lesson14 from './lib/lessons/14-ato-mygov-tax-scams/data.js';
import lesson15 from './lib/lessons/15-medicare-centrelink-scams/data.js';
import lesson16 from './lib/lessons/16-delivery-parcel-scams/data.js';
import lesson17 from './lib/lessons/17-marketplace-postage-scams/data.js';
import lesson18 from './lib/lessons/18-charity-scams/data.js';
import lesson19 from './lib/lessons/19-remote-access-scams/data.js';
import lesson20 from './lib/lessons/20-recovery-scams/data.js';
import lesson21 from './lib/lessons/21-credit-card-scams/data.js';
import lesson22 from './lib/lessons/22-payment-redirection-invoice-scams/data.js';
import lesson23 from './lib/lessons/23-fake-invoice-scams/data.js';
import lesson24 from './lib/lessons/24-tech-support-scams/data.js';
import lesson25 from './lib/lessons/25-social-media-scams/data.js';
import lesson26 from './lib/lessons/26-qr-code-scams/data.js';
import lesson27 from './lib/lessons/27-fake-shopping-websites/data.js';
import lesson28 from './lib/lessons/28-subscription-scams/data.js';
import lesson29 from './lib/lessons/29-dating-app-scams/data.js';
import lesson30 from './lib/lessons/30-scholarship-education-scams/data.js';
import lesson31 from './lib/lessons/31-travel-vacation-scams/data.js';
import lesson32 from './lib/lessons/32-insurance-scams/data.js';
import lesson33 from './lib/lessons/33-banking-scams/data.js';
import lesson34 from './lib/lessons/34-gift-card-scams/data.js';
import lesson35 from './lib/lessons/35-fake-job-interview-scams/data.js';
import lesson36 from './lib/lessons/36-pyramid-schemes/data.js';
import lesson37 from './lib/lessons/37-identity-theft/data.js';
import lesson38 from './lib/lessons/38-sim-swap-scams/data.js';
import lesson39 from './lib/lessons/39-fake-reviews-testimonials/data.js';
import lesson40 from './lib/lessons/40-overpayment-scams/data.js';
import lesson41 from './lib/lessons/41-tax-refund-scams/data.js';
import lesson42 from './lib/lessons/42-government-impersonation/data.js';
import lesson43 from './lib/lessons/43-utility-bill-scams/data.js';
import lesson44 from './lib/lessons/44-medical-health-scams/data.js';
import lesson45 from './lib/lessons/45-fake-lawyer-legal-scams/data.js';
import lesson46 from './lib/lessons/46-inheritance-scams/data.js';
import lesson47 from './lib/lessons/47-ai-voice-cloning/data.js';
import lesson48 from './lib/lessons/48-deepfake-video-scams/data.js';
// Section organization - 48 lessons total
export const sections = [
  {
    id: 'scam-basics',
    title: 'Scam Detection Basics',
    description: 'Learn fundamental skills to identify common scams',
    emoji: '🎯',
    lessons: [lesson1, lesson2, lesson3, lesson4, lesson5]
  },
  {
    id: 'communication-scams',
    title: 'Communication Scams',
    description: 'Protect yourself from phone, email, and messaging scams',
    emoji: '📧',
    lessons: [lesson6, lesson7, lesson8, lesson9, lesson10]
  },
  {
    id: 'financial-scams',
    title: 'Financial Scams',
    description: 'Recognize investment, banking, and money scams',
    emoji: '💰',
    lessons: [lesson11, lesson12, lesson13, lesson14, lesson15, lesson16, lesson17, lesson18, lesson19]
  },
  {
    id: 'digital-security',
    title: 'Digital Security',
    description: 'Build strong defenses for your online accounts',
    emoji: '🔒',
    lessons: [lesson20, lesson21, lesson22, lesson23, lesson24, lesson25]
  },
  {
    id: 'advanced-threats',
    title: 'Advanced Threats',
    description: 'Understand sophisticated attack methods',
    emoji: '⚠️',
    lessons: [lesson26, lesson27, lesson28, lesson29, lesson30]
  },
  {
    id: 'emerging-scams',
    title: 'Emerging Scams',
    description: 'Stay ahead of new scam techniques',
    emoji: '🚨',
    lessons: [lesson31, lesson32, lesson33, lesson34, lesson35, lesson36, lesson37, lesson38, lesson39, lesson40]
  },
  {
    id: 'vulnerable-groups',
    title: 'Protecting Vulnerable Groups',
    description: 'Special considerations for at-risk populations',
    emoji: '👥',
    lessons: [lesson41, lesson42]
  },
  {
    id: 'business-security',
    title: 'Business Security',
    description: 'Protect your organization from scams',
    emoji: '💼',
    lessons: [lesson43, lesson44, lesson45]
  },
  {
    id: 'incident-response',
    title: 'Incident Response',
    description: 'What to do if you have been scammed',
    emoji: '🆘',
    lessons: [lesson46, lesson47, lesson48]
  }
];

export function getLessonId(sectionIndex, lessonIndex) {
  return `${sectionIndex + 1}-${lessonIndex + 1}`;
}

export function parseLessonId(lessonId) {
  const [sectionIndex, lessonIndex] = lessonId.split('-').map(n => parseInt(n) - 1);
  return { sectionIndex, lessonIndex };
}

export function isLessonUnlocked(lessonId, completedLessons = []) {
  if (lessonId === '1-1') return true;
  
  const { sectionIndex, lessonIndex } = parseLessonId(lessonId);
  
  if (lessonIndex === 0 && sectionIndex > 0) {
    const prevSection = sections[sectionIndex - 1];
    const prevSectionLessons = prevSection.lessons.length;
    
    for (let i = 0; i < prevSectionLessons; i++) {
      const prevLessonId = getLessonId(sectionIndex - 1, i);
      if (!completedLessons.includes(prevLessonId)) {
        return false;
      }
    }
    return true;
  }
  
  const prevLessonId = lessonIndex === 0 
    ? getLessonId(sectionIndex - 1, sections[sectionIndex - 1].lessons.length - 1)
    : getLessonId(sectionIndex, lessonIndex - 1);
  
  return completedLessons.includes(prevLessonId);
}

export function getLessonData(lessonId) {
  const { sectionIndex, lessonIndex } = parseLessonId(lessonId);
  
  if (sectionIndex < 0 || sectionIndex >= sections.length) {
    return null;
  }
  
  const section = sections[sectionIndex];
  
  if (lessonIndex < 0 || lessonIndex >= section.lessons.length) {
    return null;
  }
  
  return {
    ...section.lessons[lessonIndex],
    sectionTitle: section.title,
    sectionEmoji: section.emoji
  };
}
