export default [
  {
    id: "20-01",
    title: "The 'Ethical Hacker' Myth",
    description: "Strangers on the internet cannot hack your money back.",
    questions: [
      {
        question: "You lost money to a scam. Someone on Reddit says they can recover it.",
        options: ["Hire them", "Scam. Recovery agents are scammers.", "Message them", "Hope"],
        correctAnswer: 1,
        explanation: "Anyone claiming they can 'hack back' your stolen money is lying to steal more."
      },
      {
        question: "They ask for an upfront fee to 'buy software' to trace the funds.",
        options: ["Pay it", "Scam (Advance Fee Fraud)", "Cheap", "Investment"],
        correctAnswer: 1,
        explanation: "You pay the fee, and they disappear. You lose money twice."
      },
      {
        question: "They send a screenshot showing your money in a 'frozen' account.",
        options: ["Real", "Photoshop fake", "Proof", "Exciting"],
        correctAnswer: 1,
        explanation: "It is trivial to fake a bank balance screenshot."
      },
      {
        question: "They call themselves 'Cyber Intelligence' or 'Interpol Recovery'.",
        options: ["Impressive", "Scam. Real agencies don't solicit work on social media.", "Official", "Cool"],
        correctAnswer: 1,
        explanation: "They use impressive titles to build false trust."
      },
      {
        question: "Can a hacker reverse a Bitcoin transaction?",
        options: ["Yes", "No. Blockchain is immutable (permanent).", "Sometimes", "If skilled"],
        correctAnswer: 1,
        explanation: "Once crypto is sent, it cannot be reversed by anyone, even the creator."
      },
      {
        question: "They ask for your bank login to 'deposit' the recovered funds.",
        options: ["Give it", "Scam. Never give logins.", "Safe", "Standard"],
        correctAnswer: 1,
        explanation: "They want to steal what little you have left."
      },
      {
        question: "Testimonials on their profile say 'He helped me get $50k back!'.",
        options: ["Trust reviews", "Fake reviews written by bots", "Real", "Verification"],
        correctAnswer: 1,
        explanation: "Scammers control the reviews on their own profiles."
      },
      {
        question: "They use WhatsApp or Telegram to communicate.",
        options: ["Normal", "Scam. Professional investigators use email/phone.", "Secure", "Encrypted"],
        correctAnswer: 1,
        explanation: "These apps allow anonymity for criminals."
      },
      {
        question: "They ask for the Transaction ID (Hash) of your lost crypto.",
        options: ["Give it", "Be careful. They use it to see how much you lost so they can target you.", "Harmless", "Public"],
        correctAnswer: 1,
        explanation: "They are sizing up the victim."
      },
      {
        question: "What is the only way to recover scam funds?",
        options: ["Police and Bank", "Instagram hacker", "Dark web", "Magic"],
        correctAnswer: 0,
        explanation: "Only law enforcement and banks have legal power to recover funds."
      }
    ]
  },
  {
    id: "20-02",
    title: "Fake Government Agencies",
    description: "When the 'Consumer Commission' emails you.",
    questions: [
      {
        question: "Email from 'ACCC Compensation Dept': 'We have recovered your funds'.",
        options: ["Open link", "Scam. The ACCC does not recover individual funds.", "Reply", "Celebrate"],
        correctAnswer: 1,
        explanation: "The ACCC is a regulator, not a debt collector or recovery agency."
      },
      {
        question: "They use a Gmail address: 'accc-gov-au@gmail.com'.",
        options: ["Official", "Scam", "Department", "Old"],
        correctAnswer: 1,
        explanation: "Government always uses .gov.au."
      },
      {
        question: "They ask for a 'Tax' or 'Duty' payment to release the funds.",
        options: ["Pay tax", "Scam. No fee is required to receive a refund.", "Legal", "Gov rule"],
        correctAnswer: 1,
        explanation: "They hold the imaginary money hostage for a real fee."
      },
      {
        question: "The document has the Australian Coat of Arms.",
        options: ["Must be real", "Scammers copy-paste logos easily", "Official", "Respect"],
        correctAnswer: 1,
        explanation: "A logo proves nothing."
      },
      {
        question: "They reference a real court case or settlement.",
        options: ["Verified", "Scam tactic to add realism", "Legal", "True"],
        correctAnswer: 1,
        explanation: "They mix truth (a real case) with lies (you are a beneficiary)."
      },
      {
        question: "They say you are on a 'Victim List'.",
        options: ["Scary", "Scammers actually DO have 'sucker lists' they trade", "Good", "Helpful"],
        correctAnswer: 1,
        explanation: "If you've been scammed once, your name is on a list sold to other scammers."
      },
      {
        question: "They ask for your ID to 'verify your claim'.",
        options: ["Send ID", "Identity theft risk", "Verify", "Okay"],
        correctAnswer: 1,
        explanation: "They steal your ID to open accounts."
      },
      {
        question: "The email is from the 'FBI' or 'Interpol'.",
        options: ["International help", "Scam. Foreign police don't email Australian citizens directly.", "Big deal", "Serious"],
        correctAnswer: 1,
        explanation: "Jurisdictional issues mean this never happens via email."
      },
      {
        question: "They address you as 'Dear Beneficiary'.",
        options: ["Polite", "Scam template", "Official", "Nice"],
        correctAnswer: 1,
        explanation: "Generic greetings save them time."
      },
      {
        question: "What should you do?",
        options: ["Delete/Ignore", "Pay fee", "Reply", "Click link"],
        correctAnswer: 0,
        explanation: "Do not engage."
      }
    ]
  },
  {
    id: "20-03",
    title: "The 'Admin Fee' Trap",
    description: "Sending good money after bad.",
    questions: [
      {
        question: "Recovery requires a 10% upfront fee of the lost amount.",
        options: ["Pay it", "Scam. Legitimate lawyers usually take a cut AFTER recovery (No win, No fee).", "Standard", "Fair"],
        correctAnswer: 1,
        explanation: "Upfront fees for recovery are the clearest sign of a secondary scam."
      },
      {
        question: "They say the money is stuck in the 'Blockchain' and needs 'Gas fees' to release.",
        options: ["Pay gas", "Scam. Technical mumbo-jumbo.", "Crypto rule", "Wait"],
        correctAnswer: 1,
        explanation: "They use confusing terms to baffle you into paying."
      },
      {
        question: "Can you pay the fee from the recovered amount?",
        options: ["Ask them", "They will say NO. That proves it's a scam.", "Yes", "Maybe"],
        correctAnswer: 1,
        explanation: "If the money really existed, they would just deduct their fee. They demand cash because there is no recovered money."
      },
      {
        question: "They want the fee in gift cards.",
        options: ["Okay", "Scam", "Easy", "Fast"],
        correctAnswer: 1,
        explanation: "Professional services don't take iTunes cards."
      },
      {
        question: "They say 'Pay now or the funds return to the scammer'.",
        options: ["Pay", "Scam urgency", "Wait", "Panic"],
        correctAnswer: 1,
        explanation: "False urgency again."
      },
      {
        question: "You pay the fee, then they ask for another.",
        options: ["Pay again", "Stop. It's an endless cycle.", "Last one", "Hope"],
        correctAnswer: 1,
        explanation: "They will milk you until you run out of money."
      },
      {
        question: "They claim to be a 'Non-Profit' helper.",
        options: ["Trust", "Verify status", "Donate", "Good"],
        correctAnswer: 1,
        explanation: "Scammers hide behind charitable titles."
      },
      {
        question: "The contract they send is full of errors.",
        options: ["Sign", "Scam", "Lazy lawyer", "Draft"],
        correctAnswer: 1,
        explanation: "Fake legal documents usually look unprofessional."
      },
      {
        question: "They ask for access to your crypto wallet.",
        options: ["Grant access", "NEVER share seed phrases/keys", "Okay", "Help"],
        correctAnswer: 1,
        explanation: "Sharing keys gives them your remaining money."
      },
      {
        question: "Is there ANY guarantee of recovery?",
        options: ["Yes", "No, it is extremely rare to recover scam funds", "Always", "Usually"],
        correctAnswer: 1,
        explanation: "Accepting the loss is hard, but paying more is worse."
      }
    ]
  },
  {
    id: "20-04",
    title: "Crypto Recovery Myths",
    description: "Understanding why crypto recovery is usually a lie.",
    questions: [
      {
        question: "Is crypto traceable?",
        options: ["No", "Yes, but not easily recoverable", "Invisible", "Anonymous"],
        correctAnswer: 1,
        explanation: "You can see where it went on the blockchain, but you can't force them to send it back."
      },
      {
        question: "A website claims to have 'special software' to reverse Bitcoin.",
        options: ["Buy it", "Lie/Scam. No software can break blockchain encryption.", "Try it", "Cool"],
        correctAnswer: 1,
        explanation: "Reversing Bitcoin is mathematically impossible."
      },
      {
        question: "They say they work with the 'Blockchain Exchange Commission'.",
        options: ["Official", "Fake organization", "Real", "Authority"],
        correctAnswer: 1,
        explanation: "Scammers invent authorities that don't exist."
      },
      {
        question: "Can an exchange (like Coinbase/Binance) return your money?",
        options: ["Yes, if you ask", "Only if the funds are still on their platform and they freeze it (Rare)", "Always", "No"],
        correctAnswer: 1,
        explanation: "Once funds leave the exchange to a private wallet, the exchange can't help."
      },
      {
        question: "They show you a 'Smart Contract' that will return funds.",
        options: ["Sign", "Scam to drain your wallet", "Tech solution", "New"],
        correctAnswer: 1,
        explanation: "Malicious smart contracts steal your remaining tokens."
      },
      {
        question: "Why do scammers love crypto?",
        options: ["It's cool", "It's irreversible and crosses borders easily", "Low fees", "Fun"],
        correctAnswer: 1,
        explanation: "It removes the banking safeguards."
      },
      {
        question: "You lost $100. They want $200 to recover it.",
        options: ["Pay", "Math doesn't add up. Scam.", "Invest", "Logic"],
        correctAnswer: 1,
        explanation: "Don't throw good money after bad."
      },
      {
        question: "They claim to know the identity of the scammer.",
        options: ["Pay for info", "Lie. They are likely the same scammer.", "Revenge", "Report"],
        correctAnswer: 1,
        explanation: "Often the recovery scammer IS the original scammer."
      },
      {
        question: "What is a 'Mule Wallet'?",
        options: ["Leather wallet", "An intermediate account used to launder money", "Animal", "Safe"],
        correctAnswer: 1,
        explanation: "Funds jump through many wallets to hide the trail."
      },
      {
        question: "Who can REALLY help?",
        options: ["Nobody", "Law Enforcement (if amount is huge) or IDCARE for support", "Instagram", "Google"],
        correctAnswer: 1,
        explanation: "Support services help you deal with the fallout."
      }
    ]
  },
  {
    id: "20-05",
    title: "Double Dip Scams",
    description: "Being targeted again and again.",
    questions: [
      {
        question: "What is a 'Suckers List'?",
        options: ["Candy list", "A database of previous scam victims sold on the dark web", "Shopping list", "Email list"],
        correctAnswer: 1,
        explanation: "If you fell for one scam, criminals mark you as a high-value target for others."
      },
      {
        question: "You get a call months after being scammed offering help.",
        options: ["Lucky", "Recovery scam targeting previous victims", "Coincidence", "Service"],
        correctAnswer: 1,
        explanation: "They wait a few months then strike again."
      },
      {
        question: "The original scammer contacts you to 'apologize' and return money.",
        options: ["Forgive", "Scam. They will ask for a fee to send the return.", "Nice", "Take it"],
        correctAnswer: 1,
        explanation: "Criminals don't develop sudden consciences. It's another trap."
      },
      {
        question: "How do you stop being a target?",
        options: ["Change number/email", "Do nothing", "Yell", "Hide"],
        correctAnswer: 0,
        explanation: "Changing your contact details breaks the link to the 'suckers list'."
      },
      {
        question: "They know exact details of your previous loss.",
        options: ["They are police", "They bought your data or ARE the original scammers", "Psychic", "Helpful"],
        correctAnswer: 1,
        explanation: "This inside knowledge convinces victims they are legitimate."
      },
      {
        question: "You feel embarrassed about being scammed.",
        options: ["Hide it", "Talk to someone. Shame isolates you and makes you vulnerable to recovery scams.", "Ignore", "Forget"],
        correctAnswer: 1,
        explanation: "Scammers prey on your desperation to fix the mistake secretly."
      },
      {
        question: "Is it safe to trust ANYONE contacting you out of the blue about lost money?",
        options: ["No", "Yes", "Maybe", "Sometimes"],
        correctAnswer: 0,
        explanation: "Unsolicited contact regarding lost funds is 99.9% scam."
      },
      {
        question: "They claim the bank is 'in on it' and you can only trust them.",
        options: ["True", "Isolation tactic", "Conspiracy", "Secret"],
        correctAnswer: 1,
        explanation: "They try to separate you from trusted institutions."
      },
      {
        question: "They offer to recover money for free, but need your ID.",
        options: ["Good deal", "ID Theft scam", "Safe", "Why not"],
        correctAnswer: 1,
        explanation: "If they don't want money, they want your identity."
      },
      {
        question: "Best advice for victims?",
        options: ["Pay more", "Cut losses, report, and secure identity", "Fight back", "Hack"],
        correctAnswer: 1,
        explanation: "Acceptance is the first step to safety."
      }
    ]
  }
];