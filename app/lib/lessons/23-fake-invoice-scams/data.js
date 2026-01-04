export default [
  {
    id: "23-01",
    title: "The 'Auto-Renewal' Email",
    description: "The 'Norton', 'McAfee', and 'Geek Squad' spam you see every day.",
    questions: [
      {
        question: "You get an email: 'Thank you for your purchase of Norton 360. $399 has been charged'. You didn't buy it.",
        options: ["Panic and call", "It's a scam. Check your bank account independently; no money has moved.", "Reply", "Unsubscribe"],
        correctAnswer: 1,
        explanation: "This is the most common fake invoice. They want you to panic and call the number to 'cancel'."
      },
      {
        question: "Why is there a phone number in the email?",
        options: ["Customer service", "It connects directly to a scam call center", "For refunds", "Legal requirement"],
        correctAnswer: 1,
        explanation: "Real tech companies rarely put a big hotline number on an invoice. Scammers WANT you to call."
      },
      {
        question: "The email comes from a Gmail address (e.g., 'billing-dept-norton@gmail.com').",
        options: ["Official", "Scam. Multi-billion dollar companies don't use Gmail.", "Outsourced", "Normal"],
        correctAnswer: 1,
        explanation: "Always check the sender address. It is the easiest way to spot a fake."
      },
      {
        question: "They claim the subscription will 'Auto-Renew' in 24 hours.",
        options: ["Hurry", "False Urgency. They want you to act before checking your bank.", "Good service", "Helpful"],
        correctAnswer: 1,
        explanation: "Scammers use tight deadlines to make you stop thinking critically."
      },
      {
        question: "The invoice is attached as a PDF named 'INVOICE_X99.pdf'.",
        options: ["Open it", "Be careful. PDFs can contain malware or links to fake sites.", "Print it", "File it"],
        correctAnswer: 1,
        explanation: "If you didn't buy anything, don't open the attachment."
      },
      {
        question: "What happens if you call the number?",
        options: ["You get a refund", "They start a 'Tech Support' or 'Refund' scam script", "Music plays", "Nothing"],
        correctAnswer: 1,
        explanation: "Calling the number starts the process of them trying to steal your money."
      },
      {
        question: "The price is absurdly high for an antivirus ($500+).",
        options: ["Inflation", "Shock tactic. High numbers make people panic more.", "Premium", "Tax"],
        correctAnswer: 1,
        explanation: "They use high amounts to ensure you care enough to call."
      },
      {
        question: "You verify by checking your Credit Card statement.",
        options: ["Smart move", "Bad idea", "Slow", "Hard"],
        correctAnswer: 0,
        explanation: "If there is no charge on your card, the email is a lie. Delete it."
      },
      {
        question: "They address you as 'Customer' or use your email address as your name.",
        options: ["Personal", "Scam. They don't know your real name.", "System", "Okay"],
        correctAnswer: 1,
        explanation: "Real invoices usually have your billing name."
      },
      {
        question: "Does clicking 'Unsubscribe' help?",
        options: ["Yes", "No, it confirms your email is active (leading to more spam)", "Maybe", "Always"],
        correctAnswer: 1,
        explanation: "Don't engage with spam. Just mark as junk."
      }
    ]
  },
  {
    id: "23-02",
    title: "PayPal Invoice Abuse",
    description: "Real PayPal invoices used for fake reasons.",
    questions: [
      {
        question: "You get a REAL email from PayPal, but the invoice note says 'Call this number to dispute'.",
        options: ["Call number", "Scam. Scammers use PayPal's free invoice tool to send messages.", "Pay it", "Trust PayPal"],
        correctAnswer: 1,
        explanation: "Scammers can send real invoices via PayPal. The *invoice* is technically real, but the *debt* is fake."
      },
      {
        question: "The note in the invoice says 'You have been charged $500 for Bitcoin'.",
        options: ["Panic", "Ignore. It's just text written by the scammer.", "Pay", "Cry"],
        correctAnswer: 1,
        explanation: "Anyone can type anything in the 'Note' section of a PayPal invoice."
      },
      {
        question: "Should you pay a pending invoice you didn't recognize in PayPal?",
        options: ["Yes", "No. Cancel/Delete it.", "Maybe", "If small"],
        correctAnswer: 1,
        explanation: "You are not obligated to pay an invoice just because it appears in your dashboard."
      },
      {
        question: "Why do they use the real PayPal system?",
        options: ["It bypasses spam filters because the email comes from 'service@paypal.com'", "Accident", "It's free", "Mistake"],
        correctAnswer: 0,
        explanation: "It lends legitimacy to the scam because the email is genuinely from PayPal."
      },
      {
        question: "You call the number in the invoice note.",
        options: ["PayPal answers", "Scammers answer pretending to be PayPal", "Bank answers", "Police"],
        correctAnswer: 1,
        explanation: "The number in the note belongs to the scammer, not PayPal support."
      },
      {
        question: "How do you check if a PayPal charge is real?",
        options: ["Call number in email", "Log in to PayPal.com and check 'Activity'", "Ask friend", "Guess"],
        correctAnswer: 1,
        explanation: "Only the 'Activity' tab shows real completed transactions."
      },
      {
        question: "The invoice is for 'Walmart Gift Cards'.",
        options: ["Pay", "Scam. Common money laundering item.", "Buy", "Shop"],
        correctAnswer: 1,
        explanation: "Gift cards are a favorite item for fake invoices."
      },
      {
        question: "Can you report this to PayPal?",
        options: ["Yes, forward to phishing@paypal.com", "No", "Waste of time", "They know"],
        correctAnswer: 0,
        explanation: "Reporting helps them ban the scammer's account."
      },
      {
        question: "They say 'This transaction is irreversible'.",
        options: ["Scary", "Lie to stop you disputing", "True", "Legal"],
        correctAnswer: 1,
        explanation: "PayPal has a dispute resolution process. Nothing is instant/irreversible."
      },
      {
        question: "The sender name is 'Billing Department' but the email is random.",
        options: ["Official", "Scam", "Department", "Work"],
        correctAnswer: 1,
        explanation: "They set their display name to look official."
      }
    ]
  },
  {
    id: "23-03",
    title: "Domain Name Scams",
    description: "The 'SEO' and 'Renewal' trick for website owners.",
    questions: [
      {
        question: "You own a website. You get a letter: 'Domain Listing Renewal: $250'.",
        options: ["Pay it", "Read fine print. It's likely a directory solicitation, not a renewal.", "Must pay", "Cheap"],
        correctAnswer: 1,
        explanation: "This is a classic scam. They look like renewal bills but are actually optional ads in a useless directory."
      },
      {
        question: "The letter looks like a government bill.",
        options: ["Pay", "Scam. They mimic official design to trick accountants.", "Tax", "Fine"],
        correctAnswer: 1,
        explanation: "They rely on busy accounts payable staff just paying it automatically."
      },
      {
        question: "They claim someone else is trying to buy your domain name in China.",
        options: ["Panic buy", "Domain Slamming Scam. They want you to buy useless domains at inflated prices.", "Let them", "Sell"],
        correctAnswer: 1,
        explanation: "This is 'Domain Slamming'. There is no other buyer."
      },
      {
        question: "The invoice comes from 'Domain Registry of Australia' (fake) vs 'GoDaddy' (your host).",
        options: ["Switch", "Scam. Stick with your actual registrar.", "Better deal", "Official"],
        correctAnswer: 1,
        explanation: "Always check who your actual registrar is before paying."
      },
      {
        question: "They say your SEO ranking will drop if you don't pay.",
        options: ["Pay", "Scam. You can't buy Google rankings via an invoice.", "Search", "Google"],
        correctAnswer: 1,
        explanation: "SEO is a service, not a utility bill."
      },
      {
        question: "The price is 5x your normal renewal fee.",
        options: ["Inflation", "Scam mark-up", "Premium", "Better"],
        correctAnswer: 1,
        explanation: "Directory scams charge hundreds for a $20 service."
      },
      {
        question: "What is 'DNS'?",
        options: ["Domain Name System", "Do Not Scam", "Digital Network Service", "Domain Not Safe"],
        correctAnswer: 0,
        explanation: "Knowing the terminology helps you spot nonsensical technical threats."
      },
      {
        question: "The 'invoice' arrives via fax.",
        options: ["Old school", "Common for B2B scams", "Legit", "Secure"],
        correctAnswer: 1,
        explanation: "Scammers still use fax to target older businesses."
      },
      {
        question: "You are asked to transfer the domain to them.",
        options: ["Do it", "Never transfer control to a stranger", "Okay", "Easy"],
        correctAnswer: 1,
        explanation: "You could lose ownership of your website."
      },
      {
        question: "How to check when your domain ACTUALLY expires?",
        options: ["Guess", "WhoIs Lookup or check your registrar account", "Ask scammer", "Wait"],
        correctAnswer: 1,
        explanation: "Verify the date independently."
      }
    ]
  },
  {
    id: "23-04",
    title: "Utility Bill Scams",
    description: "Electricity, Gas, and Phone bills that aren't real.",
    questions: [
      {
        question: "Email: 'Origin Energy: Your bill is overdue. Pay now to avoid disconnection'.",
        options: ["Pay", "Check your real account. Scammers spoof utility bills.", "Panic", "Buy candles"],
        correctAnswer: 1,
        explanation: "Fear of darkness (disconnection) drives people to pay fake bills."
      },
      {
        question: "The discount offered for paying immediately is 40%.",
        options: ["Great deal", "Scam. Utilities rarely offer massive discounts for speed.", "Take it", "Lucky"],
        correctAnswer: 1,
        explanation: "If it sounds too good to be true, it is."
      },
      {
        question: "They ask for payment via gift cards to keep the lights on.",
        options: ["Pay", "Scam. Energy companies don't take iTunes cards.", "Okay", "Standard"],
        correctAnswer: 1,
        explanation: "Universal rule: Utility = No Gift Cards."
      },
      {
        question: "You don't even use that provider (e.g., AGL bill but you use Red Energy).",
        options: ["Mistake", "Mass-market scam sent to everyone", "Switch", "Old bill"],
        correctAnswer: 1,
        explanation: "Scammers spray emails to millions, hoping to hit the right provider by chance."
      },
      {
        question: "The link in the email goes to a login page that asks for your email password.",
        options: ["Enter it", "Phishing. They want your email access.", "Reset", "Safe"],
        correctAnswer: 1,
        explanation: "Utility sites don't need your *email account* password."
      },
      {
        question: "The usage graph on the bill is a static image/generic.",
        options: ["Normal", "Real bills usually have YOUR specific usage data", "Lazy", "Average"],
        correctAnswer: 1,
        explanation: "Scammers can't replicate your personal usage history."
      },
      {
        question: "The customer number on the bill is '123456789'.",
        options: ["My number", "Fake placeholder data", "Lucky", "Win"],
        correctAnswer: 1,
        explanation: "Check the account number against a previous real bill."
      },
      {
        question: "The email attachment is a .zip or .exe file.",
        options: ["Open", "Malware. Bills are PDFs.", "Run", "Install"],
        correctAnswer: 1,
        explanation: "Malware spreads via fake electricity bills."
      },
      {
        question: "They call you to demand payment.",
        options: ["Pay", "Hang up. Call company on official number.", "Argue", "Cry"],
        correctAnswer: 1,
        explanation: "Phone disconnection threats are almost always scams."
      },
      {
        question: "Is 'Solar Rebate' cold calling real?",
        options: ["Sometimes", "Often a lead-gen scam or high-pressure sales", "Always", "Free"],
        correctAnswer: 1,
        explanation: "Be very wary of unsolicited solar offers."
      }
    ]
  },
  {
    id: "23-05",
    title: "App Store Subscription Scams",
    description: "Your Apple ID or Google Play 'Receipt'.",
    questions: [
      {
        question: "Email: 'Apple Invoice. You bought Clash of Clans Gems: $150'.",
        options: ["I didn't!", "Phishing. They want you to click 'Cancel Purchase' to steal your login.", "My kid did it", "Pay"],
        correctAnswer: 1,
        explanation: "They bet on you panicking about an unauthorized game charge."
      },
      {
        question: "The email is from 'apple-support-team-usa@hotmail.com'.",
        options: ["Legit", "Scam", "Support", "Global"],
        correctAnswer: 1,
        explanation: "Apple emails come from apple.com."
      },
      {
        question: "The link asks for your Credit Card to 'refund' the transaction.",
        options: ["Give it", "Scam. Refunds go back to the card used automatically.", "Type it", "Verify"],
        correctAnswer: 1,
        explanation: "You don't need to provide card details to receive a refund."
      },
      {
        question: "The receipt contains no GST or tax info.",
        options: ["Tax free", "Fake receipt", "Overseas", "Okay"],
        correctAnswer: 1,
        explanation: "Real receipts are legal tax documents."
      },
      {
        question: "You check your 'Purchase History' in settings and see nothing.",
        options: ["It's a delay", "It's a scam. The email is fake.", "Glitch", "Wait"],
        correctAnswer: 1,
        explanation: "Trust the settings menu on your device, not the email."
      },
      {
        question: "The email has a PDF attachment.",
        options: ["Open", "Apple/Google don't send PDFs for small apps.", "Read", "Print"],
        correctAnswer: 1,
        explanation: "They put the phishing link inside the PDF to bypass email filters."
      },
      {
        question: "The item is a 'Tinder Gold' or 'Netflix' subscription.",
        options: ["Embarrassing", "Common bait items", "My partner did it", "Pay"],
        correctAnswer: 1,
        explanation: "Scammers use recognizable services."
      },
      {
        question: "What is 'Smishing'?",
        options: ["Fishing", "SMS Phishing (Text scams)", "Smiling", "Smashing"],
        correctAnswer: 1,
        explanation: "Subscription scams often come via text."
      },
      {
        question: "How to check subscriptions on iPhone?",
        options: ["Ask Siri", "Settings > Apple ID > Subscriptions", "Email Tim Cook", "Guess"],
        correctAnswer: 1,
        explanation: "Know the path to check your real subscriptions."
      },
      {
        question: "You clicked the link and entered your password. Now what?",
        options: ["Change password immediately", "Enable 2FA", "Contact Apple/Google", "All of the above"],
        correctAnswer: 3,
        explanation: "Act fast to secure the account."
      }
    ]
  }
];