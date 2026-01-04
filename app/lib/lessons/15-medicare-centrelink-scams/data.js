export default [
  {
    id: "15-01",
    title: "The 'New Medicare Card' Scam",
    description: "They claim you need to 'upgrade' your card to steal your details.",
    questions: [
      {
        question: "You get a text: 'Medicare: Your card has expired. You must upgrade to the new smart card immediately'.",
        options: ["Click the link", "Scam. Medicare sends new cards automatically.", "Go to a branch", "Reply"],
        correctAnswer: 1,
        explanation: "Medicare sends replacement cards automatically before the old one expires. You never need to 'apply' via a text link."
      },
      {
        question: "The website asks for a 'small fee' ($25) to process your new card.",
        options: ["Pay it", "Scam. Medicare cards are free.", "Bargain", "Standard"],
        correctAnswer: 1,
        explanation: "Medicare cards are free. Asking for payment is a tactic to steal your credit card details."
      },
      {
        question: "The caller says they are from 'Medicare/Centrelink' and needs to 'verify' your bank details for the new card.",
        options: ["Give details", "Hang up. They don't need bank details for a card.", "Confirm only last 4 digits", "Trust them"],
        correctAnswer: 1,
        explanation: "Medicare does not need your bank account information to issue a physical card."
      },
      {
        question: "They ask for high-detail info: Mother's Maiden Name and Place of Birth.",
        options: ["Standard verification", "Identity Theft Risk. Don't share.", "Okay", "Only if polite"],
        correctAnswer: 1,
        explanation: "This is not for a card; this is to build a profile to steal your identity completely."
      },
      {
        question: "The email threatens that you will lose access to Bulk Billing if you don't update now.",
        options: ["Panic and update", "Scam tactic (Urgency/Threat)", "Call doctor", "True"],
        correctAnswer: 1,
        explanation: "Scammers use the fear of losing medical access to force you to click."
      },
      {
        question: "The link looks like 'medicare-update-gov.net'.",
        options: ["Official", "Scam. Official sites end in .gov.au", "Backup site", "Global"],
        correctAnswer: 1,
        explanation: "Always check the domain. If it's not '.gov.au', it is not the Australian Government."
      },
      {
        question: "You are asked to upload a photo of your Driver's License to 'prove your identity'.",
        options: ["Upload it", "Never upload ID to a link sent via SMS/Email", "Blur it", "Fax it"],
        correctAnswer: 1,
        explanation: "This is harvesting ID documents for fraud."
      },
      {
        question: "Can you buy a 'Premium' Medicare card?",
        options: ["Yes, for faster service", "No, everyone gets the same card", "Gold members only", "Maybe"],
        correctAnswer: 1,
        explanation: "There is no 'Premium' or 'Gold' paid tier of Medicare."
      },
      {
        question: "The message is sent via WhatsApp.",
        options: ["Modern government", "Scam. Government agencies don't use WhatsApp.", "Secure", "Easy"],
        correctAnswer: 1,
        explanation: "Government correspondence does not happen on encrypted chat apps."
      },
      {
        question: "What do you do if your card is actually lost?",
        options: ["Click a random link", "Use the official Express Plus Medicare app or myGov", "Post on Facebook", "Wait"],
        correctAnswer: 1,
        explanation: "Always initiate the request yourself through official channels."
      }
    ]
  },
  {
    id: "15-02",
    title: "Fake Rebates & Subsidies",
    description: "Free money offers that cost you everything.",
    questions: [
      {
        question: "Email: 'Services Australia: You are eligible for a one-time cost of living subsidy of $750'.",
        options: ["Claim it", "Log in to myGov directly to check. Don't click links.", "Spend it", "Reply"],
        correctAnswer: 1,
        explanation: "If a subsidy exists, it will appear in your myGov Inbox, not via a random link."
      },
      {
        question: "The site asks you to enter your credit card to 'receive' the money.",
        options: ["Enter card", "Scam. You don't need a credit card to RECEIVE money.", "Enter debit card", "Ask why"],
        correctAnswer: 1,
        explanation: "Money is paid into a bank account (BSB/Acc No), never to a credit card number."
      },
      {
        question: "The email is personally addressed to 'Dear Citizen'.",
        options: ["Polite", "Scam. Generic greeting indicates mass spam.", "Respectful", "Normal"],
        correctAnswer: 1,
        explanation: "Services Australia knows your name. 'Dear Customer/Citizen' is a red flag."
      },
      {
        question: "They claim the rebate is for 'Covid-19 Relief' years after the pandemic.",
        options: ["Back pay", "Scam. Using old news to trick people.", "Lucky", "Bonus"],
        correctAnswer: 1,
        explanation: "Scammers recycle old themes (Covid, Floods, Bushfires) to seem relevant."
      },
      {
        question: "The SMS comes from a private mobile number (e.g., 04XX XXX XXX).",
        options: ["Worker's phone", "Scam. Official alerts usually use a Sender ID (e.g., 'myGov').", "Mistake", "Okay"],
        correctAnswer: 1,
        explanation: "Government agencies rarely send official alerts from standard mobile numbers."
      },
      {
        question: "The promise is for a 'Medical Rebate' you didn't apply for.",
        options: ["Automatic win", "Scam. You usually have to lodge a claim to get a rebate.", "Government gift", "System error"],
        correctAnswer: 1,
        explanation: "Unexpected money is the most common hook in the scammer's book."
      },
      {
        question: "You click the link and your browser warns 'Deceptive Site Ahead'.",
        options: ["Continue anyway", "Close the tab immediately", "It's a glitch", "Disable antivirus"],
        correctAnswer: 1,
        explanation: "Trust browser warnings. They block known phishing sites."
      },
      {
        question: "They ask for your TFN to process the payment.",
        options: ["Give it", "Be very careful. Only share TFN on official myGov site.", "It's fine", "Write it down"],
        correctAnswer: 1,
        explanation: "Your TFN is high-value data. Never share it on an unverified site."
      },
      {
        question: "The website has a countdown timer: 'Claim within 5 minutes'.",
        options: ["Hurry", "Scam tactic (False Urgency)", "Efficiency", "Server load"],
        correctAnswer: 1,
        explanation: "The government does not put 5-minute timers on subsidy claims."
      },
      {
        question: "How do you verify a subsidy?",
        options: ["Ask a friend", "Check servicesaustralia.gov.au 'News' section", "Click the link", "Guess"],
        correctAnswer: 1,
        explanation: "Real payments are announced on the official website and news."
      }
    ]
  },
  {
    id: "15-03",
    title: "Robocalls & Threats",
    description: "Robot voices threatening to arrest you.",
    questions: [
      {
        question: "You pick up the phone and a robot voice says: 'This is Services Australia. Your payments have been suspended.'",
        options: ["Panic", "Hang up. It's a scam robocall.", "Listen", "Press 1"],
        correctAnswer: 1,
        explanation: "Centrelink does not use automated robot voices to tell you payments are stopped."
      },
      {
        question: "The voice says 'Press 1 to speak to a case officer'.",
        options: ["Press 1", "Don't press anything. Hang up.", "Press 0", "Yell"],
        correctAnswer: 1,
        explanation: "Pressing 1 marks your number as 'active' and connects you to a scammer."
      },
      {
        question: "They threaten you with jail time for 'Benefit Fraud'.",
        options: ["Scary", "Scam intimidation tactic", "Surrender", "Pay"],
        correctAnswer: 1,
        explanation: "This is designed to trigger a 'fight or flight' panic response."
      },
      {
        question: "They demand you buy iTunes Gift Cards to pay back a debt.",
        options: ["Buy them", "Scam. Government never takes gift cards.", "Check balance", "Okay"],
        correctAnswer: 1,
        explanation: "Government debt is never settled via gift vouchers."
      },
      {
        question: "The caller ID says 'Canberra'. Is it real?",
        options: ["Yes", "Not necessarily. Scammers spoof locations.", "Maybe", "Always"],
        correctAnswer: 1,
        explanation: "Scammers can make their number appear to come from anywhere."
      },
      {
        question: "They ask you to download software to 'secure your account'.",
        options: ["Download", "Remote Access Scam. Never do this.", "Update", "Helpful"],
        correctAnswer: 1,
        explanation: "They want to control your computer to access your banking."
      },
      {
        question: "You have no Centrelink account, but they still called.",
        options: ["Mistake", "It's a random robo-dial scam", "Identity theft", "Future warning"],
        correctAnswer: 1,
        explanation: "They call everyone. If you don't use Centrelink, it's obviously a scam."
      },
      {
        question: "They ask for your password over the phone.",
        options: ["Give it", "NEVER give passwords over the phone", "Only half", "Spell it"],
        correctAnswer: 1,
        explanation: "Staff do not need your password to access your file."
      },
      {
        question: "The Chinese Language Robocall (often targeting students/expats).",
        options: ["Ignore if you don't speak it", "It's a common 'Embassy/Authority' scam", "Translate it", "Both A and B"],
        correctAnswer: 3,
        explanation: "These scams target specific communities pretending to be authorities."
      },
      {
        question: "How to stop robocalls?",
        options: ["Yell at them", "Do not answer unknown numbers/block them", "Blow a whistle", "Press 1"],
        correctAnswer: 1,
        explanation: "Answering confirms your number is real. Letting it go to voicemail is safer."
      }
    ]
  },
  {
    id: "15-04",
    title: "My Health Record Phishing",
    description: "Stealing your medical history.",
    questions: [
      {
        question: "You get an email saying 'New results uploaded to My Health Record. Click to view'.",
        options: ["Click it", "Log in via my.gov.au independently", "Forward to doctor", "Open attachment"],
        correctAnswer: 1,
        explanation: "Medical phishing uses curiosity about health results to steal credentials."
      },
      {
        question: "Why do scammers want medical data?",
        options: ["To cure you", "To commit medical identity fraud or blackmail", "Curiosity", "Research"],
        correctAnswer: 1,
        explanation: "Medical records are valuable for ID theft and obtaining prescription drugs."
      },
      {
        question: "The link asks you to download a .exe file to view your record.",
        options: ["Download", "Malware. Never open .exe files from email.", "Run it", "Safe"],
        correctAnswer: 1,
        explanation: "This is likely ransomware or spyware."
      },
      {
        question: "The email uses the old Medicare logo.",
        options: ["Nostalgic", "Sign of a scam (outdated assets)", "Official", "Fine"],
        correctAnswer: 1,
        explanation: "Scammers often use outdated logos or branding."
      },
      {
        question: "They claim you need to pay a subscription to keep My Health Record.",
        options: ["Pay", "Scam. My Health Record is free.", "Unsubscribe", "Discount"],
        correctAnswer: 1,
        explanation: "It is a free government service."
      },
      {
        question: "You receive a call offering to 'clean up' your medical file for a fee.",
        options: ["Good idea", "Scam", "Privacy service", "Legal"],
        correctAnswer: 1,
        explanation: "Only you and your doctors manage your record."
      },
      {
        question: "The URL is 'myhealth-portal-login.com'.",
        options: ["Legit", "Phishing scam", "New system", "Secure"],
        correctAnswer: 1,
        explanation: "Look for 'digitalhealth.gov.au' or 'my.gov.au'."
      },
      {
        question: "Can you opt out of My Health Record via a text link?",
        options: ["Yes", "No, log in to myGov to manage settings", "Maybe", "Text STOP"],
        correctAnswer: 1,
        explanation: "Administrative changes must be done via the official portal."
      },
      {
        question: "They ask for your Medicare number to 'verify a vaccination certificate'.",
        options: ["Give it", "Only if you initiated the call/request", "It's public info", "Safe"],
        correctAnswer: 1,
        explanation: "Don't provide sensitive numbers to cold-callers."
      },
      {
        question: "What if you see a record you don't recognize?",
        options: ["Ignore it", "Report it to the System Operator/Helpline", "Delete it", "Panic"],
        correctAnswer: 1,
        explanation: "Unrecognized activity is a sign of compromise."
      }
    ]
  },
  {
    id: "15-05",
    title: "Pension & Disability Scams",
    description: "Targeting the most vulnerable.",
    questions: [
      {
        question: "Someone offers to 'Help you apply for the Disability Pension' for a $200 fee.",
        options: ["Pay them", "Scam. Applications are free.", "Consultant", "Helper"],
        correctAnswer: 1,
        explanation: "Predatory scammers charge for free services and often steal the back-pay."
      },
      {
        question: "They claim to be from 'The Pension Board' (Fake Name).",
        options: ["Official", "Scam. Check the agency name carefully.", "New dept", "Okay"],
        correctAnswer: 1,
        explanation: "Scammers invent sounding-sounding names. It is 'Services Australia' or 'Centrelink'."
      },
      {
        question: "They say your pension will be cut if you don't buy a 'Gold Card'.",
        options: ["Buy it", "Scam", "Upgrade", "Value"],
        correctAnswer: 1,
        explanation: "There is no such thing as a paid upgrade to pension cards."
      },
      {
        question: "A 'financial advisor' calls specifically targeting your lump sum payment.",
        options: ["Listen", "Be wary of 'investment scams' targeting retirees", "Invest", "Trust"],
        correctAnswer: 1,
        explanation: "Investment scams aggressively target people who have just received lump sums."
      },
      {
        question: "They offer to move your pension to a 'High Yield' account.",
        options: ["Do it", "Scam. Stick to regulated banks.", "Great return", "Easy"],
        correctAnswer: 1,
        explanation: "This is often a way to steal the entire balance."
      },
      {
        question: "They ask for your 'CRN' (Customer Reference Number) to send you a prize.",
        options: ["Give it", "Scam. CRN is for Centrelink business only.", "Prize time", "Okay"],
        correctAnswer: 1,
        explanation: "Your CRN is personal. Don't trade it for fake prizes."
      },
      {
        question: "The email has poor spelling: 'Dear Pensioneer'.",
        options: ["Typo", "Scam red flag", "Old English", "Fine"],
        correctAnswer: 1,
        explanation: "Official government communications are proofread. Errors suggest a scam."
      },
      {
        question: "They visit your home claiming to be from Centrelink.",
        options: ["Let them in", "Ask for ID and call Centrelink to verify", "Make tea", "Chat"],
        correctAnswer: 1,
        explanation: "Unexpected home visits are extremely rare and suspicious."
      },
      {
        question: "They ask you to sign a form giving them 'Power of Attorney'.",
        options: ["Sign it", "NEVER sign this without legal advice", "It helps", "Standard"],
        correctAnswer: 1,
        explanation: "This gives them total control over your finances."
      },
      {
        question: "Where can you get safe help?",
        options: ["Random email", "Official Centrelink Financial Information Service (FIS)", "Facebook", "Caller"],
        correctAnswer: 1,
        explanation: "The FIS is a free, legitimate service."
      }
    ]
  }
];