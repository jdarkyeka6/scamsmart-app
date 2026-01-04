export default [
  {
    id: "49-01",
    title: "AI Fake News Farms",
    description: "Clickbait websites written by robots.",
    questions: [
      {
        question: "You see a shocking headline: 'Prime Minister Arrested'. The image looks slightly glossy.",
        options: ["Share it", "Check source. Likely AI-generated clickbait.", "Real news", "Panic"],
        correctAnswer: 1,
        explanation: "AI generates thousands of fake articles daily to farm ad revenue."
      },
      {
        question: "The website is full of ads and has a generic name like 'GlobalNews24.xyz'.",
        options: ["Credible", "Content Farm designed for ads, not truth.", "BBC", "Official"],
        correctAnswer: 1,
        explanation: "These sites exist solely to show ads, not report facts."
      },
      {
        question: "The article text repeats itself or stops in the middle of a sentence.",
        options: ["Bad editor", "AI Hallucination / Glitch.", "Style", "Art"],
        correctAnswer: 1,
        explanation: "AI text generation often loses coherence."
      },
      {
        question: "Why create fake news sites?",
        options: ["Politics", "Ad revenue and hosting malware/crypto scams.", "Fun", "Hobby"],
        correctAnswer: 1,
        explanation: "It is a business model driven by clicks."
      },
      {
        question: "The 'Author' photo is a generic face (ThisPersonDoesNotExist).",
        options: ["Real journalist", "AI generated fake profile.", "Shy", "Stock"],
        correctAnswer: 1,
        explanation: "Fake journalists give credibility to fake stories."
      },
      {
        question: "The article promotes a 'Secret Investment' used by a celebrity.",
        options: ["Invest", "The ultimate goal of the fake news site.", "Rich", "Tips"],
        correctAnswer: 1,
        explanation: "Fake news serves as a funnel for investment scams."
      },
      {
        question: "Can AI write perfect English?",
        options: ["No", "Yes, making it harder to spot foreign scams.", "Sometimes", "Badly"],
        correctAnswer: 1,
        explanation: "Grammar mistakes are no longer a reliable scam indicator."
      },
      {
        question: "The comments section is filled with generic praise.",
        options: ["Popular", "Bot comments boosting the post.", "Fans", "Real"],
        correctAnswer: 1,
        explanation: "Dead Internet Theory: bots talking to bots."
      },
      {
        question: "How to verify?",
        options: ["Trust headline", "Cross-reference with major reputable news outlets (ABC, BBC).", "Share", "Like"],
        correctAnswer: 1,
        explanation: "If it's huge news, every channel will have it."
      },
      {
        question: "Reporting.",
        options: ["Ignore", "Report as 'False News' to the platform.", "Share", "Print"],
        correctAnswer: 1,
        explanation: "Help the algorithm learn."
      }
    ]
  },
  {
    id: "49-02",
    title: "AI Product Reviews",
    description: "Amazon is flooded with robot praise.",
    questions: [
      {
        question: "A product has 500 reviews posted on the same day.",
        options: ["Viral", "AI Bot Attack.", "Good", "Sale"],
        correctAnswer: 1,
        explanation: "Human reviews happen gradually. AI happens instantly."
      },
      {
        question: "Review starts with: 'As an AI language model...'.",
        options: ["Honest", "Lazy scammer didn't edit the ChatGPT output.", "Smart", "Bot"],
        correctAnswer: 1,
        explanation: "A smoking gun that the review is fake."
      },
      {
        question: "The review describes the wrong product (e.g. shoes instead of headphones).",
        options: ["Mistake", "Review Hijacking / AI Error.", "Bonus", "Gift"],
        correctAnswer: 1,
        explanation: "Bots paste generic text into the wrong fields."
      },
      {
        question: "The text is vague: 'This item is good and functions well'.",
        options: ["Concise", "AI Filler text. Lacks specific details.", "Real", "Happy"],
        correctAnswer: 1,
        explanation: "Real humans mention specific pros and cons."
      },
      {
        question: "Why use AI reviews?",
        options: ["Pride", "To rank higher in search results (SEO).", "Fun", "Help"],
        correctAnswer: 1,
        explanation: "Higher star rating = More sales."
      },
      {
        question: "Negative reviews are buried.",
        options: ["Perfect item", "Manipulation. Bots upvote positive reviews.", "Good", "Nice"],
        correctAnswer: 1,
        explanation: "Crowding out the truth."
      },
      {
        question: "Tools to spot fakes.",
        options: ["None", "Fakespot / ReviewMeta.", "Eyes", "Guess"],
        correctAnswer: 1,
        explanation: "Browser extensions can analyze review patterns."
      },
      {
        question: "Usernames are random (User123456).",
        options: ["Privacy", "Bot account generation.", "Real", "Name"],
        correctAnswer: 1,
        explanation: "Scripted account creation."
      },
      {
        question: "Trust 'Amazon's Choice'?",
        options: ["Yes", "No, it is based on sales volume, which can be faked.", "Always", "Maybe"],
        correctAnswer: 1,
        explanation: "Badges can be gamed."
      },
      {
        question: "What is 'Brushing'?",
        options: ["Cleaning", "Sending fake packages to generate verified reviews.", "Painting", "Art"],
        correctAnswer: 1,
        explanation: "Physical component of review fraud."
      }
    ]
  },
  {
    id: "49-03",
    title: "Fake Profiles (GANs)",
    description: "This Person Does Not Exist.",
    questions: [
      {
        question: "What is a GAN?",
        options: ["Gun", "Generative Adversarial Network (AI that makes faces).", "Game", "Network"],
        correctAnswer: 1,
        explanation: "Technology used to create realistic human faces."
      },
      {
        question: "Look at the ears.",
        options: ["Why", "AI often makes mismatched or blurry ears.", "Nice", "Listen"],
        correctAnswer: 1,
        explanation: "Symmetry issues are common in AI faces."
      },
      {
        question: "The background is surreal or melting.",
        options: ["Art", "AI focuses on the face, failing the background.", "Room", "Dream"],
        correctAnswer: 1,
        explanation: "Logical inconsistencies in the setting."
      },
      {
        question: "Eyes are always centered.",
        options: ["Stare", "StyleGAN aligns eyes to the exact center.", "Look", "Real"],
        correctAnswer: 1,
        explanation: "Uniform alignment is a tell."
      },
      {
        question: "Used for?",
        options: ["Fun", "Fake LinkedIn profiles, Romance Scams, Twitter Bots.", "Movies", "ID"],
        correctAnswer: 1,
        explanation: "Creating an army of fake people."
      },
      {
        question: "Reverse Image Search results?",
        options: ["Found", "Zero results. The face is unique.", "Many", "Social"],
        correctAnswer: 1,
        explanation: "Because it was generated, it appears nowhere else."
      },
      {
        question: "Eyeglasses issues.",
        options: ["Style", "Frames often disappear or mismatch.", "Vision", "Lens"],
        correctAnswer: 1,
        explanation: "AI struggles with object continuity."
      },
      {
        question: "LinkedIn Lead Gen bots.",
        options: ["Recruiter", "Fake attractive profiles to phish info.", "Job", "Work"],
        correctAnswer: 1,
        explanation: "Social engineering entry point."
      },
      {
        question: "Hair edges.",
        options: ["Style", "Often blurry or merging with background.", "Cut", "Dye"],
        correctAnswer: 1,
        explanation: "Fine details blur."
      },
      {
        question: "Trust verification.",
        options: ["Photo", "Video call / ID Check.", "Text", "Profile"],
        correctAnswer: 1,
        explanation: "A static photo proves nothing."
      }
    ]
  },
  {
    id: "49-04",
    title: "AI Chatbot Scams",
    description: "Romance on autopilot.",
    questions: [
      {
        question: "You are chatting 24/7 with a match.",
        options: ["Love", "AI Chatbot (LLM) scaling the scam.", "Dedicated", "Real"],
        correctAnswer: 1,
        explanation: "AI allows one scammer to chat with 1000 victims simultaneously."
      },
      {
        question: "The conversation is surprisingly good.",
        options: ["Soulmate", "Modern LLMs mimic empathy well.", "Real", "Friend"],
        correctAnswer: 1,
        explanation: "It remembers facts and mirrors your tone."
      },
      {
        question: "It eventually pivots to money.",
        options: ["Need", "The goal of the bot.", "Help", "Loan"],
        correctAnswer: 1,
        explanation: "The purpose is always financial extraction."
      },
      {
        question: "Sending AI generated selfies.",
        options: ["Real", "The bot generates photos to match the chat context.", "Nice", "Pic"],
        correctAnswer: 1,
        explanation: "Dynamic content generation."
      },
      {
        question: "Trip it up.",
        options: ["Flirt", "Ask logic puzzles or nonsensical questions.", "Chat", "Talk"],
        correctAnswer: 1,
        explanation: "Test the AI's reasoning capabilities."
      },
      {
        question: "Paid 'AI Girlfriends'.",
        options: ["Service", "Apps charging for intimacy with a bot.", "Real", "Date"],
        correctAnswer: 1,
        explanation: "Monetized loneliness."
      },
      {
        question: "Pig Butchering integration.",
        options: ["Manual", "AI handles the grooming phase.", "Farm", "Work"],
        correctAnswer: 1,
        explanation: "Efficiency for criminal gangs."
      },
      {
        question: "Language is overly formal.",
        options: ["Educated", "AI training bias (RLHF).", "Smart", "Writer"],
        correctAnswer: 1,
        explanation: "It sounds like a helpful assistant."
      },
      {
        question: "Refusal to video call.",
        options: ["Shy", "Bot has no physical body.", "Busy", "Later"],
        correctAnswer: 1,
        explanation: "The ultimate limitation."
      },
      {
        question: "Privacy risk.",
        options: ["Safe", "You are feeding personal data to a server.", "Private", "Secure"],
        correctAnswer: 1,
        explanation: "Data harvesting via intimacy."
      }
    ]
  },
  {
    id: "49-05",
    title: "AI Art & NFT Scams",
    description: "Selling generated JPEGs.",
    questions: [
      {
        question: "Artist selling 'Original' digital art.",
        options: ["Buy", "Check if it's low-effort AI generation.", "Support", "Art"],
        correctAnswer: 1,
        explanation: "Scammers flood marketplaces with AI images claiming they are hand-drawn."
      },
      {
        question: "Look at the hands.",
        options: ["Why", "AI often gives people 6 fingers.", "Nice", "Draw"],
        correctAnswer: 1,
        explanation: "Hands are the hardest thing for AI to draw."
      },
      {
        question: "Text in the image.",
        options: ["Read", "Gibberish/Alien symbols (AI struggle).", "Font", "Style"],
        correctAnswer: 1,
        explanation: "AI is bad at spelling inside images."
      },
      {
        question: "NFT Rug Pulls.",
        options: ["Invest", "AI used to generate 10,000 images for a fake project.", "Win", "Crypto"],
        correctAnswer: 1,
        explanation: "Rapid generation allows quick scam launches."
      },
      {
        question: "Commission scams.",
        options: ["Hire", "You pay for art, they generate it in 5 seconds.", "Draw", "Job"],
        correctAnswer: 1,
        explanation: "Charging human prices for machine work."
      },
      {
        question: "Copyright.",
        options: ["Owned", "AI art generally cannot be copyrighted (US/Current Law).", "Artist", "Mine"],
        correctAnswer: 1,
        explanation: "You are buying public domain images."
      },
      {
        question: "Fake portfolios.",
        options: ["Impressive", "Stolen or AI filled.", "Hire", "Good"],
        correctAnswer: 1,
        explanation: "Reviewing work history."
      },
      {
        question: "Style inconsistency.",
        options: ["Versatile", "AI prompting varies wildly.", "Good", "Art"],
        correctAnswer: 1,
        explanation: "Real artists have a style."
      },
      {
        question: "Support real artists.",
        options: ["Yes", "Verify process/sketches.", "No", "Ignore"],
        correctAnswer: 0,
        explanation: "Ask for work-in-progress shots."
      },
      {
        question: "Is AI art bad?",
        options: ["No", "Not inherently, but selling it as 'human made' is fraud.", "Yes", "Maybe"],
        correctAnswer: 1,
        explanation: "The scam is the deception."
      }
    ]
  },
  {
    id: "49-06",
    title: "AI Code & Malware",
    description: "Script kiddies getting smarter.",
    questions: [
      {
        question: "Can ChatGPT write viruses?",
        options: ["No", "Yes, criminals jailbreak AI to write malware.", "Maybe", "Hard"],
        correctAnswer: 1,
        explanation: "AI lowers the barrier to entry for cybercrime."
      },
      {
        question: "Polymorphic Malware.",
        options: ["Shape", "Virus code that changes constantly using AI to avoid detection.", "Sick", "Bad"],
        correctAnswer: 1,
        explanation: "AI rewrites the code so antivirus can't recognize the signature."
      },
      {
        question: "Phishing emails.",
        options: ["Bad grammar", "Perfect grammar and personalized via AI.", "Spam", "Junk"],
        correctAnswer: 1,
        explanation: "AI writes convincing business emails."
      },
      {
        question: "Fake App generators.",
        options: ["Store", "AI coding fake apps rapidly.", "Download", "Install"],
        correctAnswer: 1,
        explanation: "Flooding app stores with shovelware."
      },
      {
        question: "Social Engineering scripts.",
        options: ["Write", "AI generates persuasive scripts for scammers.", "Talk", "Call"],
        correctAnswer: 1,
        explanation: "Giving scammers the best words to say."
      },
      {
        question: "Detection.",
        options: ["Easy", "Harder. We need AI defense to fight AI offense.", "Simple", "Done"],
        correctAnswer: 1,
        explanation: "Cybersecurity arms race."
      },
      {
        question: "Password guessing.",
        options: ["Random", "AI analyzes your social data to guess passwords smart.", "Lucky", "Hack"],
        correctAnswer: 1,
        explanation: "Intelligent brute forcing."
      },
      {
        question: "Deepfake injection in video KYC.",
        options: ["Hack", "Feeding AI video into ID checks.", "Pass", "Login"],
        correctAnswer: 1,
        explanation: "Bypassing bank security."
      },
      {
        question: "Is AI only for bad guys?",
        options: ["Yes", "No, it helps defenders too.", "Maybe", "Always"],
        correctAnswer: 1,
        explanation: "It is a tool for both sides."
      },
      {
        question: "Update devices.",
        options: ["Later", "Essential to patch vulnerabilities.", "No", "Wait"],
        correctAnswer: 1,
        explanation: "Patch management."
      }
    ]
  },
  {
    id: "49-07",
    title: "AI Hallucinations & Misinformation",
    description: "When the robot lies confidently.",
    questions: [
      {
        question: "What is 'Hallucination'?",
        options: ["Drugs", "AI confidently stating facts that are wrong.", "Dream", "Sleep"],
        correctAnswer: 1,
        explanation: "AI predicts words, it doesn't know facts."
      },
      {
        question: "Fake Legal Citations.",
        options: ["Lawyer", "ChatGPT inventing court cases that don't exist.", "Real", "Book"],
        correctAnswer: 1,
        explanation: "Lawyers have been fined for using ChatGPT in court."
      },
      {
        question: "Health advice.",
        options: ["Doctor", "Dangerous. AI can give fatal advice.", "Help", "Cure"],
        correctAnswer: 1,
        explanation: "Don't trust AI for medical diagnosis."
      },
      {
        question: "Scam 'facts'.",
        options: ["True", "Scammers use AI to generate fake stats to support their lie.", "Data", "Graph"],
        correctAnswer: 1,
        explanation: "Fabricating evidence."
      },
      {
        question: "Bias.",
        options: ["None", "AI reflects the bias of the internet.", "Fair", "Neutral"],
        correctAnswer: 1,
        explanation: "It can be racist/sexist."
      },
      {
        question: "Verification.",
        options: ["Trust", "Always verify AI output with primary sources.", "Copy", "Paste"],
        correctAnswer: 1,
        explanation: "You are the editor."
      },
      {
        question: "Fake history.",
        options: ["Learn", "AI rewriting events.", "Book", "School"],
        correctAnswer: 1,
        explanation: "Distorting reality."
      },
      {
        question: "Why does it happen?",
        options: ["Evil", "It's a probability engine, not a truth engine.", "Broken", "Bug"],
        correctAnswer: 1,
        explanation: "Technical limitation."
      },
      {
        question: "Can it write code with bugs?",
        options: ["No", "Yes, insecure code.", "Perfect", "Clean"],
        correctAnswer: 1,
        explanation: "Copying AI code can introduce vulnerabilities."
      },
      {
        question: "Responsibility.",
        options: ["User", "AI", "Nobody", "Server"],
        correctAnswer: 0,
        explanation: "You are responsible for what you publish/use."
      }
    ]
  },
  {
    id: "49-08",
    title: "Social Media Bots (Dead Internet)",
    description: "Are you arguing with a script?",
    questions: [
      {
        question: "Dead Internet Theory.",
        options: ["Zombie", "Idea that most internet traffic is bots.", "Slow", "Off"],
        correctAnswer: 1,
        explanation: "A growing percentage of content is AI generated."
      },
      {
        question: "Bot comments.",
        options: ["Real", "Generic phrases like 'Great post!', 'DM me'.", "Fan", "Hater"],
        correctAnswer: 1,
        explanation: "Engagement farming."
      },
      {
        question: "Influence operations.",
        options: ["Vote", "State actors using bot farms to sway opinion.", "Real", "News"],
        correctAnswer: 1,
        explanation: "Political interference."
      },
      {
        question: "Twitter/X Blue Ticks.",
        options: ["Verified", "Anyone can buy them now, including bot farms.", "Real", "Person"],
        correctAnswer: 1,
        explanation: "Verification doesn't mean human."
      },
      {
        question: "Reply guys.",
        options: ["Men", "AI bots replying to every viral tweet to sell crypto.", "Fans", "Help"],
        correctAnswer: 1,
        explanation: "Spam automation."
      },
      {
        question: "How to spot?",
        options: ["Profile", "Check creation date, post history (repetitive).", "Photo", "Name"],
        correctAnswer: 1,
        explanation: "Patterns reveal the bot."
      },
      {
        question: "Why do they exist?",
        options: ["Fun", "To promote scams, sell products, or influence politics.", "Art", "Code"],
        correctAnswer: 1,
        explanation: "Economic or political gain."
      },
      {
        question: "Don't engage.",
        options: ["Argue", "Blocking is better. Engagement boosts them.", "Reply", "Fight"],
        correctAnswer: 1,
        explanation: "Starve the algorithm."
      },
      {
        question: "Platform incentives.",
        options: ["Fix", "Platforms often ignore bots as they inflate user numbers.", "Ban", "Stop"],
        correctAnswer: 1,
        explanation: "Conflict of interest."
      },
      {
        question: "Future.",
        options: ["Human", "More AI content.", "Less", "Gone"],
        correctAnswer: 1,
        explanation: "The flood is increasing."
      }
    ]
  },
  {
    id: "49-09",
    title: "AI Detection Tools",
    description: "Can we catch them?",
    questions: [
      {
        question: "GPTZero / Turnitin.",
        options: ["Game", "Tools to detect AI text.", "Car", "Spin"],
        correctAnswer: 1,
        explanation: "Academic integrity tools."
      },
      {
        question: "Are they accurate?",
        options: ["100%", "No, false positives exist.", "Always", "Perfect"],
        correctAnswer: 1,
        explanation: "Innocent people can be accused."
      },
      {
        question: "Watermarking.",
        options: ["Wet", "Embedding invisible codes in AI content.", "Dry", "Mark"],
        correctAnswer: 1,
        explanation: "Future standard for provenance."
      },
      {
        question: "Metadata analysis.",
        options: ["Data", "Checking file history.", "Phone", "Photo"],
        correctAnswer: 1,
        explanation: "Digital forensics."
      },
      {
        question: "Human intuition.",
        options: ["Useless", "Still valuable. Does it 'feel' off?", "Best", "Only"],
        correctAnswer: 1,
        explanation: "Trust your gut."
      },
      {
        question: "Reverse Image Search.",
        options: ["Tool", "Helps find source, or lack thereof.", "Google", "Bing"],
        correctAnswer: 1,
        explanation: "If it doesn't exist anywhere else, it might be AI."
      },
      {
        question: "Hands & Text.",
        options: ["Look", "Visual checks for AI errors.", "Hide", "Ignore"],
        correctAnswer: 1,
        explanation: "The current weak spots."
      },
      {
        question: "Prompt injection.",
        options: ["Hack", "Tricking the AI to reveal it is an AI.", "Needle", "Shot"],
        correctAnswer: 1,
        explanation: "Ignore previous instructions."
      },
      {
        question: "Platform labels.",
        options: ["Trust", "Look for 'AI Generated' tags.", "Ignore", "Small"],
        correctAnswer: 1,
        explanation: "Transparency."
      },
      {
        question: "Arms race.",
        options: ["War", "Continuous battle between generators and detectors.", "Peace", "End"],
        correctAnswer: 1,
        explanation: "Ongoing struggle."
      }
    ]
  },
  {
    id: "49-10",
    title: "Ethics & Future",
    description: "Where is this going?",
    questions: [
      {
        question: "Copyright infringement.",
        options: ["Legal", "AI trains on stolen artist data.", "Fine", "Good"],
        correctAnswer: 1,
        explanation: "Major lawsuits pending."
      },
      {
        question: "Job displacement.",
        options: ["Work", "Scammers replacing human scammers with AI.", "Good", "Bad"],
        correctAnswer: 1,
        explanation: "Automation of crime."
      },
      {
        question: "Bias amplification.",
        options: ["Fair", "AI reinforcing stereotypes.", "Good", "Neutral"],
        correctAnswer: 1,
        explanation: "Societal harm."
      },
      {
        question: "Regulation.",
        options: ["Needed", "EU AI Act etc.", "No", "Free"],
        correctAnswer: 1,
        explanation: "Governments stepping in."
      },
      {
        question: "Deepfake porn laws.",
        options: ["Legal", "Being criminalized globally.", "Okay", "Art"],
        correctAnswer: 1,
        explanation: "Protecting victims."
      },
      {
        question: "Truth decay.",
        options: ["Problem", "Erosion of shared reality.", "Good", "Fix"],
        correctAnswer: 1,
        explanation: "Nobody believes anything."
      },
      {
        question: "Open Source vs Closed.",
        options: ["Open", "Uncensored models allow unrestricted scam generation.", "Closed", "Safe"],
        correctAnswer: 1,
        explanation: "Safety guardrails removed."
      },
      {
        question: "Education.",
        options: ["Key", "Teaching literacy.", "Boring", "School"],
        correctAnswer: 1,
        explanation: "Prevention."
      },
      {
        question: "Identity.",
        options: ["Verified", "Move to digital IDs to prove humanity.", "Anon", "Fake"],
        correctAnswer: 1,
        explanation: "World ID / Proof of Personhood."
      },
      {
        question: "Optimism.",
        options: ["Yes", "Tech can solve problems too.", "No", "Doom"],
        correctAnswer: 1,
        explanation: "Balanced view."
      }
    ]
  }
];