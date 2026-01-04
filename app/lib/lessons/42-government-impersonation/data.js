export default {
  "id": 42,
  "title": "Government Impersonation",
  "emoji": "🏛️",
  "description": "Officer John Smith needs your help.",
  "introduction": "Learn to recognize and protect yourself from Government Impersonation.",
  "warning_signs": [],
  "what_to_do": [],
  "how_it_works": "",
  "questions": [
    {
      "type": 1,
      "prompt": "Caller: 'This is the Federal Police. Your ID was found at a crime scene'.",
      "options": [
        "Panic",
        "Scam. Police don't call to warn you about crime scenes.",
        "Confess",
        "Run"
      ],
      "correct": 1,
      "explanation": "This is the 'Authority Scam'. They want you to panic and follow orders."
    },
    {
      "type": 1,
      "prompt": "They say: 'Transfer your money to a secure police account for protection'.",
      "options": [
        "Transfer",
        "Scam. Police NEVER hold money for the public.",
        "Okay",
        "Safe"
      ],
      "correct": 1,
      "explanation": "Police accounts do not exist for protecting civilian funds."
    },
    {
      "type": 1,
      "prompt": "They threaten to come and arrest you immediately.",
      "options": [
        "Wait",
        "Intimidation tactic. Arrests happen, they aren't announced.",
        "Hide",
        "Cry"
      ],
      "correct": 1,
      "explanation": "Warning you gives you time to flee. Real police just show up."
    },
    {
      "type": 1,
      "prompt": "They ask you to help catch a 'corrupt bank teller' by withdrawing cash.",
      "options": [
        "Help",
        "Scam. Police do not use civilians in stings like this.",
        "Exciting",
        "Duty"
      ],
      "correct": 1,
      "explanation": "You hand the cash to a 'courier' (the scammer) and it's gone."
    },
    {
      "type": 1,
      "prompt": "The caller ID shows the local police station number.",
      "options": [
        "Real",
        "Spoofed. Don't trust caller ID.",
        "Answer",
        "Officer"
      ],
      "correct": 1,
      "explanation": "Technology allows them to mimic any number."
    },
    {
      "type": 1,
      "prompt": "They ask for your location.",
      "options": [
        "Give",
        "Don't give. They should know if they are police.",
        "Home",
        "Work"
      ],
      "correct": 1,
      "explanation": "Fishing for info."
    },
    {
      "type": 1,
      "prompt": "They demand silence. 'Tell no one or you obstruct justice'.",
      "options": [
        "Quiet",
        "Isolation tactic to stop you checking",
        "Secret",
        "Spy"
      ],
      "correct": 1,
      "explanation": "Isolating the victim is key."
    },
    {
      "type": 1,
      "prompt": "They have your name and address.",
      "options": [
        "Real police",
        "Public data / Leaked data",
        "Magic",
        "Tracked"
      ],
      "correct": 1,
      "explanation": "Data breaches make this info easy to get."
    },
    {
      "type": 1,
      "prompt": "What to do?",
      "options": [
        "Hang up and call the station directly",
        "Do as told",
        "Argue",
        "Wait"
      ],
      "correct": 0,
      "explanation": "Verify via an independent line."
    },
    {
      "type": 1,
      "prompt": "Do police take Bitcoin for bail?",
      "options": [
        "Yes",
        "No",
        "Maybe",
        "In future"
      ],
      "correct": 1,
      "explanation": "Never."
    },
    {
      "type": 2,
      "prompt": "Robocall: 'This is Border Force. A parcel in your name has illegal goods'.",
      "options": [
        "Press 1",
        "Hang up. Border Force doesn't robocall.",
        "Panic",
        "Speak"
      ],
      "correct": 1,
      "explanation": "A standard script to find active numbers."
    },
    {
      "type": 2,
      "prompt": "They say you must pay a fine to avoid prison.",
      "options": [
        "Pay",
        "Scam. Fines are issued in writing/court, not via wire transfer.",
        "How much",
        "Sorry"
      ],
      "correct": 1,
      "explanation": "You cannot bribe your way out of smuggling charges."
    },
    {
      "type": 2,
      "prompt": "The package contains 'Passports and Drugs'.",
      "options": [
        "Scary",
        "Standard scam script designed to terrify.",
        "Mine",
        "Real"
      ],
      "correct": 1,
      "explanation": "Extreme claims create extreme panic."
    },
    {
      "type": 2,
      "prompt": "They speak English with a robot voice or heavy accent.",
      "options": [
        "Officer",
        "Call center scam",
        "Translator",
        "Global"
      ],
      "correct": 1,
      "explanation": "Border Force officers are local."
    },
    {
      "type": 2,
      "prompt": "They ask for your passport number to 'verify'.",
      "options": [
        "Give",
        "ID theft attempt",
        "Verify",
        "Okay"
      ],
      "correct": 1,
      "explanation": "Collecting ID."
    },
    {
      "type": 2,
      "prompt": "You haven't ordered anything.",
      "options": [
        "ID Theft",
        "It's a random scam call",
        "Gift",
        "Mistake"
      ],
      "correct": 1,
      "explanation": "They call everyone, hoping someone is worried."
    },
    {
      "type": 2,
      "prompt": "They use WhatsApp to send 'Official Documents'.",
      "options": [
        "Modern",
        "Scam. Government uses email/mail.",
        "Fast",
        "Easy"
      ],
      "correct": 1,
      "explanation": "Official legal docs don't come via chat apps."
    },
    {
      "type": 2,
      "prompt": "They threaten to cancel your visa.",
      "options": [
        "Pay",
        "Scam intimidation",
        "Leave",
        "Cry"
      ],
      "correct": 1,
      "explanation": "Targeting immigrants with deportation threats."
    },
    {
      "type": 2,
      "prompt": "How to check?",
      "options": [
        "Call Border Force official line",
        "Trust caller",
        "Wait",
        "Pay"
      ],
      "correct": 0,
      "explanation": "Independent verification."
    },
    {
      "type": 2,
      "prompt": "Payment method?",
      "options": [
        "Bank Transfer",
        "Gift Cards/Crypto = Scam",
        "Cash",
        "Cheque"
      ],
      "correct": 1,
      "explanation": "Always the untraceable option."
    },
    {
      "type": 3,
      "prompt": "SMS: 'You have a speeding fine. Click here to view photo/pay'.",
      "options": [
        "Click",
        "Scam. Fines usually come by post (unless you opted in). Check independently.",
        "Pay",
        "Sorry"
      ],
      "correct": 1,
      "explanation": "Smishing for fines is huge. Don't click SMS links for fines."
    },
    {
      "type": 3,
      "prompt": "The URL is 'state-debt-recovery-pay.net'.",
      "options": [
        "Official",
        "Scam. Look for .gov.au",
        "Debt",
        "Pay"
      ],
      "correct": 1,
      "explanation": "Fake domains mimic real agencies."
    },
    {
      "type": 3,
      "prompt": "The fine is for a date you weren't driving.",
      "options": [
        "Mistake",
        "Random scam text sent to thousands",
        "Appeal",
        "Pay"
      ],
      "correct": 1,
      "explanation": "They guess dates and hope you were driving."
    },
    {
      "type": 3,
      "prompt": "The email asks you to download the infringement photo.",
      "options": [
        "Download",
        "Malware risk. Don't download .zip or .exe.",
        "Look",
        "Proof"
      ],
      "correct": 1,
      "explanation": "The 'photo' is a virus."
    },
    {
      "type": 3,
      "prompt": "You don't own a car.",
      "options": [
        "Funny",
        "Obvious scam",
        "Mistake",
        "Pay"
      ],
      "correct": 1,
      "explanation": "They don't know who owns cars; they just spam numbers."
    },
    {
      "type": 3,
      "prompt": "They threaten to suspend your license immediately.",
      "options": [
        "Pay",
        "Scam urgency",
        "Drive",
        "Wait"
      ],
      "correct": 1,
      "explanation": "Suspension takes time and letters."
    },
    {
      "type": 3,
      "prompt": "How to verify a fine?",
      "options": [
        "Click link",
        "Log in to Service NSW/VicRoads etc directly",
        "Ask police",
        "Guess"
      ],
      "correct": 1,
      "explanation": "Go to the official app or website."
    },
    {
      "type": 3,
      "prompt": "The text comes from a mobile number.",
      "options": [
        "Officer",
        "Scam",
        "System",
        "Camera"
      ],
      "correct": 1,
      "explanation": "Fines don't come from +61 4..."
    },
    {
      "type": 3,
      "prompt": "The fine amount is small ($20).",
      "options": [
        "Pay",
        "Bait to get credit card details",
        "Cheap",
        "Lucky"
      ],
      "correct": 1,
      "explanation": "Low amounts encourage quick payment without thinking."
    },
    {
      "type": 3,
      "prompt": "Can you pay fines with crypto?",
      "options": [
        "No",
        "Yes",
        "Maybe",
        "Future"
      ],
      "correct": 0,
      "explanation": "Government does not accept crypto."
    },
    {
      "type": 4,
      "prompt": "Robocall in Mandarin: 'This is the Chinese Embassy. You have a document to pick up'.",
      "options": [
        "Press key",
        "Hang up. Known targeted scam.",
        "Go there",
        "Listen"
      ],
      "correct": 1,
      "explanation": "A massive scam targeting the diaspora and students."
    },
    {
      "type": 4,
      "prompt": "They claim you are involved in money laundering in Shanghai.",
      "options": [
        "Scary",
        "Standard script",
        "True",
        "Confess"
      ],
      "correct": 1,
      "explanation": "They pretend to transfer you to 'Shanghai Police'."
    },
    {
      "type": 4,
      "prompt": "They demand 'Bail Money' to avoid extradition.",
      "options": [
        "Pay",
        "Scam extortion",
        "Hide",
        "Fly"
      ],
      "correct": 1,
      "explanation": "Extradition doesn't work like that."
    },
    {
      "type": 4,
      "prompt": "They send a photo of a fake arrest warrant with your photo.",
      "options": [
        "Real",
        "Photoshop fake",
        "Scary",
        "Run"
      ],
      "correct": 1,
      "explanation": "They take your social media photo and paste it on a template."
    },
    {
      "type": 4,
      "prompt": "They simulate a kidnapping (Virtual Kidnapping).",
      "options": [
        "Real",
        "They convince you to hide, then extort your family",
        "Joke",
        "Game"
      ],
      "correct": 1,
      "explanation": "They coerce students to hide in a hotel, then tell parents they are kidnapped."
    },
    {
      "type": 4,
      "prompt": "They dress up in uniforms on video call.",
      "options": [
        "Official",
        "Costumes to build trust",
        "Real",
        "Police"
      ],
      "correct": 1,
      "explanation": "Props and costumes are used."
    },
    {
      "type": 4,
      "prompt": "Target audience?",
      "options": [
        "Everyone",
        "International students / Expats",
        "Locals",
        "Tourists"
      ],
      "correct": 1,
      "explanation": "They exploit fear of visa loss and foreign authorities."
    },
    {
      "type": 4,
      "prompt": "Does the Embassy call about packages?",
      "options": [
        "No",
        "Yes",
        "Maybe",
        "Sometimes"
      ],
      "correct": 0,
      "explanation": "Embassies don't act as post offices."
    },
    {
      "type": 4,
      "prompt": "What to do?",
      "options": [
        "Pay",
        "Contact local Police or Consular helpline independently",
        "Hide",
        "Wait"
      ],
      "correct": 1,
      "explanation": "Verify with official channels."
    },
    {
      "type": 4,
      "prompt": "Is it safe to ignore?",
      "options": [
        "Yes",
        "No",
        "Maybe",
        "Risky"
      ],
      "correct": 0,
      "explanation": "It is 100% a scam."
    },
    {
      "type": 5,
      "prompt": "Ad: 'Claim your $750 Cost of Living Bonus instantly'.",
      "options": [
        "Claim",
        "Check government site. Don't click ads.",
        "Rich",
        "Free"
      ],
      "correct": 1,
      "explanation": "Scammers use current events (inflation) to bait clicks."
    },
    {
      "type": 5,
      "prompt": "They ask for an upfront 'Processing Fee' to release the grant.",
      "options": [
        "Pay",
        "Scam. Grants don't have upfront fees.",
        "Small",
        "Tax"
      ],
      "correct": 1,
      "explanation": "You don't pay money to get money."
    },
    {
      "type": 5,
      "prompt": "The grant is from the 'Department of Welfare' (Fake name).",
      "options": [
        "Official",
        "Check agency name carefully",
        "Real",
        "Good"
      ],
      "correct": 1,
      "explanation": "Scammers invent sounding names."
    },
    {
      "type": 5,
      "prompt": "They contact you via Facebook Messenger.",
      "options": [
        "Modern",
        "Scam. Govt does not DM you.",
        "Easy",
        "Chat"
      ],
      "correct": 1,
      "explanation": "Official comms are letter/email/myGov."
    },
    {
      "type": 5,
      "prompt": "You have to provide bank login to 'link' the payment.",
      "options": [
        "Give",
        "Scam. BSB/Acc is enough.",
        "Login",
        "Link"
      ],
      "correct": 1,
      "explanation": "Never give passwords."
    },
    {
      "type": 5,
      "prompt": "The website asks for 100 points of ID.",
      "options": [
        "Standard",
        "ID Theft trap",
        "Verify",
        "Safe"
      ],
      "correct": 1,
      "explanation": "They want your identity, not to give you money."
    },
    {
      "type": 5,
      "prompt": "A friend says they got it (Friend's account hacked).",
      "options": [
        "Trust",
        "Verify with friend via voice",
        "Apply",
        "Share"
      ],
      "correct": 1,
      "explanation": "Hacked accounts spread these scams."
    },
    {
      "type": 5,
      "prompt": "The grant is for 'Loyal Citizens'.",
      "options": [
        "Me",
        "Fake category",
        "Proud",
        "Good"
      ],
      "correct": 1,
      "explanation": "Nonsensical eligibility criteria."
    },
    {
      "type": 5,
      "prompt": "Can you apply for grants via random sites?",
      "options": [
        "No",
        "Yes",
        "Maybe",
        "Sometimes"
      ],
      "correct": 0,
      "explanation": "Use official .gov.au portals."
    },
    {
      "type": 5,
      "prompt": "What if you paid the fee?",
      "options": [
        "Refund",
        "Report to bank/police immediately",
        "Wait",
        "Hope"
      ],
      "correct": 1,
      "explanation": "Act fast."
    }
  ]
};