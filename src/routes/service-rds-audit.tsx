import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import { ClipboardCheck, CheckCircle, ArrowRight, ArrowLeft, ShieldCheck, TrendingUp, BookOpen, Users, Award } from 'lucide-react'

export const Route = createFileRoute('/service-rds-audit')({
  component: RDSAuditPage,
})

function RDSAuditPage() {
  SEOHead({
    title: 'IEC 81346 RDS Audit — Independent Third-Party Review | SøDera',
    description: 'Independent third-party audit of your Reference Designation System against IEC 81346. Assess RDS compliance, maturity, TAG governance, and fitness for purpose across ten structured focus areas.',
    keywords: 'IEC 81346 audit, RDS audit, reference designation system review, RDS compliance, asset designation audit, TAG numbering audit, third-party RDS assessment, IEC 81346 compliance',
    canonicalUrl: 'https://www.soedera.eu/service-rds-audit'
  })

  const focusAreas = [
    { id: '01', title: 'Conformance to IEC 81346', description: 'Alignment with the standard\'s structural and syntactical requirements for reference designations.' },
    { id: '02', title: 'Organisational Consistency', description: 'Uniform asset designation practices applied across projects, disciplines, and teams.' },
    { id: '03', title: 'Completeness of Coverage', description: 'Whether all relevant assets and objects within scope carry valid reference designations.' },
    { id: '04', title: 'Governance & Ownership', description: 'Clear ownership, designation rules, and processes to maintain the RDS over time.' },
    { id: '05', title: 'Tool & System Implementation', description: 'How well the RDS is embedded in engineering tools and asset management systems.' },
    { id: '06', title: 'Change Management', description: 'How changes to assets or the designation framework are controlled and communicated.' },
    { id: '07', title: 'Lifecycle Traceability', description: 'Reference designation traceability from design through construction to operations and decommissioning.' },
    { id: '08', title: 'Staff Competency', description: 'Whether people applying and working with the RDS have the necessary IEC 81346 knowledge.' },
    { id: '09', title: 'Documentation Quality', description: 'Supporting RDS documentation — rules, guidelines, examples — assessed for clarity and completeness.' },
    { id: '10', title: 'Fitness for Purpose', description: 'Overall evaluation of whether the reference designation system delivers its intended operational value.' },
  ]

  const audiences = [
    {
      icon: ShieldCheck,
      title: 'Asset Owners',
      description: 'Gain independent assurance that your RDS and asset designation system are fit for operations and maintainable across the full asset lifecycle — before problems surface at handover or in maintenance.',
    },
    {
      icon: Users,
      title: 'EPCs & Contractors',
      description: 'Demonstrate IEC 81346 compliance and TAG numbering quality to clients. Use third-party audit findings to strengthen your delivery process and reduce documentation risk at handover.',
    },
    {
      icon: Award,
      title: 'Engineering Consultancies & PMCs',
      description: 'Support your clients with independent RDS compliance verification. Add a structured IEC 81346 audit capability to your asset information and engineering advisory offering.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-50 to-sky-100 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/service-rds"
            className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to RDS Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 text-sky-600 rounded-full text-sm font-medium mb-6">
                <ClipboardCheck size={16} />
                Independent third-party RDS audit
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-3">
                IEC 81346 RDS Audit
              </h1>
              <p className="text-base font-semibold text-sky-600 mb-5">
                Independent compliance, maturity, and value review for asset designation systems
              </p>
              <p className="text-xl text-slate-600 mb-4">
                A structured, third-party review of your Reference Designation System against IEC 81346 — examining whether your asset designations are correct, consistent, governed, and delivering practical value.
              </p>
              <p className="text-lg text-slate-500 mb-8">
                Whether you are an asset owner, EPC, or engineering consultancy, the SøDera RDS audit gives you an objective picture of where your TAG numbering and designation governance stand — and what to do about it.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600 transition-all hover:scale-105 shadow-lg shadow-sky-500/25"
                >
                  Request an Audit <ArrowRight size={18} />
                </Link>
                <Link
                  to="/book-assessment"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-sky-600 border border-sky-200 rounded-lg font-semibold hover:bg-sky-50 transition-all"
                >
                  Start with a Quick Assessment
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl shadow-2xl flex items-center justify-center">
                <ClipboardCheck className="text-white/30" size={180} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Dimensions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              IEC 81346 compliance, maturity, and value — assessed together
            </h2>
            <p className="text-lg text-slate-600">
              Most RDS reviews focus only on conformance to the standard. Our audit goes further, evaluating three dimensions that together determine whether your reference designation system is truly working.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-sky-50 border border-sky-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Compliance</h3>
              <p className="text-slate-600">
                Does your RDS conform to IEC 81346? We assess structural correctness, syntax, and whether designation principles are applied consistently across your asset base and TAG numbering.
              </p>
            </div>
            <div className="bg-sky-50 border border-sky-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Maturity</h3>
              <p className="text-slate-600">
                How embedded and sustainable is your RDS? We assess governance, staff competency, tooling, and change management to determine how well the designation system is maintained in practice.
              </p>
            </div>
            <div className="bg-sky-50 border border-sky-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center mb-6">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Value</h3>
              <p className="text-slate-600">
                Is your reference designation system actually delivering? We evaluate fitness for purpose — whether your RDS supports the asset management and information management goals it was designed for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Who commissions an IEC 81346 RDS audit?
            </h2>
            <p className="text-lg text-slate-600">
              The need for an independent reference designation review arises in different ways for different organisations. Here are the three most common client profiles.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {audiences.map((audience) => (
              <div key={audience.title} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6">
                  <audience.icon className="text-sky-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{audience.title}</h3>
                <p className="text-slate-600">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ten Focus Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Ten focus areas covering the full scope of RDS compliance
            </h2>
            <p className="text-lg text-slate-600">
              Every IEC 81346 audit follows a consistent methodology across ten defined areas — from technical conformance and TAG governance through to lifecycle traceability and fitness for purpose.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {focusAreas.map((area) => (
              <div key={area.id} className="flex gap-5 p-6 rounded-xl border border-slate-100 hover:border-sky-200 hover:shadow-sm transition-all">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-sky-50 text-sky-600 text-sm font-bold font-mono">
                    {area.id}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{area.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison + Training teaser */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              RDS audit or quick assessment — which is right for you?
            </h2>
            <p className="text-lg text-slate-600">
              Both services evaluate your reference designation system against IEC 81346. The difference is depth, scope, and what you receive at the end.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="w-2/5 px-5 py-3 text-left"></th>
                    <th className="w-[30%] px-5 py-3 bg-sky-600 text-white text-center font-semibold">Full RDS audit</th>
                    <th className="w-[30%] px-5 py-3 bg-sky-50 text-sky-700 text-center font-semibold">Quick assessment</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'IEC 81346 coverage', audit: 'All 10 focus areas', quick: 'Targeted areas' },
                    { label: 'Depth of review', audit: 'Comprehensive', quick: 'Gap-focused' },
                    { label: 'Formal audit report', audit: '✓', quick: 'Summary findings' },
                    { label: 'Maturity assessment', audit: '✓', quick: '—' },
                    { label: 'Prioritised recommendations', audit: '✓', quick: 'Key priorities' },
                    { label: 'Client response section', audit: '✓', quick: '—' },
                    { label: 'Typical use', audit: 'Formal compliance verification, project handover, governance assurance', quick: 'Roadmap planning, initial RDS health check' },
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-slate-100">
                      <td className="px-5 py-3 font-medium text-slate-800">{row.label}</td>
                      <td className="px-5 py-3 text-center text-sky-700 bg-sky-50/50 text-xs">{row.audit}</td>
                      <td className="px-5 py-3 text-center text-slate-500 text-xs">{row.quick}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-slate-500 text-center mb-8">
              Many clients begin with a quick assessment to scope the gaps, then progress to a full IEC 81346 audit once priorities are clear.
            </p>

            {/* Training teaser */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="text-slate-500" size={18} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm mb-0.5">IEC 81346 RDS Training</div>
                  <div className="text-xs text-slate-500">Structured training for RDS implementors and operators — two tracks grounded in IEC 81346 and practical application.</div>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs border border-slate-200">
                  Coming soon
                </span>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium hover:bg-slate-200 transition-colors border border-slate-200"
                >
                  Enquire <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Receive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              What an RDS audit report includes
            </h2>
            <p className="text-lg text-slate-600">
              A full IEC 81346 audit produces a structured, professional report you can act on immediately — covering findings, maturity, and a clear path forward for your reference designation system.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="text-sky-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Executive Summary</h3>
                <p className="text-slate-600">
                  Overall RDS compliance findings, key strengths, and significant gaps — written for both technical and non-technical stakeholders.
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
                <h3 className="text-xl font-bold text-slate-900 mb-3">Detailed Findings Across All 10 Areas</h3>
                <p className="text-slate-600">
                  Each finding classified as Major NC, Minor NC, Observation, or Positive — with supporting evidence and clear audit trails.
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
                <h3 className="text-xl font-bold text-slate-900 mb-3">RDS Maturity & Value Assessment</h3>
                <p className="text-slate-600">
                  Where your reference designation system sits on the maturity scale and how well it is delivering practical value to your asset management and engineering teams.
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
                <h3 className="text-xl font-bold text-slate-900 mb-3">Prioritised Recommendations</h3>
                <p className="text-slate-600">
                  Actionable steps ranked by priority — giving you a clear improvement roadmap for your RDS governance, TAG numbering, and designation compliance.
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
            Ready to review your reference designation system?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Whether you want a rapid IEC 81346 health check or a full third-party audit, we are ready to discuss scope and next steps.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-600 rounded-lg font-bold hover:bg-sky-50 transition-all hover:scale-105 shadow-xl"
            >
              Get in Touch <ArrowRight size={20} />
            </Link>
            <Link
              to="/book-assessment"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sky-500/20 text-white border border-white/30 rounded-lg font-semibold hover:bg-sky-500/30 transition-all hover:scale-105"
            >
              Book a Quick Assessment
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
