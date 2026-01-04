export default {
  "id": 33,
  "title": "Banking Scams",
  "emoji": "🏦",
  "description": "The bank will never ask you to move your money.",
  "introduction": "Learn to recognize and protect yourself from Banking Scams.",
  "warning_signs": [],
  "what_to_do": [],
  "how_it_works": "",
  "questions": [
    {
      "type": 1,
      "prompt": "Caller: 'We detected fraud. Transfer your funds to this Safe Account to protect them'.",
      "options": [
        "Transfer",
        "Hang up. Scam. Banks NEVER have 'safe accounts'.",
        "Ask account number",
        "Panic"
      ],
      "correct": 1,
      "explanation": "The 'Safe Account' is the scammer's account. Real banks freeze funds; they don't move them."
    },
    {
      "type": 1,
      "prompt": "They know your exact bank balance.",
      "options": [
        "Must be bank",
        "They may have hacked your email/online banking already",
        "Magic",
        "Guess"
      ],
      "correct": 1,
      "explanation": "Accessing your view-only data helps them convince you to authorize the transfer."
    },
    {
      "type": 1,
      "prompt": "The caller ID says 'Commonwealth Bank'.",
      "options": [
        "Trust",
        "Spoofed number",
        "Answer",
        "Safe"
      ],
      "correct": 1,
      "explanation": "Numbers are easily faked."
    },
    {
      "type": 1,
      "prompt": "They tell you to lie to the bank teller ('Say it's for a car').",
      "options": [
        "Lie",
        "Huge Red Flag. They are coaching you to bypass security.",
        "Do it",
        "Obey"
      ],
      "correct": 1,
      "explanation": "They know tellers are trained to spot victims."
    },
    {
      "type": 1,
      "prompt": "They send a text with a code to 'verify' the transfer.",
      "options": [
        "Read code",
        "The code is actually authorizing the payment. Read the text carefully.",
        "Send it",
        "Type it"
      ],
      "correct": 1,
      "explanation": "The text likely says 'Payment to [Scammer Name]'. Don't share it."
    },
    {
      "type": 1,
      "prompt": "You feel panicked.",
      "options": [
        "Act fast",
        "Stop. Panic is their tool.",
        "Transfer",
        "Cry"
      ],
      "correct": 1,
      "explanation": "Take 5 minutes. Call the bank on the number on your card."
    },
    {
      "type": 1,
      "prompt": "Can you get the money back?",
      "options": [
        "Yes",
        "Very difficult if YOU authorized the transfer",
        "Always",
        "Maybe"
      ],
      "correct": 1,
      "explanation": "Authorized Push Payment fraud is hard to refund."
    },
    {
      "type": 1,
      "prompt": "What is 'Mule' involvement?",
      "options": [
        "Animal",
        "The 'Safe Account' belongs to another victim (money mule)",
        "Burro",
        "Kick"
      ],
      "correct": 1,
      "explanation": "Money jumps through many accounts to hide the trail."
    },
    {
      "type": 1,
      "prompt": "They keep you on the phone for hours.",
      "options": [
        "Thorough",
        "Control tactic so you don't call anyone else",
        "Nice",
        "Service"
      ],
      "correct": 1,
      "explanation": "They don't want you getting a second opinion."
    },
    {
      "type": 1,
      "prompt": "Who to call?",
      "options": [
        "Number in text",
        "13 22 21 (CBA) or your specific bank's official number",
        "Ghostbusters",
        "Scammer"
      ],
      "correct": 1,
      "explanation": "Use independent contact details."
    },
    {
      "type": 2,
      "prompt": "What is a 'Deep Insert Skimmer'?",
      "options": [
        "A diving tool",
        "A thin device inside the card reader, invisible from outside",
        "A scanner",
        "A chip"
      ],
      "correct": 1,
      "explanation": "These are very hard to see. Cover your PIN every time."
    },
    {
      "type": 2,
      "prompt": "A tiny camera is pointed at the keypad.",
      "options": [
        "Security",
        "PIN theft device",
        "Broken",
        "Sensor"
      ],
      "correct": 1,
      "explanation": "Skimmers need the Card Data + PIN. The camera steals the PIN."
    },
    {
      "type": 2,
      "prompt": "The keypad feels spongy or thick.",
      "options": [
        "Old machine",
        "Fake keypad overlay",
        "New tech",
        "Buttons"
      ],
      "correct": 1,
      "explanation": "Fake keypads record your keystrokes."
    },
    {
      "type": 2,
      "prompt": "Should you wiggle the card reader?",
      "options": [
        "Yes",
        "No",
        "Maybe",
        "Break it"
      ],
      "correct": 0,
      "explanation": "If it moves or detaches, it's a skimmer."
    },
    {
      "type": 2,
      "prompt": "Your card works, but you see money missing days later.",
      "options": [
        "Magic",
        "Data was cloned and used overseas",
        "Bank fee",
        "Mistake"
      ],
      "correct": 1,
      "explanation": "Cloned magnetic strip cards are often used in countries with weaker security."
    },
    {
      "type": 2,
      "prompt": "ATM is in a tourist shop vs inside a bank.",
      "options": [
        "Shop",
        "Bank is safer (CCTV + Guards)",
        "Same",
        "Shop is fast"
      ],
      "correct": 1,
      "explanation": "Standalone ATMs are easier to tamper with."
    },
    {
      "type": 2,
      "prompt": "Covering your hand while typing PIN prevents:",
      "options": [
        "Cameras seeing PIN",
        "Skimming card",
        "Hacking",
        "Nothing"
      ],
      "correct": 0,
      "explanation": "It defeats the camera part of the scam."
    },
    {
      "type": 2,
      "prompt": "Can 'Tap' be skimmed?",
      "options": [
        "Yes",
        "Much harder. The data is tokenized.",
        "No",
        "Maybe"
      ],
      "correct": 1,
      "explanation": "Tap/NFC is safer than inserting."
    },
    {
      "type": 2,
      "prompt": "You see glue residue on the machine.",
      "options": [
        "Dirty",
        "Sign of tampering",
        "Old",
        "Sticky"
      ],
      "correct": 1,
      "explanation": "Skimmers are often glued or taped on."
    },
    {
      "type": 2,
      "prompt": "If stuck, do you leave?",
      "options": [
        "Yes",
        "No, call bank immediately from the spot",
        "Go home",
        "Sleep"
      ],
      "correct": 1,
      "explanation": "Don't leave your card for the scammer to retrieve."
    },
    {
      "type": 3,
      "prompt": "You sell a car. Buyer sends a cheque for $15,000 (Price is $10k).",
      "options": [
        "Cash it",
        "Scam. Return cheque.",
        "Keep extra",
        "Spend"
      ],
      "correct": 1,
      "explanation": "Overpayment is always a scam."
    },
    {
      "type": 3,
      "prompt": "They ask you to refund the $5,000 difference.",
      "options": [
        "Do it",
        "Don't. The original cheque will bounce weeks later.",
        "Refund half",
        "Okay"
      ],
      "correct": 1,
      "explanation": "Banks credit cheques provisionally. When they bounce, they take the money back from YOU."
    },
    {
      "type": 3,
      "prompt": "The money appears in your account as 'Uncleared Funds'.",
      "options": [
        "Safe to spend",
        "Not safe. It hasn't cleared.",
        "Spend",
        "Withdraw"
      ],
      "correct": 1,
      "explanation": "Wait for full clearance (can take days/weeks)."
    },
    {
      "type": 3,
      "prompt": "The cheque is from an overseas bank.",
      "options": [
        "Fine",
        "High risk. Takes weeks to verify.",
        "Global",
        "Cool"
      ],
      "correct": 1,
      "explanation": "International cheques are the scammer's tool of choice due to delay."
    },
    {
      "type": 3,
      "prompt": "They claim it was a 'secretary error'.",
      "options": [
        "Believe",
        "Scam script",
        "Mistake",
        "Forgive"
      ],
      "correct": 1,
      "explanation": "Common excuse for overpayment."
    },
    {
      "type": 3,
      "prompt": "Bank Cheque vs Personal Cheque.",
      "options": [
        "Bank cheque safer",
        "Both can be forged",
        "Same",
        "Personal better"
      ],
      "correct": 1,
      "explanation": "Even 'Bank Cheques' can be counterfeit."
    },
    {
      "type": 3,
      "prompt": "You spent the money. Now the cheque bounced.",
      "options": [
        "Bank pays",
        "You owe the bank the full amount",
        "Buyer pays",
        "Insurance"
      ],
      "correct": 1,
      "explanation": "You are liable for your account balance."
    },
    {
      "type": 3,
      "prompt": "Why do scammers use cheques in 2025?",
      "options": [
        "Nostalgia",
        "The clearing delay creates a window for fraud",
        "Easier",
        "Cheaper"
      ],
      "correct": 1,
      "explanation": "The time lag is the loophole."
    },
    {
      "type": 3,
      "prompt": "Buyer refuses other payment methods.",
      "options": [
        "Preference",
        "Red flag",
        "Old school",
        "Okay"
      ],
      "correct": 1,
      "explanation": "They force the method that allows the scam."
    },
    {
      "type": 3,
      "prompt": "Best response?",
      "options": [
        "Destroy cheque",
        "Deposit",
        "Refund",
        "Talk"
      ],
      "correct": 0,
      "explanation": "Stop communication."
    },
    {
      "type": 4,
      "prompt": "Job Ad: 'Payment Processing Agent. Receive funds, keep 10%, forward the rest'.",
      "options": [
        "Apply",
        "Money Mule Scam. This is money laundering.",
        "Good job",
        "Easy cash"
      ],
      "correct": 1,
      "explanation": "You are washing stolen money. This is a crime punishable by jail."
    },
    {
      "type": 4,
      "prompt": "Online boyfriend asks you to use your account to move money.",
      "options": [
        "Help him",
        "Refuse. He is using you as a mule.",
        "Love",
        "Trust"
      ],
      "correct": 1,
      "explanation": "Romance scams often turn victims into mules."
    },
    {
      "type": 4,
      "prompt": "The money coming in is stolen.",
      "options": [
        "Not my problem",
        "You are liable and can be prosecuted",
        "I didn't know",
        "Safe"
      ],
      "correct": 1,
      "explanation": "Ignorance is not a defense ('Willful Blindness')."
    },
    {
      "type": 4,
      "prompt": "Your bank account gets frozen/closed.",
      "options": [
        "Switch banks",
        "You may be blacklisted from ALL banks",
        "Wait",
        "Complain"
      ],
      "correct": 1,
      "explanation": "Banks share data on fraud. You could lose banking access."
    },
    {
      "type": 4,
      "prompt": "They send you Bitcoin and ask for Cash.",
      "options": [
        "Swap",
        "Laundering",
        "Crypto",
        "Trade"
      ],
      "correct": 1,
      "explanation": "Breaking the audit trail."
    },
    {
      "type": 4,
      "prompt": "Signs of a mule job?",
      "options": [
        "No interview",
        "Work from home, use personal bank account, keep commission",
        "All of above",
        "Professional"
      ],
      "correct": 2,
      "explanation": "Legitimate jobs pay salary, they don't funnel cash through your personal account."
    },
    {
      "type": 4,
      "prompt": "Police come knocking.",
      "options": [
        "Explain",
        "Get a lawyer. You are part of a criminal network.",
        "Hide",
        "Run"
      ],
      "correct": 1,
      "explanation": "Serious consequences."
    },
    {
      "type": 4,
      "prompt": "Can students be mules?",
      "options": [
        "No",
        "Yes, students are often targeted",
        "Never",
        "Rarely"
      ],
      "correct": 1,
      "explanation": "Scammers target students needing cash."
    },
    {
      "type": 4,
      "prompt": "Is 'flipping cash' real?",
      "options": [
        "No",
        "Scam",
        "Yes",
        "Maybe"
      ],
      "correct": 1,
      "explanation": "Turning $100 into $1000 is always a lie."
    },
    {
      "type": 4,
      "prompt": "How to get out?",
      "options": [
        "Stop immediately and call bank/police",
        "Keep 100%",
        "Ghost them",
        "Wait"
      ],
      "correct": 0,
      "explanation": "Self-reporting is better than being caught."
    },
    {
      "type": 5,
      "prompt": "Buyer asks for your PayID email.",
      "options": [
        "Safe",
        "Usually safe, but watch for fake emails",
        "Dangerous",
        "Never"
      ],
      "correct": 1,
      "explanation": "PayID itself is safe, but it triggers the 'Business Account' email scam."
    },
    {
      "type": 5,
      "prompt": "Email: 'PayID limit reached. Buyer must send extra to upgrade your account'.",
      "options": [
        "Believe",
        "Scam. PayID has no such limits/upgrades.",
        "Pay",
        "Upgrade"
      ],
      "correct": 1,
      "explanation": "The upgrade fee does not exist."
    },
    {
      "type": 5,
      "prompt": "Can a scammer steal money JUST from knowing your PayID (phone number)?",
      "options": [
        "Yes",
        "No, they can only deposit money. They need your password to steal.",
        "Maybe",
        "Always"
      ],
      "correct": 1,
      "explanation": "PayID is an address, not a password."
    },
    {
      "type": 5,
      "prompt": "You sent money to the wrong PayID.",
      "options": [
        "Undo",
        "Contact bank. Recovery is hard as Osko is instant.",
        "Cancel",
        "Wait"
      ],
      "correct": 1,
      "explanation": "Check the name carefully before confirming."
    },
    {
      "type": 5,
      "prompt": "The name displayed doesn't match the person you are paying.",
      "options": [
        "Pay",
        "Stop. Ask why.",
        "It's fine",
        "Nickname"
      ],
      "correct": 1,
      "explanation": "PayID shows the registered name. If it mismatches, don't pay."
    },
    {
      "type": 5,
      "prompt": "Is PayID a separate app?",
      "options": [
        "Yes",
        "No, it lives inside your normal banking app",
        "Website",
        "Store"
      ],
      "correct": 1,
      "explanation": "Don't download 'PayID Apps'. It's a feature, not an app."
    },
    {
      "type": 5,
      "prompt": "Scammer says 'PayID is down, use Western Union'.",
      "options": [
        "Okay",
        "Scam. Moving to unsafe methods.",
        "Helpful",
        "Fine"
      ],
      "correct": 1,
      "explanation": "They prefer untraceable cash."
    },
    {
      "type": 5,
      "prompt": "Who runs PayID?",
      "options": [
        "Google",
        "NPP Australia (Banks)",
        "Scammers",
        "Facebook"
      ],
      "correct": 1,
      "explanation": "It is a legitimate banking infrastructure."
    },
    {
      "type": 5,
      "prompt": "They claim to need your PayID to pick up a Marketplace item.",
      "options": [
        "Normal",
        "Part of the setup for the fake email scam",
        "Okay",
        "Address"
      ],
      "correct": 1,
      "explanation": "It's the first step in the script."
    },
    {
      "type": 5,
      "prompt": "Best practice?",
      "options": [
        "Check account balance in APP, ignore emails",
        "Trust email",
        "Guess",
        "Ask buyer"
      ],
      "correct": 0,
      "explanation": "The app is the source of truth."
    }
  ]
};