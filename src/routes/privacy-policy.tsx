import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicyPage,
})

function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-100">Last updated: January 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Introduction</h2>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              SøDera ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-gray-200 mb-3">Personal Information</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Fill out contact forms</li>
              <li>Schedule assessments or consultations</li>
              <li>Subscribe to our newsletter</li>
              <li>Request information about our services</li>
            </ul>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              This information may include: name, email address, phone number, company name, and any other information you choose to provide.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-gray-200 mb-3">Automatically Collected Information</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              When you visit our website, we may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 mb-4 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Provide, operate, and maintain our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you information about our services, including updates and promotional materials</li>
              <li>Improve our website and services</li>
              <li>Analyze usage patterns and trends</li>
              <li>Detect, prevent, and address technical issues or fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 mb-4 space-y-2">
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and conducting our business</li>
              <li><strong>Legal Requirements:</strong> When required by law or to respond to legal processes</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition</li>
              <li><strong>Consent:</strong> With your explicit consent for any other purpose</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Data Security</h2>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Data Retention</h2>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Your Rights</h2>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 mb-4 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Objection:</strong> Object to the processing of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your information to another service</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
            </ul>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              To exercise these rights, please contact us at the email address provided below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences. However, disabling cookies may limit your ability to use certain features of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">9. Third-Party Links</h2>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">10. International Data Transfers</h2>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">11. Children&apos;s Privacy</h2>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">13. Contact Us</h2>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-blue-50 dark:bg-slate-800 p-6 rounded-lg">
              <p className="text-slate-900 dark:text-white font-semibold mb-2">SøDera</p>
              <p className="text-slate-700 dark:text-gray-300">Email: <a href="mailto:info@soedera.eu" className="text-blue-600 dark:text-blue-400 hover:underline">info@soedera.eu</a></p>
              <p className="text-slate-700 dark:text-gray-300">Phone: <a href="tel:+4512345678" className="text-blue-600 dark:text-blue-400 hover:underline">+45 12 34 56 78</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
