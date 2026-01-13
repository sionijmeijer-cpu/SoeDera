import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import { Package, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/service-product-development')({
  component: ProductDevelopmentPage,
})

function ProductDevelopmentPage() {
  SEOHead({
    title: 'Product Development Services - Energy Sector Solutions',
    description: 'Product development consulting for energy sector. From concept to market-ready solutions with documentation and compliance built-in.',
    keywords: 'product development services, energy product development, concept development, energy solutions',
    canonicalUrl: 'https://www.soedera.eu/service-product-development'
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
                <Package size={16} />
                Product Development
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Custom Data Solutions
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Design and develop data products that structure raw asset information into actionable insights for better decision-making.
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
                <Package className="text-white/30" size={180} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Data Products We Develop
            </h2>
            <p className="text-lg text-slate-600">
              We create custom solutions that turn your asset data into competitive advantages.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Analytics Dashboards</h3>
              <p className="text-slate-600">
                Real-time visualization of asset performance, maintenance metrics, and operational KPIs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Integration Tools</h3>
              <p className="text-slate-600">
                Custom connectors and APIs that enable seamless data flow between your enterprise systems.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Reporting Solutions</h3>
              <p className="text-slate-600">
                Automated reporting systems for compliance, maintenance planning, and executive decision support.
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
              Our Development Process
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
                <h3 className="text-xl font-bold text-slate-900 mb-3">Discovery & Requirements</h3>
                <p className="text-slate-600">
                  Deep dive into your business needs, data landscape, and success criteria.
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
                <h3 className="text-xl font-bold text-slate-900 mb-3">Prototype & Validate</h3>
                <p className="text-slate-600">
                  Rapid prototyping to validate concepts and gather feedback before full development.
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
                <h3 className="text-xl font-bold text-slate-900 mb-3">Build & Integrate</h3>
                <p className="text-slate-600">
                  Full development with integration into your existing technology ecosystem.
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
                <h3 className="text-xl font-bold text-slate-900 mb-3">Deploy & Support</h3>
                <p className="text-slate-600">
                  Smooth deployment with training, documentation, and ongoing support options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden" style={{
        backgroundImage: 'url(https://i.imgur.com/BrTo5LL.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            How can we assist you?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            If you would like to discuss further on how we can support refining your business processes for a productive operation, please contact us.
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
