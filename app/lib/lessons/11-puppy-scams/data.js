export default [
  {
    id: "11-01",
    title: "Spotting the Fake Ad",
    description: "How to identify a puppy scam listing before you even click.",
    questions: [
      {
        question: "You see an ad for a purebred French Bulldog for $500. Market price is $3,500. Verdict?",
        options: ["Great deal", "Scam - price is too good to be true", "Breeder is generous", "Maybe it has no papers"],
        correctAnswer: 1,
        explanation: "Scammers use significantly below-market prices to lure victims. If it's too cheap, it's a scam."
      },
      {
        question: "The listing photos look like professional studio shots. What should you do?",
        options: ["Admire the photography", "Reverse Image Search them", "Assume the breeder is rich", "Buy immediately"],
        correctAnswer: 1,
        explanation: "Scammers steal photos from legitimate breeder websites or Instagram. Reverse image search reveals the origin."
      },
      {
        question: "The text in the ad has varied fonts and strange grammar (e.g., 'Amelican Bulldog cute kindly').",
        options: ["Breeder is foreign", "Copy-paste scam script", "Just a typo", "Standard listing"],
        correctAnswer: 1,
        explanation: "Scammers often copy-paste descriptions from different sites, leading to formatting errors and poor grammar."
      },
      {
        question: "The seller says they are in your city, but their Facebook profile says they are in Nigeria/Cameroon.",
        options: ["They moved recently", "Scam - location mismatch", "Glitch", "VPN user"],
        correctAnswer: 1,
        explanation: "Always check the seller's profile transparency. Location mismatches are a huge red flag."
      },
      {
        question: "The ad description is a sob story: 'Husband died, moving to non-pet apartment, free to good home just pay shipping'.",
        options: ["Sad but real", "Classic 'Sad Fishing' scam script", "Charity", "Lucky you"],
        correctAnswer: 1,
        explanation: "Scammers use emotional tragedies to make you act fast and pay for 'shipping' without thinking."
      },
      {
        question: "The breeder listing is on a free classified site (Gumtree/Craigslist) but has no website or phone number.",
        options: ["Risky", "Safe", "Normal", "Preferred"],
        correctAnswer: 0,
        explanation: "Reputable breeders usually have a digital footprint, a registered breeder number, and are happy to talk on the phone."
      },
      {
        question: "You ask to video call to see the puppy. The seller makes excuses (camera broken, too busy).",
        options: ["They are shy", "They don't have the puppy", "Bad internet", "Try again later"],
        correctAnswer: 1,
        explanation: "Refusing a live video call is the biggest sign that the puppy does not exist."
      },
      {
        question: "The ad features a rare breed that is currently 'trending' or impossible to get.",
        options: ["Scammers target trends", "Lucky find", "Breeder is connected", "Pre-order"],
        correctAnswer: 0,
        explanation: "Scammers follow trends (e.g., Cavoodles, Frenchies) because they know buyers are desperate."
      },
      {
        question: "The seller's profile was created 2 days ago.",
        options: ["New breeder", "High risk scam account", "Lost password", "Fresh start"],
        correctAnswer: 1,
        explanation: "Scammers create new accounts constantly as old ones get reported."
      },
      {
        question: "Can you trust a 'verified' badge on a random classifieds site?",
        options: ["Yes", "No, verify independently", "Always", "Site responsibility"],
        correctAnswer: 1,
        explanation: "Badges on classified sites can sometimes be faked or bought. Do your own due diligence."
      }
    ]
  },
  {
    id: "11-02",
    title: "The Transport Trap",
    description: "The puppy is free/cheap, but the 'shipping' costs never end.",
    questions: [
      {
        question: "The seller says the puppy is in a different state and offers a 'Pet Courier Service' you've never heard of.",
        options: ["Convenient", "Likely a fake courier website created by the scammer", "Standard practice", "Cheaper"],
        correctAnswer: 1,
        explanation: "Scammers build entire fake courier websites to track the 'fake' shipment of your non-existent puppy."
      },
      {
        question: "You pay for shipping. 24 hours later, they email: 'Puppy needs a temperature controlled crate ($500)'.",
        options: ["Pay it for puppy's safety", "It's a scam (The Refundable Crate trick)", "Ask for discount", "Ignore"],
        correctAnswer: 1,
        explanation: "This is the 'refundable crate' scam. They promise you'll get the money back upon delivery. You won't."
      },
      {
        question: "Next, the 'courier' says the puppy is stuck at the airport and needs 'insurance' or 'vaccines' paid now.",
        options: ["Pay immediately", "Scam - spiraling costs", "Call the airport", "Email vet"],
        correctAnswer: 1,
        explanation: "It is an extortion cycle. They will keep inventing fees until you run out of money."
      },
      {
        question: "The courier email uses a free domain like 'pet-express-delivery@gmail.com'.",
        options: ["Legit", "Scam - companies use custom domains", "Maybe", "Start-up"],
        correctAnswer: 1,
        explanation: "Real logistics companies do not use Gmail/Yahoo/Hotmail for official business."
      },
      {
        question: "They threaten that if you don't pay the new fee, the puppy will be 'abandoned' at the airport.",
        options: ["Pay to save puppy", "Emotional blackmail scam", "Call police", "Go to airport"],
        correctAnswer: 1,
        explanation: "Scammers use guilt and fear for the animal's welfare to force you to pay. There is no puppy."
      },
      {
        question: "You ask for the tracking number and it only works on the specific website they sent you.",
        options: ["Suspicious", "Normal", "Exclusive", "Good service"],
        correctAnswer: 0,
        explanation: "If the tracking number doesn't work on major carrier sites or a universal tracker, the site is fake."
      },
      {
        question: "The shipping cost is suspiciously low ($50 for interstate flight).",
        options: ["Great deal", "Bait to get you hooked", "Airline error", "Bulk discount"],
        correctAnswer: 1,
        explanation: "They set the initial entry cost low to get your commitment, then hammer you with hidden fees."
      },
      {
        question: "Can you fly a puppy from overseas (e.g., USA to Australia) in 2 days?",
        options: ["Yes", "No, Australia has strict quarantine laws (months)", "Maybe VIP", "If rich"],
        correctAnswer: 1,
        explanation: "Australia has some of the strictest biosecurity laws. Importing pets takes months of quarantine/vet checks."
      },
      {
        question: "The 'courier' asks for payment via Bitcoin ATM.",
        options: ["Modern", "Scam", "Fast", "Secure"],
        correctAnswer: 1,
        explanation: "Legitimate businesses do not demand payment via Crypto ATMs."
      },
      {
        question: "What happens if you stop paying the fees?",
        options: ["They sue you", "They stop contacting you and move to the next victim", "Puppy arrives", "Refund"],
        correctAnswer: 1,
        explanation: "Once they realize you have no more money or figured it out, they ghost you."
      }
    ]
  },
  {
    id: "11-03",
    title: "Breeder Verification",
    description: "How to check if a breeder is legitimate.",
    questions: [
      {
        question: "A legitimate breeder in Australia should have a:",
        options: ["Facebook page", "Breeder Registration Number (BIN) or Association Membership", "Nice smile", "Gmail"],
        correctAnswer: 1,
        explanation: "Always ask for their Breeder Identification Number and verify it with the relevant state registry."
      },
      {
        question: "You ask the breeder for their local vet's contact info to verify the puppy's health.",
        options: ["They give it happily", "They get angry or make excuses", "They act confused", "They charge for it"],
        correctAnswer: 1,
        explanation: "Real breeders have a relationship with a vet and are happy for you to verify health records."
      },
      {
        question: "The breeder refuses to let you visit the property 'due to Covid' or 'privacy', even though restrictions are over.",
        options: ["Respectful", "Scam red flag", "Normal", "Safe"],
        correctAnswer: 1,
        explanation: "Scammers use any excuse to prevent physical inspection."
      },
      {
        question: "How can you use the photo of the puppy to verify ownership?",
        options: ["Trust it", "Ask them to send a new photo with a specific item (e.g., a piece of paper with today's date)", "Zoom in", "Print it"],
        correctAnswer: 1,
        explanation: "The 'Paper Test'. If they can't send a new photo with a specific handwritten note/date, they don't have the dog."
      },
      {
        question: "The breeder claims to be registered with the 'ANKC' but isn't on the directory.",
        options: ["System error", "Lying/Scam", "Pending", "VIP member"],
        correctAnswer: 1,
        explanation: "Always look them up on the official Dogs Australia (ANKC) or state body website."
      },
      {
        question: "They have puppies available 'all year round' and multiple different breeds.",
        options: ["Professional", "Likely a Puppy Mill or Scam", "Efficient", "Big farm"],
        correctAnswer: 1,
        explanation: "Ethical breeders usually only have 1-2 litters a year. Constant supply suggests a mill or a scam."
      },
      {
        question: "You copy-paste the wording of their website 'About Us' section into Google.",
        options: ["It appears on 20 other breeder sites", "It is unique", "It translates", "Nothing happens"],
        correctAnswer: 0,
        explanation: "Scammers clone websites. Duplicate text across different sites is a sure sign of a scam network."
      },
      {
        question: "The breeder asks YOU lots of questions about your home and lifestyle.",
        options: ["Annoying", "Good sign - they care where the dog goes", "Data mining", "Rude"],
        correctAnswer: 1,
        explanation: "Good breeders vet the buyers. Scammers generally don't care, they just want the money."
      },
      {
        question: "The website domain was registered 1 week ago (check via WhoIs).",
        options: ["New business", "Scam site", "Rebranding", "Update"],
        correctAnswer: 1,
        explanation: "Use 'WhoIs' lookup. A website claiming '20 years experience' but registered last week is a fake."
      },
      {
        question: "They guarantee the puppy is '100% potty trained' at 8 weeks old.",
        options: ["Amazing", "Lie/Scam", "Genius dog", "Standard"],
        correctAnswer: 1,
        explanation: "It is biologically impossible for an 8-week-old puppy to be fully trained. They promise perfection to sell."
      }
    ]
  },
  {
    id: "11-04",
    title: "Payment & Red Flags",
    description: "Money talks: Understanding safe and unsafe payment methods.",
    questions: [
      {
        question: "The seller insists on payment via Western Union or MoneyGram.",
        options: ["Standard", "Scam - these are untraceable cash transfers", "Convenient", "Cheaper"],
        correctAnswer: 1,
        explanation: "Once cash is picked up via wire transfer, it is gone forever. Never use this for goods."
      },
      {
        question: "They ask for payment in Amazon or iTunes Gift Cards.",
        options: ["Scam", "Legit", "Fun", "Easy"],
        correctAnswer: 0,
        explanation: "No legitimate business accepts gift cards. This is a primary currency for scammers."
      },
      {
        question: "Is paying via Bank Transfer (Osko/PayID) 100% safe?",
        options: ["Yes, banks refund scams", "No, authorized push payments are hard to recover", "Yes, always", "Maybe"],
        correctAnswer: 1,
        explanation: "If you willingly send the money, banks often cannot recover it. It's safer than crypto, but not risk-free."
      },
      {
        question: "What is the safest way to pay a breeder?",
        options: ["Credit Card", "Cash in person", "Crypto", "Mail cash"],
        correctAnswer: 0,
        explanation: "Credit cards offer fraud protection and chargeback abilities. Scammers usually don't accept them."
      },
      {
        question: "They ask for a deposit to 'hold' the puppy before you see it.",
        options: ["Pay it", "Don't pay until you verify the breeder or see the dog", "Pay half", "Pay double"],
        correctAnswer: 1,
        explanation: "Deposits are the main goal of the scam. Verify first, pay second."
      },
      {
        question: "The bank account name they give you is different from the breeder name.",
        options: ["Suspicious - likely a 'money mule'", "They use a treasurer", "Married name", "Accountant"],
        correctAnswer: 0,
        explanation: "Mismatched names often mean the account belongs to a money mule, not the person you are talking to."
      },
      {
        question: "They send you a PayPal invoice but ask you to select 'Friends and Family'.",
        options: ["Do it to save fees", "Don't do it - you lose buyer protection", "It's fine", "Nice gesture"],
        correctAnswer: 1,
        explanation: "Friends and Family payments cannot be disputed. Scammers know this."
      },
      {
        question: "The price is quoted in USD but the breeder is in Queensland.",
        options: ["Global economy", "Scam script copy-paste error", "Exchange rate", "Preference"],
        correctAnswer: 1,
        explanation: "Scammers often forget to change the currency symbol when copying scripts."
      },
      {
        question: "You offer to pay cash upon pickup. They refuse and demand online payment.",
        options: ["They are digital only", "Scam - they don't have the dog", "Safety", "Accounting"],
        correctAnswer: 1,
        explanation: "If they won't take cash in hand for the dog in hand, there is no dog."
      },
      {
        question: "They ask for your credit card details via email text.",
        options: ["Send it", "Never send raw card details via email", "Send in two emails", "Send photo of card"],
        correctAnswer: 1,
        explanation: "This is unsafe and allows them to steal your identity/funds."
      }
    ]
  },
  {
    id: "11-05",
    title: "Emotional Manipulation",
    description: "Why smart people fall for puppy scams.",
    questions: [
      {
        question: "Why do scammers use puppies?",
        options: ["They are cute", "They bypass logic and trigger an emotional response", "High value", "Easy to ship"],
        correctAnswer: 1,
        explanation: "Puppies trigger a 'nurturing' response, making victims ignore red flags to 'save' or 'get' the cute animal."
      },
      {
        question: "You've already named the puppy based on the photo. Danger?",
        options: ["No", "Yes, psychological attachment makes you vulnerable", "Fun", "Normal"],
        correctAnswer: 1,
        explanation: "Once you emotionally 'own' the dog, you will pay any fee to get it home."
      },
      {
        question: "The scammer sends videos of the puppy playing. Does this prove it's theirs?",
        options: ["Yes", "No, videos can be stolen from YouTube/TikTok", "Yes, motion is real", "Maybe"],
        correctAnswer: 1,
        explanation: "Stolen videos are very common. Demand a video call or a specific action."
      },
      {
        question: "The scammer gets angry and accuses YOU of not trusting them.",
        options: ["Apologize", "Recognize this as gaslighting/manipulation", "Pay them", "Feel bad"],
        correctAnswer: 1,
        explanation: "Scammers use aggression and guilt when you ask too many questions."
      },
      {
        question: "The 'breeder' says the puppy will be euthanized if you don't buy it.",
        options: ["Buy it", "Scam - fake moral pressure", "Call shelter", "Cry"],
        correctAnswer: 1,
        explanation: "No legitimate breeder threatens to kill their dogs to make a sale."
      },
      {
        question: "You feel rushed to make a decision.",
        options: ["Market is hot", "Scammers create false urgency", "Normal", "Good sales"],
        correctAnswer: 1,
        explanation: "Urgency prevents critical thinking."
      },
      {
        question: "The scammer uses religious language (God bless, Reverend).",
        options: ["They are holy", "Common tactic to build false trust", "Church group", "Nice"],
        correctAnswer: 1,
        explanation: "Scammers often pose as missionaries or religious figures to seem trustworthy."
      },
      {
        question: "You are lonely and looking for a companion. Are you higher risk?",
        options: ["Yes", "No", "Maybe", "Same"],
        correctAnswer: 0,
        explanation: "Scammers target lonely or vulnerable demographics knowing they are desperate for connection."
      },
      {
        question: "The 'breeder' tells you a secret: they are giving it to you cheap because they like you.",
        options: ["You are special", "Flattery is a manipulation tactic", "Luck", "Fate"],
        correctAnswer: 1,
        explanation: "They try to make you feel 'chosen' so you don't want to lose the opportunity."
      },
      {
        question: "What is the best defense against emotional manipulation?",
        options: ["Stop feeling", "Slow down and talk to a skeptic friend", "Buy quickly", "Argue"],
        correctAnswer: 1,
        explanation: "Getting a second opinion breaks the emotional spell."
      }
    ]
  }
];