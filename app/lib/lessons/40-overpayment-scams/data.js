export default {
  "id": 40,
  "title": "Overpayment Scams",
  "emoji": "💵",
  "description": "Oops, I sent too much. Please send it back.",
  "introduction": "Learn to recognize and protect yourself from Overpayment Scams.",
  "warning_signs": [],
  "what_to_do": [],
  "how_it_works": "",
  "questions": [
    {
      "type": 1,
      "prompt": "You sell a bike for $500. Buyer sends a cheque for $2,000.",
      "options": [
        "Keep it all",
        "Scam. Return the cheque.",
        "Spend it",
        "Refund $1500"
      ],
      "correct": 1,
      "explanation": "This is the defining move of the overpayment scam. Never accept overpayments."
    },
    {
      "type": 1,
      "prompt": "They ask you to refund the excess to a 'Shipping Agent'.",
      "options": [
        "Do it",
        "Scam. The agent is the scammer.",
        "Helpful",
        "Nice"
      ],
      "correct": 1,
      "explanation": "You are laundering their fake money into real money."
    },
    {
      "type": 1,
      "prompt": "The excuse: 'My secretary made a mistake'.",
      "options": [
        "Plausible",
        "Standard scam script",
        "Poor secretary",
        "Mistake"
      ],
      "correct": 1,
      "explanation": "They always have a story to explain the error."
    },
    {
      "type": 1,
      "prompt": "The cheque looks real and the bank accepts it initially.",
      "options": [
        "It's safe",
        "No. Banks clear funds provisionally. It will bounce weeks later.",
        "Spend",
        "Good"
      ],
      "correct": 1,
      "explanation": "The banking system assumes cheques are good until proven bad. This delay is the trap."
    },
    {
      "type": 1,
      "prompt": "You refunded the $1,500. What happens next?",
      "options": [
        "Transaction complete",
        "The cheque bounces, bank takes $2,000 from you. You lost $1,500 + bike.",
        "Friendship",
        "Nothing"
      ],
      "correct": 1,
      "explanation": "You lose the refund amount AND the original deposit."
    },
    {
      "type": 1,
      "prompt": "They ask for the refund via Western Union or Gift Cards.",
      "options": [
        "Okay",
        "Red flag. Untraceable methods.",
        "Fast",
        "Easy"
      ],
      "correct": 1,
      "explanation": "They want cash that cannot be reversed."
    },
    {
      "type": 1,
      "prompt": "They offer you $50 extra for the trouble.",
      "options": [
        "Keep it",
        "Bait to make you cooperative",
        "Nice",
        "Profit"
      ],
      "correct": 1,
      "explanation": "Greed makes you ignore the warning signs."
    },
    {
      "type": 1,
      "prompt": "Does this happen with Bank Transfers?",
      "options": [
        "No",
        "Yes, hacked accounts send real money, which is later reversed by the bank",
        "Never",
        "Maybe"
      ],
      "correct": 1,
      "explanation": "If the incoming money is stolen, the bank will take it back eventually."
    },
    {
      "type": 1,
      "prompt": "The buyer is 'Overseas' or 'On an Oil Rig'.",
      "options": [
        "Cool job",
        "Classic scammer profile",
        "Busy",
        "Rich"
      ],
      "correct": 1,
      "explanation": "Explains why they can't meet or handle cash."
    },
    {
      "type": 1,
      "prompt": "What to do?",
      "options": [
        "Refund",
        "Wait for cheque to FULLY clear (weeks) or reject it",
        "Spend",
        "Hide"
      ],
      "correct": 1,
      "explanation": "Do not touch the money."
    },
    {
      "type": 2,
      "prompt": "Buyer emails a PayPal receipt showing they paid $500 extra.",
      "options": [
        "Refund",
        "Check PayPal app. Emails are easily faked.",
        "Trust",
        "Pay"
      ],
      "correct": 1,
      "explanation": "Never trust an email screenshot. Trust your account balance."
    },
    {
      "type": 2,
      "prompt": "The email says 'Funds are on hold until you refund the shipping agent'.",
      "options": [
        "Pay agent",
        "Scam. PayPal does not work this way.",
        "Wait",
        "Ship"
      ],
      "correct": 1,
      "explanation": "PayPal does not hold funds pending a payment to a rival service (Western Union)."
    },
    {
      "type": 2,
      "prompt": "The email lands in Junk/Spam.",
      "options": [
        "Check it",
        "Red flag",
        "Move to inbox",
        "Reply"
      ],
      "correct": 1,
      "explanation": "Fake receipts often fail authentication checks."
    },
    {
      "type": 2,
      "prompt": "The buyer claims they cannot lower the amount due to 'account settings'.",
      "options": [
        "Weird",
        "Lie",
        "Tech issue",
        "Okay"
      ],
      "correct": 1,
      "explanation": "They invent technical constraints to force the overpayment."
    },
    {
      "type": 2,
      "prompt": "You check your balance: $0.00.",
      "options": [
        "Lag",
        "Proof of scam. No money was sent.",
        "Wait",
        "Glitch"
      ],
      "correct": 1,
      "explanation": "Instant payments are instant. If it's not there, it's not real."
    },
    {
      "type": 2,
      "prompt": "They threaten to report you to the FBI/Police if you don't refund.",
      "options": [
        "Panic",
        "Intimidation tactic. Ignore.",
        "Refund",
        "Apologize"
      ],
      "correct": 1,
      "explanation": "Scammers use fear to make you act fast."
    },
    {
      "type": 2,
      "prompt": "The 'Shipping Agent' uses a personal Gmail address.",
      "options": [
        "Normal",
        "Scam",
        "Company",
        "Agent"
      ],
      "correct": 1,
      "explanation": "Logistics companies have domains."
    },
    {
      "type": 2,
      "prompt": "Is 'PayPal My Cash' a thing?",
      "options": [
        "Yes",
        "Scammers often ask for these cards",
        "No",
        "Maybe"
      ],
      "correct": 1,
      "explanation": "Another gift card variant."
    },
    {
      "type": 2,
      "prompt": "They overpay by $1000s.",
      "options": [
        "Mistake",
        "Greed bait",
        "Generous",
        "Rich"
      ],
      "correct": 1,
      "explanation": "The larger the overpayment, the larger their profit."
    },
    {
      "type": 2,
      "prompt": "Best defense?",
      "options": [
        "Cash only",
        "Login to check",
        "Both A and B",
        "Trust"
      ],
      "correct": 2,
      "explanation": "Verify, verify, verify."
    },
    {
      "type": 3,
      "prompt": "Tech support scammer edits your screen to show a refund of $40,000 instead of $400.",
      "options": [
        "Keep it",
        "It's fake (HTML Edit). No money moved.",
        "Return it",
        "Wow"
      ],
      "correct": 1,
      "explanation": "They change the text on your browser locally. The bank balance didn't actually change."
    },
    {
      "type": 3,
      "prompt": "They beg you to return the difference or they will be 'fired'.",
      "options": [
        "Return",
        "Act. Manipulation.",
        "Sad",
        "Help"
      ],
      "correct": 1,
      "explanation": "Emotional blackmail."
    },
    {
      "type": 3,
      "prompt": "They moved money from your Savings to Chequing to simulate a deposit.",
      "options": [
        "Deposit",
        "Internal transfer. It's your own money.",
        "Refund",
        "Bank error"
      ],
      "correct": 1,
      "explanation": "You see the balance go up in one account and assume it's a refund."
    },
    {
      "type": 3,
      "prompt": "They blackout the screen while doing it.",
      "options": [
        "Privacy",
        "To hide the internal transfer",
        "Glitch",
        "Tech"
      ],
      "correct": 1,
      "explanation": "Hiding the crime."
    },
    {
      "type": 3,
      "prompt": "They want the return via Gift Cards.",
      "options": [
        "Buy",
        "Scam",
        "Okay",
        "Cards"
      ],
      "correct": 1,
      "explanation": "Always the gift cards."
    },
    {
      "type": 3,
      "prompt": "They ask you to leave the phone line open while you go to the bank.",
      "options": [
        "Support",
        "Monitoring",
        "Nice",
        "Okay"
      ],
      "correct": 1,
      "explanation": "They want to hear if the teller warns you."
    },
    {
      "type": 3,
      "prompt": "You check your balance on a DIFFERENT device.",
      "options": [
        "Smart",
        "Dumb",
        "Same",
        "Hard"
      ],
      "correct": 0,
      "explanation": "The edited screen only shows on the compromised PC. Phone app shows truth."
    },
    {
      "type": 3,
      "prompt": "They ask for access to your 2FA code to 'process the refund'.",
      "options": [
        "Give",
        "They are stealing money OUT",
        "Process",
        "Code"
      ],
      "correct": 1,
      "explanation": "2FA is for logging in/sending, not receiving."
    },
    {
      "type": 3,
      "prompt": "Can you reverse a gift card?",
      "options": [
        "No",
        "Yes",
        "Maybe",
        "Sometimes"
      ],
      "correct": 0,
      "explanation": "Money is gone."
    },
    {
      "type": 3,
      "prompt": "What is 'AnyDesk'?",
      "options": [
        "Desk",
        "Remote software used to perform this scam",
        "Furniture",
        "App"
      ],
      "correct": 1,
      "explanation": "The tool allowing them to edit your screen."
    },
    {
      "type": 4,
      "prompt": "New remote job sends you a check for 'Home Office Setup'.",
      "options": [
        "Deposit",
        "Scam. Fake check.",
        "Buy desk",
        "Work"
      ],
      "correct": 1,
      "explanation": "Employers buy equipment, they don't send checks to new hires."
    },
    {
      "type": 4,
      "prompt": "They ask you to pay the vendor via Zelle/Bank Transfer.",
      "options": [
        "Pay",
        "Scam. Vendor is the scammer.",
        "Order",
        "Work"
      ],
      "correct": 1,
      "explanation": "Laundering."
    },
    {
      "type": 4,
      "prompt": "The check amount includes your 'Signing Bonus'.",
      "options": [
        "Nice",
        "Bait",
        "Rich",
        "Good"
      ],
      "correct": 1,
      "explanation": "Making the amount larger makes you want to believe it."
    },
    {
      "type": 4,
      "prompt": "You deposit the check and the funds are 'Available'.",
      "options": [
        "Safe",
        "Not cleared yet. Available != Cleared.",
        "Spend",
        "Withdraw"
      ],
      "correct": 1,
      "explanation": "Banks make funds available by law before the check actually clears."
    },
    {
      "type": 4,
      "prompt": "Bank calls 3 days later saying check is fake.",
      "options": [
        "Oops",
        "You are liable for any spent funds",
        "Employer pays",
        "Bank pays"
      ],
      "correct": 1,
      "explanation": "The debt is yours."
    },
    {
      "type": 4,
      "prompt": "Why not wire the money directly?",
      "options": [
        "Fees",
        "Wires can't be reversed like fake checks",
        "Slow",
        "Hard"
      ],
      "correct": 1,
      "explanation": "Scammers avoid irreversible payments TO you."
    },
    {
      "type": 4,
      "prompt": "They ask for unused money back.",
      "options": [
        "Return",
        "Scam",
        "Keep",
        "Bonus"
      ],
      "correct": 1,
      "explanation": "The core of the scam."
    },
    {
      "type": 4,
      "prompt": "The company has no website.",
      "options": [
        "Startup",
        "Red flag",
        "New",
        "Stealth"
      ],
      "correct": 1,
      "explanation": "Due diligence."
    },
    {
      "type": 4,
      "prompt": "Interview was via text.",
      "options": [
        "Modern",
        "Scam",
        "Easy",
        "Fast"
      ],
      "correct": 1,
      "explanation": "Standard for fake jobs."
    },
    {
      "type": 4,
      "prompt": "Report to?",
      "options": [
        "Bank",
        "Police",
        "Scamwatch",
        "All"
      ],
      "correct": 3,
      "explanation": "Cover all bases."
    },
    {
      "type": 5,
      "prompt": "You wired money via Western Union.",
      "options": [
        "Call WU",
        "Unlikely to recover, but report it",
        "Wait",
        "Cancel"
      ],
      "correct": 1,
      "explanation": "Cash pickups are instant."
    },
    {
      "type": 5,
      "prompt": "You sent a bank transfer.",
      "options": [
        "Call bank immediately",
        "Wait",
        "Email",
        "Cry"
      ],
      "correct": 0,
      "explanation": "Recall requests might work if caught within hours."
    },
    {
      "type": 5,
      "prompt": "You deposited a fake check.",
      "options": [
        "Tell bank immediately",
        "Wait for bounce",
        "Spend",
        "Hide"
      ],
      "correct": 0,
      "explanation": "Honesty prevents the bank closing your account for fraud."
    },
    {
      "type": 5,
      "prompt": "The scammer threatens legal action.",
      "options": [
        "Ignore",
        "Block. Empty threats.",
        "Pay",
        "Apologize"
      ],
      "correct": 1,
      "explanation": "Criminals don't go to court."
    },
    {
      "type": 5,
      "prompt": "Should you spend the 'extra' money?",
      "options": [
        "No",
        "Yes",
        "Maybe",
        "Invest"
      ],
      "correct": 0,
      "explanation": "It will disappear soon."
    },
    {
      "type": 5,
      "prompt": "Report to platform (Gumtree/eBay)?",
      "options": [
        "Yes",
        "No",
        "Waste",
        "Maybe"
      ],
      "correct": 0,
      "explanation": "Ban their account."
    },
    {
      "type": 5,
      "prompt": "Did you give them ID?",
      "options": [
        "Yes",
        "ID Theft risk. Act accordingly.",
        "No",
        "Maybe"
      ],
      "correct": 1,
      "explanation": "They might use your ID to scam others."
    },
    {
      "type": 5,
      "prompt": "Educate others.",
      "options": [
        "Share story",
        "Hide",
        "Shame",
        "Forget"
      ],
      "correct": 0,
      "explanation": "Awareness stops scams."
    },
    {
      "type": 5,
      "prompt": "Can police help?",
      "options": [
        "Report it",
        "International jurisdiction makes it hard",
        "Yes",
        "No"
      ],
      "correct": 1,
      "explanation": "Report for statistics, but don't expect a raid."
    },
    {
      "type": 5,
      "prompt": "Lesson learned?",
      "options": [
        "Trust no one",
        "Never accept overpayments",
        "Cash only",
        "All"
      ],
      "correct": 1,
      "explanation": "The Golden Rule."
    }
  ]
};