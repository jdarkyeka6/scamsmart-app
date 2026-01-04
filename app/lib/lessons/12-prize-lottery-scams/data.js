export default [
  {
    id: "12-01",
    title: "The Unexpected Win",
    description: "You've won a lottery you never entered! (Or have you?)",
    questions: [
      {
        question: "You receive an email: 'CONGRATS! You won the Spanish National Lottery!'. You live in Perth and didn't buy a ticket.",
        options: ["Lucky day!", "Scam - You cannot win a lottery you didn't enter", "Maybe a relative entered me", "Government bonus"],
        correctAnswer: 1,
        explanation: "This is the golden rule: If you didn't buy a ticket, you didn't win."
      },
      {
        question: "The email addresses you as 'Dear Winner' or 'Dear Customer' instead of your name.",
        options: ["Polite", "Scam - Mass blast emails use generic greetings", "Normal", "Privacy"],
        correctAnswer: 1,
        explanation: "Legitimate organizations know your name. Generic greetings indicate a mass-spam attack."
      },
      {
        question: "The prize amount is a weirdly specific large number (e.g., $2,450,120.50).",
        options: ["Accounting precision", "Tactic to make it look realistic", "Exchange rate", "Random"],
        correctAnswer: 1,
        explanation: "Scammers use specific numbers to seem official, but the premise is still false."
      },
      {
        question: "They ask you to keep your winnings 'confidential' until the money is transferred.",
        options: ["Standard security", "Scam tactic to stop you asking for advice", "Tax reasons", "Surprise"],
        correctAnswer: 1,
        explanation: "They isolate you so friends or family don't warn you it's a scam."
      },
      {
        question: "The email comes from 'lottery-winner-dept@yahoo.com'.",
        options: ["Official", "Scam - Official lotteries don't use free email", "Budget cuts", "Temporary"],
        correctAnswer: 1,
        explanation: "Always check the sender domain. Big lotteries have their own domains."
      },
      {
        question: "The notification appears as a 'Pop-up' while browsing a website.",
        options: ["You are the 1,000,000th visitor!", "Malware/Adware Scam", "Real prize", "Cookie bonus"],
        correctAnswer: 1,
        explanation: "Pop-up prizes are never real. They are clickbait to install malware or steal data."
      },
      {
        question: "Can you legally play foreign lotteries from Australia?",
        options: ["Yes, easily", "Generally no, unless through official licensed brokers", "Always", "No"],
        correctAnswer: 1,
        explanation: "Directly buying tickets for foreign lotteries is often restricted. Winning one randomly is impossible."
      },
      {
        question: "The message is full of urgency: 'Claim in 24 hours or lose it!'.",
        options: ["Hurry up", "Scam tactic to bypass logic", "Standard expiry", "Busy"],
        correctAnswer: 1,
        explanation: "Real lotteries give winners months or years to claim prizes."
      },
      {
        question: "They mention 'Microsoft' or 'Google' sponsored the lottery.",
        options: ["Tech money", "Scam - Tech companies don't run random email lotteries", "Possible", "Charity"],
        correctAnswer: 1,
        explanation: "Scammers drop big names to borrow authority."
      },
      {
        question: "What should you do with a 'You Won' spam email?",
        options: ["Reply", "Delete and block", "Forward to friends", "Click unsubscribe"],
        correctAnswer: 1,
        explanation: "Don't interact. Even clicking unsubscribe confirms your email is active."
      }
    ]
  },
  {
    id: "12-02",
    title: "Pay to Play (Advance Fee Fraud)",
    description: "The 'Prize' is free, but the fees are not.",
    questions: [
      {
        question: "To release your $1,000,000 prize, you must pay a $500 'transfer fee'.",
        options: ["Pay it, small price for big win", "Scam - Real prizes do not require upfront fees", "Negotiate", "Pay later"],
        correctAnswer: 1,
        explanation: "Legitimate lotteries subtract fees from the winnings. They NEVER ask for money upfront."
      },
      {
        question: "They ask for fees to cover 'Taxes', 'Customs', or 'Insurance'.",
        options: ["Legit legal costs", "Just different names for the same Advance Fee Scam", "Government rules", "Fair"],
        correctAnswer: 1,
        explanation: "Scammers invent endless bureaucratic reasons to extract money."
      },
      {
        question: "They send you a Cheque for $5,000 to cover the fees, asking you to wire back $2,000.",
        options: ["Great, I make $3,000", "Scam - The cheque will bounce days later", "Safe", "Loan"],
        correctAnswer: 1,
        explanation: "This is the 'Overpayment/Cheque Scam'. The bank clears the cheque initially, but when it bounces, you owe the bank."
      },
      {
        question: "They ask you to pay the fee via Amazon Gift Cards.",
        options: ["Weird but okay", "Scam - Government/Lotteries never use gift cards", "Modern", "Fast"],
        correctAnswer: 1,
        explanation: "Gift cards = Scam. No exceptions."
      },
      {
        question: "What happens if you pay the first fee?",
        options: ["You get the prize", "They ask for a second, larger fee", "They disappear", "Refund"],
        correctAnswer: 1,
        explanation: "The 'suckers list' theory: once you pay, they know you are vulnerable and will keep asking."
      },
      {
        question: "They say the fee is for 'Anti-Terrorism Certificate' or 'Money Laundering Clearance'.",
        options: ["Serious stuff", "Fake terms designed to scare you", "Police requirement", "Safety"],
        correctAnswer: 1,
        explanation: "They use scary legal jargon to justify the fees."
      },
      {
        question: "Can a bank release funds 'pending' a fee payment from you?",
        options: ["Yes", "No, banking doesn't work that way", "Maybe", "International only"],
        correctAnswer: 1,
        explanation: "Banks do not hold incoming transfers hostage waiting for an outgoing fee."
      },
      {
        question: "The 'Bank Manager' contacts you via WhatsApp to arrange the fee.",
        options: ["Personal service", "Scam", "VIP", "Modern"],
        correctAnswer: 1,
        explanation: "Bank managers do not conduct business on WhatsApp."
      },
      {
        question: "You offer to fly to their office to pay the fee in person.",
        options: ["They will agree", "They will make excuses why you can't come", "Good idea", "Fun trip"],
        correctAnswer: 1,
        explanation: "Scammers are physically nowhere near where they claim to be. They will refuse a meeting."
      },
      {
        question: "Why do they ask for small amounts first?",
        options: ["To test the waters", "Kindness", "Processing", "Taxes"],
        correctAnswer: 0,
        explanation: "It's called 'grooming'. They start small to build compliance."
      }
    ]
  },
  {
    id: "12-03",
    title: "Premium Rate Numbers",
    description: "The call that costs you a fortune.",
    questions: [
      {
        question: "You get a card saying 'Call 190xxxx to claim your prize'.",
        options: ["Call it", "Check the cost of 190 numbers first", "Ignore it", "Text it"],
        correctAnswer: 1,
        explanation: "190 numbers in Australia are Premium Rate. They can charge $5+ per minute."
      },
      {
        question: "When you call, the operator puts you on hold for a long time.",
        options: ["They are busy", "Scam - they are keeping you on the line to rack up charges", "Bad service", "Normal"],
        correctAnswer: 1,
        explanation: "Every minute you wait is money in their pocket."
      },
      {
        question: "You receive a 'Missed Call' from a foreign number (e.g., +235). You call back.",
        options: ["Polite", "Wangiri Scam (One Ring Scam)", "Mistake", "Friend"],
        correctAnswer: 1,
        explanation: "They ring once and hang up, hoping you call back. The return call connects to a premium service."
      },
      {
        question: "The prize is a '$500 voucher' but the call costs $50.",
        options: ["Good deal", "Bad deal - the voucher is likely restricted or fake", "Profit", "Fun"],
        correctAnswer: 1,
        explanation: "Often the 'prize' is a voucher you have to spend money to use (e.g., hotel discount), making it worthless."
      },
      {
        question: "How can you block premium numbers?",
        options: ["Ask your Telco", "You can't", "Smash phone", "Flight mode"],
        correctAnswer: 0,
        explanation: "You can ask your provider to bar calls to 190 numbers."
      },
      {
        question: "A text says 'Text WIN to 19xxxx'. Is this free?",
        options: ["Yes", "No, premium SMS charges apply", "Maybe", "If you win"],
        correctAnswer: 1,
        explanation: "Premium SMS services can charge high fees just for sending or receiving texts."
      },
      {
        question: "The operator asks for your personal details 'to verify the win'.",
        options: ["Give them", "Don't give them", "Only name", "Only address"],
        correctAnswer: 1,
        explanation: "They are harvesting data to sell to other scammers."
      },
      {
        question: "What is 'Wangiri'?",
        options: ["A type of sushi", "Japanese for 'One ring and cut' scam", "A lottery", "A city"],
        correctAnswer: 1,
        explanation: "The Wangiri scam involves missed calls from international numbers to trigger expensive callbacks."
      },
      {
        question: "You get a text 'Delivery unable to be made, call this number'.",
        options: ["Call immediately", "Check number format", "Wait", "Panic"],
        correctAnswer: 1,
        explanation: "Parcel scams often use premium numbers as the 'contact' point."
      },
      {
        question: "Can you get a refund for premium calls if it was a scam?",
        options: ["Always", "Difficult, but contact the TIO (Telecommunications Industry Ombudsman)", "Never", "From the scammer"],
        correctAnswer: 1,
        explanation: "It's hard, but the TIO can sometimes help dispute charges."
      }
    ]
  },
  {
    id: "12-04",
    title: "Fake Scratchies",
    description: "The 'Travel Prize' that comes in the mailbox.",
    questions: [
      {
        question: "You receive a glossy travel brochure and scratchie cards in the letterbox.",
        options: ["Junk mail", "Likely a scam if it promises a guaranteed win", "Real lottery", "Gift"],
        correctAnswer: 1,
        explanation: "Mass-mailed scratchies that 'always win' the 2nd prize are a common scam format."
      },
      {
        question: "You scratch the card and you won '$150,000'!",
        options: ["Celebrate", "Read the fine print extremely carefully", "Quit job", "Book flight"],
        correctAnswer: 1,
        explanation: "Every single card sent out is a 'winner'. It's a hook to get you to call."
      },
      {
        question: "To claim the prize, you must send bank details or a fee.",
        options: ["Do it", "Scam", "Normal", "Okay"],
        correctAnswer: 1,
        explanation: "The catch is always a fee or data theft."
      },
      {
        question: "The brochure looks professional and has logos of famous airlines.",
        options: ["Must be real", "Scammers steal logos to look legitimate", "Partnership", "Sponsorship"],
        correctAnswer: 1,
        explanation: "Copyright infringement means nothing to criminals. Logos do not equal legitimacy."
      },
      {
        question: "The fine print says 'Subject to availability' or 'participating resorts'.",
        options: ["Standard", "Usually means you have to pay for expensive accommodation to get the 'free' flight", "Legal", "Fair"],
        correctAnswer: 1,
        explanation: "The prize is usually a discount voucher that actually costs you more than booking normally."
      },
      {
        question: "The return address is a PO Box or overseas.",
        options: ["Normal", "Hard to trace - suspicious", "Office", "Depot"],
        correctAnswer: 1,
        explanation: "Lack of a physical street address is a warning sign."
      },
      {
        question: "You Google the company name and find 'scam' warnings.",
        options: ["Ignore them", "Believe them", "Competitors", "Fake news"],
        correctAnswer: 1,
        explanation: "Always search 'Company Name + scam' before acting."
      },
      {
        question: "Why do they use physical mail?",
        options: ["Old school", "It targets older demographics who trust mail more than email", "Cheaper", "Legal"],
        correctAnswer: 1,
        explanation: "Older people are often the target for physical mail fraud."
      },
      {
        question: "The prize is in a foreign currency.",
        options: ["Global prize", "Red flag for an international scam group", "Bank converts it", "Cool"],
        correctAnswer: 1,
        explanation: "Australian lotteries pay in AUD."
      },
      {
        question: "What should you do with the card?",
        options: ["Bin it", "Keep it", "Call", "Mail back"],
        correctAnswer: 0,
        explanation: "Shred it or bin it. Do not respond."
      }
    ]
  },
  {
    id: "12-05",
    title: "Data Harvesting",
    description: "The prize is just bait to steal your identity.",
    questions: [
      {
        question: "A survey promises a free iPhone if you answer 3 questions.",
        options: ["Do it", "Phishing scam to get your data", "Market research", "Quick win"],
        correctAnswer: 1,
        explanation: "If the reward is huge for little effort, you are the product."
      },
      {
        question: "To enter the competition, you must provide your DOB, Address, and Mother's Maiden Name.",
        options: ["Standard", "Excessive - these are security questions for banking", "Detailed", "Thorough"],
        correctAnswer: 1,
        explanation: "Never give information that could be used to reset your passwords."
      },
      {
        question: "You click a link to claim a prize and it asks you to log in with your Facebook/Google account.",
        options: ["Convenient", "Credential harvesting attack", "Safe", "Fast"],
        correctAnswer: 1,
        explanation: "The fake site steals your login credentials to hack your accounts."
      },
      {
        question: "They want a photo of your Driver's License to 'prove you are over 18'.",
        options: ["Send it", "Refuse - high risk of ID theft", "Blur it", "Send passport"],
        correctAnswer: 1,
        explanation: "Your ID is worth money on the dark web. Don't trade it for a fake prize."
      },
      {
        question: "You win a gift card but need to 'verify' your credit card number (no charge).",
        options: ["Safe if $0", "Scam - they will charge you later", "Verify", "Okay"],
        correctAnswer: 1,
        explanation: "Once they have your card number, they will make fraudulent purchases."
      },
      {
        question: "The 'Unsubscribe' link asks for your email address again.",
        options: ["Enter it", "It confirms your email is active for more spam", "Polite", "System"],
        correctAnswer: 1,
        explanation: "Sometimes the unsubscribe page is just another way to verify your email is real."
      },
      {
        question: "A 'Friend' tags you in a post: 'I won! Click here to win too!'.",
        options: ["Click it", "Their account is hacked - verify with friend separately", "Trust friend", "Share"],
        correctAnswer: 1,
        explanation: "Hacked accounts are used to tag friends in scams."
      },
      {
        question: "The website has no Privacy Policy or Terms and Conditions.",
        options: ["Lazy", "Illegal/Scam", "Simple", "Clean"],
        correctAnswer: 1,
        explanation: "Legitimate competitions must have T&Cs."
      },
      {
        question: "They sell your data to other scammers.",
        options: ["True", "False", "Maybe", "Only legitimate companies"],
        correctAnswer: 0,
        explanation: "Once you enter a scam competition, expect a flood of spam calls and emails."
      },
      {
        question: "How do you protect your data?",
        options: ["Give it to everyone", "Limit what you share and check website legitimacy", "Use fake names", "Don't use internet"],
        correctAnswer: 1,
        explanation: "Minimise your digital footprint."
      }
    ]
  }
];