export default [
  {
    id: "08-01",
    title: "The Fake Exchange",
    description: "Websites that look like Binance or Coinbase but steal your coins.",
    questions: [
      {
        question: "You click an ad for a new crypto exchange offering $1000 sign-up bonus. You deposit 1 ETH. What happens?",
        options: ["You get the bonus", "The site shows a fake balance, but your ETH is gone", "You become rich", "It is pending"],
        correctAnswer: 1,
        explanation: "Fake exchanges display a dashboard with numbers, but the actual crypto was sent to the scammer's wallet immediately."
      },
      {
        question: "The exchange URL is 'binance-secure-login.net'. Is this real?",
        options: ["Yes", "No, it is a phishing clone of the real Binance", "Maybe", "Yes, it says secure"],
        correctAnswer: 1,
        explanation: "Always check the domain. Official exchanges do not use hyphenated, weird suffixes."
      },
      {
        question: "You try to withdraw your crypto. The site says 'Error: Deposit 10% more to verify wallet'. This is:",
        options: ["A standard security check", "An Advance Fee Fraud", "A bug", "Blockchain congestion"],
        correctAnswer: 1,
        explanation: "Legitimate exchanges deduct fees from the balance. They never ask you to deposit *more* to withdraw."
      },
      {
        question: "A stranger on Telegram / WhatsApp offers to guide you through trading on a specific platform. Safe?",
        options: ["Yes, they are mentors", "No, never trust financial advice from strangers in DMs", "Yes, if they have a photo", "Maybe"],
        correctAnswer: 1,
        explanation: "This is the 'Pig Butchering' setup. The platform is fake and controlled by them."
      },
      {
        question: "The graph on the exchange always goes up, never down. Is this realistic?",
        options: ["Yes, crypto is magic", "No, real markets fluctuate. A smooth upward line is fake code.", "Yes, good trading", "Maybe"],
        correctAnswer: 1,
        explanation: "Scammers rig the charts to show constant profit to encourage you to invest more."
      },
      {
        question: "Can you reverse a crypto transaction if you sent it to a fake exchange?",
        options: ["Yes, call the bank", "No, blockchain transactions are irreversible", "Yes, call Bitcoin CEO", "Maybe"],
        correctAnswer: 1,
        explanation: "Once the crypto leaves your wallet, it is gone forever. No bank or police force can reverse the blockchain."
      },
      {
        question: "The site asks for your 'Seed Phrase' or 'Private Key' to verify your account. Do you give it?",
        options: ["Yes", "NO! Never share your seed phrase with anyone or any site", "Yes, to support", "Only via email"],
        correctAnswer: 1,
        explanation: "Your seed phrase gives full access to your wallet. Anyone who has it can drain your funds instantly."
      },
      {
        question: "What is a 'Rug Pull'?",
        options: ["A carpet cleaning service", "Developers hype a new coin, take the money, and disappear", "A trading strategy", "A glitch"],
        correctAnswer: 1,
        explanation: "Investors buy a new token, and the creators drain the liquidity pool, leaving the token worthless."
      },
      {
        question: "How can you check if an exchange is legitimate?",
        options: ["Ask the support chat", "Check CoinMarketCap or CoinGecko for exchange rankings and real URLs", "Trust the ad", "Guess"],
        correctAnswer: 1,
        explanation: "Use trusted aggregators like CoinGecko to find the official links to exchanges."
      },
      {
        question: "The 'Customer Support' uses a Gmail address. Legitimate?",
        options: ["Yes", "No, real exchanges use their own domain emails", "Maybe", "Yes, startups do"],
        correctAnswer: 1,
        explanation: "Professional financial platforms do not use free email services for support."
      }
    ]
  },
  {
    id: "08-02",
    title: "Wallet Drainers & Airdrops",
    description: "Free money that costs you everything.",
    questions: [
      {
        question: "You find a random token worth $5,000 in your wallet that you didn't buy. You try to swap it. Risk?",
        options: ["Free money!", "It's a honeypot/scam token designed to drain your wallet when you interact with it", "A mistake", "A gift"],
        correctAnswer: 1,
        explanation: "Interacting with these 'dust' tokens often requires signing a malicious contract that grants access to your wallet."
      },
      {
        question: "You receive a DM: 'You won a BTC Airdrop! Connect your wallet to claim'. Do you connect?",
        options: ["Yes", "No, connecting your wallet to unknown sites is dangerous", "Yes, quickly", "Maybe"],
        correctAnswer: 1,
        explanation: "Malicious sites use the 'Connect Wallet' function to propose a transaction that drains your assets."
      },
      {
        question: "What is 'Smart Contract Approval' risk?",
        options: ["None", "You might unknowingly give a site permission to spend ALL your tokens", "It's a fee", "It's slow"],
        correctAnswer: 1,
        explanation: "If you sign a malicious 'SetApprovalForAll' request, the scammer can empty your wallet without your password."
      },
      {
        question: "How do you protect your main savings wallet?",
        options: ["Use a 'Burner Wallet' for connecting to new sites", "Keep it all in one place", "Share the key", "Write it on Facebook"],
        correctAnswer: 0,
        explanation: "Never connect your 'Vault' or cold storage wallet to random websites. Use a temporary wallet with small funds."
      },
      {
        question: "A famous YouTuber is live-streaming a 'Bitcoin Doubler' event. 'Send 1 BTC, get 2 back'. Real?",
        options: ["Yes", "No, it's a deepfake stream promoted by hacked accounts", "Yes, Elon Musk does this", "Maybe"],
        correctAnswer: 1,
        explanation: "This is a classic scam. No one doubles money for free. The video is old footage loop or AI-generated."
      },
      {
        question: "What is a 'Cold Wallet' (Hardware Wallet)?",
        options: ["A wallet in the fridge", "A physical device (e.g., Ledger, Trezor) that keeps keys offline", "An app", "A website"],
        correctAnswer: 1,
        explanation: "Hardware wallets are safer because they require physical confirmation of transactions."
      },
      {
        question: "You receive an email 'MetaMask: Verify your KYC or lose funds'. You click the link. Result?",
        options: ["Account verified", "Phishing site asking for your seed phrase", "Nothing", "Support chat"],
        correctAnswer: 1,
        explanation: "MetaMask is a non-custodial wallet; they do not hold your email or do KYC. It's a phishing attempt."
      },
      {
        question: "Why should you revoke token approvals?",
        options: ["To save gas", "To remove permission for old/risky sites to spend your funds", "To speed up", "To delete account"],
        correctAnswer: 1,
        explanation: "Use tools like Revoke.cash to remove lingering permissions from sites you no longer use."
      },
      {
        question: "Can fake tokens have the same name as real ones (e.g., USDT)?",
        options: ["No", "Yes, anyone can create a token and name it 'USDT'", "No, names are copyrighted", "Rarely"],
        correctAnswer: 1,
        explanation: "Always check the Contract Address. Scammers create fake tokens with the same logo and name."
      },
      {
        question: "What happens if you type your seed phrase into a computer?",
        options: ["It is backed up", "Keyloggers or malware could steal it. Keep it on paper/metal only.", "It is encrypted", "Nothing"],
        correctAnswer: 1,
        explanation: "Never store seed phrases digitally (text file, photo, email). If your device is hacked, your crypto is gone."
      }
    ]
  },
  {
    id: "08-03",
    title: "Social Media Crypto Gurus",
    description: "Influencers, Pump & Dumps, and signals.",
    questions: [
      {
        question: "An influencer says 'This coin is going to the moon! Buy now!' What are they likely doing?",
        options: ["Giving financial advice", "Running a 'Pump and Dump'", "Helping you", "Predicting the future"],
        correctAnswer: 1,
        explanation: "They buy the coin cheap, hype it to followers ('Pump'), and sell when the price rises ('Dump'), crashing it."
      },
      {
        question: "A stranger DMs you: 'I made $50k with this mining pool, ask me how'. Legit?",
        options: ["Yes", "No, it is a bot or scammer recruiting victims", "Yes, very nice", "Maybe"],
        correctAnswer: 1,
        explanation: "Successful investors don't spam strangers in DMs to share their secrets."
      },
      {
        question: "What is 'Liquidity Mining' scam?",
        options: ["Mining water", "A scheme promising high daily returns (1-3%) for staking USDT in a malicious pool", "Gold mining", "A real job"],
        correctAnswer: 1,
        explanation: "They promise stable passive income but steal the principal amount once the pool is large enough."
      },
      {
        question: "You are added to a WhatsApp group 'Crypto VIP Signals'. Should you stay?",
        options: ["Yes, good info", "No, leave immediately. It's a scam funnel", "Yes, make friends", "Yes, post memes"],
        correctAnswer: 1,
        explanation: "These groups are full of bots posting fake profits to lure the few real humans into a scam."
      },
      {
        question: "The 'Guru' asks for a fee to join their 'Inner Circle' trading group. Worth it?",
        options: ["Yes", "Usually a waste of money or a setup for a larger scam", "Always", "Yes, guaranteed profit"],
        correctAnswer: 1,
        explanation: "They make money selling memberships, not trading. If their signals were that good, they wouldn't need your fee."
      },
      {
        question: "Why are giveaways requiring you to 'send ETH to verify address' always scams?",
        options: ["They aren't", "You never need to pay to receive a prize", "Blockchain logic", "Tax reasons"],
        correctAnswer: 1,
        explanation: "This is the oldest trick in the book. Legitimate airdrops never ask for a deposit."
      },
      {
        question: "Can you trust screenshots of bank balances posted on Instagram?",
        options: ["Yes", "No, they are easily photoshopped or demo accounts", "Yes, if video", "Yes, if blue check"],
        correctAnswer: 1,
        explanation: "Wealth signaling is used to lure greedy victims. Never trust an image."
      },
      {
        question: "What is a 'Giveaway Bot'?",
        options: ["A robot that gives money", "A script that spams fake giveaway links under famous tweets", "A helper", "A charity"],
        correctAnswer: 1,
        explanation: "Look under any Elon Musk tweet. The replies are full of bots promoting fake crypto giveaways."
      },
      {
        question: "The scammer uses a photo of a pretty girl/handsome guy. Why?",
        options: ["It is them", "To mix Romance Scam tactics with Crypto Fraud", "Model", "Style"],
        correctAnswer: 1,
        explanation: "Attractiveness is a tool to lower skepticism and build a connection."
      },
      {
        question: "They guarantee '1000x' returns. Is this mathematically probable?",
        options: ["Yes", "No, it is effectively a lottery ticket or lie", "Yes, crypto is easy", "Maybe"],
        correctAnswer: 1,
        explanation: "Guarantees of massive returns are lies. Crypto is volatile and risky."
      }
    ]
  },
  {
    id: "08-04",
    title: "Recovery Scams (Crypto)",
    description: "The vultures that circle after you've been scammed.",
    questions: [
      {
        question: "You posted on Twitter that you lost 1 BTC. Someone replies 'I can help recover it'. Who are they?",
        options: ["A helpful hacker", "A 'Recovery Scammer'", "Twitter support", "The police"],
        correctAnswer: 1,
        explanation: "Recovery scammers scan social media for victims and promise to hack the blockchain to get money back."
      },
      {
        question: "They claim to have 'software' that can reverse blockchain transactions. Is this possible?",
        options: ["Yes", "No, the blockchain is immutable. No software can reverse it.", "Yes, expensive software", "Only for Bitcoin"],
        correctAnswer: 1,
        explanation: "It is technically impossible to reverse a confirmed blockchain transaction without the receiver's key."
      },
      {
        question: "The recovery agent asks for an 'upfront fee' or 'gas fee' to start the process. Outcome?",
        options: ["You get your money", "You lose the fee and they disappear", "It works", "They try hard"],
        correctAnswer: 1,
        explanation: "They steal the fee and block you. You lose money twice."
      },
      {
        question: "They claim to work for the 'FBI' or 'Interpol' and use a Gmail address. Legit?",
        options: ["Yes", "No, law enforcement does not use Gmail", "Maybe", "Yes, undercover"],
        correctAnswer: 1,
        explanation: "Impersonating officials is a common tactic to intimidate or reassure victims."
      },
      {
        question: "They ask for your seed phrase to 'scan the blockchain' for your lost funds. Do you give it?",
        options: ["Yes", "NO. They will steal whatever is left in your wallet", "Yes, only half", "Yes, quickly"],
        correctAnswer: 1,
        explanation: "Never give your seed phrase. They are not scanning; they are looting."
      },
      {
        question: "Can 'ethical hackers' on Instagram recover stolen crypto?",
        options: ["Yes", "No, these are all scams", "Sometimes", "If they have 10k followers"],
        correctAnswer: 1,
        explanation: "Legitimate cybersecurity firms do not solicit business in Instagram comments."
      },
      {
        question: "What should you genuinely do if you lose crypto to a scam?",
        options: ["Hire a hacker", "Report to police/ACCC and accept the loss", "Post on Reddit", "Revenge"],
        correctAnswer: 1,
        explanation: "Reporting helps stats, but recovery is rarely possible. Acceptance prevents falling for recovery scams."
      },
      {
        question: "They send you a screenshot showing your recovered funds 'frozen' on a server. Real?",
        options: ["Yes", "No, it's a Photoshop fake to get you to pay the fee", "Yes, servers freeze", "Maybe"],
        correctAnswer: 1,
        explanation: "Fake graphics are cheap to make. Do not believe 'evidence' sent by the scammer."
      },
      {
        question: "Why do recovery scammers target previous victims?",
        options: ["They are easy targets (desperate)", "They are rich", "They are smart", "Luck"],
        correctAnswer: 0,
        explanation: "Victims are desperate and vulnerable, making them more likely to believe a miracle solution."
      },
      {
        question: "Does the FBI charge a fee to investigate crimes?",
        options: ["Yes", "No, law enforcement is taxpayer funded. They never charge victims.", "Sometimes", "For crypto yes"],
        correctAnswer: 1,
        explanation: "If 'Interpol' asks for $500 in Bitcoin, it is a scammer."
      }
    ]
  },
  {
    id: "08-05",
    title: "Crypto Safety Checklist",
    description: "Best practices for surviving the Wild West.",
    questions: [
      {
        question: "What is 2FA and why should you use it on exchanges?",
        options: ["Two-Factor Authentication (App/Key)", "It doubles your money", "It is annoying", "Two Facebook Accounts"],
        correctAnswer: 0,
        explanation: "2FA (using an app like Google Auth or a YubiKey) stops hackers even if they steal your password. Avoid SMS 2FA if possible."
      },
      {
        question: "Should you click links in emails claiming to be from your wallet provider (e.g., Ledger, MetaMask)?",
        options: ["Yes", "No, go to the official site manually", "Yes, always", "Maybe"],
        correctAnswer: 1,
        explanation: "Phishing emails are rampant. Always type the URL yourself."
      },
      {
        question: "How do you verify a Token Contract Address?",
        options: ["Trust the Telegram group", "Check official documentation (CoinGecko/Official Site)", "Guess", "Ask a friend"],
        correctAnswer: 1,
        explanation: "Don't copy addresses from random chats. Verify against the official project website."
      },
      {
        question: "Is crypto insured by the government (like a bank deposit)?",
        options: ["Yes", "No, generally not", "Yes, up to 100k", "Yes, by the UN"],
        correctAnswer: 1,
        explanation: "If an exchange collapses (like FTX), there is no government guarantee you will get your money back."
      },
      {
        question: "You want to send $10,000. What should you do first?",
        options: ["Send it all", "Send a small test transaction first", "Call the bank", "Pray"],
        correctAnswer: 1,
        explanation: "Always do a test send (e.g., $10) to confirm the address is correct before sending the bulk."
      },
      {
        question: "What is 'Address Poisoning'?",
        options: ["A virus", "Scammers send 0 transactions from an address that looks like yours, hoping you copy-paste it by mistake", "Ink poisoning", "IP ban"],
        correctAnswer: 1,
        explanation: "Always check every character of the address, not just the first and last 4 digits."
      },
      {
        question: "Should you store your seed phrase in a cloud password manager?",
        options: ["Yes", "No, if the cloud is hacked, you lose everything", "Yes, it's convenient", "Maybe"],
        correctAnswer: 1,
        explanation: "Seed phrases should stay offline (paper, metal backup)."
      },
      {
        question: "Is it safe to use public Wi-Fi for crypto trading?",
        options: ["Yes", "No, use a VPN or mobile data", "Yes, airport wifi is safe", "Always"],
        correctAnswer: 1,
        explanation: "Public Wi-Fi can be intercepted. Use a secure connection."
      },
      {
        question: "What does DYOR mean?",
        options: ["Do Your Own Research", "Do Your Own Risk", "Double Your Own Rewards", "Don't Yell Or Rant"],
        correctAnswer: 0,
        explanation: "Never invest based on hype alone. Investigate the team, the tech, and the community."
      },
      {
        question: "If it sounds too good to be true...",
        options: ["It probably is", "Go for it", "YOLO", "Buy the dip"],
        correctAnswer: 0,
        explanation: "The golden rule of fraud prevention."
      }
    ]
  }
];