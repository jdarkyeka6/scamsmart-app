export default {
  "id": 24,
  "title": "Tech Support Scams",
  "emoji": "🖥️",
  "description": "They claim your internet is being cut off.",
  "introduction": "Learn to recognize and protect yourself from Tech Support Scams.",
  "warning_signs": [],
  "what_to_do": [],
  "how_it_works": "",
  "questions": [
    {
      "type": 1,
      "prompt": "You get a call: 'This is NBN. Your internet will be disconnected in 24 hours due to suspicious activity'.",
      "options": [
        "Panic",
        "Hang up. NBN Co never calls residents directly.",
        "Fix it",
        "Ask why"
      ],
      "correct": 1,
      "explanation": "NBN is a wholesaler. They do not have a relationship with you, only your provider (Telstra/Optus) does."
    },
    {
      "type": 1,
      "prompt": "They say: 'Press 1 to talk to a technician'.",
      "options": [
        "Press 1",
        "Hang up. This connects you to a scam call center.",
        "Press 2",
        "Wait"
      ],
      "correct": 1,
      "explanation": "This is a robo-dialer looking for victims."
    },
    {
      "type": 1,
      "prompt": "They claim hackers are using your IP address.",
      "options": [
        "Scary",
        "Technobabble designed to scare you.",
        "Possible",
        "True"
      ],
      "correct": 1,
      "explanation": "Scammers use scary tech terms to confuse non-technical people."
    },
    {
      "type": 1,
      "prompt": "They ask for remote access to 'secure your router'.",
      "options": [
        "Allow it",
        "Refuse. They will steal your data.",
        "Helpful",
        "Okay"
      ],
      "correct": 1,
      "explanation": "They want to install malware or steal banking logins."
    },
    {
      "type": 1,
      "prompt": "What should you do if you are worried about your internet?",
      "options": [
        "Ask the caller",
        "Call your Service Provider (ISP) on their official number.",
        "Unplug router",
        "Wait"
      ],
      "correct": 1,
      "explanation": "Call Telstra, Optus, or TPG directly."
    },
    {
      "type": 1,
      "prompt": "The caller is aggressive and rude.",
      "options": [
        "Normal",
        "Scam indicator. Real support is professional.",
        "Busy",
        "Stressed"
      ],
      "correct": 1,
      "explanation": "Fear and aggression are tools to ensure compliance."
    },
    {
      "type": 1,
      "prompt": "They want you to buy a 'Firewall Device' via gift cards.",
      "options": [
        "Buy it",
        "Scam",
        "Secure",
        "Hardware"
      ],
      "correct": 1,
      "explanation": "There is no device. They just want the money."
    },
    {
      "type": 1,
      "prompt": "They run a 'speed test' and say the results prove you are hacked.",
      "options": [
        "Believe them",
        "Scam. Speed tests do not show 'hacks'.",
        "Slow",
        "Fast"
      ],
      "correct": 1,
      "explanation": "They misinterpret normal tools to lie to you."
    },
    {
      "type": 1,
      "prompt": "Can NBN disconnect you via a phone call?",
      "options": [
        "Yes",
        "No, disconnection is a long process involving letters/emails from your ISP.",
        "Maybe",
        "Instantly"
      ],
      "correct": 1,
      "explanation": "It doesn't happen instantly over a robocall."
    },
    {
      "type": 1,
      "prompt": "The number looks like a mobile number.",
      "options": [
        "Technician",
        "Scam (Spoofed)",
        "NBN mobile",
        "Real"
      ],
      "correct": 1,
      "explanation": "NBN doesn't call from mobile numbers."
    },
    {
      "type": 2,
      "prompt": "Robocall: 'This is Amazon. An iPhone 14 has been ordered on your account for $999'.",
      "options": [
        "Panic",
        "Hang up. It's a scam to get you to call back.",
        "Cancel order",
        "Keep phone"
      ],
      "correct": 1,
      "explanation": "You didn't order it. They want you to panic and call to 'cancel' it."
    },
    {
      "type": 2,
      "prompt": "When you call back, they ask for your credit card to 'refund' the charge.",
      "options": [
        "Give it",
        "Scam. They are stealing the card details.",
        "Refund me",
        "Okay"
      ],
      "correct": 1,
      "explanation": "They pretend to process a refund but actually process a theft."
    },
    {
      "type": 2,
      "prompt": "They say 'Amazon Prime will renew for $99'.",
      "options": [
        "I don't have Prime",
        "Scam targeting everyone.",
        "Cancel",
        "Pay"
      ],
      "correct": 1,
      "explanation": "They blast this to everyone, knowing many people have Prime."
    },
    {
      "type": 2,
      "prompt": "They ask you to download 'AnyDesk' to fill out the refund form.",
      "options": [
        "Download",
        "Remote Access Scam",
        "Helpful",
        "Easy"
      ],
      "correct": 1,
      "explanation": "They want control of your PC to manipulate your banking."
    },
    {
      "type": 2,
      "prompt": "You verify by opening the Amazon app.",
      "options": [
        "Smart",
        "Dumb",
        "Slow",
        "Hard"
      ],
      "correct": 0,
      "explanation": "If it's not in 'My Orders', it doesn't exist."
    },
    {
      "type": 2,
      "prompt": "They want you to verify your identity with your Drivers License.",
      "options": [
        "Send it",
        "ID Theft risk",
        "Okay",
        "Verify"
      ],
      "correct": 1,
      "explanation": "They harvest ID data."
    },
    {
      "type": 2,
      "prompt": "The caller says 'Do not hang up or you will be charged'.",
      "options": [
        "Stay on line",
        "Hang up immediately",
        "Listen",
        "Fear"
      ],
      "correct": 1,
      "explanation": "Keeping you on the line stops you checking reality."
    },
    {
      "type": 2,
      "prompt": "The call comes from an overseas number.",
      "options": [
        "Amazon Global",
        "Scam",
        "Support",
        "Shipping"
      ],
      "correct": 1,
      "explanation": "Amazon AU support calls usually come from local or hidden numbers."
    },
    {
      "type": 2,
      "prompt": "They mention 'Fraud Department'.",
      "options": [
        "Serious",
        "Scam script",
        "Police",
        "FBI"
      ],
      "correct": 1,
      "explanation": "Sounding official is part of the act."
    },
    {
      "type": 2,
      "prompt": "What is 'Caller ID Spoofing'?",
      "options": [
        "A prank",
        "Faking the phone number shown on your screen",
        "Hacking",
        "Blocking"
      ],
      "correct": 1,
      "explanation": "Just because it says 'Amazon' on the screen doesn't mean it is."
    },
    {
      "type": 3,
      "prompt": "You Google 'Facebook Support Number' and call the first result.",
      "options": [
        "Safe",
        "High risk. Scammers buy ads to fake support numbers.",
        "Official",
        "Helpful"
      ],
      "correct": 1,
      "explanation": "Facebook/Google/Instagram DO NOT have public phone numbers. You are calling a scammer."
    },
    {
      "type": 3,
      "prompt": "The 'agent' asks for your password to fix your account.",
      "options": [
        "Give it",
        "Real support NEVER asks for passwords.",
        "Half",
        "Okay"
      ],
      "correct": 1,
      "explanation": "Support staff have their own tools; they don't need your login."
    },
    {
      "type": 3,
      "prompt": "They charge a $50 'Service Fee' to fix a free account.",
      "options": [
        "Pay",
        "Scam",
        "Standard",
        "Cheap"
      ],
      "correct": 1,
      "explanation": "You cannot pay to fix a Gmail or Facebook account."
    },
    {
      "type": 3,
      "prompt": "They claim your account is involved in 'Illegal Pornography' or 'Terrorism'.",
      "options": [
        "Scary",
        "Scam tactic to terrify you into compliance",
        "Confess",
        "Hide"
      ],
      "correct": 1,
      "explanation": "Extreme accusations make victims desperate."
    },
    {
      "type": 3,
      "prompt": "You find the number on a 'Forum' or 'Wiki'.",
      "options": [
        "Trust community",
        "Scammers spam forums with fake numbers",
        "Verify",
        "Call"
      ],
      "correct": 1,
      "explanation": "Verify support channels via the official app only."
    },
    {
      "type": 3,
      "prompt": "They ask for payment via 'Google Play Cards'.",
      "options": [
        "Pay",
        "Scam",
        "Convenient",
        "Mobile"
      ],
      "correct": 1,
      "explanation": "Support fees are never paid in gift cards."
    },
    {
      "type": 3,
      "prompt": "The site looks like HP/Canon printer support.",
      "options": [
        "Official",
        "Common scam. 'Printer setup' sites are often fake.",
        "Driver",
        "Install"
      ],
      "correct": 1,
      "explanation": "Fake printer setup sites charge you for free drivers."
    },
    {
      "type": 3,
      "prompt": "They want to remote into your PC to 'install drivers'.",
      "options": [
        "Allow",
        "Refuse",
        "Helpful",
        "Tech"
      ],
      "correct": 1,
      "explanation": "Drivers can be downloaded safely yourself. Don't let them in."
    },
    {
      "type": 3,
      "prompt": "How do you really contact Facebook/Meta?",
      "options": [
        "Phone",
        "Support Inbox inside the app",
        "Letter",
        "Visit office"
      ],
      "correct": 1,
      "explanation": "In-app reporting is the only valid channel."
    },
    {
      "type": 3,
      "prompt": "What is 'SEO Poisoning'?",
      "options": [
        "Food poisoning",
        "Hackers making fake sites appear at the top of Google Search",
        "Marketing",
        "Ads"
      ],
      "correct": 1,
      "explanation": "Scammers use SEO to trap people looking for help."
    },
    {
      "type": 4,
      "prompt": "The scammer says 'I added an extra 0 and sent $5000 instead of $500!'.",
      "options": [
        "Keep it",
        "It's the 'HTML Edit' trick. No money moved.",
        "Return it",
        "Honest mistake"
      ],
      "correct": 1,
      "explanation": "They edited your screen to look like $5000. It is a lie."
    },
    {
      "type": 4,
      "prompt": "They cry or beg: 'I will lose my job if you don't return the money!'.",
      "options": [
        "Feel sorry",
        "Manipulation. It's an act.",
        "Return money",
        "Comfort them"
      ],
      "correct": 1,
      "explanation": "They play the victim to exploit your kindness."
    },
    {
      "type": 4,
      "prompt": "They want you to return the money via Bitcoin ATM.",
      "options": [
        "Do it",
        "Scam. Untraceable.",
        "Fast",
        "Modern"
      ],
      "correct": 1,
      "explanation": "They send you to physical locations to deposit cash into their wallets."
    },
    {
      "type": 4,
      "prompt": "They blackout your screen while 'working'.",
      "options": [
        "Privacy",
        "They are transferring money between YOUR accounts to trick you.",
        "Glitch",
        "Tech"
      ],
      "correct": 1,
      "explanation": "They hide the screen so you don't see them moving your savings to your checking account."
    },
    {
      "type": 4,
      "prompt": "They ask you to buy Gift Cards to 'correct the balance'.",
      "options": [
        "Buy",
        "Scam",
        "Help",
        "Refund"
      ],
      "correct": 1,
      "explanation": "Legitimate accounting is never fixed with gift cards."
    },
    {
      "type": 4,
      "prompt": "They get angry when you hesitate.",
      "options": [
        "Sorry",
        "Red flag",
        "Normal",
        "Boss"
      ],
      "correct": 1,
      "explanation": "Scammers flip from nice to nasty instantly."
    },
    {
      "type": 4,
      "prompt": "They say 'The bank is closed, we must use alternative methods'.",
      "options": [
        "Okay",
        "Lie",
        "True",
        "Wait"
      ],
      "correct": 1,
      "explanation": "They want to avoid banking scrutiny."
    },
    {
      "type": 4,
      "prompt": "They ask for your mobile number to 'authorize' the refund.",
      "options": [
        "Give it",
        "They are intercepting your 2FA codes.",
        "Safe",
        "Text"
      ],
      "correct": 1,
      "explanation": "They need the code to approve the transfer OUT of your account."
    },
    {
      "type": 4,
      "prompt": "The 'Refund Form' is just a Google Form or Notepad file.",
      "options": [
        "Professional",
        "Amateur scam",
        "Simple",
        "Easy"
      ],
      "correct": 1,
      "explanation": "Real companies use secure portals, not Notepad."
    },
    {
      "type": 4,
      "prompt": "What is the 'Keylogger' risk?",
      "options": [
        "Typing tool",
        "They record what you type (passwords) while connected",
        "Music",
        "Lock"
      ],
      "correct": 1,
      "explanation": "They can steal passwords for other sites this way."
    },
    {
      "type": 5,
      "prompt": "Caller: 'This is Telstra. Your internet is running slow / sending errors'.",
      "options": [
        "It is slow!",
        "Scam. Telstra doesn't monitor individual error logs like this.",
        "Fix it",
        "Thanks"
      ],
      "correct": 1,
      "explanation": "They guess your internet is slow (everyone's is sometimes)."
    },
    {
      "type": 5,
      "prompt": "They need you to run a command to 'clear the foreign IP addresses'.",
      "options": [
        "Run it",
        "Don't run commands for strangers.",
        "Okay",
        "Tech"
      ],
      "correct": 1,
      "explanation": "The command actually gives them access or shows fake errors."
    },
    {
      "type": 5,
      "prompt": "They threaten to cut off your line for weeks if not fixed NOW.",
      "options": [
        "Panic",
        "Scam threat",
        "Fix",
        "Please don't"
      ],
      "correct": 1,
      "explanation": "Disconnection is the stick they use to beat you."
    },
    {
      "type": 5,
      "prompt": "They ask for your 'User ID' and 'Date of Birth' to verify the account.",
      "options": [
        "Give it",
        "Verify caller first.",
        "Standard",
        "Okay"
      ],
      "correct": 1,
      "explanation": "They fish for personal info."
    },
    {
      "type": 5,
      "prompt": "They say 'We have a refund for your bad service'.",
      "options": [
        "Yay",
        "The Refund Scam hook",
        "Claim",
        "Thanks"
      ],
      "correct": 1,
      "explanation": "They pivot to the refund scam script."
    },
    {
      "type": 5,
      "prompt": "The caller ID is '000000' or 'Private'.",
      "options": [
        "Telstra",
        "Scam",
        "Secret",
        "Official"
      ],
      "correct": 1,
      "explanation": "Telstra numbers are usually visible or standard business numbers."
    },
    {
      "type": 5,
      "prompt": "You hear a lot of other voices in the background.",
      "options": [
        "Call center",
        "Scam boiler room",
        "Busy",
        "Party"
      ],
      "correct": 1,
      "explanation": "Boiler rooms are noisy."
    },
    {
      "type": 5,
      "prompt": "They use the term 'Router Upgrade'.",
      "options": [
        "Need it",
        "Fake reason to get credit card details",
        "Speed",
        "5G"
      ],
      "correct": 1,
      "explanation": "They charge shipping for a router that never comes."
    },
    {
      "type": 5,
      "prompt": "How to check if Telstra is really calling?",
      "options": [
        "Ask name",
        "Hang up. Call 13 22 00 (Official Number).",
        "Trust",
        "Wait"
      ],
      "correct": 1,
      "explanation": "Call the official line."
    },
    {
      "type": 5,
      "prompt": "Is 'Line Keeping' real?",
      "options": [
        "No",
        "Yes, on landlines scammers can stay on the line after you hang up (fake dial tone)",
        "Maybe",
        "Myth"
      ],
      "correct": 1,
      "explanation": "On old landlines, if the caller didn't hang up, the line stayed open. Use a mobile to verify."
    }
  ]
};