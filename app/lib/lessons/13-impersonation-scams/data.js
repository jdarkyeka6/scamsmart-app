export default [
  {
    id: "13-01",
    title: "The 'Hi Mum' Scam",
    description: "When a text from your 'child' is actually a criminal.",
    questions: [
      {
        question: "You receive a text: 'Hi Mum, I lost my phone. This is my new number.' What is this?",
        options: ["Your child has bad luck", "The 'Hi Mum' family impersonation scam", "A wrong number", "Network update"],
        correctAnswer: 1,
        explanation: "This is a widespread scam. Criminals cast a wide net hoping to hit a parent."
      },
      {
        question: "The message continues: 'I can't access my banking app on this new phone and I have a bill to pay.'",
        options: ["Send money immediately", "Wait for them to call", "This is the classic scam hook (urgency + money)", "Pay the bill"],
        correctAnswer: 2,
        explanation: "The scam always pivots to a financial emergency that only you can solve right now."
      },
      {
        question: "They refuse to call you because 'the microphone on the new phone is broken'.",
        options: ["Likely story", "Huge Red Flag - they don't want you to hear their voice", "Tech issues happen", "Texting is easier"],
        correctAnswer: 1,
        explanation: "Scammers will do anything to avoid a voice conversation which would reveal they aren't your child."
      },
      {
        question: "What is the best way to verify this text?",
        options: ["Reply asking 'Is that you?'", "Call the OLD number you have saved for your child", "Transfer $1 to test", "Ask for a photo"],
        correctAnswer: 1,
        explanation: "Call the original number. If your child answers, the text is a scam. If it rings out, try another family member."
      },
      {
        question: "The scammer asks you to pay via Osko/PayID to a random name.",
        options: ["Pay it", "Ask who the account belongs to", "Don't pay. Mismatched names are a warning.", "Trust them"],
        correctAnswer: 2,
        explanation: "They will claim it's a 'friend's account' because they can't access theirs. Don't believe it."
      },
      {
        question: "You ask a personal question: 'What is the dog's name?'. They delay answering.",
        options: ["They forgot", "They are Googling/Looking up your Facebook to find the answer", "Busy", "Stressed"],
        correctAnswer: 1,
        explanation: "Scammers research targets on social media. If they can't answer instantly, it's a scam."
      },
      {
        question: "They address you as 'Mum' or 'Dad' but you don't have children.",
        options: ["Mistake", "Automated scam bot", "Adoption", "Prank"],
        correctAnswer: 1,
        explanation: "These messages are sent to thousands of random numbers at once."
      },
      {
        question: "Why do they use WhatsApp often for this scam?",
        options: ["It's encrypted", "It's free", "It allows international numbers to look local", "All of the above"],
        correctAnswer: 3,
        explanation: "WhatsApp is a preferred tool for international scammers targeting Australians."
      },
      {
        question: "If you paid the money, can you get it back?",
        options: ["Yes, easily", "Very difficult. Contact your bank immediately.", "No chance", "Bank covers it"],
        correctAnswer: 1,
        explanation: "Speed is key. Contact your bank to attempt a recall, but success is not guaranteed."
      },
      {
        question: "They send a photo of a broken phone as proof.",
        options: ["It's real", "It's a stock image from Google", "Accidents happen", "Poor phone"],
        correctAnswer: 1,
        explanation: "Scammers have a library of 'broken phone' photos to make their lies convincing."
      }
    ]
  },
  {
    id: "13-02",
    title: "Bank Impersonation",
    description: "The 'Fraud Team' is calling... or are they?",
    questions: [
      {
        question: "You get a call from 'Your Bank'. The number on the screen matches the bank's real number.",
        options: ["It is definitely the bank", "Numbers can be 'spoofed' (faked). It is not a guarantee.", "Safe to answer", "Banks don't call"],
        correctAnswer: 1,
        explanation: "Caller ID Spoofing allows scammers to mimic official numbers. Never trust caller ID alone."
      },
      {
        question: "The caller says your account is compromised and you must move money to a 'Safe Account'.",
        options: ["Do it fast", "Hang up. Banks NEVER have 'safe accounts' for you to transfer to.", "Ask for account number", "Panic"],
        correctAnswer: 1,
        explanation: "This is the #1 bank scam. Banks freeze accounts; they never ask you to move funds."
      },
      {
        question: "They ask you to read out the 6-digit code sent to your phone to 'verify your identity'.",
        options: ["Read it out", "Never share OTP codes. They are resetting your password.", "Read it backwards", "Say yes"],
        correctAnswer: 1,
        explanation: "That code is likely a Two-Factor Authentication code allowing them to hack your account."
      },
      {
        question: "The caller is very polite and professional.",
        options: ["Must be real", "Scammers are trained to be professional", "Banks are rude", "Friends"],
        correctAnswer: 1,
        explanation: "Tone means nothing. Scammers operate in call centers with scripts."
      },
      {
        question: "They ask for your PIN number.",
        options: ["Give it", "NEVER give your PIN to anyone, even the bank", "Only the first 2 digits", "Type it in"],
        correctAnswer: 1,
        explanation: "No bank employee will ever ask for your card PIN."
      },
      {
        question: "You receive an SMS: 'Unusual activity on your card. Click link to cancel transaction'.",
        options: ["Click link", "Log in via the official app/website instead", "Reply STOP", "Call number in text"],
        correctAnswer: 1,
        explanation: "Don't click links in SMS. Go to the official app or website independently."
      },
      {
        question: "They threaten that if you hang up, your money will be stolen.",
        options: ["Stay on line", "Hang up and call the bank on a known number", "Believe them", "Cry"],
        correctAnswer: 1,
        explanation: "They want to keep you on the line so you can't verify their story."
      },
      {
        question: "They already know your name and last 4 digits of your card.",
        options: ["Real bank", "Data breach leak", "Lucky guess", "Magic"],
        correctAnswer: 1,
        explanation: "They may have bought your basic info from a data breach to make the call sound convincing."
      },
      {
        question: "They ask you to download 'AnyDesk' or 'TeamViewer' to help secure your account.",
        options: ["Helpful", "Scam - Remote Access Tool", "Tech support", "Standard"],
        correctAnswer: 1,
        explanation: "Never install remote access software for a bank caller. They will drain your accounts."
      },
      {
        question: "What is the safest way to verify a call?",
        options: ["Ask for their name", "Hang up. Find the number on the back of your card. Call that.", "Ask them to email", "Google the number"],
        correctAnswer: 1,
        explanation: "Initiate the call yourself using a trusted source."
      }
    ]
  },
  {
    id: "13-03",
    title: "Authority & Police Scams",
    description: "Fake police, fake warrants, and fake threats.",
    questions: [
      {
        question: "A caller claims to be from the AFP (Federal Police). They say your tax file number is linked to money laundering.",
        options: ["Scary, listen to them", "Scam - Common intimidation tactic", "Confess", "Drive to station"],
        correctAnswer: 1,
        explanation: "The AFP does not call individuals to discuss TFNs or money laundering over the phone."
      },
      {
        question: "They threaten immediate arrest unless you pay a fine.",
        options: ["Pay fine", "Police do not demand money over the phone to cancel arrest warrants", "Hide", "Argue"],
        correctAnswer: 1,
        explanation: "In Australia, you cannot pay your way out of an arrest warrant over the phone."
      },
      {
        question: "They demand payment in Bitcoin or Gift Cards to 'avoid the paper trail'.",
        options: ["Makes sense", "Scam - Government never accepts crypto/gift cards", "Clever", "Modern"],
        correctAnswer: 1,
        explanation: "No legitimate authority accepts payment in gift cards."
      },
      {
        question: "The caller speaks with a robotic voice.",
        options: ["Officer Robot", "Robocall scam", "Bad connection", "Typing"],
        correctAnswer: 1,
        explanation: "Automatic robocalls claiming to be police are always scams."
      },
      {
        question: "They say: 'Press 1 to speak to an investigator'.",
        options: ["Press 1", "Hang up", "Press 2", "Wait"],
        correctAnswer: 1,
        explanation: "This connects you to the scammer's call center."
      },
      {
        question: "They address you by your full name and address.",
        options: ["They are real police", "Publicly available info / Data leak", "They are watching", "Psychic"],
        correctAnswer: 1,
        explanation: "Having your address does not prove they are police."
      },
      {
        question: "They tell you NOT to tell anyone, even your family, because it's a 'covert operation'.",
        options: ["Exciting", "Isolation tactic", "Secret agent", "True"],
        correctAnswer: 1,
        explanation: "They isolate you so no one can tell you it's a lie."
      },
      {
        question: "You receive an email from 'police-warrants@gmail.com'.",
        options: ["Official", "Scam - Police use .gov.au or .police.uk etc", "Undercover", "Budget"],
        correctAnswer: 1,
        explanation: "Police do not use Gmail."
      },
      {
        question: "A 'detective' calls claiming they found a car rented in your name full of drugs.",
        options: ["Panic", "Scam script", "It was me", "Lawyer up"],
        correctAnswer: 1,
        explanation: "This is a very common script designed to induce panic."
      },
      {
        question: "If you are unsure, what should you do?",
        options: ["Pay just in case", "Call your local police station on the non-emergency line", "Run", "Cry"],
        correctAnswer: 1,
        explanation: "Verify with the real police independently."
      }
    ]
  },
  {
    id: "13-04",
    title: "Business Email Compromise (BEC)",
    description: "When the 'Boss' emails you for a favor.",
    questions: [
      {
        question: "You get an email from your CEO: 'Are you at your desk? I need a quick favor.'",
        options: ["Reply immediately", "Check the sender email address carefully", "Ignore boss", "Go to their office"],
        correctAnswer: 1,
        explanation: "Scammers spoof display names. Hover over the address to see if it's really them."
      },
      {
        question: "The CEO asks you to buy Apple Gift Cards for a 'client gift' and email the codes.",
        options: ["Do it", "Scam - CEO Fraud", "Ask for budget", "Buy flowers instead"],
        correctAnswer: 1,
        explanation: "Executives do not ask employees to buy gift cards for clients via email."
      },
      {
        question: "The email address is 'ceo-name-company@gmail.com' instead of '@company.com'.",
        options: ["They are working from home", "Scam - Lookalike domain", "Personal email", "Okay"],
        correctAnswer: 1,
        explanation: "Always valid the domain name exactly."
      },
      {
        question: "A supplier emails saying they have changed their bank account details. Please pay the invoice to the new account.",
        options: ["Update details and pay", "Call the supplier on a known number to verify", "Reply to email", "Ignore"],
        correctAnswer: 1,
        explanation: "This is 'Invoice Fraud'. Hackers compromise supplier emails to divert payments."
      },
      {
        question: "The email stresses urgency: 'I am in a meeting, can't talk, handle this NOW'.",
        options: ["Hurry", "Red flag - attempting to bypass verification", "Boss is stressed", "Normal"],
        correctAnswer: 1,
        explanation: "They don't want you to call them to check."
      },
      {
        question: "The writing style doesn't match your boss (e.g., wrong greeting, spelling errors).",
        options: ["They are tired", "Indication of impersonation", "New keyboard", "Auto-correct"],
        correctAnswer: 1,
        explanation: "Trust your gut if the tone feels off."
      },
      {
        question: "The request involves transferring a large sum of money internationally.",
        options: ["Do it", "Follow strict internal payment verification procedures", "Ask coworker", "Guess"],
        correctAnswer: 1,
        explanation: "Always use secondary verification (voice/phone) for large transfers."
      },
      {
        question: "You receive the email on your personal phone.",
        options: ["Reply", "Wait until you can check headers on a computer", "Forward to IT", "Delete"],
        correctAnswer: 1,
        explanation: "Mobile email apps often hide the full sender address, making spoofing easier to miss."
      },
      {
        question: "What is 'Whaling'?",
        options: ["Fishing", "Targeting high-level executives (Big Fish) for scams", "A sport", "Spamming"],
        correctAnswer: 1,
        explanation: "Whaling is phishing targeted at C-level execs."
      },
      {
        question: "How to prevent Invoice Fraud?",
        options: ["Pay quickly", "Two-step verification for all bank detail changes", "Trust email", "Auto-pay"],
        correctAnswer: 1,
        explanation: "Never change bank details based on an email alone."
      }
    ]
  },
  {
    id: "13-05",
    title: "Deepfakes & AI Cloning",
    description: "The future of impersonation: Voice and Video.",
    questions: [
      {
        question: "What is a 'Deepfake'?",
        options: ["A deep hole", "AI-generated video/audio that mimics a real person", "A fake website", "A virus"],
        correctAnswer: 1,
        explanation: "Artificial Intelligence can now create convincing replicas of faces and voices."
      },
      {
        question: "You get a voice message from a friend asking for money. It sounds like them, but slightly robotic.",
        options: ["Send money", "Call them back live to verify", "It's them", "Ignore"],
        correctAnswer: 1,
        explanation: "AI voice clones can be made from 3 seconds of audio. Verify live."
      },
      {
        question: "A video call from a celebrity invites you to invest in a crypto scheme.",
        options: ["Invest", "Deepfake scam", "Lucky", "Exclusive"],
        correctAnswer: 1,
        explanation: "Deepfakes of Elon Musk and others are used to steal crypto."
      },
      {
        question: "How can you spot a video deepfake?",
        options: ["Unnatural blinking or lip syncing", "Perfect quality", "It's in HD", "You can't"],
        correctAnswer: 0,
        explanation: "Glitches around the mouth/eyes or lack of blinking can betray a deepfake."
      },
      {
        question: "The caller claims to be your grandchild but the line is 'bad'.",
        options: ["Believe them", "AI voice masking", "Bad reception", "Hang up"],
        correctAnswer: 1,
        explanation: "Scammers add static/noise to hide imperfections in the voice clone."
      },
      {
        question: "To protect your family, you should have a 'Safe Word'.",
        options: ["Paranoid", "Smart security measure", "For kids only", "Game"],
        correctAnswer: 1,
        explanation: "A secret code word that only your family knows can verify identity instantly."
      },
      {
        question: "Can AI clone a voice from a TikTok video?",
        options: ["No", "Yes, public audio is training data for AI", "Only if high quality", "Maybe"],
        correctAnswer: 1,
        explanation: "Public social media posts provide the audio data scammers need to clone voices."
      },
      {
        question: "You receive a video message that asks for a password.",
        options: ["Give it", "Never give passwords", "Verify sender", "Check metadata"],
        correctAnswer: 1,
        explanation: "Even if it looks like your boss, never share credentials."
      },
      {
        question: "The video background looks blurry or warped.",
        options: ["Artistic", "Artifact of real-time deepfake rendering", "Bad camera", "Filter"],
        correctAnswer: 1,
        explanation: "Deepfake software sometimes struggles with backgrounds."
      },
      {
        question: "Are deepfakes illegal?",
        options: ["Yes, always", "Laws are catching up, but using them for fraud is illegal", "No", "Only in movies"],
        correctAnswer: 1,
        explanation: "Using deepfakes for fraud is a crime, but the tech itself is accessible."
      }
    ]
  }
];