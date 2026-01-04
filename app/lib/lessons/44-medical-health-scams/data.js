export default [
  {
    id: "44-01",
    title: "Miracle Cures",
    description: "Snake oil for the digital age.",
    questions: [
      {
        question: "Ad: 'Cure Diabetes in 7 days with this secret herb'.",
        options: ["Buy", "Scam. There is no rapid cure for diabetes.", "Try", "Hope"],
        correctAnswer: 1,
        explanation: "Medical scams prey on the desperate with 'miracle' claims that science rejects."
      },
      {
        question: "The website claims 'Doctors hate this trick!'.",
        options: ["Secret", "Classic clickbait scam headline", "True", "Learn"],
        correctAnswer: 1,
        explanation: "Conspiracy theories ('Big Pharma is hiding it') are used to explain why it's not in stores."
      },
      {
        question: "The product is 'All Natural' so it must be safe.",
        options: ["True", "False. Natural things can be toxic or interact with meds.", "Always", "Good"],
        correctAnswer: 1,
        explanation: "Arsenic is natural. 'Natural' does not mean safe or effective."
      },
      {
        question: "They use fake celebrity endorsements (e.g. David Koch).",
        options: ["Endorsed", "Scam. Celebs sue over these fake ads constantly.", "Real", "Trust"],
        correctAnswer: 1,
        explanation: "They Photoshop the product into the celebrity's hand."
      },
      {
        question: "Subscription trap: 'Free Bottle, just pay shipping'.",
        options: ["Get it", "Read T&Cs. It likely signs you up for $100/month.", "Free", "Deal"],
        correctAnswer: 1,
        explanation: "The free trial is a billing trap."
      },
      {
        question: "Testimonials claim it cured cancer.",
        options: ["Amazing", "Illegal/Scam. Report to TGA/ACCC.", "Hope", "Buy"],
        correctAnswer: 1,
        explanation: "It is illegal to advertise cancer cures to the public in Australia."
      },
      {
        question: "The website has no scientific studies linked.",
        options: ["Fine", "Red flag. Real meds have data.", "Secret", "New"],
        correctAnswer: 1,
        explanation: "Evidence is required for health claims."
      },
      {
        question: "What is the TGA?",
        options: ["Therapeutic Goods Administration", "The Good Apple", "Total Guard", "Tennis Group"],
        correctAnswer: 0,
        explanation: "The TGA regulates medicines in Australia. Check if the product is listed."
      },
      {
        question: "Can these products harm you?",
        options: ["No", "Yes, they may contain hidden ingredients or stop you taking real meds", "Maybe", "Never"],
        correctAnswer: 1,
        explanation: "Delaying real treatment for a fake cure can be fatal."
      },
      {
        question: "Money back guarantee?",
        options: ["Trust it", "Often a lie. The company disappears.", "Good", "Safe"],
        correctAnswer: 1,
        explanation: "Scammers don't process refunds."
      }
    ]
  },
  {
    id: "44-02",
    title: "Fake Online Pharmacies",
    description: "Cheap meds that might be poison.",
    questions: [
      {
        question: "You find a site selling prescription drugs without a prescription.",
        options: ["Convenient", "Illegal and dangerous scam.", "Easy", "Cheap"],
        correctAnswer: 1,
        explanation: "Legitimate pharmacies legally require a script. No script = Black market."
      },
      {
        question: "The prices are 90% cheaper than the chemist.",
        options: ["Bargain", "Likely counterfeit drugs (chalk/fentanyl).", "Good", "Sale"],
        correctAnswer: 1,
        explanation: "Counterfeit meds often contain wrong doses or toxic fillers."
      },
      {
        question: "The site is based overseas (e.g. 'Canadian Pharmacy' shipping from Vanuatu).",
        options: ["Global", "Red flag. Meds may be seized by Border Force.", "Fine", "Import"],
        correctAnswer: 1,
        explanation: "Importing prescription drugs is strictly controlled."
      },
      {
        question: "They accept Bitcoin only.",
        options: ["Modern", "Scam. Used to hide the seller's identity.", "Fast", "Safe"],
        correctAnswer: 1,
        explanation: "Real pharmacies accept credit cards."
      },
      {
        question: "You receive the pills in a Ziploc bag.",
        options: ["Eco-friendly", "Huge danger sign. Real meds come in blister packs/bottles.", "Okay", "Simple"],
        correctAnswer: 1,
        explanation: "Unprofessional packaging suggests a backyard lab."
      },
      {
        question: "Identity theft risk.",
        options: ["Low", "High. They have your name, address, and medical info.", "None", "Medium"],
        correctAnswer: 1,
        explanation: "Medical data is valuable on the black market."
      },
      {
        question: "The pills look crumbly or different color.",
        options: ["New brand", "Do not take. Likely fake.", "Fine", "Old"],
        correctAnswer: 1,
        explanation: "Visual defects indicate poor manufacturing."
      },
      {
        question: "Who regulates Aussie pharmacies?",
        options: ["Nobody", "Pharmacy Board / AHPRA", "Google", "Facebook"],
        correctAnswer: 1,
        explanation: "Look for the QCPP logo or registration."
      },
      {
        question: "Can you go to jail?",
        options: ["No", "Importing controlled substances (steroids/painkillers) is a crime", "Maybe", "Rarely"],
        correctAnswer: 1,
        explanation: "You could face legal trouble."
      },
      {
        question: "What if you took them?",
        options: ["Wait", "See a doctor immediately if you feel unwell", "Sleep", "Eat"],
        correctAnswer: 1,
        explanation: "Medical attention is priority."
      }
    ]
  },
  {
    id: "44-03",
    title: "Medicare Phishing",
    description: "Your health record is the key.",
    questions: [
      {
        question: "SMS: 'Medicare: You have a rebate pending. Click here'.",
        options: ["Click", "Scam. Medicare rebates are automatic or via myGov.", "Claim", "Money"],
        correctAnswer: 1,
        explanation: "Medicare doesn't text links for rebates."
      },
      {
        question: "They ask for your Medicare card number to 'verify a refund'.",
        options: ["Give", "ID Theft. They use the number to make fake claims.", "Verify", "Okay"],
        correctAnswer: 1,
        explanation: "Your Medicare number is part of your identity profile."
      },
      {
        question: "You see medical services on your history you didn't have.",
        options: ["Mistake", "Medical ID Theft. Someone is using your card.", "Forget", "Wait"],
        correctAnswer: 1,
        explanation: "Someone is getting treated on your dime, corrupting your medical history."
      },
      {
        question: "Call: 'We need to update your card to the new plastic one'.",
        options: ["Update", "Scam. Cards are sent automatically.", "Thanks", "Help"],
        correctAnswer: 1,
        explanation: "They want your details."
      },
      {
        question: "Why steal medical ID?",
        options: ["Fun", "To get expensive drugs or surgery for free", "Curiosity", "Paper"],
        correctAnswer: 1,
        explanation: "It's about accessing high-value services."
      },
      {
        question: "Is your My Health Record safe?",
        options: ["Yes", "Only if you protect your myGov password with 2FA", "No", "Maybe"],
        correctAnswer: 1,
        explanation: "The weak link is usually the user's password."
      },
      {
        question: "They ask for a fee to 'setup' Medicare.",
        options: ["Pay", "Scam. Medicare is free.", "Fee", "Tax"],
        correctAnswer: 1,
        explanation: "Scammers charge for free services."
      },
      {
        question: "The website is 'medicare-au-portal.net'.",
        options: ["Legit", "Scam. Look for my.gov.au", "Backup", "New"],
        correctAnswer: 1,
        explanation: "Check the domain."
      },
      {
        question: "What if you lose your card?",
        options: ["Facebook", "Report via official app/phone immediately", "Wait", "Ignore"],
        correctAnswer: 1,
        explanation: "Cancel it so it can't be used."
      },
      {
        question: "Who to report fraud to?",
        options: ["Services Australia Fraud Tip-off", "Police", "Doctor", "All"],
        correctAnswer: 0,
        explanation: "There is a specific line for Medicare fraud."
      }
    ]
  },
  {
    id: "44-04",
    title: "Weight Loss Scams",
    description: "Losing money, not kilos.",
    questions: [
      {
        question: "Ad: 'Melt fat overnight with this keto gummy'.",
        options: ["Buy", "Scam. Biological impossibility.", "Try", "Yum"],
        correctAnswer: 1,
        explanation: "Instant weight loss claims are always false."
      },
      {
        question: "They use Shark Tank footage.",
        options: ["Endorsed", "Stolen/Edited footage. Sharks rarely endorse these.", "Real", "Cool"],
        correctAnswer: 1,
        explanation: "The 'Shark Tank Keto' scam is infamous."
      },
      {
        question: "You are charged $200 instead of $20.",
        options: ["Error", "Hidden subscription/upsell scam", "Tax", "Shipping"],
        correctAnswer: 1,
        explanation: "They hide the full price in the fine print."
      },
      {
        question: "The 'Before and After' photos are different people.",
        options: ["Proof", "Fake. Reverse image search them.", "Results", "Good"],
        correctAnswer: 1,
        explanation: "They steal photos from fitness blogs."
      },
      {
        question: "The company has no address, just an email.",
        options: ["Online", "Red flag", "Modern", "Efficient"],
        correctAnswer: 1,
        explanation: "No accountability."
      },
      {
        question: "They offer a 30-day guarantee but won't answer the phone.",
        options: ["Busy", "Scam tactic to run out the clock", "Wait", "Email"],
        correctAnswer: 1,
        explanation: "They delay until the guarantee expires."
      },
      {
        question: "The product is 'Ozempic' sold without a script.",
        options: ["Buy", "Dangerous/Fake. Prescription meds need a doctor.", "Easy", "Fast"],
        correctAnswer: 1,
        explanation: "Black market weight loss injections are high risk."
      },
      {
        question: "Influencers promote it.",
        options: ["Trust", "They are paid. Doesn't mean it works.", "Buy", "Like"],
        correctAnswer: 1,
        explanation: "Influencers sell attention, not medical advice."
      },
      {
        question: "What is 'Clenbuterol'?",
        options: ["Vitamin", "Dangerous substance often found in 'burners'", "Food", "Safe"],
        correctAnswer: 1,
        explanation: "Illegal ingredients hide in 'natural' pills."
      },
      {
        question: "Safe way to lose weight?",
        options: ["Pills", "Diet and exercise / Doctor advice", "Scams", "Magic"],
        correctAnswer: 1,
        explanation: "There is no magic pill."
      }
    ]
  },
  {
    id: "44-05",
    title: "Fake COVID/Pandemic Scams",
    description: "Exploiting health crises.",
    questions: [
      {
        question: "Text: 'You are a close contact. Click to order a test kit'.",
        options: ["Click", "Scam. Govts don't sell kits via random texts.", "Order", "Test"],
        correctAnswer: 1,
        explanation: "Using fear of current viruses to sell fake kits."
      },
      {
        question: "They offer a 'Vaccine Exemption' for cash.",
        options: ["Buy", "Illegal fraud. Documents are fake.", "Freedom", "Easy"],
        correctAnswer: 1,
        explanation: "Paying for medical records is a crime."
      },
      {
        question: "The site sells N95 masks for cheap in bulk.",
        options: ["Stock up", "Non-delivery scam (during shortages)", "Deal", "Safe"],
        correctAnswer: 1,
        explanation: "Scammers profit from supply shortages."
      },
      {
        question: "Robocall about 'Long Covid Compensation'.",
        options: ["Claim", "Lead gen scam", "Listen", "Yes"],
        correctAnswer: 1,
        explanation: "There is no general compensation fund calling you."
      },
      {
        question: "They ask for Medicare details for a 'Survey'.",
        options: ["Give", "Data harvesting", "Help", "Okay"],
        correctAnswer: 1,
        explanation: "Surveys don't need your card number."
      },
      {
        question: "Fake contact tracers asking for bank details.",
        options: ["Give", "Contact tracers NEVER asked for financial info", "Trust", "Health"],
        correctAnswer: 1,
        explanation: "Health officials track health, not money."
      },
      {
        question: "Investment in a 'New Cure'.",
        options: ["Invest", "Pump and dump stock scam", "Rich", "Science"],
        correctAnswer: 1,
        explanation: "Hyping fake biotech companies."
      },
      {
        question: "Charity for victims.",
        options: ["Donate", "Check charity register first", "Give", "Help"],
        correctAnswer: 1,
        explanation: "Fake charities emerge during every crisis."
      },
      {
        question: "Email from 'WHO' (World Health Org).",
        options: ["Official", "Scam. WHO doesn't email individuals.", "Read", "Open"],
        correctAnswer: 1,
        explanation: "Impersonating global bodies."
      },
      {
        question: "Best source of info?",
        options: ["Facebook", "health.gov.au", "Text", "Email"],
        correctAnswer: 1,
        explanation: "Stick to government sources."
      }
    ]
  }
];