'use client';
import { useRouter } from 'next/navigation';

export default function Terms() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="ScamSmart" className="w-12 h-12 drop-shadow-md" />
              <div>
                <h1 className="text-2xl font-black text-gray-900">ScamSmart</h1>
                <p className="text-xs text-gray-500">Think Before You Click</p>
              </div>
            </div>
            <button 
              onClick={() => router.push('/')} 
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-black text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last Updated: January 10, 2026</p>

        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 prose prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-6">
            By accessing and using ScamSmart ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use the Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
          <p className="text-gray-700 mb-4">
            ScamSmart is an educational platform designed to help users learn to identify and avoid online scams. The Service includes:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Interactive scam detection lessons</li>
            <li>AI-powered chat assistant (Mibo)</li>
            <li>Progress tracking and gamification features</li>
            <li>Premium subscription features (optional)</li>
            <li>Community leaderboards and achievements</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
          <p className="text-gray-700 mb-4">
            To access certain features of the Service, you must create an account. You agree to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Provide accurate, current, and complete information during registration</li>
            <li>Maintain and update your account information</li>
            <li>Maintain the security of your password and account</li>
            <li>Accept responsibility for all activities under your account</li>
            <li>Notify us immediately of any unauthorized access</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Premium Subscription</h2>
          <p className="text-gray-700 mb-4">
            <strong>Free Trial:</strong> We may offer free Premium trials through our feedback program. These trials are provided at our discretion and may be modified or discontinued at any time.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Paid Subscription:</strong> Premium subscriptions are billed monthly at $5/month unless otherwise stated. Subscriptions automatically renew unless cancelled before the renewal date.
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Cancellation:</strong> You may cancel your Premium subscription at any time through your account settings. Cancellations take effect at the end of the current billing period. No refunds are provided for partial months.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Conduct</h2>
          <p className="text-gray-700 mb-4">
            You agree NOT to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Use the Service for any illegal purpose</li>
            <li>Attempt to gain unauthorized access to any part of the Service</li>
            <li>Interfere with or disrupt the Service or servers</li>
            <li>Create multiple accounts to manipulate leaderboards or XP</li>
            <li>Share or sell your account credentials</li>
            <li>Use automated tools or bots to access the Service</li>
            <li>Upload malicious code or malware</li>
            <li>Harass, abuse, or harm other users</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
          <p className="text-gray-700 mb-6">
            All content on ScamSmart, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, is the property of ScamSmart or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, modify, or create derivative works without explicit written permission.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Educational Content Disclaimer</h2>
          <p className="text-gray-700 mb-6">
            <strong>Important:</strong> ScamSmart provides educational content about scam detection. While we strive for accuracy, the information provided is for educational purposes only and should not be considered as professional security advice, legal advice, or financial advice. Users should always exercise their own judgment and consult with professionals when dealing with potential scams. ScamSmart is not liable for any losses or damages resulting from scams encountered by users.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. AI Assistant (Mibo)</h2>
          <p className="text-gray-700 mb-6">
            Our AI chat assistant, Mibo, is powered by third-party AI technology (Anthropic Claude). While Mibo aims to provide helpful information about scam detection, responses may not always be accurate or complete. Mibo's advice should be used as educational guidance only and not as definitive security recommendations.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. User-Generated Content</h2>
          <p className="text-gray-700 mb-6">
            By submitting feedback, comments, or other content to ScamSmart, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content for the purpose of operating and improving the Service. You retain ownership of your content.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Refund Policy</h2>
          <p className="text-gray-700 mb-6">
            Due to the digital nature of our Service and immediate access to Premium features upon subscription, we generally do not offer refunds. However, we will consider refund requests on a case-by-case basis for exceptional circumstances. Contact us at jake.dryka@gmail.com to discuss refund requests.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
          <p className="text-gray-700 mb-6">
            We reserve the right to terminate or suspend your account and access to the Service at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties, or for any other reason.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Limitation of Liability</h2>
          <p className="text-gray-700 mb-6">
            ScamSmart and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from: (a) your access to or use of or inability to access or use the Service; (b) any conduct or content of any third party on the Service; (c) any content obtained from the Service; or (d) unauthorized access, use, or alteration of your transmissions or content.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
          <p className="text-gray-700 mb-6">
            We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the new Terms of Service on this page and updating the "Last Updated" date. Your continued use of the Service after such modifications constitutes your acceptance of the updated terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Governing Law</h2>
          <p className="text-gray-700 mb-6">
            These Terms shall be governed by and construed in accordance with the laws of Australia, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> jake.dryka@gmail.com<br />
            <strong>Website:</strong> https://scamsmart.click
          </p>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 ScamSmart. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <button onClick={() => router.push('/terms')} className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </button>
            <button onClick={() => router.push('/privacy')} className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}