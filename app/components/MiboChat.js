'use client'
import { useState } from 'react'

export default function MiboChat({ context, onClose }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Mibo 👋 Ask me anything about scams!" }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async (e) => {
    e.preventDefault()
    if (!input.trim() || loading) return

    const userMessage = input.trim()
    setInput('')
    setMessages([...messages, { role: 'user', content: userMessage }])
    setLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: userMessage,
          context: context 
        })
      })

      const data = await response.json()
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.response || data.error || 'Sorry, something went wrong!' 
      }])
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Oops! I had trouble connecting. Try again?' 
      }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-white rounded-2xl shadow-2xl border-2 border-blue-300 flex flex-col" style={{height: '500px'}}>
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Mibo" className="w-10 h-10 rounded-full bg-white p-1" />
          <div>
            <h3 className="font-bold">Chat with Mibo</h3>
            <p className="text-xs text-blue-100">Your AI scam expert</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="text-white hover:bg-blue-800 rounded-full w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-lg ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-br-none' 
                : 'bg-gray-100 text-gray-900 rounded-bl-none'
            }`}>
              <p className="text-sm">{msg.content}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-900 p-3 rounded-lg rounded-bl-none">
              <p className="text-sm">Mibo is typing...</p>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={sendMessage} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Mibo anything..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}