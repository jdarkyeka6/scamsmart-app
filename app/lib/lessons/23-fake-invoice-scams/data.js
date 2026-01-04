export default {
  "id": 23,
  "title": "Fake Invoice Scams",
  "emoji": "📄",
  "description": "The 'Norton', 'McAfee', and 'Geek Squad' spam you see every day.",
  "introduction": "Learn to recognize and protect yourself from Fake Invoice Scams.",
  "warning_signs": [],
  "what_to_do": [],
  "how_it_works": "",
  "questions": [
    {
      "type": 1,
      "prompt": "You get an email: 'Thank you for your purchase of Norton 360. $399 has been charged'. You didn't buy it.",
      "options": [
        "Panic and call",
        "It's a scam. Check your bank account independently; no money has moved.",
        "Reply",
        "Unsubscribe"
      ],
      "correct": 1,
      "explanation": "This is the most common fake invoice. They want you to panic and call the number to 'cancel'."
    },
    {
      "type": 1,
      "prompt": "Why is there a phone number in the email?",
      "options": [
        "Customer service",
        "It connects directly to a scam call center",
        "For refunds",
        "Legal requirement"
      ],
      "correct": 1,
      "explanation": "Real tech companies rarely put a big hotline number on an invoice. Scammers WANT you to call."
    },
    {
      "type": 1,
      "prompt": "The email comes from a Gmail address (e.g., 'billing-dept-norton@gmail.com').",
      "options": [
        "Official",
        "Scam. Multi-billion dollar companies don't use Gmail.",
        "Outsourced",
        "Normal"
      ],
      "correct": 1,
      "explanation": "Always check the sender address. It is the easiest way to spot a fake."
    },
    {
      "type": 1,
      "prompt": "They claim the subscription will 'Auto-Renew' in 24 hours.",
      "options": [
        "Hurry",
        "False Urgency. They want you to act before checking your bank.",
        "Good service",
        "Helpful"
      ],
      "correct": 1,
      "explanation": "Scammers use tight deadlines to make you stop thinking critically."
    },
    {
      "type": 1,
      "prompt": "The invoice is attached as a PDF named 'INVOICE_X99.pdf'.",
      "options": [
        "Open it",
        "Be careful. PDFs can contain malware or links to fake sites.",
        "Print it",
        "File it"
      ],
      "correct": 1,
      "explanation": "If you didn't buy anything, don't open the attachment."
    },
    {
      "type": 1,
      "prompt": "What happens if you call the number?",
      "options": [
        "You get a refund",
        "They start a 'Tech Support' or 'Refund' scam script",
        "Music plays",
        "Nothing"
      ],
      "correct": 1,
      "explanation": "Calling the number starts the process of them trying to steal your money."
    },
    {
      "type": 1,
      "prompt": "The price is absurdly high for an antivirus ($500+).",
      "options": [
        "Inflation",
        "Shock tactic. High numbers make people panic more.",
        "Premium",
        "Tax"
      ],
      "correct": 1,
      "explanation": "They use high amounts to ensure you care enough to call."
    },
    {
      "type": 1,
      "prompt": "You verify by checking your Credit Card statement.",
      "options": [
        "Smart move",
        "Bad idea",
        "Slow",
        "Hard"
      ],
      "correct": 0,
      "explanation": "If there is no charge on your card, the email is a lie. Delete it."
    },
    {
      "type": 1,
      "prompt": "They address you as 'Customer' or use your email address as your name.",
      "options": [
        "Personal",
        "Scam. They don't know your real name.",
        "System",
        "Okay"
      ],
      "correct": 1,
      "explanation": "Real invoices usually have your billing name."
    },
    {
      "type": 1,
      "prompt": "Does clicking 'Unsubscribe' help?",
      "options": [
        "Yes",
        "No, it confirms your email is active (leading to more spam)",
        "Maybe",
        "Always"
      ],
      "correct": 1,
      "explanation": "Don't engage with spam. Just mark as junk."
    },
    {
      "type": 2,
      "prompt": "You get a REAL email from PayPal, but the invoice note says 'Call this number to dispute'.",
      "options": [
        "Call number",
        "Scam. Scammers use PayPal's free invoice tool to send messages.",
        "Pay it",
        "Trust PayPal"
      ],
      "correct": 1,
      "explanation": "Scammers can send real invoices via PayPal. The *invoice* is technically real, but the *debt* is fake."
    },
    {
      "type": 2,
      "prompt": "The note in the invoice says 'You have been charged $500 for Bitcoin'.",
      "options": [
        "Panic",
        "Ignore. It's just text written by the scammer.",
        "Pay",
        "Cry"
      ],
      "correct": 1,
      "explanation": "Anyone can type anything in the 'Note' section of a PayPal invoice."
    },
    {
      "type": 2,
      "prompt": "Should you pay a pending invoice you didn't recognize in PayPal?",
      "options": [
        "Yes",
        "No. Cancel/Delete it.",
        "Maybe",
        "If small"
      ],
      "correct": 1,
      "explanation": "You are not obligated to pay an invoice just because it appears in your dashboard."
    },
    {
      "type": 2,
      "prompt": "Why do they use the real PayPal system?",
      "options": [
        "It bypasses spam filters because the email comes from 'service@paypal.com'",
        "Accident",
        "It's free",
        "Mistake"
      ],
      "correct": 0,
      "explanation": "It lends legitimacy to the scam because the email is genuinely from PayPal."
    },
    {
      "type": 2,
      "prompt": "You call the number in the invoice note.",
      "options": [
        "PayPal answers",
        "Scammers answer pretending to be PayPal",
        "Bank answers",
        "Police"
      ],
      "correct": 1,
      "explanation": "The number in the note belongs to the scammer, not PayPal support."
    },
    {
      "type": 2,
      "prompt": "How do you check if a PayPal charge is real?",
      "options": [
        "Call number in email",
        "Log in to PayPal.com and check 'Activity'",
        "Ask friend",
        "Guess"
      ],
      "correct": 1,
      "explanation": "Only the 'Activity' tab shows real completed transactions."
    },
    {
      "type": 2,
      "prompt": "The invoice is for 'Walmart Gift Cards'.",
      "options": [
        "Pay",
        "Scam. Common money laundering item.",
        "Buy",
        "Shop"
      ],
      "correct": 1,
      "explanation": "Gift cards are a favorite item for fake invoices."
    },
    {
      "type": 2,
      "prompt": "Can you report this to PayPal?",
      "options": [
        "Yes, forward to phishing@paypal.com",
        "No",
        "Waste of time",
        "They know"
      ],
      "correct": 0,
      "explanation": "Reporting helps them ban the scammer's account."
    },
    {
      "type": 2,
      "prompt": "They say 'This transaction is irreversible'.",
      "options": [
        "Scary",
        "Lie to stop you disputing",
        "True",
        "Legal"
      ],
      "correct": 1,
      "explanation": "PayPal has a dispute resolution process. Nothing is instant/irreversible."
    },
    {
      "type": 2,
      "prompt": "The sender name is 'Billing Department' but the email is random.",
      "options": [
        "Official",
        "Scam",
        "Department",
        "Work"
      ],
      "correct": 1,
      "explanation": "They set their display name to look official."
    },
    {
      "type": 3,
      "prompt": "You own a website. You get a letter: 'Domain Listing Renewal: $250'.",
      "options": [
        "Pay it",
        "Read fine print. It's likely a directory solicitation, not a renewal.",
        "Must pay",
        "Cheap"
      ],
      "correct": 1,
      "explanation": "This is a classic scam. They look like renewal bills but are actually optional ads in a useless directory."
    },
    {
      "type": 3,
      "prompt": "The letter looks like a government bill.",
      "options": [
        "Pay",
        "Scam. They mimic official design to trick accountants.",
        "Tax",
        "Fine"
      ],
      "correct": 1,
      "explanation": "They rely on busy accounts payable staff just paying it automatically."
    },
    {
      "type": 3,
      "prompt": "They claim someone else is trying to buy your domain name in China.",
      "options": [
        "Panic buy",
        "Domain Slamming Scam. They want you to buy useless domains at inflated prices.",
        "Let them",
        "Sell"
      ],
      "correct": 1,
      "explanation": "This is 'Domain Slamming'. There is no other buyer."
    },
    {
      "type": 3,
      "prompt": "The invoice comes from 'Domain Registry of Australia' (fake) vs 'GoDaddy' (your host).",
      "options": [
        "Switch",
        "Scam. Stick with your actual registrar.",
        "Better deal",
        "Official"
      ],
      "correct": 1,
      "explanation": "Always check who your actual registrar is before paying."
    },
    {
      "type": 3,
      "prompt": "They say your SEO ranking will drop if you don't pay.",
      "options": [
        "Pay",
        "Scam. You can't buy Google rankings via an invoice.",
        "Search",
        "Google"
      ],
      "correct": 1,
      "explanation": "SEO is a service, not a utility bill."
    },
    {
      "type": 3,
      "prompt": "The price is 5x your normal renewal fee.",
      "options": [
        "Inflation",
        "Scam mark-up",
        "Premium",
        "Better"
      ],
      "correct": 1,
      "explanation": "Directory scams charge hundreds for a $20 service."
    },
    {
      "type": 3,
      "prompt": "What is 'DNS'?",
      "options": [
        "Domain Name System",
        "Do Not Scam",
        "Digital Network Service",
        "Domain Not Safe"
      ],
      "correct": 0,
      "explanation": "Knowing the terminology helps you spot nonsensical technical threats."
    },
    {
      "type": 3,
      "prompt": "The 'invoice' arrives via fax.",
      "options": [
        "Old school",
        "Common for B2B scams",
        "Legit",
        "Secure"
      ],
      "correct": 1,
      "explanation": "Scammers still use fax to target older businesses."
    },
    {
      "type": 3,
      "prompt": "You are asked to transfer the domain to them.",
      "options": [
        "Do it",
        "Never transfer control to a stranger",
        "Okay",
        "Easy"
      ],
      "correct": 1,
      "explanation": "You could lose ownership of your website."
    },
    {
      "type": 3,
      "prompt": "How to check when your domain ACTUALLY expires?",
      "options": [
        "Guess",
        "WhoIs Lookup or check your registrar account",
        "Ask scammer",
        "Wait"
      ],
      "correct": 1,
      "explanation": "Verify the date independently."
    },
    {
      "type": 4,
      "prompt": "Email: 'Origin Energy: Your bill is overdue. Pay now to avoid disconnection'.",
      "options": [
        "Pay",
        "Check your real account. Scammers spoof utility bills.",
        "Panic",
        "Buy candles"
      ],
      "correct": 1,
      "explanation": "Fear of darkness (disconnection) drives people to pay fake bills."
    },
    {
      "type": 4,
      "prompt": "The discount offered for paying immediately is 40%.",
      "options": [
        "Great deal",
        "Scam. Utilities rarely offer massive discounts for speed.",
        "Take it",
        "Lucky"
      ],
      "correct": 1,
      "explanation": "If it sounds too good to be true, it is."
    },
    {
      "type": 4,
      "prompt": "They ask for payment via gift cards to keep the lights on.",
      "options": [
        "Pay",
        "Scam. Energy companies don't take iTunes cards.",
        "Okay",
        "Standard"
      ],
      "correct": 1,
      "explanation": "Universal rule: Utility = No Gift Cards."
    },
    {
      "type": 4,
      "prompt": "You don't even use that provider (e.g., AGL bill but you use Red Energy).",
      "options": [
        "Mistake",
        "Mass-market scam sent to everyone",
        "Switch",
        "Old bill"
      ],
      "correct": 1,
      "explanation": "Scammers spray emails to millions, hoping to hit the right provider by chance."
    },
    {
      "type": 4,
      "prompt": "The link in the email goes to a login page that asks for your email password.",
      "options": [
        "Enter it",
        "Phishing. They want your email access.",
        "Reset",
        "Safe"
      ],
      "correct": 1,
      "explanation": "Utility sites don't need your *email account* password."
    },
    {
      "type": 4,
      "prompt": "The usage graph on the bill is a static image/generic.",
      "options": [
        "Normal",
        "Real bills usually have YOUR specific usage data",
        "Lazy",
        "Average"
      ],
      "correct": 1,
      "explanation": "Scammers can't replicate your personal usage history."
    },
    {
      "type": 4,
      "prompt": "The customer number on the bill is '123456789'.",
      "options": [
        "My number",
        "Fake placeholder data",
        "Lucky",
        "Win"
      ],
      "correct": 1,
      "explanation": "Check the account number against a previous real bill."
    },
    {
      "type": 4,
      "prompt": "The email attachment is a .zip or .exe file.",
      "options": [
        "Open",
        "Malware. Bills are PDFs.",
        "Run",
        "Install"
      ],
      "correct": 1,
      "explanation": "Malware spreads via fake electricity bills."
    },
    {
      "type": 4,
      "prompt": "They call you to demand payment.",
      "options": [
        "Pay",
        "Hang up. Call company on official number.",
        "Argue",
        "Cry"
      ],
      "correct": 1,
      "explanation": "Phone disconnection threats are almost always scams."
    },
    {
      "type": 4,
      "prompt": "Is 'Solar Rebate' cold calling real?",
      "options": [
        "Sometimes",
        "Often a lead-gen scam or high-pressure sales",
        "Always",
        "Free"
      ],
      "correct": 1,
      "explanation": "Be very wary of unsolicited solar offers."
    },
    {
      "type": 5,
      "prompt": "Email: 'Apple Invoice. You bought Clash of Clans Gems: $150'.",
      "options": [
        "I didn't!",
        "Phishing. They want you to click 'Cancel Purchase' to steal your login.",
        "My kid did it",
        "Pay"
      ],
      "correct": 1,
      "explanation": "They bet on you panicking about an unauthorized game charge."
    },
    {
      "type": 5,
      "prompt": "The email is from 'apple-support-team-usa@hotmail.com'.",
      "options": [
        "Legit",
        "Scam",
        "Support",
        "Global"
      ],
      "correct": 1,
      "explanation": "Apple emails come from apple.com."
    },
    {
      "type": 5,
      "prompt": "The link asks for your Credit Card to 'refund' the transaction.",
      "options": [
        "Give it",
        "Scam. Refunds go back to the card used automatically.",
        "Type it",
        "Verify"
      ],
      "correct": 1,
      "explanation": "You don't need to provide card details to receive a refund."
    },
    {
      "type": 5,
      "prompt": "The receipt contains no GST or tax info.",
      "options": [
        "Tax free",
        "Fake receipt",
        "Overseas",
        "Okay"
      ],
      "correct": 1,
      "explanation": "Real receipts are legal tax documents."
    },
    {
      "type": 5,
      "prompt": "You check your 'Purchase History' in settings and see nothing.",
      "options": [
        "It's a delay",
        "It's a scam. The email is fake.",
        "Glitch",
        "Wait"
      ],
      "correct": 1,
      "explanation": "Trust the settings menu on your device, not the email."
    },
    {
      "type": 5,
      "prompt": "The email has a PDF attachment.",
      "options": [
        "Open",
        "Apple/Google don't send PDFs for small apps.",
        "Read",
        "Print"
      ],
      "correct": 1,
      "explanation": "They put the phishing link inside the PDF to bypass email filters."
    },
    {
      "type": 5,
      "prompt": "The item is a 'Tinder Gold' or 'Netflix' subscription.",
      "options": [
        "Embarrassing",
        "Common bait items",
        "My partner did it",
        "Pay"
      ],
      "correct": 1,
      "explanation": "Scammers use recognizable services."
    },
    {
      "type": 5,
      "prompt": "What is 'Smishing'?",
      "options": [
        "Fishing",
        "SMS Phishing (Text scams)",
        "Smiling",
        "Smashing"
      ],
      "correct": 1,
      "explanation": "Subscription scams often come via text."
    },
    {
      "type": 5,
      "prompt": "How to check subscriptions on iPhone?",
      "options": [
        "Ask Siri",
        "Settings > Apple ID > Subscriptions",
        "Email Tim Cook",
        "Guess"
      ],
      "correct": 1,
      "explanation": "Know the path to check your real subscriptions."
    },
    {
      "type": 5,
      "prompt": "You clicked the link and entered your password. Now what?",
      "options": [
        "Change password immediately",
        "Enable 2FA",
        "Contact Apple/Google",
        "All of the above"
      ],
      "correct": 3,
      "explanation": "Act fast to secure the account."
    }
  ]
};