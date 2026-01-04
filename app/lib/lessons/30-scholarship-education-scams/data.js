export default [
  {
    id: "30-01",
    title: "Fake Scholarship Offers",
    description: "You've won a scholarship you didn't apply for!",
    questions: [
      {
        question: "You receive an email: 'Guaranteed Scholarship! Claim now'.",
        options: ["Claim", "Scam. Scholarships are merit-based, not guaranteed.", "Lucky", "Apply"],
        correctAnswer: 1,
        explanation: "No legitimate scholarship is 'guaranteed' to random email recipients."
      },
      {
        question: "They ask for a 'Processing Fee' of $200 to release the scholarship money.",
        options: ["Pay", "Scam. You never pay money to get a scholarship.", "Small fee", "Tax"],
        correctAnswer: 1,
        explanation: "Scholarships GIVE you money. They don't TAKE it."
      },
      {
        question: "The offer comes from a free email address (scholarship-fund@yahoo.com).",
        options: ["Legit", "Scam", "Budget", "New"],
        correctAnswer: 1,
        explanation: "Official bodies use academic (.edu) or org domains."
      },
      {
        question: "They ask for your Bank Login to deposit the funds.",
        options: ["Give it", "Scam. They only need BSB/Acc No, never a password.", "Login", "Trust"],
        correctAnswer: 1,
        explanation: "Never share banking passwords."
      },
      {
        question: "They invite you to a 'Scholarship Seminar' in a hotel room.",
        options: ["Go", "High pressure sales pitch / Scam risk", "Networking", "Learn"],
        correctAnswer: 1,
        explanation: "Often a front for selling expensive, useless courses."
      },
      {
        question: "The scholarship name sounds prestigious but vague ('National Student Trust').",
        options: ["Impressive", "Google it. Scammers use generic names.", "Real", "Honor"],
        correctAnswer: 1,
        explanation: "Verify the existence of the organization."
      },
      {
        question: "You have to give credit card details to 'verify eligibility'.",
        options: ["Verify", "Scam", "Standard", "Check"],
        correctAnswer: 1,
        explanation: "Card details are not proof of academic merit."
      },
      {
        question: "Can international students get scammed?",
        options: ["Yes, they are prime targets", "No", "Rarely", "Never"],
        correctAnswer: 0,
        explanation: "Scammers target international students unfamiliar with local systems."
      },
      {
        question: "The deadline is 'TONIGHT'.",
        options: ["Hurry", "False urgency scam", "Apply", "Fast"],
        correctAnswer: 1,
        explanation: "Real scholarships have clear, long-term deadlines."
      },
      {
        question: "Where to find real scholarships?",
        options: ["Spam folder", "University website / Government directories", "Facebook ads", "Texts"],
        correctAnswer: 1,
        explanation: "Go to official sources."
      }
    ]
  },
  {
    id: "30-02",
    title: "Diploma Mills",
    description: "Buying a degree helps nobody.",
    questions: [
      {
        question: "A website offers a 'Life Experience Degree' for $500. No study needed.",
        options: ["Buy it", "Scam / Diploma Mill. The degree is worthless.", "Easy", "Smart"],
        correctAnswer: 1,
        explanation: "Employers verify degrees. A fake degree can get you fired or blacklisted."
      },
      {
        question: "The university name looks real but is slightly off ('University of Sidney' vs 'Sydney').",
        options: ["Typo", "Scam lookalike university", "Branch", "New"],
        correctAnswer: 1,
        explanation: "Scammers use slight misspellings to trick you."
      },
      {
        question: "Can you use a fake degree for a visa application?",
        options: ["Yes", "NO. This is visa fraud and leads to deportation/bans.", "Maybe", "Once"],
        correctAnswer: 1,
        explanation: "Immigration departments strictly verify education documents."
      },
      {
        question: "They promise the degree is 'Accredited' but the accreditor is fake.",
        options: ["Trust", "Verify accreditation with government bodies (TEQSA in Australia)", "Good", "Safe"],
        correctAnswer: 1,
        explanation: "Scammers create fake accreditation boards to back up their fake universities."
      },
      {
        question: "You receive the degree in the mail 1 week after paying.",
        options: ["Fast", "Scam. Real degrees take years.", "Efficient", "Express"],
        correctAnswer: 1,
        explanation: "Instant degrees are just expensive paper."
      },
      {
        question: "Why are these bad?",
        options: ["They aren't", "It devalues real education and is fraud", "Cheaper", "Faster"],
        correctAnswer: 1,
        explanation: "It undermines the entire education system."
      },
      {
        question: "They offer 'Transcripts' with straight As for extra money.",
        options: ["Buy", "Fraud", "Grades", "GPA"],
        correctAnswer: 1,
        explanation: "Falsifying academic records is illegal."
      },
      {
        question: "The 'University' has no physical campus address.",
        options: ["Online only", "Red flag", "Modern", "Cloud"],
        correctAnswer: 1,
        explanation: "Legitimate online unis still have a headquarters."
      },
      {
        question: "Can you get a refund?",
        options: ["Yes", "No, criminals don't refund", "Maybe", "Bank"],
        correctAnswer: 1,
        explanation: "Money sent to diploma mills is gone."
      },
      {
        question: "How to check if a Uni is real in Australia?",
        options: ["Google", "CRICOS / TEQSA National Register", "Ask friend", "Facebook"],
        correctAnswer: 1,
        explanation: "CRICOS lists all providers registered to teach international students."
      }
    ]
  },
  {
    id: "30-03",
    title: "Student Visa Scams",
    description: "Agents who promise the world but deliver deportation.",
    questions: [
      {
        question: "An 'Migration Agent' guarantees a visa if you pay cash upfront.",
        options: ["Pay", "Scam. No one can GUARANTEE a visa result.", "Safe", "Fast"],
        correctAnswer: 1,
        explanation: "Only the Department of Home Affairs decides visas. Guarantees are lies."
      },
      {
        question: "The agent is not registered with MARA (Migration Agents Registration Authority).",
        options: ["Fine", "Illegal. Only registered agents can give migration advice in Australia.", "Cheaper", "Okay"],
        correctAnswer: 1,
        explanation: "Check the MARA register. Unregistered agents are breaking the law."
      },
      {
        question: "They ask you to sign a blank form.",
        options: ["Sign", "Never sign blank forms.", "Trust", "Easy"],
        correctAnswer: 1,
        explanation: "They can fill in fake details that ruin your future."
      },
      {
        question: "They advise you to lie on your application.",
        options: ["Do it", "Refuse. Providing false info leads to visa cancellation.", "Smart", "Easy"],
        correctAnswer: 1,
        explanation: "You are responsible for the application, even if the agent fills it out."
      },
      {
        question: "They threaten to have you deported if you don't pay more money.",
        options: ["Pay", "Report them to Border Force/Police. Extortion.", "Hide", "Panic"],
        correctAnswer: 1,
        explanation: "Scammers use your fear of deportation to control you."
      },
      {
        question: "They offer a 'Job + Visa' package for $20,000.",
        options: ["Buy", "Visa trafficking scam", "Good deal", "Work"],
        correctAnswer: 1,
        explanation: "Paying for visa sponsorship is illegal ('Cash for Visas')."
      },
      {
        question: "The agent communicates only via WhatsApp/WeChat.",
        options: ["Modern", "Unprofessional. Look for an office/official email.", "Fast", "Easy"],
        correctAnswer: 1,
        explanation: "Legitimate agents have professional setups."
      },
      {
        question: "They withhold your passport.",
        options: ["Normal", "Illegal. Human trafficking red flag.", "Safe keeping", "Trust"],
        correctAnswer: 1,
        explanation: "Never let anyone take your passport."
      },
      {
        question: "Where to apply for a visa safely?",
        options: ["Agent's personal site", "Home Affairs official website (ImmiAccount)", "Facebook", "Email"],
        correctAnswer: 1,
        explanation: "The official government portal is the safest route."
      },
      {
        question: "They claim to have 'connections' inside the department.",
        options: ["Impressive", "Lie/Scam", "Helpful", "Good"],
        correctAnswer: 1,
        explanation: "Corruption claims are used to extract higher fees."
      }
    ]
  },
  {
    id: "30-04",
    title: "Essay Mills & Blackmail",
    description: "Contract cheating turns into extortion.",
    questions: [
      {
        question: "You pay a website to write your essay for you.",
        options: ["Easy distinction", "Contract Cheating (Academic Misconduct)", "Smart", "Help"],
        correctAnswer: 1,
        explanation: "It's not just cheating; it's risky."
      },
      {
        question: "After submitting the essay, the company demands $1000 or they will tell your Uni.",
        options: ["Pay", "Blackmail. This happens frequently.", "Ignore", "Deny"],
        correctAnswer: 1,
        explanation: "Essay mills often pivot to blackmailing students."
      },
      {
        question: "The quality of the bought essay is...",
        options: ["Perfect", "Often poor, AI-generated, or plagiarized", "Good", "Passable"],
        correctAnswer: 1,
        explanation: "You often pay for garbage that fails anyway."
      },
      {
        question: "Is contract cheating illegal in Australia?",
        options: ["No", "Yes, it is illegal to provide/advertise these services", "Maybe", "Only for PhD"],
        correctAnswer: 1,
        explanation: "Laws were strengthened to ban commercial cheating services."
      },
      {
        question: "They offer 'Tutoring' but actually do the work for you.",
        options: ["Helpful", "Cheating disguised as help", "Tutor", "Learn"],
        correctAnswer: 1,
        explanation: "Fine line between help and cheating."
      },
      {
        question: "They have your personal details and University name.",
        options: ["Scary", "Necessary for the scam", "Okay", "Safe"],
        correctAnswer: 1,
        explanation: "They have all the ammo needed to get you expelled."
      },
      {
        question: "You get a DM offering 'Homework Help' right after posting about stress.",
        options: ["Reply", "Bot/Scammer targeting keywords", "Nice", "Luck"],
        correctAnswer: 1,
        explanation: "They prey on stressed students."
      },
      {
        question: "What happens if the Uni finds out?",
        options: ["Nothing", "Expulsion / Degree revoked", "Warning", "Detention"],
        correctAnswer: 1,
        explanation: "Academic misconduct carries heavy penalties."
      },
      {
        question: "The website claims '100% Confidential'.",
        options: ["Trust", "Lie. They use data for blackmail.", "Safe", "Secure"],
        correctAnswer: 1,
        explanation: "There is no honor among thieves."
      },
      {
        question: "Better alternative?",
        options: ["Cheating", "Ask tutor for extension / Study support services", "Quit", "Cry"],
        correctAnswer: 1,
        explanation: "Unis have support systems for struggling students."
      }
    ]
  },
  {
    id: "30-05",
    title: "Tuition Fee Scams",
    description: "Don't lose your semester fees.",
    questions: [
      {
        question: "A 'third party' offers to pay your tuition for a 10% discount.",
        options: ["Great deal", "Money Laundering / Credit Card Fraud", "Take it", "Save"],
        correctAnswer: 1,
        explanation: "They pay the Uni with a stolen card. When the bank reverses it, you still owe the Uni."
      },
      {
        question: "You receive an email from the Uni with 'new bank details' for fees.",
        options: ["Pay", "Verify. Call the finance office.", "Update", "Okay"],
        correctAnswer: 1,
        explanation: "Universities don't change bank accounts randomly."
      },
      {
        question: "Someone on WeChat offers 'Cheap Currency Exchange' to pay fees.",
        options: ["Use them", "High risk. Use official banks/Forex.", "Save money", "Friend"],
        correctAnswer: 1,
        explanation: "Illegal forex dealers often steal the cash."
      },
      {
        question: "They threaten to cancel your enrollment if you don't pay via a link today.",
        options: ["Pay", "Scam. Check student portal.", "Panic", "Click"],
        correctAnswer: 1,
        explanation: "Use the official student portal for all payments."
      },
      {
        question: "The 'discount' agent asks for your student login.",
        options: ["Give it", "Never share login.", "Okay", "Help"],
        correctAnswer: 1,
        explanation: "They log in to make it look like they paid."
      },
      {
        question: "How to safely pay tuition?",
        options: ["Cash to stranger", "Official University Payment Portal", "Gift cards", "Crypto"],
        correctAnswer: 1,
        explanation: "Stick to the official channels."
      },
      {
        question: "You paid the scammer. Does the Uni care?",
        options: ["They will waive the fee", "No, you still owe the tuition", "Maybe", "Yes"],
        correctAnswer: 1,
        explanation: "The University still requires payment. You lose twice."
      },
      {
        question: "The agent shows a receipt.",
        options: ["Trust", "Verify on student portal", "Fake", "Good"],
        correctAnswer: 1,
        explanation: "Receipts are easily photoshopped."
      },
      {
        question: "Target audience for this scam?",
        options: ["International students", "Locals", "Staff", "Everyone"],
        correctAnswer: 0,
        explanation: "International students dealing with currency conversion are the main target."
      },
      {
        question: "Is 'Peer-to-Peer' transfer safe for fees?",
        options: ["No", "Yes", "Always", "Maybe"],
        correctAnswer: 0,
        explanation: "Too much risk of fraud."
      }
    ]
  }
];