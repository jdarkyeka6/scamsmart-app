'use client'
import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { supabase } from '../../../lib/supabase'
import MiboChat from '../../components/MiboChat'
import { parseLessonId } from '../../lib/sections'

export default function Lesson() {
  const router = useRouter()
  const params = useParams()
  const lessonId = params.id // Format: "1.1", "1.2", etc.

  const [user, setUser] = useState(null)
  const [lessonData, setLessonData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [lessonComplete, setLessonComplete] = useState(false)
  const [showMiboChat, setShowMiboChat] = useState(false)
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    checkUser()
    loadLesson()
  }, [lessonId])

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/signin')
      return
    }
    setUser(user)
  }

  const loadLesson = async () => {
    try {
      const { section, lesson } = parseLessonId(lessonId)
      
      // Map section IDs to JSON files
      const sectionFiles = {
        1: 'phishing-scams.json',
        2: 'delivery-parcel-scams.json',
        3: 'romance-scams.json',
        4: 'remote-access-scams.json',
        5: 'crypto-investment-scams.json',
        6: 'job-employment-scams.json',
        7: 'ato-mygov-tax-scams.json',
        8: 'impersonation-scams.json',
        9: 'investment-scams.json',
        10: 'charity-scams.json',
        11: 'online-buying-selling-scams.json',
        12: 'rental-scams.json',
        13: 'prize-lottery-scams.json',
        14: 'credit-card-scams.json',
        15: 'fake-invoice-scams.json',
        16: 'marketplace-postage-scams.json',
        17: 'puppy-scams.json',
        18: 'recovery-scams.json',
        19: 'payment-redirection-invoice-scams.json',
        20: 'medicare-centrelink-scams.json',
        21: 'mygov-scams.json',
        22: 'general-scam-red-flags.json',
        23: 'stop-check-protect.json'
      }

      const fileName = sectionFiles[section]
      if (!fileName) {
        setLoading(false)
        return
      }

      const response = await fetch(`/lessons/${fileName}`)
      const data = await response.json()
      
      // Generate questions based on lesson type
      const generatedQuestions = generateLessonQuestions(data, lesson)
      
      setLessonData(data)
      setQuestions(generatedQuestions)
      setLoading(false)
    } catch (error) {
      console.error('Error loading lesson:', error)
      setLoading(false)
    }
  }

  const generateLessonQuestions = (data, lessonNum) => {
    const baseQuiz = data.quick_quiz || []
    
    switch(lessonNum) {
      case 1: // Introduction + Quiz (5 questions)
        return [
          {
            type: 'info',
            title: 'Welcome to this lesson!',
            content: data.summary,
            details: data.how_it_works
          },
          ...baseQuiz,
          {
            q: `What is the main goal of ${data.title.toLowerCase()}?`,
            choices: [
              'To steal your money or personal information',
              'To provide you with helpful services',
              'To protect you from other scams',
              'To give you free money'
            ],
            answer_index: 0,
            explain: `${data.title} are designed to steal your money, personal information, or both.`
          },
          {
            q: 'What should you do if something feels suspicious?',
            choices: [
              'Trust your instincts and verify before taking action',
              'Ignore it completely',
              'Click all links to investigate',
              'Share it with everyone you know'
            ],
            answer_index: 0,
            explain: 'Always trust your instincts! If something feels off, stop and verify through official channels.'
          },
          {
            q: 'Where should you go to verify if a message is legitimate?',
            choices: [
              'Contact the organization directly using official contact details you find yourself',
              'Click the link in the suspicious message',
              'Reply to the message and ask',
              'Search for the phone number they provided'
            ],
            answer_index: 0,
            explain: 'Never use contact details from a suspicious message. Always look up official contact information yourself.'
          }
        ]
      
      case 2: // Spot the Red Flags (5 questions)
        const redFlagQuestions = data.warning_signs.slice(0, 5).map((flag, index) => ({
          q: 'Which of these is a red flag you should watch out for?',
          choices: [
            flag,
            'Professional appearance and branding',
            'Clear contact information provided',
            'No pressure to act immediately'
          ],
          answer_index: 0,
          explain: `Correct! "${flag}" is a major warning sign. Always be cautious when you see this.`
        }))
        
        // If less than 5 warning signs, add general questions
        while (redFlagQuestions.length < 5) {
          redFlagQuestions.push({
            q: 'What is a common tactic used by scammers?',
            choices: [
              'Creating a sense of urgency to pressure you',
              'Giving you plenty of time to think',
              'Providing verified credentials',
              'Encouraging you to verify independently'
            ],
            answer_index: 0,
            explain: 'Scammers often create urgency to prevent you from thinking clearly and verifying their claims.'
          })
        }
        
        return redFlagQuestions
      
      case 3: // What Should You Do? (5 questions)
        const actionQuestions = data.what_to_do.map((action, index) => ({
          q: `If you encounter this scam, what should you do?`,
          choices: [
            action,
            'Panic and act immediately',
            'Click the link to investigate',
            'Share your personal information to verify'
          ],
          answer_index: 0,
          explain: `Correct! ${action}`
        }))
        
        // Add general safety questions if needed
        while (actionQuestions.length < 5) {
          actionQuestions.push({
            q: 'What is the safest approach when you receive a suspicious message?',
            choices: [
              'Stop, verify through official channels, and protect your information',
              'Click everything to see if it\'s real',
              'Reply immediately with your details',
              'Forward it without warning others'
            ],
            answer_index: 0,
            explain: 'Always follow the "Stop, Check, Protect" approach when dealing with suspicious messages.'
          })
        }
        
        return actionQuestions.slice(0, 5)
      
      case 4: // How It Works (5 questions)
        return [
          {
            type: 'info',
            title: 'How This Scam Works',
            content: 'Understanding the tactics scammers use:',
            details: data.how_it_works
          },
          {
            q: 'What is the first thing scammers typically do?',
            choices: [
              'Try to gain your trust or create urgency',
              'Ask you to verify their identity',
              'Give you time to think it over',
              'Provide proof of legitimacy'
            ],
            answer_index: 0,
            explain: 'Scammers start by either building trust quickly or creating a sense of urgency to prevent you from thinking clearly.'
          },
          ...baseQuiz,
          {
            q: 'Why do scammers use fear or urgency tactics?',
            choices: [
              'To prevent you from verifying their claims',
              'To help you make better decisions',
              'To give you time to research',
              'To encourage you to seek advice'
            ],
            answer_index: 0,
            explain: 'Fear and urgency prevent clear thinking. Scammers know that rushed decisions lead to mistakes.'
          },
          {
            q: 'What should you remember about how scammers operate?',
            choices: [
              'They use psychological tricks to manipulate you',
              'They always tell the truth',
              'They want you to verify everything',
              'They prefer you to take your time'
            ],
            answer_index: 0,
            explain: 'Scammers are experts at psychological manipulation. Understanding their tactics helps you resist them.'
          }
        ]
      
      case 5: // Final Challenge (5 questions)
        return [
          ...baseQuiz,
          {
            q: `Based on everything you've learned, what's the best defense against ${data.title.toLowerCase()}?`,
            choices: [
              'Knowledge, vigilance, and verification',
              'Trusting everyone',
              'Acting quickly on all messages',
              'Never using online services'
            ],
            answer_index: 0,
            explain: 'The best defense is being informed, staying alert, and always verifying before you trust or act.'
          },
          {
            q: 'If you think you\'ve been scammed, what should you do?',
            choices: [
              'Report it immediately and protect your accounts',
              'Keep it to yourself',
              'Pay more money to fix it',
              'Delete all evidence'
            ],
            answer_index: 0,
            explain: 'Act quickly! Report to authorities, alert your bank, change passwords, and warn others.'
          },
          {
            q: 'How can you help others avoid scams?',
            choices: [
              'Share what you\'ve learned and warn them about red flags',
              'Keep your knowledge to yourself',
              'Tell them scams don\'t exist',
              'Encourage them to click suspicious links'
            ],
            answer_index: 0,
            explain: 'Sharing knowledge is powerful! Help protect your friends and family by teaching them what you\'ve learned.'
          },
          {
            q: 'What is the most important lesson from this section?',
            choices: [
              'Stop, check, and protect - always verify before you trust',
              'Trust all messages you receive',
              'Speed is more important than safety',
              'Scams are too rare to worry about'
            ],
            answer_index: 0,
            explain: 'Remember: Stop (don\'t rush), Check (verify independently), Protect (your information and money)!'
          }
        ]
      
      default:
        return baseQuiz
    }
  }

  const handleAnswer = (answerIndex) => {
    const currentQ = questions[currentQuestion]
    const isCorrect = answerIndex === currentQ.answer_index
    
    setSelectedAnswer(answerIndex)
    setShowExplanation(true)
    
    if (isCorrect) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setLessonComplete(true)
    }
  }

  const finishLesson = async () => {
    const totalQuestions = questions.filter(q => q.type !== 'info').length
    const percentage = Math.round((score / totalQuestions) * 100)
    const baseXP = 50 // Each sub-lesson gives 50 XP
    const earnedXP = percentage >= 70 ? baseXP : Math.round(baseXP * 0.5)

    try {
      await supabase
        .from('lesson_completions')
        .upsert({
          user_id: user.id,
          lesson_id: lessonId,
          score: score,
          total_questions: totalQuestions,
          xp_earned: earnedXP
        }, {
          onConflict: 'user_id,lesson_id'
        })

      let { data: progress } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .single()

      if (!progress) {
        await supabase
          .from('user_progress')
          .insert({
            user_id: user.id,
            total_xp: earnedXP,
            lessons_completed: 1,
            streak_count: 1,
            last_lesson_date: new Date().toISOString().split('T')[0],
            email: user.email
          })
      } else {
        const today = new Date().toISOString().split('T')[0]
        const lastLessonDate = progress.last_lesson_date
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        const yesterdayStr = yesterday.toISOString().split('T')[0]

        let newStreak = progress.streak_count || 0

        if (lastLessonDate === yesterdayStr) {
          newStreak = newStreak + 1
        } else if (lastLessonDate !== today) {
          newStreak = 1
        }

        await supabase
          .from('user_progress')
          .update({
            total_xp: (progress.total_xp || 0) + earnedXP,
            lessons_completed: (progress.lessons_completed || 0) + 1,
            streak_count: newStreak,
            last_lesson_date: today,
            updated_at: new Date().toISOString()
          })
          .eq('user_id', user.id)
      }

      router.push('/dashboard')
    } catch (error) {
      console.error('Error saving progress:', error)
      router.push('/dashboard')
    }
  }

  if (loading || !lessonData || questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading lesson...</div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]
  const totalQuestions = questions.length
  const { section, lesson } = parseLessonId(lessonId)

  const lessonTitles = {
    1: 'Introduction',
    2: 'Spot the Red Flags',
    3: 'What Should You Do?',
    4: 'How It Works',
    5: 'Final Challenge'
  }

  if (lessonComplete) {
    const quizQuestions = questions.filter(q => q.type !== 'info').length
    const percentage = Math.round((score / quizQuestions) * 100)
    const baseXP = 50
    const earnedXP = percentage >= 70 ? baseXP : Math.round(baseXP * 0.5)

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">{percentage >= 70 ? '🎉' : '💪'}</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {percentage >= 70 ? 'Lesson Complete!' : 'Good Try!'}
          </h2>
          <p className="text-gray-600 mb-2">
            Lesson {lessonId}: {lessonTitles[lesson]}
          </p>
          <p className="text-gray-600 mb-6">
            You scored {score} out of {quizQuestions} ({percentage}%)
          </p>
          
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4 mb-6">
            <div className="text-4xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-yellow-600">+{earnedXP} XP</div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6 text-left">
            <p className="text-sm text-blue-800">
              <strong>Mibo says:</strong> {percentage >= 70 
                ? "Great job! You're getting really good at spotting these scams!" 
                : "Don't worry, practice makes perfect! Try the lesson again to improve your score."}
            </p>
          </div>

          <div className="space-y-3">
            <button 
              onClick={() => {
                setCurrentQuestion(0)
                setScore(0)
                setSelectedAnswer(null)
                setShowExplanation(false)
                setLessonComplete(false)
              }}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700"
            >
              🔄 Review Lesson
            </button>

            <button 
              onClick={finishLesson}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Info screen (non-quiz)
  if (currentQ.type === 'info') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => router.push('/dashboard')}
                className="text-gray-600 hover:text-gray-900"
              >
                ← Back
              </button>
              <h1 className="text-xl font-bold text-gray-900">
                Lesson {lessonId}: {lessonTitles[lesson]}
              </h1>
            </div>
            <div className="text-sm text-gray-600">
              Step {currentQuestion + 1} of {totalQuestions}
            </div>
          </div>
          <div className="w-full bg-gray-200 h-2">
            <div 
              className="bg-blue-600 h-2 transition-all"
              style={{width: `${((currentQuestion + 1) / totalQuestions) * 100}%`}}
            ></div>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{currentQ.title}</h2>
              <p className="text-xl text-gray-700 mb-6">{currentQ.content}</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
              <ul className="space-y-3">
                {currentQ.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-gray-800">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={nextQuestion}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Continue →
            </button>
          </div>
        </main>

        {showMiboChat && (
          <MiboChat 
            context={`Lesson ${lessonId}: ${lessonData.title}. ${lessonData.summary}`}
            onClose={() => setShowMiboChat(false)}
          />
        )}
      </div>
    )
  }

  // Quiz question
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => router.push('/dashboard')}
              className="text-gray-600 hover:text-gray-900"
            >
              ← Back
            </button>
            <h1 className="text-xl font-bold text-gray-900">
              Lesson {lessonId}: {lessonTitles[lesson]}
            </h1>
          </div>
          <div className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {totalQuestions}
          </div>
        </div>
        <div className="w-full bg-gray-200 h-2">
          <div 
            className="bg-blue-600 h-2 transition-all"
            style={{width: `${((currentQuestion + 1) / totalQuestions) * 100}%`}}
          ></div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex items-start gap-4">
          <img src="/logo.png" alt="Mibo" className="w-12 h-12" />
          <div className="flex-1">
            <p className="text-gray-700">
              {currentQuestion === 0 
                ? `Let's learn about ${lessonData.title}!`
                : "Keep going, you're doing great!"}
            </p>
          </div>
          <button
            onClick={() => setShowMiboChat(true)}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700"
          >
            Ask Mibo 💬
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {currentQ.q}
          </h2>

          {currentQ.statement && (
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-6">
              <p className="text-gray-800 font-medium">{currentQ.statement}</p>
            </div>
          )}

          <div className="space-y-3 mb-6">
            {currentQ.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => !showExplanation && handleAnswer(index)}
                disabled={showExplanation}
                className={`w-full p-4 rounded-lg text-left border-2 transition-all ${
                  showExplanation
                    ? index === currentQ.answer_index
                      ? 'bg-green-50 border-green-300 text-green-900'
                      : index === selectedAnswer
                        ? 'bg-red-50 border-red-300 text-red-900'
                        : 'bg-gray-50 border-gray-200 text-gray-500'
                    : 'bg-white border-gray-300 hover:border-blue-500 hover:bg-blue-50 text-gray-900'
                }`}
              >
                <span className="font-semibold mr-2">{String.fromCharCode(65 + index)}.</span>
                {choice}
                {showExplanation && index === currentQ.answer_index && <span className="float-right">✓</span>}
                {showExplanation && index === selectedAnswer && index !== currentQ.answer_index && <span className="float-right">✗</span>}
              </button>
            ))}
          </div>

          {showExplanation && (
            <div>
              <div className={`p-4 rounded-lg mb-4 ${
                selectedAnswer === currentQ.answer_index
                  ? 'bg-green-50 border-2 border-green-300'
                  : 'bg-red-50 border-2 border-red-300'
              }`}>
                <p className="font-bold mb-2 text-gray-900">
                  {selectedAnswer === currentQ.answer_index ? '✓ Correct!' : '✗ Incorrect'}
                </p>
                <p className="text-gray-700">{currentQ.explain}</p>
              </div>

              <button 
                onClick={nextQuestion}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                {currentQuestion + 1 < totalQuestions ? 'Next Question →' : 'Finish Lesson'}
              </button>
            </div>
          )}
        </div>
      </main>

      {showMiboChat && (
        <MiboChat 
          context={`Lesson ${lessonId}: ${lessonData.title}. ${lessonData.summary}`}
          onClose={() => setShowMiboChat(false)}
        />
      )}
    </div>
  )
}