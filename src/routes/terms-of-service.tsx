import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/terms-of-service')({
  component: TermsOfServicePage,
})

function TermsOfServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-blue-100">Last updated: January 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              By accessing and using the SøDera website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Description of Services</h2>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              SøDera provides professional consulting services in the energy sector, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Reference Designation System (RDS) consulting and implementation</li>
              <li>Document assessment and management</li>
              <li>IEC 81346 compliance consulting</li>
              <li>Energy sector documentation solutions</li>
              <li>Training and workshops</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Use of Website</h2>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-gray-200 mb-3">Permitted Use</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              You may use our website for lawful purposes only. You agree not to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Transmit any harmful or malicious code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the website or servers</li>
              <li>Use the website for any fraudulent or unlawful purpose</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-gray-200 mb-3 mt-6">Account Security</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              If you create an account with us, you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Intellectual Property</h2>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              All content on this website, including text, graphics, logos, images, software, and other materials, is the property of SøDera or its licensors and is protected by international copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              You may not reproduce, distribute, modify, create derivative works from, publicly display, or exploit any content from our website without our prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Service Terms and Conditions</h2>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-gray-200 mb-3">Consulting Services</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              Specific terms for consulting services will be outlined in individual service agreements. These may include:
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Scope of work and deliverables</li>
              <li>Project timelines and milestones</li>
              <li>Payment terms and fee structures</li>
              <li>Confidentiality obligations</li>
              <li>Intellectual property ownership</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-gray-200 mb-3 mt-6">Assessments</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              Assessment services are provided based on information supplied by the client. The accuracy and completeness of our assessments depend on the quality and completeness of information provided.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Payment and Fees</h2>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              Payment terms will be specified in individual service agreements. Unless otherwise stated:
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Fees are due within 30 days of invoice date</li>
              <li>Late payments may incur interest charges</li>
              <li>All fees are exclusive of applicable taxes</li>
              <li>Refund policies will be specified in service agreements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Confidentiality</h2>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              We respect the confidentiality of our clients' information. Specific confidentiality terms will be outlined in Non-Disclosure Agreements (NDAs) or service contracts. We will not disclose confidential information except:
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 mb-4 space-y-2">
              <li>As required by law</li>
              <li>With your explicit consent</li>
              <li>To our employees or contractors who need access to perform services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Limitation of Liability</h2>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              To the maximum extent permitted by law, SøDera shall not be liable for:
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Indirect, incidental, special, or consequential damages</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Damages arising from your use or inability to use our services</li>
              <li>Damages resulting from reliance on information provided</li>
            </ul>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              Our total liability for any claims arising from our services shall not exceed the fees paid by you for the specific service giving rise to the claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">9. Warranties and Disclaimers</h2>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              We strive to provide high-quality services, but our website and services are provided "as is" without warranties of any kind, either express or implied. We do not warrant that:
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Our services will meet your specific requirements</li>
              <li>Our services will be uninterrupted, timely, or error-free</li>
              <li>The results obtained from our services will be accurate or reliable</li>
              <li>Any errors in our services will be corrected</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">10. Indemnification</h2>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              You agree to indemnify, defend, and hold harmless SøDera, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Your use of our website or services</li>
              <li>Your violation of these Terms of Service</li>
              <li>Your violation of any third-party rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">11. Termination</h2>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              We reserve the right to terminate or suspend your access to our website and services at our sole discretion, without notice, for conduct that we believe:
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 mb-4 space-y-2">
              <li>Violates these Terms of Service</li>
              <li>Is harmful to other users or our business</li>
              <li>Exposes us to legal liability</li>
            </ul>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              Service agreements may be terminated according to the terms specified in individual contracts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">12. Governing Law and Jurisdiction</h2>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              These Terms of Service shall be governed by and construed in accordance with the laws of Denmark. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of Denmark.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">13. Changes to Terms</h2>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              We reserve the right to modify these Terms of Service at any time. We will notify you of any changes by posting the updated terms on this page and updating the "Last updated" date. Your continued use of our website and services after changes are posted constitutes your acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">14. Severability</h2>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              If any provision of these Terms of Service is found to be invalid or unenforceable, the remaining provisions shall continue to be valid and enforceable to the fullest extent permitted by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">15. Entire Agreement</h2>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              These Terms of Service, together with any service agreements and our Privacy Policy, constitute the entire agreement between you and SøDera regarding your use of our website and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">16. Contact Information</h2>
            <p className="text-slate-700 dark:text-gray-300 mb-4">
              If you have any questions about these Terms of Service, please contact us:
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
