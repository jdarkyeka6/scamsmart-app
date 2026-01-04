export default [
  {
    id: "28-01",
    title: "The 'Free Trial' Trap",
    description: "It's free for 7 days, then expensive forever.",
    questions: [
      {
        question: "You sign up for a 'Free Trial' of a skin cream. Just pay $5 shipping.",
        options: ["Great deal", "Read T&Cs. You are likely agreeing to a monthly $99 subscription.", "Pay", "Try"],
        correctAnswer: 1,
        explanation: "The 'shipping only' trial is a contract for an expensive monthly supply."
      },
      {
        question: "Why do they ask for credit card info for a free trial?",
        options: ["ID verification", "To auto-charge you the moment the trial ends", "Trust", "Security"],
        correctAnswer: 1,
        explanation: "They are banking on you forgetting to cancel."
      },
      {
        question: "You try to cancel before the 7 days are up, but no one answers the phone.",
        options: ["Keep calling", "It's a scam tactic. They delay until the charge goes through.", "Email", "Wait"],
        correctAnswer: 1,
        explanation: "They make cancellation impossible on purpose."
      },
      {
        question: "The text says 'Free iPhone 15, just pay $2 delivery'.",
        options: ["Win", "Subscription scam. The $2 authorizes a recurring charge.", "Lucky", "Claim"],
        correctAnswer: 1,
        explanation: "There is no iPhone. You are subscribing to a useless service."
      },
      {
        question: "The checkbox for 'Auto-renew' is pre-ticked and tiny.",
        options: ["Helpful", "Dark Pattern", "Standard", "Nice"],
        correctAnswer: 1,
        explanation: "They hide the agreement in small print."
      },
      {
        question: "You see a charge for 'Membership Fees' you don't recognize.",
        options: ["Ignore", "Investigate. Likely a forgotten or hidden subscription.", "Bank error", "Wait"],
        correctAnswer: 1,
        explanation: "Scammers use generic names to hide on statements."
      },
      {
        question: "How to safely do free trials?",
        options: ["Use main card", "Use a Virtual Card with a spending limit or set a cancellation reminder immediately", "Trust memory", "Don't"],
        correctAnswer: 1,
        explanation: "Virtual cards prevent them from charging more than approved."
      },
      {
        question: "The 'Free Trial' is for a VPN or Antivirus from an unknown brand.",
        options: ["Try it", "Risky. Might be malware or a billing trap.", "Safe", "Secure"],
        correctAnswer: 1,
        explanation: "Stick to reputable brands."
      },
      {
        question: "They charge you $0.00 initially.",
        options: ["Free", "Card verification (Active check)", "Gift", "Error"],
        correctAnswer: 1,
        explanation: "Verifying the card is valid so they can charge big later."
      },
      {
        question: "Is it legal?",
        options: ["Yes, if hidden in T&Cs", "Grey area, but regulators fight 'Subscription Traps'", "No", "Maybe"],
        correctAnswer: 1,
        explanation: "It exploits loopholes in consumer law."
      }
    ]
  },
  {
    id: "28-02",
    title: "Dark Patterns",
    description: "Design tricks that force you to say yes.",
    questions: [
      {
        question: "You want to unsubscribe. The button is grey and hard to see.",
        options: ["Bad design", "Dark Pattern. Deliberate design to stop you leaving.", "Glitch", "Error"],
        correctAnswer: 1,
        explanation: "They make 'Stay' bright green and 'Leave' invisible grey."
      },
      {
        question: "To cancel, you must call a phone number (you can't do it online).",
        options: ["Personal touch", "Friction. Making it hard so you give up.", "Security", "Standard"],
        correctAnswer: 1,
        explanation: "Adding friction is a key retention tactic for shady companies."
      },
      {
        question: "The cancellation process has 5 'Are you sure?' pages.",
        options: ["They care", "Retention fatigue. Wearing you down.", "Security", "Confirm"],
        correctAnswer: 1,
        explanation: "They hope you close the tab before the final click."
      },
      {
        question: "The price is listed as '$5' (but in small print: 'per week, billed yearly').",
        options: ["Cheap", "Misleading pricing", "Good deal", "Standard"],
        correctAnswer: 1,
        explanation: "You think it's $5, but you get hit with a $260 bill."
      },
      {
        question: "A pop-up says 'Don't go! Here is 50% off'.",
        options: ["Take it", "Retention offer. Shows they were overcharging you.", "Nice", "Stay"],
        correctAnswer: 1,
        explanation: "They only offer value when you try to leave."
      },
      {
        question: "They use double negatives: 'Don't not cancel subscription'.",
        options: ["Confusing", "Trick wording to make you click the wrong button", "Typo", "Smart"],
        correctAnswer: 1,
        explanation: "Confusing language leads to accidental renewals."
      },
      {
        question: "The 'Start Trial' button is huge. The terms link is microscopic.",
        options: ["Design", "Hiding the contract", "Style", "Art"],
        correctAnswer: 1,
        explanation: "They want you to act without reading."
      },
      {
        question: "They sign you up for 'extras' automatically.",
        options: ["Bonus", "Negative Option Billing", "Gift", "Helpful"],
        correctAnswer: 1,
        explanation: "You have to untick boxes to avoid paying more."
      },
      {
        question: "The countdown timer resets when you refresh.",
        options: ["Magic", "Fake urgency pattern", "Bug", "Time travel"],
        correctAnswer: 1,
        explanation: "It's a lie to make you rush."
      },
      {
        question: "Is this ethical?",
        options: ["Yes", "No, it is manipulative design", "Maybe", "Business is business"],
        correctAnswer: 1,
        explanation: "It is widely condemned by UX designers and regulators."
      }
    ]
  },
  {
    id: "28-03",
    title: "Hidden Recurring Fees",
    description: "The zombie charges that never die.",
    questions: [
      {
        question: "You buy a product for a 'One Time' price of $50.",
        options: ["Done", "Check statement. Some sites sneakily add a membership.", "Safe", "Easy"],
        correctAnswer: 1,
        explanation: "Some dodgy retailers add a 'VIP Membership' to your cart."
      },
      {
        question: "The charge appears as a random acronym (e.g., 'MBI*Network').",
        options: ["Mystery", "Descriptor masking. Hiding the company name so you don't cancel.", "Bank code", "Tax"],
        correctAnswer: 1,
        explanation: "They don't want you to know who is charging you."
      },
      {
        question: "You cancelled the service, but they charged you again next month.",
        options: ["Mistake", "Zombie charge. You must contact bank to block it.", "Tip", "Fine"],
        correctAnswer: 1,
        explanation: "Some companies ignore cancellation requests."
      },
      {
        question: "The subscription is billed in USD, adding currency fees.",
        options: ["Okay", "Hidden cost", "Global", "Standard"],
        correctAnswer: 1,
        explanation: "Unexpected currency fees increase the cost."
      },
      {
        question: "They increase the price without telling you.",
        options: ["Inflation", "Breach of contract (usually requires notice)", "Rude", "Okay"],
        correctAnswer: 1,
        explanation: "Legitimate services must email you before a price hike."
      },
      {
        question: "You subscribed via an App Store (Apple/Google).",
        options: ["Check app settings", "Cancel via the app developer directly", "Call bank", "Delete app"],
        correctAnswer: 0,
        explanation: "Deleting the app DOES NOT cancel the subscription. You must go to Settings."
      },
      {
        question: "They charge a 'Cancellation Fee'.",
        options: ["Pay it", "Check if this was disclosed at signup. If not, dispute it.", "Fair", "Rule"],
        correctAnswer: 1,
        explanation: "Surprise exit fees are often unenforceable."
      },
      {
        question: "What is 'Creeping'?",
        options: ["Scary", "Slowly increasing the monthly fee by small amounts hoping you won't notice", "Walking", "Bug"],
        correctAnswer: 1,
        explanation: "Small increases often go unnoticed."
      },
      {
        question: "How to find hidden subscriptions?",
        options: ["Guess", "Review bank statements line-by-line", "Wait", "Ask bank"],
        correctAnswer: 1,
        explanation: "Manual review is the only way to catch them all."
      },
      {
        question: "The company has no contact email.",
        options: ["Ghost", "Scam tactic to prevent cancellation", "Busy", "Modern"],
        correctAnswer: 1,
        explanation: "No contact info = No way to cancel."
      }
    ]
  },
  {
    id: "28-04",
    title: "Counterfeit Services",
    description: "Fake Netflix and Spotify.",
    questions: [
      {
        question: "Ad: 'Get Netflix Lifetime Account for $20'.",
        options: ["Buy", "Scam. There is no such thing as a lifetime account.", "Good deal", "Hack"],
        correctAnswer: 1,
        explanation: "These are stolen accounts that will stop working once the real owner notices."
      },
      {
        question: "You buy a 'Cracked' version of Spotify.",
        options: ["Install", "Malware risk. Pirated apps often contain spyware.", "Listen", "Free"],
        correctAnswer: 1,
        explanation: "Nothing is free. You pay with your data/security."
      },
      {
        question: "The login page for 'Disney+' looks slightly different.",
        options: ["Update", "Phishing site. Check URL.", "New design", "Cool"],
        correctAnswer: 1,
        explanation: "Fake login pages steal your real credentials."
      },
      {
        question: "They ask for crypto payment for the subscription.",
        options: ["Modern", "Scam. Netflix does not take Bitcoin.", "Safe", "Private"],
        correctAnswer: 1,
        explanation: "Major streaming services use cards/PayPal, not crypto."
      },
      {
        question: "The account stops working after 2 days.",
        options: ["Glitch", "The real owner changed the password", "Refund", "Wait"],
        correctAnswer: 1,
        explanation: "You bought a stolen login, and the owner kicked you off."
      },
      {
        question: "Can you get in trouble for using stolen accounts?",
        options: ["No", "Yes, it is handling stolen goods/services", "Maybe", "Who cares"],
        correctAnswer: 1,
        explanation: "It is illegal and supports criminal hacking."
      },
      {
        question: "The seller is on Telegram/Dark Web.",
        options: ["Shady", "Standard for black market goods", "Normal", "Tech"],
        correctAnswer: 1,
        explanation: "Legitimate businesses don't operate solely on encrypted chat apps."
      },
      {
        question: "You have to use a VPN to access the service.",
        options: ["Okay", "Bypassing geoblocks usually violates T&Cs", "Secure", "Fast"],
        correctAnswer: 1,
        explanation: "While common, it can lead to account bans."
      },
      {
        question: "The 'Family Plan' involves strangers.",
        options: ["Join", "Risk. The 'Head of Household' can see your activity/kick you.", "Save money", "Friends"],
        correctAnswer: 1,
        explanation: "Sharing plans with strangers is risky."
      },
      {
        question: "Why not just pay full price?",
        options: ["Expensive", "Security and reliability", "Dumb", "Rich"],
        correctAnswer: 1,
        explanation: "Official subscriptions guarantee safety and support."
      }
    ]
  },
  {
    id: "28-05",
    title: "How to Cancel & Chargeback",
    description: "Escaping the trap.",
    questions: [
      {
        question: "You can't contact the merchant to cancel.",
        options: ["Give up", "Call your bank and ask to stop payment / cancel card", "Keep paying", "Cry"],
        correctAnswer: 1,
        explanation: "Banks can block specific merchants or reissue your card."
      },
      {
        question: "What is a 'Chargeback'?",
        options: ["A refund", "A forced reversal of funds by the bank due to fraud/dispute", "A fee", "A loan"],
        correctAnswer: 1,
        explanation: "Your right as a cardholder to dispute unfair charges."
      },
      {
        question: "When should you chargeback?",
        options: ["Didn't like product", "Merchant refuses to cancel/refund despite following T&Cs", "Forgot", "Poor"],
        correctAnswer: 1,
        explanation: "Use it when the merchant is non-compliant or fraudulent."
      },
      {
        question: "Keep evidence of your cancellation request.",
        options: ["Why", "To prove to the bank you tried to resolve it", "Waste of time", "Paperwork"],
        correctAnswer: 1,
        explanation: "Banks require proof you tried to contact the merchant first."
      },
      {
        question: "Can they send debt collectors for a cancelled subscription?",
        options: ["Yes", "Technically yes, but rarely for small scams. Don't be intimidated.", "No", "Always"],
        correctAnswer: 1,
        explanation: "Scammers threaten debt collection but rarely follow through."
      },
      {
        question: "Does cancelling the card stop the subscription?",
        options: ["Yes", "Usually yes, unless 'card updater' services provide the new number", "No", "Maybe"],
        correctAnswer: 1,
        explanation: "Visa/Mastercard sometimes auto-update your new card number to merchants. Tell bank to block the Merchant ID specifically."
      },
      {
        question: "The merchant offers a partial refund to stop the chargeback.",
        options: ["Take it", "Refuse if you are entitled to full refund", "Good", "Nice"],
        correctAnswer: 1,
        explanation: "They want to avoid the 'Chargeback Fee' the bank charges them."
      },
      {
        question: "Is there a time limit on chargebacks?",
        options: ["No", "Yes, usually 90-120 days from transaction", "Forever", "1 week"],
        correctAnswer: 1,
        explanation: "Act fast. You can't dispute years-old charges."
      },
      {
        question: "You used a debit card.",
        options: ["Harder to chargeback", "Impossible", "Same", "Easier"],
        correctAnswer: 0,
        explanation: "Credit cards often have stronger consumer protections."
      },
      {
        question: "The best prevention?",
        options: ["Virtual Cards", "Fake names", "Cash", "No internet"],
        correctAnswer: 0,
        explanation: "Disposable virtual cards put you in control."
      }
    ]
  }
];