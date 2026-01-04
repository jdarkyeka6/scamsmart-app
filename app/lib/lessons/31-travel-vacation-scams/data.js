export default [
  {
    id: "31-01",
    title: "Fake Airline Tickets",
    description: "Cheap flights that leave you grounded.",
    questions: [
      {
        question: "You find a flight to London for $600 (normally $2000) on a site like 'CheapFlyDeals-247.com'.",
        options: ["Book immediately", "Scam. Prices that low are impossible.", "Call airline", "Pack bags"],
        correctAnswer: 1,
        explanation: "If a flight is significantly cheaper than the airline's own site, it's likely a scam or booking fraud."
      },
      {
        question: "The travel agent asks you to pay via Bank Transfer instead of Credit Card.",
        options: ["Pay", "Red Flag. Always pay with a card for chargeback protection.", "Save fees", "Trust"],
        correctAnswer: 1,
        explanation: "Legitimate travel agents accept credit cards. Bank transfers offer zero protection if they vanish."
      },
      {
        question: "You receive an e-ticket, but it doesn't have a PNR (Passenger Name Record) / Booking Reference.",
        options: ["It's fine", "Scam. A real ticket always has a 6-digit PNR.", "Wait", "Print"],
        correctAnswer: 1,
        explanation: "The PNR is the only proof a booking exists in the airline's system."
      },
      {
        question: "The 'agent' books the ticket using a stolen credit card.",
        options: ["Cheap for me", "The airline will cancel your ticket at the airport when the fraud is detected.", "Lucky", "Smart"],
        correctAnswer: 1,
        explanation: "You arrive at the airport only to find your ticket was cancelled for fraud."
      },
      {
        question: "They ask for a 'Modification Fee' to correct a spelling mistake they made.",
        options: ["Pay", "Scam extortion tactic", "Argue", "Rebook"],
        correctAnswer: 1,
        explanation: "They make intentional errors to squeeze more money out of you."
      },
      {
        question: "The website has no phone number, only a 'Contact Form'.",
        options: ["Digital only", "Risk. Who do you call if stranded?", "Modern", "Okay"],
        correctAnswer: 1,
        explanation: "Travel agents need to be contactable."
      },
      {
        question: "You verify the ticket on the Airline's website and it says 'confirmed'. Are you 100% safe?",
        options: ["Yes", "Not necessarily. Scammers can cancel it/refund it to themselves later.", "Always", "Maybe"],
        correctAnswer: 1,
        explanation: "If they control the booking, they can cancel it after you pay them."
      },
      {
        question: "Ad on Facebook: 'Mystery Flights for $50'.",
        options: ["Fun", "Likely a data harvesting scam or hidden subscription", "Adventure", "Try"],
        correctAnswer: 1,
        explanation: "Too cheap to be real."
      },
      {
        question: "How to safely book?",
        options: ["Airline direct or reputable comparison sites (Expedia/Webjet)", "Random Instagram agent", "Dark web", "Cash"],
        correctAnswer: 0,
        explanation: "Stick to known brands."
      },
      {
        question: "What is 'Ghosting'?",
        options: ["Scary", "When the travel agent disappears with your money", "Flying", "Halloween"],
        correctAnswer: 1,
        explanation: "Common with fake travel agencies on social media."
      }
    ]
  },
  {
    id: "31-02",
    title: "Visa & Passport Scams",
    description: "Official documents from unofficial sources.",
    questions: [
      {
        question: "You Google 'ESTA USA' and click the top result.",
        options: ["Apply", "Check URL. Many sites charge $80+ for a $21 official visa.", "Safe", "Fast"],
        correctAnswer: 1,
        explanation: "Third-party sites dress up as official government portals to charge massive service fees."
      },
      {
        question: "A website offers 'Guaranteed Fast Track' passports for a fee.",
        options: ["Pay", "Scam. Only the government issues passports.", "Hurry", "VIP"],
        correctAnswer: 1,
        explanation: "You cannot bribe your way to a faster passport via a website."
      },
      {
        question: "They email saying your Visa is rejected unless you pay a fine.",
        options: ["Pay", "Scam. Governments don't email fines for rejections.", "Panic", "Reply"],
        correctAnswer: 1,
        explanation: "Rejections are formal; they don't ask for 'fines' to fix it."
      },
      {
        question: "The website ends in '.com' instead of '.gov' or '.gov.au'.",
        options: ["Official", "Commercial site (Middleman or Scam)", "Government", "Safe"],
        correctAnswer: 1,
        explanation: "Official government sites use .gov domains."
      },
      {
        question: "They ask you to email a scan of your passport.",
        options: ["Send", "High ID theft risk. Upload to secure portals only.", "Okay", "Easy"],
        correctAnswer: 1,
        explanation: "Email is not secure for passport data."
      },
      {
        question: "A 'Digital Arrival Card' site asks for payment.",
        options: ["Pay", "Scam. Arrival cards (like DPD) are usually free.", "Fee", "Tax"],
        correctAnswer: 1,
        explanation: "Scammers charge for free declaration forms."
      },
      {
        question: "They offer a 'Golden Visa' for an incredibly low investment.",
        options: ["Invest", "Scam. Citizenship by investment is expensive.", "Lucky", "Move"],
        correctAnswer: 1,
        explanation: "If it sounds too cheap, it's a lie."
      },
      {
        question: "You receive a call from 'Immigration' threatening deportation.",
        options: ["Pay", "Hang up. Scam intimidation.", "Cry", "Run"],
        correctAnswer: 1,
        explanation: "Governments send letters, they don't make threatening calls."
      },
      {
        question: "How much is an official Australian ETA (Visa) usually?",
        options: ["$20 AUD (Service charge)", "$200", "$500", "Free"],
        correctAnswer: 0,
        explanation: "Apps usually charge a small service fee (~$20), not hundreds."
      },
      {
        question: "What to do if you used a fake site?",
        options: ["Nothing", "Contact bank to dispute charge and check if application was actually lodged", "Wait", "Fly"],
        correctAnswer: 1,
        explanation: "Often they lodge the real application but overcharge you. Sometimes they do nothing."
      }
    ]
  },
  {
    id: "31-03",
    title: "Accommodation Fraud",
    description: "The villa that doesn't exist.",
    questions: [
      {
        question: "You book a luxury villa on Facebook Marketplace. The owner asks for a bank transfer.",
        options: ["Transfer", "Scam. Always use a platform (Airbnb/Booking.com).", "Trust", "Save"],
        correctAnswer: 1,
        explanation: "Direct bank transfers are the preferred method for fake villa scammers."
      },
      {
        question: "You arrive and the address is an empty lot.",
        options: ["Camping", "The 'Phantom Rental' scam", "Wrong map", "Wait"],
        correctAnswer: 1,
        explanation: "They stole photos of a real house but listed a fake address."
      },
      {
        question: "The host says 'Airbnb is down, pay me directly via WhatsApp'.",
        options: ["Okay", "Scam. Taking payment off-platform voids your protection.", "Helpful", "Fast"],
        correctAnswer: 1,
        explanation: "Never leave the safety of the booking platform."
      },
      {
        question: "The price is 50% lower than other properties in the area.",
        options: ["Bargain", "Scam. Too good to be true.", "Lucky", "Book"],
        correctAnswer: 1,
        explanation: "Scammers use low prices to hook victims quickly."
      },
      {
        question: "They ask for a 'Security Deposit' via Western Union.",
        options: ["Send", "Scam", "Standard", "Insurance"],
        correctAnswer: 1,
        explanation: "Security deposits should be handled by the platform or credit card hold."
      },
      {
        question: "Reverse image search shows the villa is actually in Spain, not Bali.",
        options: ["Mistake", "Proof of scam", "Similar house", "Glitch"],
        correctAnswer: 1,
        explanation: "They steal photos from real estate sites globally."
      },
      {
        question: "The reviews are all from accounts created this week.",
        options: ["New listing", "Fake reviews", "Popular", "Good"],
        correctAnswer: 1,
        explanation: "Fake hosts create fake accounts to review themselves."
      },
      {
        question: "They send you a 'Booking Confirmation' that is a Word document.",
        options: ["Professional", "Amateur/Scam", "Print", "Save"],
        correctAnswer: 1,
        explanation: "Real systems generate professional PDF or App confirmations."
      },
      {
        question: "The host pressures you to book NOW.",
        options: ["Book", "Scam urgency", "Wait", "Think"],
        correctAnswer: 1,
        explanation: "Pressure prevents checking."
      },
      {
        question: "Can you get money back from a bank transfer?",
        options: ["Yes", "Very difficult/Impossible", "Always", "Maybe"],
        correctAnswer: 1,
        explanation: "Once sent, it's cash gone."
      }
    ]
  },
  {
    id: "31-04",
    title: "The 'Free Holiday' Call",
    description: "You've won a cruise! (Just pay taxes).",
    questions: [
      {
        question: "Robocall: 'Congratulations! You've qualified for a free stay at the Marriott'.",
        options: ["Accept", "Hang up. It's a marketing scam/Time share trap.", "Pack", "Yay"],
        correctAnswer: 1,
        explanation: "Major hotel chains do not robocall random people with free stays."
      },
      {
        question: "To claim the 'free' cruise, you must pay 'Port Taxes' of $300.",
        options: ["Pay", "Scam. The 'taxes' cost more than a budget ticket.", "Bargain", "Sail"],
        correctAnswer: 1,
        explanation: "The 'free' gift is just a hook to sell you overpriced fees."
      },
      {
        question: "They need your credit card to 'verify eligibility'.",
        options: ["Give", "Scam data harvesting", "Verify", "Trust"],
        correctAnswer: 1,
        explanation: "They will charge you immediately."
      },
      {
        question: "You have to attend a 4-hour sales presentation to get the voucher.",
        options: ["Go", "High-pressure Timeshare sales", "Fun", "Listen"],
        correctAnswer: 1,
        explanation: "The 'Timeshare' trap is stressful and expensive."
      },
      {
        question: "The voucher has 'Blackout Dates' (can't use it on weekends/holidays).",
        options: ["Fine", "Makes the voucher useless for most people", "Okay", "Fair"],
        correctAnswer: 1,
        explanation: "The restrictions make it impossible to actually use."
      },
      {
        question: "They ask for your friend's numbers to 'give them a holiday too'.",
        options: ["Share", "Don't sell out your friends to spammers", "Nice", "Gift"],
        correctAnswer: 1,
        explanation: "This is lead generation for them."
      },
      {
        question: "The company name is vague like 'Travel Service Provider'.",
        options: ["Official", "Hiding true identity", "Big corp", "Real"],
        correctAnswer: 1,
        explanation: "Legitimate companies identify themselves clearly."
      },
      {
        question: "You answer a survey and 'win' a holiday immediately.",
        options: ["Lucky", "Scam script. Everyone wins.", "Survey", "Prize"],
        correctAnswer: 1,
        explanation: "The survey was just a filter to find people."
      },
      {
        question: "Can you cancel a Timeshare contract?",
        options: ["Easily", "Extremely difficult and expensive", "Always", "Free"],
        correctAnswer: 1,
        explanation: "They are designed to be binding for life."
      },
      {
        question: "What is the catch?",
        options: ["None", "Hidden fees, high pressure sales, useless dates", "Fun", "Sun"],
        correctAnswer: 1,
        explanation: "Nothing is truly free."
      }
    ]
  },
  {
    id: "31-05",
    title: "Currency & ATM Traps Abroad",
    description: "Don't get fleeced while exchanging cash.",
    questions: [
      {
        question: "A friendly local offers to exchange money on the street for a 'better rate'.",
        options: ["Great", "Scam. They use sleight of hand or fake notes.", "Swap", "Kind"],
        correctAnswer: 1,
        explanation: "Never exchange money on the street. Use official bureaus."
      },
      {
        question: "The ATM offers to charge you in AUD (Dynamic Currency Conversion).",
        options: ["Accept AUD", "Decline. Choose the LOCAL currency (e.g., Euros/Yen).", "Aud is safer", "Easier"],
        correctAnswer: 1,
        explanation: "DCC (paying in your home currency) usually has a terrible exchange rate + fees. Always choose local."
      },
      {
        question: "A taxi driver says the meter is broken.",
        options: ["Get in", "Agree on a price FIRST or find another cab.", "Trust", "Go"],
        correctAnswer: 1,
        explanation: "This is the classic tourist tax trap."
      },
      {
        question: "You pay with a large note, and they drop it and claim you gave a small note.",
        options: ["Apologize", "The 'Note Switch' scam. Watch your money closely.", "Pay more", "Leave"],
        correctAnswer: 1,
        explanation: "Announce the value of the note as you hand it over."
      },
      {
        question: "Using a standalone ATM in a dark corner.",
        options: ["Convenient", "Skimming risk. Use ATMs inside banks.", "Fast", "Private"],
        correctAnswer: 1,
        explanation: "Tourist areas are hotspots for card skimmers."
      },
      {
        question: "A restaurant menu has no prices.",
        options: ["Fancy", "Scam trap. Ask for a menu with prices.", "Order", "Eat"],
        correctAnswer: 1,
        explanation: "They will charge you an extortionate amount."
      },
      {
        question: "Someone spills coffee on you and offers to clean it.",
        options: ["Nice", "Distraction theft (Pickpocketing).", "Thanks", "Help"],
        correctAnswer: 1,
        explanation: "While they 'clean' you, they steal your wallet."
      },
      {
        question: "A 'Fake Police Officer' asks to see your wallet for 'counterfeit check'.",
        options: ["Show wallet", "Refuse. Real police don't check wallets for cash.", "Comply", "Fear"],
        correctAnswer: 1,
        explanation: "They palm some notes while 'checking'."
      },
      {
        question: "Buying a SIM card at the airport vs city.",
        options: ["Airport", "Often more expensive but safer/easier", "City", "None"],
        correctAnswer: 1,
        explanation: "Not a scam per se, but airport prices are often inflated."
      },
      {
        question: "Using public Wi-Fi at the airport without VPN.",
        options: ["Safe", "Risky. Hackers snoop on unencrypted traffic.", "Fast", "Free"],
        correctAnswer: 1,
        explanation: "Protect your banking data with a VPN."
      }
    ]
  }
];