export default {
  "id": 14,
  "title": "ATO/MyGov/Tax Scams",
  "emoji": "💰",
  "description": "Promises of money that steal your login details.",
  "introduction": "Learn to recognize and protect yourself from ATO/MyGov/Tax Scams.",
  "warning_signs": [],
  "what_to_do": [],
  "how_it_works": "",
  "questions": [
    {
      "type": 1,
      "prompt": "You get an SMS: 'ATO: You have a refund of $520.40. Click here to claim'.",
      "options": [
        "Click it",
        "Delete it. The ATO does not send SMS links for refunds.",
        "Forward to accountant",
        "Spend it"
      ],
      "correct": 1,
      "explanation": "The ATO never sends a link to claim a refund. Refunds are deposited automatically."
    },
    {
      "type": 1,
      "prompt": "The link takes you to a page that looks EXACTLY like myGov.",
      "options": [
        "It's safe",
        "Check the URL (address bar)",
        "Log in",
        "Bookmark it"
      ],
      "correct": 1,
      "explanation": "Phishing sites copy the design perfectly. Only trust 'my.gov.au'."
    },
    {
      "type": 1,
      "prompt": "The form asks for your credit card details to 'process' the refund.",
      "options": [
        "Enter them",
        "Scam. Refunds go INTO accounts, they don't need card numbers.",
        "Use debit card",
        "Ask why"
      ],
      "correct": 1,
      "explanation": "The ATO does not refund to credit cards."
    },
    {
      "type": 1,
      "prompt": "The URL is 'mygov-refund-au.com'.",
      "options": [
        "Legit",
        "Scam",
        "New site",
        "Backup site"
      ],
      "correct": 1,
      "explanation": "Official Australian government sites must end in '.gov.au'."
    },
    {
      "type": 1,
      "prompt": "The email is from 'ATO Refunds' <support@hotmail.com>.",
      "options": [
        "Legit",
        "Scam",
        "Maybe",
        "Old email"
      ],
      "correct": 1,
      "explanation": "Government agencies do not use Hotmail."
    },
    {
      "type": 1,
      "prompt": "What happens if you log in to the fake site?",
      "options": [
        "You get money",
        "They steal your username/password and hijack your real account",
        "Nothing",
        "Error"
      ],
      "correct": 1,
      "explanation": "They use your real account to lodge fake returns in your name."
    },
    {
      "type": 1,
      "prompt": "The message arrives during tax time (July-Oct).",
      "options": [
        "Must be real",
        "Scammers target peak times",
        "Coincidence",
        "Planned"
      ],
      "correct": 1,
      "explanation": "Scams spike during tax season when people expect messages."
    },
    {
      "type": 1,
      "prompt": "The SMS comes from a number named 'ATO' in your phone.",
      "options": [
        "Trust it",
        "Be skeptical. Sender IDs can be spoofed.",
        "Call it",
        "Reply"
      ],
      "correct": 1,
      "explanation": "Scammers can make the SMS appear in the same thread as real ATO messages."
    },
    {
      "type": 1,
      "prompt": "You have a tax agent. Should the ATO be contacting you directly about refunds?",
      "options": [
        "Yes",
        "Usually correspondence goes to your agent first",
        "No",
        "Sometimes"
      ],
      "correct": 1,
      "explanation": "If you have an agent, check with them before acting."
    },
    {
      "type": 1,
      "prompt": "How do you check if a refund is real?",
      "options": [
        "Click link",
        "Log in to my.gov.au independently (type address yourself)",
        "Ask Facebook",
        "Wait"
      ],
      "correct": 1,
      "explanation": "Always go to the source directly."
    },
    {
      "type": 2,
      "prompt": "You receive an email: 'New secure message in your myGov inbox'. It has a 'Log in' button.",
      "options": [
        "Click button",
        "Don't click. Go to my.gov.au separately.",
        "Delete",
        "Reply"
      ],
      "correct": 1,
      "explanation": "Real myGov emails tell you there is a message, but they don't usually include a login link/button."
    },
    {
      "type": 2,
      "prompt": "Why do scammers want your myGov login?",
      "options": [
        "To read your mail",
        "To claim fraudulent welfare payments or tax refunds in your name",
        "Curiosity",
        "To pay your bills"
      ],
      "correct": 1,
      "explanation": "Stolen myGov accounts are used for high-value fraud against the government."
    },
    {
      "type": 2,
      "prompt": "What is '2FA' or 'MFA' on myGov?",
      "options": [
        "Two Fat Ants",
        "Two-Factor Authentication (Code sent to mobile)",
        "Too Far Away",
        "A form"
      ],
      "correct": 1,
      "explanation": "The code sent to your phone protects your account. Never share it."
    },
    {
      "type": 2,
      "prompt": "A scammer calls asking for the myGov code sent to your phone.",
      "options": [
        "Give it",
        "Hang up. They are trying to break into your account.",
        "Read it out",
        "Text it"
      ],
      "correct": 1,
      "explanation": "If you give them the code, they bypass the security and take over your account."
    },
    {
      "type": 2,
      "prompt": "You google 'myGov' and click the top result.",
      "options": [
        "Safe",
        "Risky - Scammers buy 'Ad' spots at the top of Google",
        "Always safe",
        "Fast"
      ],
      "correct": 1,
      "explanation": "Look for the word 'Ad' next to the result. Scammers pay to appear first."
    },
    {
      "type": 2,
      "prompt": "The site asks for your 'Secret Questions' answers.",
      "options": [
        "Answer them",
        "Phishing attempt",
        "Standard",
        "Okay"
      ],
      "correct": 1,
      "explanation": "They harvest these answers to reset your passwords."
    },
    {
      "type": 2,
      "prompt": "You notice your bank details in myGov have been changed to a strange account.",
      "options": [
        "Glitch",
        "You have been hacked. Contact ATO immediately.",
        "Wait",
        "Change back"
      ],
      "correct": 1,
      "explanation": "This is a sign someone is diverting your refund."
    },
    {
      "type": 2,
      "prompt": "The phishing page looks slightly blurry.",
      "options": [
        "Bad screen",
        "Sign of a fake site (screenshot copy)",
        "Loading",
        "Old"
      ],
      "correct": 1,
      "explanation": "Low quality graphics can indicate a cloned site."
    },
    {
      "type": 2,
      "prompt": "Can you use a 'Passkey' for myGov?",
      "options": [
        "Yes, it's safer",
        "No",
        "What is that",
        "Maybe"
      ],
      "correct": 0,
      "explanation": "Passkeys are a newer, safer login method than passwords."
    },
    {
      "type": 2,
      "prompt": "What should you do if you shared your password?",
      "options": [
        "Change it immediately",
        "Contact myGov/Services Australia",
        "Check for unauthorized activity",
        "All of the above"
      ],
      "correct": 3,
      "explanation": "Act fast to lock the scammers out."
    },
    {
      "type": 3,
      "prompt": "A robocall says: 'A lawsuit is being filed against your name for tax evasion'.",
      "options": [
        "Panic",
        "Scam. ATO does not use threatening robocalls.",
        "Call back",
        "Pay"
      ],
      "correct": 1,
      "explanation": "The ATO treats people with respect. They don't start with lawsuits via robocall."
    },
    {
      "type": 3,
      "prompt": "They demand you pay your debt via 'Bitcoin ATM' at the local mall.",
      "options": [
        "Do it",
        "Scam. Government never takes crypto.",
        "Convenient",
        "Fast"
      ],
      "correct": 1,
      "explanation": "Crypto payments are untraceable. The government does not use them."
    },
    {
      "type": 3,
      "prompt": "They threaten to send the Sheriff or Police to your door in 1 hour.",
      "options": [
        "Hide",
        "Scam. Police do not collect tax debts.",
        "Wait",
        "Prepare tea"
      ],
      "correct": 1,
      "explanation": "This is a fear tactic to stop you thinking rationally."
    },
    {
      "type": 3,
      "prompt": "The caller becomes aggressive and yells when you ask questions.",
      "options": [
        "Scammer",
        "Stressed ATO worker",
        "Bad day",
        "Normal"
      ],
      "correct": 0,
      "explanation": "Real ATO staff are professionals. Aggression is a scammer trait."
    },
    {
      "type": 3,
      "prompt": "They say 'You have been flagged for fraud'.",
      "options": [
        "Scary",
        "Common script",
        "True",
        "Maybe"
      ],
      "correct": 1,
      "explanation": "Accusing the victim of a crime puts them on the defensive."
    },
    {
      "type": 3,
      "prompt": "You verify your debt by logging into myGov independently.",
      "options": [
        "Smart move",
        "Waste of time",
        "Dangerous",
        "Hard"
      ],
      "correct": 0,
      "explanation": "If myGov says $0 debt, the caller is lying."
    },
    {
      "type": 3,
      "prompt": "They ask for payment via 'Steam' or 'Google Play' cards.",
      "options": [
        "Okay",
        "Scam",
        "Fun",
        "Weird"
      ],
      "correct": 1,
      "explanation": "Tax cannot be paid with gaming vouchers."
    },
    {
      "type": 3,
      "prompt": "They offer a 'discount' if you pay the tax debt today.",
      "options": [
        "Great deal",
        "Scam. Tax debts are not discounted for quick payment.",
        "Negotiate",
        "Pay"
      ],
      "correct": 1,
      "explanation": "The ATO creates payment plans, they don't haggle discounts."
    },
    {
      "type": 3,
      "prompt": "The number they call from is an overseas number.",
      "options": [
        "Outsourcing",
        "Scam",
        "Roaming",
        "Global"
      ],
      "correct": 1,
      "explanation": "The ATO operates from Australia."
    },
    {
      "type": 3,
      "prompt": "They keep you on the phone while you go to the bank.",
      "options": [
        "Supportive",
        "Control tactic",
        "Nice",
        "Helpful"
      ],
      "correct": 1,
      "explanation": "They don't want the bank teller to warn you."
    },
    {
      "type": 4,
      "prompt": "A caller says: 'Your Tax File Number (TFN) has been suspended due to illegal activity'.",
      "options": [
        "Oh no",
        "Scam. TFNs are rarely suspended and never via phone call.",
        "Fix it",
        "Ask why"
      ],
      "correct": 1,
      "explanation": "TFNs are yours for life. They are not 'suspended' like a driver's license."
    },
    {
      "type": 4,
      "prompt": "To 'unblock' your TFN, you must transfer your bank balance to a secure holding account.",
      "options": [
        "Do it",
        "Scam",
        "Safe",
        "Logical"
      ],
      "correct": 1,
      "explanation": "Your TFN has nothing to do with your bank balance."
    },
    {
      "type": 4,
      "prompt": "They say criminals have used your TFN to open accounts in Canberra.",
      "options": [
        "Possible",
        "Standard scam script",
        "Go to Canberra",
        "Call police"
      ],
      "correct": 1,
      "explanation": "This is a script used on thousands of people."
    },
    {
      "type": 4,
      "prompt": "They ask for your TFN to 'verify' who you are.",
      "options": [
        "Give it",
        "Don't give it. They want to steal it.",
        "Say half",
        "Guess"
      ],
      "correct": 1,
      "explanation": "If they called you, they should know who you are. Don't hand over your ID."
    },
    {
      "type": 4,
      "prompt": "The call connects you to a 'Senior Investigator'.",
      "options": [
        "Important",
        "Another scammer sitting next to the first one",
        "Real",
        "Helpful"
      ],
      "correct": 1,
      "explanation": "Transferring you makes it feel more official."
    },
    {
      "type": 4,
      "prompt": "They threaten that your passport will also be cancelled.",
      "options": [
        "Scam",
        "Real",
        "Scary",
        "True"
      ],
      "correct": 0,
      "explanation": "Escalating threats to include passports/visas is common."
    },
    {
      "type": 4,
      "prompt": "How do you check if your TFN is actually in trouble?",
      "options": [
        "Call the ATO on their public number",
        "Ask the caller",
        "Check email",
        "Wait"
      ],
      "correct": 0,
      "explanation": "Independent verification is the only safe way."
    },
    {
      "type": 4,
      "prompt": "The caller has a heavy accent and background noise.",
      "options": [
        "Call center scam",
        "ATO office",
        "Busy",
        "Loud"
      ],
      "correct": 0,
      "explanation": "Large overseas call centers run these scams."
    },
    {
      "type": 4,
      "prompt": "They say 'This is a pre-recorded message'.",
      "options": [
        "Hang up",
        "Listen",
        "Press 1",
        "Press 9"
      ],
      "correct": 0,
      "explanation": "Government agencies don't initiate serious contact via recording."
    },
    {
      "type": 4,
      "prompt": "What can a scammer do with your TFN?",
      "options": [
        "File fake taxes",
        "Get a job in your name",
        "Commit ID theft",
        "All of the above"
      ],
      "correct": 3,
      "explanation": "Your TFN is a golden key for identity theft."
    },
    {
      "type": 5,
      "prompt": "An ad on social media promises 'Guaranteed $5000 tax refund'.",
      "options": [
        "Sign up",
        "Scam/Dodgy. No one can guarantee a refund amount.",
        "Good agent",
        "Lucky"
      ],
      "correct": 1,
      "explanation": "Refunds depend on your data. Guarantees imply fraud."
    },
    {
      "type": 5,
      "prompt": "A 'Tax Helper' asks for your myGov password to 'check your details'.",
      "options": [
        "Give it",
        "Never share passwords. Legitimate agents use their own portal.",
        "Okay",
        "Helpful"
      ],
      "correct": 1,
      "explanation": "Registered Tax Agents have their own connection to the ATO. They don't need your login."
    },
    {
      "type": 5,
      "prompt": "The agent is not listed on the TPB (Tax Practitioners Board) register.",
      "options": [
        "Fine",
        "Unregistered agents are illegal/risky",
        "New",
        "Cheap"
      ],
      "correct": 1,
      "explanation": "Only registered agents can legally charge a fee to lodge tax returns."
    },
    {
      "type": 5,
      "prompt": "They suggest claiming deductions for expenses you didn't have.",
      "options": [
        "Clever",
        "Fraud. You are liable for fines.",
        "Standard",
        "Loophole"
      ],
      "correct": 1,
      "explanation": "You are responsible for your tax return, even if an agent files it."
    },
    {
      "type": 5,
      "prompt": "They ask you to sign a blank form.",
      "options": [
        "Sign it",
        "Never sign blank forms",
        "Trust them",
        "Easy"
      ],
      "correct": 1,
      "explanation": "They can fill in whatever numbers they want later."
    },
    {
      "type": 5,
      "prompt": "They want the refund paid into THEIR bank account, and they will transfer it to you.",
      "options": [
        "Normal",
        "Risk. They might keep it all.",
        "Safe",
        "Okay"
      ],
      "correct": 1,
      "explanation": "It is safer to have the ATO pay you directly."
    },
    {
      "type": 5,
      "prompt": "Email: 'ATO needs you to update your Superannuation details immediately'.",
      "options": [
        "Click link",
        "Phishing scam trying to steal your Super",
        "Do it",
        "Ignore"
      ],
      "correct": 1,
      "explanation": "Scammers target Super funds via fake ATO emails."
    },
    {
      "type": 5,
      "prompt": "How do you find a legitimate tax agent?",
      "options": [
        "Gumtree",
        "Search the TPB.gov.au register",
        "Facebook Marketplace",
        "A flyer"
      ],
      "correct": 1,
      "explanation": "The Tax Practitioners Board register is the official list."
    },
    {
      "type": 5,
      "prompt": "The 'Agent' communicates only via Messenger.",
      "options": [
        "Modern",
        "Unprofessional/Suspicious",
        "Fast",
        "Cool"
      ],
      "correct": 1,
      "explanation": "Professional agents use secure email or office systems."
    },
    {
      "type": 5,
      "prompt": "They charge a % of your refund rather than a fee.",
      "options": [
        "Good incentive",
        "Often a sign they will inflate claims illegally",
        "Fair",
        "Standard"
      ],
      "correct": 1,
      "explanation": "Be wary of agents who profit more if they lie on your return."
    }
  ]
};