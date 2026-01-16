// Challenge types
export const CHALLENGE_TYPES = {
  SCAM_VS_SAFE: 'scam_vs_safe',
  SPOT_RED_FLAGS: 'spot_red_flags',
  FAKE_INBOX: 'fake_inbox',
  PATTERN_MATCH: 'pattern_match'
};

// Scam vs Safe Challenges (Quick judgment - 10 seconds each)
export const SCAM_VS_SAFE_CHALLENGES = [
  {
    id: 'svs-1',
    type: CHALLENGE_TYPES.SCAM_VS_SAFE,
    scenario: 'Email from "Amazon" saying your account will be suspended unless you verify payment details immediately.',
    isScam: true,
    explanation: 'Legitimate companies don\'t threaten immediate account suspension. This creates false urgency.',
    skill: 'pressure_resistance',
    difficulty: 'easy'
  },
  {
    id: 'svs-2',
    type: CHALLENGE_TYPES.SCAM_VS_SAFE,
    scenario: 'Text message from your bank\'s official number asking you to call them back regarding suspicious activity.',
    isScam: false,
    explanation: 'Banks do send legitimate fraud alerts. However, always call the number on your card, not the one in the message.',
    skill: 'deception_detection',
    difficulty: 'medium'
  },
  {
    id: 'svs-3',
    type: CHALLENGE_TYPES.SCAM_VS_SAFE,
    scenario: 'LinkedIn message from a "recruiter" offering a high-paying remote job but requiring you to pay for training materials first.',
    isScam: true,
    explanation: 'Legitimate employers never ask you to pay for training or equipment upfront.',
    skill: 'manipulation_awareness',
    difficulty: 'easy'
  },
  {
    id: 'svs-4',
    type: CHALLENGE_TYPES.SCAM_VS_SAFE,
    scenario: 'Email from your company\'s IT department asking you to reset your password through a link.',
    isScam: true,
    explanation: 'IT departments typically direct you to reset passwords through official company portals, not via email links.',
    skill: 'digital_self_defense',
    difficulty: 'medium'
  },
  {
    id: 'svs-5',
    type: CHALLENGE_TYPES.SCAM_VS_SAFE,
    scenario: 'Friend sends you a Facebook message: "OMG is this you in this video?" with a suspicious link.',
    isScam: true,
    explanation: 'This is a common account hijacking scam. Your friend\'s account was likely compromised.',
    skill: 'pattern_recognition',
    difficulty: 'easy'
  }
];

// Spot Red Flags Challenges (Find all suspicious elements)
export const SPOT_RED_FLAGS_CHALLENGES = [
  {
    id: 'srf-1',
    type: CHALLENGE_TYPES.SPOT_RED_FLAGS,
    title: 'Suspicious Email Analysis',
    content: {
      from: 'support@amaz0n-security.com',
      subject: 'URGENT: Your Amazon Account Has Been Compromised!!!',
      body: 'Dear Valued Customer,\n\nWe have detected unusual activity on your account. You must verify your identity within 24 hours or your account will be permanently suspended.\n\nClick here to verify now: http://bit.ly/amzn-verify\n\nThank you,\nAmazon Security Team'
    },
    redFlags: [
      { id: 'misspelled-domain', text: 'Misspelled domain (amaz0n)', location: 'from' },
      { id: 'urgency', text: 'Creates false urgency (24 hours)', location: 'body' },
      { id: 'excessive-punctuation', text: 'Excessive punctuation (!!!)', location: 'subject' },
      { id: 'shortened-url', text: 'Suspicious shortened URL', location: 'body' },
      { id: 'generic-greeting', text: 'Generic greeting (Dear Valued Customer)', location: 'body' }
    ],
    skill: 'deception_detection',
    difficulty: 'medium',
    xp: 150
  },
  {
    id: 'srf-2',
    type: CHALLENGE_TYPES.SPOT_RED_FLAGS,
    title: 'Fake Job Posting',
    content: {
      title: 'Work From Home - Earn $5000/week!',
      company: 'Global Enterprises LLC',
      description: 'Easy data entry work. No experience needed! Earn up to $5000 per week working from home. Must have computer and internet. Small one-time setup fee of $199 required for training materials and software license.',
      requirements: 'Must be 18+, have PayPal account for receiving payments'
    },
    redFlags: [
      { id: 'unrealistic-pay', text: 'Unrealistic salary promise', location: 'title' },
      { id: 'vague-company', text: 'Vague company name', location: 'company' },
      { id: 'upfront-payment', text: 'Requires upfront payment', location: 'description' },
      { id: 'too-easy', text: 'Claims "no experience needed" for high pay', location: 'description' },
      { id: 'payment-method', text: 'Specifies unusual payment method', location: 'requirements' }
    ],
    skill: 'manipulation_awareness',
    difficulty: 'easy',
    xp: 100
  }
];

// Fake Inbox Challenges (Review multiple messages)
export const FAKE_INBOX_CHALLENGES = [
  {
    id: 'fi-1',
    type: CHALLENGE_TYPES.FAKE_INBOX,
    title: 'Email Inbox Review',
    messages: [
      {
        id: 'msg-1',
        from: 'Netflix <no-reply@netflix.com>',
        subject: 'Your monthly invoice',
        preview: 'Your payment of $15.99 has been processed...',
        isScam: false,
        explanation: 'Legitimate billing notification from Netflix'
      },
      {
        id: 'msg-2',
        from: 'PayPal Security <verify@paypa1-secure.com>',
        subject: 'Unusual Activity Detected',
        preview: 'We noticed suspicious login attempts. Verify now...',
        isScam: true,
        explanation: 'Fake domain (paypa1 with number 1 instead of l)'
      },
      {
        id: 'msg-3',
        from: 'John from IT <john.smith@yourcompany.com>',
        subject: 'Password Reset Required',
        preview: 'Click this link to reset your password immediately...',
        isScam: true,
        explanation: 'IT would never ask you to click email links for password resets'
      },
      {
        id: 'msg-4',
        from: 'LinkedIn <messages-noreply@linkedin.com>',
        subject: 'You appeared in 12 searches this week',
        preview: 'Your profile is getting noticed! See who viewed...',
        isScam: false,
        explanation: 'Standard LinkedIn notification'
      },
      {
        id: 'msg-5',
        from: 'Prize Winner <winner@notification-center.com>',
        subject: 'CONGRATULATIONS! You won $10,000',
        preview: 'Claim your prize now! Just pay $50 processing fee...',
        isScam: true,
        explanation: 'Classic lottery scam - you never pay to claim a legitimate prize'
      }
    ],
    skill: 'pattern_recognition',
    difficulty: 'medium',
    xp: 200
  }
];

// Pattern Matching Challenges (Connect related scam tactics)
export const PATTERN_MATCH_CHALLENGES = [
  {
    id: 'pm-1',
    type: CHALLENGE_TYPES.PATTERN_MATCH,
    title: 'Match Scam Tactics',
    description: 'Match each scam type with its primary tactic',
    pairs: [
      {
        scam: 'Phishing Email',
        tactic: 'Impersonation',
        correct: true
      },
      {
        scam: 'Tech Support Scam',
        tactic: 'Fear and Urgency',
        correct: true
      },
      {
        scam: 'Romance Scam',
        tactic: 'Emotional Manipulation',
        correct: true
      },
      {
        scam: 'Investment Scam',
        tactic: 'Greed and FOMO',
        correct: true
      },
      {
        scam: 'Fake Charity',
        tactic: 'Sympathy Exploitation',
        correct: true
      }
    ],
    distractors: ['Social Proof', 'Authority Bias', 'Reciprocity'],
    skill: 'pattern_recognition',
    difficulty: 'hard',
    xp: 250
  }
];

// Get random challenges by type
export function getRandomChallenges(type, count = 5) {
  let pool = [];
  
  switch (type) {
    case CHALLENGE_TYPES.SCAM_VS_SAFE:
      pool = SCAM_VS_SAFE_CHALLENGES;
      break;
    case CHALLENGE_TYPES.SPOT_RED_FLAGS:
      pool = SPOT_RED_FLAGS_CHALLENGES;
      break;
    case CHALLENGE_TYPES.FAKE_INBOX:
      pool = FAKE_INBOX_CHALLENGES;
      break;
    case CHALLENGE_TYPES.PATTERN_MATCH:
      pool = PATTERN_MATCH_CHALLENGES;
      break;
    default:
      return [];
  }
  
  // Shuffle and take count
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Calculate challenge score
export function calculateChallengeScore(correct, total, timeBonus = 0) {
  const accuracy = (correct / total) * 100;
  const baseXP = Math.round((correct / total) * 100) * 2; // Up to 200 XP
  const totalXP = baseXP + timeBonus;
  
  return {
    correct,
    total,
    accuracy: Math.round(accuracy),
    baseXP,
    timeBonus,
    totalXP
  };
}