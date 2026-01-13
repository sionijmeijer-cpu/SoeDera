import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import { Building2, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/service-bim')({
  component: BIMPage,
})

function BIMPage() {
  SEOHead({
    title: 'BIM Services - Building Information Modeling for Energy',
    description: 'BIM integration services for energy sector asset lifecycle management. 3D modeling, data integration, and digital twin solutions.',
    keywords: 'BIM services, Building Information Modeling, energy sector BIM, digital twin, asset lifecycle',
    canonicalUrl: 'https://www.soedera.eu/service-bim'
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
                <Building2 size={16} />
                BIM Services
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Building Information Modeling
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Use proven BIM approaches to enhance collaboration, improve asset visibility, and support data-driven decision making throughout the asset lifecycle.
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
                <Building2 className="text-white/30" size={180} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Why BIM for Energy Assets?
            </h2>
            <p className="text-lg text-slate-600">
              BIM provides a digital foundation for managing complex energy infrastructure throughout its entire lifecycle.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Visual Asset Management</h3>
              <p className="text-slate-600">
                3D visualization of assets enables better understanding of spatial relationships and equipment locations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Data-Rich Models</h3>
              <p className="text-slate-600">
                BIM models contain detailed asset information that can be linked to maintenance, operations, and documentation systems.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Improved Collaboration</h3>
              <p className="text-slate-600">
                Common Data Environments enable seamless collaboration between engineering, operations, and maintenance teams.
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
              Our BIM Services
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
                <h3 className="text-xl font-bold text-slate-900 mb-3">BIM Strategy Development</h3>
                <p className="text-slate-600">
                  Define your BIM roadmap aligned with organizational goals and industry standards like ISO 19650.
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
                <h3 className="text-xl font-bold text-slate-900 mb-3">Model Development</h3>
                <p className="text-slate-600">
                  Creation and management of BIM models with appropriate level of detail for your use cases.
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
                <h3 className="text-xl font-bold text-slate-900 mb-3">CDE Implementation</h3>
                <p className="text-slate-600">
                  Setup and configuration of Common Data Environments for effective information management.
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
                <h3 className="text-xl font-bold text-slate-900 mb-3">Digital Twin Foundation</h3>
                <p className="text-slate-600">
                  Establish the data structures and integrations needed to support digital twin initiatives.
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
