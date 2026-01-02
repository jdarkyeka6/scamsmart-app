export const lessonMetadata = [
  { id: 1, file: 'phishing-scams.json', emoji: '🎣', xp: 100 },
  { id: 2, file: 'delivery-parcel-scams.json', emoji: '📦', xp: 100 },
  { id: 3, file: 'romance-scams.json', emoji: '💔', xp: 150 },
  { id: 4, file: 'remote-access-scams.json', emoji: '💻', xp: 150 },
  { id: 5, file: 'crypto-investment-scams.json', emoji: '₿', xp: 150 },
  { id: 6, file: 'job-employment-scams.json', emoji: '💼', xp: 100 },
  { id: 7, file: 'ato-mygov-tax-scams.json', emoji: '💰', xp: 150 },
  { id: 8, file: 'impersonation-scams.json', emoji: '🎭', xp: 150 },
  { id: 9, file: 'investment-scams.json', emoji: '📈', xp: 150 },
  { id: 10, file: 'charity-scams.json', emoji: '❤️', xp: 100 },
  { id: 11, file: 'online-buying-selling-scams.json', emoji: '🛒', xp: 100 },
  { id: 12, file: 'rental-scams.json', emoji: '🏠', xp: 150 },
  { id: 13, file: 'prize-lottery-scams.json', emoji: '🎰', xp: 100 },
  { id: 14, file: 'credit-card-scams.json', emoji: '💳', xp: 150 },
  { id: 15, file: 'fake-invoice-scams.json', emoji: '📄', xp: 150 },
  { id: 16, file: 'marketplace-postage-scams.json', emoji: '📮', xp: 100 },
  { id: 17, file: 'puppy-scams.json', emoji: '🐶', xp: 100 },
  { id: 18, file: 'recovery-scams.json', emoji: '🔄', xp: 150 },
  { id: 19, file: 'payment-redirection-invoice-scams.json', emoji: '⚠️', xp: 150 },
  { id: 20, file: 'medicare-centrelink-scams.json', emoji: '🏥', xp: 150 },
  { id: 21, file: 'mygov-scams.json', emoji: '🏛️', xp: 150 },
  { id: 22, file: 'general-scam-red-flags.json', emoji: '🚩', xp: 100 },
  { id: 23, file: 'stop-check-protect.json', emoji: '🛡️', xp: 100 }
]

export async function getLessonData(id) {
  try {
    const metadata = lessonMetadata.find(l => l.id === parseInt(id))
    if (!metadata) return null

    const response = await fetch(`/lessons/${metadata.file}`)
    const data = await response.json()
    
    return {
      ...metadata,
      ...data
    }
  } catch (error) {
    console.error('Error loading lesson:', error)
    return null
  }
}