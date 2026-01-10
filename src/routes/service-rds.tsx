import { createFileRoute, Link } from '@tanstack/react-router'
import { Network, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/service-rds')({
  component: RDSPage,
})

function RDSPage() {
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
                <Network size={16} />
                Reference Designation Systems
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                IEC 81346 RDS Implementation
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Implement industry-proven Reference Designation Systems that provide clear, consistent identification of your assets across all systems and documentation.
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
                <Network className="text-white/30" size={180} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is RDS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              What is Reference Designation?
            </h2>
            <p className="text-lg text-slate-600">
              Reference Designation Systems (RDS) based on IEC 81346 provide a standardized way to identify and locate objects within complex systems like power plants and industrial facilities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Consistent Identification</h3>
              <p className="text-slate-600">
                Every component gets a unique, meaningful identifier that remains consistent across all documentation and systems.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Cross-System Integration</h3>
              <p className="text-slate-600">
                RDS enables seamless data exchange between CMMS, GIS, SCADA, and document management systems.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Lifecycle Support</h3>
              <p className="text-slate-600">
                From design through operations to decommissioning, RDS ensures asset traceability throughout the entire lifecycle.
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
              Our RDS Implementation Approach
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
                <h3 className="text-xl font-bold text-slate-900 mb-3">Assessment & Planning</h3>
                <p className="text-slate-600">
                  Analyze existing designation practices and develop a tailored RDS strategy aligned with IEC 81346.
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
                <h3 className="text-xl font-bold text-slate-900 mb-3">Framework Design</h3>
                <p className="text-slate-600">
                  Create comprehensive designation rules, aspect hierarchies, and coding structures specific to your assets.
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
                <h3 className="text-xl font-bold text-slate-900 mb-3">Migration Support</h3>
                <p className="text-slate-600">
                  Systematic migration of legacy designations to the new RDS framework with full traceability.
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
                <h3 className="text-xl font-bold text-slate-900 mb-3">Training & Governance</h3>
                <p className="text-slate-600">
                  Comprehensive training programs and governance procedures to ensure long-term compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
