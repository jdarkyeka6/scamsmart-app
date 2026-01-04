export default [
  {
    id: "50-01",
    title: "Age Verification Phishing",
    description: "The 'Verify or Delete' trap.",
    questions: [
      {
        question: "You get a text: 'GovID: Verify your age to keep Instagram access'.",
        options: ["Click", "Scam. Government doesn't text links.", "Verify", "Keep"],
        correctAnswer: 1,
        explanation: "Scammers exploit the new ban to harvest IDs via SMS."
      },
      {
        question: "The site asks for Drivers License uploads.",
        options: ["Upload", "ID Theft risk. Check URL.", "Safe", "Fast"],
        correctAnswer: 1,
        explanation: "Handing over ID to random sites leads to identity theft."
      },
      {
        question: "The email threatens account deletion in 24 hours.",
        options: ["Panic", "Urgency tactic.", "Wait", "Check"],
        correctAnswer: 1,
        explanation: "Panic stops you checking the facts."
      },
      {
        question: "Is there a central 'Social Media ID'?",
        options: ["Yes", "No, likely platforms verify individually or via established Digital ID.", "Maybe", "Soon"],
        correctAnswer: 1,
        explanation: "Fake 'Central Registries' are scams."
      },
      {
        question: "They ask for credit card for 'Age Check' ($0 charge).",
        options: ["Give", "Scam. They steal the card details.", "Check", "Free"],
        correctAnswer: 1,
        explanation: "They claim it's free but charge you later."
      },
      {
        question: "Check the app.",
        options: ["Yes", "Open the actual app to see if it asks for ID.", "No", "Click link"],
        correctAnswer: 0,
        explanation: "In-app notifications are safer than SMS links."
      },
      {
        question: "Target audience.",
        options: ["Kids", "Parents and Teens.", "Nobody", "Pets"],
        correctAnswer: 1,
        explanation: "Parents verifying for kids."
      },
      {
        question: "Spoofed Sender ID (eSafety).",
        options: ["Real", "Fake. Names can be spoofed.", "Gov", "Trust"],
        correctAnswer: 1,
        explanation: "Don't trust the name on the text."
      },
      {
        question: "Report.",
        options: ["Scamwatch", "Delete", "Ignore", "Mum"],
        correctAnswer: 0,
        explanation: "Track the campaign."
      },
      {
        question: "The link is 'verify-tiktok-au.com'.",
        options: ["Legit", "Scam domain.", "Official", "Safe"],
        correctAnswer: 1,
        explanation: "Look for official domains."
      }
    ]
  },
  {
    id: "50-02",
    title: "Fake VPN & Bypass Apps",
    description: "Malware disguised as freedom.",
    questions: [
      {
        question: "Ad: 'Bypass the Aussie Ban! Free App'.",
        options: ["Download", "Malware/Spyware risk.", "Install", "Cool"],
        correctAnswer: 1,
        explanation: "Free VPNs often sell data or contain viruses."
      },
      {
        question: "The app asks for Admin permissions.",
        options: ["Grant", "Deny. Total phone control.", "Okay", "Yes"],
        correctAnswer: 1,
        explanation: "Giving a scam app admin rights ruins your phone."
      },
      {
        question: "Sideloading request.",
        options: ["Safe", "Dangerous. Bypasses App Store security.", "Good", "File"],
        correctAnswer: 1,
        explanation: "Installing unknown APKs."
      },
      {
        question: "Lifetime subscription fee.",
        options: ["Pay", "Scam. Take money and run.", "Deal", "Cheap"],
        correctAnswer: 1,
        explanation: "Fake services."
      },
      {
        question: "Data theft.",
        options: ["None", "VPNs can see all your traffic.", "Safe", "Privacy"],
        correctAnswer: 1,
        explanation: "Man-in-the-middle attack."
      },
      {
        question: "Fake reviews.",
        options: ["Trust", "Bot reviews.", "Real", "Good"],
        correctAnswer: 1,
        explanation: "Generic praise."
      },
      {
        question: "Use reputable VPNs.",
        options: ["Yes", "Stick to known brands.", "No", "Any"],
        correctAnswer: 0,
        explanation: "Safety in brands."
      },
      {
        question: "Claims to be 'Govt Approved'.",
        options: ["True", "Lie. Govt doesn't approve bypass tools.", "Safe", "Real"],
        correctAnswer: 1,
        explanation: "Nonsense claim."
      },
      {
        question: "Legal risk.",
        options: ["None", "Downloading malware is the risk.", "Jail", "Fine"],
        correctAnswer: 1,
        explanation: "Focus on security."
      },
      {
        question: "Delete if unused.",
        options: ["Yes", "Remove potential spyware.", "No", "Keep"],
        correctAnswer: 0,
        explanation: "Clean phone."
      }
    ]
  },
  {
    id: "50-03",
    title: "Exemption Permit Scams",
    description: "The fake paperwork.",
    questions: [
      {
        question: "Email: 'Apply for a Social Media Ban Exemption'.",
        options: ["Apply", "Scam. No such permit exists.", "Need", "Form"],
        correctAnswer: 1,
        explanation: "Inventing bureaucracy to charge fees."
      },
      {
        question: "Processing fee.",
        options: ["Pay", "Scam.", "Cheap", "Tax"],
        correctAnswer: 1,
        explanation: "Fee fraud."
      },
      {
        question: "Ask for Passport.",
        options: ["Upload", "ID Theft.", "Verify", "Proof"],
        correctAnswer: 1,
        explanation: "Harvesting docs."
      },
      {
        question: "Targeting influencers.",
        options: ["Business exemption", "Scam targeting income loss fears.", "Real", "Work"],
        correctAnswer: 1,
        explanation: "Preying on career fear."
      },
      {
        question: "Fake eSafety site.",
        options: ["Official", "Cloned site.", "Real", "Safe"],
        correctAnswer: 1,
        explanation: "Check URL."
      },
      {
        question: "Fake fines.",
        options: ["Pay", "Scam. Users aren't fined.", "Sorry", "Debt"],
        correctAnswer: 1,
        explanation: "Platforms get fined, not kids."
      },
      {
        question: "Crypto payment.",
        options: ["Pay", "Scam.", "Modern", "Fast"],
        correctAnswer: 1,
        explanation: "Govt doesn't take crypto."
      },
      {
        question: "Google Doc form.",
        options: ["Official", "Scam.", "Easy", "Cloud"],
        correctAnswer: 1,
        explanation: "Unprofessional."
      },
      {
        question: "Cold call registration.",
        options: ["Register", "Scam.", "Talk", "Listen"],
        correctAnswer: 1,
        explanation: "Unsolicited contact."
      },
      {
        question: "Check news.",
        options: ["Yes", "Know the law.", "No", "Ignore"],
        correctAnswer: 0,
        explanation: "Information is power."
      }
    ]
  },
  {
    id: "50-04",
    title: "Parental Control Malware",
    description: "Spying on the kids.",
    questions: [
      {
        question: "Ad: 'The only app that works with the ban'.",
        options: ["Download", "Scareware.", "Install", "Protect"],
        correctAnswer: 1,
        explanation: "Fake claims."
      },
      {
        question: "Stalkerware.",
        options: ["Monitor", "Dangerous data leak.", "Safety", "Watch"],
        correctAnswer: 1,
        explanation: "Spy apps are insecure."
      },
      {
        question: "Subscription trap.",
        options: ["Sign", "Hard to cancel.", "Free", "Trial"],
        correctAnswer: 1,
        explanation: "Billing fraud."
      },
      {
        question: "Ask for kid's login.",
        options: ["Give", "Phishing.", "Monitor", "Control"],
        correctAnswer: 1,
        explanation: "Stealing credentials."
      },
      {
        question: "Ransomware.",
        options: ["High", "Lock phone.", "Low", "None"],
        correctAnswer: 1,
        explanation: "Malware payload."
      },
      {
        question: "Fake seal.",
        options: ["Trust", "Marketing lie.", "Official", "Good"],
        correctAnswer: 1,
        explanation: "Images mean nothing."
      },
      {
        question: "Location tracking.",
        options: ["Safety", "Privacy risk.", "Good", "Map"],
        correctAnswer: 1,
        explanation: "Selling data."
      },
      {
        question: "Use built-in tools.",
        options: ["Yes", "Family Link / Screen Time.", "No", "Old"],
        correctAnswer: 0,
        explanation: "Trust OS vendors."
      },
      {
        question: "Bot reviews.",
        options: ["Trust", "Fake.", "Real", "Good"],
        correctAnswer: 1,
        explanation: "Check fakespot."
      },
      {
        question: "Permissions.",
        options: ["Check", "Minimize.", "All", "Grant"],
        correctAnswer: 0,
        explanation: "Least privilege."
      }
    ]
  },
  {
    id: "50-05",
    title: "Influencer Impersonation",
    description: "My backup account.",
    questions: [
      {
        question: "DM: 'My account is banned. Follow private backup'.",
        options: ["Follow", "Scam impersonator.", "Fan", "Support"],
        correctAnswer: 1,
        explanation: "Building fake following."
      },
      {
        question: "Legal fund donation.",
        options: ["Donate", "Scam.", "Help", "Support"],
        correctAnswer: 1,
        explanation: "Fake causes."
      },
      {
        question: "Exclusive platform link.",
        options: ["Join", "Phishing.", "VIP", "Cool"],
        correctAnswer: 1,
        explanation: "Stealing logins."
      },
      {
        question: "Crypto giveaway.",
        options: ["Claim", "Scam.", "Win", "Lucky"],
        correctAnswer: 1,
        explanation: "Classic rug pull."
      },
      {
        question: "OnlyFans leak.",
        options: ["Click", "Malware.", "See", "Free"],
        correctAnswer: 1,
        explanation: "Bait."
      },
      {
        question: "Deepfake video.",
        options: ["Real", "AI generated.", "Sad", "Watch"],
        correctAnswer: 1,
        explanation: "Visual lie."
      },
      {
        question: "Verification check.",
        options: ["Yes", "Blue tick.", "No", "Trust"],
        correctAnswer: 0,
        explanation: "Is it really them?"
      },
      {
        question: "Personal DM.",
        options: ["Lucky", "Mass spam.", "Wow", "Reply"],
        correctAnswer: 1,
        explanation: "Celebs don't DM you."
      },
      {
        question: "Handle spelling.",
        options: ["Typo", "Impersonation.", "New", "Alt"],
        correctAnswer: 1,
        explanation: "Check username."
      },
      {
        question: "Block.",
        options: ["Yes", "Report.", "No", "Share"],
        correctAnswer: 0,
        explanation: "Clean feed."
      }
    ]
  },
  {
    id: "50-06",
    title: "Grandfathered Account Sales",
    description: "Buying pre-ban accounts.",
    questions: [
      {
        question: "Selling 'Pre-ban' accounts for $100.",
        options: ["Buy", "Scam. You can't verify age status of bought accounts.", "Deal", "Need"],
        correctAnswer: 1,
        explanation: "Selling accounts is against T&Cs and often a scam."
      },
      {
        question: "They take the money and ghost.",
        options: ["Refund", "Standard outcome.", "Wait", "Report"],
        correctAnswer: 1,
        explanation: "No buyer protection."
      },
      {
        question: "Account is stolen.",
        options: ["Use", "You are handling stolen goods.", "Okay", "Keep"],
        correctAnswer: 1,
        explanation: "Hacked from others."
      },
      {
        question: "Recovery scam.",
        options: ["Safe", "Seller recovers account after payment.", "Good", "Own"],
        correctAnswer: 1,
        explanation: "They reset the password."
      },
      {
        question: "ID verification fail.",
        options: ["Bypass", "New owner fails ID check.", "Easy", "Fix"],
        correctAnswer: 1,
        explanation: "The account gets banned anyway."
      },
      {
        question: "Dark web shops.",
        options: ["Cool", "Dangerous.", "Buy", "Safe"],
        correctAnswer: 1,
        explanation: "Criminal hubs."
      },
      {
        question: "Crypto payment.",
        options: ["Pay", "Scam sign.", "Fast", "Modern"],
        correctAnswer: 1,
        explanation: "Untraceable."
      },
      {
        question: "Ban evasion risks.",
        options: ["None", "Permanent IP bans.", "Low", "Fun"],
        correctAnswer: 1,
        explanation: "Platforms fight back."
      },
      {
        question: "Identity theft.",
        options: ["Yes", "Providing your data to criminals.", "No", "Maybe"],
        correctAnswer: 0,
        explanation: "Risk."
      },
      {
        question: "Don't buy accounts.",
        options: ["Rule", "Ignore.", "Suggestion", "Maybe"],
        correctAnswer: 0,
        explanation: "Safety first."
      }
    ]
  },
  {
    id: "50-07",
    title: "Tech Support 'Unblock'",
    description: "I can fix your Instagram.",
    questions: [
      {
        question: "Service offering to 'Unblock' your child's access.",
        options: ["Hire", "Scam. Only platforms control access.", "Help", "Fix"],
        correctAnswer: 1,
        explanation: "Tech support scams pivot to new issues."
      },
      {
        question: "Remote access request.",
        options: ["Allow", "Refuse. They steal banking info.", "Helpful", "Fix"],
        correctAnswer: 1,
        explanation: "Never let them in."
      },
      {
        question: "Fee in gift cards.",
        options: ["Pay", "Scam.", "Okay", "Fast"],
        correctAnswer: 1,
        explanation: "Payment flag."
      },
      {
        question: "They claim to be 'Instagram Staff'.",
        options: ["Official", "Lie.", "Real", "Good"],
        correctAnswer: 1,
        explanation: "Impersonation."
      },
      {
        question: "Password request.",
        options: ["Give", "Phishing.", "Help", "Login"],
        correctAnswer: 1,
        explanation: "Account theft."
      },
      {
        question: "Search ads.",
        options: ["Click", "Avoid. Scammers buy ads.", "Safe", "Google"],
        correctAnswer: 1,
        explanation: "SEO poisoning."
      },
      {
        question: "Guaranteed results.",
        options: ["Great", "Red flag.", "Sign", "Trust"],
        correctAnswer: 1,
        explanation: "Lies."
      },
      {
        question: "Testimonials.",
        options: ["Trust", "Fake.", "Real", "Good"],
        correctAnswer: 1,
        explanation: "Fabricated."
      },
      {
        question: "Official channels.",
        options: ["Use", "Ignore.", "Hard", "Slow"],
        correctAnswer: 0,
        explanation: "Only appeal via the app."
      },
      {
        question: "Block them.",
        options: ["Yes", "No.", "Maybe", "Talk"],
        correctAnswer: 0,
        explanation: "Stop contact."
      }
    ]
  },
  {
    id: "50-08",
    title: "Fake Government Fines",
    description: "You've been caught using TikTok.",
    questions: [
      {
        question: "Email: 'Fine for accessing social media under age'.",
        options: ["Pay", "Scam. Users are not fined.", "Sorry", "Debt"],
        correctAnswer: 1,
        explanation: "The law penalizes platforms, not individuals."
      },
      {
        question: "Logo misuse.",
        options: ["Official", "Copied eSafety/Gov logos.", "Real", "Trust"],
        correctAnswer: 1,
        explanation: "Authority fabrication."
      },
      {
        question: "Click to view evidence.",
        options: ["Click", "Malware link.", "Look", "Proof"],
        correctAnswer: 1,
        explanation: "Infection vector."
      },
      {
        question: "Urgency.",
        options: ["Pay now", "Scam tactic.", "Wait", "Hurry"],
        correctAnswer: 1,
        explanation: "Panic induction."
      },
      {
        question: "Bitcoin payment.",
        options: ["Pay", "Govt doesn't use crypto.", "Modern", "Fast"],
        correctAnswer: 1,
        explanation: "Untraceable."
      },
      {
        question: "Threat of police.",
        options: ["Scary", "Intimidation.", "Real", "Hide"],
        correctAnswer: 1,
        explanation: "Civil matter vs Criminal."
      },
      {
        question: "Parental liability threat.",
        options: ["Pay", "Scam targeting parents.", "Sorry", "Mom"],
        correctAnswer: 1,
        explanation: "Fear for kids."
      },
      {
        question: "Check source.",
        options: ["Email", "Go to official govt website.", "Text", "Link"],
        correctAnswer: 1,
        explanation: "Verification."
      },
      {
        question: "Grammar errors.",
        options: ["Typo", "Scam sign.", "Fine", "Okay"],
        correctAnswer: 1,
        explanation: "Unprofessional."
      },
      {
        question: "Ignore.",
        options: ["Yes", "Safe to delete.", "No", "Risk"],
        correctAnswer: 0,
        explanation: "Don't engage."
      }
    ]
  },
  {
    id: "50-09",
    title: "Data Privacy Risks",
    description: "Where does the ID go?",
    questions: [
      {
        question: "Uploading ID to verify age.",
        options: ["Safe", "Data breach risk.", "Easy", "Fast"],
        correctAnswer: 1,
        explanation: "Centralized honeypots."
      },
      {
        question: "Third-party verifiers.",
        options: ["Trust", "Check reputation carefully.", "Use any", "Random"],
        correctAnswer: 1,
        explanation: "Who holds the data?"
      },
      {
        question: "Data minimization.",
        options: ["Good", "Only give what is needed.", "Bad", "Give all"],
        correctAnswer: 0,
        explanation: "Privacy principle."
      },
      {
        question: "Digital ID (Gov).",
        options: ["Safer", "Usually better than random site uploads.", "Worse", "Hard"],
        correctAnswer: 0,
        explanation: "Regulated systems."
      },
      {
        question: "Scam sites harvesting.",
        options: ["Risk", "Primary goal of age check scams.", "Safe", "None"],
        correctAnswer: 1,
        explanation: "Collecting passports."
      },
      {
        question: "Face scans.",
        options: ["Biometric", "Sensitive data.", "Photo", "Pic"],
        correctAnswer: 1,
        explanation: "Can't change your face."
      },
      {
        question: "Terms and Conditions.",
        options: ["Read", "Ignore.", "Skip", "Agree"],
        correctAnswer: 0,
        explanation: "Data selling clauses."
      },
      {
        question: "VPN logging.",
        options: ["Risk", "Free VPNs log everything.", "Safe", "Hide"],
        correctAnswer: 1,
        explanation: "Privacy paradox."
      },
      {
        question: "Parental oversharing.",
        options: ["Stop", "Don't verify for strangers.", "Do it", "Help"],
        correctAnswer: 0,
        explanation: "Protect kids' data."
      },
      {
        question: "Delete data.",
        options: ["Ask", "Right to be forgotten.", "Keep", "Save"],
        correctAnswer: 0,
        explanation: "Cleanup."
      }
    ]
  },
  {
    id: "50-10",
    title: "Legal Reality vs Scam",
    description: "Know the law to spot the lie.",
    questions: [
      {
        question: "Who is penalized?",
        options: ["Kids", "Tech Platforms.", "Parents", "Schools"],
        correctAnswer: 1,
        explanation: "Platforms face fines, not users."
      },
      {
        question: "Is usage criminal?",
        options: ["No", "It is not a crime for a child to use social media.", "Yes", "Jail"],
        correctAnswer: 0,
        explanation: "No jail time for kids."
      },
      {
        question: "Exemptions.",
        options: ["Few", "Education/Health services likely exempt.", "Many", "All"],
        correctAnswer: 0,
        explanation: "Specific categories only."
      },
      {
        question: "Timeline.",
        options: ["Instant", "12+ month implementation period.", "Now", "Yesterday"],
        correctAnswer: 1,
        explanation: "Scams use false urgency."
      },
      {
        question: "Enforcer.",
        options: ["eSafety Commissioner", "Police", "Army", "CIA"],
        correctAnswer: 0,
        explanation: "Regulatory body."
      },
      {
        question: "Permits.",
        options: ["None", "Individuals don't need permits.", "Buy", "Apply"],
        correctAnswer: 0,
        explanation: "Permit scams are lies."
      },
      {
        question: "Fines for parents.",
        options: ["No", "Current legislation does not fine parents.", "Yes", "Maybe"],
        correctAnswer: 0,
        explanation: "Scare tactic."
      },
      {
        question: "Legacy accounts.",
        options: ["Unclear", "Scams exploit this uncertainty.", "Safe", "Gone"],
        correctAnswer: 1,
        explanation: "Confusion breeds fraud."
      },
      {
        question: "Official info.",
        options: ["gov.au", "TikTok", "Reddit", "Text"],
        correctAnswer: 0,
        explanation: "Source of truth."
      },
      {
        question: "Stay informed.",
        options: ["Yes", "Rules change, stay updated.", "No", "Ignore"],
        correctAnswer: 0,
        explanation: "Knowledge is defense."
      }
    ]
  }
];