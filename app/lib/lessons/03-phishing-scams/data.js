export default {
  id: 3,
  title: "Phishing Scams",
  emoji: "🎣",
  description: "Learn to spot fake emails and messages designed to steal your information",
  
  introduction: "Phishing scams use fake emails, texts, or messages that pretend to be from trusted organizations. They trick you into clicking malicious links or sharing personal information. Learning to spot phishing attempts protects you from identity theft and financial loss.",
  
  warning_signs: [
    "Sender email address doesn't match the official domain",
    "Generic greetings like 'Dear Customer' instead of your name",
    "Spelling and grammar mistakes",
    "Suspicious links or attachments",
    "Urgent threats or too-good-to-be-true offers",
    "Requests for personal information",
    "Mismatched or shortened URLs"
  ],
  
  what_to_do: [
    "Check the sender's email address carefully",
    "Hover over links without clicking to see the real URL",
    "Never click links in unexpected emails",
    "Go directly to official websites by typing the URL yourself",
    "Contact the organization through official channels to verify",
    "Report phishing emails to the company being impersonated",
    "Delete suspicious emails without responding"
  ],
  
  how_it_works: "Phishers send mass emails pretending to be from banks, government agencies, or popular services. They create fake websites that look identical to real ones. When you enter your login details or personal information, they steal it. They use urgency and fear to make you act before thinking.",
  
  questions: [
    {
      type: 1,
      prompt: "You receive an email from 'support@paypa1.com' asking you to verify your PayPal account. What's wrong with this email address?",
      options: [
        "Nothing, it looks correct",
        "The number '1' instead of letter 'l' in PayPal",
        "PayPal doesn't have a support email",
        "It should end in .au for Australia"
      ],
      correct: 1,
      explanation: "The domain uses 'paypa1' (with a number 1) instead of 'paypal'. This is a common phishing trick. The real PayPal domain is paypal.com, not paypa1.com."
    },
    {
      type: 1,
      prompt: "An email starts with 'Dear Valued Customer' instead of your name. Why is this a phishing red flag?",
      options: [
        "Companies always use your name in emails",
        "It suggests a mass email sent to many people, not personalized to you",
        "Generic greetings are more professional",
        "Your name might be misspelled"
      ],
      correct: 1,
      explanation: "Real companies that have your account use your actual name. Generic greetings suggest phishers sending mass emails to thousands of people without knowing recipients' names."
    },
    {
      type: 1,
      prompt: "You receive 'Your Amazon package could not be delivered. Click here to reschedule.' You didn't order anything. What's this?",
      options: [
        "A mistake from Amazon",
        "Someone sent you a surprise gift",
        "A phishing scam using Amazon's name",
        "A delayed notification from an old order"
      ],
      correct: 2,
      explanation: "This is a classic phishing scam. They impersonate Amazon hoping you'll click without thinking. Always check your Amazon account directly if you're unsure about deliveries."
    },
    {
      type: 1,
      prompt: "An email says 'Your account will be suspended in 24 hours unless you verify now.' What tactic is being used?",
      options: [
        "Helpful reminder",
        "Fear and urgency to make you act without thinking",
        "Standard security procedure",
        "Time-sensitive offer"
      ],
      correct: 1,
      explanation: "Urgency and fear ('suspended', '24 hours') are classic phishing tactics. They want you to panic and click without verifying. Real companies give reasonable time and multiple warnings."
    },
    {
      type: 1,
      prompt: "How can you check if an email link is safe without clicking it?",
      options: [
        "Click it quickly and close the page",
        "Hover your mouse over the link to see the actual URL",
        "Right-click and select 'safe link'",
        "Links in emails are always safe"
      ],
      correct: 1,
      explanation: "Hovering over a link (without clicking) shows the real URL at the bottom of your screen. If it doesn't match the claimed destination, it's phishing."
    },
    {
      type: 2,
      prompt: "Email from 'alerts@security-bankofaustralia.com' has the bank's logo perfectly. What's the red flag?",
      options: [
        "The logo looks too perfect",
        "The domain 'security-bankofaustralia.com' isn't the bank's real domain",
        "Banks never send security alerts",
        "The word 'security' in the email"
      ],
      correct: 1,
      explanation: "Anyone can copy logos. The domain is fake - real banks use their official domain (like commbank.com.au). Phishers buy similar-sounding domains."
    },
    {
      type: 2,
      prompt: "An email has the text 'Click here' as a blue link, but when you hover over it, the URL shows 'http://free-ipads.xyz'. What does this tell you?",
      options: [
        "The link is broken",
        "The display text doesn't match the actual destination - it's phishing",
        "It's a legitimate iPad giveaway",
        "HTTP links are always safe"
      ],
      correct: 1,
      explanation: "Phishers disguise malicious links with innocent-looking text. The mismatch between display text and actual URL is a major red flag."
    },
    {
      type: 2,
      prompt: "Which email subject line is most likely phishing?",
      options: [
        "'Your monthly statement is ready'",
        "'URGENT!!! Account LOCKED!!! Act NOW!!!'",
        "'Thank you for your recent purchase'",
        "'Your appointment reminder for tomorrow'"
      ],
      correct: 1,
      explanation: "Excessive urgency, multiple exclamation marks, and ALL CAPS are classic phishing tactics. Real companies communicate professionally without hysteria."
    },
    {
      type: 2,
      prompt: "An email asks you to 'confirm your password for security purposes.' What's wrong with this?",
      options: [
        "Passwords should be changed, not confirmed",
        "Legitimate companies NEVER ask for your password via email",
        "You should call them instead of emailing",
        "Passwords can only be confirmed in person"
      ],
      correct: 1,
      explanation: "No legitimate company ever asks for your password through email, phone, or text. Anyone asking for your password is a scammer, no exceptions."
    },
    {
      type: 2,
      prompt: "You receive an email with an attachment named 'INVOICE_URGENT.pdf.exe'. What's the red flag?",
      options: [
        "PDFs can't be urgent",
        "The double extension (.pdf.exe) - it's actually an executable program, not a PDF",
        "Invoices should be in Word format",
        "Email attachments are always dangerous"
      ],
      correct: 1,
      explanation: "The .exe extension reveals it's a program that will run malware. Phishers disguise it as .pdf to look safe. Real PDFs only end in .pdf, not .pdf.exe."
    },
    {
      type: 3,
      prompt: "You clicked a phishing link and entered your email password on a fake site. What should you do IMMEDIATELY?",
      options: [
        "Hope nothing bad happens",
        "Change your email password right away on the real website",
        "Delete your email account",
        "Wait a few days to see if anything happens"
      ],
      correct: 1,
      explanation: "Change your password immediately on the real website. Also change passwords for any other accounts that used the same password. Check for unauthorized activity."
    },
    {
      type: 3,
      prompt: "An email claiming to be from Netflix says your payment failed and asks for credit card details. What's the safest action?",
      options: [
        "Enter your card details to keep your account active",
        "Close the email and check your Netflix account through the app or official website",
        "Reply asking for more details",
        "Click the link but don't enter your card yet"
      ],
      correct: 1,
      explanation: "Never use links from suspicious emails. Open Netflix independently through the app or by typing netflix.com. Check your account and payment status there."
    },
    {
      type: 3,
      prompt: "You receive a phishing email pretending to be from your bank. What should you do after deleting it?",
      options: [
        "Nothing, you deleted it",
        "Report it to your bank and forward it to their phishing team",
        "Tell all your friends about it",
        "Reply telling them it's a scam"
      ],
      correct: 1,
      explanation: "Report phishing to the impersonated organization. Banks have dedicated teams to track and shut down phishing campaigns. Many have a reportphishing@[bank].com address."
    },
    {
      type: 3,
      prompt: "An email has a suspicious attachment. You didn't open it, but you're worried. What should you do?",
      options: [
        "Open it in 'safe mode'",
        "Simply delete the email - if you didn't open the attachment, you're safe",
        "Forward it to all your contacts",
        "Scan your computer anyway"
      ],
      correct: 1,
      explanation: "If you didn't open the attachment or click links, just delete the email. Attachments can't run unless you actively open them. You're safe."
    },
    {
      type: 3,
      prompt: "You received a phishing text message pretending to be from Australia Post. What's the best response?",
      options: [
        "Reply 'STOP' to unsubscribe",
        "Delete it and report to AusPost and Scamwatch - never respond to phishing",
        "Click the link to see what it is",
        "Forward it to friends as a warning"
      ],
      correct: 1,
      explanation: "Never respond to phishing texts - even 'STOP' confirms your number is active. Delete it and report to both the impersonated company and Scamwatch."
    },
    {
      type: 4,
      prompt: "How do phishers create fake websites that look identical to real ones?",
      options: [
        "They hack the real company's website",
        "They copy the HTML, images, and styling from the real website",
        "They pay the company to make a duplicate",
        "They use special software that's illegal"
      ],
      correct: 1,
      explanation: "Phishers simply copy the public design of real websites. Anyone can view and copy website code. That's why checking the URL is critical - the design can be perfect but the domain will be fake."
    },
    {
      type: 4,
      prompt: "Why do phishers send millions of emails even though most people won't fall for it?",
      options: [
        "They're not smart enough to target specific people",
        "Sending emails is virtually free, so even a 0.1% success rate is profitable",
        "They want to practice their English",
        "They hope to crash email servers"
      ],
      correct: 1,
      explanation: "Email costs almost nothing to send. Even if only 1 in 1,000 people fall for it, that's still thousands of victims from millions of emails. It's a numbers game."
    },
    {
      type: 4,
      prompt: "What happens if you enter your login details on a phishing website?",
      options: [
        "The website crashes",
        "Scammers instantly steal your credentials and can access your real account",
        "You get a virus",
        "Your computer gets locked"
      ],
      correct: 1,
      explanation: "Your credentials are immediately sent to scammers. They can then access your real account to steal money, data, or use your account to scam others."
    },
    {
      type: 4,
      prompt: "Why do some phishing emails have obvious spelling mistakes?",
      options: [
        "Phishers are not educated",
        "It's accidental",
        "It filters out careful people, leaving only targets who might ignore warnings",
        "Translation errors from other languages"
      ],
      correct: 2,
      explanation: "Some scammers deliberately include errors to filter out cautious people. If you notice the mistakes, you won't respond. They want victims who overlook red flags."
    },
    {
      type: 4,
      prompt: "How do phishers know which companies to impersonate?",
      options: [
        "They guess randomly",
        "They target companies with millions of customers (banks, Amazon, etc.) so more people will have accounts",
        "They only target big companies",
        "They survey people first"
      ],
      correct: 1,
      explanation: "Phishers impersonate popular services because statistically, more recipients will have accounts there. If they impersonate Commonwealth Bank, millions of Australians have accounts."
    },
    {
      type: 5,
      prompt: "Email from 'noreply@security.commbank.com.au.verify-system.com' says unusual activity detected. It has CommBank's logo and professional formatting. Link goes to 'commbank-secure-login.com'. How many red flags can you spot?",
      options: [
        "One - the suspicious link",
        "Two - the fake domain and link",
        "Three - the email address is fake (ends in verify-system.com, not commbank.com.au), the link domain is fake, and 'noreply' emails don't ask for action",
        "Zero - it looks legitimate"
      ],
      correct: 2,
      explanation: "Multiple red flags: (1) Email domain ends in 'verify-system.com' not 'commbank.com.au', (2) Link goes to fake domain, (3) Real 'noreply' emails don't ask you to click links. Professional appearance means nothing."
    },
    {
      type: 5,
      prompt: "You get an SMS: 'Hi [your name], your Linkt account has an outstanding toll of $12.60. Pay now: bit.ly/x7s2k to avoid a $65 fine.' What makes this especially tricky?",
      options: [
        "It uses your real name, making it seem personal",
        "The amount is small and believable",
        "It combines your name, realistic amount, urgency (fine), and a shortened URL - multiple tactics",
        "Linkt doesn't send texts"
      ],
      correct: 2,
      explanation: "Sophisticated phishing: uses your name (from data breaches), realistic small amount, urgency (fine threat), and shortened URL (hides destination). Despite seeming personal, it's still phishing."
    },
    {
      type: 5,
      prompt: "Email says 'Your package from Australia Post has been held at customs. Pay $8.50 duty fee: [link]'. You ARE expecting a package. What's your safest move?",
      options: [
        "Pay the fee since you're expecting something",
        "Don't click the link - check AusPost website and your tracking number independently",
        "Reply asking for proof",
        "Forward to Australia Post for verification"
      ],
      correct: 1,
      explanation: "Even when expecting a package, verify independently. Use your tracking number on auspost.com.au. Scammers send phishing emails hoping to catch people who ARE expecting packages."
    },
    {
      type: 5,
      prompt: "Sophisticated scenario: Email from your boss's email asking you to urgently buy $500 in gift cards for a client surprise. Writing style matches your boss. What could this be?",
      options: [
        "A legitimate urgent request",
        "Email account compromise - your boss's email was hacked",
        "A test from IT",
        "Your boss using a new phone"
      ],
      correct: 1,
      explanation: "Business Email Compromise (BEC). Boss's account was hacked or email was spoofed. Real bosses don't ask for gift cards urgently via email. Call or message your boss another way to confirm."
    },
    {
      type: 5,
      prompt: "You receive an email with perfect grammar, your name, recent transaction details, and a professional tone from 'support@paypal.com'. The link goes to 'paypal.com'. How could this still be phishing?",
      options: [
        "It can't be - everything checks out",
        "The link could redirect to a fake site, or the email could be using display tricks to hide the real domain",
        "Perfect emails are always scams",
        "PayPal never emails customers"
      ],
      correct: 1,
      explanation: "Advanced phishing uses tricks: link might redirect, email display might hide real sender (look at full headers), or they got your data from a breach. Always access PayPal by typing the URL yourself, never through email links, regardless of how legitimate it looks."
    }
  ]
};