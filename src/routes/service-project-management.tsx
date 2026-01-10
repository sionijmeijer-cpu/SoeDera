import { createFileRoute, Link } from '@tanstack/react-router'
import { FolderKanban, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/service-project-management')({
  component: ProjectManagementPage,
})

function ProjectManagementPage() {
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
                <FolderKanban size={16} />
                Project Management
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Expert Project Delivery
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Ensure your documentation and data initiatives are delivered on time, within budget, and to the highest quality standards with proven project delivery methods.
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
                <FolderKanban className="text-white/30" size={180} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why PM Matters */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Why Project Management Matters
            </h2>
            <p className="text-lg text-slate-600">
              Data and documentation projects often fail without proper project management. We bring structure and accountability.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">On-Time Delivery</h3>
              <p className="text-slate-600">
                Structured planning and proactive risk management ensure projects meet their deadlines.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Budget Control</h3>
              <p className="text-slate-600">
                Clear scope definition and change management prevent cost overruns and scope creep.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Quality Outcomes</h3>
              <p className="text-slate-600">
                Defined quality standards and regular reviews ensure deliverables meet expectations.
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
              Our Project Management Approach
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
                <h3 className="text-xl font-bold text-slate-900 mb-3">Structured Planning</h3>
                <p className="text-slate-600">
                  Detailed project plans with clear milestones, dependencies, and resource allocation.
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
                <h3 className="text-xl font-bold text-slate-900 mb-3">Stakeholder Communication</h3>
                <p className="text-slate-600">
                  Regular updates, clear reporting, and proactive issue escalation keep everyone aligned.
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
                <h3 className="text-xl font-bold text-slate-900 mb-3">Risk Management</h3>
                <p className="text-slate-600">
                  Proactive identification and mitigation of risks before they impact project success.
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
                <h3 className="text-xl font-bold text-slate-900 mb-3">Quality Assurance</h3>
                <p className="text-slate-600">
                  Built-in quality gates and reviews ensure deliverables meet defined standards.
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
