export default [
  {
    id: "33-01",
    title: "The 'Safe Account' Transfer",
    description: "The bank will never ask you to move your money.",
    questions: [
      {
        question: "Caller: 'We detected fraud. Transfer your funds to this Safe Account to protect them'.",
        options: ["Transfer", "Hang up. Scam. Banks NEVER have 'safe accounts'.", "Ask account number", "Panic"],
        correctAnswer: 1,
        explanation: "The 'Safe Account' is the scammer's account. Real banks freeze funds; they don't move them."
      },
      {
        question: "They know your exact bank balance.",
        options: ["Must be bank", "They may have hacked your email/online banking already", "Magic", "Guess"],
        correctAnswer: 1,
        explanation: "Accessing your view-only data helps them convince you to authorize the transfer."
      },
      {
        question: "The caller ID says 'Commonwealth Bank'.",
        options: ["Trust", "Spoofed number", "Answer", "Safe"],
        correctAnswer: 1,
        explanation: "Numbers are easily faked."
      },
      {
        question: "They tell you to lie to the bank teller ('Say it's for a car').",
        options: ["Lie", "Huge Red Flag. They are coaching you to bypass security.", "Do it", "Obey"],
        correctAnswer: 1,
        explanation: "They know tellers are trained to spot victims."
      },
      {
        question: "They send a text with a code to 'verify' the transfer.",
        options: ["Read code", "The code is actually authorizing the payment. Read the text carefully.", "Send it", "Type it"],
        correctAnswer: 1,
        explanation: "The text likely says 'Payment to [Scammer Name]'. Don't share it."
      },
      {
        question: "You feel panicked.",
        options: ["Act fast", "Stop. Panic is their tool.", "Transfer", "Cry"],
        correctAnswer: 1,
        explanation: "Take 5 minutes. Call the bank on the number on your card."
      },
      {
        question: "Can you get the money back?",
        options: ["Yes", "Very difficult if YOU authorized the transfer", "Always", "Maybe"],
        correctAnswer: 1,
        explanation: "Authorized Push Payment fraud is hard to refund."
      },
      {
        question: "What is 'Mule' involvement?",
        options: ["Animal", "The 'Safe Account' belongs to another victim (money mule)", "Burro", "Kick"],
        correctAnswer: 1,
        explanation: "Money jumps through many accounts to hide the trail."
      },
      {
        question: "They keep you on the phone for hours.",
        options: ["Thorough", "Control tactic so you don't call anyone else", "Nice", "Service"],
        correctAnswer: 1,
        explanation: "They don't want you getting a second opinion."
      },
      {
        question: "Who to call?",
        options: ["Number in text", "13 22 21 (CBA) or your specific bank's official number", "Ghostbusters", "Scammer"],
        correctAnswer: 1,
        explanation: "Use independent contact details."
      }
    ]
  },
  {
    id: "33-02",
    title: "ATM Skimming Advanced",
    description: "Deep insert skimmers and cameras.",
    questions: [
      {
        question: "What is a 'Deep Insert Skimmer'?",
        options: ["A diving tool", "A thin device inside the card reader, invisible from outside", "A scanner", "A chip"],
        correctAnswer: 1,
        explanation: "These are very hard to see. Cover your PIN every time."
      },
      {
        question: "A tiny camera is pointed at the keypad.",
        options: ["Security", "PIN theft device", "Broken", "Sensor"],
        correctAnswer: 1,
        explanation: "Skimmers need the Card Data + PIN. The camera steals the PIN."
      },
      {
        question: "The keypad feels spongy or thick.",
        options: ["Old machine", "Fake keypad overlay", "New tech", "Buttons"],
        correctAnswer: 1,
        explanation: "Fake keypads record your keystrokes."
      },
      {
        question: "Should you wiggle the card reader?",
        options: ["Yes", "No", "Maybe", "Break it"],
        correctAnswer: 0,
        explanation: "If it moves or detaches, it's a skimmer."
      },
      {
        question: "Your card works, but you see money missing days later.",
        options: ["Magic", "Data was cloned and used overseas", "Bank fee", "Mistake"],
        correctAnswer: 1,
        explanation: "Cloned magnetic strip cards are often used in countries with weaker security."
      },
      {
        question: "ATM is in a tourist shop vs inside a bank.",
        options: ["Shop", "Bank is safer (CCTV + Guards)", "Same", "Shop is fast"],
        correctAnswer: 1,
        explanation: "Standalone ATMs are easier to tamper with."
      },
      {
        question: "Covering your hand while typing PIN prevents:",
        options: ["Cameras seeing PIN", "Skimming card", "Hacking", "Nothing"],
        correctAnswer: 0,
        explanation: "It defeats the camera part of the scam."
      },
      {
        question: "Can 'Tap' be skimmed?",
        options: ["Yes", "Much harder. The data is tokenized.", "No", "Maybe"],
        correctAnswer: 1,
        explanation: "Tap/NFC is safer than inserting."
      },
      {
        question: "You see glue residue on the machine.",
        options: ["Dirty", "Sign of tampering", "Old", "Sticky"],
        correctAnswer: 1,
        explanation: "Skimmers are often glued or taped on."
      },
      {
        question: "If stuck, do you leave?",
        options: ["Yes", "No, call bank immediately from the spot", "Go home", "Sleep"],
        correctAnswer: 1,
        explanation: "Don't leave your card for the scammer to retrieve."
      }
    ]
  },
  {
    id: "33-03",
    title: "Cheque Overpayment",
    description: "Old school technology, modern fraud.",
    questions: [
      {
        question: "You sell a car. Buyer sends a cheque for $15,000 (Price is $10k).",
        options: ["Cash it", "Scam. Return cheque.", "Keep extra", "Spend"],
        correctAnswer: 1,
        explanation: "Overpayment is always a scam."
      },
      {
        question: "They ask you to refund the $5,000 difference.",
        options: ["Do it", "Don't. The original cheque will bounce weeks later.", "Refund half", "Okay"],
        correctAnswer: 1,
        explanation: "Banks credit cheques provisionally. When they bounce, they take the money back from YOU."
      },
      {
        question: "The money appears in your account as 'Uncleared Funds'.",
        options: ["Safe to spend", "Not safe. It hasn't cleared.", "Spend", "Withdraw"],
        correctAnswer: 1,
        explanation: "Wait for full clearance (can take days/weeks)."
      },
      {
        question: "The cheque is from an overseas bank.",
        options: ["Fine", "High risk. Takes weeks to verify.", "Global", "Cool"],
        correctAnswer: 1,
        explanation: "International cheques are the scammer's tool of choice due to delay."
      },
      {
        question: "They claim it was a 'secretary error'.",
        options: ["Believe", "Scam script", "Mistake", "Forgive"],
        correctAnswer: 1,
        explanation: "Common excuse for overpayment."
      },
      {
        question: "Bank Cheque vs Personal Cheque.",
        options: ["Bank cheque safer", "Both can be forged", "Same", "Personal better"],
        correctAnswer: 1,
        explanation: "Even 'Bank Cheques' can be counterfeit."
      },
      {
        question: "You spent the money. Now the cheque bounced.",
        options: ["Bank pays", "You owe the bank the full amount", "Buyer pays", "Insurance"],
        correctAnswer: 1,
        explanation: "You are liable for your account balance."
      },
      {
        question: "Why do scammers use cheques in 2025?",
        options: ["Nostalgia", "The clearing delay creates a window for fraud", "Easier", "Cheaper"],
        correctAnswer: 1,
        explanation: "The time lag is the loophole."
      },
      {
        question: "Buyer refuses other payment methods.",
        options: ["Preference", "Red flag", "Old school", "Okay"],
        correctAnswer: 1,
        explanation: "They force the method that allows the scam."
      },
      {
        question: "Best response?",
        options: ["Destroy cheque", "Deposit", "Refund", "Talk"],
        correctAnswer: 0,
        explanation: "Stop communication."
      }
    ]
  },
  {
    id: "33-04",
    title: "Money Mules",
    description: "Don't become a criminal.",
    questions: [
      {
        question: "Job Ad: 'Payment Processing Agent. Receive funds, keep 10%, forward the rest'.",
        options: ["Apply", "Money Mule Scam. This is money laundering.", "Good job", "Easy cash"],
        correctAnswer: 1,
        explanation: "You are washing stolen money. This is a crime punishable by jail."
      },
      {
        question: "Online boyfriend asks you to use your account to move money.",
        options: ["Help him", "Refuse. He is using you as a mule.", "Love", "Trust"],
        correctAnswer: 1,
        explanation: "Romance scams often turn victims into mules."
      },
      {
        question: "The money coming in is stolen.",
        options: ["Not my problem", "You are liable and can be prosecuted", "I didn't know", "Safe"],
        correctAnswer: 1,
        explanation: "Ignorance is not a defense ('Willful Blindness')."
      },
      {
        question: "Your bank account gets frozen/closed.",
        options: ["Switch banks", "You may be blacklisted from ALL banks", "Wait", "Complain"],
        correctAnswer: 1,
        explanation: "Banks share data on fraud. You could lose banking access."
      },
      {
        question: "They send you Bitcoin and ask for Cash.",
        options: ["Swap", "Laundering", "Crypto", "Trade"],
        correctAnswer: 1,
        explanation: "Breaking the audit trail."
      },
      {
        question: "Signs of a mule job?",
        options: ["No interview", "Work from home, use personal bank account, keep commission", "All of above", "Professional"],
        correctAnswer: 2,
        explanation: "Legitimate jobs pay salary, they don't funnel cash through your personal account."
      },
      {
        question: "Police come knocking.",
        options: ["Explain", "Get a lawyer. You are part of a criminal network.", "Hide", "Run"],
        correctAnswer: 1,
        explanation: "Serious consequences."
      },
      {
        question: "Can students be mules?",
        options: ["No", "Yes, students are often targeted", "Never", "Rarely"],
        correctAnswer: 1,
        explanation: "Scammers target students needing cash."
      },
      {
        question: "Is 'flipping cash' real?",
        options: ["No", "Scam", "Yes", "Maybe"],
        correctAnswer: 1,
        explanation: "Turning $100 into $1000 is always a lie."
      },
      {
        question: "How to get out?",
        options: ["Stop immediately and call bank/police", "Keep 100%", "Ghost them", "Wait"],
        correctAnswer: 0,
        explanation: "Self-reporting is better than being caught."
      }
    ]
  },
  {
    id: "33-05",
    title: "PayID Scams",
    description: "Instant payments, instant scams.",
    questions: [
      {
        question: "Buyer asks for your PayID email.",
        options: ["Safe", "Usually safe, but watch for fake emails", "Dangerous", "Never"],
        correctAnswer: 1,
        explanation: "PayID itself is safe, but it triggers the 'Business Account' email scam."
      },
      {
        question: "Email: 'PayID limit reached. Buyer must send extra to upgrade your account'.",
        options: ["Believe", "Scam. PayID has no such limits/upgrades.", "Pay", "Upgrade"],
        correctAnswer: 1,
        explanation: "The upgrade fee does not exist."
      },
      {
        question: "Can a scammer steal money JUST from knowing your PayID (phone number)?",
        options: ["Yes", "No, they can only deposit money. They need your password to steal.", "Maybe", "Always"],
        correctAnswer: 1,
        explanation: "PayID is an address, not a password."
      },
      {
        question: "You sent money to the wrong PayID.",
        options: ["Undo", "Contact bank. Recovery is hard as Osko is instant.", "Cancel", "Wait"],
        correctAnswer: 1,
        explanation: "Check the name carefully before confirming."
      },
      {
        question: "The name displayed doesn't match the person you are paying.",
        options: ["Pay", "Stop. Ask why.", "It's fine", "Nickname"],
        correctAnswer: 1,
        explanation: "PayID shows the registered name. If it mismatches, don't pay."
      },
      {
        question: "Is PayID a separate app?",
        options: ["Yes", "No, it lives inside your normal banking app", "Website", "Store"],
        correctAnswer: 1,
        explanation: "Don't download 'PayID Apps'. It's a feature, not an app."
      },
      {
        question: "Scammer says 'PayID is down, use Western Union'.",
        options: ["Okay", "Scam. Moving to unsafe methods.", "Helpful", "Fine"],
        correctAnswer: 1,
        explanation: "They prefer untraceable cash."
      },
      {
        question: "Who runs PayID?",
        options: ["Google", "NPP Australia (Banks)", "Scammers", "Facebook"],
        correctAnswer: 1,
        explanation: "It is a legitimate banking infrastructure."
      },
      {
        question: "They claim to need your PayID to pick up a Marketplace item.",
        options: ["Normal", "Part of the setup for the fake email scam", "Okay", "Address"],
        correctAnswer: 1,
        explanation: "It's the first step in the script."
      },
      {
        question: "Best practice?",
        options: ["Check account balance in APP, ignore emails", "Trust email", "Guess", "Ask buyer"],
        correctAnswer: 0,
        explanation: "The app is the source of truth."
      }
    ]
  }
];