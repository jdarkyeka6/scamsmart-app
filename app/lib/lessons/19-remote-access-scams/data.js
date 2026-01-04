export default [
  {
    id: "19-01",
    title: "The 'Tech Support' Call",
    description: "Microsoft, Telstra, or NBN calling to 'fix' your computer.",
    questions: [
      {
        question: "You get a call: 'This is Microsoft. Your computer has a virus'.",
        options: ["Panic", "Hang up. Microsoft does not make unsolicited calls to fix computers.", "Follow instructions", "Thank them"],
        correctAnswer: 1,
        explanation: "This is a classic scam. Tech giants like Microsoft/Apple never cold-call you to fix bugs."
      },
      {
        question: "The caller says they are from 'NBN' and your internet will be disconnected due to hackers.",
        options: ["Fix it", "Scam. NBN Co does not sell directly to or call consumers.", "Call technician", "Wait"],
        correctAnswer: 1,
        explanation: "NBN Co is a wholesaler. They never call the public. Only your provider (Telstra/Optus) would call."
      },
      {
        question: "They ask you to press 'Windows + R' and type 'eventvwr'.",
        options: ["Do it", "Don't do it. This is a trick to show you harmless 'errors'.", "Ask why", "Type it"],
        correctAnswer: 1,
        explanation: "The 'Event Viewer' always shows minor warnings. Scammers claim these are 'viruses' to scare you."
      },
      {
        question: "The caller has a heavy accent and background noise (call center).",
        options: ["Normal", "Common indicator of an overseas scam center", "Busy office", "Tech support"],
        correctAnswer: 1,
        explanation: "Legitimate tech support is usually quieter and professional."
      },
      {
        question: "They know your name and address.",
        options: ["They must be real", "Public phone directory data. Doesn't prove they are Microsoft.", "Magic", "Government"],
        correctAnswer: 1,
        explanation: "Basic personal info is easy to find or buy online."
      },
      {
        question: "They promise to speed up your PC for a fee.",
        options: ["Pay", "Scam", "Good deal", "Fast"],
        correctAnswer: 1,
        explanation: "They will install malware or do nothing at all."
      },
      {
        question: "The number on caller ID looks local.",
        options: ["Trust it", "Spoofed number. Don't trust caller ID.", "Answer", "Safe"],
        correctAnswer: 1,
        explanation: "They use software to display a local area code to get you to answer."
      },
      {
        question: "They ask for your credit card to bill you for the 'fix'.",
        options: ["Give it", "Hang up", "Send cheque", "Cash"],
        correctAnswer: 1,
        explanation: "Never give financial details to a cold caller."
      },
      {
        question: "You say you have a Mac, and they hang up.",
        options: ["Rude", "They only had a script for Windows", "Busy", "Glitch"],
        correctAnswer: 1,
        explanation: "Scammers read from scripts. If you deviate, they often give up."
      },
      {
        question: "What is the best way to get tech support?",
        options: ["Wait for a call", "Contact a local shop or official support via their website", "Ask a stranger", "Guess"],
        correctAnswer: 1,
        explanation: "Initiate contact yourself."
      }
    ]
  },
  {
    id: "19-02",
    title: "Remote Access Software",
    description: "TeamViewer, AnyDesk, and giving away control.",
    questions: [
      {
        question: "The caller asks you to download 'AnyDesk' or 'TeamViewer'.",
        options: ["Download it", "Refuse. These are Remote Access Tools (RATs) that give them total control.", "Install", "Update"],
        correctAnswer: 1,
        explanation: "Once installed and connected, they can move your mouse and see your screen."
      },
      {
        question: "They say: 'I need to connect to your screen to show you the virus'.",
        options: ["Let them", "Scam. They will plant files or steal data.", "Helpful", "Standard"],
        correctAnswer: 1,
        explanation: "They use the access to fake a problem, not fix one."
      },
      {
        question: "Your screen goes black while they are connected.",
        options: ["Glitch", "They blacked it out to steal money without you seeing", "Reboot", "Wait"],
        correctAnswer: 1,
        explanation: "Scammers blank your monitor so you can't see them transferring money from your bank."
      },
      {
        question: "They ask you to log in to your bank account so they can 'refund' you.",
        options: ["Log in", "NEVER log in to banking while someone is remote connected.", "Okay", "Safe"],
        correctAnswer: 1,
        explanation: "If you log in, they steal your session and drain the account."
      },
      {
        question: "You see the mouse moving on its own.",
        options: ["Ghost", "The scammer is controlling it", "Broken mouse", "Virus"],
        correctAnswer: 1,
        explanation: "This is the definition of Remote Access."
      },
      {
        question: "How do you stop a remote access session?",
        options: ["Ask them to stop", "Unplug the internet router / Turn off the PC immediately", "Wait", "Cry"],
        correctAnswer: 1,
        explanation: "Sever the connection physically (pull the plug) to lock them out."
      },
      {
        question: "Is TeamViewer itself a virus?",
        options: ["Yes", "No, it's legitimate software misused by scammers", "Maybe", "Spyware"],
        correctAnswer: 1,
        explanation: "The software is a valid tool for IT pros, but dangerous in the wrong hands."
      },
      {
        question: "They install a 'Security Certificate' on your PC.",
        options: ["Good", "Likely malware or a backdoor for future access", "Safe", "Official"],
        correctAnswer: 1,
        explanation: "They often leave 'backdoors' to return later."
      },
      {
        question: "They ask you to cover your webcam.",
        options: ["Privacy", "To hide their identity", "Weird", "Polite"],
        correctAnswer: 2,
        explanation: "Unusual requests are designed to confuse or control you."
      },
      {
        question: "Can they access your files?",
        options: ["No", "Yes, they can copy/steal photos and documents", "Only banking", "Maybe"],
        correctAnswer: 1,
        explanation: "They have full access to your hard drive."
      }
    ]
  },
  {
    id: "19-03",
    title: "The 'Refund' Trick",
    description: "How they make you think they sent you money.",
    questions: [
      {
        question: "They say they 'accidentally' refunded you $4,000 instead of $400.",
        options: ["Keep it", "Scam. They manipulated the HTML of your banking page.", "Honest mistake", "Lucky"],
        correctAnswer: 1,
        explanation: "They use the 'Inspect Element' tool to edit the text on your screen. No money actually moved."
      },
      {
        question: "They demand you send the 'extra' money back via Gift Cards or Crypto.",
        options: ["Send it", "Don't. You are sending your own money.", "Be honest", "Return it"],
        correctAnswer: 1,
        explanation: "Since the refund was fake, any money you 'return' comes from your own savings."
      },
      {
        question: "They transfer money from your Savings to your Checking account to make it look like a refund.",
        options: ["Clever trick", "Bank error", "Real refund", "Gift"],
        correctAnswer: 0,
        explanation: "You see your balance go up and panic, not realizing it was your own money moving internally."
      },
      {
        question: "They become aggressive and threaten to sue you if you don't return the money.",
        options: ["Pay", "Scam tactic. Hang up.", "Call lawyer", "Apologize"],
        correctAnswer: 1,
        explanation: "Aggression is used to stop you checking the details."
      },
      {
        question: "They ask you to leave the line open.",
        options: ["Okay", "No. They want to monitor you.", "Polite", "Standard"],
        correctAnswer: 1,
        explanation: "They want to hear if you call the bank or police."
      },
      {
        question: "Why do they want Gift Cards?",
        options: ["They like shopping", "Untraceable and instant to sell", "Gifts", "Fees"],
        correctAnswer: 1,
        explanation: "Gift cards are the currency of scammers."
      },
      {
        question: "The screen is blurry or zoomed in.",
        options: ["Bad connection", "Intentional to hide their actions", "Old PC", "Virus"],
        correctAnswer: 1,
        explanation: "They confuse you visually."
      },
      {
        question: "You check your bank balance on a DIFFERENT device (phone).",
        options: ["Smart move", "Bad idea", "Won't work", "Same result"],
        correctAnswer: 0,
        explanation: "Checking on a separate device reveals the truth (no extra money)."
      },
      {
        question: "They say 'DO NOT touch the mouse'.",
        options: ["Touch it", "Scam control tactic", "Obey", "Wait"],
        correctAnswer: 1,
        explanation: "They don't want you to close their fake window."
      },
      {
        question: "What is 'HTML Editing'?",
        options: ["Coding", "Changing what a website LOOKS like locally, without changing the real data", "Hacking", "Design"],
        correctAnswer: 1,
        explanation: "It's like writing over a bank statement with a pen. It doesn't change the actual money."
      }
    ]
  },
  {
    id: "19-04",
    title: "Fake Pop-ups & Blue Screens",
    description: "Your computer is NOT locked.",
    questions: [
      {
        question: "A loud siren plays and a pop-up says 'YOUR PC IS INFECTED. CALL MICROSOFT'.",
        options: ["Call number", "Force close the browser (Alt+F4). It's a fake pop-up.", "Panic", "Pay"],
        correctAnswer: 1,
        explanation: "Browsers cannot scan your PC for viruses. It is just a webpage designed to scare you."
      },
      {
        question: "You can't close the window.",
        options: ["It's a virus", "It's a 'loop' script. Use Task Manager to kill the browser.", "Broken PC", "Wait"],
        correctAnswer: 1,
        explanation: "The page uses a script to reopen itself. It hasn't infected your computer."
      },
      {
        question: "The pop-up has a toll-free number to call.",
        options: ["Convenient", "Scam hotline", "Help desk", "Support"],
        correctAnswer: 1,
        explanation: "Real error messages never include a phone number to call."
      },
      {
        question: "It claims your files are encrypted.",
        options: ["Ransomware", "Scareware (Fake)", "True", "Deleted"],
        correctAnswer: 1,
        explanation: "Unless you see actual encrypted files, it's usually just a browser trick."
      },
      {
        question: "The mouse is locked in the browser window.",
        options: ["Virus", "Browser 'Full Screen' trick. Press Esc or F11.", "Broken", "Glitch"],
        correctAnswer: 1,
        explanation: "They force full screen to trap you."
      },
      {
        question: "The message contains bad grammar: 'Your Windows is expire'.",
        options: ["Microsoft typo", "Scam", "Old version", "Update"],
        correctAnswer: 1,
        explanation: "Official OS messages are grammatically correct."
      },
      {
        question: "Clicking anywhere opens more warnings.",
        options: ["Clicking", "Don't click. Close the tab/browser.", "Read them", "Follow"],
        correctAnswer: 1,
        explanation: "Interact as little as possible."
      },
      {
        question: "Is this a 'BSOD' (Blue Screen of Death)?",
        options: ["Yes", "No, a real BSOD crashes the PC; it doesn't ask you to call a number.", "Maybe", "New version"],
        correctAnswer: 1,
        explanation: "Real crashes restart the PC. Fake ones ask for money."
      },
      {
        question: "How do you avoid these?",
        options: ["Ad blocker", "Don't click dodgy links", "Update browser", "All of the above"],
        correctAnswer: 3,
        explanation: "Prevention is key."
      },
      {
        question: "The URL is random numbers (e.g., 192.168... or xyz.com).",
        options: ["Official", "Scam site", "Server", "Safe"],
        correctAnswer: 1,
        explanation: "Microsoft errors don't come from random web domains."
      }
    ]
  },
  {
    id: "19-05",
    title: "Damage Control",
    description: "You let them in. Now what?",
    questions: [
      {
        question: "You realize it's a scam while they are connected. First step?",
        options: ["Disconnect internet immediately", "Ask them to leave", "Watch them", "Shutdown gracefully"],
        correctAnswer: 0,
        explanation: "Pull the plug or turn off Wi-Fi instantly to cut their access."
      },
      {
        question: "Should you use the computer again immediately?",
        options: ["Yes", "No. Keep it offline until checked by a professional.", "Maybe", "Only for games"],
        correctAnswer: 1,
        explanation: "They may have left malware. It needs to be cleaned."
      },
      {
        question: "What should you do about your bank?",
        options: ["Nothing", "Call bank immediately to freeze accounts", "Check later", "Change PIN only"],
        correctAnswer: 1,
        explanation: "Tell the bank your device was compromised."
      },
      {
        question: "What about your passwords?",
        options: ["Keep them", "Change ALL passwords from a DIFFERENT, clean device", "Change only email", "Write them down"],
        correctAnswer: 1,
        explanation: "Assume they stole your saved passwords. Reset them from a safe phone/PC."
      },
      {
        question: "You paid via Credit Card. What do you do?",
        options: ["Cancel card", "Dispute transaction", "Report fraud", "All of the above"],
        correctAnswer: 3,
        explanation: "Contact your card issuer to stop the payment and reissue a card."
      },
      {
        question: "Should you restore from a backup?",
        options: ["Yes, to a date BEFORE the call", "No", "Maybe", "New PC"],
        correctAnswer: 0,
        explanation: "Restoring to a clean state removes their software."
      },
      {
        question: "Report to?",
        options: ["Scamwatch / IDCARE", "Nobody", "Local shop", "Friend"],
        correctAnswer: 0,
        explanation: "IDCARE helps with identity theft recovery."
      },
      {
        question: "They call back to 'apologize'.",
        options: ["Forgive", "Scam. They are trying again.", "Listen", "Talk"],
        correctAnswer: 1,
        explanation: "They will try to re-scam you."
      },
      {
        question: "Did they steal your files?",
        options: ["Assume yes", "No", "Maybe", "Unlikely"],
        correctAnswer: 0,
        explanation: "If they were connected, assume data theft occurred."
      },
      {
        question: "Is your identity safe?",
        options: ["Yes", "No, monitor credit report for new loans", "Maybe", "Always"],
        correctAnswer: 1,
        explanation: "Identity theft is a long-term risk after these scams."
      }
    ]
  }
];