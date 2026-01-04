export default [
  {
    id: "09-01",
    title: "The 'Dream Job' Offer",
    description: "Spotting fake job offers that arrive out of the blue.",
    questions: [
      {
        question: "You receive a WhatsApp message: 'Hi, I am from Recruitment. We have a part-time job paying $300/hour.' Real?",
        options: ["Yes, I am lucky", "No, recruiters do not headhunt random people via WhatsApp", "Maybe", "Yes, apply"],
        correctAnswer: 1,
        explanation: "Legitimate recruiters use LinkedIn, email, or phone calls. They don't spam random numbers on WhatsApp."
      },
      {
        question: "The job requires 'No Experience' but pays a CEO-level salary. Red flag?",
        options: ["No, it's an entry level CEO job", "Yes, high pay for low skill is a classic scam hook", "No, inflation", "Maybe"],
        correctAnswer: 1,
        explanation: "If the pay is disproportionately high for the effort/skill required, it is a scam."
      },
      {
        question: "They interview you via 'Text Chat' only (Telegram/Signal). Is this normal?",
        options: ["Yes, modern", "No, real companies do phone or video interviews", "Yes, shy recruiters", "It's fine"],
        correctAnswer: 1,
        explanation: "Scammers avoid voice/video to hide their identity and accent. Real jobs involve real conversations."
      },
      {
        question: "The job description is vague ('Optimization Assistant') and uses poor grammar. Verdict?",
        options: ["Scam", "Start-up", "International firm", "Creative role"],
        correctAnswer: 0,
        explanation: "Vague titles and bad English are hallmarks of mass-marketed job scams."
      },
      {
        question: "They offer you the job immediately without checking references or a background check. Good sign?",
        options: ["Yes, fast hiring", "No, real companies have a vetting process", "Yes, they are desperate", "Maybe"],
        correctAnswer: 1,
        explanation: "Instant hiring is a tactic to get you hooked before you think it through."
      },
      {
        question: "They ask you to pay for 'Training Materials' or a 'Starter Kit' to begin. Should you?",
        options: ["Yes, invest in yourself", "No, legitimate jobs pay YOU. You never pay to get a job.", "Yes, standard fee", "Maybe"],
        correctAnswer: 1,
        explanation: "Never pay an employer for equipment, training, or software. This is an 'Advance Fee' scam."
      },
      {
        question: "The email comes from 'careers-amazon@gmail.com'. Legit?",
        options: ["Yes", "No, look at the domain. It should be '@amazon.com'", "Maybe", "Yes, Google owns Amazon"],
        correctAnswer: 1,
        explanation: "Scammers use free email providers. Real recruiters use corporate domains."
      },
      {
        question: "What is a 'Payment Processing' job?",
        options: ["HR role", "Money Laundering (Mule) scam", "Accountant", "Cashier"],
        correctAnswer: 1,
        explanation: "If your job is receiving money to your personal bank and sending it elsewhere, you are a money mule."
      },
      {
        question: "They ask for your driver's license and tax file number BEFORE the interview. Do you send it?",
        options: ["Yes", "No, this is identity theft harvesting", "Yes, for filing", "Yes, to prove ID"],
        correctAnswer: 1,
        explanation: "Only provide sensitive ID documents *after* a formal offer is made and verified."
      },
      {
        question: "You check the company's LinkedIn page and the employees don't exist. Result?",
        options: ["Ghost company", "New company", "Private company", "Glitch"],
        correctAnswer: 0,
        explanation: "Scammers create fake company pages. Verify them on the official business register."
      }
    ]
  },
  {
    id: "09-02",
    title: "Task Scams (The 'Optimization' Scam)",
    description: "Clicking buttons for fake profit.",
    questions: [
      {
        question: "The job involves 'optimizing apps' or 'boosting products' by clicking a button 40 times a day. Real?",
        options: ["Yes, digital marketing", "No, this is a 'Task Scam'", "Yes, easy money", "SEO work"],
        correctAnswer: 1,
        explanation: "No real job pays you to randomly click buttons. This is a simulation designed to steal your money."
      },
      {
        question: "You earn 'profit' on the screen, but then your account goes negative. You are told to:",
        options: ["Quit", "Deposit your own money to 'recharge' and fix the negative balance", "Call support", "Wait"],
        correctAnswer: 1,
        explanation: "This is the trap. They claim you hit a 'lucky combination' or 'error' and must pay to unlock your earnings."
      },
      {
        question: "Do legitimate marketing companies ask employees to deposit crypto to work?",
        options: ["Yes", "Never", "Sometimes", "For bonding"],
        correctAnswer: 1,
        explanation: "You should never have to pay to work."
      },
      {
        question: "They add you to a 'Team' chat where everyone posts screenshots of huge earnings. Are they real?",
        options: ["Yes", "No, they are shills/bots meant to build social proof", "Yes, lucky team", "Maybe"],
        correctAnswer: 1,
        explanation: "The other 'employees' are part of the scam, cheering you on to deposit more money."
      },
      {
        question: "The platform URL changes frequently (e.g., 'amazon-task-v8.com' to 'v9.com'). Why?",
        options: ["Upgrades", "They are being banned/shutdown and moving to new domains", "Better server", " rebranding"],
        correctAnswer: 1,
        explanation: "Scam sites are short-lived. Changing URLs helps them evade blacklists."
      },
      {
        question: "You are told you must complete '40 tasks' to withdraw. On task 39, a 'Super Task' requires a $1000 deposit. Coincidence?",
        options: ["Yes", "No, it is programmed to squeeze you right before the end", "Bad luck", "Opportunity"],
        correctAnswer: 1,
        explanation: "The algorithm is rigged to force a deposit just as you think you are about to finish."
      },
      {
        question: "What happens if you pay the 'negative balance'?",
        options: ["You get your money", "Another 'error' will happen requiring more money", "You win", "They hire you"],
        correctAnswer: 1,
        explanation: "The hole never ends. They will keep inventing fees until you run out of money."
      },
      {
        question: "The payments are made via USDT (Tether). Why?",
        options: ["It is fast", "It is irreversible and hard to trace", "Modern tech", "Low tax"],
        correctAnswer: 1,
        explanation: "Scammers prefer crypto because once you send it, you can't chargeback like a credit card."
      },
      {
        question: "They claim to be partners with big brands (eBay, Ticketmaster). Are they?",
        options: ["Yes", "No, they misuse logos to look legit", "Maybe", "Partners"],
        correctAnswer: 1,
        explanation: "Big brands do not use random websites for 'product boosting'."
      },
      {
        question: "Can you get your money back from a Task Scam?",
        options: ["Yes", "Very difficult. Stop paying immediately.", "Yes, call eBay", "Yes, task reset"],
        correctAnswer: 1,
        explanation: "Accept the loss and stop paying. The 'salary' on the screen was never real."
      }
    ]
  },
  {
    id: "09-03",
    title: "Money Mules & Reshipping",
    description: "Becoming an accidental criminal.",
    questions: [
      {
        question: "You get a job as a 'Package Manager'. You receive parcels at home and reship them overseas. What is this?",
        options: ["Logistics job", "Reshipping Mule Scam", "Postman", "Warehouse manager"],
        correctAnswer: 1,
        explanation: "The goods were bought with stolen credit cards. You are helping criminals smuggle stolen goods."
      },
      {
        question: "Why is being a 'mule' dangerous?",
        options: ["It is tiring", "You can be charged with theft, fraud, or money laundering", "Paper cuts", "Boring"],
        correctAnswer: 1,
        explanation: "Police will come to YOUR door because the stolen goods/money were traced to you."
      },
      {
        question: "The 'employer' asks you to receive money into your bank account, keep 5%, and forward the rest via Bitcoin. Scam?",
        options: ["Yes, Money Laundering", "No, Payment Processor", "Maybe", "Crypto trading"],
        correctAnswer: 0,
        explanation: "You are 'cleaning' dirty money. This is a serious crime with jail time."
      },
      {
        question: "They provide a 'shipping label' for the parcels. Who pays for it?",
        options: ["They do", "It is usually paid for with a stolen credit card", "Free post", "You do"],
        correctAnswer: 1,
        explanation: "Even the postage is fraudulent."
      },
      {
        question: "The job title is 'Quality Control Inspector' but you work from home inspecting random electronics. Suspicious?",
        options: ["No", "Yes, why would random electronics come to your house?", "Yes, fun", "No, remote work"],
        correctAnswer: 1,
        explanation: "Real quality control happens in factories or warehouses, not your living room."
      },
      {
        question: "You haven't been paid your 'salary' after a month of reshipping. Will you be paid?",
        options: ["Yes", "No, they will ghost you", "Yes, with a bonus", "Maybe"],
        correctAnswer: 1,
        explanation: "Scammers use you until the police get close, then cut contact without paying a cent."
      },
      {
        question: "What should you do if you realize you are a mule?",
        options: ["Keep the last package", "Stop immediately, report to police, and contact your bank", "Reship it", "Hide"],
        correctAnswer: 1,
        explanation: "Cooperating with authorities is your best chance to avoid prosecution."
      },
      {
        question: "They ask you to open a NEW bank account for the 'company'. Why?",
        options: ["To separate funds", "To use a 'drop' account they can burn later", "Organization", "Bonuses"],
        correctAnswer: 1,
        explanation: "They don't want the dirty money linked to their own accounts."
      },
      {
        question: "Is 'Processing Donations' a common mule cover story?",
        options: ["Yes", "No", "Rarely", "Never"],
        correctAnswer: 0,
        explanation: "They claim the money is for 'orphanages' or 'charity' to make you feel good about laundering it."
      },
      {
        question: "If the police contact you, what should you do?",
        options: ["Lie", "Tell the truth and show all communications", "Run", "Delete emails"],
        correctAnswer: 1,
        explanation: "Evidence that you were tricked (job ads, chats) can help prove you weren't a willing accomplice."
      }
    ]
  },
  {
    id: "09-04",
    title: "Resume & ID Theft",
    description: "When the product is YOU.",
    questions: [
      {
        question: "You upload your resume to a public job board. Soon, you get spam calls. Why?",
        options: ["You are popular", "Scammers scrape personal data (phone, email, address) from resumes", "Recruiters love you", "Glitch"],
        correctAnswer: 1,
        explanation: "Your resume contains a goldmine of data. Limit personal info on public versions."
      },
      {
        question: "A job application form asks for your Mother's Maiden Name. Suspicious?",
        options: ["No", "Yes, this is a security question for banking, not needed for hiring", "Maybe", "Standard HR"],
        correctAnswer: 1,
        explanation: "Never answer security questions (maiden name, first pet) on a job application."
      },
      {
        question: "They send a 'contract' that requires a digital scan of your passport immediately. Safe?",
        options: ["Yes", "Verify the company first. Passport scans are high-value for identity theft.", "Yes, standard", "No"],
        correctAnswer: 1,
        explanation: "Identity thieves use passport scans to open loans or bank accounts in your name."
      },
      {
        question: "The recruiter asks for your bank login details to 'set up direct deposit'. Do you give them?",
        options: ["Yes", "NO! Employers need BSB/Account Number, NEVER your password", "Yes, to check balance", "Maybe"],
        correctAnswer: 1,
        explanation: "Your employer never needs your password or PIN."
      },
      {
        question: "How can you protect your resume?",
        options: ["Don't have one", "Use a dedicated email and don't put your full home address", "Put fake info", "Lock it"],
        correctAnswer: 1,
        explanation: "Minimize the data. Use 'Suburb, State' instead of '123 Smith St'."
      },
      {
        question: "You apply for a job and they ask you to complete a 'Credit Report' via a specific link. Scam?",
        options: ["Likely", "No", "Standard", "Good idea"],
        correctAnswer: 0,
        explanation: "They are affiliate farming or stealing your personal data through a fake credit check site."
      },
      {
        question: "What is 'Trafficking in Persons' in job scams?",
        options: ["Traffic jam", "Fake jobs overseas (e.g., Cambodia/Myanmar) that kidnap workers for scam compounds", "Driving jobs", "Visa issues"],
        correctAnswer: 1,
        explanation: "Some 'high paying IT jobs' in SE Asia are traps where workers are held captive and forced to scam others."
      },
      {
        question: "The job is for 'Mystery Shopper' and they send you a cheque. What is the catch?",
        options: ["Free shopping", "The cheque is fake. You wire back the 'change' before it bounces.", "Fun job", "No catch"],
        correctAnswer: 1,
        explanation: "You deposit the $2000 cheque, send $500 back, and spend $500. Then the cheque bounces and you owe the bank $2000."
      },
      {
        question: "Why do they want your MyGov details?",
        options: ["To pay tax", "To lodge false tax returns in your name", "To help you", "To update address"],
        correctAnswer: 1,
        explanation: "Access to MyGov allows them to steal tax refunds and commit welfare fraud."
      },
      {
        question: "If you sent your ID to a scammer, what is the first step?",
        options: ["Cry", "Contact IDCARE and your bank", "Move house", "Change name"],
        correctAnswer: 1,
        explanation: "IDCARE (Australia/NZ) provides support for identity theft victims."
      }
    ]
  },
  {
    id: "09-05",
    title: "Verification & Safety",
    description: "How to safely hunt for a job.",
    questions: [
      {
        question: "How can you verify a recruiter's email?",
        options: ["Ask them", "Check the domain (e.g., @google.com vs @google-jobs-hiring.com)", "Trust the signature", "Reply"],
        correctAnswer: 1,
        explanation: "Inspect the email header. Be wary of domains registered recently."
      },
      {
        question: "You should look up the company on:",
        options: ["Their own website", "Glassdoor, LinkedIn, and Google Reviews", "TikTok", "The Yellow Pages"],
        correctAnswer: 1,
        explanation: "Cross-reference multiple sources. If no one has heard of them, or reviews say 'Scam', run."
      },
      {
        question: "Is it safe to pay for a background check via a link sent by the employer?",
        options: ["Yes", "No, arrange it yourself via an accredited provider if needed", "Yes, easier", "Maybe"],
        correctAnswer: 1,
        explanation: "Links sent by scammers lead to phishing sites or affiliate scams."
      },
      {
        question: "Real employers will usually conducts an interview by:",
        options: ["Telegram text", "Phone, Video Call, or In-Person", "WhatsApp text", "Email only"],
        correctAnswer: 1,
        explanation: "Human interaction is key. Text-only interviews are 99% scams."
      },
      {
        question: "If a job pays in Crypto only, it is likely:",
        options: ["A scam or illegal work", "Modern", "Tax free", "Cool"],
        correctAnswer: 0,
        explanation: "Legitimate Australian employers pay in AUD via bank transfer with tax withheld."
      },
      {
        question: "What is the 'ACCC Scamwatch'?",
        options: ["A clock", "An Australian government site to report and learn about scams", "A job board", "A bank"],
        correctAnswer: 1,
        explanation: "Use Scamwatch to search for known job scams."
      },
      {
        question: "Trust your gut: If the offer is way above market rate, it is...",
        options: ["Your lucky day", "A bait", "A mistake", "A bonus"],
        correctAnswer: 1,
        explanation: "If it sounds too good to be true, it is."
      },
      {
        question: "Should you click links in unsolicited job SMS?",
        options: ["Yes", "No, delete them", "Yes, to unsubscribe", "Maybe"],
        correctAnswer: 1,
        explanation: "These are 'smishing' attempts. Don't engage."
      },
      {
        question: "A company uses a mobile phone number as their main contact. Professional?",
        options: ["Yes", "Small businesses might, but big corps use landlines/1300 numbers", "No, never", "Maybe"],
        correctAnswer: 1,
        explanation: "Be cautious if a 'multinational corporation' only has a mobile number."
      },
      {
        question: "What is the best way to apply for a job?",
        options: ["Clicking random ads", "Going directly to the company's official 'Careers' page", "Replying to spam", "Facebook comments"],
        correctAnswer: 1,
        explanation: "Apply through official channels to ensure your data is safe."
      }
    ]
  }
];