export default {
  "id": 19,
  "title": "Remote Access Scams",
  "emoji": "💻",
  "description": "Microsoft, Telstra, or NBN calling to 'fix' your computer.",
  "introduction": "Learn to recognize and protect yourself from Remote Access Scams.",
  "warning_signs": [],
  "what_to_do": [],
  "how_it_works": "",
  "questions": [
    {
      "type": 1,
      "prompt": "You get a call: 'This is Microsoft. Your computer has a virus'.",
      "options": [
        "Panic",
        "Hang up. Microsoft does not make unsolicited calls to fix computers.",
        "Follow instructions",
        "Thank them"
      ],
      "correct": 1,
      "explanation": "This is a classic scam. Tech giants like Microsoft/Apple never cold-call you to fix bugs."
    },
    {
      "type": 1,
      "prompt": "The caller says they are from 'NBN' and your internet will be disconnected due to hackers.",
      "options": [
        "Fix it",
        "Scam. NBN Co does not sell directly to or call consumers.",
        "Call technician",
        "Wait"
      ],
      "correct": 1,
      "explanation": "NBN Co is a wholesaler. They never call the public. Only your provider (Telstra/Optus) would call."
    },
    {
      "type": 1,
      "prompt": "They ask you to press 'Windows + R' and type 'eventvwr'.",
      "options": [
        "Do it",
        "Don't do it. This is a trick to show you harmless 'errors'.",
        "Ask why",
        "Type it"
      ],
      "correct": 1,
      "explanation": "The 'Event Viewer' always shows minor warnings. Scammers claim these are 'viruses' to scare you."
    },
    {
      "type": 1,
      "prompt": "The caller has a heavy accent and background noise (call center).",
      "options": [
        "Normal",
        "Common indicator of an overseas scam center",
        "Busy office",
        "Tech support"
      ],
      "correct": 1,
      "explanation": "Legitimate tech support is usually quieter and professional."
    },
    {
      "type": 1,
      "prompt": "They know your name and address.",
      "options": [
        "They must be real",
        "Public phone directory data. Doesn't prove they are Microsoft.",
        "Magic",
        "Government"
      ],
      "correct": 1,
      "explanation": "Basic personal info is easy to find or buy online."
    },
    {
      "type": 1,
      "prompt": "They promise to speed up your PC for a fee.",
      "options": [
        "Pay",
        "Scam",
        "Good deal",
        "Fast"
      ],
      "correct": 1,
      "explanation": "They will install malware or do nothing at all."
    },
    {
      "type": 1,
      "prompt": "The number on caller ID looks local.",
      "options": [
        "Trust it",
        "Spoofed number. Don't trust caller ID.",
        "Answer",
        "Safe"
      ],
      "correct": 1,
      "explanation": "They use software to display a local area code to get you to answer."
    },
    {
      "type": 1,
      "prompt": "They ask for your credit card to bill you for the 'fix'.",
      "options": [
        "Give it",
        "Hang up",
        "Send cheque",
        "Cash"
      ],
      "correct": 1,
      "explanation": "Never give financial details to a cold caller."
    },
    {
      "type": 1,
      "prompt": "You say you have a Mac, and they hang up.",
      "options": [
        "Rude",
        "They only had a script for Windows",
        "Busy",
        "Glitch"
      ],
      "correct": 1,
      "explanation": "Scammers read from scripts. If you deviate, they often give up."
    },
    {
      "type": 1,
      "prompt": "What is the best way to get tech support?",
      "options": [
        "Wait for a call",
        "Contact a local shop or official support via their website",
        "Ask a stranger",
        "Guess"
      ],
      "correct": 1,
      "explanation": "Initiate contact yourself."
    },
    {
      "type": 2,
      "prompt": "The caller asks you to download 'AnyDesk' or 'TeamViewer'.",
      "options": [
        "Download it",
        "Refuse. These are Remote Access Tools (RATs) that give them total control.",
        "Install",
        "Update"
      ],
      "correct": 1,
      "explanation": "Once installed and connected, they can move your mouse and see your screen."
    },
    {
      "type": 2,
      "prompt": "They say: 'I need to connect to your screen to show you the virus'.",
      "options": [
        "Let them",
        "Scam. They will plant files or steal data.",
        "Helpful",
        "Standard"
      ],
      "correct": 1,
      "explanation": "They use the access to fake a problem, not fix one."
    },
    {
      "type": 2,
      "prompt": "Your screen goes black while they are connected.",
      "options": [
        "Glitch",
        "They blacked it out to steal money without you seeing",
        "Reboot",
        "Wait"
      ],
      "correct": 1,
      "explanation": "Scammers blank your monitor so you can't see them transferring money from your bank."
    },
    {
      "type": 2,
      "prompt": "They ask you to log in to your bank account so they can 'refund' you.",
      "options": [
        "Log in",
        "NEVER log in to banking while someone is remote connected.",
        "Okay",
        "Safe"
      ],
      "correct": 1,
      "explanation": "If you log in, they steal your session and drain the account."
    },
    {
      "type": 2,
      "prompt": "You see the mouse moving on its own.",
      "options": [
        "Ghost",
        "The scammer is controlling it",
        "Broken mouse",
        "Virus"
      ],
      "correct": 1,
      "explanation": "This is the definition of Remote Access."
    },
    {
      "type": 2,
      "prompt": "How do you stop a remote access session?",
      "options": [
        "Ask them to stop",
        "Unplug the internet router / Turn off the PC immediately",
        "Wait",
        "Cry"
      ],
      "correct": 1,
      "explanation": "Sever the connection physically (pull the plug) to lock them out."
    },
    {
      "type": 2,
      "prompt": "Is TeamViewer itself a virus?",
      "options": [
        "Yes",
        "No, it's legitimate software misused by scammers",
        "Maybe",
        "Spyware"
      ],
      "correct": 1,
      "explanation": "The software is a valid tool for IT pros, but dangerous in the wrong hands."
    },
    {
      "type": 2,
      "prompt": "They install a 'Security Certificate' on your PC.",
      "options": [
        "Good",
        "Likely malware or a backdoor for future access",
        "Safe",
        "Official"
      ],
      "correct": 1,
      "explanation": "They often leave 'backdoors' to return later."
    },
    {
      "type": 2,
      "prompt": "They ask you to cover your webcam.",
      "options": [
        "Privacy",
        "To hide their identity",
        "Weird",
        "Polite"
      ],
      "correct": 2,
      "explanation": "Unusual requests are designed to confuse or control you."
    },
    {
      "type": 2,
      "prompt": "Can they access your files?",
      "options": [
        "No",
        "Yes, they can copy/steal photos and documents",
        "Only banking",
        "Maybe"
      ],
      "correct": 1,
      "explanation": "They have full access to your hard drive."
    },
    {
      "type": 3,
      "prompt": "They say they 'accidentally' refunded you $4,000 instead of $400.",
      "options": [
        "Keep it",
        "Scam. They manipulated the HTML of your banking page.",
        "Honest mistake",
        "Lucky"
      ],
      "correct": 1,
      "explanation": "They use the 'Inspect Element' tool to edit the text on your screen. No money actually moved."
    },
    {
      "type": 3,
      "prompt": "They demand you send the 'extra' money back via Gift Cards or Crypto.",
      "options": [
        "Send it",
        "Don't. You are sending your own money.",
        "Be honest",
        "Return it"
      ],
      "correct": 1,
      "explanation": "Since the refund was fake, any money you 'return' comes from your own savings."
    },
    {
      "type": 3,
      "prompt": "They transfer money from your Savings to your Checking account to make it look like a refund.",
      "options": [
        "Clever trick",
        "Bank error",
        "Real refund",
        "Gift"
      ],
      "correct": 0,
      "explanation": "You see your balance go up and panic, not realizing it was your own money moving internally."
    },
    {
      "type": 3,
      "prompt": "They become aggressive and threaten to sue you if you don't return the money.",
      "options": [
        "Pay",
        "Scam tactic. Hang up.",
        "Call lawyer",
        "Apologize"
      ],
      "correct": 1,
      "explanation": "Aggression is used to stop you checking the details."
    },
    {
      "type": 3,
      "prompt": "They ask you to leave the line open.",
      "options": [
        "Okay",
        "No. They want to monitor you.",
        "Polite",
        "Standard"
      ],
      "correct": 1,
      "explanation": "They want to hear if you call the bank or police."
    },
    {
      "type": 3,
      "prompt": "Why do they want Gift Cards?",
      "options": [
        "They like shopping",
        "Untraceable and instant to sell",
        "Gifts",
        "Fees"
      ],
      "correct": 1,
      "explanation": "Gift cards are the currency of scammers."
    },
    {
      "type": 3,
      "prompt": "The screen is blurry or zoomed in.",
      "options": [
        "Bad connection",
        "Intentional to hide their actions",
        "Old PC",
        "Virus"
      ],
      "correct": 1,
      "explanation": "They confuse you visually."
    },
    {
      "type": 3,
      "prompt": "You check your bank balance on a DIFFERENT device (phone).",
      "options": [
        "Smart move",
        "Bad idea",
        "Won't work",
        "Same result"
      ],
      "correct": 0,
      "explanation": "Checking on a separate device reveals the truth (no extra money)."
    },
    {
      "type": 3,
      "prompt": "They say 'DO NOT touch the mouse'.",
      "options": [
        "Touch it",
        "Scam control tactic",
        "Obey",
        "Wait"
      ],
      "correct": 1,
      "explanation": "They don't want you to close their fake window."
    },
    {
      "type": 3,
      "prompt": "What is 'HTML Editing'?",
      "options": [
        "Coding",
        "Changing what a website LOOKS like locally, without changing the real data",
        "Hacking",
        "Design"
      ],
      "correct": 1,
      "explanation": "It's like writing over a bank statement with a pen. It doesn't change the actual money."
    },
    {
      "type": 4,
      "prompt": "A loud siren plays and a pop-up says 'YOUR PC IS INFECTED. CALL MICROSOFT'.",
      "options": [
        "Call number",
        "Force close the browser (Alt+F4). It's a fake pop-up.",
        "Panic",
        "Pay"
      ],
      "correct": 1,
      "explanation": "Browsers cannot scan your PC for viruses. It is just a webpage designed to scare you."
    },
    {
      "type": 4,
      "prompt": "You can't close the window.",
      "options": [
        "It's a virus",
        "It's a 'loop' script. Use Task Manager to kill the browser.",
        "Broken PC",
        "Wait"
      ],
      "correct": 1,
      "explanation": "The page uses a script to reopen itself. It hasn't infected your computer."
    },
    {
      "type": 4,
      "prompt": "The pop-up has a toll-free number to call.",
      "options": [
        "Convenient",
        "Scam hotline",
        "Help desk",
        "Support"
      ],
      "correct": 1,
      "explanation": "Real error messages never include a phone number to call."
    },
    {
      "type": 4,
      "prompt": "It claims your files are encrypted.",
      "options": [
        "Ransomware",
        "Scareware (Fake)",
        "True",
        "Deleted"
      ],
      "correct": 1,
      "explanation": "Unless you see actual encrypted files, it's usually just a browser trick."
    },
    {
      "type": 4,
      "prompt": "The mouse is locked in the browser window.",
      "options": [
        "Virus",
        "Browser 'Full Screen' trick. Press Esc or F11.",
        "Broken",
        "Glitch"
      ],
      "correct": 1,
      "explanation": "They force full screen to trap you."
    },
    {
      "type": 4,
      "prompt": "The message contains bad grammar: 'Your Windows is expire'.",
      "options": [
        "Microsoft typo",
        "Scam",
        "Old version",
        "Update"
      ],
      "correct": 1,
      "explanation": "Official OS messages are grammatically correct."
    },
    {
      "type": 4,
      "prompt": "Clicking anywhere opens more warnings.",
      "options": [
        "Clicking",
        "Don't click. Close the tab/browser.",
        "Read them",
        "Follow"
      ],
      "correct": 1,
      "explanation": "Interact as little as possible."
    },
    {
      "type": 4,
      "prompt": "Is this a 'BSOD' (Blue Screen of Death)?",
      "options": [
        "Yes",
        "No, a real BSOD crashes the PC; it doesn't ask you to call a number.",
        "Maybe",
        "New version"
      ],
      "correct": 1,
      "explanation": "Real crashes restart the PC. Fake ones ask for money."
    },
    {
      "type": 4,
      "prompt": "How do you avoid these?",
      "options": [
        "Ad blocker",
        "Don't click dodgy links",
        "Update browser",
        "All of the above"
      ],
      "correct": 3,
      "explanation": "Prevention is key."
    },
    {
      "type": 4,
      "prompt": "The URL is random numbers (e.g., 192.168... or xyz.com).",
      "options": [
        "Official",
        "Scam site",
        "Server",
        "Safe"
      ],
      "correct": 1,
      "explanation": "Microsoft errors don't come from random web domains."
    },
    {
      "type": 5,
      "prompt": "You realize it's a scam while they are connected. First step?",
      "options": [
        "Disconnect internet immediately",
        "Ask them to leave",
        "Watch them",
        "Shutdown gracefully"
      ],
      "correct": 0,
      "explanation": "Pull the plug or turn off Wi-Fi instantly to cut their access."
    },
    {
      "type": 5,
      "prompt": "Should you use the computer again immediately?",
      "options": [
        "Yes",
        "No. Keep it offline until checked by a professional.",
        "Maybe",
        "Only for games"
      ],
      "correct": 1,
      "explanation": "They may have left malware. It needs to be cleaned."
    },
    {
      "type": 5,
      "prompt": "What should you do about your bank?",
      "options": [
        "Nothing",
        "Call bank immediately to freeze accounts",
        "Check later",
        "Change PIN only"
      ],
      "correct": 1,
      "explanation": "Tell the bank your device was compromised."
    },
    {
      "type": 5,
      "prompt": "What about your passwords?",
      "options": [
        "Keep them",
        "Change ALL passwords from a DIFFERENT, clean device",
        "Change only email",
        "Write them down"
      ],
      "correct": 1,
      "explanation": "Assume they stole your saved passwords. Reset them from a safe phone/PC."
    },
    {
      "type": 5,
      "prompt": "You paid via Credit Card. What do you do?",
      "options": [
        "Cancel card",
        "Dispute transaction",
        "Report fraud",
        "All of the above"
      ],
      "correct": 3,
      "explanation": "Contact your card issuer to stop the payment and reissue a card."
    },
    {
      "type": 5,
      "prompt": "Should you restore from a backup?",
      "options": [
        "Yes, to a date BEFORE the call",
        "No",
        "Maybe",
        "New PC"
      ],
      "correct": 0,
      "explanation": "Restoring to a clean state removes their software."
    },
    {
      "type": 5,
      "prompt": "Report to?",
      "options": [
        "Scamwatch / IDCARE",
        "Nobody",
        "Local shop",
        "Friend"
      ],
      "correct": 0,
      "explanation": "IDCARE helps with identity theft recovery."
    },
    {
      "type": 5,
      "prompt": "They call back to 'apologize'.",
      "options": [
        "Forgive",
        "Scam. They are trying again.",
        "Listen",
        "Talk"
      ],
      "correct": 1,
      "explanation": "They will try to re-scam you."
    },
    {
      "type": 5,
      "prompt": "Did they steal your files?",
      "options": [
        "Assume yes",
        "No",
        "Maybe",
        "Unlikely"
      ],
      "correct": 0,
      "explanation": "If they were connected, assume data theft occurred."
    },
    {
      "type": 5,
      "prompt": "Is your identity safe?",
      "options": [
        "Yes",
        "No, monitor credit report for new loans",
        "Maybe",
        "Always"
      ],
      "correct": 1,
      "explanation": "Identity theft is a long-term risk after these scams."
    }
  ]
};