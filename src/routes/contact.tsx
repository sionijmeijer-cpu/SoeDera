import { createFileRoute } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Linkedin,
  CheckCircle2,
  Calendar
} from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  SEOHead({
    title: 'Contact Us - Book a Consultation',
    description: 'Get in touch with S\u00f8Dera for expert consulting on documentation, RDS (IEC 81346), and asset data management. Book a free assessment today.',
    keywords: 'contact S\u00f8Dera, RDS consultation, document management help, energy consulting Denmark',
    canonicalUrl: 'https://www.soedera.eu/contact'
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-10 sm:py-12 md:py-14 bg-gradient-to-b from-sky-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-[150px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-3 mb-6">
            Let&apos;s Start a
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-400"> Conversation</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Whether you have a specific project in mind or want to explore how we can help, 
            we would love to hear from you. Get in touch and let&apos;s discuss your needs.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-6 sm:py-8 md:py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 md:p-10 hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="bg-sky-50 border-2 border-sky-200 rounded-xl p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <CheckCircle2 size={48} className="text-sky-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Thank you!</h3>
                  <p className="text-slate-600 mb-4">
                    We&apos;ve received your message and will be in touch shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-sky-600 font-semibold hover:text-sky-700 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-sky-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-sky-500 transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-sky-500 transition-colors"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-sky-500 transition-colors resize-none"
                      placeholder="Tell us about your project or challenges..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Send size={16} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail size={20} className="text-sky-500 shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-slate-600">Email</p>
                      <a href="mailto:info@soedera.eu" className="text-slate-900 font-semibold hover:text-sky-600 transition-colors">
                        info@soedera.eu
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin size={20} className="text-sky-500 shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-slate-600">Location</p>
                      <p className="text-slate-900 font-semibold">Braga, Portugal</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock size={20} className="text-sky-500 shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-slate-600">Business Hours</p>
                      <p className="text-slate-900 font-semibold">Monday - Friday</p>
                      <p className="text-slate-900 font-semibold">09:00 - 17:00 CET</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Quick Assessments</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Ready to get started? Book one of our quick paid assessments:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 size={16} className="text-sky-500" />
                    <span className="text-sm">RDS Review Assessment (~2 weeks)</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 size={16} className="text-sky-500" />
                    <span className="text-sm">Document Management Assessment</span>
                  </li>
                </ul>
              </div>

              {/* Schedule Call */}
              <div className="bg-gradient-to-br from-sky-50 to-sky-100 border-2 border-sky-200 rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-3 mb-4">
                  <Calendar size={20} className="text-sky-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Schedule a Call</h3>
                    <p className="text-sm text-slate-600">Book a 30-minute consultation</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Prefer a direct conversation? Schedule a free 30-minute call with our team to discuss your needs.
                </p>
                <a 
                  href="https://outlook.office.com/book/AssessmentBooking1@soedera.eu/s/GDHl_HOriUOW0kXs3yLfJA2?ismsaljsauthenabled"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-all text-sm text-center block"
                >
                  Schedule Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-6 sm:py-8 md:py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">
              Have a question? Check our FAQ below or reach out directly.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'What is the typical engagement process?',
                answer: 'We start with a discovery call to understand your challenges, followed by a proposal with scope, timeline, and investment. Upon agreement, we begin with a kickoff meeting and work collaboratively with your team.'
              },
              {
                question: 'How long do projects typically take?',
                answer: 'Our quick assessments take 2 weeks. Full engagements vary based on scope, typically ranging from 2-6 months. We discuss timeline expectations during the discovery phase.'
              },
              {
                question: 'Do you work with organizations of all sizes?',
                answer: 'Yes. We work with small utilities, large transmission operators, and everything in between. Our approach is scalable to match your organization\'s size and maturity.'
              },
              {
                question: 'What if we\'re just starting with RDS?',
                answer: 'Perfect. We have experience helping organizations at all maturity levels, from greenfield implementations to optimizing existing systems. We\'ll start where you are.'
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-slate-50 border-2 border-slate-200 hover:border-sky-300 rounded-xl p-4 sm:p-6 cursor-pointer transition-all"
              >
                <summary className="flex items-center justify-between font-semibold text-slate-900">
                  {faq.question}
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-slate-600 mt-4 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
