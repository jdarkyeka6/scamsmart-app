export default [
  {
    id: "40-01",
    title: "The 'Accidental' Overpayment",
    description: "Oops, I sent too much. Please send it back.",
    questions: [
      {
        question: "You sell a bike for $500. Buyer sends a cheque for $2,000.",
        options: ["Keep it all", "Scam. Return the cheque.", "Spend it", "Refund $1500"],
        correctAnswer: 1,
        explanation: "This is the defining move of the overpayment scam. Never accept overpayments."
      },
      {
        question: "They ask you to refund the excess to a 'Shipping Agent'.",
        options: ["Do it", "Scam. The agent is the scammer.", "Helpful", "Nice"],
        correctAnswer: 1,
        explanation: "You are laundering their fake money into real money."
      },
      {
        question: "The excuse: 'My secretary made a mistake'.",
        options: ["Plausible", "Standard scam script", "Poor secretary", "Mistake"],
        correctAnswer: 1,
        explanation: "They always have a story to explain the error."
      },
      {
        question: "The cheque looks real and the bank accepts it initially.",
        options: ["It's safe", "No. Banks clear funds provisionally. It will bounce weeks later.", "Spend", "Good"],
        correctAnswer: 1,
        explanation: "The banking system assumes cheques are good until proven bad. This delay is the trap."
      },
      {
        question: "You refunded the $1,500. What happens next?",
        options: ["Transaction complete", "The cheque bounces, bank takes $2,000 from you. You lost $1,500 + bike.", "Friendship", "Nothing"],
        correctAnswer: 1,
        explanation: "You lose the refund amount AND the original deposit."
      },
      {
        question: "They ask for the refund via Western Union or Gift Cards.",
        options: ["Okay", "Red flag. Untraceable methods.", "Fast", "Easy"],
        correctAnswer: 1,
        explanation: "They want cash that cannot be reversed."
      },
      {
        question: "They offer you $50 extra for the trouble.",
        options: ["Keep it", "Bait to make you cooperative", "Nice", "Profit"],
        correctAnswer: 1,
        explanation: "Greed makes you ignore the warning signs."
      },
      {
        question: "Does this happen with Bank Transfers?",
        options: ["No", "Yes, hacked accounts send real money, which is later reversed by the bank", "Never", "Maybe"],
        correctAnswer: 1,
        explanation: "If the incoming money is stolen, the bank will take it back eventually."
      },
      {
        question: "The buyer is 'Overseas' or 'On an Oil Rig'.",
        options: ["Cool job", "Classic scammer profile", "Busy", "Rich"],
        correctAnswer: 1,
        explanation: "Explains why they can't meet or handle cash."
      },
      {
        question: "What to do?",
        options: ["Refund", "Wait for cheque to FULLY clear (weeks) or reject it", "Spend", "Hide"],
        correctAnswer: 1,
        explanation: "Do not touch the money."
      }
    ]
  },
  {
    id: "40-02",
    title: "PayPal Fake Receipts",
    description: "The money isn't even in your account.",
    questions: [
      {
        question: "Buyer emails a PayPal receipt showing they paid $500 extra.",
        options: ["Refund", "Check PayPal app. Emails are easily faked.", "Trust", "Pay"],
        correctAnswer: 1,
        explanation: "Never trust an email screenshot. Trust your account balance."
      },
      {
        question: "The email says 'Funds are on hold until you refund the shipping agent'.",
        options: ["Pay agent", "Scam. PayPal does not work this way.", "Wait", "Ship"],
        correctAnswer: 1,
        explanation: "PayPal does not hold funds pending a payment to a rival service (Western Union)."
      },
      {
        question: "The email lands in Junk/Spam.",
        options: ["Check it", "Red flag", "Move to inbox", "Reply"],
        correctAnswer: 1,
        explanation: "Fake receipts often fail authentication checks."
      },
      {
        question: "The buyer claims they cannot lower the amount due to 'account settings'.",
        options: ["Weird", "Lie", "Tech issue", "Okay"],
        correctAnswer: 1,
        explanation: "They invent technical constraints to force the overpayment."
      },
      {
        question: "You check your balance: $0.00.",
        options: ["Lag", "Proof of scam. No money was sent.", "Wait", "Glitch"],
        correctAnswer: 1,
        explanation: "Instant payments are instant. If it's not there, it's not real."
      },
      {
        question: "They threaten to report you to the FBI/Police if you don't refund.",
        options: ["Panic", "Intimidation tactic. Ignore.", "Refund", "Apologize"],
        correctAnswer: 1,
        explanation: "Scammers use fear to make you act fast."
      },
      {
        question: "The 'Shipping Agent' uses a personal Gmail address.",
        options: ["Normal", "Scam", "Company", "Agent"],
        correctAnswer: 1,
        explanation: "Logistics companies have domains."
      },
      {
        question: "Is 'PayPal My Cash' a thing?",
        options: ["Yes", "Scammers often ask for these cards", "No", "Maybe"],
        correctAnswer: 1,
        explanation: "Another gift card variant."
      },
      {
        question: "They overpay by $1000s.",
        options: ["Mistake", "Greed bait", "Generous", "Rich"],
        correctAnswer: 1,
        explanation: "The larger the overpayment, the larger their profit."
      },
      {
        question: "Best defense?",
        options: ["Cash only", "Login to check", "Both A and B", "Trust"],
        correctAnswer: 2,
        explanation: "Verify, verify, verify."
      }
    ]
  },
  {
    id: "40-03",
    title: "The Refund Scam (Tech Support)",
    description: "I accidentally refunded you $40,000!",
    questions: [
      {
        question: "Tech support scammer edits your screen to show a refund of $40,000 instead of $400.",
        options: ["Keep it", "It's fake (HTML Edit). No money moved.", "Return it", "Wow"],
        correctAnswer: 1,
        explanation: "They change the text on your browser locally. The bank balance didn't actually change."
      },
      {
        question: "They beg you to return the difference or they will be 'fired'.",
        options: ["Return", "Act. Manipulation.", "Sad", "Help"],
        correctAnswer: 1,
        explanation: "Emotional blackmail."
      },
      {
        question: "They moved money from your Savings to Chequing to simulate a deposit.",
        options: ["Deposit", "Internal transfer. It's your own money.", "Refund", "Bank error"],
        correctAnswer: 1,
        explanation: "You see the balance go up in one account and assume it's a refund."
      },
      {
        question: "They blackout the screen while doing it.",
        options: ["Privacy", "To hide the internal transfer", "Glitch", "Tech"],
        correctAnswer: 1,
        explanation: "Hiding the crime."
      },
      {
        question: "They want the return via Gift Cards.",
        options: ["Buy", "Scam", "Okay", "Cards"],
        correctAnswer: 1,
        explanation: "Always the gift cards."
      },
      {
        question: "They ask you to leave the phone line open while you go to the bank.",
        options: ["Support", "Monitoring", "Nice", "Okay"],
        correctAnswer: 1,
        explanation: "They want to hear if the teller warns you."
      },
      {
        question: "You check your balance on a DIFFERENT device.",
        options: ["Smart", "Dumb", "Same", "Hard"],
        correctAnswer: 0,
        explanation: "The edited screen only shows on the compromised PC. Phone app shows truth."
      },
      {
        question: "They ask for access to your 2FA code to 'process the refund'.",
        options: ["Give", "They are stealing money OUT", "Process", "Code"],
        correctAnswer: 1,
        explanation: "2FA is for logging in/sending, not receiving."
      },
      {
        question: "Can you reverse a gift card?",
        options: ["No", "Yes", "Maybe", "Sometimes"],
        correctAnswer: 0,
        explanation: "Money is gone."
      },
      {
        question: "What is 'AnyDesk'?",
        options: ["Desk", "Remote software used to perform this scam", "Furniture", "App"],
        correctAnswer: 1,
        explanation: "The tool allowing them to edit your screen."
      }
    ]
  },
  {
    id: "40-04",
    title: "Employment Overpayment",
    description: "Your first paycheck is too big.",
    questions: [
      {
        question: "New remote job sends you a check for 'Home Office Setup'.",
        options: ["Deposit", "Scam. Fake check.", "Buy desk", "Work"],
        correctAnswer: 1,
        explanation: "Employers buy equipment, they don't send checks to new hires."
      },
      {
        question: "They ask you to pay the vendor via Zelle/Bank Transfer.",
        options: ["Pay", "Scam. Vendor is the scammer.", "Order", "Work"],
        correctAnswer: 1,
        explanation: "Laundering."
      },
      {
        question: "The check amount includes your 'Signing Bonus'.",
        options: ["Nice", "Bait", "Rich", "Good"],
        correctAnswer: 1,
        explanation: "Making the amount larger makes you want to believe it."
      },
      {
        question: "You deposit the check and the funds are 'Available'.",
        options: ["Safe", "Not cleared yet. Available != Cleared.", "Spend", "Withdraw"],
        correctAnswer: 1,
        explanation: "Banks make funds available by law before the check actually clears."
      },
      {
        question: "Bank calls 3 days later saying check is fake.",
        options: ["Oops", "You are liable for any spent funds", "Employer pays", "Bank pays"],
        correctAnswer: 1,
        explanation: "The debt is yours."
      },
      {
        question: "Why not wire the money directly?",
        options: ["Fees", "Wires can't be reversed like fake checks", "Slow", "Hard"],
        correctAnswer: 1,
        explanation: "Scammers avoid irreversible payments TO you."
      },
      {
        question: "They ask for unused money back.",
        options: ["Return", "Scam", "Keep", "Bonus"],
        correctAnswer: 1,
        explanation: "The core of the scam."
      },
      {
        question: "The company has no website.",
        options: ["Startup", "Red flag", "New", "Stealth"],
        correctAnswer: 1,
        explanation: "Due diligence."
      },
      {
        question: "Interview was via text.",
        options: ["Modern", "Scam", "Easy", "Fast"],
        correctAnswer: 1,
        explanation: "Standard for fake jobs."
      },
      {
        question: "Report to?",
        options: ["Bank", "Police", "Scamwatch", "All"],
        correctAnswer: 3,
        explanation: "Cover all bases."
      }
    ]
  },
  {
    id: "40-05",
    title: "Recovery from Overpayment",
    description: "You sent the money. Now what?",
    questions: [
      {
        question: "You wired money via Western Union.",
        options: ["Call WU", "Unlikely to recover, but report it", "Wait", "Cancel"],
        correctAnswer: 1,
        explanation: "Cash pickups are instant."
      },
      {
        question: "You sent a bank transfer.",
        options: ["Call bank immediately", "Wait", "Email", "Cry"],
        correctAnswer: 0,
        explanation: "Recall requests might work if caught within hours."
      },
      {
        question: "You deposited a fake check.",
        options: ["Tell bank immediately", "Wait for bounce", "Spend", "Hide"],
        correctAnswer: 0,
        explanation: "Honesty prevents the bank closing your account for fraud."
      },
      {
        question: "The scammer threatens legal action.",
        options: ["Ignore", "Block. Empty threats.", "Pay", "Apologize"],
        correctAnswer: 1,
        explanation: "Criminals don't go to court."
      },
      {
        question: "Should you spend the 'extra' money?",
        options: ["No", "Yes", "Maybe", "Invest"],
        correctAnswer: 0,
        explanation: "It will disappear soon."
      },
      {
        question: "Report to platform (Gumtree/eBay)?",
        options: ["Yes", "No", "Waste", "Maybe"],
        correctAnswer: 0,
        explanation: "Ban their account."
      },
      {
        question: "Did you give them ID?",
        options: ["Yes", "ID Theft risk. Act accordingly.", "No", "Maybe"],
        correctAnswer: 1,
        explanation: "They might use your ID to scam others."
      },
      {
        question: "Educate others.",
        options: ["Share story", "Hide", "Shame", "Forget"],
        correctAnswer: 0,
        explanation: "Awareness stops scams."
      },
      {
        question: "Can police help?",
        options: ["Report it", "International jurisdiction makes it hard", "Yes", "No"],
        correctAnswer: 1,
        explanation: "Report for statistics, but don't expect a raid."
      },
      {
        question: "Lesson learned?",
        options: ["Trust no one", "Never accept overpayments", "Cash only", "All"],
        correctAnswer: 1,
        explanation: "The Golden Rule."
      }
    ]
  }
];