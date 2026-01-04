export default {
  id: 4,
  title: "Email & SMS Scams",
  emoji: "📱",
  description: "Recognize and avoid text message and email scams",
  
  introduction: "Email and SMS scams are among the most common scam methods. Scammers send fake messages pretending to be from banks, delivery services, government agencies, or other trusted organizations. Learning to identify these helps protect your personal information and money.",
  
  warning_signs: [
    "Unknown or suspicious sender numbers/emails",
    "Messages asking you to click links immediately",
    "Requests for personal information via text/email",
    "Unexpected messages about packages, accounts, or payments",
    "Shortened URLs that hide the real destination",
    "Messages creating urgency or fear",
    "Poor spelling or grammar (but not always)"
  ],
  
  what_to_do: [
    "Never click links in unexpected messages",
    "Verify by contacting the organization directly through official channels",
    "Check sender details carefully",
    "Don't reply to suspicious texts - it confirms your number is active",
    "Report scam texts to your phone provider",
    "Delete suspicious messages",
    "Use message filtering and spam blocking features"
  ],
  
  how_it_works: "Scammers send mass emails and texts hoping to catch people off guard. They impersonate trusted organizations to steal login credentials, personal information, or money. Text messages feel more personal and urgent, making people more likely to act quickly without thinking. Links often lead to fake websites designed to steal your information.",
  
  questions: [
    {
      type: 1,
      prompt: "You receive an SMS from an unknown number saying 'Your package is waiting at the post office. Click here to arrange pickup.' What should you do first?",
      options: [
        "Click the link to see what package it is",
        "Don't click - check your tracking numbers or Australia Post account independently",
        "Reply asking which package",
        "Forward it to friends to see if they sent something"
      ],
      correct: 1,
      explanation: "Never click links in unexpected texts. Check your Australia Post account or tracking numbers through the official app or website to verify if you really have a package."
    },
    {
      type: 1,
      prompt: "An email from 'service@bankupdates.net' says your account needs verification. What's the first red flag?",
      options: [
        "The word 'updates' in the email",
        "The sender domain 'bankupdates.net' isn't your bank's official domain",
        "Banks never ask for verification",
        "The email came to your inbox"
      ],
      correct: 1,
      explanation: "Your bank's official emails come from their actual domain (like commbank.com.au, not bankupdates.net). Always check the sender's email domain carefully."
    },
    {
      type: 1,
      prompt: "You get a text: 'Hi Mum, I've lost my phone. This is my new number. Can you text me?' You don't recognize the number. What is this?",
      options: [
        "Your child really lost their phone",
        "A 'Hi Mum' scam trying to impersonate your child",
        "A wrong number",
        "A phone company notification"
      ],
      correct: 1,
      explanation: "This is the classic 'Hi Mum/Dad' scam. Scammers pretend to be your child with a new number, then later ask for money. Always call your child on their known number to verify."
    },
    {
      type: 1,
      prompt: "An SMS says 'Your Toll account has an unpaid fee of $3.65. Pay now to avoid a $75 penalty.' What makes this urgent messaging suspicious?",
      options: [
        "The small amount makes it believable",
        "Threatening a large penalty for a small fee is designed to create panic",
        "Toll roads don't send texts",
        "The amount is too specific"
      ],
      correct: 1,
      explanation: "Scammers use disproportionate penalties to create fear and urgency. Real toll notices give you reasonable time to pay and don't threaten massive fines immediately."
    },
    {
      type: 1,
      prompt: "Why should you never reply to suspicious text messages, even to say 'STOP'?",
      options: [
        "It's rude to reply",
        "Replying confirms your number is active and may lead to more scam messages",
        "STOP only works for legitimate services",
        "Your reply could cost money"
      ],
      correct: 1,
      explanation: "Any reply (even 'STOP') tells scammers your number is active and monitored. This can lead to more scam attempts. Just delete and block suspicious messages."
    },
    {
      type: 2,
      prompt: "A text message link shows as 'auspost.com.au' but when you long-press it, the actual URL is 'auspost-delivery.xyz'. What does this mean?",
      options: [
        "Australia Post has multiple domains",
        "The display text is fake - the real link goes to a scam site",
        "The message is safe",
        ".xyz domains are always legitimate"
      ],
      correct: 1,
      explanation: "Scammers can make link text display anything, but the actual destination (auspost-delivery.xyz) reveals it's fake. Always check the actual URL."
    },
    {
      type: 2,
      prompt: "Which of these text messages has the most red flags?",
      options: [
        "'Your parcel will arrive tomorrow between 9am-5pm'",
        "'FINAL NOTICE!!! Click NOW or account CLOSED!!! bit.ly/abc'",
        "'Your appointment reminder for Monday at 3pm'",
        "'Thanks for your payment of $45.50'"
      ],
      correct: 1,
      explanation: "Multiple red flags: excessive urgency, ALL CAPS, multiple exclamation marks, threats, and a shortened URL hiding the real destination."
    },
    {
      type: 2,
      prompt: "An email has your bank's logo, colors, and layout perfectly, but comes from 'no-reply@email-alerts.com'. Is it legitimate?",
      options: [
        "Yes, banks use third-party email services",
        "No, real bank emails come from the bank's own domain",
        "Maybe, you should click to find out",
        "Yes, if the logo looks right"
      ],
      correct: 1,
      explanation: "Logos and design can be easily copied. The domain 'email-alerts.com' isn't your bank. Real banks send emails from their official domains only."
    },
    {
      type: 2,
      prompt: "A text says 'Your Netflix subscription has expired. Renew: [shortened link]'. You DO have Netflix. What's suspicious?",
      options: [
        "Netflix doesn't use text messages",
        "Netflix would email you and you can check in the app",
        "The shortened link hides the real destination",
        "All of the above"
      ],
      correct: 3,
      explanation: "Multiple issues: Netflix primarily uses email, you can verify in the app, and the shortened link is suspicious. Never click links about subscriptions - check the app directly."
    },
    {
      type: 2,
      prompt: "An email says 'Unusual activity detected on your PayPal account from IP address 192.168.1.1 in Russia.' What makes this technically suspicious?",
      options: [
        "Russia is far away",
        "The IP address 192.168.1.1 is a local/private IP, not a public Russian IP",
        "PayPal doesn't track IP addresses",
        "The email mentions Russia"
      ],
      correct: 1,
      explanation: "192.168.1.1 is a private/local IP address, not a public internet IP from Russia. This technical error reveals the scammer doesn't understand networking."
    },
    {
      type: 3,
      prompt: "You clicked a link in a scam text and it downloaded a file to your phone. What should you do?",
      options: [
        "Open the file to see what it is",
        "Don't open it - delete it immediately and run a security scan",
        "Send it to your friends to warn them",
        "Rename the file so you remember not to open it"
      ],
      correct: 1,
      explanation: "Delete the file without opening it. Opening it could install malware. Run a security scan on your phone and consider resetting your phone if concerned."
    },
    {
      type: 3,
      prompt: "You receive multiple scam texts per day. What's the most effective action?",
      options: [
        "Reply STOP to each one",
        "Report them to your phone carrier and use built-in spam filtering",
        "Change your phone number",
        "Turn off text messages completely"
      ],
      correct: 1,
      explanation: "Report scam texts to your carrier (forward to 7726/SPAM) and enable spam filtering in your phone settings. Don't reply to scammers - it confirms your number."
    },
    {
      type: 3,
      prompt: "An email appears to be from your employer's HR department asking you to update your bank details for payroll. What should you do?",
      options: [
        "Update your details in the email",
        "Contact HR directly through known channels (phone/in-person) to verify",
        "Reply asking if it's legitimate",
        "Forward it to IT"
      ],
      correct: 1,
      explanation: "Verify through a separate communication method you know is real - call HR using the number you have, or visit them in person. Never use contact details from suspicious emails."
    },
    {
      type: 3,
      prompt: "You get an email with a PDF attachment claiming to be an invoice from a company you've never heard of. What's safest?",
      options: [
        "Open it to see if you owe money",
        "Delete it without opening - you don't do business with them",
        "Reply asking for clarification",
        "Save it for later review"
      ],
      correct: 1,
      explanation: "If you don't recognize the sender and didn't expect an invoice, delete it. Opening attachments from unknown senders can install malware."
    },
    {
      type: 3,
      prompt: "A text claims to be from your phone provider saying you have an outstanding bill. How do you verify?",
      options: [
        "Click the link in the text",
        "Log into your phone provider's app or website independently",
        "Call the number in the text",
        "Reply asking for details"
      ],
      correct: 1,
      explanation: "Check your account through the app or website you normally use. Don't click links or call numbers from suspicious texts."
    },
    {
      type: 4,
      prompt: "Why do scammers often send texts that seem to come from your own phone number?",
      options: [
        "They hacked your phone",
        "They use 'caller ID spoofing' to make the message appear from any number",
        "It's a phone company error",
        "Your phone is sending the messages"
      ],
      correct: 1,
      explanation: "Scammers can spoof (fake) the sender number to make it appear as any number, even your own. This is called caller ID spoofing and doesn't mean they control your phone."
    },
    {
      type: 4,
      prompt: "How do scammers get your phone number to send scam texts?",
      options: [
        "They guess numbers randomly",
        "Data breaches, public records, and automated number generation",
        "Phone companies sell your number",
        "They only text people who signed up"
      ],
      correct: 1,
      explanation: "Scammers obtain numbers from data breaches, buy them from data brokers, scrape public sources, or use automated systems to generate valid phone numbers."
    },
    {
      type: 4,
      prompt: "What happens if you click a scam link in a text message?",
      options: [
        "Your phone explodes",
        "You might be taken to a fake website to steal your information, or download malware",
        "Nothing happens",
        "The scammer immediately steals your money"
      ],
      correct: 1,
      explanation: "Scam links typically lead to fake websites designed to steal login credentials, or automatically download malware to your device. Sometimes just visiting the site can compromise your device."
    },
    {
      type: 4,
      prompt: "Why do some scam emails look perfect while others have obvious mistakes?",
      options: [
        "Different scammers have different English skills",
        "Some deliberately include errors to filter out cautious people, while others aim for perfection",
        "Perfect emails are from professional scammers",
        "Mistakes are always accidental"
      ],
      correct: 1,
      explanation: "Some scammers deliberately include errors to filter victims (they only want people who don't notice red flags), while sophisticated scammers create perfect emails to fool more people."
    },
    {
      type: 4,
      prompt: "How do scammers make emails appear to come from legitimate companies?",
      options: [
        "They hack the company's email servers",
        "They use email spoofing to fake the sender address and copy company branding",
        "Companies accidentally send scam emails",
        "They pay the companies to send emails"
      ],
      correct: 1,
      explanation: "Email systems allow sender addresses to be easily faked (spoofed). Scammers fake the 'From' address and copy company logos/branding to make emails look real."
    },
    {
      type: 5,
      prompt: "Text from unknown number: 'Dad, I dropped my phone in the toilet! This is my new number. Can you send $300 to this account for a new one? I have exams tomorrow!' What's happening?",
      options: [
        "Your child really needs a new phone urgently",
        "'Hi Mum/Dad' scam - they're impersonating your child to steal money",
        "Your child is embarrassed and borrowing a friend's phone",
        "A friend is pranking you"
      ],
      correct: 1,
      explanation: "Classic impersonation scam. The urgency (exams tomorrow), emotional story (dropped phone), and immediate payment request are all red flags. Call your child on their real number to verify."
    },
    {
      type: 5,
      prompt: "Email from 'support@service.apple-security.com' says your Apple ID was used to purchase $499 of apps. Link says 'Cancel Order'. The email has perfect grammar and Apple's logo. How many red flags?",
      options: [
        "Zero - it looks legitimate",
        "One - you didn't make the purchase",
        "Multiple - fake domain (not apple.com), unexpected purchase, urgency to click",
        "Just the fake domain"
      ],
      correct: 2,
      explanation: "Red flags: (1) Domain is apple-security.com not apple.com, (2) unexpected purchase creating panic, (3) urgency to click link. Perfect formatting doesn't mean legitimate. Always check your Apple account directly."
    },
    {
      type: 5,
      prompt: "Text: 'Your parcel has arrived at our depot. You owe $2.50 customs fee. Pay here: tinyurl.com/xyz to receive delivery.' You ARE expecting a package from overseas. What's safest?",
      options: [
        "Pay the small fee since you're expecting a package",
        "Don't click - verify independently using your tracking number on the real courier website",
        "Reply asking which parcel",
        "Click the link but don't pay yet"
      ],
      correct: 1,
      explanation: "Even when expecting packages, verify independently. Use your tracking number on the official courier website. Scammers know many people are expecting deliveries and exploit this."
    },
    {
      type: 5,
      prompt: "Sophisticated scenario: Email from your actual bank's domain says suspicious activity detected. It includes recent transaction details that are accurate. Link goes to your bank's real domain. Could this still be a scam?",
      options: [
        "No - it has everything correct",
        "Yes - scammers might have breached your data and are using real info. Always access your bank independently",
        "No - if the domain matches, it's real",
        "Maybe - but clicking is the only way to know"
      ],
      correct: 1,
      explanation: "Advanced scams use data from breaches to seem legitimate. Domains can be spoofed, or the link could redirect. ALWAYS access your bank by typing the URL yourself or using your banking app, never through email links."
    },
    {
      type: 5,
      prompt: "You receive 3 texts in one day from different numbers, all about different parcels, tolls, and subscriptions. All have different links. What's the pattern?",
      options: [
        "Coincidence - lots of things need attention",
        "Your number is on a scammer's list and being targeted with multiple scam types",
        "You really do have three issues to resolve",
        "Your phone is malfunctioning"
      ],
      correct: 1,
      explanation: "Multiple scam texts from different numbers in a short time means your number is being actively targeted by scammers. They try different scam types hoping one will work. Block, report, and never click."
    }
  ]
};