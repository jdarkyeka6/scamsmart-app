export default function Browse() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <header className="bg-white shadow-sm mb-8">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <a href="/" className="text-blue-600 hover:text-blue-700">← Back to Home</a>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Browse Trending Scams</h1>
        <p className="text-xl text-gray-600 mb-8">Stay updated on the latest scams circulating right now.</p>
        
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="text-6xl mb-4">🚧</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon!</h2>
          <p className="text-gray-600">Mibo is building the scam database. Check back soon.</p>
        </div>
      </div>
    </div>
  );
}