export default [
  {
    id: "26-01",
    title: "Quishing (QR Phishing) Basics",
    description: "The barcode that bites.",
    questions: [
      {
        question: "What is 'Quishing'?",
        options: ["Fishing for quail", "QR Code Phishing", "Quick wishing", "Quality"],
        correctAnswer: 1,
        explanation: "Using QR codes to direct victims to phishing websites."
      },
      {
        question: "You scan a code and it asks for your bank login.",
        options: ["Enter it", "Close immediately. QR codes should not lead to banking logins.", "Log in", "Safe"],
        correctAnswer: 1,
        explanation: "This is a trap to steal your credentials."
      },
      {
        question: "Why do scammers use QR codes in emails?",
        options: ["It looks cool", "It bypasses email security filters that scan for text links", "Faster", "Modern"],
        correctAnswer: 1,
        explanation: "Security software can't always 'read' the image, letting the scam slip through."
      },
      {
        question: "Can a QR code download malware?",
        options: ["No", "Yes, it can trigger a download immediately", "Maybe", "Only on Android"],
        correctAnswer: 1,
        explanation: "Malicious codes can initiate drive-by downloads."
      },
      {
        question: "You receive a parking fine letter with a QR code payment link.",
        options: ["Scan and pay", "Check council website independently. Scammers mail fake fines.", "Ignore", "Panic"],
        correctAnswer: 1,
        explanation: "Fake fines direct you to fake payment portals."
      },
      {
        question: "How can you check where a QR code leads?",
        options: ["Scan it blindly", "Use your camera app's preview feature to read the URL first", "Guess", "Trust"],
        correctAnswer: 1,
        explanation: "Most phones show the URL (e.g., evil-site.com) before you click to open it."
      },
      {
        question: "The URL looks shortened (e.g., bit.ly).",
        options: ["Safe", "Risky. You can't see the final destination.", "Normal", "Fast"],
        correctAnswer: 1,
        explanation: "Shorteners hide the true scam destination."
      },
      {
        question: "A random sticker on a wall says 'Scan to Win'.",
        options: ["Scan", "Don't scan. Curiosity trap.", "Win", "Prize"],
        correctAnswer: 1,
        explanation: "Random stickers are often malicious."
      },
      {
        question: "Is it safer to type the URL?",
        options: ["Yes", "No", "Same", "Slower"],
        correctAnswer: 0,
        explanation: "Typing the official address removes the risk of a malicious redirect."
      },
      {
        question: "Does your phone antivirus check QR codes?",
        options: ["Some do", "No", "All", "Never"],
        correctAnswer: 0,
        explanation: "Good mobile security apps scan links from QRs."
      }
    ]
  },
  {
    id: "26-02",
    title: "Parking Meter & Sticker Scams",
    description: "Don't pay the scammer to park your car.",
    questions: [
      {
        question: "You see a QR code sticker pasted OVER the parking meter screen.",
        options: ["Scan it", "Don't scan. It's likely a scam sticker placed by a criminal.", "Pay", "Park"],
        correctAnswer: 1,
        explanation: "Scammers stick their own codes over legitimate meters to divert payments."
      },
      {
        question: "The website asks for your credit card details but looks low quality.",
        options: ["Pay", "Cancel. Fake site.", "Enter", "Park"],
        correctAnswer: 1,
        explanation: "Poor design is a hallmark of a rushed scam site."
      },
      {
        question: "You pay via the code, but the meter doesn't update.",
        options: ["Pay again", "Check bank statement. You likely paid a scammer.", "Kick meter", "Wait"],
        correctAnswer: 1,
        explanation: "The meter isn't connected to the scammer's website."
      },
      {
        question: "How to pay safely for parking?",
        options: ["Use the official app (e.g., EasyPark/CellOPark) or card slot", "Scan random sticker", "Cash to stranger", "Guess"],
        correctAnswer: 0,
        explanation: "Official apps bypass the physical meter risks."
      },
      {
        question: "The sticker says 'Scan to Pay' but has no Council logo.",
        options: ["Scan", "Suspicious", "Okay", "Fast"],
        correctAnswer: 1,
        explanation: "Official signage usually carries Council branding."
      },
      {
        question: "You see multiple stickers layered on top of each other.",
        options: ["Pick one", "Do not use. Clear sign of tampering.", "Top one", "Bottom one"],
        correctAnswer: 1,
        explanation: "Tampering is visible if you look closely."
      },
      {
        question: "The URL is 'pay-parking-secure-city.com' instead of the council site.",
        options: ["Legit", "Scam. Look for .gov.au or official app domains.", "Safe", "Okay"],
        correctAnswer: 1,
        explanation: "Check the domain."
      },
      {
        question: "What happens if you use the scam code?",
        options: ["Free parking", "You lose money AND get a parking fine", "Discount", "Nothing"],
        correctAnswer: 1,
        explanation: "You didn't pay the council, so you get fined too."
      },
      {
        question: "Should you report the sticker?",
        options: ["Yes, to Council/Police", "No", "Keep it", "Ignore"],
        correctAnswer: 0,
        explanation: "Reporting helps remove it before others are scammed."
      },
      {
        question: "Can you peel it off?",
        options: ["Yes, if safe to check underneath", "No", "Illegal", "Hard"],
        correctAnswer: 0,
        explanation: "Checking under the sticker often reveals the real instructions."
      }
    ]
  },
  {
    id: "26-03",
    title: "Restaurant Menu Risks",
    description: "Ordering dinner or ordering malware?",
    questions: [
      {
        question: "You scan the menu code and it asks you to download a .apk file.",
        options: ["Download", "Stop. Menus should be PDF or Webpages, not apps.", "Install", "Eat"],
        correctAnswer: 1,
        explanation: "Malware disguised as menu apps is a growing threat."
      },
      {
        question: "The QR code is on a loose flyer on the table, not the laminated menu.",
        options: ["Scan", "Be wary. Anyone could have placed the flyer there.", "Order", "Trust"],
        correctAnswer: 1,
        explanation: "Loose flyers are easy for scammers to distribute."
      },
      {
        question: "The payment page asks for your Crypto wallet.",
        options: ["Pay", "Scam. Restaurants don't ask for wallet keys.", "Cool", "Modern"],
        correctAnswer: 1,
        explanation: "Absurd payment requests are red flags."
      },
      {
        question: "The menu site asks for your Facebook login to 'view items'.",
        options: ["Login", "Phishing. You don't need to login to see a menu.", "Okay", "Hungry"],
        correctAnswer: 1,
        explanation: "Credential harvesting via fake menus."
      },
      {
        question: "You order and pay, but the kitchen has no record of it.",
        options: ["Wait", "You paid a fake site. Alert staff.", "Leave", "Eat"],
        correctAnswer: 1,
        explanation: "The fake site took your money; the restaurant got nothing."
      },
      {
        question: "How to verify the code?",
        options: ["Ask staff 'Is this your code?'", "Scan blindly", "Guess", "Trust"],
        correctAnswer: 0,
        explanation: "Staff can confirm if the system is legitimate."
      },
      {
        question: "The URL is 'menu-ordering-system-update.com'.",
        options: ["Legit", "Suspicious generic domain", "Update", "New"],
        correctAnswer: 1,
        explanation: "Look for the restaurant's name or a known partner (e.g., Mr Yum, Me&U)."
      },
      {
        question: "Is it safer to ask for a paper menu?",
        options: ["Yes", "No", "Old fashioned", "Rude"],
        correctAnswer: 0,
        explanation: "Paper menus can't contain digital malware."
      },
      {
        question: "The code looks physically tampered with (sticker on top).",
        options: ["Use it", "Don't use. Notify staff.", "Peel it", "Ignore"],
        correctAnswer: 1,
        explanation: "Physical tampering is the main vector for this scam."
      },
      {
        question: "Can you get a refund?",
        options: ["From the restaurant", "Call your bank", "No", "Cash"],
        correctAnswer: 1,
        explanation: "The restaurant didn't get the money, so you must dispute with the bank."
      }
    ]
  },
  {
    id: "26-04",
    title: "Malicious Apps via QR",
    description: "Sideloading danger.",
    questions: [
      {
        question: "A QR code promises a 'Free Game' if you scan.",
        options: ["Scan", "Malware trap", "Play", "Win"],
        correctAnswer: 1,
        explanation: "Free stuff is the bait."
      },
      {
        question: "The scan prompts you to 'Allow installation from unknown sources'.",
        options: ["Allow", "Deny. High security risk.", "Okay", "Yes"],
        correctAnswer: 1,
        explanation: "This disables your phone's security protections."
      },
      {
        question: "The app installs and disappears from the screen.",
        options: ["Glitch", "It is running in the background (Spyware)", "Deleted", "Magic"],
        correctAnswer: 1,
        explanation: "Spyware hides icon to stay undetected."
      },
      {
        question: "What is 'Sideloading'?",
        options: ["Walking sideways", "Installing apps outside the Official App Store", "Loading", "Heavy"],
        correctAnswer: 1,
        explanation: "Sideloading bypasses the safety checks of Apple/Google stores."
      },
      {
        question: "The app asks for 'Admin' or 'Accessibility' rights.",
        options: ["Grant", "Deny. Gives total control to the app.", "Okay", "Trust"],
        correctAnswer: 1,
        explanation: "Accessibility rights allow the app to read your screen and tap buttons."
      },
      {
        question: "Are iPhones immune?",
        options: ["Yes", "No, but it is harder to sideload than Android", "Always", "Maybe"],
        correctAnswer: 1,
        explanation: "iPhones usually block sideloading, but can still fall for phishing sites."
      },
      {
        question: "The QR code was sent via WhatsApp from an unknown number.",
        options: ["Scan", "Ignore/Block", "Reply", "Friend"],
        correctAnswer: 1,
        explanation: "Unsolicited codes are risky."
      },
      {
        question: "You see a 'Scanner App' that requires a subscription to work.",
        options: ["Pay", "Scam. Camera apps are free.", "Buy", "Need"],
        correctAnswer: 1,
        explanation: "Your built-in camera scans codes for free. You don't need a paid app."
      },
      {
        question: "How to remove malicious apps?",
        options: ["Delete icon", "Safe Mode > Uninstall or Factory Reset", "Hide", "Move"],
        correctAnswer: 1,
        explanation: "Hidden apps require deeper system cleaning."
      },
      {
        question: "What is 'FluBot'?",
        options: ["A virus", "Parcel scam malware spread via links/QR", "Robot", "Sick"],
        correctAnswer: 1,
        explanation: "A notorious malware strain spread via fake delivery links."
      }
    ]
  },
  {
    id: "26-05",
    title: "Safe Scanning Habits",
    description: "Scan smart, not fast.",
    questions: [
      {
        question: "Should you use a dedicated QR Scanner app or your Camera?",
        options: ["Camera", "Dedicated app", "Neither", "Both"],
        correctAnswer: 0,
        explanation: "Modern camera apps have built-in security previews. Some 'Scanner Apps' are actually malware."
      },
      {
        question: "What should you look at before clicking the link pop-up?",
        options: ["The color", "The URL (Domain Name)", "The time", "Nothing"],
        correctAnswer: 1,
        explanation: "Verify the domain matches the expected service."
      },
      {
        question: "Is it safe to scan codes in emails?",
        options: ["Yes", "No, verify the source first", "Always", "Never"],
        correctAnswer: 1,
        explanation: "Treat email QRs with the same suspicion as email links."
      },
      {
        question: "You scan a code and your phone starts getting hot/slow.",
        options: ["Normal", "Malware sign (Crypto mining etc)", "Battery", "Old"],
        correctAnswer: 1,
        explanation: "Unexpected resource usage suggests malicious background activity."
      },
      {
        question: "Can a QR code make a phone call?",
        options: ["No", "Yes, it can trigger dialling a premium number", "Maybe", "Only text"],
        correctAnswer: 1,
        explanation: "QR codes can trigger calls, texts, emails, and contacts."
      },
      {
        question: "What is a 'Dynamic QR Code'?",
        options: ["Moving code", "A code where the destination URL can be changed by the creator later", "Static", "Video"],
        correctAnswer: 1,
        explanation: "Scammers can change the destination from 'Safe' to 'Malicious' after printing."
      },
      {
        question: "Should you pay bills via QR on the paper bill?",
        options: ["Yes, if bill is verified", "No, type the BPay/Web address manually to be safe", "Always", "Maybe"],
        correctAnswer: 1,
        explanation: "Manually typing ensures you are on the real site."
      },
      {
        question: "Public Wi-Fi QR codes.",
        options: ["Scan to connect", "Verify with staff. Fake Wi-Fi spots steal data.", "Safe", "Free"],
        correctAnswer: 1,
        explanation: "Connecting to a 'Honeypot' Wi-Fi allows hackers to spy on you."
      },
      {
        question: "Can you verify a QR code without scanning?",
        options: ["No", "Yes, look for the URL printed below it", "Maybe", "Smell it"],
        correctAnswer: 1,
        explanation: "Legitimate codes often print the URL text underneath for accessibility."
      },
      {
        question: "Best defense?",
        options: ["Don't scan unless necessary", "Scan everything", "No phone", "Tin foil"],
        correctAnswer: 0,
        explanation: "Treat scanning like clicking a link. Be cautious."
      }
    ]
  }
];