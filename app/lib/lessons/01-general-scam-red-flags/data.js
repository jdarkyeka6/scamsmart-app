export default {
  id: 1,
  title: "General Scam Red Flags",
  emoji: "🚩",
  description: "Learn the universal warning signs that appear in almost every scam",
  
  introduction: "Scammers use similar tactics across different types of scams. Learning these universal red flags will help you spot scams before they happen, no matter what form they take.",
  
  warning_signs: [
    "Requests for immediate action or urgent decisions",
    "Promises that seem too good to be true",
    "Requests for personal information or passwords",
    "Pressure to keep things secret",
    "Unusual payment methods (gift cards, crypto)",
    "Poor spelling and grammar",
    "Threats of consequences",
    "Unsolicited contact"
  ],
  
  what_to_do: [
    "Take time to think - don't be rushed",
    "Verify independently through official channels",
    "Never share passwords or security codes",
    "Research before taking action",
    "Talk to someone you trust",
    "Report to Scamwatch",
    "Trust your instincts"
  ],
  
  how_it_works: "Scammers manipulate emotions like fear, greed, or urgency to bypass critical thinking. They create pressure for quick decisions, use convincing stories, and exploit trust in familiar brands.",
  
  questions: [
    {
      type: 1,
      prompt: "You receive a message saying you've won $5,000, but need to pay a $50 'processing fee' to claim it. What red flag does this show?",
      options: [
        "Legitimate prizes never require upfront payment",
        "The prize amount is too high",
        "Processing fees are always suspicious",
        "You should verify the sender first"
      ],
      correct: 0,
      explanation: "Real prizes never require you to pay money upfront. If you genuinely won something, the company pays all fees. Asking for payment to receive a prize is a classic scam tactic."
    },
    {
      type: 1,
      prompt: "A caller claims to be from your bank and asks you to confirm your password 'for security verification.' What should you do?",
      options: [
        "Give them the password since they're from your bank",
        "Ask them to call back later",
        "Hang up and call your bank using the number on your card",
        "Only give them half of your password"
      ],
      correct: 2,
      explanation: "Banks NEVER ask for your full password. Always hang up and call back using official contact details to verify who you're speaking with."
    },
    {
      type: 1,
      prompt: "An email says your account will be closed in 2 hours unless you click a link to 'verify your details.' What scam tactic is being used?",
      options: [
        "Creating fear of missing out",
        "Using urgency to prevent careful thinking",
        "Impersonating a trusted company",
        "All of the above"
      ],
      correct: 3,
      explanation: "This combines urgency, fear, and impersonation. Scammers use urgency to stop you from verifying independently. Real companies give you reasonable time."
    },
    {
      type: 1,
      prompt: "Someone offers a high-paying job with minimal work, but asks you to pay for 'training materials' first. What's the main red flag?",
      options: [
        "The pay seems too high for the work required",
        "Legitimate employers never ask employees to pay for training",
        "The job was offered too quickly",
        "Working from home is always suspicious"
      ],
      correct: 1,
      explanation: "Real employers pay for required training materials. If someone asks you to pay money to get a job, it's a scam."
    },
    {
      type: 1,
      prompt: "A message says 'Don't tell anyone about this opportunity or it won't work.' Why is this a major red flag?",
      options: [
        "It prevents you from getting advice from trusted people",
        "Secrecy is always part of scams",
        "Legitimate businesses encourage you to research",
        "Both A and C"
      ],
      correct: 3,
      explanation: "Scammers demand secrecy to isolate you from people who might recognize the scam. Legitimate businesses want you to make informed decisions."
    },
    {
      type: 2,
      prompt: "Which payment method is MOST commonly requested in scams?",
      options: [
        "Credit card through a secure website",
        "Bank transfer to a verified account",
        "Gift cards or cryptocurrency",
        "PayPal Goods and Services"
      ],
      correct: 2,
      explanation: "Scammers love gift cards and cryptocurrency because they're nearly impossible to trace or reverse. If someone insists on gift cards, it's almost certainly a scam."
    },
    {
      type: 2,
      prompt: "An email from 'support@paypa1-security.com' asks you to verify your account. What's the key red flag?",
      options: [
        "It uses 'security' in the domain",
        "The '1' instead of 'l' in PayPal",
        "It's from a support team",
        "The hyphen in the domain name"
      ],
      correct: 1,
      explanation: "Scammers use look-alike domains with subtle changes like '1' instead of 'l'. Always check email addresses character by character."
    },
    {
      type: 2,
      prompt: "A social media ad promises 'Make $500/day working from home - no experience needed!' What makes this suspicious?",
      options: [
        "Working from home is always a scam",
        "Making money requires experience",
        "The promise of easy, high income with no skills",
        "Social media ads are never legitimate"
      ],
      correct: 2,
      explanation: "The 'too good to be true' promise is a classic red flag. Real jobs require skills, time, and effort."
    },
    {
      type: 2,
      prompt: "You receive a text with a link: 'Your package couldn't be delivered. Track it: bit.ly/abc123.' What's the red flag?",
      options: [
        "Legitimate tracking links use shortened URLs",
        "Real delivery companies use their official domains, not link shorteners",
        "Text messages about packages are always scams",
        "The message is too short"
      ],
      correct: 1,
      explanation: "Legitimate delivery companies send tracking links from their own domains. Shortened URLs hide the real destination and are commonly used in phishing."
    },
    {
      type: 2,
      prompt: "An email has spelling mistakes and awkward grammar but claims to be from a major bank. Why is this a red flag?",
      options: [
        "Banks sometimes make mistakes too",
        "It shows the email wasn't written by professional staff",
        "Grammar doesn't matter in emails",
        "Only old scams have spelling errors"
      ],
      correct: 1,
      explanation: "Major companies have professional teams who review all customer emails. Poor grammar suggests scammers, often operating from overseas."
    },
    {
      type: 3,
      prompt: "You think you've received a scam email claiming to be from the ATO. What's the FIRST thing you should do?",
      options: [
        "Reply to the email asking if it's real",
        "Click the link to check if your account is okay",
        "Delete it and visit the ATO website directly",
        "Forward it to friends to warn them"
      ],
      correct: 2,
      explanation: "Never interact with suspicious emails. Go directly to the official website by typing it yourself."
    },
    {
      type: 3,
      prompt: "A phone call threatens you with arrest unless you pay immediately. What should you do?",
      options: [
        "Pay quickly to avoid arrest",
        "Hang up - law enforcement doesn't demand payment over the phone",
        "Ask them to call back later",
        "Negotiate a lower payment"
      ],
      correct: 1,
      explanation: "Police and government agencies NEVER demand immediate payment over the phone or threaten arrest. Hang up and report to Scamwatch."
    },
    {
      type: 3,
      prompt: "Someone you met online asks you to receive money in your account and forward it for a 'business deal.' What should you do?",
      options: [
        "Do it since you'll get a percentage",
        "Refuse - this is money laundering and illegal",
        "Only do it once to test if it's real",
        "Ask for more details"
      ],
      correct: 1,
      explanation: "This is money laundering - you could be transferring stolen money and face criminal charges. Never let strangers use your bank account."
    },
    {
      type: 3,
      prompt: "You accidentally clicked a link in a suspicious email. What should you do immediately?",
      options: [
        "Close the browser and change your passwords",
        "Keep clicking to see what happens",
        "Wait to see if anything bad happens",
        "Restart your computer"
      ],
      correct: 0,
      explanation: "Act fast: close the page, change passwords for important accounts, and run antivirus software. The quicker you act, the better."
    },
    {
      type: 3,
      prompt: "A friend's social media account sends you 'Is this you in this video?' with a link. What should you do?",
      options: [
        "Click it since it's from a friend",
        "Ignore it - their account was likely hacked",
        "Reply asking what video they mean",
        "Share it to see if others know"
      ],
      correct: 1,
      explanation: "This is an account hijacking scam. Don't click - contact your friend another way to tell them their account was compromised."
    },
    {
      type: 4,
      prompt: "Why do scammers create a sense of urgency in their messages?",
      options: [
        "To seem more professional",
        "To stop you from thinking carefully or seeking advice",
        "Because their offers are time-limited",
        "To show they're busy"
      ],
      correct: 1,
      explanation: "Urgency is psychological manipulation. When rushed, people make emotional decisions without critical thinking."
    },
    {
      type: 4,
      prompt: "How do scammers make fake emails look like they're from real companies?",
      options: [
        "They hack into the company's email system",
        "They use similar-looking addresses and copy company logos",
        "They pay the company to send emails",
        "All fake emails look obviously fake"
      ],
      correct: 1,
      explanation: "Scammers create look-alike domains and copy logos, colors, and formatting. Emails can look identical to real ones."
    },
    {
      type: 4,
      prompt: "Why do scammers often operate from overseas?",
      options: [
        "It's cheaper to run scams from other countries",
        "It makes them harder to catch and prosecute",
        "They can pretend to be from foreign banks",
        "International calls sound more official"
      ],
      correct: 1,
      explanation: "Operating overseas makes scammers harder for Australian law enforcement to catch. Prevention is key - recovering money is nearly impossible."
    },
    {
      type: 4,
      prompt: "What psychological tactic makes 'too good to be true' offers work?",
      options: [
        "People are naturally greedy",
        "Hope and desire override logical thinking",
        "People don't understand money",
        "Everyone falls for these offers"
      ],
      correct: 1,
      explanation: "Scammers exploit natural hope for a better life. When someone needs money, they're more likely to believe unlikely promises."
    },
    {
      type: 4,
      prompt: "Why do scammers ask victims to keep opportunities secret from family?",
      options: [
        "The opportunity only works if it's exclusive",
        "To prevent loved ones from recognizing the scam",
        "Family members might want to join",
        "Successful people keep secrets"
      ],
      correct: 1,
      explanation: "Isolation is key. Friends and family can spot scams more easily. By demanding secrecy, scammers prevent victims from getting reality checks."
    },
    {
      type: 5,
      prompt: "Email from 'security@bankofaustralia-secure.net' with your bank's logo says suspicious activity detected. Best response?",
      options: [
        "Click the link since it looks professional",
        "Call the phone number in the email",
        "Close the email and log into your bank through the app",
        "Reply asking for more information"
      ],
      correct: 2,
      explanation: "Despite looking professional, the domain isn't real. Always access your bank through methods you know are safe."
    },
    {
      type: 5,
      prompt: "Caller from NBN needs remote access to 'fix your internet.' They know your address. What should you do?",
      options: [
        "Let them access since they know your address",
        "Hang up and call NBN using the number from their website",
        "Ask them to prove they're from NBN",
        "Give limited access to see what they fix"
      ],
      correct: 1,
      explanation: "Address information is often public. NBN doesn't make unsolicited calls. This is a remote access scam."
    },
    {
      type: 5,
      prompt: "QR code on a parking meter says 'Scan to Pay.' What red flags should you check?",
      options: [
        "Whether the code looks professionally printed",
        "If it's a sticker that could have been placed over the real code",
        "If other meters have similar codes",
        "All of the above"
      ],
      correct: 3,
      explanation: "Scammers place fake QR stickers over real ones. Check if it's a sticker, compare with other meters, verify the URL."
    },
    {
      type: 5,
      prompt: "Selling laptop for $800. Buyer offers $1,200 and asks you to refund the extra $400. What's happening?",
      options: [
        "They're being generous and made a mistake",
        "Overpayment scam - their payment will bounce after you send the refund",
        "They want to ensure you're trustworthy",
        "International buyers always overpay"
      ],
      correct: 1,
      explanation: "Classic overpayment scam. They send fake payment, you send real money back, then their payment reverses."
    },
    {
      type: 5,
      prompt: "Which situation combines the MOST red flags?",
      options: [
        "Email about package delivery with tracking link",
        "Job offer requiring upfront payment, high income, and secrecy",
        "Social media message from stranger",
        "Website with spelling mistakes"
      ],
      correct: 1,
      explanation: "This combines upfront payment, too-good-to-be-true promises, and secrecy. Multiple red flags together = definite scam."
    }
  ]
};