'use client';
import { useRouter } from 'next/navigation';

export default function Privacy() {
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
        <h1 className="text-4xl font-black text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last Updated: January 10, 2026</p>

        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 prose prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-6">
            Welcome to ScamSmart. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3">2.1 Information You Provide</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>Account Information:</strong> Email address, username/display name, password (encrypted)</li>
            <li><strong>Profile Information:</strong> Avatar customization choices, selected badges</li>
            <li><strong>Feedback:</strong> Ratings and written feedback you submit</li>
            <li><strong>Communication:</strong> Messages you send through our contact forms or support channels</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-3">2.2 Automatically Collected Information</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>Usage Data:</strong> Lessons completed, XP earned, streak count, time spent on platform</li>
            <li><strong>Device Information:</strong> IP address, browser type, operating system, device type</li>
            <li><strong>Cookies:</strong> Session cookies for authentication, analytics cookies for usage statistics</li>
            <li><strong>Log Data:</strong> Access times, pages viewed, errors encountered</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-3">2.3 Third-Party Services</h3>
          <p className="text-gray-700 mb-4">We use the following third-party services that may collect information:</p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>Supabase:</strong> Database and authentication (stores user data)</li>
            <li><strong>Anthropic Claude:</strong> AI chat assistant (chat messages are processed but not stored long-term)</li>
            <li><strong>Vercel:</strong> Hosting and deployment (server logs)</li>
            <li><strong>Google AdSense:</strong> Advertising (cookies and tracking)</li>
            <li><strong>Analytics Services:</strong> Usage statistics and performance monitoring</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">We use the collected information for:</p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Providing and maintaining the Service</li>
            <li>Managing your account and authentication</li>
            <li>Tracking your learning progress and achievements</li>
            <li>Processing Premium subscriptions and payments</li>
            <li>Sending important service updates and notifications</li>
            <li>Responding to your feedback and support requests</li>
            <li>Improving our Service through analytics</li>
            <li>Displaying relevant advertisements</li>
            <li>Detecting and preventing fraud or abuse</li>
            <li>Complying with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
          <p className="text-gray-700 mb-4">We do NOT sell your personal information. We may share your information with:</p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>Service Providers:</strong> Supabase, Anthropic, Vercel, payment processors, advertising networks</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            <li><strong>With Your Consent:</strong> When you explicitly agree to share information</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Publicly Visible Information</h2>
          <p className="text-gray-700 mb-4">The following information is visible to other users:</p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Your display name/username</li>
            <li>Your avatar (custom design)</li>
            <li>Selected badges (up to 3)</li>
            <li>Leaderboard rankings (XP, lessons completed, streaks)</li>
            <li>Achievement certificates you choose to share</li>
          </ul>
          <p className="text-gray-700 mb-6">
            Your email address is NEVER publicly visible.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
          <p className="text-gray-700 mb-4">We use cookies and similar tracking technologies:</p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>Essential Cookies:</strong> Required for authentication and core functionality</li>
            <li><strong>Analytics Cookies:</strong> To understand how users interact with the Service</li>
            <li><strong>Advertising Cookies:</strong> From Google AdSense for personalized ads</li>
          </ul>
          <p className="text-gray-700 mb-6">
            You can control cookies through your browser settings, but disabling essential cookies may affect functionality.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Security</h2>
          <p className="text-gray-700 mb-6">
            We implement industry-standard security measures including encryption, secure servers, and access controls. However, no method of transmission over the internet is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
          <p className="text-gray-700 mb-6">
            We retain your personal information for as long as your account is active or as needed to provide you services. If you delete your account, we will delete or anonymize your personal data within 30 days, except where we are required to retain it for legal purposes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Your Rights and Choices</h2>
          <p className="text-gray-700 mb-4">Depending on your location, you may have the following rights:</p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Correction:</strong> Update or correct your information</li>
            <li><strong>Deletion:</strong> Request deletion of your account and data</li>
            <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails</li>
            <li><strong>Data Portability:</strong> Receive your data in a structured format</li>
            <li><strong>Object:</strong> Object to certain processing of your data</li>
          </ul>
          <p className="text-gray-700 mb-6">
            To exercise these rights, contact us at jake.dryka@gmail.com
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
          <p className="text-gray-700 mb-6">
            ScamSmart is designed to be accessible to users of all ages, including minors. We do not knowingly collect personal information from children under 13 without verifiable parental consent. If you believe a child under 13 has provided us with personal information, please contact us immediately so we can delete it.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. International Data Transfers</h2>
          <p className="text-gray-700 mb-6">
            Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. By using our Service, you consent to such transfers.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Third-Party Links</h2>
          <p className="text-gray-700 mb-6">
            Our Service may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">13. California Privacy Rights (CCPA)</h2>
          <p className="text-gray-700 mb-6">
            If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete your information, and the right to opt-out of the sale of your personal information (we do not sell personal information).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">14. European Privacy Rights (GDPR)</h2>
          <p className="text-gray-700 mb-6">
            If you are in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR), including the right to access, rectify, erase, restrict processing, data portability, and to object to processing of your personal data.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Changes to Privacy Policy</h2>
          <p className="text-gray-700 mb-6">
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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