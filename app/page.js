export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="ScamSmart Logo" className="w-12 h-12" />
            <h1 className="text-2xl font-bold text-gray-900">ScamSmart</h1>
          </div>
          <nav className="flex gap-6">
            <a href="/browse" className="text-gray-600 hover:text-blue-600">Browse</a>
            <a href="/learn" className="text-gray-600 hover:text-blue-600">Learn</a>
            <a href="/premium" className="text-gray-600 hover:text-blue-600">Premium</a>
            <a href="/signin">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Sign In
              </button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Learn Scam Detection with AI
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Meet Mibo, your personal AI companion who helps you spot scams, build daily streaks, and stay protected.
          </p>
          <a href="/signin">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 shadow-lg">
              Start Learning Free
            </button>
          </a>
        </div>

        {/* Mibo Introduction */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto mb-16">
          <div className="flex items-start gap-6">
            <img src="/logo.png" alt="Mibo" className="w-24 h-24 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Meet Mibo, Your AI Scam Detective</h3>
              <p className="text-gray-600 mb-4">
                I'm your personal AI bodyguard against scams! I'll teach you through interactive lessons, 
                analyze suspicious messages in real-time, and help you build a daily learning streak. 
                Think of me as your cybersecurity expert in your pocket - available 24/7!
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-sm text-blue-800">
                  💡 <strong>Mibo says:</strong> Just 5 minutes a day with me can make you scam-proof!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Learning</h3>
            <p className="text-gray-600">
              Chat with Mibo during lessons. Ask questions, get instant explanations, and learn at your own pace.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Real-Time Analysis</h3>
            <p className="text-gray-600">
              Forward suspicious emails or texts to Mibo. Get instant scam probability scores and red flag alerts.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Build Your Streak</h3>
            <p className="text-gray-600">
              Daily lessons keep you sharp. Mibo celebrates your progress and keeps you motivated.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to outsmart scammers with AI?</h3>
          <p className="text-xl mb-8 opacity-90">Join thousands learning with Mibo every day</p>
          <a href="/signin">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 shadow-lg">
              Start Free with Mibo
            </button>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 ScamSmart. Your AI Bodyguard Against Scams.</p>
        </div>
      </footer>
    </div>
  );
}