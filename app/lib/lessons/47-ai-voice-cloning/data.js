export default [
  {
    id: "47-01",
    title: "The 'Hi Mum' AI Variant",
    description: "The classic family emergency scam, now with real voices.",
    questions: [
      {
        question: "You hear your son's voice on the phone crying. He says he broke his nose.",
        options: ["Panic", "Be skeptical. Scammers use 'injuries' to explain why the voice sounds slightly off.", "Send money", "Run"],
        correctAnswer: 1,
        explanation: "Claiming a broken nose or bad signal masks the imperfections in the AI voice clone."
      },
      {
        question: "How long does a scammer need to clone a voice?",
        options: ["1 hour", "3 seconds of clear audio", "1 day", "1 week"],
        correctAnswer: 1,
        explanation: "Modern AI needs very little data, often scraped from a TikTok or voicemail greeting."
      },
      {
        question: "The 'son' asks for money via Bitcoin ATM.",
        options: ["Send it", "Scam. Even if the voice is real, the payment method is the red flag.", "Hurry", "Help"],
        correctAnswer: 1,
        explanation: "Always look at the payment method. Kids don't ask for Bitcoin in emergencies."
      },
      {
        question: "They call from an unknown number.",
        options: ["Lost phone", "Suspicious. Call the known number immediately.", "New sim", "Answer"],
        correctAnswer: 1,
        explanation: "Don't accept the 'I lost my phone' excuse without verifying."
      },
      {
        question: "You ask a personal question and the line goes silent.",
        options: ["Bad signal", "The scammer is typing your question into the AI to generate an answer.", "Sad", "Crying"],
        correctAnswer: 1,
        explanation: "Latency (delay) is a sign they are generating audio in real-time."
      },
      {
        question: "Can AI mimic accents?",
        options: ["No", "Yes, perfectly", "Maybe", "Only US"],
        correctAnswer: 1,
        explanation: "AI can replicate regional accents and speech patterns."
      },
      {
        question: "Establish a family 'Safe Word'.",
        options: ["Paranoid", "Essential security. If they can't say it, hang up.", "Silly", "Hard"],
        correctAnswer: 1,
        explanation: "A secret word is the ultimate defense against voice cloning."
      },
      {
        question: "They claim to be in a 'holding cell'.",
        options: ["Scary", "Standard script to explain why they can't talk long.", "True", "Help"],
        correctAnswer: 1,
        explanation: "Limited talk time prevents you from noticing audio glitches."
      },
      {
        question: "Does the caller ID prove it's them?",
        options: ["Yes", "No, caller ID spoofing + AI voice is a deadly combo.", "Always", "Maybe"],
        correctAnswer: 1,
        explanation: "Scammers can fake the number to look like 'Mum' or 'Dad'."
      },
      {
        question: "What to do?",
        options: ["Hang up, call original number", "Pay", "Listen", "Record"],
        correctAnswer: 0,
        explanation: "Break the connection."
      }
    ]
  },
  {
    id: "47-02",
    title: "Virtual Kidnapping",
    description: "Fake screams, real ransom.",
    questions: [
      {
        question: "You receive a call with screaming audio that sounds exactly like your spouse.",
        options: ["Pay ransom", "AI voice clone. Verify their location independently.", "Panic", "Police"],
        correctAnswer: 1,
        explanation: "Scammers use AI to generate screams/pleas for help to terrify you."
      },
      {
        question: "They demand you stay on the line and do not hang up.",
        options: ["Okay", "Control tactic. They don't want you calling the 'victim' to verify safety.", "Listen", "Obey"],
        correctAnswer: 1,
        explanation: "Isolation is key. If you hang up and call your spouse, the scam fails."
      },
      {
        question: "They know your address and family names.",
        options: ["Real kidnappers", "Social engineering from Facebook/Instagram.", "Spies", "Magic"],
        correctAnswer: 1,
        explanation: "They harvest this data to make the threat credible."
      },
      {
        question: "The ransom amount is relatively low ($1k-$5k).",
        options: ["Cheap life", "Designed for fast payment via transfer.", "Deal", "Lucky"],
        correctAnswer: 1,
        explanation: "Virtual kidnappers want quick cash, not a police standoff."
      },
      {
        question: "You hear police sirens in the background audio.",
        options: ["Real", "Sound effects played to increase stress.", "Help", "Close"],
        correctAnswer: 1,
        explanation: "They use soundboards to create an atmosphere of chaos."
      },
      {
        question: "The 'victim' is actually safe at work.",
        options: ["Relief", "Most likely outcome. It's a psychological trick.", "Confused", "Lucky"],
        correctAnswer: 1,
        explanation: "Physical kidnapping is rare; virtual kidnapping is common."
      },
      {
        question: "How to verify?",
        options: ["Ask scammer", "Track their phone location (Find My iPhone) or call their work.", "Pay", "Wait"],
        correctAnswer: 1,
        explanation: "Use technology to locate them silently."
      },
      {
        question: "They demand payment via gift cards.",
        options: ["Pay", "Kidnappers don't take iTunes cards. Scam.", "Okay", "Fast"],
        correctAnswer: 1,
        explanation: "Payment method is the giveaway."
      },
      {
        question: "Should you challenge them?",
        options: ["Yes, ask the AI a question only the real person knows.", "No", "Cry", "Beg"],
        correctAnswer: 0,
        explanation: "Ask: 'What did we eat for dinner last night?'"
      },
      {
        question: "Preventative measure?",
        options: ["Hide", "Set social media to private so they can't find family info.", "Run", "Delete"],
        correctAnswer: 1,
        explanation: "Limit their intel."
      }
    ]
  },
  {
    id: "47-03",
    title: "CEO & Boss Impersonation",
    description: "The boss wants a wire transfer now.",
    questions: [
      {
        question: "You get a voicemail from the CEO asking to wire $50k to a vendor.",
        options: ["Do it", "Verify. AI clones are used for 'Deepfake Vishing'.", "Boss said so", "Hurry"],
        correctAnswer: 1,
        explanation: "Voice phishing (Vishing) targets finance teams."
      },
      {
        question: "The request bypasses normal approval channels.",
        options: ["Executive override", "Red flag. Verify via internal chat/email.", "Okay", "Fast"],
        correctAnswer: 1,
        explanation: "Scammers rely on you being too scared to question the boss."
      },
      {
        question: "Where did they get the CEO's voice?",
        options: ["Meeting", "YouTube, Webinars, Podcasts, Earnings Calls.", "Spy", "Phone"],
        correctAnswer: 1,
        explanation: "Executives have hours of high-quality audio online."
      },
      {
        question: "The tone is urgent and authoritative.",
        options: ["Normal boss", "Psychological pressure to stop you thinking.", "Angry", "Rude"],
        correctAnswer: 1,
        explanation: "Urgency kills scrutiny."
      },
      {
        question: "They ask for secrecy due to a 'merger' or 'acquisition'.",
        options: ["Cool", "Common script to prevent you asking colleagues.", "Secret", "Insider"],
        correctAnswer: 1,
        explanation: "Fake confidentiality ensures you don't double-check."
      },
      {
        question: "Live phone call vs Voicemail.",
        options: ["Same", "Live is harder for AI (latency), but possible. Voicemail is easier.", "Live safer", "Voicemail safer"],
        correctAnswer: 1,
        explanation: "Voicemail is safer for scammers as it needs no interaction."
      },
      {
        question: "The bank details are new/overseas.",
        options: ["Global biz", "Laundering destination.", "New vendor", "Okay"],
        correctAnswer: 1,
        explanation: "Always verify new accounts."
      },
      {
        question: "Multi-Factor Verification.",
        options: ["Waste", "Call the CEO on their known mobile to confirm.", "Hard", "Slow"],
        correctAnswer: 1,
        explanation: "Two channels of communication prevent fraud."
      },
      {
        question: "Deepfake audio in Zoom meetings.",
        options: ["Impossible", "Possible. Scammers join with camera off and fake audio.", "Future", "Sci-fi"],
        correctAnswer: 1,
        explanation: "Audio-only participation is a risk."
      },
      {
        question: "Company policy.",
        options: ["Trust voice", "Never authorize payments on voice alone.", "Fast", "Easy"],
        correctAnswer: 1,
        explanation: "Written approval is mandatory."
      }
    ]
  },
  {
    id: "47-04",
    title: "Bank Voice ID Attacks",
    description: "Can robots bypass biometric security?",
    questions: [
      {
        question: "Does 'My voice is my password' work against AI?",
        options: ["Yes", "No, AI clones can often fool banking voice biometrics.", "Always", "100%"],
        correctAnswer: 1,
        explanation: "Researchers have proven AI can bypass these systems."
      },
      {
        question: "How do scammers get the sample to hack your bank?",
        options: ["Magic", "Spam calls recording you saying 'Yes' or 'My name is...'.", "Hacking", "Buying"],
        correctAnswer: 1,
        explanation: "They call you, stay silent, wait for you to speak, and record it."
      },
      {
        question: "Should you disable Voice ID?",
        options: ["Maybe", "Consider using App/2FA instead if you are a high-value target.", "No", "Never"],
        correctAnswer: 1,
        explanation: "It is convenient but has vulnerabilities."
      },
      {
        question: "The 'Yes' scam.",
        options: ["Myth", "They record you saying 'Yes' to authorize charges.", "Real", "Scary"],
        correctAnswer: 1,
        explanation: "Simple affirmations can be spliced into fake authorizations."
      },
      {
        question: "Banks detecting AI.",
        options: ["Perfect", "An arms race. Detection is good, but AI is getting better.", "No", "Yes"],
        correctAnswer: 1,
        explanation: "It is a constant battle between generation and detection."
      },
      {
        question: "What adds security to Voice ID?",
        options: ["Loud volume", "Being asked random dynamic questions, not just a passphrase.", "Whispering", "Yelling"],
        correctAnswer: 1,
        explanation: "Dynamic conversation is harder to clone live."
      },
      {
        question: "Protecting your voicemail greeting.",
        options: ["Use name", "Use default greeting. Don't record your own name/voice.", "Long message", "Funny"],
        correctAnswer: 1,
        explanation: "Your voicemail is a free sample of your voice for scammers."
      },
      {
        question: "If your bank calls and asks for your voice phrase.",
        options: ["Say it", "Hang up. Banks don't call YOU to check voice ID.", "Verify", "Trust"],
        correctAnswer: 1,
        explanation: "They only check voice ID when YOU call THEM."
      },
      {
        question: "Synthesized vs Replayed.",
        options: ["Same", "Replay attacks play your real voice. Synthesis creates new words.", "Different", "Audio"],
        correctAnswer: 1,
        explanation: "AI synthesis is dangerous because it can say anything."
      },
      {
        question: "Best defense?",
        options: ["Silence", "Monitor accounts + App 2FA", "No phone", "Cash"],
        correctAnswer: 1,
        explanation: "Layered security."
      }
    ]
  },
  {
    id: "47-05",
    title: "Romance & Catfish AI Audio",
    description: "The lover you've never met has a sexy voice.",
    questions: [
      {
        question: "Your online date sends voice notes but refuses video calls.",
        options: ["Shy", "Using AI text-to-speech to create a fake persona.", "Busy", "Real"],
        correctAnswer: 1,
        explanation: "Scammers use AI to generate attractive voices for text interactions."
      },
      {
        question: "The voice sounds generic or like a movie trailer.",
        options: ["Cool", "Stock AI voice model.", "Actor", "Rich"],
        correctAnswer: 1,
        explanation: "If they sound like a GPS navigation system, it's AI."
      },
      {
        question: "They can't pronounce local town names correctly.",
        options: ["Foreign", "AI limitation with local slang/places.", "New", "Cute"],
        correctAnswer: 1,
        explanation: "AI models often fail on Australian place names (e.g., 'Cairns', 'Coogee')."
      },
      {
        question: "They send voice messages instead of typing.",
        options: ["Lazy", "Building intimacy faster than text.", "Personal", "Nice"],
        correctAnswer: 1,
        explanation: "Voice notes create a false sense of closeness."
      },
      {
        question: "You ask them to sing or hum.",
        options: ["They do it", "They refuse. AI struggles with melody/singing.", "Embarrassed", "Bad singer"],
        correctAnswer: 1,
        explanation: "Complex vocal tasks trip up AI."
      },
      {
        question: "The background noise cuts out instantly when they stop speaking.",
        options: ["Quiet room", "Artificial gating. AI generates silence between words.", "Good mic", "Studio"],
        correctAnswer: 1,
        explanation: "Real recordings have consistent room tone."
      },
      {
        question: "They claim to be from the UK but sound American.",
        options: ["Traveler", "Scammer chose the wrong voice model.", "Accent", "Mixed"],
        correctAnswer: 1,
        explanation: "Inconsistencies reveal the lie."
      },
      {
        question: "Why use AI voice in romance?",
        options: ["Fun", "To mask their real gender/accent/location.", "Cool", "Tech"],
        correctAnswer: 1,
        explanation: "A male scammer in Nigeria can sound like a female in Sydney."
      },
      {
        question: "Live voice changers.",
        options: ["Toy", "Real-time AI can change gender/age on calls.", "Game", "Fun"],
        correctAnswer: 1,
        explanation: "Real-time disguises are becoming common."
      },
      {
        question: "Video call verification.",
        options: ["Essential", "The only way to be sure.", "Optional", "Later"],
        correctAnswer: 1,
        explanation: "Don't send money until you see the face move and talk in sync."
      }
    ]
  },
  {
    id: "47-06",
    title: "Customer Service Impersonation",
    description: "The support agent is a bot.",
    questions: [
      {
        question: "You call a 'Support Number' and the agent sounds incredibly realistic but repetitive.",
        options: ["Good training", "AI conversational bot designed to keep you on the line.", "Human", "Script"],
        correctAnswer: 1,
        explanation: "Scammers use AI agents to scale their operations."
      },
      {
        question: "The AI agent asks for your credit card to 'verify ID'.",
        options: ["Give", "Scam. AI harvesting data.", "Verify", "Okay"],
        correctAnswer: 1,
        explanation: "Automated theft."
      },
      {
        question: "Latency (delay) in responses.",
        options: ["Satellite", "Processing time for the AI to generate a reply.", "Slow", "Distance"],
        correctAnswer: 1,
        explanation: "Unnatural pauses are a clue."
      },
      {
        question: "Interrupting the agent.",
        options: ["Rude", "Test. AI often keeps talking or resets weirdly if interrupted.", "Listen", "Wait"],
        correctAnswer: 1,
        explanation: "Humans react naturally to interruptions; bots glitch."
      },
      {
        question: "They misinterpret emotional tone.",
        options: ["Bad service", "AI lacks empathy detection.", "Rude", "Robot"],
        correctAnswer: 1,
        explanation: "If you are angry and they sound cheerful, it's likely a bot."
      },
      {
        question: "Search engines promoting fake numbers.",
        options: ["Safe", "Scammers use SEO to rank fake AI helplines.", "Google", "Bing"],
        correctAnswer: 1,
        explanation: "Don't trust the first number you see on Google."
      },
      {
        question: "The AI transfers you to a 'Senior Manager' (Human Scammer).",
        options: ["Escalation", "The 'Closer'. The AI qualifies the victim first.", "Help", "Good"],
        correctAnswer: 1,
        explanation: "AI filters out skeptical people; humans close the deal."
      },
      {
        question: "24/7 Availability.",
        options: ["Great", "Scam centers use AI to run 24/7 without staff.", "Service", "Good"],
        correctAnswer: 1,
        explanation: "Scale and availability."
      },
      {
        question: "They ask you to download AnyDesk.",
        options: ["Download", "Scam. Standard tech support script.", "Help", "Fix"],
        correctAnswer: 1,
        explanation: "The goal is remote access."
      },
      {
        question: "Verify the number.",
        options: ["How?", "Go to the official website/app and find contact info there.", "Guess", "Trust"],
        correctAnswer: 1,
        explanation: "Source of truth."
      }
    ]
  },
  {
    id: "47-07",
    title: "Political & News Voice Fakes",
    description: "Fake news for your ears.",
    questions: [
      {
        question: "Audio clip of a politician admitting to a crime goes viral.",
        options: ["Share", "Check source. Audio deepfakes are used for disinformation.", "True", "Shock"],
        correctAnswer: 1,
        explanation: "AI can make politicians say anything."
      },
      {
        question: "Robocall from the Prime Minister telling you not to vote.",
        options: ["Obey", "Voter suppression scam using AI voice.", "Listen", "Vote"],
        correctAnswer: 1,
        explanation: "Happened in the US (Biden fake call). Coming to other elections."
      },
      {
        question: "The audio has no video proof.",
        options: ["Suspicious", "Audio is easier to fake than video. Be skeptical.", "Radio", "Secret"],
        correctAnswer: 1,
        explanation: "Audio-only leaks are high risk for fakes."
      },
      {
        question: "Investment advice from a 'Celebrity' voice note.",
        options: ["Invest", "Scam. Using authority to sell crypto.", "Rich", "Tips"],
        correctAnswer: 1,
        explanation: "Fake audio of Elon Musk/Bezos."
      },
      {
        question: "How to verify political audio?",
        options: ["Trust TikTok", "Wait for reputable news outlets to verify metadata.", "Share", "Believe"],
        correctAnswer: 1,
        explanation: "Journalists have tools to detect edits."
      },
      {
        question: "It confirms your bias perfectly.",
        options: ["True", "Confirmation bias makes you less critical of fakes.", "Good", "Right"],
        correctAnswer: 1,
        explanation: "Scammers target your existing beliefs."
      },
      {
        question: "Can audio watermarking help?",
        options: ["Yes", "Technology to embed 'fake' tags in AI audio is developing.", "No", "Maybe"],
        correctAnswer: 1,
        explanation: "C2PA standards."
      },
      {
        question: "The 'Hot Mic' moment.",
        options: ["Leak", "Common format for fake audio scandals.", "Oops", "Real"],
        correctAnswer: 1,
        explanation: "Staged 'accidental' recordings."
      },
      {
        question: "Share responsibility.",
        options: ["Share fast", "Don't share unverified sensational audio.", "Viral", "Post"],
        correctAnswer: 1,
        explanation: "Stop the spread."
      },
      {
        question: "Who creates these?",
        options: ["Pranksters", "State actors/Scammers aiming to destabilize.", "Kids", "TV"],
        correctAnswer: 1,
        explanation: "Disinformation warfare."
      }
    ]
  },
  {
    id: "47-08",
    title: "Social Engineering & Data Scraping",
    description: "How they get your voice.",
    questions: [
      {
        question: "Is your TikTok/Instagram public?",
        options: ["Yes", "Your voice is available for cloning.", "No", "Private"],
        correctAnswer: 1,
        explanation: "Public videos are training data."
      },
      {
        question: "Telephone surveys.",
        options: ["Helpful", "Risk. They may be recording your answers to clone you.", "Answer", "Talk"],
        correctAnswer: 1,
        explanation: "Don't talk to strangers."
      },
      {
        question: "The 'Can you hear me?' scam.",
        options: ["Yes", "Don't answer. They record your 'Yes' for fraud.", "What?", "Hang up"],
        correctAnswer: 1,
        explanation: "They need affirmative words."
      },
      {
        question: "Voice biometrics data breach.",
        options: ["Scary", "If a bank/gov database is hacked, your voice print is stolen.", "Rare", "Fine"],
        correctAnswer: 1,
        explanation: "Unlike a password, you can't change your voice."
      },
      {
        question: "Scraping voicemail.",
        options: ["Possible", "Yes, hacking voicemail inboxes to get samples.", "No", "Hard"],
        correctAnswer: 1,
        explanation: "Default PINs allow hackers access."
      },
      {
        question: "Do you talk loudly in public?",
        options: ["Yes", "Someone could record you nearby.", "No", "Quiet"],
        correctAnswer: 1,
        explanation: "Physical proximity recording."
      },
      {
        question: "Using AI voice changers for fun.",
        options: ["Fun", "Uploading your voice to random apps gives them the data.", "Game", "App"],
        correctAnswer: 1,
        explanation: "Read the Terms of Service."
      },
      {
        question: "Corporate videos.",
        options: ["Work", "High quality audio of executives for CEO fraud.", "Safe", "Job"],
        correctAnswer: 1,
        explanation: "Executives are high risk."
      },
      {
        question: "How to protect your voice?",
        options: ["Silence", "Limit public posts, use non-biometric security.", "Whisper", "Mask"],
        correctAnswer: 1,
        explanation: "Reduce exposure."
      },
      {
        question: "Opt-out.",
        options: ["Yes", "Remove your voice from AI training datasets if possible.", "No", "Hard"],
        correctAnswer: 1,
        explanation: "Privacy rights."
      }
    ]
  },
  {
    id: "47-09",
    title: "Legal & Ethical Issues",
    description: "Is this even legal?",
    questions: [
      {
        question: "Is voice cloning illegal?",
        options: ["Yes", "Not the tech itself, but using it for fraud is.", "No", "Maybe"],
        correctAnswer: 1,
        explanation: "Tools are legal; fraud is not."
      },
      {
        question: "Can you copyright your voice?",
        options: ["Yes", "Complex legal area. 'Right of Publicity' applies in some places.", "No", "Maybe"],
        correctAnswer: 1,
        explanation: "Laws are lagging behind tech."
      },
      {
        question: "Deepfake disclosure laws.",
        options: ["Exist", "Some regions require labeling AI content.", "None", "Future"],
        correctAnswer: 1,
        explanation: "Regulation is increasing."
      },
      {
        question: "Can audio be used in court?",
        options: ["Yes", "Increasingly challenged due to deepfake potential.", "No", "Always"],
        correctAnswer: 1,
        explanation: "The 'Liar's Dividend' - people claiming real evidence is fake."
      },
      {
        question: "Consent.",
        options: ["Required", "Ethical AI requires consent to clone.", "Optional", "No"],
        correctAnswer: 1,
        explanation: "Scammers ignore consent."
      },
      {
        question: "Platform responsibility.",
        options: ["None", "Platforms are pressured to detect/ban deepfakes.", "Total", "Users"],
        correctAnswer: 1,
        explanation: "Social media must police this."
      },
      {
        question: "Victim support.",
        options: ["IDCARE", "Police", "eSafety", "All of above"],
        correctAnswer: 3,
        explanation: "Help is available."
      },
      {
        question: "Identity theft classification.",
        options: ["Yes", "Voice cloning is a form of biometric ID theft.", "No", "Maybe"],
        correctAnswer: 1,
        explanation: "It steals a biological trait."
      },
      {
        question: "Insurance coverage.",
        options: ["Yes", "Cyber insurance may cover social engineering losses.", "No", "Rare"],
        correctAnswer: 1,
        explanation: "Check your policy."
      },
      {
        question: "Future outlook.",
        options: ["Better", "Will get harder to detect before it gets easier.", "Gone", "Safe"],
        correctAnswer: 1,
        explanation: "The tech is improving fast."
      }
    ]
  },
  {
    id: "47-10",
    title: "Detection & Prevention Summary",
    description: "The ultimate checklist.",
    questions: [
      {
        question: "The #1 Defense against family scams.",
        options: ["Gun", "Safe Word / Code Word", "Phone", "Police"],
        correctAnswer: 1,
        explanation: "Simple and effective."
      },
      {
        question: "Call back protocol.",
        options: ["Always", "Hang up and call their known number.", "Never", "Text"],
        correctAnswer: 1,
        explanation: "Verify the channel."
      },
      {
        question: "Listen for...",
        options: ["Breath", "Robotic monotone, clipping, strange pauses.", "Loudness", "Accent"],
        correctAnswer: 1,
        explanation: "Audio artifacts."
      },
      {
        question: "Question harder.",
        options: ["Yes", "Ask personal info only they know.", "No", "Rude"],
        correctAnswer: 1,
        explanation: "Test the AI's knowledge base."
      },
      {
        question: "Payment red flags.",
        options: ["Card", "Crypto, Gift Cards, Urgent Wires.", "Cash", "Cheque"],
        correctAnswer: 1,
        explanation: "Follow the money."
      },
      {
        question: "Privacy settings.",
        options: ["Open", "Locked down to friends only.", "Public", "Shared"],
        correctAnswer: 1,
        explanation: "Starve the AI of data."
      },
      {
        question: "Skepticism.",
        options: ["Healthy", "Believe everything", "Cynical", "Trust"],
        correctAnswer: 0,
        explanation: "Trust but verify."
      },
      {
        question: "Report suspicious calls.",
        options: ["Scamwatch", "Ignore", "Delete", "Mum"],
        correctAnswer: 0,
        explanation: "Data helps fight crime."
      },
      {
        question: "Educate family.",
        options: ["Yes", "Talk about AI scams at dinner.", "No", "Boring"],
        correctAnswer: 1,
        explanation: "Herd immunity."
      },
      {
        question: "Don't trust Caller ID.",
        options: ["True", "False", "Sometimes", "Maybe"],
        correctAnswer: 0,
        explanation: "It is easily faked."
      }
    ]
  }
];