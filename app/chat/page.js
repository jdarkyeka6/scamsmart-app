'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase';
import DarkModeToggle from '../components/DarkModeToggle';
import { sendChatMessage, canSendMessage } from '../lib/chatOptimized';

export default function Chat() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [messagesRemaining, setMessagesRemaining] = useState(10);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      router.push('/signin');
      return;
    }

    setUser(user);
    await loadProgress(user.id);
  };

  const loadProgress = async (userId) => {
    try {
      const { data } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId)
        .single();

      setProgress(data);
      
      // Check if need to reset daily count
      const lastChatDate = data?.last_chat_date ? new Date(data.last_chat_date) : null;
      const today = new Date();
      
      if (!lastChatDate || lastChatDate.toDateString() !== today.toDateString()) {
        // Reset count for new day
        await supabase
          .from('user_progress')
          .update({ 
            daily_chat_messages: 0,
            last_chat_date: today.toISOString()
          })
          .eq('user_id', userId);
        
        data.daily_chat_messages = 0;
      }

      const status = canSendMessage(data);
      setMessagesRemaining(status.remaining);
      
      setPageLoading(false);
    } catch (error) {
      console.error('Error loading progress:', error);
      setPageLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim() || loading) return;

    // Check rate limit
    const status = canSendMessage(progress);
    if (false) {
      alert(`You've reached your daily limit of ${status.limit} messages. ${
        progress?.is_premium 
          ? 'Please try again tomorrow!' 
          : 'Upgrade to Premium for 50 messages/day!'
      }`);
      return;
    }

    const userMessage = { role: 'user', content: input.trim() };
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const result = await sendChatMessage([...messages, userMessage], progress);

      if (result.error === 'RATE_LIMIT') {
        setMessages([...messages, userMessage, {
          role: 'assistant',
          content: `⚠️ You've reached your daily limit of ${result.limit} messages. ${
            result.isPremium 
              ? 'Please try again tomorrow!' 
              : 'Upgrade to Premium for 50 messages/day!'
          }`
        }]);
        setLoading(false);
        return;
      }

      if (result.error) {
        setMessages([...messages, userMessage, {
          role: 'assistant',
          content: '⚠️ Sorry, I encountered an error. Please try again or continue with lessons!'
        }]);
        setLoading(false);
        return;
      }

      // Success - add response
      setMessages([...messages, userMessage, {
        role: 'assistant',
        content: result.content
      }]);

      // Update message count
      const newCount = (progress?.daily_chat_messages || 0) + 1;
      await supabase
        .from('user_progress')
        .update({ 
          daily_chat_messages: newCount,
          last_chat_date: new Date().toISOString()
        })
        .eq('user_id', user.id);

      setMessagesRemaining(messagesRemaining - 1);
      setProgress({ ...progress, daily_chat_messages: newCount });

    } catch (error) {
      console.error('Send message error:', error);
      setMessages([...messages, userMessage, {
        role: 'assistant',
        content: '⚠️ Network error. Please check your connection and try again.'
      }]);
    }

    setLoading(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (pageLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Loading chat...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="ScamSmart" className="w-12 h-12 drop-shadow-md" />
              <div>
                <h1 className="text-2xl font-black text-gray-900 dark:text-white">Chat with Mibo</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Your AI Scam Detection Assistant</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Message Counter */}
              <div className="bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg">
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  💬 {messagesRemaining} messages left today
                </p>
              </div>
              
              <DarkModeToggle />
              <button 
                onClick={() => router.push('/dashboard')} 
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
              >
                Dashboard
              </button>
              <button 
                onClick={handleSignOut} 
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Messages */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-7xl mb-6">🤖</div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
              Hi! I'm Mibo! 👋
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
              Ask me anything about scam detection, cybersecurity, or how to protect yourself online!
            </p>
            
            {/* Rate Limit Warning */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4 max-w-md mx-auto mb-6">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                ⚠️ <strong>Rate Limits:</strong>
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Free: 10 messages/day • Premium: 50 messages/day
              </p>
            </div>

            {/* Quick Questions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
              {[
                "What are common phishing signs?",
                "How do I spot a fake website?",
                "What should I do if I get scammed?",
                "How can I protect my passwords?"
              ].map((question) => (
                <button
                  key={question}
                  onClick={() => setInput(question)}
                  className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-600 rounded-xl p-4 text-left transition-all"
                >
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{question}</p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] rounded-2xl p-4 ${
                  message.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700'
                }`}>
                  {message.role === 'assistant' && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🤖</span>
                      <span className="font-bold text-sm">Mibo</span>
                    </div>
                  )}
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <div className="animate-bounce">🤖</div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Mibo is thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Input Area */}
      <div className="border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          {messagesRemaining === 0 ? (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 text-center">
              <p className="text-red-600 dark:text-red-400 font-bold mb-2">
                ⚠️ Daily Message Limit Reached
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {progress?.is_premium 
                  ? 'Come back tomorrow for more messages!' 
                  : 'Upgrade to Premium for 50 messages/day!'}
              </p>
              {!progress?.is_premium && (
                <button
                  onClick={() => router.push('/premium-feedback')}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg"
                >
                  Get Premium FREE →
                </button>
              )}
            </div>
          ) : (
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask Mibo anything about scam detection..."
                disabled={loading}
                className="flex-1 px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 dark:text-white disabled:opacity-50"
              />
              <button
                onClick={handleSendMessage}
                disabled={loading || !input.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold px-6 py-3 rounded-xl transition-colors disabled:cursor-not-allowed"
              >
                {loading ? '⏳' : '📤'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
