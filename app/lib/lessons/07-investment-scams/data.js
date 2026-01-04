export default [
  {
    id: "07-01",
    title: "Too Good To Be True",
    description: "Identifying the hallmarks of a fake investment opportunity.",
    questions: [
      {
        question: "You receive a cold call from a 'Senior Broker' offering a 'guaranteed' 15% return per month. This is:",
        options: ["A great opportunity", "A Ponzi scheme or scam", "A standard term deposit", "A lucky break"],
        correctAnswer: 1,
        explanation: "High, guaranteed returns with 'zero risk' are the biggest red flag in investing. All real investments carry risk."
      },
      {
        question: "The broker says the offer is 'time-sensitive' and you must transfer funds TODAY to get the rate. Why?",
        options: ["Markets move fast", "To stop you from doing research", "They are helpful", "Banks close early"],
        correctAnswer: 1,
        explanation: "Scammers use urgency to bypass your critical thinking and prevent you from consulting a financial advisor."
      },
      {
        question: "You check the company's website. It looks professional, but has no physical address or phone number. Safe?",
        options: ["Yes, they are digital", "No, this is a major warning sign", "Yes, modern companies are remote", "Maybe"],
        correctAnswer: 1,
        explanation: "Legitimate financial firms must have a physical presence. Fake sites are often templates with no real contact info."
      },
      {
        question: "What is a 'Ponzi Scheme'?",
        options: ["A type of pasta", "Paying old investors with money from new investors", "A government bond", "A crypto coin"],
        correctAnswer: 1,
        explanation: "There is no real profit. The scheme collapses when new investors stop joining, and everyone loses their money."
      },
      {
        question: "The caller claims they are 'ASIC Approved' but you can't find them on the ASIC register. What does this mean?",
        options: ["The register is out of date", "They are lying", "They are international", "It doesn't matter"],
        correctAnswer: 1,
        explanation: "Scammers lie about credentials. If they aren't on the ASIC professional register, they are likely operating illegally."
      },
      {
        question: "They ask you to download 'AnyDesk' or 'TeamViewer' to help you set up the account. Should you?",
        options: ["Yes, tech support is helpful", "No, never give remote access to your device", "Yes, it speeds things up", "Only if they seem nice"],
        correctAnswer: 1,
        explanation: "Remote access software allows them to see your passwords and drain your bank accounts directly."
      },
      {
        question: "Which of these is a common 'Investment Scam' phrase?",
        options: ["Past performance is not reliable", "Risk-free returns", "Diversified portfolio", "Market volatility"],
        correctAnswer: 1,
        explanation: "Real advisors talk about risk. Scammers promise 'risk-free' wealth."
      },
      {
        question: "You see a celebrity on Facebook endorsing a new trading platform. Is it real?",
        options: ["Yes, celebrities are rich", "Likely a deepfake or fake news article", "Yes, they want to help", "Always"],
        correctAnswer: 1,
        explanation: "Scammers use deepfake videos of Elon Musk, David Koch, or news anchors to promote scams."
      },
      {
        question: "The investment requires you to recruit 3 friends to increase your 'tier'. This suggests:",
        options: ["A Pyramid Scheme", "Affiliate marketing", "Networking", "A bonus"],
        correctAnswer: 0,
        explanation: "If your profit depends on recruiting others rather than selling a product, it is a pyramid scheme."
      },
      {
        question: "They send you a 'Prospectus' that is full of spelling errors and generic stock photos. Verdict?",
        options: ["Legit", "Scam", "They are a startup", "Cost cutting"],
        correctAnswer: 1,
        explanation: "Financial documents from real firms are professionally edited. Errors indicate a hasty scam setup."
      }
    ]
  },
  {
    id: "07-02",
    title: "Fake Bonds & Term Deposits",
    description: "When scammers mimic trusted banks.",
    questions: [
      {
        question: "You search for 'best term deposit rates' on Google and click the top ad. It offers 2% higher than the big banks. Safe?",
        options: ["Yes, it's a comparison site", "Be careful, it could be a comparison site spoofing a bank", "Yes, Google checks ads", "Yes, small banks pay more"],
        correctAnswer: 1,
        explanation: "Scammers buy Google Ads to direct you to fake sites that look exactly like HSBC, commbank, or Citibank."
      },
      {
        question: "The 'Bank Manager' emails you from 'support@citibank-wealth-management.com'. Is this a real domain?",
        options: ["Yes", "No, look closely at the domain structure", "Maybe", "Yes, it says Citibank"],
        correctAnswer: 1,
        explanation: "Real banks use simple domains like 'citibank.com.au'. Long, hyphenated domains are usually fake."
      },
      {
        question: "They ask you to transfer the bond payment to a personal bank account or a different company name. Why?",
        options: ["Intermediary account", "Money mule / Scam", "Tax reasons", "Faster processing"],
        correctAnswer: 1,
        explanation: "A real bank will never ask you to transfer investment funds to a personal account or an unrelated business name."
      },
      {
        question: "The 'Prospectus' claims the bond is 'Government Guaranteed'. How can you check?",
        options: ["Trust the document", "Contact the bank directly via their official number", "Ask the caller", "Check Facebook"],
        correctAnswer: 1,
        explanation: "Hang up. Find the bank's official phone number from the back of your card or their real website and verify the offer."
      },
      {
        question: "Why do seniors often fall for bond scams?",
        options: ["They are greedy", "They are looking for safe, low-risk income", "They don't use internet", "They have no money"],
        correctAnswer: 1,
        explanation: "Scammers target retirees seeking safe returns, mimicking the 'safety' of bonds to steal life savings."
      },
      {
        question: "What is a 'comparison site' scam?",
        options: ["A site that compares shoes", "A fake site collecting your details to cold-call you with fake offers", "A legit business", "A travel site"],
        correctAnswer: 1,
        explanation: "You enter your details to 'compare rates', and minutes later a scammer calls pretending to be from a top bank."
      },
      {
        question: "Can you get money back if you transfer it to a 'mule' account?",
        options: ["Yes, easily", "Very difficult, as the mule moves it instantly", "Yes, banks refund everything", "Yes, the mule pays"],
        correctAnswer: 1,
        explanation: "Once funds hit a mule account, they are laundered into crypto or overseas accounts within minutes."
      },
      {
        question: "The document is password protected. The broker gives you the password. Why?",
        options: ["Security", "To make it feel exclusive and professional", "To hide viruses", "Standard practice"],
        correctAnswer: 1,
        explanation: "It adds a layer of false legitimacy ('security theatre') to make you trust the document."
      },
      {
        question: "You notice the BSB number belongs to a different bank than the one they claim to represent. Red flag?",
        options: ["No, banks share BSBs", "Yes, HUGE red flag", "Maybe they merged", "It's fine"],
        correctAnswer: 1,
        explanation: "If you are buying a bond from 'Bank A', the payment details should not be for 'Bank B'."
      },
      {
        question: "The offer is only available to 'sophisticated investors' but they don't ask for proof of your assets. Why?",
        options: ["They trust you", "They are skipping compliance laws (Scam)", "It's a loophole", "Paperwork is boring"],
        correctAnswer: 1,
        explanation: "Real sophisticated investor deals require an accountant's certificate. Scammers skip this to get your money."
      }
    ]
  },
  {
    id: "07-03",
    title: "Verify Before You Buy",
    description: "Tools and techniques to check an investment.",
    questions: [
      {
        question: "What is the 'ASIC OfferList'?",
        options: ["A list of good stocks", "A database of registered investment prospectuses", "A scam site", "A shopping list"],
        correctAnswer: 1,
        explanation: "You can check if a prospectus is lodged with ASIC on their official OfferList database."
      },
      {
        question: "The company claims to be regulated in 'St. Vincent and the Grenadines'. Does this protect you in Australia?",
        options: ["Yes, international law", "No, offshore regulation offers zero protection", "Yes, better than ASIC", "Maybe"],
        correctAnswer: 1,
        explanation: "Scammers register in loose jurisdictions. If they aren't regulated in Australia, ASIC cannot help you."
      },
      {
        question: "How can you check if a website domain was created yesterday?",
        options: ["Ask the owner", "Use a 'WHOIS' lookup tool", "Guess", "Check the copyright date"],
        correctAnswer: 1,
        explanation: "A WHOIS lookup reveals the domain age. If a '10-year-old firm' has a domain created 1 week ago, it's a scam."
      },
      {
        question: "You find reviews for the company online. They are all 5 stars and posted on the same day. Real?",
        options: ["Yes, they are popular", "No, likely fake/bought reviews", "Yes, great service", "Maybe"],
        correctAnswer: 1,
        explanation: "Scammers buy fake reviews. Look for negative reviews or 'scam' warnings."
      },
      {
        question: "What is the 'IOSCO' investor alert list?",
        options: ["A list of known international scams", "A stock market", "A crypto coin", "A bank"],
        correctAnswer: 0,
        explanation: "International regulators share data on known scams via IOSCO."
      },
      {
        question: "The broker gets angry when you ask for their AFSL (Australian Financial Services Licence) number. Reaction?",
        options: ["Apologize", "Hang up immediately", "Ask again later", "Assume they forgot"],
        correctAnswer: 1,
        explanation: "Legitimate brokers are required by law to provide their AFSL. Aggression is a defense mechanism."
      },
      {
        question: "Is a 'Press Release' on a news site proof the company is real?",
        options: ["Yes", "No, anyone can pay to publish a press release", "Yes, news is vetted", "Usually"],
        correctAnswer: 1,
        explanation: "Scammers pay for 'Sponsored Content' that looks like news articles to build credibility."
      },
      {
        question: "You reverse image search the CEO's photo and it appears on a stock photo site. Verdict?",
        options: ["They are a model", "The CEO doesn't exist (Scam)", "Coincidence", "It's a placeholder"],
        correctAnswer: 1,
        explanation: "Fake teams use stock photos. Real CEOs use their own headshots."
      },
      {
        question: "The website has broken links to 'Terms and Conditions' or 'Privacy Policy'. Signal?",
        options: ["Lazy web developer", "Scam site template", "Under construction", "Not important"],
        correctAnswer: 1,
        explanation: "Scam templates often have non-functional footer links."
      },
      {
        question: "Who should you call if you are unsure about an investment?",
        options: ["The number on the email", "Your own independent accountant or financial advisor", "A friend", "Nobody"],
        correctAnswer: 1,
        explanation: "Always seek independent third-party advice before sending large sums of money."
      }
    ]
  },
  {
    id: "07-04",
    title: "Superannuation Scams",
    description: "Protecting your retirement nest egg.",
    questions: [
      {
        question: "Someone calls offering to help you access your Superannuation early to pay off debts. Legal?",
        options: ["Yes, always", "Illegal except in severe hardship/medical grounds", "Yes, for holidays", "Yes, for cars"],
        correctAnswer: 1,
        explanation: "Early access to Super is strictly regulated. Promoters offering easy access are usually running a fee scam."
      },
      {
        question: "The promoter says they can move your Super to a 'Self-Managed Super Fund' (SMSF) to invest in crypto. Risk?",
        options: ["Low risk", "High risk of theft or non-compliant investment", "No risk", "Great idea"],
        correctAnswer: 1,
        explanation: "Scammers set up fake SMSFs to drain your retirement savings into their own pockets."
      },
      {
        question: "They ask for your TFN and Super account details 'just to check eligibility'. Do you provide them?",
        options: ["Yes", "No, never give these to cold callers", "Yes, if they are nice", "Yes, it speeds it up"],
        correctAnswer: 1,
        explanation: "They can use these details to steal your identity or consolidate your Super without consent."
      },
      {
        question: "What happens if you illegally access your Super early?",
        options: ["Nothing", "You face heavy tax penalties and lose your savings", "You get a bonus", "The government pays you"],
        correctAnswer: 1,
        explanation: "The ATO imposes severe penalties (up to 45% tax) on illegal early release."
      },
      {
        question: "A 'financial advisor' cold calls you. Is this legal in Australia?",
        options: ["Yes", "No, 'anti-hawking' laws ban unsolicited sales of financial products", "Yes, on weekends", "Maybe"],
        correctAnswer: 1,
        explanation: "It is illegal to cold call to sell financial products. If they call you out of the blue, it's likely a scam."
      },
      {
        question: "They promise you can use your Super to buy a holiday home that you can live in. True?",
        options: ["Yes", "No, 'Sole Purpose Test' means Super is only for retirement", "Yes, if you renovate it", "Yes, in summer"],
        correctAnswer: 1,
        explanation: "You cannot derive a present-day benefit (like living in the house) from Super assets."
      },
      {
        question: "What is the 'roll-over' tactic?",
        options: ["A dog trick", "Coercing you to roll your Super into a fund they control", "A banking term", "A tax break"],
        correctAnswer: 1,
        explanation: "They pressure you to sign forms that transfer your legitimate Super into a fake fund."
      },
      {
        question: "How can you check if your Super has been moved?",
        options: ["Wait for a letter", "Check your myGov ATO account", "Ask your boss", "Guess"],
        correctAnswer: 1,
        explanation: "Log in to myGov to see where your Super is currently held."
      },
      {
        question: "The promoter takes a 20% 'commission' for helping you access funds. Is this standard?",
        options: ["Yes", "No, this is predatory and likely illegal", "Yes, for good service", "Low fee"],
        correctAnswer: 1,
        explanation: "Legitimate advisors charge set fees, not huge percentages of your withdrawn cash."
      },
      {
        question: "If you think your Super has been stolen, who do you call?",
        options: ["The police and your Super fund", "The scammer", "Your neighbor", "Nobody"],
        correctAnswer: 0,
        explanation: "Act immediately to freeze accounts."
      }
    ]
  },
  {
    id: "07-05",
    title: "Psychology of Investment Fraud",
    description: "Why smart people fall for investment scams.",
    questions: [
      {
        question: "What is 'Fear of Missing Out' (FOMO)?",
        options: ["A sickness", "Anxiety that an exciting opportunity is passing you by", "A stock ticker", "A bank"],
        correctAnswer: 1,
        explanation: "Scammers say 'everyone is getting rich except you' to trigger FOMO."
      },
      {
        question: "What is the 'Sunk Cost Fallacy' in scams?",
        options: ["A shipping error", "Believing that spending MORE money will help recover LOST money", "A boat", "Accounting term"],
        correctAnswer: 1,
        explanation: "Victims send more money (for 'taxes' or 'fees') hoping it will unlock their initial investment."
      },
      {
        question: "Why do scammers use 'Account Managers' who become your 'friend'?",
        options: ["Better service", "To build emotional trust (Grooming)", "They are lonely", "Company policy"],
        correctAnswer: 1,
        explanation: "It's harder to say no to a friend. They groom you over weeks to trust them with your life savings."
      },
      {
        question: "What is 'Social Proof' in the context of scams?",
        options: ["Fake testimonials and WhatsApp groups showing others 'winning'", "ID cards", "Passports", "Social media"],
        correctAnswer: 0,
        explanation: "They add you to groups where bots pretend to be happy customers, making the scam look legitimate."
      },
      {
        question: "The scammer makes you feel 'smart' and 'exclusive'. Why?",
        options: ["You are smart", "Flattery lowers your defenses", "They like you", "Truth"],
        correctAnswer: 1,
        explanation: "If you think you found a 'secret loophole', you are less likely to ask for outside advice."
      },
      {
        question: "Why do they start with small investments ($250)?",
        options: ["They are poor", "To test the waters and build trust (The 'Hook')", "Standard entry fee", "Low risk"],
        correctAnswer: 1,
        explanation: "Once you see the $250 'double', you are confident enough to invest $25,000."
      },
      {
        question: "When you try to withdraw, they create obstacles. This is meant to:",
        options: ["Keep your money", "Protect you", "Verify ID", "Test the system"],
        correctAnswer: 0,
        explanation: "Delay tactics (friction) are used to keep your money while they try to extract more."
      },
      {
        question: "What is 'Gaslighting' in a scam?",
        options: ["Lighting a fire", "Blaming the victim for the 'failed' trade or 'technical error'", "Cooking", "Driving"],
        correctAnswer: 1,
        explanation: "They say 'You clicked the wrong button' or 'You didn't pay the tax' to make you feel at fault."
      },
      {
        question: "Why is 'urgency' the enemy of safe investing?",
        options: ["It isn't", "It prevents due diligence and logical thinking", "Markets move slow", "Banks are slow"],
        correctAnswer: 1,
        explanation: "Real investments will still be there tomorrow. Only scams need money NOW."
      },
      {
        question: "Can intelligent, financially literate people be scammed?",
        options: ["No, only greedy people", "Yes, scammers target psychological vulnerabilities, not just intelligence", "No", "Rarely"],
        correctAnswer: 1,
        explanation: "Doctors, lawyers, and bankers fall for scams daily. Intelligence does not make you immune to manipulation."
      }
    ]
  }
];