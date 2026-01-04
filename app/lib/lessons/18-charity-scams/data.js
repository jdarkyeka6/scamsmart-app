export default [
  {
    id: "18-01",
    title: "Fake Disaster Relief",
    description: "Scammers follow the news. Bushfires, floods, earthquakes.",
    questions: [
      {
        question: "A bushfire just happened. You see a 'Bushfire Relief Fund' page on Facebook created 1 hour ago.",
        options: ["Donate", "Check legitimacy. Scammers create fake funds instantly.", "Share it", "Like it"],
        correctAnswer: 1,
        explanation: "Scammers move fast. Always donate to established charities (Red Cross, Salvos) rather than random pages."
      },
      {
        question: "The donation page asks for payment in Cryptocurrency.",
        options: ["Modern", "Scam. Legitimate charities rarely ask for crypto primarily.", "Fast", "Anonymous"],
        correctAnswer: 1,
        explanation: "Crypto is hard to trace. Charities prefer bank transfer or credit card."
      },
      {
        question: "The name sounds real: 'Australian Red Cross Relief'. (Real name is 'Australian Red Cross').",
        options: ["Same thing", "Scam. Lookalike names trick you.", "Branch", "Partner"],
        correctAnswer: 1,
        explanation: "Scammers add words like 'Fund', 'Relief', or 'Foundation' to mimic real names."
      },
      {
        question: "You receive a cold call asking for donations for flood victims.",
        options: ["Donate over phone", "Hang up. Find the charity online yourself and donate there.", "Give card details", "Ask for receipt"],
        correctAnswer: 1,
        explanation: "Don't give credit card details to cold callers. You don't know who they are."
      },
      {
        question: "The person collecting money is using a personal bank account.",
        options: ["Donate", "Red flag. Charities use business accounts.", "Small charity", "Local"],
        correctAnswer: 1,
        explanation: "Never donate to a personal BSB/Account number."
      },
      {
        question: "They show you distressing photos of injured animals.",
        options: ["Donate", "Emotional manipulation. Verify the organization first.", "Cry", "Share"],
        correctAnswer: 1,
        explanation: "Scammers use shock tactics to bypass your critical thinking."
      },
      {
        question: "The website has no ABN (Australian Business Number).",
        options: ["Donate", "Check ABN lookup. All charities must be registered.", "Okay", "New"],
        correctAnswer: 1,
        explanation: "Legitimate Australian charities have an ABN and are registered."
      },
      {
        question: "Crowdfunding sites (GoFundMe) guarantee the money goes to the victim.",
        options: ["Yes", "No, they make efforts but scams still happen", "Always", "100%"],
        correctAnswer: 1,
        explanation: "Platform vetting is not perfect. Fake campaigns do exist."
      },
      {
        question: "You are pressured to donate 'right now' to save lives.",
        options: ["Donate", "Pause. Pressure is a scam tactic.", "Hurry", "Help"],
        correctAnswer: 1,
        explanation: "Real charities appreciate support anytime; they don't threaten you."
      },
      {
        question: "How do you verify a charity in Australia?",
        options: ["Ask them", "Search the ACNC Charity Register", "Google reviews", "Facebook"],
        correctAnswer: 1,
        explanation: "The ACNC (acnc.gov.au) is the official regulator."
      }
    ]
  },
  {
    id: "18-02",
    title: "Street & Door-to-Door Collections",
    description: "Is that person with the bucket real?",
    questions: [
      {
        question: "A collector knocks on your door at 8pm. They have no ID badge.",
        options: ["Donate", "Refuse. Legitimate collectors must display ID.", "Give cash", "Trust face"],
        correctAnswer: 1,
        explanation: "Collectors must wear a clear ID badge with the charity name and their details."
      },
      {
        question: "The bucket they are holding is a generic plastic bucket with a printed sticker.",
        options: ["Donate", "Suspicious. Real buckets are usually sealed and branded.", "Okay", "Thrift"],
        correctAnswer: 1,
        explanation: "Sealed buckets prevent the collector from stealing the cash."
      },
      {
        question: "They ask for cash but cannot provide a receipt.",
        options: ["Give small change", "Don't give. Legitimate collectors must provide a receipt upon request.", "It's fine", "Help"],
        correctAnswer: 1,
        explanation: "Always ask for a tax-deductible receipt."
      },
      {
        question: "They get aggressive or rude when you say no.",
        options: ["Donate to leave", "Scam/Unprofessional. Close the door.", "Argue", "Call police"],
        correctAnswer: 1,
        explanation: "Legitimate fundraisers are trained to be polite and accept 'no'."
      },
      {
        question: "The ID badge looks like a laminated business card made at home.",
        options: ["Seems legit", "Red flag. Look for official branding and holograms.", "Okay", "Creative"],
        correctAnswer: 1,
        explanation: "Professional IDs are hard to fake."
      },
      {
        question: "They claim to be a 'local student' collecting for a school trip.",
        options: ["Support them", "Verify with the school first", "Give $50", "Believe"],
        correctAnswer: 1,
        explanation: "This is a common low-level fraud."
      },
      {
        question: "Can collectors legally knock on your door?",
        options: ["Yes, within certain hours", "No, never", "Only weekends", "Only if invited"],
        correctAnswer: 0,
        explanation: "It is legal, but strict rules apply to hours and conduct."
      },
      {
        question: "You scan a QR code on their lanyard to donate.",
        options: ["Scan", "Check the URL it opens carefully", "Don't scan", "Fast"],
        correctAnswer: 1,
        explanation: "QR codes can lead to fake payment sites."
      },
      {
        question: "They are collecting in a shopping center but have no table/stand.",
        options: ["Roving collector", "Check with center management", "Donate", "Walk away"],
        correctAnswer: 1,
        explanation: "Shopping centers usually require permits for collectors."
      },
      {
        question: "What is a 'Chugger'?",
        options: ["Charity Mugger (Street fundraiser)", "A train", "A scammer", "A drink"],
        correctAnswer: 0,
        explanation: "While annoying, registered 'Chuggers' signing you up for monthly donations are usually legal (but verify ID)."
      }
    ]
  },
  {
    id: "18-03",
    title: "Fake Websites & Phishing",
    description: "The website looks real, but your money goes to criminals.",
    questions: [
      {
        question: "You search 'Donate Ukraine' and click the first ad.",
        options: ["Safe", "Check URL. Scammers buy ads for fake sites.", "Donate", "Fast"],
        correctAnswer: 1,
        explanation: "Sponsored ads are not verified. Check the domain carefully."
      },
      {
        question: "The website URL is 'redcross-donation-support.net'.",
        options: ["Legit", "Scam. Real domain is redcross.org.au", "Partner", "Global"],
        correctAnswer: 1,
        explanation: "Typosquating and lookalike domains are common."
      },
      {
        question: "The site asks for your Netbanking password to 'link' your donation.",
        options: ["Enter it", "NEVER. No merchant needs your banking password.", "Login", "Secure"],
        correctAnswer: 1,
        explanation: "This is a credential harvesting attack."
      },
      {
        question: "The text on the website contains poor English and typos.",
        options: ["Volunteer made it", "Scam indicator", "Glitch", "Translation"],
        correctAnswer: 1,
        explanation: "Major charities have professional teams. Typos suggest a scam."
      },
      {
        question: "You receive an email with a link to download a 'Donation Form'.",
        options: ["Download", "Phishing/Malware. Don't open attachments.", "Print", "Fill out"],
        correctAnswer: 1,
        explanation: "Don't open attachments from unsolicited emails."
      },
      {
        question: "The website has no 'Contact Us' or physical address.",
        options: ["Virtual charity", "Red flag", "Online only", "Modern"],
        correctAnswer: 1,
        explanation: "Legitimate organizations must be contactable."
      },
      {
        question: "They claim 100% of proceeds go to victims.",
        options: ["Great", "Suspicious. Admin costs always exist (usually 10-20%).", "Amazing", "Best"],
        correctAnswer: 1,
        explanation: "Claims of '0% admin fees' are often used by scammers to sound superior."
      },
      {
        question: "The 'Donate' button takes you to a PayPal personal page.",
        options: ["Donate", "Scam", "Convenient", "Easy"],
        correctAnswer: 1,
        explanation: "Charities use business merchant facilities, not personal PayPal links."
      },
      {
        question: "The padlock icon in the browser means the site is legitimate.",
        options: ["True", "False. It only means the connection is encrypted, not that the site is honest.", "Maybe", "Always"],
        correctAnswer: 1,
        explanation: "Scammers use HTTPS too. The padlock does not prove legitimacy."
      },
      {
        question: "How to safely donate online?",
        options: ["Click email links", "Type the charity URL directly into the browser", "Click Facebook ads", "Reply to texts"],
        correctAnswer: 1,
        explanation: "Navigate there yourself."
      }
    ]
  },
  {
    id: "18-04",
    title: "Crowdfunding Risks",
    description: "GoFundMe, Kickstarter, and personal appeals.",
    questions: [
      {
        question: "You see a campaign for a sick child. The organizer is not related to the child.",
        options: ["Donate", "Check if they are authorized to collect funds", "Trust them", "Help"],
        correctAnswer: 1,
        explanation: "Strangers often set up copycat campaigns using real photos of sick kids."
      },
      {
        question: "The campaign description is vague about how the money will be used.",
        options: ["Donate", "Ask questions. Transparency is key.", "Trust", "Hope"],
        correctAnswer: 1,
        explanation: "Legitimate campaigns explain exactly where funds go (e.g., 'Surgery at X Hospital')."
      },
      {
        question: "The campaign has no updates or comments.",
        options: ["New", "Risk. Active campaigns usually have community engagement.", "Silent", "Private"],
        correctAnswer: 1,
        explanation: "Lack of social proof can indicate a fake."
      },
      {
        question: "You do a Reverse Image Search on the campaign photo and find it on a news site from 5 years ago.",
        options: ["Recycled photo", "Scam", "Old news", "Memory"],
        correctAnswer: 1,
        explanation: "Stolen photos are the #1 sign of a crowdfunding scam."
      },
      {
        question: "The organizer withdraws the funds and deletes the page.",
        options: ["Job done", "Rug pull scam", "Mission complete", "Success"],
        correctAnswer: 1,
        explanation: "Sometimes scammers take the money and run ('Rug Pull')."
      },
      {
        question: "Does the platform refund you if it's a scam?",
        options: ["Always", "Sometimes, depends on the 'Guarantee' policy", "Never", "Instantly"],
        correctAnswer: 1,
        explanation: "Read the platform's guarantee. It's not always 100%."
      },
      {
        question: "The campaign asks for donations to a personal bank account in the description.",
        options: ["Send to bank", "Donate via platform only", "Cash", "Cheque"],
        correctAnswer: 1,
        explanation: "Staying on the platform offers some protection. Direct transfers offer none."
      },
      {
        question: "A celebrity shares the link. Is it safe?",
        options: ["Yes", "Usually, but celebs get hacked/tricked too", "Always", "No"],
        correctAnswer: 1,
        explanation: "Even celebs can be fooled or their accounts compromised."
      },
      {
        question: "The campaign goal keeps increasing.",
        options: ["Greed/Scam", "High demand", "Inflation", "Popular"],
        correctAnswer: 0,
        explanation: "Scammers keep the campaign open to milk more money."
      },
      {
        question: "What is 'Sadfishing'?",
        options: ["Fishing trip", "Exaggerating emotional stories online to get sympathy/money", "Crying", "Acting"],
        correctAnswer: 1,
        explanation: "Using fake trauma to solicit funds."
      }
    ]
  },
  {
    id: "18-05",
    title: "Tax Deductions & Receipts",
    description: "If you can't claim it, it might not be real.",
    questions: [
      {
        question: "To be tax deductible in Australia, a charity must be a 'DGR'. What is DGR?",
        options: ["Dog Grooming Resource", "Deductible Gift Recipient", "Donation Gift Return", "Digital Good"],
        correctAnswer: 1,
        explanation: "Only donations to DGRs are tax deductible."
      },
      {
        question: "The charity refuses to issue a receipt.",
        options: ["Fine", "Suspicious. You need one for tax.", "Save paper", "Okay"],
        correctAnswer: 1,
        explanation: "Legitimate charities always provide receipts."
      },
      {
        question: "You buy a raffle ticket. Is it tax deductible?",
        options: ["Yes", "No, because you might win something", "Maybe", "Always"],
        correctAnswer: 1,
        explanation: "Buying a ticket (raffle/dinner) is not a gift, so it's not tax deductible."
      },
      {
        question: "The receipt is just a handwritten note on a scrap of paper.",
        options: ["Valid", "Invalid. Needs ABN, Date, Amount.", "Personal", "Okay"],
        correctAnswer: 1,
        explanation: "Official receipts have specific legal requirements."
      },
      {
        question: "A scammer promises you can claim back 100% of your donation.",
        options: ["Great", "Tax fraud. You claim the deduction, not the full amount.", "Loophole", "Secret"],
        correctAnswer: 1,
        explanation: "If it sounds like a tax scheme, stay away."
      },
      {
        question: "You donated to a GoFundMe for a friend. Deductible?",
        options: ["Yes", "Generally No (unless DGR registered)", "Always", "Maybe"],
        correctAnswer: 1,
        explanation: "Personal gifts are not deductible."
      },
      {
        question: "How much must you donate to claim a deduction?",
        options: ["$2 or more", "$100", "$50", "$1"],
        correctAnswer: 0,
        explanation: "The threshold in Australia is $2."
      },
      {
        question: "The charity is based overseas and not registered in Australia.",
        options: ["Deductible", "Usually not deductible in AU", "Global tax", "Fine"],
        correctAnswer: 1,
        explanation: "You generally can't claim deductions for foreign charities on AU tax."
      },
      {
        question: "You check the ACNC register and the charity status is 'Revoked'.",
        options: ["Donate", "Do not donate. They lost their license.", "Maybe", "Help"],
        correctAnswer: 1,
        explanation: "Revoked means they failed to comply with laws."
      },
      {
        question: "Why check the ABN?",
        options: ["Fun", "To ensure they are a legal entity", "Lottery", "Numbers"],
        correctAnswer: 1,
        explanation: "The ABN proves they exist legally."
      }
    ]
  }
];