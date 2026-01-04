export default [
  {
    id: "38-01",
    title: "The Signal Drop",
    description: "Why your phone just went into SOS mode.",
    questions: [
      {
        question: "Your phone suddenly loses service and goes to 'SOS only' in a known good area.",
        options: ["Network outage", "Potential SIM Swap attack", "Broken phone", "Battery"],
        correctAnswer: 1,
        explanation: "This is the #1 sign. Your number has been moved to the scammer's SIM card."
      },
      {
        question: "What is SIM Swapping (Porting)?",
        options: ["Changing phone cases", "Moving your phone number to a new SIM card controlled by a thief", "Trading phones", "Bluetooth"],
        correctAnswer: 1,
        explanation: "The thief convinces the Telco they are you, and 'ports' your number to their device."
      },
      {
        question: "Why do they want your phone number?",
        options: ["To call friends", "To intercept 2FA (Two Factor) codes for your bank/crypto", "Free data", "Pranks"],
        correctAnswer: 1,
        explanation: "Your phone number is the key to your bank account's security."
      },
      {
        question: "You receive a text: 'Authorisation to transfer your number. Reply NO if not you'.",
        options: ["Ignore", "Reply NO immediately and call Telco", "Delete", "Wait"],
        correctAnswer: 1,
        explanation: "This is the final warning before the swap happens."
      },
      {
        question: "Does SIM swapping hack your actual phone?",
        options: ["Yes", "No, it steals the NETWORK connection (number), not the device data", "Maybe", "Sort of"],
        correctAnswer: 1,
        explanation: "Your photos are safe, but your incoming SMS codes are gone."
      },
      {
        question: "Can it happen to e-SIMs?",
        options: ["No", "Yes", "Never", "Only physical"],
        correctAnswer: 1,
        explanation: "e-SIMs can also be transferred fraudulently."
      },
      {
        question: "How long does it take them to drain accounts?",
        options: ["Days", "Minutes", "Weeks", "Years"],
        correctAnswer: 1,
        explanation: "Once they have the signal, they reset your bank passwords instantly."
      },
      {
        question: "Do you need physical access to the phone?",
        options: ["Yes", "No, it's done remotely via the Telco", "Maybe", "Sometimes"],
        correctAnswer: 1,
        explanation: "It is a social engineering attack on the phone company."
      },
      {
        question: "Does Wi-Fi still work?",
        options: ["Yes", "No", "Maybe", "Slow"],
        correctAnswer: 0,
        explanation: "Your phone still works on Wi-Fi, which delays you realizing the SIM is dead."
      },
      {
        question: "Who is most at risk?",
        options: ["Everyone", "Crypto holders and high net worth individuals", "Kids", "Seniors"],
        correctAnswer: 1,
        explanation: "Targeted attacks focus on people with crypto."
      }
    ]
  },
  {
    id: "38-02",
    title: "The Telco Trick",
    description: "How they fool the phone company.",
    questions: [
      {
        question: "How do scammers convince the Telco they are you?",
        options: ["Magic", "Using leaked personal data (DOB, Address) to pass ID checks", "Paying them", "Guessing"],
        correctAnswer: 1,
        explanation: "They buy your data from a breach, then call the Telco pretending to be you."
      },
      {
        question: "What is 'Pre-Port Verification'?",
        options: ["A test", "An SMS sent to the OLD sim to confirm the move", "A fee", "A delay"],
        correctAnswer: 1,
        explanation: "New laws require this check, but scammers try to bypass it."
      },
      {
        question: "They claim the phone was 'lost or stolen'.",
        options: ["True", "Classic excuse to get a new SIM issued", "Sad", "Help"],
        correctAnswer: 1,
        explanation: "If the phone is 'lost', the Telco issues a new SIM to the 'owner' (scammer)."
      },
      {
        question: "Inside jobs.",
        options: ["Rare", "Happens. Bribed employees perform swaps.", "Never", "Impossible"],
        correctAnswer: 1,
        explanation: "Sometimes telco retail staff are paid to perform swaps."
      },
      {
        question: "Fake ID in store.",
        options: ["Works", "Yes, they walk into a shop with a fake license", "Fails", "Hard"],
        correctAnswer: 1,
        explanation: "In-store swaps are a common method."
      },
      {
        question: "Porting hours.",
        options: ["9-5", "Scammers prefer Friday nights / Weekends", "Monday", "Day"],
        correctAnswer: 1,
        explanation: "They strike when support centers are closed or slow."
      },
      {
        question: "They spam you with calls before the swap.",
        options: ["Annoying", "Distraction tactic so you turn off your phone", "Accident", "Sales"],
        correctAnswer: 1,
        explanation: "If you turn off your phone, you miss the warning text."
      },
      {
        question: "Does the Telco refund your stolen bank money?",
        options: ["Yes", "Rarely. They deny liability.", "Always", "Maybe"],
        correctAnswer: 1,
        explanation: "They blame the bank; the bank blames the Telco."
      },
      {
        question: "How much data do they need?",
        options: ["A lot", "Name, DOB, Address (Basic info)", "DNA", "Fingerprint"],
        correctAnswer: 1,
        explanation: "Basic ID info is enough for many telcos."
      },
      {
        question: "Can you stop it?",
        options: ["No", "Yes, add extra security PINs", "Maybe", "Hope"],
        correctAnswer: 1,
        explanation: "Extra security layers help."
      }
    ]
  },
  {
    id: "38-03",
    title: "SMS 2FA Vulnerability",
    description: "Why text messages are not secure.",
    questions: [
      {
        question: "Is SMS 2FA safe?",
        options: ["Yes", "It's better than nothing, but vulnerable to SIM Swapping", "Perfect", "100%"],
        correctAnswer: 1,
        explanation: "NIST (Security Standards) recommends moving away from SMS 2FA."
      },
      {
        question: "What is the better alternative to SMS?",
        options: ["Email", "Authenticator Apps (Google/Microsoft Auth) or Hardware Keys (YubiKey)", "Call", "Fax"],
        correctAnswer: 1,
        explanation: "Authenticator apps are tied to the DEVICE, not the phone number."
      },
      {
        question: "Why do banks still use SMS?",
        options: ["Laziness", "Convenience for users (universally available)", "Security", "Cost"],
        correctAnswer: 1,
        explanation: "It balances security with usability for the general public."
      },
      {
        question: "If they get your SIM, do they get your Authenticator App codes?",
        options: ["Yes", "No, those stay on your physical phone", "Maybe", "Sometimes"],
        correctAnswer: 1,
        explanation: "This is why Apps are safer."
      },
      {
        question: "Can hackers read your past texts after a swap?",
        options: ["Yes", "No, only new incoming texts", "Maybe", "All"],
        correctAnswer: 1,
        explanation: "They don't get your history, just the new login codes."
      },
      {
        question: "Email recovery via SMS.",
        options: ["Safe", "Dangerous. They reset email password using the phone number.", "Good", "Easy"],
        correctAnswer: 1,
        explanation: "If they hack your email via SMS, they own everything."
      },
      {
        question: "Voice authentication.",
        options: ["Secure", "AI can now mimic voices, making it risky", "Perfect", "Good"],
        correctAnswer: 1,
        explanation: "Biometrics are becoming vulnerable too."
      },
      {
        question: "What is a YubiKey?",
        options: ["Car key", "Physical hardware security key (USB)", "House key", "Toy"],
        correctAnswer: 1,
        explanation: "The gold standard for security. Un-phishable."
      },
      {
        question: "Does WhatsApp protect you?",
        options: ["Yes", "No, WhatsApp account is tied to the phone number", "Maybe", "Always"],
        correctAnswer: 1,
        explanation: "They can hijack your WhatsApp too."
      },
      {
        question: "Should you remove your phone number from accounts?",
        options: ["If possible", "No", "Never", "Keep it"],
        correctAnswer: 0,
        explanation: "Using App-based 2FA exclusively is safer."
      }
    ]
  },
  {
    id: "38-04",
    title: "Protecting Your Number",
    description: "Locking the door.",
    questions: [
      {
        question: "What is a 'Porting PIN'?",
        options: ["SIM PIN", "A secret code with your Telco required to move your number", "Phone password", "Bank PIN"],
        correctAnswer: 1,
        explanation: "Ask your provider to set up a specific PIN for porting."
      },
      {
        question: "Should you publish your mobile number on social media?",
        options: ["Yes", "No. It helps scammers target you.", "Business only", "Maybe"],
        correctAnswer: 1,
        explanation: "Keep your number private."
      },
      {
        question: "Using a separate 'Banking Phone'.",
        options: ["Paranoid", "High security strategy (Burner number for 2FA)", "Silly", "Expensive"],
        correctAnswer: 1,
        explanation: "Some people use a secret prepaid number just for banking."
      },
      {
        question: "Telstra/Optus allow you to disable porting.",
        options: ["True", "False", "Maybe", "Sometimes"],
        correctAnswer: 0,
        explanation: "You can request extra security measures."
      },
      {
        question: "What to do if your phone goes SOS?",
        options: ["Restart", "Call Telco from another phone IMMEDIATELY", "Wait", "Charge"],
        correctAnswer: 1,
        explanation: "Every second counts."
      },
      {
        question: "Remove SMS 2FA from crypto exchanges.",
        options: ["Bad idea", "Critical step. Use App/Key only.", "Optional", "Later"],
        correctAnswer: 1,
        explanation: "Crypto is the primary target."
      },
      {
        question: "Data breach notifications.",
        options: ["Ignore", "Take seriously. Your ID is out there.", "Delete", "Spam"],
        correctAnswer: 1,
        explanation: "Breaches (Optus/Medibank) fuel SIM swaps."
      },
      {
        question: "Can you sue for SIM swap?",
        options: ["Yes", "Yes, but it's hard to win", "No", "Maybe"],
        correctAnswer: 1,
        explanation: "Legal precedents are still evolving."
      },
      {
        question: "Change your passwords periodically.",
        options: ["Yes", "No", "Waste", "Hard"],
        correctAnswer: 0,
        explanation: "Good hygiene."
      },
      {
        question: "Google Voice as a shield.",
        options: ["Yes", "Using a virtual number for 2FA can protect your real SIM", "No", "Maybe"],
        correctAnswer: 1,
        explanation: "Virtual numbers are harder to swap."
      }
    ]
  },
  {
    id: "38-05",
    title: "Action Plan: You've Been Swapped",
    description: "Emergency response.",
    questions: [
      {
        question: "Priority #1?",
        options: ["Call Mum", "Contact Telco to freeze the number", "Eat", "Sleep"],
        correctAnswer: 1,
        explanation: "Stop the thief using your number."
      },
      {
        question: "Priority #2?",
        options: ["Call Bank", "Check email", "Cry", "Facebook"],
        correctAnswer: 0,
        explanation: "Freeze your accounts before they drain them."
      },
      {
        question: "Priority #3?",
        options: ["Secure Email", "Buy phone", "Walk", "Run"],
        correctAnswer: 0,
        explanation: "If they have your email, they can reset everything else."
      },
      {
        question: "Should you check devices?",
        options: ["Yes", "Check 'Signed in devices' on Google/Apple/Facebook", "No", "Maybe"],
        correctAnswer: 1,
        explanation: "Kick the hacker out of your sessions."
      },
      {
        question: "File a police report.",
        options: ["Useless", "Necessary for insurance/bank claims", "Later", "No"],
        correctAnswer: 1,
        explanation: "Paperwork is essential."
      },
      {
        question: "Alert credit bureaus.",
        options: ["Why?", "To stop them opening loans in your name", "No", "Maybe"],
        correctAnswer: 1,
        explanation: "SIM swap is often part of full ID theft."
      },
      {
        question: "Warn friends.",
        options: ["Embarrassing", "Necessary. Scammers might ask them for money pretending to be you.", "No", "Later"],
        correctAnswer: 1,
        explanation: "Protect your contacts."
      },
      {
        question: "Get a new SIM card.",
        options: ["Yes", "Go into a store with ID to reclaim your number", "Wait", "Change number"],
        correctAnswer: 1,
        explanation: "Reclaim your digital identity."
      },
      {
        question: "Change PINs.",
        options: ["Yes", "Change all PINs and Passwords", "No", "Same"],
        correctAnswer: 0,
        explanation: "Assume everything is compromised."
      },
      {
        question: "Switch to App-based 2FA.",
        options: ["Now", "Later", "Never", "SMS is fine"],
        correctAnswer: 0,
        explanation: "Learn the lesson and upgrade security."
      }
    ]
  }
];