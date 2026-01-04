export default [
  {
    id: "22-01",
    title: "The 'Changed Bank Details' Email",
    description: "The most costly scam for businesses and homebuyers.",
    questions: [
      {
        question: "You receive an invoice from a known builder/supplier. It says: 'Please note our bank details have changed'.",
        options: ["Update and pay", "STOP. Call them on a known number to verify.", "Reply to check", "Pay half"],
        correctAnswer: 1,
        explanation: "This is the classic redirection scam. Hackers edit the invoice. Always verify changes via voice."
      },
      {
        question: "Why shouldn't you reply to the email to ask if it's real?",
        options: ["It's rude", "The hacker controls the email account and will say 'Yes'", "It bounces", "Slow"],
        correctAnswer: 1,
        explanation: "If their email is compromised, the hacker is the one reading and replying to your emails."
      },
      {
        question: "The email comes from 'supplier.accounts@gmail.com' instead of '@supplier.com'.",
        options: ["Normal", "Red flag (Spoofed email)", "New system", "Okay"],
        correctAnswer: 1,
        explanation: "Look closely at the domain. Professional businesses don't use free webmail for invoicing."
      },
      {
        question: "You are buying a house. Your Conveyancer emails asking for the deposit to a new account.",
        options: ["Pay immediately", "Verify in person or via phone call", "Trust lawyer", "Hurry"],
        correctAnswer: 1,
        explanation: "This is a high-value target. People lose house deposits ($100k+) this way."
      },
      {
        question: "The urgency is high: 'Pay today or delivery will be delayed'.",
        options: ["Pay", "Scam tactic. Verify first.", "Panic", "Rush"],
        correctAnswer: 1,
        explanation: "Pressure makes you skip the verification step."
      },
      {
        question: "The BSB belongs to a different bank than usual.",
        options: ["They switched banks", "Warning sign", "Normal", "Okay"],
        correctAnswer: 1,
        explanation: "A sudden switch of financial institution is suspicious."
      },
      {
        question: "The invoice looks slightly blurry or the font is different on the bank details.",
        options: ["Bad printer", "Altered document", "Glitch", "Old"],
        correctAnswer: 1,
        explanation: "Scammers edit PDFs. Inconsistencies reveal the edit."
      },
      {
        question: "What is 'BEC'?",
        options: ["Bacon Egg Cheese", "Business Email Compromise", "Bank Error Code", "Big Email"],
        correctAnswer: 1,
        explanation: "The technical term for hacking business emails to commit fraud."
      },
      {
        question: "If you pay the wrong account, can the bank just reverse it?",
        options: ["Yes, instantly", "No, it is very difficult to recover once funds are moved", "Always", "Maybe"],
        correctAnswer: 1,
        explanation: "Once money leaves your bank, recovery is not guaranteed."
      },
      {
        question: "Standard procedure for bank detail changes should be:",
        options: ["Email only", "Multi-factor verification (Phone + Written)", "Text", "None"],
        correctAnswer: 1,
        explanation: "Secure businesses use multiple checks."
      }
    ]
  },
  {
    id: "22-02",
    title: "Fake Invoice Scams",
    description: "Bills for things you never ordered.",
    questions: [
      {
        question: "Your business gets an invoice for 'Domain Listing' or 'SEO Services'.",
        options: ["Pay it", "Check if you actually ordered it. Likely a directory scam.", "File it", "Ask boss"],
        correctAnswer: 1,
        explanation: "Scammers send thousands of small invoices hoping businesses auto-pay them."
      },
      {
        question: "The invoice is for 'Norton Antivirus Auto-Renewal' but you don't use Norton.",
        options: ["Pay", "Scam. Call the number on the invoice? NO.", "Ignore/Delete", "Reply"],
        correctAnswer: 2,
        explanation: "They want you to call the number to 'cancel', leading to a refund scam."
      },
      {
        question: "The amount is small (under $50).",
        options: ["Pay it", "Check validity. Scammers aim under the 'approval threshold'.", "Ignore", "Safe"],
        correctAnswer: 1,
        explanation: "Small amounts often slip through accounts payable departments."
      },
      {
        question: "The invoice says 'This is not a bill, this is a solicitation' in tiny print.",
        options: ["Sneaky", "Legal loophole used by directory scams", "Mistake", "Honest"],
        correctAnswer: 1,
        explanation: "They try to make it LOOK like a bill while legally claiming it's an 'offer'."
      },
      {
        question: "You receive an invoice from 'Yellow Pages' (but it's a fake lookalike).",
        options: ["Pay", "Verify trademark/logo carefully", "Trust brand", "Yellow is real"],
        correctAnswer: 1,
        explanation: "Brand impersonation is common."
      },
      {
        question: "The invoice arrives as a .zip file attachment.",
        options: ["Open zip", "Malware risk. Don't open.", "Unzip", "Safe"],
        correctAnswer: 1,
        explanation: "Invoices should be PDF. Zip files often contain viruses."
      },
      {
        question: "You don't recognize the vendor name.",
        options: ["Pay anyway", "Google them + 'scam'", "Ask finance", "Wait"],
        correctAnswer: 1,
        explanation: "A quick search often reveals 'Fake Invoice' warnings."
      },
      {
        question: "The invoice has no ABN or tax breakdown.",
        options: ["Pay", "Invalid invoice. Do not pay.", "Overseas", "Okay"],
        correctAnswer: 1,
        explanation: "Valid Australian invoices must meet ATO standards."
      },
      {
        question: "They threaten 'Credit Rating Damage' if not paid in 24 hours.",
        options: ["Pay", "Intimidation tactic. Verify first.", "Panic", "Call"],
        correctAnswer: 1,
        explanation: "Legitimate debt collection has a legal process, not 24-hour email threats."
      },
      {
        question: "How to protect accounts payable?",
        options: ["Pay everything", "3-way matching (PO, Receiving Report, Invoice)", "Guess", "Auto-pay"],
        correctAnswer: 1,
        explanation: "Standard accounting controls stop these scams."
      }
    ]
  },
  {
    id: "22-03",
    title: "Payroll Fraud",
    description: "Intercepting your salary.",
    questions: [
      {
        question: "HR receives an email from 'John Smith' (Employee): 'I changed banks. Update my salary details to this new account'.",
        options: ["Update immediately", "Call John on his internal number to confirm", "Email back", "Ignore"],
        correctAnswer: 1,
        explanation: "Scammers spoof employee emails to divert salary payments."
      },
      {
        question: "The email style is brief and demands immediate action before pay day.",
        options: ["Efficient", "Red flag. Check the sender address.", "Do it", "Helpful"],
        correctAnswer: 1,
        explanation: "Urgency before a deadline is a common pressure tactic."
      },
      {
        question: "The new bank account is a 'Prepaid' or 'Neobank' card.",
        options: ["Modern", "Higher risk. Often used for money mules.", "Cool", "Okay"],
        correctAnswer: 1,
        explanation: "While valid, it warrants an extra check."
      },
      {
        question: "The email address is 'john.smith-company@outlook.com'.",
        options: ["Work email", "Personal email impersonating work. Verify.", "Safe", "Okay"],
        correctAnswer: 1,
        explanation: "Employees should use official company email or portals."
      },
      {
        question: "HR replies asking for voided cheque, scammer provides a photoshopped one.",
        options: ["Accept it", "Look for editing artifacts", "Trust", "Pay"],
        correctAnswer: 1,
        explanation: "Documents can be forged. Voice verification is superior."
      },
      {
        question: "What is 'Salary Diversion'?",
        options: ["Investing", "Stealing wages by changing bank details", "Tax", "Bonus"],
        correctAnswer: 1,
        explanation: "A specific type of BEC targeting payroll."
      },
      {
        question: "Does this happen to CEOs?",
        options: ["No", "Yes, high earners are prime targets", "Never", "Rarely"],
        correctAnswer: 1,
        explanation: "Bigger salaries = bigger payout for scammers."
      },
      {
        question: "How should employees update bank details?",
        options: ["Email", "Secure HR Portal with 2FA or in-person", "Text", "Note"],
        correctAnswer: 1,
        explanation: "Secure portals remove the risk of email spoofing."
      },
      {
        question: "You (employee) didn't get paid.",
        options: ["Wait", "Alert payroll immediately", "Quit", "Cry"],
        correctAnswer: 1,
        explanation: "Immediate reporting gives the bank a chance to recall funds."
      },
      {
        question: "Who is liable?",
        options: ["Scammer", "Complex legal area. Often the employer if they failed verification.", "Bank", "Nobody"],
        correctAnswer: 1,
        explanation: "Employers may have to pay twice if they fell for a scam."
      }
    ]
  },
  {
    id: "22-04",
    title: "Supplier Impersonation",
    description: "When the scammer pretends to be your vendor.",
    questions: [
      {
        question: "A long-term supplier emails saying their account is under audit, please pay to this new account.",
        options: ["Okay", "Verify. 'Audit' is a common scam excuse.", "Helpful", "Standard"],
        correctAnswer: 1,
        explanation: "Scammers need a plausible reason for the account change."
      },
      {
        question: "They offer a 10% discount for early payment to the new account.",
        options: ["Take deal", "Suspicious. Greed bait.", "Pay", "Nice"],
        correctAnswer: 1,
        explanation: "The discount makes you rush to pay before checking."
      },
      {
        question: "The new account is in a different country.",
        options: ["Global trade", "High risk. Why would a local supplier use an overseas bank?", "Okay", "Tax"],
        correctAnswer: 1,
        explanation: "International transfers are harder to recover."
      },
      {
        question: "They ask for payment via Crypto.",
        options: ["Modern", "Scam. Legitimate B2B suppliers don't use crypto.", "Fast", "Easy"],
        correctAnswer: 1,
        explanation: "Business usually runs on bank transfers, not Bitcoin."
      },
      {
        question: "The email signature looks real.",
        options: ["Trust it", "Copy-pasting a signature is easy", "Proof", "Safe"],
        correctAnswer: 1,
        explanation: "Signatures are easily stolen."
      },
      {
        question: "You call the number IN THE EMAIL to verify.",
        options: ["Good idea", "Bad idea. You are calling the scammer. Use Google/Records.", "Safe", "Standard"],
        correctAnswer: 1,
        explanation: "Always use a trusted, previously known number."
      },
      {
        question: "They claim the old account is 'frozen'.",
        options: ["Help them", "Red flag", "Pay new", "Wait"],
        correctAnswer: 1,
        explanation: "Drama/Emergency is a scam tactic."
      },
      {
        question: "How can 'DMARC' help?",
        options: ["A robot", "Email authentication technology that stops spoofing", "A bank", "Software"],
        correctAnswer: 1,
        explanation: "DMARC helps verify that the email actually came from the domain owner."
      },
      {
        question: "The supplier's website is down.",
        options: ["Coincidence", "Maybe hacked", "Check news", "All of above"],
        correctAnswer: 3,
        explanation: "A compromised website might be part of a larger attack."
      },
      {
        question: "What is the 'Verify' step?",
        options: ["Thinking", "Calling a known contact on a known number", "Emailing", "Guessing"],
        correctAnswer: 1,
        explanation: "Voice verification is the gold standard."
      }
    ]
  },
  {
    id: "22-05",
    title: "Man-in-the-Middle Attacks",
    description: "The spy in your inbox.",
    questions: [
      {
        question: "How do scammers know you have an invoice due?",
        options: ["Guess", "They are monitoring your (or the supplier's) email inbox", "Magic", "Luck"],
        correctAnswer: 1,
        explanation: "They hack the email, sit quietly, read the mail, and strike at the perfect moment."
      },
      {
        question: "You reply to an email chain, but the scammer answers.",
        options: ["Normal", "Man-in-the-Middle. They set up 'Forwarding Rules'.", "Glitch", "Fast"],
        correctAnswer: 1,
        explanation: "Hackers set up rules to hide the real emails and insert their fake ones."
      },
      {
        question: "You see emails in your 'Trash' you don't remember deleting.",
        options: ["Memory loss", "Hacker covering their tracks", "Clean up", "Auto-delete"],
        correctAnswer: 1,
        explanation: "They delete the real warning emails from the bank/supplier."
      },
      {
        question: "How to detect email monitoring?",
        options: ["Check 'Forwarding Rules' and 'Login History' in settings", "Scan PC", "Look at screen", "Ask IT"],
        correctAnswer: 0,
        explanation: "Checking settings reveals if a hacker is blind-copying your mail."
      },
      {
        question: "Should you use public Wi-Fi for banking?",
        options: ["Yes", "No. Use VPN or Mobile Data. Public Wi-Fi is easy to snoop.", "Always", "Free"],
        correctAnswer: 1,
        explanation: "Public Wi-Fi allows hackers to intercept data."
      },
      {
        question: "What is 'Encryption'?",
        options: ["Scrambling data so spies can't read it", "Deleting data", "Hiding", "Password"],
        correctAnswer: 0,
        explanation: "Encryption protects data in transit."
      },
      {
        question: "The hacker uses language exactly like your boss/supplier.",
        options: ["Smart", "They read past emails to mimic the style", "Lucky", "Coincidence"],
        correctAnswer: 1,
        explanation: "They study your history to be convincing."
      },
      {
        question: "Use 2FA (Two Factor Authentication) on email.",
        options: ["Too hard", "Essential. Stops hackers getting in to monitor you.", "Optional", "Sometimes"],
        correctAnswer: 1,
        explanation: "2FA is the best defense against email account takeover."
      },
      {
        question: "The reply-to address is slightly different to the sender.",
        options: ["Normal", "Scam. Directs reply to hacker.", "Tech", "Okay"],
        correctAnswer: 1,
        explanation: "This technical trick routes your reply to the criminal."
      },
      {
        question: "What if you suspect you are being monitored?",
        options: ["Change password immediately and check rules", "Shout", "Email asking who it is", "Wait"],
        correctAnswer: 0,
        explanation: "Lock them out first."
      }
    ]
  }
];