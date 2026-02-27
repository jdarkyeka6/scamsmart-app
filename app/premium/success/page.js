'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PremiumSuccess() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to learn page after 3 seconds
    setTimeout(() => {
      router.push('/learn');
    }, 3000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl border-4 border-yellow-500 p-12 text-center">
        <div className="text-9xl mb-6">🎉</div>
        <h1 className="text-6xl font-black text-gray-900 mb-4">
          Welcome to Premium!
        </h1>
        <p className="text-2xl text-gray-600 mb-8">
          You now have unlimited hearts and access to all premium features!
        </p>
        
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Premium Benefits:</h3>
          <div className="space-y-3 text-left">
            <BenefitItem text="❤️ Unlimited hearts" />
            <BenefitItem text="🎓 Exclusive advanced lessons" />
            <BenefitItem text="🤖 Priority AI chat access" />
            <BenefitItem text="📜 Downloadable certificates" />
            <BenefitItem text="🚫 Ad-free experience" />
            <BenefitItem text="⚡ Early access to new features" />
          </div>
        </div>

        <p className="text-lg text-gray-600">
          Redirecting to learning hub in 3 seconds...
        </p>
      </div>
    </div>
  );
}

function BenefitItem({ text }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xl">{text}</span>
    </div>
  );
}