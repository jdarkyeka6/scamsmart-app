const fs = require('fs');
const path = require('path');

// Lesson metadata - add titles and emojis for each section
const sectionMetadata = {
  1: { title: "General Scam Red Flags", emoji: "🚩" },
  2: { title: "Stop, Check, Protect", emoji: "🛡️" },
  3: { title: "Phishing Scams", emoji: "🎣" },
  4: { title: "Email & SMS Scams", emoji: "📱" },
  5: { title: "Online Buying/Selling Scams", emoji: "🛒" },
  6: { title: "Romance Scams", emoji: "💔" },
  7: { title: "Investment Scams", emoji: "📈" },
  8: { title: "Crypto Investment Scams", emoji: "₿" },
  9: { title: "Job/Employment Scams", emoji: "💼" },
  10: { title: "Rental Scams", emoji: "🏠" },
  11: { title: "Puppy Scams", emoji: "🐶" },
  12: { title: "Prize/Lottery Scams", emoji: "🎰" },
  13: { title: "Impersonation Scams", emoji: "🎭" },
  14: { title: "ATO/MyGov/Tax Scams", emoji: "💰" },
  15: { title: "Medicare/Centrelink Scams", emoji: "🏥" },
  16: { title: "Delivery/Parcel Scams", emoji: "📦" },
  17: { title: "Marketplace/Postage Scams", emoji: "📮" },
  18: { title: "Charity Scams", emoji: "❤️" },
  19: { title: "Remote Access Scams", emoji: "💻" },
  20: { title: "Recovery Scams", emoji: "🔄" },
  21: { title: "Credit Card Scams", emoji: "💳" },
  22: { title: "Payment Redirection/Invoice Scams", emoji: "⚠️" },
  23: { title: "Fake Invoice Scams", emoji: "📄" },
  24: { title: "Tech Support Scams", emoji: "🖥️" },
  25: { title: "Social Media Scams", emoji: "📱" },
  26: { title: "QR Code Scams", emoji: "📲" },
  27: { title: "Fake Shopping Websites", emoji: "🛍️" },
  28: { title: "Subscription Scams", emoji: "💸" },
  29: { title: "Dating App Scams", emoji: "💕" },
  30: { title: "Scholarship/Education Scams", emoji: "🎓" },
  31: { title: "Travel/Vacation Scams", emoji: "✈️" },
  32: { title: "Insurance Scams", emoji: "🏥" },
  33: { title: "Banking Scams", emoji: "🏦" },
  34: { title: "Gift Card Scams", emoji: "🎁" },
  35: { title: "Fake Job Interview Scams", emoji: "👔" },
  36: { title: "Pyramid Schemes", emoji: "🔺" },
  37: { title: "Identity Theft", emoji: "🪪" },
  38: { title: "SIM Swap Scams", emoji: "📞" },
  39: { title: "Fake Reviews/Testimonials", emoji: "⭐" },
  40: { title: "Overpayment Scams", emoji: "💵" },
  41: { title: "Tax Refund Scams", emoji: "🧾" },
  42: { title: "Government Impersonation", emoji: "🏛️" },
  43: { title: "Utility Bill Scams", emoji: "💡" },
  44: { title: "Medical/Health Scams", emoji: "🩺" },
  45: { title: "Fake Lawyer/Legal Scams", emoji: "⚖️" },
  46: { title: "Inheritance Scams", emoji: "💰" },
  47: { title: "AI Voice Cloning Scams", emoji: "🎙️" },
  48: { title: "Deepfake Video Scams", emoji: "🎬" },
  49: { title: "AI-Generated Fake Content", emoji: "🤖" },
  50: { title: "Australia Social Media Ban Scams", emoji: "🚫" }
};

const lessonsDir = path.join(__dirname, 'app', 'lib', 'lessons');

// Get all lesson folders
const folders = fs.readdirSync(lessonsDir).filter(f => {
  return fs.statSync(path.join(lessonsDir, f)).isDirectory();
});

folders.forEach(folder => {
  const match = folder.match(/^(\d+)-/);
  if (!match) return;
  
  const sectionId = parseInt(match[1]);
  const dataFile = path.join(lessonsDir, folder, 'data.js');
  
  if (!fs.existsSync(dataFile)) {
    console.log(`Skipping ${folder} - no data.js found`);
    return;
  }
  
  try {
    // Read the file
    let content = fs.readFileSync(dataFile, 'utf8');
    
    // Remove the export default and semicolon to get raw data
    content = content.replace(/^export default\s+/, '').replace(/;?\s*$/, '');
    
    // Parse the data
    const data = eval(`(${content})`);
    
    // Check if it's an array (Gemini format) or already correct format
    if (Array.isArray(data)) {
      console.log(`Converting ${folder}...`);
      
      // Flatten all questions from all sub-lessons
      const allQuestions = data.flatMap((subLesson, index) => {
        return subLesson.questions.map(q => ({
          type: (index % 5) + 1, // Distribute across 5 lesson types
          prompt: q.question,
          options: q.options,
          correct: q.correctAnswer,
          explanation: q.explanation
        }));
      });
      
      // Create new structure
      const newData = {
        id: sectionId,
        title: sectionMetadata[sectionId]?.title || `Lesson ${sectionId}`,
        emoji: sectionMetadata[sectionId]?.emoji || "📚",
        description: data[0]?.description || "Learn about this scam type",
        introduction: `Learn to recognize and protect yourself from ${sectionMetadata[sectionId]?.title || 'these scams'}.`,
        warning_signs: [],
        what_to_do: [],
        how_it_works: "",
        questions: allQuestions
      };
      
      // Write back to file
      const newContent = `export default ${JSON.stringify(newData, null, 2)};`;
      fs.writeFileSync(dataFile, newContent, 'utf8');
      console.log(`✅ Converted ${folder}`);
    } else {
      console.log(`✓ ${folder} already in correct format`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${folder}:`, error.message);
  }
});

console.log('\n✅ Conversion complete!');