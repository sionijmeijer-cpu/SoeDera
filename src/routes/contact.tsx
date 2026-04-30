import { createFileRoute } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import { useState } from 'react'
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  SEOHead({
    title: 'Contact SøDera | Get in Touch',
    description:
      'Get in touch with SøDera for expert consulting on ISO/IEC 81346, Reference Designation Systems, document management, and asset information. Based in Portugal, serving Europe.',
    keywords:
      'contact SøDera, RDS consultation, ISO/IEC 81346 consulting, document management help, energy consulting Europe',
    canonicalUrl: 'https://www.soedera.eu/contact',
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', company: '', message: '' })
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please email us directly at info@soedera.eu.')
    }
  }

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section
        className="relative py-32 overflow-hidden"
        style={{
          backgroundImage: 'url(https://i.imgur.com/lCNBEPI.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-4">Get in touch</p>
            <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Let us start a conversation
            </h1>
            <p className="text-slate-200 text-lg leading-relaxed">
              Whether you have a specific project in mind or just want to explore whether we can help, we would love to hear from you. No sales pitch, no pressure. Just an honest conversation about your situation.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* ── Contact form ── */}
            <div>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-2xl font-bold text-slate-900 mb-2">
                Send us a message
              </h2>
              <p className="text-slate-500 text-sm mb-8">
                We will get back to you within one business day.
              </p>

              {status === 'success' ? (
                <div className="bg-sky-50 border border-sky-200 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={32} className="text-sky-600" />
                  </div>
                  <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl font-bold text-slate-900 mb-2">
                    Message received
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Thank you for reaching out. We have received your message and will be in touch shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Your name <span className="text-sky-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={status === 'sending'}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all text-slate-900 placeholder:text-slate-400 disabled:opacity-60"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email address <span className="text-sky-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={status === 'sending'}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all text-slate-900 placeholder:text-slate-400 disabled:opacity-60"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      disabled={status === 'sending'}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all text-slate-900 placeholder:text-slate-400 disabled:opacity-60"
                      placeholder="Your organisation"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Message <span className="text-sky-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      disabled={status === 'sending'}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all resize-none text-slate-900 placeholder:text-slate-400 disabled:opacity-60"
                      placeholder="Tell us about your project or challenge..."
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                      <AlertCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{errorMessage}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full px-6 py-4 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* ── Right column ── */}
            <div className="space-y-6">

              {/* Contact details */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl font-bold text-slate-900 mb-6">
                  Contact information
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-sky-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-sky-100">
                      <Mail size={15} className="text-sky-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Email</p>
                      <a href="mailto:info@soedera.eu" className="text-slate-800 font-semibold hover:text-sky-600 transition-colors">
                        info@soedera.eu
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-sky-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-sky-100">
                      <MapPin size={15} className="text-sky-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Based in</p>
                      <p className="text-slate-800 font-semibold">Portugal and Denmark</p>
                      <p className="text-slate-500 text-sm">Serving clients across the globe</p>
                      <p className="text-slate-400 text-xs mt-1">Oil and gas, energy, offshore wind, power plants</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-sky-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-sky-100">
                      <Clock size={15} className="text-sky-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Response time</p>
                      <p className="text-slate-800 font-semibold">Within one business day</p>
                      <p className="text-slate-500 text-sm">Monday to Friday, 09:00 to 17:00 CET</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reach us directly */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl font-bold text-slate-900 mb-2">
                  Reach us directly
                </h3>
                <p className="text-slate-500 text-sm mb-6">
                  Prefer to email one of us directly? We are both happy to hear from you.
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:soeren.christensen@soedera.eu?subject=Enquiry via soedera.eu"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-sky-200 hover:shadow-sm transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">SC</div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm group-hover:text-sky-600 transition-colors">Søren Christensen</p>
                      <p className="text-xs text-slate-400">Co-founder & CEO · RDS and ISO/IEC 81346</p>
                    </div>
                  </a>
                  <a
                    href="mailto:sylvia.awoudu@soedera.eu?subject=Enquiry via soedera.eu"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-sky-200 hover:shadow-sm transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">SA</div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm group-hover:text-sky-600 transition-colors">Sylvia Awoudu</p>
                      <p className="text-xs text-slate-400">Co-founder & COO · Information and Document Management, Product Development</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl font-bold text-slate-900 mb-6">
                  Common questions
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      q: 'What is the typical engagement process?',
                      a: 'We start with a conversation to understand your challenge, then propose a scope and timeline. We work collaboratively with your team from day one.',
                    },
                    {
                      q: 'Do you work with organisations of all sizes?',
                      a: 'Yes. From small utilities to large transmission operators. Our approach is tailored to your organisation size and where you currently are.',
                    },
                    {
                      q: 'What if we are just starting with RDS?',
                      a: 'That is a good starting point. We have experience helping organisations from greenfield implementations through to optimising existing systems.',
                    },
                  ].map((faq) => (
                    <details key={faq.q} className="group cursor-pointer">
                      <summary className="flex items-center justify-between text-sm font-semibold text-slate-800 py-3 border-b border-slate-200 list-none">
                        {faq.q}
                        <span className="text-slate-400 group-open:rotate-180 transition-transform text-xs ml-4 flex-shrink-0">▼</span>
                      </summary>
                      <p className="text-slate-500 text-sm leading-relaxed pt-3 pb-1">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
