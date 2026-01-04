export default [
  {
    id: "16-01",
    title: "The 'Missed Delivery' SMS",
    description: "The most common scam in Australia.",
    questions: [
      {
        question: "You get a text: 'AusPost: We attempted delivery but no one was home. Reschedule here: [link]'.",
        options: ["Click link", "Check the app or official site independently", "Reply", "Wait"],
        correctAnswer: 1,
        explanation: "This is 'Smishing'. Millions of these are sent daily. Never click the link."
      },
      {
        question: "The link is 'auspost-redirect-service.com'.",
        options: ["Legit", "Scam. Official domain is 'auspost.com.au'.", "Partner", "New"],
        correctAnswer: 1,
        explanation: "Scammers register domains that contain the brand name but are not official."
      },
      {
        question: "The message arrives when you ARE expecting a parcel.",
        options: ["Must be real", "Coincidence. They spam everyone.", "Tracking worked", "Lucky"],
        correctAnswer: 1,
        explanation: "Scammers rely on probability. If they text 1000 people, 500 are waiting for parcels."
      },
      {
        question: "The text comes from a random mobile number (e.g., +61 4...)",
        options: ["Driver's phone", "Scam. AusPost uses a Sender ID.", "Local depot", "Mistake"],
        correctAnswer: 1,
        explanation: "AusPost messages usually appear as 'AusPost', not a random mobile number."
      },
      {
        question: "The landing page asks for your date of birth.",
        options: ["Enter it", "Scam. Delivery doesn't need DOB.", "Verify", "Okay"],
        correctAnswer: 1,
        explanation: "Delivery requires an address, not your personal birth details."
      },
      {
        question: "The text says 'Your parcel is detained at the terminal'.",
        options: ["Scary", "Scam script", "Go to terminal", "Call police"],
        correctAnswer: 1,
        explanation: "Using bureaucratic words like 'detained' makes it sound serious."
      },
      {
        question: "What is the best app to track parcels?",
        options: ["The official AusPost App", "Link in text", "Random website", "Facebook"],
        correctAnswer: 0,
        explanation: "The official app will verify if a notification is real."
      },
      {
        question: "The message is in iMessage and comes from an email address (e.g., hotmail).",
        options: ["Legit", "Scam", "New tech", "Apple feature"],
        correctAnswer: 1,
        explanation: "AusPost does not send iMessages from Hotmail addresses."
      },
      {
        question: "You click the link and it asks you to download an app.",
        options: ["Download", "Malware Risk (FluBot)", "Update", "Install"],
        correctAnswer: 1,
        explanation: "Fake delivery apps are often malware designed to steal your contacts and passwords."
      },
      {
        question: "How do legitimate drivers leave a 'missed' notice?",
        options: ["A card in the letterbox or notification in the official app", "A rude text", "A WhatsApp", "They yell"],
        correctAnswer: 0,
        explanation: "Physical cards or official app notifications are the standard."
      }
    ]
  },
  {
    id: "16-02",
    title: "The 'Redelivery Fee' Trap",
    description: "It's only $2.99, but it will cost you thousands.",
    questions: [
      {
        question: "The website says 'Pay $2.99 to reschedule delivery'.",
        options: ["Pay it", "Scam. AusPost generally holds packages for free (for a time).", "Cheap", "Fair"],
        correctAnswer: 1,
        explanation: "The small fee is a trick to get you to enter your credit card details."
      },
      {
        question: "What happens after you enter your credit card for the $2.99 fee?",
        options: ["Parcel arrives", "Scammers steal the card info and charge thousands", "Receipt sent", "Nothing"],
        correctAnswer: 1,
        explanation: "They don't want the $2.00. They want the card number to buy iPhones/luxury goods."
      },
      {
        question: "They send an OTP (code) to your phone while you are on the payment page.",
        options: ["Enter code", "Read message carefully. It might be for a huge transaction (Apple Pay).", "Ignore", "Delete"],
        correctAnswer: 1,
        explanation: "Scammers trigger a large purchase in the background. If you enter the code, you authorize the theft."
      },
      {
        question: "The site accepts 'Credit Card' but not PayPal.",
        options: ["Normal", "Scam. They want card data, not a secure PayPal transaction.", "Glitch", "Fees"],
        correctAnswer: 1,
        explanation: "Scammers rarely use PayPal because it has buyer protection and hides card numbers."
      },
      {
        question: "After paying, the page freezes or loops.",
        options: ["Refresh", "You've been scammed. Cancel card immediately.", "Wait", "Email"],
        correctAnswer: 1,
        explanation: "Fake sites often don't have a 'success' page. They just take the data."
      },
      {
        question: "The currency is listed as USD or EUR.",
        options: ["Global post", "Scam. AusPost charges in AUD.", "Conversion", "Tech error"],
        correctAnswer: 1,
        explanation: "Sloppy scammers forget to localize the currency symbol."
      },
      {
        question: "It says 'Your address is incomplete, pay $1 to update'.",
        options: ["Update it", "Scam", "Mistake", "Move house"],
        correctAnswer: 1,
        explanation: "This is a variant of the fee scam. Delivery services don't charge to fix a label."
      },
      {
        question: "You see unauthorized transactions on your card days later.",
        options: ["Bank error", "Result of the 'small fee' scam", "Coincidence", "Hack"],
        correctAnswer: 1,
        explanation: "Data stolen via these phishing sites is often sold or used days later."
      },
      {
        question: "The page has the AusPost logo but the font looks wrong.",
        options: ["New branding", "Cloned site", "Browser issue", "Creative"],
        correctAnswer: 1,
        explanation: "Imperfect design is a giveaway of a cloned phishing site."
      },
      {
        question: "Can you get the $2.99 back?",
        options: ["Focus on cancelling the card first", "Yes easily", "No", "Maybe"],
        correctAnswer: 0,
        explanation: "The $2.99 is irrelevant. Saving your bank balance is the priority."
      }
    ]
  },
  {
    id: "16-03",
    title: "Customs & Duty Scams",
    description: "Your 'international package' is held hostage.",
    questions: [
      {
        question: "You receive an email: 'Border Force: Package held. Pay duty of $450'.",
        options: ["Pay", "Verify tracking number independently", "Abandon it", "Call police"],
        correctAnswer: 1,
        explanation: "Scammers pretend to be Border Force/Customs to extort larger amounts."
      },
      {
        question: "You haven't ordered anything from overseas.",
        options: ["Pay anyway", "It's a scam", "Maybe a gift", "Mystery box"],
        correctAnswer: 1,
        explanation: "If you didn't order it, there is no package."
      },
      {
        question: "The email threatens 'Legal Action' or 'Arrest' if duty is not paid.",
        options: ["Scary", "Scam. Customs simply destroys unpaid goods; they don't arrest you.", "Pay", "Hide"],
        correctAnswer: 1,
        explanation: "The threat of arrest is a hallmark of a scam."
      },
      {
        question: "They ask for payment via Bitcoin.",
        options: ["Modern", "Scam. Government does not take crypto.", "Fast", "Secure"],
        correctAnswer: 1,
        explanation: "Border Force does not accept Bitcoin."
      },
      {
        question: "The email comes from 'customs-au@gmail.com'.",
        options: ["Legit", "Scam", "Normal", "Agent"],
        correctAnswer: 1,
        explanation: "Official emails come from '.gov.au' domains."
      },
      {
        question: "The tracking number provided doesn't work on the official carrier site.",
        options: ["System down", "Fake number", "Wait", "Refresh"],
        correctAnswer: 1,
        explanation: "Scammers invent random numbers that don't exist in the real system."
      },
      {
        question: "They include a photo of a random box.",
        options: ["Proof", "Stock photo scam", "My box", "Look inside"],
        correctAnswer: 1,
        explanation: "Generic photos of cardboard boxes prove nothing."
      },
      {
        question: "What is the threshold for customs duty in Australia (generally)?",
        options: ["$10", "$1000 AUD", "$50", "$100"],
        correctAnswer: 1,
        explanation: "Generally, goods under $1000 AUD do not incur heavy import duties (exceptions apply)."
      },
      {
        question: "A 'Diplomatic Courier' contacts you.",
        options: ["VIP", "Romance/Advance Fee Scam", "Cool", "Movie"],
        correctAnswer: 1,
        explanation: "Diplomats do not deliver consumer parcels."
      },
      {
        question: "How do you pay real customs duty?",
        options: ["Western Union", "Official Government Portal / Invoice", "Cash in mail", "Gift card"],
        correctAnswer: 1,
        explanation: "Real duty is paid via secure, official invoicing methods."
      }
    ]
  },
  {
    id: "16-04",
    title: "FluBot & Malware Apps",
    description: "The parcel text that infects your phone.",
    questions: [
      {
        question: "You click the tracking link and it prompts you to 'Install Voicemail App' to hear a message.",
        options: ["Install it", "Malware (FluBot). Do not install.", "Update phone", "Listen"],
        correctAnswer: 1,
        explanation: "This is a trick to get you to sideload malware onto your Android device."
      },
      {
        question: "What does FluBot malware do?",
        options: ["Plays music", "Steals passwords and sends scams to your contacts", "Cleans phone", "Nothing"],
        correctAnswer: 1,
        explanation: "It spreads like a flu, sending messages to everyone in your contact list."
      },
      {
        question: "Your phone warns: 'Installing unknown apps is blocked'. The site tells you how to turn this off.",
        options: ["Follow instructions", "Stop! This security feature is protecting you.", "Unblock", "Hack"],
        correctAnswer: 1,
        explanation: "Scammers provide tutorials on how to bypass your phone's security."
      },
      {
        question: "You receive 50 texts from angry people asking why you sent them scam links.",
        options: ["They are crazy", "You are infected with FluBot", "Mistake", "Prank"],
        correctAnswer: 1,
        explanation: "Your phone is now the 'Patient Zero' spreading the scam."
      },
      {
        question: "Does this affect iPhone (iOS)?",
        options: ["Yes", "Usually Android, but iPhones get phishing pages instead", "No", "Maybe"],
        correctAnswer: 1,
        explanation: "Malware APKs target Android, but iPhone users are redirected to credit card phishing sites."
      },
      {
        question: "How do you remove the malware?",
        options: ["Delete the text", "Factory Reset the phone", "Restart", "Shake it"],
        correctAnswer: 1,
        explanation: "A full factory reset is often the only way to be sure the malware is gone."
      },
      {
        question: "The message says 'You have a voicemail regarding your delivery'.",
        options: ["Click link", "Check voicemail normally (dial 101 etc)", "Ignore", "Reply"],
        correctAnswer: 1,
        explanation: "Delivery drivers don't send links to voicemails."
      },
      {
        question: "Can antivirus software help?",
        options: ["Yes, on mobile", "No", "Waste of money", "PC only"],
        correctAnswer: 0,
        explanation: "Mobile security apps can detect malicious links and apps."
      },
      {
        question: "The app asks for 'Accessibility Permissions'.",
        options: ["Grant them", "Deny. This allows the app to control your screen.", "Okay", "Read"],
        correctAnswer: 1,
        explanation: "This permission allows the bot to tap buttons on your screen for you."
      },
      {
        question: "Who should you report this to?",
        options: ["Scamwatch", "Your Mum", "The postman", "Nobody"],
        correctAnswer: 0,
        explanation: "Report to Scamwatch to help warn others."
      }
    ]
  },
  {
    id: "16-05",
    title: "Marketplace Delivery Scams",
    description: "Selling online? Watch out for the 'Fake Courier'.",
    questions: [
      {
        question: "You are selling a couch. Buyer says: 'I will send a courier to collect it and give you cash'.",
        options: ["Great", "Scam. Couriers do not carry cash for buyers.", "Convenient", "Easy"],
        correctAnswer: 1,
        explanation: "This is the 'PayID/Courier' scam targeting sellers."
      },
      {
        question: "The buyer asks for your email to 'arrange the courier insurance'.",
        options: ["Give it", "Scam. They will send a fake email asking for money.", "Okay", "Standard"],
        correctAnswer: 1,
        explanation: "They need your email to send a fake receipt."
      },
      {
        question: "You get an email: 'Pay $200 insurance for the courier. Buyer will reimburse you'.",
        options: ["Pay it", "Don't pay. You are the SELLER. You shouldn't pay anything.", "Trust buyer", "Advance fee"],
        correctAnswer: 1,
        explanation: "Sellers should never pay upfront fees to receive money."
      },
      {
        question: "They claim to be using 'AusPost Courier Service' for a fridge.",
        options: ["Possible", "AusPost doesn't pick up fridges from houses", "Normal", "Cheap"],
        correctAnswer: 1,
        explanation: "Scammers use big brand names incorrectly."
      },
      {
        question: "The buyer refuses to inspect the item.",
        options: ["They trust me", "Red flag. Real buyers usually want to see the item.", "Busy", "Rich"],
        correctAnswer: 1,
        explanation: "They don't care about the item; they care about the scam."
      },
      {
        question: "They send a link to a 'Courier Portal' to accept payment.",
        options: ["Click it", "Phishing scam", "Log in", "Money"],
        correctAnswer: 1,
        explanation: "The portal steals your banking credentials."
      },
      {
        question: "What is 'Cash on Delivery' (COD) in this context?",
        options: ["Safe", "Usually a lie in online marketplaces", "Standard", "Good"],
        correctAnswer: 1,
        explanation: "While COD exists, scammers misuse the term to confuse sellers."
      },
      {
        question: "The buyer is 'working on an oil rig' and can't come.",
        options: ["Common excuse", "Real", "Interesting", "Sad"],
        correctAnswer: 0,
        explanation: "Oil rigs, military, and overseas doctors are the classic scammer professions."
      },
      {
        question: "They send a screenshot of the payment 'Pending'.",
        options: ["Ship item", "Wait until money is actually in your account", "Trust photo", "Deliver"],
        correctAnswer: 1,
        explanation: "Screenshots are easily faked (Photoshop). Check your app."
      },
      {
        question: "Best way to sell safely?",
        options: ["Cash in hand / Pickup only", "Courier", "Email transfer", "Cheque"],
        correctAnswer: 0,
        explanation: "Meeting in person for cash is the hardest method to scam."
      }
    ]
  }
];