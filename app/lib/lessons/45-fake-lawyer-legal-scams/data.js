export default [
  {
    id: "45-01",
    title: "The Inheritance Email",
    description: "A distant relative left you millions.",
    questions: [
      {
        question: "Email: 'I am the lawyer for your late relative. You inherited $5M'.",
        options: ["Reply", "Scam. Lawyers don't email randoms about millions.", "Rich", "Lucky"],
        correctAnswer: 1,
        explanation: "The 'Prince' scam re-branded as a lawyer. If you didn't know the relative, they don't exist."
      },
      {
        question: "They ask for an upfront 'Legal Fee' to release the money.",
        options: ["Pay", "Advance Fee Fraud. Fees are deducted from the estate, not paid by you.", "Small fee", "Okay"],
        correctAnswer: 1,
        explanation: "You never pay to receive an inheritance."
      },
      {
        question: "The lawyer uses a Gmail address.",
        options: ["Normal", "Scam. Lawyers use firm domains.", "Private", "Secure"],
        correctAnswer: 1,
        explanation: "Professional firms have professional emails."
      },
      {
        question: "They send a poor quality photo of a passport/ID.",
        options: ["Proof", "Stolen ID used to build trust", "Real", "Looks good"],
        correctAnswer: 1,
        explanation: "Sending unprompted ID is a scammer trait."
      },
      {
        question: "The name of the deceased shares your last name.",
        options: ["Coincidence", "They search for people with common surnames to target", "Family", "Fate"],
        correctAnswer: 1,
        explanation: "They target 'Smiths' and 'Joneses' easily."
      },
      {
        question: "They ask for your bank details to 'transfer the funds'.",
        options: ["Give", "ID Theft / Account draining risk", "Get money", "Safe"],
        correctAnswer: 1,
        explanation: "They want to empty your account, not fill it."
      },
      {
        question: "The document has fake seals and stamps.",
        options: ["Official", "Graphics designed to impress victims", "Legal", "Valid"],
        correctAnswer: 1,
        explanation: "More gold stamps = More likely a scam."
      },
      {
        question: "They demand secrecy.",
        options: ["Why?", "To stop you asking for advice", "Okay", "Shh"],
        correctAnswer: 1,
        explanation: "Isolation prevents detection."
      },
      {
        question: "They claim the money is trapped in a foreign bank.",
        options: ["Complex", "Standard excuse for delays/fees", "Travel", "Wait"],
        correctAnswer: 1,
        explanation: "Foreign jurisdictions explain why it's 'hard' to get the money."
      },
      {
        question: "What to do?",
        options: ["Delete", "Pay", "Reply", "Dream"],
        correctAnswer: 0,
        explanation: "Ignore it."
      }
    ]
  },
  {
    id: "45-02",
    title: "Fake Lawsuits",
    description: "You are being sued (unless you pay).",
    questions: [
      {
        question: "Call: 'A lawsuit is being filed against you. Pay settlement now to stop it'.",
        options: ["Pay", "Scam. Legal proceedings are served in writing, not settled via cold call.", "Panic", "Argue"],
        correctAnswer: 1,
        explanation: "You cannot settle a court case via a panicked phone call."
      },
      {
        question: "They want payment in Gift Cards.",
        options: ["Pay", "Scam. Courts don't take iTunes cards.", "Okay", "Fast"],
        correctAnswer: 1,
        explanation: "Universal scam sign."
      },
      {
        question: "They threaten immediate arrest.",
        options: ["Hide", "Civil lawsuits don't result in immediate police arrest.", "Pay", "Cry"],
        correctAnswer: 1,
        explanation: "Civil disputes (money) are not criminal matters (jail)."
      },
      {
        question: "You click a link to 'View Court Summons'.",
        options: ["Click", "Malware risk. Don't click.", "Read", "Open"],
        correctAnswer: 1,
        explanation: "Drive-by downloads infect your PC."
      },
      {
        question: "The caller claims to be a 'Magistrate'.",
        options: ["Respect", "Judges do not make phone calls to defendants.", "Talk", "Listen"],
        correctAnswer: 1,
        explanation: "Impersonating judiciary is a tactic."
      },
      {
        question: "You have no knowledge of the debt/crime.",
        options: ["Mistake", "Scam", "Forgot", "Pay just in case"],
        correctAnswer: 1,
        explanation: "They rely on you paying to make the problem go away."
      },
      {
        question: "They reference a 'Federal Case ID'.",
        options: ["Real", "Fake numbers to sound official", "Check", "Note"],
        correctAnswer: 1,
        explanation: "Made up jargon."
      },
      {
        question: "How are real summons served?",
        options: ["Email", "In person or registered post", "Text", "Call"],
        correctAnswer: 1,
        explanation: "Process servers hand you the documents."
      },
      {
        question: "What to do?",
        options: ["Hang up", "Pay", "Give info", "Confess"],
        correctAnswer: 0,
        explanation: "Do not engage."
      },
      {
        question: "Check with?",
        options: ["Local Court Registry", "The caller", "Nobody", "Google"],
        correctAnswer: 0,
        explanation: "Call the court directly to check if a case exists."
      }
    ]
  },
  {
    id: "45-03",
    title: "Recovery Lawyers",
    description: "The second sting.",
    questions: [
      {
        question: "You were scammed. A 'Lawyer' contacts you saying they can get the money back.",
        options: ["Hire", "Recovery Scam. They target victims again.", "Hope", "Yes"],
        correctAnswer: 1,
        explanation: "Unsolicited legal help for scams is almost always a secondary scam."
      },
      {
        question: "They ask for an upfront 'Filing Fee'.",
        options: ["Pay", "Scam. Don't throw good money after bad.", "Standard", "Fee"],
        correctAnswer: 1,
        explanation: "They take the fee and do nothing."
      },
      {
        question: "They claim to work with the 'FBI' or 'Interpol'.",
        options: ["Impressive", "Lie. Private lawyers don't represent Interpol.", "Cool", "Power"],
        correctAnswer: 1,
        explanation: "Name dropping agencies."
      },
      {
        question: "The email is 'recovery-law-group@hotmail.com'.",
        options: ["Legit", "Scam", "New firm", "Okay"],
        correctAnswer: 1,
        explanation: "Check the domain."
      },
      {
        question: "They know exactly how much you lost.",
        options: ["Good research", "They bought a 'Suckers List' or ARE the original scammer.", "Magic", "Help"],
        correctAnswer: 1,
        explanation: "Inside knowledge builds trust."
      },
      {
        question: "They guarantee recovery.",
        options: ["Great", "Red flag. Lawyers cannot guarantee results.", "Sign", "Trust"],
        correctAnswer: 1,
        explanation: "Guarantees in law are unethical and suspicious."
      },
      {
        question: "They ask for your crypto keys to 'trace' the funds.",
        options: ["Give", "Never. They will drain the rest.", "Trace", "Help"],
        correctAnswer: 1,
        explanation: "Never share keys."
      },
      {
        question: "Who can actually help?",
        options: ["Police / Bank", "Instagram Lawyer", "Reddit", "Hacker"],
        correctAnswer: 0,
        explanation: "Only law enforcement has the power to seize assets."
      },
      {
        question: "Is 'Class Action' a keyword?",
        options: ["Yes", "Scammers use it to sound big. Verify the law firm exists.", "No", "Maybe"],
        correctAnswer: 1,
        explanation: "Fake class actions gather fees from thousands."
      },
      {
        question: "Verify the lawyer?",
        options: ["Google", "Law Society Register in your state", "Ask them", "Trust"],
        correctAnswer: 1,
        explanation: "Check if they are licensed to practice."
      }
    ]
  },
  {
    id: "45-04",
    title: "Visa & Immigration Lawyers",
    description: "Fake migration agents.",
    questions: [
      {
        question: "Agent guarantees a Permanent Residency visa for $10k cash.",
        options: ["Pay", "Scam. Outcomes cannot be guaranteed.", "Deal", "Stay"],
        correctAnswer: 1,
        explanation: "Visa fraud exploits desperate migrants."
      },
      {
        question: "They are not on the MARA register.",
        options: ["Fine", "Illegal. Must be registered in Australia.", "Cheaper", "Okay"],
        correctAnswer: 1,
        explanation: "Unregistered practice is a crime."
      },
      {
        question: "They advise you to forge documents.",
        options: ["Do it", "You will be banned from the country.", "Smart", "Easy"],
        correctAnswer: 1,
        explanation: "You take the fall for the fraud."
      },
      {
        question: "They withhold your passport until you pay more.",
        options: ["Pay", "Extortion/Trafficking. Contact authorities.", "Wait", "Fair"],
        correctAnswer: 1,
        explanation: "Holding documents hostage is illegal."
      },
      {
        question: "They communicate only via WeChat/WhatsApp.",
        options: ["Normal", "Unprofessional/Scam", "Fast", "Easy"],
        correctAnswer: 1,
        explanation: "Lack of office/paper trail."
      },
      {
        question: "They ask you to pay into a personal account.",
        options: ["Pay", "Use Client Trust Account only", "Okay", "Friend"],
        correctAnswer: 1,
        explanation: "Professional fees go to business accounts."
      },
      {
        question: "Check your visa status?",
        options: ["Ask agent", "Check VEVO (Govt site) yourself", "Guess", "Wait"],
        correctAnswer: 1,
        explanation: "Don't rely on the agent's word. Check VEVO."
      },
      {
        question: "They claim to have 'friends' in the department.",
        options: ["Good", "Corruption lie", "Bonus", "Lucky"],
        correctAnswer: 1,
        explanation: "Claims of bribery influence are scams."
      },
      {
        question: "What is a 'Ghost Agent'?",
        options: ["Dead", "Unregistered agent who doesn't sign the forms", "Spy", "Helper"],
        correctAnswer: 1,
        explanation: "They hide their involvement so they can't be caught."
      },
      {
        question: "Consequence?",
        options: ["Deportation", "Refund", "Nothing", "Visa"],
        correctAnswer: 0,
        explanation: "If the application is bad, you get deported."
      }
    ]
  },
  {
    id: "45-05",
    title: "Document Fraud",
    description: "Fake deeds and titles.",
    questions: [
      {
        question: "You are selling property. Buyer sends a 'Deed of Sale' via email to sign.",
        options: ["Sign", "Have your own lawyer check it. Digital forgery is easy.", "Fast", "Good"],
        correctAnswer: 1,
        explanation: "Property fraud involves fake documents."
      },
      {
        question: "They claim to be your bank asking you to sign a new mortgage form.",
        options: ["Sign", "Verify with branch.", "Refinance", "Okay"],
        correctAnswer: 1,
        explanation: "Title fraud attempts to mortgage your house."
      },
      {
        question: "Notary Public Scam.",
        options: ["What?", "Fake notaries verifying fake documents", "Real", "Stamp"],
        correctAnswer: 1,
        explanation: "Stamps can be bought online."
      },
      {
        question: "DocuSign links in email.",
        options: ["Click", "Check sender carefully. Phishing for signatures.", "Sign", "Legal"],
        correctAnswer: 1,
        explanation: "Scammers spoof DocuSign emails."
      },
      {
        question: "They ask for a photo of your signature.",
        options: ["Send", "Never. They can paste it onto anything.", "Why", "Okay"],
        correctAnswer: 1,
        explanation: "Your signature is a key to identity theft."
      },
      {
        question: "The document has spelling errors.",
        options: ["Typo", "Scam indicator", "Lawyer tired", "Fine"],
        correctAnswer: 1,
        explanation: "Legal docs are proofread."
      },
      {
        question: "Title Insurance.",
        options: ["Useless", "Protects against title fraud", "Scam", "Fee"],
        correctAnswer: 1,
        explanation: "A real product that helps if your title is stolen."
      },
      {
        question: "They pressure you to sign without reading.",
        options: ["Sign", "Red flag", "Trust", "Hurry"],
        correctAnswer: 1,
        explanation: "Read everything."
      },
      {
        question: "Using a lawyer you found on Gumtree.",
        options: ["Cheap", "Risky. Use established firms.", "Good", "Easy"],
        correctAnswer: 1,
        explanation: "Verify their credentials."
      },
      {
        question: "Can you lose your house?",
        options: ["Yes", "No", "Maybe", "Rarely"],
        correctAnswer: 0,
        explanation: "Title fraud can lead to property loss or massive legal battles."
      }
    ]
  }
];