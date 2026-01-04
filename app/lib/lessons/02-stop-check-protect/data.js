export default {
  id: 2,
  title: "Stop, Check, Protect",
  emoji: "🛡️",
  description: "Master the three-step method to avoid scams",
  
  introduction: "The Stop, Check, Protect method is a simple three-step process to prevent scams. By pausing before acting, verifying information, and protecting your details, you can avoid most scams.",
  
  warning_signs: [
    "Feeling rushed or pressured to act",
    "Unexpected requests for information",
    "Offers that seem too perfect",
    "Fear-based messaging",
    "Requests for unusual payment methods"
  ],
  
  what_to_do: [
    "STOP: Pause and don't act immediately",
    "CHECK: Verify through official channels",
    "PROTECT: Never share sensitive information",
    "Take time to research and think",
    "Consult trusted people",
    "Report suspicious activity"
  ],
  
  how_it_works: "Scammers rely on quick decisions made under pressure. By simply stopping, checking independently, and protecting your information, you break their psychological manipulation tactics.",
  
  questions: [
    {
      type: 1,
      prompt: "What does the 'STOP' in Stop, Check, Protect mean?",
      options: [
        "Stop using the internet immediately",
        "Pause and resist the urge to act quickly",
        "Stop trusting everyone you meet",
        "Stop what you're doing and run"
      ],
      correct: 1,
      explanation: "STOP means to pause and resist urgency. Scammers want you to act fast without thinking. Taking time is your best defense."
    },
    {
      type: 1,
      prompt: "You receive an urgent text about a missed delivery. What's the FIRST thing you should do using Stop, Check, Protect?",
      options: [
        "Click the link to see what it is",
        "STOP and resist the urgency",
        "Forward it to the delivery company",
        "Delete it immediately"
      ],
      correct: 1,
      explanation: "The first step is always STOP. Don't let urgency control you. Pause, then move to CHECK by verifying through official channels."
    },
    {
      type: 1,
      prompt: "What does 'CHECK' mean in the Stop, Check, Protect method?",
      options: [
        "Check your bank account daily",
        "Verify information through independent, official sources",
        "Check if your friends got the same message",
        "Check the spelling in messages"
      ],
      correct: 1,
      explanation: "CHECK means independently verifying claims through sources you trust - official websites, apps, or phone numbers you already know."
    },
    {
      type: 1,
      prompt: "An email says your Netflix account needs updating. How do you CHECK if it's real?",
      options: [
        "Click the link in the email",
        "Reply asking for proof",
        "Open Netflix app or website separately and check there",
        "Call the number in the email"
      ],
      correct: 2,
      explanation: "CHECK by going to Netflix through your normal method (app or typing netflix.com). Never use links or contact details from suspicious messages."
    },
    {
      type: 1,
      prompt: "What does 'PROTECT' mean in Stop, Check, Protect?",
      options: [
        "Install antivirus software",
        "Never share passwords, codes, or personal information",
        "Protect your computer from hackers",
        "Only use secure websites"
      ],
      correct: 1,
      explanation: "PROTECT means safeguarding your sensitive information. Never share passwords, security codes, or personal details through unsolicited messages."
    },
    {
      type: 2,
      prompt: "Which message creates urgency and requires you to STOP before acting?",
      options: [
        "'Your monthly statement is ready to view'",
        "'URGENT: Your account will be locked in 1 hour!'",
        "'Thank you for your recent purchase'",
        "'Your appointment is confirmed for tomorrow'"
      ],
      correct: 1,
      explanation: "The urgent deadline ('1 hour') is designed to panic you into acting without thinking. This is exactly when you need to STOP."
    },
    {
      type: 2,
      prompt: "You're asked to verify your identity by providing your driver's license number via email. What should trigger your PROTECT instinct?",
      options: [
        "Emails are always safe for sending documents",
        "Legitimate organizations rarely ask for sensitive ID via email",
        "Your driver's license isn't important",
        "All identity requests are scams"
      ],
      correct: 1,
      explanation: "PROTECT means being cautious with sensitive information. Real organizations use secure methods, not regular email, for identity verification."
    },
    {
      type: 2,
      prompt: "A website looks identical to your bank's site but the URL is 'commonwealthbank-secure.com' instead of 'commbank.com.au'. What failed in your CHECK process?",
      options: [
        "The website design check",
        "The URL verification",
        "The color scheme check",
        "The login button check"
      ],
      correct: 1,
      explanation: "CHECK includes carefully examining URLs. Scammers create similar-looking domains. Always verify the exact URL before entering information."
    },
    {
      type: 2,
      prompt: "Which of these violates the PROTECT principle?",
      options: [
        "Creating strong passwords",
        "Telling a caller your bank account password to 'verify' it's you",
        "Using two-factor authentication",
        "Checking sender email addresses"
      ],
      correct: 1,
      explanation: "Never share your password with anyone, even if they claim to be from your bank. This violates PROTECT - your password should never be spoken or shared."
    },
    {
      type: 2,
      prompt: "An SMS says 'Your parcel is waiting. Pay $2 shipping: [link]'. What part of Stop, Check, Protect helps most here?",
      options: [
        "STOP - Don't click immediately",
        "CHECK - Verify with the sender through official channels",
        "PROTECT - Don't enter payment details on unknown sites",
        "All three steps are important"
      ],
      correct: 3,
      explanation: "All three steps work together: STOP (don't click), CHECK (verify with the delivery company), PROTECT (don't enter payment information)."
    },
    {
      type: 3,
      prompt: "You receive a call saying you owe $500 to the ATO and must pay within an hour. Apply Stop, Check, Protect - what do you do?",
      options: [
        "Pay immediately to avoid trouble",
        "STOP, hang up, CHECK by calling the ATO on their official number",
        "Ask them to send an email instead",
        "Transfer half the money to show goodwill"
      ],
      correct: 1,
      explanation: "STOP (recognize the urgency tactic), hang up, then CHECK by calling the ATO using their official number from ato.gov.au."
    },
    {
      type: 3,
      prompt: "An email asks you to confirm your credit card details for a subscription you don't recognize. What's your next move?",
      options: [
        "Reply with your card details",
        "STOP, CHECK your bank statements, contact your bank if needed",
        "Click 'unsubscribe' in the email",
        "Forward it to friends"
      ],
      correct: 1,
      explanation: "STOP (don't respond to the email), CHECK your actual bank statements separately, and contact your bank through official channels if needed."
    },
    {
      type: 3,
      prompt: "A pop-up on your computer says 'VIRUS DETECTED! Call this number immediately: 1800-HELP-NOW'. What should you do?",
      options: [
        "Call the number quickly",
        "STOP, close the browser, run your own antivirus software",
        "Click 'OK' to fix the virus",
        "Restart your computer"
      ],
      correct: 1,
      explanation: "STOP (it's a fake virus warning), close the browser without clicking anything, then CHECK by running your own trusted antivirus."
    },
    {
      type: 3,
      prompt: "You're about to pay for concert tickets on a website that only accepts gift cards. What does PROTECT tell you?",
      options: [
        "Gift cards are convenient and safe",
        "Legitimate businesses don't request gift cards as payment",
        "Buy the gift cards from a different store",
        "Get a receipt for the gift cards"
      ],
      correct: 1,
      explanation: "PROTECT includes recognizing unsafe payment methods. Gift cards are untraceable and irreversible - legitimate businesses don't use them."
    },
    {
      type: 3,
      prompt: "Someone claiming to be from your internet provider asks for remote access to your computer. How do you apply CHECK?",
      options: [
        "Let them access it since they called you",
        "Hang up and call your provider using the number on your bill",
        "Ask them security questions first",
        "Give access but watch what they do"
      ],
      correct: 1,
      explanation: "CHECK means verifying independently. Hang up and call your provider using contact details you already have, not ones the caller provides."
    },
    {
      type: 4,
      prompt: "Why is 'STOP' the most important first step?",
      options: [
        "It gives you time to find help",
        "It breaks the scammer's psychological pressure to act fast",
        "It lets you screenshot the message",
        "It prevents technical hacking"
      ],
      correct: 1,
      explanation: "Scammers use urgency and pressure to bypass rational thinking. STOP breaks this manipulation by giving you time to think clearly."
    },
    {
      type: 4,
      prompt: "Why do scammers hate when you CHECK information independently?",
      options: [
        "It wastes their time",
        "It reveals their lies and fake identities",
        "They prefer you to trust them",
        "Checking is too complicated"
      ],
      correct: 1,
      explanation: "When you verify independently, you discover their fake email domains, fake caller IDs, and false claims. This is why scammers create urgency - to prevent checking."
    },
    {
      type: 4,
      prompt: "How does PROTECT help even if you've already been scammed?",
      options: [
        "It doesn't help after a scam",
        "It limits the damage by not sharing additional information",
        "It automatically reverses the scam",
        "It alerts the police"
      ],
      correct: 1,
      explanation: "Even if partially scammed, PROTECT stops you from giving more information. Don't share additional details, passwords, or money trying to 'fix' the situation."
    },
    {
      type: 4,
      prompt: "Why does Stop, Check, Protect work against most scams?",
      options: [
        "It's a magic formula",
        "Scams rely on quick, emotional decisions without verification",
        "It blocks scam emails automatically",
        "Police recommend it"
      ],
      correct: 1,
      explanation: "Most scams exploit urgency and emotion. By systematically pausing, verifying, and protecting information, you counter their main tactics."
    },
    {
      type: 4,
      prompt: "What happens when you CHECK a scam claim through official sources?",
      options: [
        "The scammer gets notified",
        "You discover the claim is false or the urgency is fake",
        "Your account gets flagged",
        "The official source confirms the scam"
      ],
      correct: 1,
      explanation: "Official sources will either have no record of the claim, or will confirm it's not urgent. This reveals the scam and prevents you from falling for it."
    },
    {
      type: 5,
      prompt: "You get an email: 'Your $1,500 Amazon order will ship today. Cancel within 2 hours: [link]'. You didn't order anything. Apply all three steps correctly:",
      options: [
        "Click the link to cancel the fake order",
        "STOP (recognize urgency), CHECK (log into Amazon separately), PROTECT (don't click or share info)",
        "Reply saying it's a mistake",
        "Forward it to Amazon's email in the message"
      ],
      correct: 1,
      explanation: "Perfect application: STOP (pause despite urgency), CHECK (independently verify through Amazon app/website), PROTECT (don't interact with suspicious message)."
    },
    {
      type: 5,
      prompt: "Phone call: 'This is Officer Johnson from the Australian Federal Police. There's a warrant for your arrest. Confirm your address and Medicare number immediately.' What's your complete response?",
      options: [
        "Provide the information to cooperate",
        "STOP (police don't call like this), hang up, CHECK (AFP doesn't call about warrants), PROTECT (never give personal info)",
        "Ask for their badge number first",
        "Call them back on the number they provide"
      ],
      correct: 1,
      explanation: "STOP (recognize the fear tactic), hang up (police don't operate this way), CHECK (real warrants aren't handled by phone), PROTECT (don't share personal information)."
    },
    {
      type: 5,
      prompt: "Facebook Marketplace seller says they're overseas and asks you to pay via bank transfer before shipping. They have good reviews. Apply Stop, Check, Protect:",
      options: [
        "Pay since they have reviews",
        "STOP (overseas + bank transfer = red flags), CHECK (reviews can be fake), PROTECT (use platform's payment protection)",
        "Negotiate a lower price first",
        "Ask for tracking number in advance"
      ],
      correct: 1,
      explanation: "STOP (recognize red flags), CHECK (reviews can be faked, seller may not be real), PROTECT (use secure platform payments only, never direct bank transfer)."
    },
    {
      type: 5,
      prompt: "You're on a website that looks like Kogan but the URL is 'kogan-australia-sale.com'. You're about to enter your credit card. Which step saves you?",
      options: [
        "STOP - pause before entering details",
        "CHECK - verify the URL isn't the real Kogan website",
        "PROTECT - don't enter credit card on suspicious sites",
        "All three steps should have caught this earlier"
      ],
      correct: 3,
      explanation: "You should have: STOPPED before entering details, CHECKED the URL (real is kogan.com), PROTECTED your credit card info. Any step would have saved you."
    },
    {
      type: 5,
      prompt: "Complex scenario: Email says your Uber account was used for a $85 ride you didn't take. It has Uber's logo. Link says 'Dispute Charge'. What's the safest full process?",
      options: [
        "Click the link since you didn't take the ride",
        "STOP (despite worry), CHECK (open Uber app separately to verify), PROTECT (don't click email links or enter login details there)",
        "Reply to the email disputing it",
        "Call the number in the email's footer"
      ],
      correct: 1,
      explanation: "Complete process: STOP (despite worry about charges), CHECK (verify independently through the Uber app), PROTECT (never use links or contact details from suspicious emails, even if they look real)."
    }
  ]
};