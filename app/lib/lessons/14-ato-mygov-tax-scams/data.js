export default [
  {
    id: "14-01",
    title: "The Fake Tax Refund",
    description: "Promises of money that steal your login details.",
    questions: [
      {
        question: "You get an SMS: 'ATO: You have a refund of $520.40. Click here to claim'.",
        options: ["Click it", "Delete it. The ATO does not send SMS links for refunds.", "Forward to accountant", "Spend it"],
        correctAnswer: 1,
        explanation: "The ATO never sends a link to claim a refund. Refunds are deposited automatically."
      },
      {
        question: "The link takes you to a page that looks EXACTLY like myGov.",
        options: ["It's safe", "Check the URL (address bar)", "Log in", "Bookmark it"],
        correctAnswer: 1,
        explanation: "Phishing sites copy the design perfectly. Only trust 'my.gov.au'."
      },
      {
        question: "The form asks for your credit card details to 'process' the refund.",
        options: ["Enter them", "Scam. Refunds go INTO accounts, they don't need card numbers.", "Use debit card", "Ask why"],
        correctAnswer: 1,
        explanation: "The ATO does not refund to credit cards."
      },
      {
        question: "The URL is 'mygov-refund-au.com'.",
        options: ["Legit", "Scam", "New site", "Backup site"],
        correctAnswer: 1,
        explanation: "Official Australian government sites must end in '.gov.au'."
      },
      {
        question: "The email is from 'ATO Refunds' <support@hotmail.com>.",
        options: ["Legit", "Scam", "Maybe", "Old email"],
        correctAnswer: 1,
        explanation: "Government agencies do not use Hotmail."
      },
      {
        question: "What happens if you log in to the fake site?",
        options: ["You get money", "They steal your username/password and hijack your real account", "Nothing", "Error"],
        correctAnswer: 1,
        explanation: "They use your real account to lodge fake returns in your name."
      },
      {
        question: "The message arrives during tax time (July-Oct).",
        options: ["Must be real", "Scammers target peak times", "Coincidence", "Planned"],
        correctAnswer: 1,
        explanation: "Scams spike during tax season when people expect messages."
      },
      {
        question: "The SMS comes from a number named 'ATO' in your phone.",
        options: ["Trust it", "Be skeptical. Sender IDs can be spoofed.", "Call it", "Reply"],
        correctAnswer: 1,
        explanation: "Scammers can make the SMS appear in the same thread as real ATO messages."
      },
      {
        question: "You have a tax agent. Should the ATO be contacting you directly about refunds?",
        options: ["Yes", "Usually correspondence goes to your agent first", "No", "Sometimes"],
        correctAnswer: 1,
        explanation: "If you have an agent, check with them before acting."
      },
      {
        question: "How do you check if a refund is real?",
        options: ["Click link", "Log in to my.gov.au independently (type address yourself)", "Ask Facebook", "Wait"],
        correctAnswer: 1,
        explanation: "Always go to the source directly."
      }
    ]
  },
  {
    id: "14-02",
    title: "myGov Phishing",
    description: "Protecting your digital identity.",
    questions: [
      {
        question: "You receive an email: 'New secure message in your myGov inbox'. It has a 'Log in' button.",
        options: ["Click button", "Don't click. Go to my.gov.au separately.", "Delete", "Reply"],
        correctAnswer: 1,
        explanation: "Real myGov emails tell you there is a message, but they don't usually include a login link/button."
      },
      {
        question: "Why do scammers want your myGov login?",
        options: ["To read your mail", "To claim fraudulent welfare payments or tax refunds in your name", "Curiosity", "To pay your bills"],
        correctAnswer: 1,
        explanation: "Stolen myGov accounts are used for high-value fraud against the government."
      },
      {
        question: "What is '2FA' or 'MFA' on myGov?",
        options: ["Two Fat Ants", "Two-Factor Authentication (Code sent to mobile)", "Too Far Away", "A form"],
        correctAnswer: 1,
        explanation: "The code sent to your phone protects your account. Never share it."
      },
      {
        question: "A scammer calls asking for the myGov code sent to your phone.",
        options: ["Give it", "Hang up. They are trying to break into your account.", "Read it out", "Text it"],
        correctAnswer: 1,
        explanation: "If you give them the code, they bypass the security and take over your account."
      },
      {
        question: "You google 'myGov' and click the top result.",
        options: ["Safe", "Risky - Scammers buy 'Ad' spots at the top of Google", "Always safe", "Fast"],
        correctAnswer: 1,
        explanation: "Look for the word 'Ad' next to the result. Scammers pay to appear first."
      },
      {
        question: "The site asks for your 'Secret Questions' answers.",
        options: ["Answer them", "Phishing attempt", "Standard", "Okay"],
        correctAnswer: 1,
        explanation: "They harvest these answers to reset your passwords."
      },
      {
        question: "You notice your bank details in myGov have been changed to a strange account.",
        options: ["Glitch", "You have been hacked. Contact ATO immediately.", "Wait", "Change back"],
        correctAnswer: 1,
        explanation: "This is a sign someone is diverting your refund."
      },
      {
        question: "The phishing page looks slightly blurry.",
        options: ["Bad screen", "Sign of a fake site (screenshot copy)", "Loading", "Old"],
        correctAnswer: 1,
        explanation: "Low quality graphics can indicate a cloned site."
      },
      {
        question: "Can you use a 'Passkey' for myGov?",
        options: ["Yes, it's safer", "No", "What is that", "Maybe"],
        correctAnswer: 0,
        explanation: "Passkeys are a newer, safer login method than passwords."
      },
      {
        question: "What should you do if you shared your password?",
        options: ["Change it immediately", "Contact myGov/Services Australia", "Check for unauthorized activity", "All of the above"],
        correctAnswer: 3,
        explanation: "Act fast to lock the scammers out."
      }
    ]
  },
  {
    id: "14-03",
    title: "Tax Debt Threats",
    description: "Intimidation tactics using fake debts.",
    questions: [
      {
        question: "A robocall says: 'A lawsuit is being filed against your name for tax evasion'.",
        options: ["Panic", "Scam. ATO does not use threatening robocalls.", "Call back", "Pay"],
        correctAnswer: 1,
        explanation: "The ATO treats people with respect. They don't start with lawsuits via robocall."
      },
      {
        question: "They demand you pay your debt via 'Bitcoin ATM' at the local mall.",
        options: ["Do it", "Scam. Government never takes crypto.", "Convenient", "Fast"],
        correctAnswer: 1,
        explanation: "Crypto payments are untraceable. The government does not use them."
      },
      {
        question: "They threaten to send the Sheriff or Police to your door in 1 hour.",
        options: ["Hide", "Scam. Police do not collect tax debts.", "Wait", "Prepare tea"],
        correctAnswer: 1,
        explanation: "This is a fear tactic to stop you thinking rationally."
      },
      {
        question: "The caller becomes aggressive and yells when you ask questions.",
        options: ["Scammer", "Stressed ATO worker", "Bad day", "Normal"],
        correctAnswer: 0,
        explanation: "Real ATO staff are professionals. Aggression is a scammer trait."
      },
      {
        question: "They say 'You have been flagged for fraud'.",
        options: ["Scary", "Common script", "True", "Maybe"],
        correctAnswer: 1,
        explanation: "Accusing the victim of a crime puts them on the defensive."
      },
      {
        question: "You verify your debt by logging into myGov independently.",
        options: ["Smart move", "Waste of time", "Dangerous", "Hard"],
        correctAnswer: 0,
        explanation: "If myGov says $0 debt, the caller is lying."
      },
      {
        question: "They ask for payment via 'Steam' or 'Google Play' cards.",
        options: ["Okay", "Scam", "Fun", "Weird"],
        correctAnswer: 1,
        explanation: "Tax cannot be paid with gaming vouchers."
      },
      {
        question: "They offer a 'discount' if you pay the tax debt today.",
        options: ["Great deal", "Scam. Tax debts are not discounted for quick payment.", "Negotiate", "Pay"],
        correctAnswer: 1,
        explanation: "The ATO creates payment plans, they don't haggle discounts."
      },
      {
        question: "The number they call from is an overseas number.",
        options: ["Outsourcing", "Scam", "Roaming", "Global"],
        correctAnswer: 1,
        explanation: "The ATO operates from Australia."
      },
      {
        question: "They keep you on the phone while you go to the bank.",
        options: ["Supportive", "Control tactic", "Nice", "Helpful"],
        correctAnswer: 1,
        explanation: "They don't want the bank teller to warn you."
      }
    ]
  },
  {
    id: "14-04",
    title: "TFN Suspension Scams",
    description: "They claim your identity has been cancelled.",
    questions: [
      {
        question: "A caller says: 'Your Tax File Number (TFN) has been suspended due to illegal activity'.",
        options: ["Oh no", "Scam. TFNs are rarely suspended and never via phone call.", "Fix it", "Ask why"],
        correctAnswer: 1,
        explanation: "TFNs are yours for life. They are not 'suspended' like a driver's license."
      },
      {
        question: "To 'unblock' your TFN, you must transfer your bank balance to a secure holding account.",
        options: ["Do it", "Scam", "Safe", "Logical"],
        correctAnswer: 1,
        explanation: "Your TFN has nothing to do with your bank balance."
      },
      {
        question: "They say criminals have used your TFN to open accounts in Canberra.",
        options: ["Possible", "Standard scam script", "Go to Canberra", "Call police"],
        correctAnswer: 1,
        explanation: "This is a script used on thousands of people."
      },
      {
        question: "They ask for your TFN to 'verify' who you are.",
        options: ["Give it", "Don't give it. They want to steal it.", "Say half", "Guess"],
        correctAnswer: 1,
        explanation: "If they called you, they should know who you are. Don't hand over your ID."
      },
      {
        question: "The call connects you to a 'Senior Investigator'.",
        options: ["Important", "Another scammer sitting next to the first one", "Real", "Helpful"],
        correctAnswer: 1,
        explanation: "Transferring you makes it feel more official."
      },
      {
        question: "They threaten that your passport will also be cancelled.",
        options: ["Scam", "Real", "Scary", "True"],
        correctAnswer: 0,
        explanation: "Escalating threats to include passports/visas is common."
      },
      {
        question: "How do you check if your TFN is actually in trouble?",
        options: ["Call the ATO on their public number", "Ask the caller", "Check email", "Wait"],
        correctAnswer: 0,
        explanation: "Independent verification is the only safe way."
      },
      {
        question: "The caller has a heavy accent and background noise.",
        options: ["Call center scam", "ATO office", "Busy", "Loud"],
        correctAnswer: 0,
        explanation: "Large overseas call centers run these scams."
      },
      {
        question: "They say 'This is a pre-recorded message'.",
        options: ["Hang up", "Listen", "Press 1", "Press 9"],
        correctAnswer: 0,
        explanation: "Government agencies don't initiate serious contact via recording."
      },
      {
        question: "What can a scammer do with your TFN?",
        options: ["File fake taxes", "Get a job in your name", "Commit ID theft", "All of the above"],
        correctAnswer: 3,
        explanation: "Your TFN is a golden key for identity theft."
      }
    ]
  },
  {
    id: "14-05",
    title: "Fake Accountants & Schemes",
    description: "Dodgy helpers who steal your money.",
    questions: [
      {
        question: "An ad on social media promises 'Guaranteed $5000 tax refund'.",
        options: ["Sign up", "Scam/Dodgy. No one can guarantee a refund amount.", "Good agent", "Lucky"],
        correctAnswer: 1,
        explanation: "Refunds depend on your data. Guarantees imply fraud."
      },
      {
        question: "A 'Tax Helper' asks for your myGov password to 'check your details'.",
        options: ["Give it", "Never share passwords. Legitimate agents use their own portal.", "Okay", "Helpful"],
        correctAnswer: 1,
        explanation: "Registered Tax Agents have their own connection to the ATO. They don't need your login."
      },
      {
        question: "The agent is not listed on the TPB (Tax Practitioners Board) register.",
        options: ["Fine", "Unregistered agents are illegal/risky", "New", "Cheap"],
        correctAnswer: 1,
        explanation: "Only registered agents can legally charge a fee to lodge tax returns."
      },
      {
        question: "They suggest claiming deductions for expenses you didn't have.",
        options: ["Clever", "Fraud. You are liable for fines.", "Standard", "Loophole"],
        correctAnswer: 1,
        explanation: "You are responsible for your tax return, even if an agent files it."
      },
      {
        question: "They ask you to sign a blank form.",
        options: ["Sign it", "Never sign blank forms", "Trust them", "Easy"],
        correctAnswer: 1,
        explanation: "They can fill in whatever numbers they want later."
      },
      {
        question: "They want the refund paid into THEIR bank account, and they will transfer it to you.",
        options: ["Normal", "Risk. They might keep it all.", "Safe", "Okay"],
        correctAnswer: 1,
        explanation: "It is safer to have the ATO pay you directly."
      },
      {
        question: "Email: 'ATO needs you to update your Superannuation details immediately'.",
        options: ["Click link", "Phishing scam trying to steal your Super", "Do it", "Ignore"],
        correctAnswer: 1,
        explanation: "Scammers target Super funds via fake ATO emails."
      },
      {
        question: "How do you find a legitimate tax agent?",
        options: ["Gumtree", "Search the TPB.gov.au register", "Facebook Marketplace", "A flyer"],
        correctAnswer: 1,
        explanation: "The Tax Practitioners Board register is the official list."
      },
      {
        question: "The 'Agent' communicates only via Messenger.",
        options: ["Modern", "Unprofessional/Suspicious", "Fast", "Cool"],
        correctAnswer: 1,
        explanation: "Professional agents use secure email or office systems."
      },
      {
        question: "They charge a % of your refund rather than a fee.",
        options: ["Good incentive", "Often a sign they will inflate claims illegally", "Fair", "Standard"],
        correctAnswer: 1,
        explanation: "Be wary of agents who profit more if they lie on your return."
      }
    ]
  }
];