export default {
  "id": 22,
  "title": "Payment Redirection/Invoice Scams",
  "emoji": "⚠️",
  "description": "The most costly scam for businesses and homebuyers.",
  "introduction": "Learn to recognize and protect yourself from Payment Redirection/Invoice Scams.",
  "warning_signs": [],
  "what_to_do": [],
  "how_it_works": "",
  "questions": [
    {
      "type": 1,
      "prompt": "You receive an invoice from a known builder/supplier. It says: 'Please note our bank details have changed'.",
      "options": [
        "Update and pay",
        "STOP. Call them on a known number to verify.",
        "Reply to check",
        "Pay half"
      ],
      "correct": 1,
      "explanation": "This is the classic redirection scam. Hackers edit the invoice. Always verify changes via voice."
    },
    {
      "type": 1,
      "prompt": "Why shouldn't you reply to the email to ask if it's real?",
      "options": [
        "It's rude",
        "The hacker controls the email account and will say 'Yes'",
        "It bounces",
        "Slow"
      ],
      "correct": 1,
      "explanation": "If their email is compromised, the hacker is the one reading and replying to your emails."
    },
    {
      "type": 1,
      "prompt": "The email comes from 'supplier.accounts@gmail.com' instead of '@supplier.com'.",
      "options": [
        "Normal",
        "Red flag (Spoofed email)",
        "New system",
        "Okay"
      ],
      "correct": 1,
      "explanation": "Look closely at the domain. Professional businesses don't use free webmail for invoicing."
    },
    {
      "type": 1,
      "prompt": "You are buying a house. Your Conveyancer emails asking for the deposit to a new account.",
      "options": [
        "Pay immediately",
        "Verify in person or via phone call",
        "Trust lawyer",
        "Hurry"
      ],
      "correct": 1,
      "explanation": "This is a high-value target. People lose house deposits ($100k+) this way."
    },
    {
      "type": 1,
      "prompt": "The urgency is high: 'Pay today or delivery will be delayed'.",
      "options": [
        "Pay",
        "Scam tactic. Verify first.",
        "Panic",
        "Rush"
      ],
      "correct": 1,
      "explanation": "Pressure makes you skip the verification step."
    },
    {
      "type": 1,
      "prompt": "The BSB belongs to a different bank than usual.",
      "options": [
        "They switched banks",
        "Warning sign",
        "Normal",
        "Okay"
      ],
      "correct": 1,
      "explanation": "A sudden switch of financial institution is suspicious."
    },
    {
      "type": 1,
      "prompt": "The invoice looks slightly blurry or the font is different on the bank details.",
      "options": [
        "Bad printer",
        "Altered document",
        "Glitch",
        "Old"
      ],
      "correct": 1,
      "explanation": "Scammers edit PDFs. Inconsistencies reveal the edit."
    },
    {
      "type": 1,
      "prompt": "What is 'BEC'?",
      "options": [
        "Bacon Egg Cheese",
        "Business Email Compromise",
        "Bank Error Code",
        "Big Email"
      ],
      "correct": 1,
      "explanation": "The technical term for hacking business emails to commit fraud."
    },
    {
      "type": 1,
      "prompt": "If you pay the wrong account, can the bank just reverse it?",
      "options": [
        "Yes, instantly",
        "No, it is very difficult to recover once funds are moved",
        "Always",
        "Maybe"
      ],
      "correct": 1,
      "explanation": "Once money leaves your bank, recovery is not guaranteed."
    },
    {
      "type": 1,
      "prompt": "Standard procedure for bank detail changes should be:",
      "options": [
        "Email only",
        "Multi-factor verification (Phone + Written)",
        "Text",
        "None"
      ],
      "correct": 1,
      "explanation": "Secure businesses use multiple checks."
    },
    {
      "type": 2,
      "prompt": "Your business gets an invoice for 'Domain Listing' or 'SEO Services'.",
      "options": [
        "Pay it",
        "Check if you actually ordered it. Likely a directory scam.",
        "File it",
        "Ask boss"
      ],
      "correct": 1,
      "explanation": "Scammers send thousands of small invoices hoping businesses auto-pay them."
    },
    {
      "type": 2,
      "prompt": "The invoice is for 'Norton Antivirus Auto-Renewal' but you don't use Norton.",
      "options": [
        "Pay",
        "Scam. Call the number on the invoice? NO.",
        "Ignore/Delete",
        "Reply"
      ],
      "correct": 2,
      "explanation": "They want you to call the number to 'cancel', leading to a refund scam."
    },
    {
      "type": 2,
      "prompt": "The amount is small (under $50).",
      "options": [
        "Pay it",
        "Check validity. Scammers aim under the 'approval threshold'.",
        "Ignore",
        "Safe"
      ],
      "correct": 1,
      "explanation": "Small amounts often slip through accounts payable departments."
    },
    {
      "type": 2,
      "prompt": "The invoice says 'This is not a bill, this is a solicitation' in tiny print.",
      "options": [
        "Sneaky",
        "Legal loophole used by directory scams",
        "Mistake",
        "Honest"
      ],
      "correct": 1,
      "explanation": "They try to make it LOOK like a bill while legally claiming it's an 'offer'."
    },
    {
      "type": 2,
      "prompt": "You receive an invoice from 'Yellow Pages' (but it's a fake lookalike).",
      "options": [
        "Pay",
        "Verify trademark/logo carefully",
        "Trust brand",
        "Yellow is real"
      ],
      "correct": 1,
      "explanation": "Brand impersonation is common."
    },
    {
      "type": 2,
      "prompt": "The invoice arrives as a .zip file attachment.",
      "options": [
        "Open zip",
        "Malware risk. Don't open.",
        "Unzip",
        "Safe"
      ],
      "correct": 1,
      "explanation": "Invoices should be PDF. Zip files often contain viruses."
    },
    {
      "type": 2,
      "prompt": "You don't recognize the vendor name.",
      "options": [
        "Pay anyway",
        "Google them + 'scam'",
        "Ask finance",
        "Wait"
      ],
      "correct": 1,
      "explanation": "A quick search often reveals 'Fake Invoice' warnings."
    },
    {
      "type": 2,
      "prompt": "The invoice has no ABN or tax breakdown.",
      "options": [
        "Pay",
        "Invalid invoice. Do not pay.",
        "Overseas",
        "Okay"
      ],
      "correct": 1,
      "explanation": "Valid Australian invoices must meet ATO standards."
    },
    {
      "type": 2,
      "prompt": "They threaten 'Credit Rating Damage' if not paid in 24 hours.",
      "options": [
        "Pay",
        "Intimidation tactic. Verify first.",
        "Panic",
        "Call"
      ],
      "correct": 1,
      "explanation": "Legitimate debt collection has a legal process, not 24-hour email threats."
    },
    {
      "type": 2,
      "prompt": "How to protect accounts payable?",
      "options": [
        "Pay everything",
        "3-way matching (PO, Receiving Report, Invoice)",
        "Guess",
        "Auto-pay"
      ],
      "correct": 1,
      "explanation": "Standard accounting controls stop these scams."
    },
    {
      "type": 3,
      "prompt": "HR receives an email from 'John Smith' (Employee): 'I changed banks. Update my salary details to this new account'.",
      "options": [
        "Update immediately",
        "Call John on his internal number to confirm",
        "Email back",
        "Ignore"
      ],
      "correct": 1,
      "explanation": "Scammers spoof employee emails to divert salary payments."
    },
    {
      "type": 3,
      "prompt": "The email style is brief and demands immediate action before pay day.",
      "options": [
        "Efficient",
        "Red flag. Check the sender address.",
        "Do it",
        "Helpful"
      ],
      "correct": 1,
      "explanation": "Urgency before a deadline is a common pressure tactic."
    },
    {
      "type": 3,
      "prompt": "The new bank account is a 'Prepaid' or 'Neobank' card.",
      "options": [
        "Modern",
        "Higher risk. Often used for money mules.",
        "Cool",
        "Okay"
      ],
      "correct": 1,
      "explanation": "While valid, it warrants an extra check."
    },
    {
      "type": 3,
      "prompt": "The email address is 'john.smith-company@outlook.com'.",
      "options": [
        "Work email",
        "Personal email impersonating work. Verify.",
        "Safe",
        "Okay"
      ],
      "correct": 1,
      "explanation": "Employees should use official company email or portals."
    },
    {
      "type": 3,
      "prompt": "HR replies asking for voided cheque, scammer provides a photoshopped one.",
      "options": [
        "Accept it",
        "Look for editing artifacts",
        "Trust",
        "Pay"
      ],
      "correct": 1,
      "explanation": "Documents can be forged. Voice verification is superior."
    },
    {
      "type": 3,
      "prompt": "What is 'Salary Diversion'?",
      "options": [
        "Investing",
        "Stealing wages by changing bank details",
        "Tax",
        "Bonus"
      ],
      "correct": 1,
      "explanation": "A specific type of BEC targeting payroll."
    },
    {
      "type": 3,
      "prompt": "Does this happen to CEOs?",
      "options": [
        "No",
        "Yes, high earners are prime targets",
        "Never",
        "Rarely"
      ],
      "correct": 1,
      "explanation": "Bigger salaries = bigger payout for scammers."
    },
    {
      "type": 3,
      "prompt": "How should employees update bank details?",
      "options": [
        "Email",
        "Secure HR Portal with 2FA or in-person",
        "Text",
        "Note"
      ],
      "correct": 1,
      "explanation": "Secure portals remove the risk of email spoofing."
    },
    {
      "type": 3,
      "prompt": "You (employee) didn't get paid.",
      "options": [
        "Wait",
        "Alert payroll immediately",
        "Quit",
        "Cry"
      ],
      "correct": 1,
      "explanation": "Immediate reporting gives the bank a chance to recall funds."
    },
    {
      "type": 3,
      "prompt": "Who is liable?",
      "options": [
        "Scammer",
        "Complex legal area. Often the employer if they failed verification.",
        "Bank",
        "Nobody"
      ],
      "correct": 1,
      "explanation": "Employers may have to pay twice if they fell for a scam."
    },
    {
      "type": 4,
      "prompt": "A long-term supplier emails saying their account is under audit, please pay to this new account.",
      "options": [
        "Okay",
        "Verify. 'Audit' is a common scam excuse.",
        "Helpful",
        "Standard"
      ],
      "correct": 1,
      "explanation": "Scammers need a plausible reason for the account change."
    },
    {
      "type": 4,
      "prompt": "They offer a 10% discount for early payment to the new account.",
      "options": [
        "Take deal",
        "Suspicious. Greed bait.",
        "Pay",
        "Nice"
      ],
      "correct": 1,
      "explanation": "The discount makes you rush to pay before checking."
    },
    {
      "type": 4,
      "prompt": "The new account is in a different country.",
      "options": [
        "Global trade",
        "High risk. Why would a local supplier use an overseas bank?",
        "Okay",
        "Tax"
      ],
      "correct": 1,
      "explanation": "International transfers are harder to recover."
    },
    {
      "type": 4,
      "prompt": "They ask for payment via Crypto.",
      "options": [
        "Modern",
        "Scam. Legitimate B2B suppliers don't use crypto.",
        "Fast",
        "Easy"
      ],
      "correct": 1,
      "explanation": "Business usually runs on bank transfers, not Bitcoin."
    },
    {
      "type": 4,
      "prompt": "The email signature looks real.",
      "options": [
        "Trust it",
        "Copy-pasting a signature is easy",
        "Proof",
        "Safe"
      ],
      "correct": 1,
      "explanation": "Signatures are easily stolen."
    },
    {
      "type": 4,
      "prompt": "You call the number IN THE EMAIL to verify.",
      "options": [
        "Good idea",
        "Bad idea. You are calling the scammer. Use Google/Records.",
        "Safe",
        "Standard"
      ],
      "correct": 1,
      "explanation": "Always use a trusted, previously known number."
    },
    {
      "type": 4,
      "prompt": "They claim the old account is 'frozen'.",
      "options": [
        "Help them",
        "Red flag",
        "Pay new",
        "Wait"
      ],
      "correct": 1,
      "explanation": "Drama/Emergency is a scam tactic."
    },
    {
      "type": 4,
      "prompt": "How can 'DMARC' help?",
      "options": [
        "A robot",
        "Email authentication technology that stops spoofing",
        "A bank",
        "Software"
      ],
      "correct": 1,
      "explanation": "DMARC helps verify that the email actually came from the domain owner."
    },
    {
      "type": 4,
      "prompt": "The supplier's website is down.",
      "options": [
        "Coincidence",
        "Maybe hacked",
        "Check news",
        "All of above"
      ],
      "correct": 3,
      "explanation": "A compromised website might be part of a larger attack."
    },
    {
      "type": 4,
      "prompt": "What is the 'Verify' step?",
      "options": [
        "Thinking",
        "Calling a known contact on a known number",
        "Emailing",
        "Guessing"
      ],
      "correct": 1,
      "explanation": "Voice verification is the gold standard."
    },
    {
      "type": 5,
      "prompt": "How do scammers know you have an invoice due?",
      "options": [
        "Guess",
        "They are monitoring your (or the supplier's) email inbox",
        "Magic",
        "Luck"
      ],
      "correct": 1,
      "explanation": "They hack the email, sit quietly, read the mail, and strike at the perfect moment."
    },
    {
      "type": 5,
      "prompt": "You reply to an email chain, but the scammer answers.",
      "options": [
        "Normal",
        "Man-in-the-Middle. They set up 'Forwarding Rules'.",
        "Glitch",
        "Fast"
      ],
      "correct": 1,
      "explanation": "Hackers set up rules to hide the real emails and insert their fake ones."
    },
    {
      "type": 5,
      "prompt": "You see emails in your 'Trash' you don't remember deleting.",
      "options": [
        "Memory loss",
        "Hacker covering their tracks",
        "Clean up",
        "Auto-delete"
      ],
      "correct": 1,
      "explanation": "They delete the real warning emails from the bank/supplier."
    },
    {
      "type": 5,
      "prompt": "How to detect email monitoring?",
      "options": [
        "Check 'Forwarding Rules' and 'Login History' in settings",
        "Scan PC",
        "Look at screen",
        "Ask IT"
      ],
      "correct": 0,
      "explanation": "Checking settings reveals if a hacker is blind-copying your mail."
    },
    {
      "type": 5,
      "prompt": "Should you use public Wi-Fi for banking?",
      "options": [
        "Yes",
        "No. Use VPN or Mobile Data. Public Wi-Fi is easy to snoop.",
        "Always",
        "Free"
      ],
      "correct": 1,
      "explanation": "Public Wi-Fi allows hackers to intercept data."
    },
    {
      "type": 5,
      "prompt": "What is 'Encryption'?",
      "options": [
        "Scrambling data so spies can't read it",
        "Deleting data",
        "Hiding",
        "Password"
      ],
      "correct": 0,
      "explanation": "Encryption protects data in transit."
    },
    {
      "type": 5,
      "prompt": "The hacker uses language exactly like your boss/supplier.",
      "options": [
        "Smart",
        "They read past emails to mimic the style",
        "Lucky",
        "Coincidence"
      ],
      "correct": 1,
      "explanation": "They study your history to be convincing."
    },
    {
      "type": 5,
      "prompt": "Use 2FA (Two Factor Authentication) on email.",
      "options": [
        "Too hard",
        "Essential. Stops hackers getting in to monitor you.",
        "Optional",
        "Sometimes"
      ],
      "correct": 1,
      "explanation": "2FA is the best defense against email account takeover."
    },
    {
      "type": 5,
      "prompt": "The reply-to address is slightly different to the sender.",
      "options": [
        "Normal",
        "Scam. Directs reply to hacker.",
        "Tech",
        "Okay"
      ],
      "correct": 1,
      "explanation": "This technical trick routes your reply to the criminal."
    },
    {
      "type": 5,
      "prompt": "What if you suspect you are being monitored?",
      "options": [
        "Change password immediately and check rules",
        "Shout",
        "Email asking who it is",
        "Wait"
      ],
      "correct": 0,
      "explanation": "Lock them out first."
    }
  ]
};