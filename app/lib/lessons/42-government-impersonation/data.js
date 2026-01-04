export default [
  {
    id: "42-01",
    title: "Fake Police Calls",
    description: "Officer John Smith needs your help.",
    questions: [
      {
        question: "Caller: 'This is the Federal Police. Your ID was found at a crime scene'.",
        options: ["Panic", "Scam. Police don't call to warn you about crime scenes.", "Confess", "Run"],
        correctAnswer: 1,
        explanation: "This is the 'Authority Scam'. They want you to panic and follow orders."
      },
      {
        question: "They say: 'Transfer your money to a secure police account for protection'.",
        options: ["Transfer", "Scam. Police NEVER hold money for the public.", "Okay", "Safe"],
        correctAnswer: 1,
        explanation: "Police accounts do not exist for protecting civilian funds."
      },
      {
        question: "They threaten to come and arrest you immediately.",
        options: ["Wait", "Intimidation tactic. Arrests happen, they aren't announced.", "Hide", "Cry"],
        correctAnswer: 1,
        explanation: "Warning you gives you time to flee. Real police just show up."
      },
      {
        question: "They ask you to help catch a 'corrupt bank teller' by withdrawing cash.",
        options: ["Help", "Scam. Police do not use civilians in stings like this.", "Exciting", "Duty"],
        correctAnswer: 1,
        explanation: "You hand the cash to a 'courier' (the scammer) and it's gone."
      },
      {
        question: "The caller ID shows the local police station number.",
        options: ["Real", "Spoofed. Don't trust caller ID.", "Answer", "Officer"],
        correctAnswer: 1,
        explanation: "Technology allows them to mimic any number."
      },
      {
        question: "They ask for your location.",
        options: ["Give", "Don't give. They should know if they are police.", "Home", "Work"],
        correctAnswer: 1,
        explanation: "Fishing for info."
      },
      {
        question: "They demand silence. 'Tell no one or you obstruct justice'.",
        options: ["Quiet", "Isolation tactic to stop you checking", "Secret", "Spy"],
        correctAnswer: 1,
        explanation: "Isolating the victim is key."
      },
      {
        question: "They have your name and address.",
        options: ["Real police", "Public data / Leaked data", "Magic", "Tracked"],
        correctAnswer: 1,
        explanation: "Data breaches make this info easy to get."
      },
      {
        question: "What to do?",
        options: ["Hang up and call the station directly", "Do as told", "Argue", "Wait"],
        correctAnswer: 0,
        explanation: "Verify via an independent line."
      },
      {
        question: "Do police take Bitcoin for bail?",
        options: ["Yes", "No", "Maybe", "In future"],
        correctAnswer: 1,
        explanation: "Never."
      }
    ]
  },
  {
    id: "42-02",
    title: "Border Force & Customs",
    description: "Your package contains illegal items.",
    questions: [
      {
        question: "Robocall: 'This is Border Force. A parcel in your name has illegal goods'.",
        options: ["Press 1", "Hang up. Border Force doesn't robocall.", "Panic", "Speak"],
        correctAnswer: 1,
        explanation: "A standard script to find active numbers."
      },
      {
        question: "They say you must pay a fine to avoid prison.",
        options: ["Pay", "Scam. Fines are issued in writing/court, not via wire transfer.", "How much", "Sorry"],
        correctAnswer: 1,
        explanation: "You cannot bribe your way out of smuggling charges."
      },
      {
        question: "The package contains 'Passports and Drugs'.",
        options: ["Scary", "Standard scam script designed to terrify.", "Mine", "Real"],
        correctAnswer: 1,
        explanation: "Extreme claims create extreme panic."
      },
      {
        question: "They speak English with a robot voice or heavy accent.",
        options: ["Officer", "Call center scam", "Translator", "Global"],
        correctAnswer: 1,
        explanation: "Border Force officers are local."
      },
      {
        question: "They ask for your passport number to 'verify'.",
        options: ["Give", "ID theft attempt", "Verify", "Okay"],
        correctAnswer: 1,
        explanation: "Collecting ID."
      },
      {
        question: "You haven't ordered anything.",
        options: ["ID Theft", "It's a random scam call", "Gift", "Mistake"],
        correctAnswer: 1,
        explanation: "They call everyone, hoping someone is worried."
      },
      {
        question: "They use WhatsApp to send 'Official Documents'.",
        options: ["Modern", "Scam. Government uses email/mail.", "Fast", "Easy"],
        correctAnswer: 1,
        explanation: "Official legal docs don't come via chat apps."
      },
      {
        question: "They threaten to cancel your visa.",
        options: ["Pay", "Scam intimidation", "Leave", "Cry"],
        correctAnswer: 1,
        explanation: "Targeting immigrants with deportation threats."
      },
      {
        question: "How to check?",
        options: ["Call Border Force official line", "Trust caller", "Wait", "Pay"],
        correctAnswer: 0,
        explanation: "Independent verification."
      },
      {
        question: "Payment method?",
        options: ["Bank Transfer", "Gift Cards/Crypto = Scam", "Cash", "Cheque"],
        correctAnswer: 1,
        explanation: "Always the untraceable option."
      }
    ]
  },
  {
    id: "42-03",
    title: "Fake Fines & Infringements",
    description: "Speeding tickets via text.",
    questions: [
      {
        question: "SMS: 'You have a speeding fine. Click here to view photo/pay'.",
        options: ["Click", "Scam. Fines usually come by post (unless you opted in). Check independently.", "Pay", "Sorry"],
        correctAnswer: 1,
        explanation: "Smishing for fines is huge. Don't click SMS links for fines."
      },
      {
        question: "The URL is 'state-debt-recovery-pay.net'.",
        options: ["Official", "Scam. Look for .gov.au", "Debt", "Pay"],
        correctAnswer: 1,
        explanation: "Fake domains mimic real agencies."
      },
      {
        question: "The fine is for a date you weren't driving.",
        options: ["Mistake", "Random scam text sent to thousands", "Appeal", "Pay"],
        correctAnswer: 1,
        explanation: "They guess dates and hope you were driving."
      },
      {
        question: "The email asks you to download the infringement photo.",
        options: ["Download", "Malware risk. Don't download .zip or .exe.", "Look", "Proof"],
        correctAnswer: 1,
        explanation: "The 'photo' is a virus."
      },
      {
        question: "You don't own a car.",
        options: ["Funny", "Obvious scam", "Mistake", "Pay"],
        correctAnswer: 1,
        explanation: "They don't know who owns cars; they just spam numbers."
      },
      {
        question: "They threaten to suspend your license immediately.",
        options: ["Pay", "Scam urgency", "Drive", "Wait"],
        correctAnswer: 1,
        explanation: "Suspension takes time and letters."
      },
      {
        question: "How to verify a fine?",
        options: ["Click link", "Log in to Service NSW/VicRoads etc directly", "Ask police", "Guess"],
        correctAnswer: 1,
        explanation: "Go to the official app or website."
      },
      {
        question: "The text comes from a mobile number.",
        options: ["Officer", "Scam", "System", "Camera"],
        correctAnswer: 1,
        explanation: "Fines don't come from +61 4..."
      },
      {
        question: "The fine amount is small ($20).",
        options: ["Pay", "Bait to get credit card details", "Cheap", "Lucky"],
        correctAnswer: 1,
        explanation: "Low amounts encourage quick payment without thinking."
      },
      {
        question: "Can you pay fines with crypto?",
        options: ["No", "Yes", "Maybe", "Future"],
        correctAnswer: 0,
        explanation: "Government does not accept crypto."
      }
    ]
  },
  {
    id: "42-04",
    title: "Chinese Authority Scam",
    description: "Targeting the Mandarin speaking community.",
    questions: [
      {
        question: "Robocall in Mandarin: 'This is the Chinese Embassy. You have a document to pick up'.",
        options: ["Press key", "Hang up. Known targeted scam.", "Go there", "Listen"],
        correctAnswer: 1,
        explanation: "A massive scam targeting the diaspora and students."
      },
      {
        question: "They claim you are involved in money laundering in Shanghai.",
        options: ["Scary", "Standard script", "True", "Confess"],
        correctAnswer: 1,
        explanation: "They pretend to transfer you to 'Shanghai Police'."
      },
      {
        question: "They demand 'Bail Money' to avoid extradition.",
        options: ["Pay", "Scam extortion", "Hide", "Fly"],
        correctAnswer: 1,
        explanation: "Extradition doesn't work like that."
      },
      {
        question: "They send a photo of a fake arrest warrant with your photo.",
        options: ["Real", "Photoshop fake", "Scary", "Run"],
        correctAnswer: 1,
        explanation: "They take your social media photo and paste it on a template."
      },
      {
        question: "They simulate a kidnapping (Virtual Kidnapping).",
        options: ["Real", "They convince you to hide, then extort your family", "Joke", "Game"],
        correctAnswer: 1,
        explanation: "They coerce students to hide in a hotel, then tell parents they are kidnapped."
      },
      {
        question: "They dress up in uniforms on video call.",
        options: ["Official", "Costumes to build trust", "Real", "Police"],
        correctAnswer: 1,
        explanation: "Props and costumes are used."
      },
      {
        question: "Target audience?",
        options: ["Everyone", "International students / Expats", "Locals", "Tourists"],
        correctAnswer: 1,
        explanation: "They exploit fear of visa loss and foreign authorities."
      },
      {
        question: "Does the Embassy call about packages?",
        options: ["No", "Yes", "Maybe", "Sometimes"],
        correctAnswer: 0,
        explanation: "Embassies don't act as post offices."
      },
      {
        question: "What to do?",
        options: ["Pay", "Contact local Police or Consular helpline independently", "Hide", "Wait"],
        correctAnswer: 1,
        explanation: "Verify with official channels."
      },
      {
        question: "Is it safe to ignore?",
        options: ["Yes", "No", "Maybe", "Risky"],
        correctAnswer: 0,
        explanation: "It is 100% a scam."
      }
    ]
  },
  {
    id: "42-05",
    title: "Fake Grants & Relief",
    description: "Free money from the government?",
    questions: [
      {
        question: "Ad: 'Claim your $750 Cost of Living Bonus instantly'.",
        options: ["Claim", "Check government site. Don't click ads.", "Rich", "Free"],
        correctAnswer: 1,
        explanation: "Scammers use current events (inflation) to bait clicks."
      },
      {
        question: "They ask for an upfront 'Processing Fee' to release the grant.",
        options: ["Pay", "Scam. Grants don't have upfront fees.", "Small", "Tax"],
        correctAnswer: 1,
        explanation: "You don't pay money to get money."
      },
      {
        question: "The grant is from the 'Department of Welfare' (Fake name).",
        options: ["Official", "Check agency name carefully", "Real", "Good"],
        correctAnswer: 1,
        explanation: "Scammers invent sounding names."
      },
      {
        question: "They contact you via Facebook Messenger.",
        options: ["Modern", "Scam. Govt does not DM you.", "Easy", "Chat"],
        correctAnswer: 1,
        explanation: "Official comms are letter/email/myGov."
      },
      {
        question: "You have to provide bank login to 'link' the payment.",
        options: ["Give", "Scam. BSB/Acc is enough.", "Login", "Link"],
        correctAnswer: 1,
        explanation: "Never give passwords."
      },
      {
        question: "The website asks for 100 points of ID.",
        options: ["Standard", "ID Theft trap", "Verify", "Safe"],
        correctAnswer: 1,
        explanation: "They want your identity, not to give you money."
      },
      {
        question: "A friend says they got it (Friend's account hacked).",
        options: ["Trust", "Verify with friend via voice", "Apply", "Share"],
        correctAnswer: 1,
        explanation: "Hacked accounts spread these scams."
      },
      {
        question: "The grant is for 'Loyal Citizens'.",
        options: ["Me", "Fake category", "Proud", "Good"],
        correctAnswer: 1,
        explanation: "Nonsensical eligibility criteria."
      },
      {
        question: "Can you apply for grants via random sites?",
        options: ["No", "Yes", "Maybe", "Sometimes"],
        correctAnswer: 0,
        explanation: "Use official .gov.au portals."
      },
      {
        question: "What if you paid the fee?",
        options: ["Refund", "Report to bank/police immediately", "Wait", "Hope"],
        correctAnswer: 1,
        explanation: "Act fast."
      }
    ]
  }
];