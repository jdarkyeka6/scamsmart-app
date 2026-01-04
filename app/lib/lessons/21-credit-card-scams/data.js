export default [
  {
    id: "21-01",
    title: "Card-Not-Present (CNP) Fraud",
    description: "When they steal your numbers without stealing your card.",
    questions: [
      {
        question: "You see a transaction on your statement you didn't make.",
        options: ["Ignore it", "Call bank immediately to lock card", "Wait a month", "Google it"],
        correctAnswer: 1,
        explanation: "Speed is key. Report unauthorized transactions instantly to limit liability."
      },
      {
        question: "How do scammers get your card details without holding the card?",
        options: ["Magic", "Data breaches, phishing sites, and malware", "Guessing", "Asking nicely"],
        correctAnswer: 1,
        explanation: "Hackers steal databases from online stores or trick you into entering details on fake sites."
      },
      {
        question: "A website asks for your CVV (3 digits on back) to 'verify age' but no purchase is made.",
        options: ["Enter it", "Scam. CVV is only for authorizing payments.", "Safe", "Standard"],
        correctAnswer: 1,
        explanation: "The CVV is the key to spending your money. Never give it unless buying something."
      },
      {
        question: "What is a 'BIN Attack'?",
        options: ["A trash can", "Brute-force software guessing card numbers algorithmically", "A virus", "A physical attack"],
        correctAnswer: 1,
        explanation: "Bots guess thousands of card combinations until one works."
      },
      {
        question: "You get a text 'Did you spend $200 at Apple? Reply Y/N'.",
        options: ["Reply with code", "Check if it's really your bank, then reply", "Ignore", "Panic"],
        correctAnswer: 1,
        explanation: "Banks do use automated texts, but ensure the sender ID is legitimate."
      },
      {
        question: "The small $1.00 charge on your card.",
        options: ["Bank fee", "Card testing. Scammers test with small amounts before draining the account.", "Tax", "Mistake"],
        correctAnswer: 1,
        explanation: "Criminals 'test' if a card is active with tiny charges before the big hit."
      },
      {
        question: "Is it safe to save your card details in every browser?",
        options: ["Yes", "No, it increases risk if your device is compromised", "Always", "Convenient"],
        correctAnswer: 1,
        explanation: "Storing cards everywhere increases your 'attack surface'."
      },
      {
        question: "Does the padlock icon guarantee a site is safe for credit cards?",
        options: ["Yes", "No, it just means encryption. Scammers use encryption too.", "Maybe", "Always"],
        correctAnswer: 1,
        explanation: "Phishing sites can have SSL certificates (padlocks) too."
      },
      {
        question: "What is 'Virtual Card' technology?",
        options: ["Fake money", "A temporary card number that masks your real details", "A game", "Crypto"],
        correctAnswer: 1,
        explanation: "Using disposable virtual cards protects your real account details."
      },
      {
        question: "Who pays for credit card fraud?",
        options: ["You", "Usually the bank (if you protected your PIN/Code)", "The police", "Nobody"],
        correctAnswer: 1,
        explanation: "Banks generally refund fraud unless you were negligent (gave away your PIN)."
      }
    ]
  },
  {
    id: "21-02",
    title: "Skimming & Physical Theft",
    description: "Danger at the ATM and EFTPOS terminal.",
    questions: [
      {
        question: "The ATM card slot feels bulky or loose.",
        options: ["Use it", "Do not insert card. Wiggle it to check for a skimmer.", "Push harder", "Kick it"],
        correctAnswer: 1,
        explanation: "Skimmers are devices placed OVER the real slot to copy your magnetic strip."
      },
      {
        question: "Someone is standing very close behind you at the ATM.",
        options: ["Ignore", "Cover your hand while typing PIN", "Tell them PIN", "Run"],
        correctAnswer: 1,
        explanation: "Shoulder surfing is the easiest way to steal a PIN."
      },
      {
        question: "A shop assistant takes your card away to 'find a signal' for the machine.",
        options: ["Let them", "Never let the card leave your sight", "Trust them", "Wait"],
        correctAnswer: 1,
        explanation: "They can photograph your card in seconds while out of sight."
      },
      {
        question: "What is 'Shimming'?",
        options: ["Dancing", "A paper-thin chip reader inserted INSIDE the card slot", "Cleaning", "Hacking"],
        correctAnswer: 1,
        explanation: "Shimmers are harder to detect than bulky skimmers as they sit inside the slot."
      },
      {
        question: "Your card gets stuck in the ATM.",
        options: ["Leave", "Call the bank immediately from the ATM. Don't leave.", "Ask stranger", "Force it"],
        correctAnswer: 1,
        explanation: "Scammers use 'loops' to trap cards, then retrieve them when you leave."
      },
      {
        question: "Using an ATM in a dark, secluded alley.",
        options: ["Safe", "High risk. Use ATMs in well-lit, busy areas or inside banks.", "Okay", "Private"],
        correctAnswer: 1,
        explanation: "Physical safety and tampering risks are higher in secluded spots."
      },
      {
        question: "A stranger offers to help you when your card is stuck.",
        options: ["Accept help", "Refuse. They likely trapped it.", "Give PIN", "Nice"],
        correctAnswer: 1,
        explanation: "The 'Good Samaritan' scammer traps the card, gets you to type the PIN, then steals the card."
      },
      {
        question: "Why is 'Tap and Go' safer than swiping?",
        options: ["It's faster", "It uses unique tokens, avoiding skimming the magnetic strip", "It's magic", "It's not"],
        correctAnswer: 1,
        explanation: "Contactless (NFC) is much harder to clone than magnetic strips."
      },
      {
        question: "You find a lost credit card on the street.",
        options: ["Use it", "Destroy it or hand to a bank branch", "Keep it", "Sell it"],
        correctAnswer: 1,
        explanation: "Using a found card is a serious crime."
      },
      {
        question: "How often should you check statements?",
        options: ["Yearly", "Weekly or set up transaction alerts", "Never", "Monthly"],
        correctAnswer: 1,
        explanation: "Real-time alerts help you catch fraud instantly."
      }
    ]
  },
  {
    id: "21-03",
    title: "Chargeback Scams (Friendly Fraud)",
    description: "When the customer becomes the thief.",
    questions: [
      {
        question: "You sell an item online. The buyer pays, receives it, then claims 'Unauthorized Transaction'.",
        options: ["Bad luck", "Chargeback Fraud", "Bank error", "Mistake"],
        correctAnswer: 1,
        explanation: "The buyer lies to the bank to get their money back AND keep the item."
      },
      {
        question: "How to prevent chargebacks as a seller?",
        options: ["Cash only", "Use tracking and signature on delivery", "Trust", "Hope"],
        correctAnswer: 1,
        explanation: "Proof of delivery is your best defense against 'Item not received' claims."
      },
      {
        question: "A customer asks you to refund to a DIFFERENT card than the one used to pay.",
        options: ["Do it", "Don't. This is money laundering / refund fraud.", "Helpful", "Okay"],
        correctAnswer: 1,
        explanation: "Always refund to the original payment method."
      },
      {
        question: "The buyer uses a stolen credit card to buy your goods.",
        options: ["You keep the money", "The bank takes the money back (Chargeback) and you lose the item", "Insurance pays", "Safe"],
        correctAnswer: 1,
        explanation: "Merchants/Sellers often bear the cost of credit card fraud."
      },
      {
        question: "What is 'Wardrobing'?",
        options: ["Buying clothes", "Buying, using once, and returning for a full refund", "Selling", "Ironing"],
        correctAnswer: 1,
        explanation: "A form of refund abuse."
      },
      {
        question: "A buyer overpays and asks for the difference via Western Union.",
        options: ["Send it", "Scam. The credit card payment will be reversed later.", "Profit", "Nice"],
        correctAnswer: 1,
        explanation: "The original payment is fake/stolen. Your transfer is real money lost."
      },
      {
        question: "Can you be blacklisted for doing too many chargebacks?",
        options: ["No", "Yes, merchants and banks track serial abusers", "Maybe", "Never"],
        correctAnswer: 1,
        explanation: "Friendly fraud has consequences for your account standing."
      },
      {
        question: "The bank asks for evidence of the sale.",
        options: ["Ignore", "Provide emails, tracking, and photos immediately", "Refuse", "Delay"],
        correctAnswer: 1,
        explanation: "You have a limited time to contest a chargeback."
      },
      {
        question: "Using 'Friends and Family' on PayPal prevents chargebacks.",
        options: ["True", "False, but it removes buyer protection", "Mostly", "Always"],
        correctAnswer: 1,
        explanation: "It removes protection for the BUYER, but hacked account claims can still occur."
      },
      {
        question: "Is Friendly Fraud a crime?",
        options: ["No", "Yes, it is theft/wire fraud", "Just annoying", "Smart"],
        correctAnswer: 1,
        explanation: "Lying to a bank to get money back is illegal."
      }
    ]
  },
  {
    id: "21-04",
    title: "Digital Wallets & Tokenization",
    description: "Apple Pay, Google Pay, and staying safe.",
    questions: [
      {
        question: "You get a text with an Apple Pay verification code you didn't request.",
        options: ["Ignore", "Call bank. Someone is trying to add your card to their phone.", "Share code", "Delete"],
        correctAnswer: 1,
        explanation: "Scammers steal your card details but need that code to activate the digital wallet."
      },
      {
        question: "A scammer calls pretending to be the bank asking for the 'Wallet Code'.",
        options: ["Give it", "NEVER share wallet verification codes.", "Read it", "Text it"],
        correctAnswer: 1,
        explanation: "If they get the code, your card is on their phone and they can tap-to-pay anywhere."
      },
      {
        question: "Is Apple/Google Pay safer than a plastic card?",
        options: ["No", "Yes, because it uses tokenization (merchant never sees real card number)", "Same", "Risky"],
        correctAnswer: 1,
        explanation: "Tokenization means even if the merchant is hacked, your real card number isn't stolen."
      },
      {
        question: "You lose your phone. Can they use your Digital Wallet?",
        options: ["Yes", "No, it requires FaceID/Fingerprint/PIN to pay", "Maybe", "Easily"],
        correctAnswer: 1,
        explanation: "Biometrics add a strong layer of security."
      },
      {
        question: "Should you add your card to a friend's phone?",
        options: ["Yes", "No. Never link your finance to devices you don't control.", "Sometimes", "Okay"],
        correctAnswer: 1,
        explanation: "You lose control of the spending."
      },
      {
        question: "Can you use Apple Pay on a scam website?",
        options: ["No", "Yes, scam sites can accept Apple Pay too", "Impossible", "Safe"],
        correctAnswer: 1,
        explanation: "Payment method doesn't verify the legitimacy of the seller. You can still buy a fake item."
      },
      {
        question: "What is 'Click to Pay'?",
        options: ["A game", "A secure checkout standard (like a digital wallet)", "A virus", "A scam"],
        correctAnswer: 1,
        explanation: "A legitimate industry standard for easy checkout."
      },
      {
        question: "Does deleting the app cancel the card?",
        options: ["Yes", "No, the card is still active at the bank", "Maybe", "Usually"],
        correctAnswer: 1,
        explanation: "You must contact the bank to cancel a compromised card."
      },
      {
        question: "A notification says 'Card Added to Samsung Pay' but you have an iPhone.",
        options: ["Glitch", "Fraud. Someone has your card details.", "Ignore", "Update"],
        correctAnswer: 1,
        explanation: "Immediate red flag. Call bank."
      },
      {
        question: "Can you set spending limits on digital cards?",
        options: ["No", "Yes, via your banking app", "Only ATM", "Never"],
        correctAnswer: 1,
        explanation: "Most modern banking apps allow granular control over spending limits."
      }
    ]
  },
  {
    id: "21-05",
    title: "Reward Point Scams",
    description: "Your points are expiring!",
    questions: [
      {
        question: "Email: 'Your 50,000 Qantas points are expiring. Click here to redeem'.",
        options: ["Click", "Log in to Qantas site independently", "Panic", "Ignore"],
        correctAnswer: 1,
        explanation: "Phishing emails use 'expiring points' to panic you into clicking fake login links."
      },
      {
        question: "The website asks for your credit card to pay 'taxes' on a reward flight.",
        options: ["Pay", "Verify flight details first. Common scam hook.", "Cheap", "Okay"],
        correctAnswer: 1,
        explanation: "They steal your points AND your credit card details."
      },
      {
        question: "You can sell your frequent flyer points for cash.",
        options: ["Yes", "Usually against T&Cs and a common scam target", "Always", "Safe"],
        correctAnswer: 1,
        explanation: "Selling points usually violates terms and attracts fraudsters."
      },
      {
        question: "A text offers 'Bonus Points' if you verify your account.",
        options: ["Verify", "Smishing scam", "Good deal", "Points"],
        correctAnswer: 1,
        explanation: "Banks don't text you asking for login details for points."
      },
      {
        question: "Someone buys items with your points.",
        options: ["Glitch", "Account takeover", "Gift", "Expire"],
        correctAnswer: 1,
        explanation: "Hackers steal points to buy gift cards which are easy to resell."
      },
      {
        question: "How to protect your rewards account?",
        options: ["Weak password", "Strong password + 2FA", "Share it", "Write it down"],
        correctAnswer: 1,
        explanation: "Treat points like cash. Secure the account."
      },
      {
        question: "The offer is '10,000 points for a $1 survey'.",
        options: ["Do it", "Data harvesting scam", "Good return", "Easy"],
        correctAnswer: 1,
        explanation: "They want your credit card number for the $1, then charge $100s."
      },
      {
        question: "Can points be refunded if stolen?",
        options: ["Always", "Depends on the airline/bank policy", "Never", "Instantly"],
        correctAnswer: 1,
        explanation: "It is often harder to recover points than cash."
      },
      {
        question: "The email uses the wrong loyalty program name (e.g., 'Qantas Rewards' vs 'Frequent Flyer').",
        options: ["Rebrand", "Scam indicator", "Fine", "Typo"],
        correctAnswer: 1,
        explanation: "Inaccurate branding is a clue."
      },
      {
        question: "What is 'Loyalty Fraud'?",
        options: ["Cheating", "Stealing points/miles", " lying", "shoplifting"],
        correctAnswer: 1,
        explanation: "The theft of accrued loyalty currency."
      }
    ]
  }
];