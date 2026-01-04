export default {
  "id": 16,
  "title": "Delivery/Parcel Scams",
  "emoji": "📦",
  "description": "The most common scam in Australia.",
  "introduction": "Learn to recognize and protect yourself from Delivery/Parcel Scams.",
  "warning_signs": [],
  "what_to_do": [],
  "how_it_works": "",
  "questions": [
    {
      "type": 1,
      "prompt": "You get a text: 'AusPost: We attempted delivery but no one was home. Reschedule here: [link]'.",
      "options": [
        "Click link",
        "Check the app or official site independently",
        "Reply",
        "Wait"
      ],
      "correct": 1,
      "explanation": "This is 'Smishing'. Millions of these are sent daily. Never click the link."
    },
    {
      "type": 1,
      "prompt": "The link is 'auspost-redirect-service.com'.",
      "options": [
        "Legit",
        "Scam. Official domain is 'auspost.com.au'.",
        "Partner",
        "New"
      ],
      "correct": 1,
      "explanation": "Scammers register domains that contain the brand name but are not official."
    },
    {
      "type": 1,
      "prompt": "The message arrives when you ARE expecting a parcel.",
      "options": [
        "Must be real",
        "Coincidence. They spam everyone.",
        "Tracking worked",
        "Lucky"
      ],
      "correct": 1,
      "explanation": "Scammers rely on probability. If they text 1000 people, 500 are waiting for parcels."
    },
    {
      "type": 1,
      "prompt": "The text comes from a random mobile number (e.g., +61 4...)",
      "options": [
        "Driver's phone",
        "Scam. AusPost uses a Sender ID.",
        "Local depot",
        "Mistake"
      ],
      "correct": 1,
      "explanation": "AusPost messages usually appear as 'AusPost', not a random mobile number."
    },
    {
      "type": 1,
      "prompt": "The landing page asks for your date of birth.",
      "options": [
        "Enter it",
        "Scam. Delivery doesn't need DOB.",
        "Verify",
        "Okay"
      ],
      "correct": 1,
      "explanation": "Delivery requires an address, not your personal birth details."
    },
    {
      "type": 1,
      "prompt": "The text says 'Your parcel is detained at the terminal'.",
      "options": [
        "Scary",
        "Scam script",
        "Go to terminal",
        "Call police"
      ],
      "correct": 1,
      "explanation": "Using bureaucratic words like 'detained' makes it sound serious."
    },
    {
      "type": 1,
      "prompt": "What is the best app to track parcels?",
      "options": [
        "The official AusPost App",
        "Link in text",
        "Random website",
        "Facebook"
      ],
      "correct": 0,
      "explanation": "The official app will verify if a notification is real."
    },
    {
      "type": 1,
      "prompt": "The message is in iMessage and comes from an email address (e.g., hotmail).",
      "options": [
        "Legit",
        "Scam",
        "New tech",
        "Apple feature"
      ],
      "correct": 1,
      "explanation": "AusPost does not send iMessages from Hotmail addresses."
    },
    {
      "type": 1,
      "prompt": "You click the link and it asks you to download an app.",
      "options": [
        "Download",
        "Malware Risk (FluBot)",
        "Update",
        "Install"
      ],
      "correct": 1,
      "explanation": "Fake delivery apps are often malware designed to steal your contacts and passwords."
    },
    {
      "type": 1,
      "prompt": "How do legitimate drivers leave a 'missed' notice?",
      "options": [
        "A card in the letterbox or notification in the official app",
        "A rude text",
        "A WhatsApp",
        "They yell"
      ],
      "correct": 0,
      "explanation": "Physical cards or official app notifications are the standard."
    },
    {
      "type": 2,
      "prompt": "The website says 'Pay $2.99 to reschedule delivery'.",
      "options": [
        "Pay it",
        "Scam. AusPost generally holds packages for free (for a time).",
        "Cheap",
        "Fair"
      ],
      "correct": 1,
      "explanation": "The small fee is a trick to get you to enter your credit card details."
    },
    {
      "type": 2,
      "prompt": "What happens after you enter your credit card for the $2.99 fee?",
      "options": [
        "Parcel arrives",
        "Scammers steal the card info and charge thousands",
        "Receipt sent",
        "Nothing"
      ],
      "correct": 1,
      "explanation": "They don't want the $2.00. They want the card number to buy iPhones/luxury goods."
    },
    {
      "type": 2,
      "prompt": "They send an OTP (code) to your phone while you are on the payment page.",
      "options": [
        "Enter code",
        "Read message carefully. It might be for a huge transaction (Apple Pay).",
        "Ignore",
        "Delete"
      ],
      "correct": 1,
      "explanation": "Scammers trigger a large purchase in the background. If you enter the code, you authorize the theft."
    },
    {
      "type": 2,
      "prompt": "The site accepts 'Credit Card' but not PayPal.",
      "options": [
        "Normal",
        "Scam. They want card data, not a secure PayPal transaction.",
        "Glitch",
        "Fees"
      ],
      "correct": 1,
      "explanation": "Scammers rarely use PayPal because it has buyer protection and hides card numbers."
    },
    {
      "type": 2,
      "prompt": "After paying, the page freezes or loops.",
      "options": [
        "Refresh",
        "You've been scammed. Cancel card immediately.",
        "Wait",
        "Email"
      ],
      "correct": 1,
      "explanation": "Fake sites often don't have a 'success' page. They just take the data."
    },
    {
      "type": 2,
      "prompt": "The currency is listed as USD or EUR.",
      "options": [
        "Global post",
        "Scam. AusPost charges in AUD.",
        "Conversion",
        "Tech error"
      ],
      "correct": 1,
      "explanation": "Sloppy scammers forget to localize the currency symbol."
    },
    {
      "type": 2,
      "prompt": "It says 'Your address is incomplete, pay $1 to update'.",
      "options": [
        "Update it",
        "Scam",
        "Mistake",
        "Move house"
      ],
      "correct": 1,
      "explanation": "This is a variant of the fee scam. Delivery services don't charge to fix a label."
    },
    {
      "type": 2,
      "prompt": "You see unauthorized transactions on your card days later.",
      "options": [
        "Bank error",
        "Result of the 'small fee' scam",
        "Coincidence",
        "Hack"
      ],
      "correct": 1,
      "explanation": "Data stolen via these phishing sites is often sold or used days later."
    },
    {
      "type": 2,
      "prompt": "The page has the AusPost logo but the font looks wrong.",
      "options": [
        "New branding",
        "Cloned site",
        "Browser issue",
        "Creative"
      ],
      "correct": 1,
      "explanation": "Imperfect design is a giveaway of a cloned phishing site."
    },
    {
      "type": 2,
      "prompt": "Can you get the $2.99 back?",
      "options": [
        "Focus on cancelling the card first",
        "Yes easily",
        "No",
        "Maybe"
      ],
      "correct": 0,
      "explanation": "The $2.99 is irrelevant. Saving your bank balance is the priority."
    },
    {
      "type": 3,
      "prompt": "You receive an email: 'Border Force: Package held. Pay duty of $450'.",
      "options": [
        "Pay",
        "Verify tracking number independently",
        "Abandon it",
        "Call police"
      ],
      "correct": 1,
      "explanation": "Scammers pretend to be Border Force/Customs to extort larger amounts."
    },
    {
      "type": 3,
      "prompt": "You haven't ordered anything from overseas.",
      "options": [
        "Pay anyway",
        "It's a scam",
        "Maybe a gift",
        "Mystery box"
      ],
      "correct": 1,
      "explanation": "If you didn't order it, there is no package."
    },
    {
      "type": 3,
      "prompt": "The email threatens 'Legal Action' or 'Arrest' if duty is not paid.",
      "options": [
        "Scary",
        "Scam. Customs simply destroys unpaid goods; they don't arrest you.",
        "Pay",
        "Hide"
      ],
      "correct": 1,
      "explanation": "The threat of arrest is a hallmark of a scam."
    },
    {
      "type": 3,
      "prompt": "They ask for payment via Bitcoin.",
      "options": [
        "Modern",
        "Scam. Government does not take crypto.",
        "Fast",
        "Secure"
      ],
      "correct": 1,
      "explanation": "Border Force does not accept Bitcoin."
    },
    {
      "type": 3,
      "prompt": "The email comes from 'customs-au@gmail.com'.",
      "options": [
        "Legit",
        "Scam",
        "Normal",
        "Agent"
      ],
      "correct": 1,
      "explanation": "Official emails come from '.gov.au' domains."
    },
    {
      "type": 3,
      "prompt": "The tracking number provided doesn't work on the official carrier site.",
      "options": [
        "System down",
        "Fake number",
        "Wait",
        "Refresh"
      ],
      "correct": 1,
      "explanation": "Scammers invent random numbers that don't exist in the real system."
    },
    {
      "type": 3,
      "prompt": "They include a photo of a random box.",
      "options": [
        "Proof",
        "Stock photo scam",
        "My box",
        "Look inside"
      ],
      "correct": 1,
      "explanation": "Generic photos of cardboard boxes prove nothing."
    },
    {
      "type": 3,
      "prompt": "What is the threshold for customs duty in Australia (generally)?",
      "options": [
        "$10",
        "$1000 AUD",
        "$50",
        "$100"
      ],
      "correct": 1,
      "explanation": "Generally, goods under $1000 AUD do not incur heavy import duties (exceptions apply)."
    },
    {
      "type": 3,
      "prompt": "A 'Diplomatic Courier' contacts you.",
      "options": [
        "VIP",
        "Romance/Advance Fee Scam",
        "Cool",
        "Movie"
      ],
      "correct": 1,
      "explanation": "Diplomats do not deliver consumer parcels."
    },
    {
      "type": 3,
      "prompt": "How do you pay real customs duty?",
      "options": [
        "Western Union",
        "Official Government Portal / Invoice",
        "Cash in mail",
        "Gift card"
      ],
      "correct": 1,
      "explanation": "Real duty is paid via secure, official invoicing methods."
    },
    {
      "type": 4,
      "prompt": "You click the tracking link and it prompts you to 'Install Voicemail App' to hear a message.",
      "options": [
        "Install it",
        "Malware (FluBot). Do not install.",
        "Update phone",
        "Listen"
      ],
      "correct": 1,
      "explanation": "This is a trick to get you to sideload malware onto your Android device."
    },
    {
      "type": 4,
      "prompt": "What does FluBot malware do?",
      "options": [
        "Plays music",
        "Steals passwords and sends scams to your contacts",
        "Cleans phone",
        "Nothing"
      ],
      "correct": 1,
      "explanation": "It spreads like a flu, sending messages to everyone in your contact list."
    },
    {
      "type": 4,
      "prompt": "Your phone warns: 'Installing unknown apps is blocked'. The site tells you how to turn this off.",
      "options": [
        "Follow instructions",
        "Stop! This security feature is protecting you.",
        "Unblock",
        "Hack"
      ],
      "correct": 1,
      "explanation": "Scammers provide tutorials on how to bypass your phone's security."
    },
    {
      "type": 4,
      "prompt": "You receive 50 texts from angry people asking why you sent them scam links.",
      "options": [
        "They are crazy",
        "You are infected with FluBot",
        "Mistake",
        "Prank"
      ],
      "correct": 1,
      "explanation": "Your phone is now the 'Patient Zero' spreading the scam."
    },
    {
      "type": 4,
      "prompt": "Does this affect iPhone (iOS)?",
      "options": [
        "Yes",
        "Usually Android, but iPhones get phishing pages instead",
        "No",
        "Maybe"
      ],
      "correct": 1,
      "explanation": "Malware APKs target Android, but iPhone users are redirected to credit card phishing sites."
    },
    {
      "type": 4,
      "prompt": "How do you remove the malware?",
      "options": [
        "Delete the text",
        "Factory Reset the phone",
        "Restart",
        "Shake it"
      ],
      "correct": 1,
      "explanation": "A full factory reset is often the only way to be sure the malware is gone."
    },
    {
      "type": 4,
      "prompt": "The message says 'You have a voicemail regarding your delivery'.",
      "options": [
        "Click link",
        "Check voicemail normally (dial 101 etc)",
        "Ignore",
        "Reply"
      ],
      "correct": 1,
      "explanation": "Delivery drivers don't send links to voicemails."
    },
    {
      "type": 4,
      "prompt": "Can antivirus software help?",
      "options": [
        "Yes, on mobile",
        "No",
        "Waste of money",
        "PC only"
      ],
      "correct": 0,
      "explanation": "Mobile security apps can detect malicious links and apps."
    },
    {
      "type": 4,
      "prompt": "The app asks for 'Accessibility Permissions'.",
      "options": [
        "Grant them",
        "Deny. This allows the app to control your screen.",
        "Okay",
        "Read"
      ],
      "correct": 1,
      "explanation": "This permission allows the bot to tap buttons on your screen for you."
    },
    {
      "type": 4,
      "prompt": "Who should you report this to?",
      "options": [
        "Scamwatch",
        "Your Mum",
        "The postman",
        "Nobody"
      ],
      "correct": 0,
      "explanation": "Report to Scamwatch to help warn others."
    },
    {
      "type": 5,
      "prompt": "You are selling a couch. Buyer says: 'I will send a courier to collect it and give you cash'.",
      "options": [
        "Great",
        "Scam. Couriers do not carry cash for buyers.",
        "Convenient",
        "Easy"
      ],
      "correct": 1,
      "explanation": "This is the 'PayID/Courier' scam targeting sellers."
    },
    {
      "type": 5,
      "prompt": "The buyer asks for your email to 'arrange the courier insurance'.",
      "options": [
        "Give it",
        "Scam. They will send a fake email asking for money.",
        "Okay",
        "Standard"
      ],
      "correct": 1,
      "explanation": "They need your email to send a fake receipt."
    },
    {
      "type": 5,
      "prompt": "You get an email: 'Pay $200 insurance for the courier. Buyer will reimburse you'.",
      "options": [
        "Pay it",
        "Don't pay. You are the SELLER. You shouldn't pay anything.",
        "Trust buyer",
        "Advance fee"
      ],
      "correct": 1,
      "explanation": "Sellers should never pay upfront fees to receive money."
    },
    {
      "type": 5,
      "prompt": "They claim to be using 'AusPost Courier Service' for a fridge.",
      "options": [
        "Possible",
        "AusPost doesn't pick up fridges from houses",
        "Normal",
        "Cheap"
      ],
      "correct": 1,
      "explanation": "Scammers use big brand names incorrectly."
    },
    {
      "type": 5,
      "prompt": "The buyer refuses to inspect the item.",
      "options": [
        "They trust me",
        "Red flag. Real buyers usually want to see the item.",
        "Busy",
        "Rich"
      ],
      "correct": 1,
      "explanation": "They don't care about the item; they care about the scam."
    },
    {
      "type": 5,
      "prompt": "They send a link to a 'Courier Portal' to accept payment.",
      "options": [
        "Click it",
        "Phishing scam",
        "Log in",
        "Money"
      ],
      "correct": 1,
      "explanation": "The portal steals your banking credentials."
    },
    {
      "type": 5,
      "prompt": "What is 'Cash on Delivery' (COD) in this context?",
      "options": [
        "Safe",
        "Usually a lie in online marketplaces",
        "Standard",
        "Good"
      ],
      "correct": 1,
      "explanation": "While COD exists, scammers misuse the term to confuse sellers."
    },
    {
      "type": 5,
      "prompt": "The buyer is 'working on an oil rig' and can't come.",
      "options": [
        "Common excuse",
        "Real",
        "Interesting",
        "Sad"
      ],
      "correct": 0,
      "explanation": "Oil rigs, military, and overseas doctors are the classic scammer professions."
    },
    {
      "type": 5,
      "prompt": "They send a screenshot of the payment 'Pending'.",
      "options": [
        "Ship item",
        "Wait until money is actually in your account",
        "Trust photo",
        "Deliver"
      ],
      "correct": 1,
      "explanation": "Screenshots are easily faked (Photoshop). Check your app."
    },
    {
      "type": 5,
      "prompt": "Best way to sell safely?",
      "options": [
        "Cash in hand / Pickup only",
        "Courier",
        "Email transfer",
        "Cheque"
      ],
      "correct": 0,
      "explanation": "Meeting in person for cash is the hardest method to scam."
    }
  ]
};