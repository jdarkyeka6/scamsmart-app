export default [
  {
    id: "41-01",
    title: "The 'Pending Refund' SMS",
    description: "The classic tax time trap.",
    questions: [
      {
        question: "You get a text: 'ATO: You have an outstanding refund of $1,250. Click to process'.",
        options: ["Click link", "Scam. The ATO never sends SMS with links to claim refunds.", "Reply", "Spend it"],
        correctAnswer: 1,
        explanation: "The ATO will never send a direct link to process a refund via SMS. Refunds are automatic into your nominated account."
      },
      {
        question: "The link takes you to a login page that looks exactly like myGov.",
        options: ["Log in", "Check the URL. Phishing sites clone the design perfectly.", "Bookmark", "Safe"],
        correctAnswer: 1,
        explanation: "Visuals can be copied easily. The URL (e.g., 'mygov-au-refund.com') reveals the fraud."
      },
      {
        question: "The form asks for your credit card details to 'receive' the funds.",
        options: ["Enter details", "Scam. Refunds go to bank accounts (BSB/Acc), never cards.", "Debit card", "Okay"],
        correctAnswer: 1,
        explanation: "The government does not push money onto credit cards."
      },
      {
        question: "The message arrives in July or August.",
        options: ["Timely", "Scammers target tax season specifically", "Real", "Expected"],
        correctAnswer: 1,
        explanation: "Volume of scams peaks when people are actually expecting tax news."
      },
      {
        question: "The Sender ID says 'ATO' or 'myGov' on your phone.",
        options: ["Must be real", "Sender IDs can be spoofed. It's not proof.", "Trust", "Official"],
        correctAnswer: 1,
        explanation: "Scammers can make the text appear in the same thread as real messages."
      },
      {
        question: "You log in to the real myGov site separately and see nothing.",
        options: ["Glitch", "Proof the text was a scam", "Wait", "Call"],
        correctAnswer: 1,
        explanation: "The official portal is the source of truth."
      },
      {
        question: "They ask for your TFN to verify the refund.",
        options: ["Give it", "High risk. They use TFNs for identity theft.", "Verify", "Standard"],
        correctAnswer: 1,
        explanation: "A link in an SMS asking for TFN is always malicious."
      },
      {
        question: "The URL is shortened (e.g., bit.ly/ato-refund).",
        options: ["Click", "Don't click. Government uses full .gov.au links.", "Short", "Easy"],
        correctAnswer: 1,
        explanation: "Short links hide the destination."
      },
      {
        question: "What happens if you click?",
        options: ["Money", "Malware download or phishing page", "Nothing", "Login"],
        correctAnswer: 1,
        explanation: "The link itself can sometimes be dangerous."
      },
      {
        question: "Report to?",
        options: ["ATO Report a Scam", "Delete", "Mum", "Reply"],
        correctAnswer: 0,
        explanation: "Forwarding the SMS to the ATO helps them track campaigns."
      }
    ]
  },
  {
    id: "41-02",
    title: "Fake Tax Agents",
    description: "When your accountant is the thief.",
    questions: [
      {
        question: "An ad on Facebook promises 'Guaranteed $5000 Refund'.",
        options: ["Sign up", "Scam. No agent can guarantee a refund amount before seeing data.", "Good agent", "Lucky"],
        correctAnswer: 1,
        explanation: "Guarantees are illegal and indicate fraudulent inflation of deductions."
      },
      {
        question: "The agent asks for your myGov password.",
        options: ["Give it", "NEVER. Agents have their own portal access.", "Helpful", "Easier"],
        correctAnswer: 1,
        explanation: "Registered agents use the Tax Agent Portal. They never need your personal login."
      },
      {
        question: "They want the refund paid into THEIR account first.",
        options: ["Okay", "Risk. They might keep it all or take huge fees.", "Standard", "Trust"],
        correctAnswer: 1,
        explanation: "Safer to have the ATO pay you directly."
      },
      {
        question: "The agent is not listed on the TPB (Tax Practitioners Board) register.",
        options: ["New agent", "Unregistered/Illegal provider", "Fine", "Cheap"],
        correctAnswer: 1,
        explanation: "Only registered agents can legally charge a fee."
      },
      {
        question: "They suggest claiming expenses you didn't have (e.g., 'Laundry').",
        options: ["Smart", "Fraud. You are liable for fines.", "Loophole", "Everyone does it"],
        correctAnswer: 1,
        explanation: "The ATO audits these claims. You pay the fine, not the agent."
      },
      {
        question: "They ask you to sign a blank form.",
        options: ["Sign", "Refuse. They can fill in anything later.", "Trust", "Easy"],
        correctAnswer: 1,
        explanation: "Blank signatures are a blank cheque for fraud."
      },
      {
        question: "They 'Ghost' you after lodging.",
        options: ["Busy", "Ghost Tax Preparer scam", "Holiday", "Rude"],
        correctAnswer: 1,
        explanation: "They take the fee and vanish, leaving you with a messy return."
      },
      {
        question: "They charge a percentage of the refund.",
        options: ["Incentive", "Encourages illegal inflation of claims", "Fair", "Deal"],
        correctAnswer: 1,
        explanation: "Be wary of incentives to lie."
      },
      {
        question: "How to verify an agent?",
        options: ["Facebook reviews", "TPB.gov.au Register", "Ask them", "Google"],
        correctAnswer: 1,
        explanation: "The official government register."
      },
      {
        question: "Can you be fined for your agent's mistake?",
        options: ["No", "Yes, the taxpayer is ultimately responsible", "Maybe", "Rarely"],
        correctAnswer: 1,
        explanation: "You sign the declaration, you take the risk."
      }
    ]
  },
  {
    id: "41-03",
    title: "The 'Tax Debt' Threat",
    description: "Pay now or go to jail.",
    questions: [
      {
        question: "Robocall: 'A lawsuit has been filed against your TFN for tax evasion'.",
        options: ["Panic", "Scam. ATO does not use threatening robocalls.", "Call back", "Pay"],
        correctAnswer: 1,
        explanation: "Intimidation tactics using robotic voices are always scams."
      },
      {
        question: "They demand immediate payment via iTunes Cards or Bitcoin.",
        options: ["Pay", "Scam. Government never takes gift cards/crypto.", "Okay", "Fast"],
        correctAnswer: 1,
        explanation: "Universal rule: No tax is paid with Apple cards."
      },
      {
        question: "They threaten to send the Sheriff to your house in 1 hour.",
        options: ["Hide", "Scam threat. Debt collection is a long legal process.", "Wait", "Tea"],
        correctAnswer: 1,
        explanation: "Imminent arrest threats are designed to bypass logic."
      },
      {
        question: "You check your myGov and have $0 debt.",
        options: ["System error", "The caller is lying", "Wait", "Refresh"],
        correctAnswer: 1,
        explanation: "Trust the official portal over the random caller."
      },
      {
        question: "They keep you on the phone while you go to the shop.",
        options: ["Support", "Monitoring ensuring you don't talk to staff", "Nice", "Help"],
        correctAnswer: 1,
        explanation: "They don't want the shop assistant to warn you."
      },
      {
        question: "They say 'We have an arrest warrant'.",
        options: ["Scary", "ATO cannot issue arrest warrants over the phone", "True", "Lawyer"],
        correctAnswer: 1,
        explanation: "Only courts issue warrants."
      },
      {
        question: "They ask for your TFN to 'verify' the file.",
        options: ["Give", "Don't give ID to cold callers", "Okay", "Verify"],
        correctAnswer: 1,
        explanation: "Identity harvesting."
      },
      {
        question: "The number looks local (02 / 03).",
        options: ["Real", "Spoofed", "Local office", "Safe"],
        correctAnswer: 1,
        explanation: "Local numbers build false trust."
      },
      {
        question: "They get angry and scream at you.",
        options: ["Professional", "Scammer tactic", "Stressed", "Bad day"],
        correctAnswer: 1,
        explanation: "Government staff are trained to be respectful."
      },
      {
        question: "What to do?",
        options: ["Pay", "Hang up. Call ATO on 13 28 61.", "Argue", "Cry"],
        correctAnswer: 1,
        explanation: "Verify independently."
      }
    ]
  },
  {
    id: "41-04",
    title: "Superannuation Early Access",
    description: "Stealing your future.",
    questions: [
      {
        question: "An agent offers to help you withdraw your Super early for a fee.",
        options: ["Do it", "Illegal scam. Early access is strictly limited.", "Great", "Need cash"],
        correctAnswer: 1,
        explanation: "Unless in severe hardship, accessing Super early is illegal and targeted by scammers."
      },
      {
        question: "They ask for your myGov login to 'check your Super balance'.",
        options: ["Give", "They will steal your Super instantly.", "Okay", "Help"],
        correctAnswer: 1,
        explanation: "They roll your Super into a SMSF (Self Managed Fund) they control and steal it."
      },
      {
        question: "They claim they can bypass the ATO rules.",
        options: ["Smart", "Fraud", "Loophole", "Agent"],
        correctAnswer: 1,
        explanation: "There is no magic bypass."
      },
      {
        question: "Identity theft used to claim Super.",
        options: ["Rare", "Common. Stolen ID is used to create fake Super accounts.", "Never", "Hard"],
        correctAnswer: 1,
        explanation: "If they have your ID, they can claim your Super without you knowing."
      },
      {
        question: "You receive a letter from a new Super fund you didn't join.",
        options: ["Bin it", "Investigate immediately. Someone moved your money.", "Mistake", "New"],
        correctAnswer: 1,
        explanation: "A consolidation letter is a huge warning sign."
      },
      {
        question: "Is it easy to recover stolen Super?",
        options: ["Yes", "Very difficult", "Automatic", "Insurance"],
        correctAnswer: 1,
        explanation: "Once moved to a fraudulent SMSF and withdrawn, it's gone."
      },
      {
        question: "They charge an upfront fee.",
        options: ["Pay", "Scam", "Standard", "Admin"],
        correctAnswer: 1,
        explanation: "Predatory fees for illegal services."
      },
      {
        question: "Target audience?",
        options: ["Rich", "People in financial distress", "Kids", "Retirees"],
        correctAnswer: 1,
        explanation: "They prey on people needing cash now."
      },
      {
        question: "Check your Super.",
        options: ["Annually", "Regularly via myGov to ensure balance is correct", "Never", "Later"],
        correctAnswer: 1,
        explanation: "Regular checks catch fraud early."
      },
      {
        question: "Report to?",
        options: ["ATO & Super Fund", "Nobody", "Police only", "Friend"],
        correctAnswer: 0,
        explanation: "Alert the fund to freeze accounts."
      }
    ]
  },
  {
    id: "41-05",
    title: "Phishing via Email",
    description: "The fake Business Activity Statement (BAS).",
    questions: [
      {
        question: "Email with subject: 'Overdue BAS Statement - Penalty Apply'.",
        options: ["Open attachment", "Check sender address. Don't open attachments.", "Pay", "Panic"],
        correctAnswer: 1,
        explanation: "Scammers target business owners with fake BAS warnings."
      },
      {
        question: "The link goes to a 'SharePoint' or 'OneDrive' document.",
        options: ["Official", "Common phishing hosting method", "Secure", "Cloud"],
        correctAnswer: 1,
        explanation: "They host fake forms on legitimate cloud sites to bypass filters."
      },
      {
        question: "It asks you to update your Director ID details.",
        options: ["Update", "Check ABRS website directly.", "Click", "Fast"],
        correctAnswer: 1,
        explanation: "Director ID is a new vector for scams."
      },
      {
        question: "The email has the ATO logo but bad formatting.",
        options: ["Real", "Fake. Look for quality issues.", "Old", "Draft"],
        correctAnswer: 1,
        explanation: "Sloppy design indicates a scam."
      },
      {
        question: "You hover over the link and it says 'wp-admin-content.com'.",
        options: ["Official", "Hacked WordPress site hosting a scam", "ATO site", "Safe"],
        correctAnswer: 1,
        explanation: "Hovering reveals the true destination."
      },
      {
        question: "They ask for credit card to pay a 'Filing Fee'.",
        options: ["Pay", "BAS filing is usually free via portal", "Fee", "Tax"],
        correctAnswer: 1,
        explanation: "Fake fees."
      },
      {
        question: "Can ransomware come from tax emails?",
        options: ["Yes", "No", "Maybe", "Rarely"],
        correctAnswer: 0,
        explanation: "Opening the attachment can lock your business computers."
      },
      {
        question: "The email greets you by your email address, not name.",
        options: ["Personal", "Generic/Scam", "Okay", "System"],
        correctAnswer: 1,
        explanation: "ATO knows your registered business name."
      },
      {
        question: "You are not a business owner but got a BAS email.",
        options: ["Mistake", "Mass spam", "Start business", "Reply"],
        correctAnswer: 1,
        explanation: "They spray and pray."
      },
      {
        question: "Secure mail?",
        options: ["Email", "MyGov Inbox is the only secure channel", "Post", "Text"],
        correctAnswer: 1,
        explanation: "Official notices go to the secure inbox, not standard email."
      }
    ]
  }
];