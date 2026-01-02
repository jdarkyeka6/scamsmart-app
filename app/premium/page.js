export default function Premium() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <header className="bg-white shadow-sm mb-8">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <a href="/" className="text-blue-600 hover:text-blue-700">← Back to Home</a>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Unlock Premium Mibo</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">Get unlimited AI protection</p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Free</h3>
            <p className="text-3xl font-bold text-gray-900 mb-6">$0<span className="text-lg text-gray-600">/month</span></p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-gray-600">5 Mibo questions per day</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-gray-600">Daily scam lessons</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-gray-600">Basic streak tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span className="text-gray-400">Ads included</span>
              </li>
            </ul>
            <button className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold">
              Current Plan
            </button>
          </div>

          {/* Premium Tier */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-xl p-8 text-white">
            <div className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-4">Premium</h3>
            <p className="text-3xl font-bold mb-2">$5<span className="text-lg opacity-90">/month</span></p>
            <p className="text-sm opacity-90 mb-6">or $50/year (save $10)</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">✓</span>
                <span>Unlimited Mibo chat</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">✓</span>
                <span>Ad-free experience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">✓</span>
                <span>Real-time scam analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">✓</span>
                <span>Personalized risk assessment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">✓</span>
                <span>Early scam alerts (48hrs early)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">✓</span>
                <span>Certificates & badges</span>
              </li>
            </ul>
            <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50">
              Start 7-Day Free Trial
            </button>
            <p className="text-xs opacity-75 mt-3 text-center">No credit card required</p>
          </div>
        </div>
      </div>
    </div>
  );
}