export default {
  "id": 41,
  "title": "Tax Refund Scams",
  "emoji": "🧾",
  "description": "The classic tax time trap.",
  "introduction": "Learn to recognize and protect yourself from Tax Refund Scams.",
  "warning_signs": [],
  "what_to_do": [],
  "how_it_works": "",
  "questions": [
    {
      "type": 1,
      "prompt": "You get a text: 'ATO: You have an outstanding refund of $1,250. Click to process'.",
      "options": [
        "Click link",
        "Scam. The ATO never sends SMS with links to claim refunds.",
        "Reply",
        "Spend it"
      ],
      "correct": 1,
      "explanation": "The ATO will never send a direct link to process a refund via SMS. Refunds are automatic into your nominated account."
    },
    {
      "type": 1,
      "prompt": "The link takes you to a login page that looks exactly like myGov.",
      "options": [
        "Log in",
        "Check the URL. Phishing sites clone the design perfectly.",
        "Bookmark",
        "Safe"
      ],
      "correct": 1,
      "explanation": "Visuals can be copied easily. The URL (e.g., 'mygov-au-refund.com') reveals the fraud."
    },
    {
      "type": 1,
      "prompt": "The form asks for your credit card details to 'receive' the funds.",
      "options": [
        "Enter details",
        "Scam. Refunds go to bank accounts (BSB/Acc), never cards.",
        "Debit card",
        "Okay"
      ],
      "correct": 1,
      "explanation": "The government does not push money onto credit cards."
    },
    {
      "type": 1,
      "prompt": "The message arrives in July or August.",
      "options": [
        "Timely",
        "Scammers target tax season specifically",
        "Real",
        "Expected"
      ],
      "correct": 1,
      "explanation": "Volume of scams peaks when people are actually expecting tax news."
    },
    {
      "type": 1,
      "prompt": "The Sender ID says 'ATO' or 'myGov' on your phone.",
      "options": [
        "Must be real",
        "Sender IDs can be spoofed. It's not proof.",
        "Trust",
        "Official"
      ],
      "correct": 1,
      "explanation": "Scammers can make the text appear in the same thread as real messages."
    },
    {
      "type": 1,
      "prompt": "You log in to the real myGov site separately and see nothing.",
      "options": [
        "Glitch",
        "Proof the text was a scam",
        "Wait",
        "Call"
      ],
      "correct": 1,
      "explanation": "The official portal is the source of truth."
    },
    {
      "type": 1,
      "prompt": "They ask for your TFN to verify the refund.",
      "options": [
        "Give it",
        "High risk. They use TFNs for identity theft.",
        "Verify",
        "Standard"
      ],
      "correct": 1,
      "explanation": "A link in an SMS asking for TFN is always malicious."
    },
    {
      "type": 1,
      "prompt": "The URL is shortened (e.g., bit.ly/ato-refund).",
      "options": [
        "Click",
        "Don't click. Government uses full .gov.au links.",
        "Short",
        "Easy"
      ],
      "correct": 1,
      "explanation": "Short links hide the destination."
    },
    {
      "type": 1,
      "prompt": "What happens if you click?",
      "options": [
        "Money",
        "Malware download or phishing page",
        "Nothing",
        "Login"
      ],
      "correct": 1,
      "explanation": "The link itself can sometimes be dangerous."
    },
    {
      "type": 1,
      "prompt": "Report to?",
      "options": [
        "ATO Report a Scam",
        "Delete",
        "Mum",
        "Reply"
      ],
      "correct": 0,
      "explanation": "Forwarding the SMS to the ATO helps them track campaigns."
    },
    {
      "type": 2,
      "prompt": "An ad on Facebook promises 'Guaranteed $5000 Refund'.",
      "options": [
        "Sign up",
        "Scam. No agent can guarantee a refund amount before seeing data.",
        "Good agent",
        "Lucky"
      ],
      "correct": 1,
      "explanation": "Guarantees are illegal and indicate fraudulent inflation of deductions."
    },
    {
      "type": 2,
      "prompt": "The agent asks for your myGov password.",
      "options": [
        "Give it",
        "NEVER. Agents have their own portal access.",
        "Helpful",
        "Easier"
      ],
      "correct": 1,
      "explanation": "Registered agents use the Tax Agent Portal. They never need your personal login."
    },
    {
      "type": 2,
      "prompt": "They want the refund paid into THEIR account first.",
      "options": [
        "Okay",
        "Risk. They might keep it all or take huge fees.",
        "Standard",
        "Trust"
      ],
      "correct": 1,
      "explanation": "Safer to have the ATO pay you directly."
    },
    {
      "type": 2,
      "prompt": "The agent is not listed on the TPB (Tax Practitioners Board) register.",
      "options": [
        "New agent",
        "Unregistered/Illegal provider",
        "Fine",
        "Cheap"
      ],
      "correct": 1,
      "explanation": "Only registered agents can legally charge a fee."
    },
    {
      "type": 2,
      "prompt": "They suggest claiming expenses you didn't have (e.g., 'Laundry').",
      "options": [
        "Smart",
        "Fraud. You are liable for fines.",
        "Loophole",
        "Everyone does it"
      ],
      "correct": 1,
      "explanation": "The ATO audits these claims. You pay the fine, not the agent."
    },
    {
      "type": 2,
      "prompt": "They ask you to sign a blank form.",
      "options": [
        "Sign",
        "Refuse. They can fill in anything later.",
        "Trust",
        "Easy"
      ],
      "correct": 1,
      "explanation": "Blank signatures are a blank cheque for fraud."
    },
    {
      "type": 2,
      "prompt": "They 'Ghost' you after lodging.",
      "options": [
        "Busy",
        "Ghost Tax Preparer scam",
        "Holiday",
        "Rude"
      ],
      "correct": 1,
      "explanation": "They take the fee and vanish, leaving you with a messy return."
    },
    {
      "type": 2,
      "prompt": "They charge a percentage of the refund.",
      "options": [
        "Incentive",
        "Encourages illegal inflation of claims",
        "Fair",
        "Deal"
      ],
      "correct": 1,
      "explanation": "Be wary of incentives to lie."
    },
    {
      "type": 2,
      "prompt": "How to verify an agent?",
      "options": [
        "Facebook reviews",
        "TPB.gov.au Register",
        "Ask them",
        "Google"
      ],
      "correct": 1,
      "explanation": "The official government register."
    },
    {
      "type": 2,
      "prompt": "Can you be fined for your agent's mistake?",
      "options": [
        "No",
        "Yes, the taxpayer is ultimately responsible",
        "Maybe",
        "Rarely"
      ],
      "correct": 1,
      "explanation": "You sign the declaration, you take the risk."
    },
    {
      "type": 3,
      "prompt": "Robocall: 'A lawsuit has been filed against your TFN for tax evasion'.",
      "options": [
        "Panic",
        "Scam. ATO does not use threatening robocalls.",
        "Call back",
        "Pay"
      ],
      "correct": 1,
      "explanation": "Intimidation tactics using robotic voices are always scams."
    },
    {
      "type": 3,
      "prompt": "They demand immediate payment via iTunes Cards or Bitcoin.",
      "options": [
        "Pay",
        "Scam. Government never takes gift cards/crypto.",
        "Okay",
        "Fast"
      ],
      "correct": 1,
      "explanation": "Universal rule: No tax is paid with Apple cards."
    },
    {
      "type": 3,
      "prompt": "They threaten to send the Sheriff to your house in 1 hour.",
      "options": [
        "Hide",
        "Scam threat. Debt collection is a long legal process.",
        "Wait",
        "Tea"
      ],
      "correct": 1,
      "explanation": "Imminent arrest threats are designed to bypass logic."
    },
    {
      "type": 3,
      "prompt": "You check your myGov and have $0 debt.",
      "options": [
        "System error",
        "The caller is lying",
        "Wait",
        "Refresh"
      ],
      "correct": 1,
      "explanation": "Trust the official portal over the random caller."
    },
    {
      "type": 3,
      "prompt": "They keep you on the phone while you go to the shop.",
      "options": [
        "Support",
        "Monitoring ensuring you don't talk to staff",
        "Nice",
        "Help"
      ],
      "correct": 1,
      "explanation": "They don't want the shop assistant to warn you."
    },
    {
      "type": 3,
      "prompt": "They say 'We have an arrest warrant'.",
      "options": [
        "Scary",
        "ATO cannot issue arrest warrants over the phone",
        "True",
        "Lawyer"
      ],
      "correct": 1,
      "explanation": "Only courts issue warrants."
    },
    {
      "type": 3,
      "prompt": "They ask for your TFN to 'verify' the file.",
      "options": [
        "Give",
        "Don't give ID to cold callers",
        "Okay",
        "Verify"
      ],
      "correct": 1,
      "explanation": "Identity harvesting."
    },
    {
      "type": 3,
      "prompt": "The number looks local (02 / 03).",
      "options": [
        "Real",
        "Spoofed",
        "Local office",
        "Safe"
      ],
      "correct": 1,
      "explanation": "Local numbers build false trust."
    },
    {
      "type": 3,
      "prompt": "They get angry and scream at you.",
      "options": [
        "Professional",
        "Scammer tactic",
        "Stressed",
        "Bad day"
      ],
      "correct": 1,
      "explanation": "Government staff are trained to be respectful."
    },
    {
      "type": 3,
      "prompt": "What to do?",
      "options": [
        "Pay",
        "Hang up. Call ATO on 13 28 61.",
        "Argue",
        "Cry"
      ],
      "correct": 1,
      "explanation": "Verify independently."
    },
    {
      "type": 4,
      "prompt": "An agent offers to help you withdraw your Super early for a fee.",
      "options": [
        "Do it",
        "Illegal scam. Early access is strictly limited.",
        "Great",
        "Need cash"
      ],
      "correct": 1,
      "explanation": "Unless in severe hardship, accessing Super early is illegal and targeted by scammers."
    },
    {
      "type": 4,
      "prompt": "They ask for your myGov login to 'check your Super balance'.",
      "options": [
        "Give",
        "They will steal your Super instantly.",
        "Okay",
        "Help"
      ],
      "correct": 1,
      "explanation": "They roll your Super into a SMSF (Self Managed Fund) they control and steal it."
    },
    {
      "type": 4,
      "prompt": "They claim they can bypass the ATO rules.",
      "options": [
        "Smart",
        "Fraud",
        "Loophole",
        "Agent"
      ],
      "correct": 1,
      "explanation": "There is no magic bypass."
    },
    {
      "type": 4,
      "prompt": "Identity theft used to claim Super.",
      "options": [
        "Rare",
        "Common. Stolen ID is used to create fake Super accounts.",
        "Never",
        "Hard"
      ],
      "correct": 1,
      "explanation": "If they have your ID, they can claim your Super without you knowing."
    },
    {
      "type": 4,
      "prompt": "You receive a letter from a new Super fund you didn't join.",
      "options": [
        "Bin it",
        "Investigate immediately. Someone moved your money.",
        "Mistake",
        "New"
      ],
      "correct": 1,
      "explanation": "A consolidation letter is a huge warning sign."
    },
    {
      "type": 4,
      "prompt": "Is it easy to recover stolen Super?",
      "options": [
        "Yes",
        "Very difficult",
        "Automatic",
        "Insurance"
      ],
      "correct": 1,
      "explanation": "Once moved to a fraudulent SMSF and withdrawn, it's gone."
    },
    {
      "type": 4,
      "prompt": "They charge an upfront fee.",
      "options": [
        "Pay",
        "Scam",
        "Standard",
        "Admin"
      ],
      "correct": 1,
      "explanation": "Predatory fees for illegal services."
    },
    {
      "type": 4,
      "prompt": "Target audience?",
      "options": [
        "Rich",
        "People in financial distress",
        "Kids",
        "Retirees"
      ],
      "correct": 1,
      "explanation": "They prey on people needing cash now."
    },
    {
      "type": 4,
      "prompt": "Check your Super.",
      "options": [
        "Annually",
        "Regularly via myGov to ensure balance is correct",
        "Never",
        "Later"
      ],
      "correct": 1,
      "explanation": "Regular checks catch fraud early."
    },
    {
      "type": 4,
      "prompt": "Report to?",
      "options": [
        "ATO & Super Fund",
        "Nobody",
        "Police only",
        "Friend"
      ],
      "correct": 0,
      "explanation": "Alert the fund to freeze accounts."
    },
    {
      "type": 5,
      "prompt": "Email with subject: 'Overdue BAS Statement - Penalty Apply'.",
      "options": [
        "Open attachment",
        "Check sender address. Don't open attachments.",
        "Pay",
        "Panic"
      ],
      "correct": 1,
      "explanation": "Scammers target business owners with fake BAS warnings."
    },
    {
      "type": 5,
      "prompt": "The link goes to a 'SharePoint' or 'OneDrive' document.",
      "options": [
        "Official",
        "Common phishing hosting method",
        "Secure",
        "Cloud"
      ],
      "correct": 1,
      "explanation": "They host fake forms on legitimate cloud sites to bypass filters."
    },
    {
      "type": 5,
      "prompt": "It asks you to update your Director ID details.",
      "options": [
        "Update",
        "Check ABRS website directly.",
        "Click",
        "Fast"
      ],
      "correct": 1,
      "explanation": "Director ID is a new vector for scams."
    },
    {
      "type": 5,
      "prompt": "The email has the ATO logo but bad formatting.",
      "options": [
        "Real",
        "Fake. Look for quality issues.",
        "Old",
        "Draft"
      ],
      "correct": 1,
      "explanation": "Sloppy design indicates a scam."
    },
    {
      "type": 5,
      "prompt": "You hover over the link and it says 'wp-admin-content.com'.",
      "options": [
        "Official",
        "Hacked WordPress site hosting a scam",
        "ATO site",
        "Safe"
      ],
      "correct": 1,
      "explanation": "Hovering reveals the true destination."
    },
    {
      "type": 5,
      "prompt": "They ask for credit card to pay a 'Filing Fee'.",
      "options": [
        "Pay",
        "BAS filing is usually free via portal",
        "Fee",
        "Tax"
      ],
      "correct": 1,
      "explanation": "Fake fees."
    },
    {
      "type": 5,
      "prompt": "Can ransomware come from tax emails?",
      "options": [
        "Yes",
        "No",
        "Maybe",
        "Rarely"
      ],
      "correct": 0,
      "explanation": "Opening the attachment can lock your business computers."
    },
    {
      "type": 5,
      "prompt": "The email greets you by your email address, not name.",
      "options": [
        "Personal",
        "Generic/Scam",
        "Okay",
        "System"
      ],
      "correct": 1,
      "explanation": "ATO knows your registered business name."
    },
    {
      "type": 5,
      "prompt": "You are not a business owner but got a BAS email.",
      "options": [
        "Mistake",
        "Mass spam",
        "Start business",
        "Reply"
      ],
      "correct": 1,
      "explanation": "They spray and pray."
    },
    {
      "type": 5,
      "prompt": "Secure mail?",
      "options": [
        "Email",
        "MyGov Inbox is the only secure channel",
        "Post",
        "Text"
      ],
      "correct": 1,
      "explanation": "Official notices go to the secure inbox, not standard email."
    }
  ]
};