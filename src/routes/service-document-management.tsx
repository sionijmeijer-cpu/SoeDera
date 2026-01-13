import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import { FileText, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/service-document-management')({
  component: DocumentManagementPage,
})

function DocumentManagementPage() {
  SEOHead({
    title: 'Document Management Services - Technical Documentation Solutions',
    description: 'Professional document management services for energy companies. ISO 9001 compliant systems, workflow optimization, and technical documentation control.',
    keywords: 'document management services, technical documentation, ISO 9001, document control, energy sector documentation',
    canonicalUrl: 'https://www.soedera.eu/service-document-management'
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-50 to-sky-100 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 text-sky-600 rounded-full text-sm font-medium mb-6">
                <FileText size={16} />
                Document Management
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Streamline Your Technical Documentation
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Bring structure to chaotic documentation with organized, accessible, and compliant systems that save time and reduce operational risks.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600 transition-all hover:scale-105 shadow-lg shadow-sky-500/25"
              >
                Get Started <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl shadow-2xl flex items-center justify-center">
                <FileText className="text-white/30" size={180} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Documentation Challenges We Solve
            </h2>
            <p className="text-lg text-slate-600">
              Energy companies face significant documentation challenges that impact operations, compliance, and efficiency.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Scattered Information</h3>
              <p className="text-slate-600">
                Documents stored across multiple systems, email threads, and physical locations make it impossible to find critical information quickly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Version Control Issues</h3>
              <p className="text-slate-600">
                Multiple document versions lead to confusion, errors, and compliance risks when teams work with outdated information.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Compliance Gaps</h3>
              <p className="text-slate-600">
                Missing, incomplete, or outdated documentation creates audit risks and regulatory compliance challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Our Document Management Approach
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="text-sky-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Document Audit & Assessment</h3>
                <p className="text-slate-600">
                  Structured review of existing documentation to identify gaps and opportunities.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="text-sky-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Structured Filing Systems</h3>
                <p className="text-slate-600">
                  Implementation of logical folder structures, naming conventions, and metadata standards.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="text-sky-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Version Control</h3>
                <p className="text-slate-600">
                  Clear versioning protocols ensuring teams always work with the latest documentation.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="text-sky-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Digital Transformation</h3>
                <p className="text-slate-600">
                  Digitization of paper records into modern, searchable document management platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden" style={{
        backgroundImage: 'linear-gradient(to right, rgba(14, 116, 188, 0.55), rgba(29, 78, 216, 0.55)), url(https://i.imgur.com/BrTo5LL.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundBlendMode: 'overlay',
        WebkitBackgroundSize: 'cover',
        filter: 'blur(6px)'
      }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Let&apos;s discuss how we can help optimize your business processes
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-600 rounded-lg font-bold hover:bg-sky-50 transition-all hover:scale-105 shadow-xl"
          >
            Get in Touch <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
