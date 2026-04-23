import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import {
  GraduationCap,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Users,
  Monitor,
  MapPin,
  Clock,
  Network,
  FileText,
  Package,
} from 'lucide-react'

export const Route = createFileRoute('/service-training' as any)({
  component: TrainingPage,
})

function TrainingPage() {
  SEOHead({
    title: 'Training & SME Services for Energy Documentation and RDS | SøDera',
    description:
      'SøDera delivers expert training on Reference Designation Systems (IEC 81346), document management, and product development SME support for energy sector teams. On-site and remote.',
    keywords:
      'RDS training, IEC 81346 training, document management training, energy sector training, SME support product development, ISO 19650 training',
    canonicalUrl: 'https://www.soedera.eu/service-training',
  })

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Training & SME Services for Energy Documentation and RDS',
    description:
      'SøDera delivers expert training on RDS (IEC 81346), document management, and SME support for product development teams in the energy sector.',
    provider: {
      '@type': 'Organization',
      name: 'SøDera',
      url: 'https://www.soedera.eu',
    },
    areaServed: { '@type': 'Place', name: 'Europe' },
    serviceType: 'Training and Subject Matter Expert Services',
    url: 'https://www.soedera.eu/service-training',
  }

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema, null, 2) }}
      />

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-slate-900 to-amber-950 py-20 sm:py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-amber-300 hover:text-white mb-10 group text-sm"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/20 border border-amber-400/30 text-amber-300 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <GraduationCap size={13} />
              Training & SME
            </div>

            <h1
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Build your team's expertise from the inside out
            </h1>

            <p className="text-xl text-slate-300 mb-4 leading-relaxed">
              Standards only deliver value when the people applying them actually understand them.
              SøDera delivers practical, field-tested training on RDS, document management, and
              information management for energy sector teams.
            </p>

            <p className="text-base text-slate-400 mb-10">
              Available on-site at your location or remotely. Workshops and multi-day programmes.
              Tailored to your team, your systems, and your industry context.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {['IEC 81346', 'ISO 19650', 'On-site & Remote', 'Half Day to Multi-Day'].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 bg-white/10 border border-white/20 text-white text-xs font-semibold rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-400 transition-all hover:scale-105 shadow-lg shadow-amber-500/30"
              >
                Enquire About Training <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Delivery formats ── */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: MapPin,
                title: 'On-site delivery',
                description:
                  'We come to your location and deliver training in your environment, using your systems and real examples from your projects.',
              },
              {
                icon: Monitor,
                title: 'Remote delivery',
                description:
                  'Live, instructor-led sessions delivered online. Full interactivity, exercises, and Q&A. No travel required.',
              },
              {
                icon: Users,
                title: 'Team or group formats',
                description:
                  'Training designed for teams of 4 to 20 participants. Half-day workshops through to multi-day structured programmes.',
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 bg-white rounded-xl border border-slate-200">
                <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Training programmes ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">
              What we train
            </p>
            <h2
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
            >
              Training programmes
            </h2>
            <p className="text-lg text-slate-600">
              All programmes are delivered by practitioners with 20+ years of real energy sector
              experience. No generic slides. No theory disconnected from practice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* RDS Training */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-amber-200 transition-all duration-300 group">
              <div className="h-1 bg-gradient-to-r from-amber-400 to-amber-600" />
              <div className="p-8">
                <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-5">
                  <Network size={20} className="text-amber-600" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">
                  Reference Designation
                </span>
                <h3
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                  className="text-xl font-bold text-slate-900 mb-4"
                >
                  RDS and IEC 81346 Application
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Practical training on how to apply the IEC 81346 standard series in real energy
                  projects. Covers the functional, product, and location aspects, designation
                  hierarchy, and how to build and maintain a compliant RDS implementation.
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                  Participants will learn to
                </p>
                <ul className="space-y-2.5 mb-6">
                  {[
                    'Understand the IEC 81346 standard structure and intent',
                    'Apply the three aspects: functional, product, and location',
                    'Build a designation hierarchy for a real asset',
                    'Identify and correct non-compliant designations',
                    'Connect RDS to documents, signals, and CMMS records',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-amber-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-xs text-slate-400 pt-4 border-t border-slate-100">
                  <Clock size={12} /> Half day, full day, or multi-day
                </div>
              </div>
            </div>

            {/* Document Management Training */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-amber-200 transition-all duration-300 group">
              <div className="h-1 bg-gradient-to-r from-sky-400 to-blue-600" />
              <div className="p-8">
                <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center mb-5">
                  <FileText size={20} className="text-sky-600" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-2 block">
                  Document Management
                </span>
                <h3
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                  className="text-xl font-bold text-slate-900 mb-4"
                >
                  Document and Information Management
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Training for engineers, document controllers, and project teams on how to
                  structure, control, and manage technical documentation in energy infrastructure
                  projects. Aligned with ISO 19650 and ISO 9001 principles.
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                  Participants will learn to
                </p>
                <ul className="space-y-2.5 mb-6">
                  {[
                    'Design a document management system that engineers actually use',
                    'Apply consistent metadata, naming, and version control',
                    'Manage contractor document submissions and review workflows',
                    'Structure handover packages for operations teams',
                    'Align with ISO 19650 information requirements',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-sky-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-xs text-slate-400 pt-4 border-t border-slate-100">
                  <Clock size={12} /> Half day, full day, or multi-day
                </div>
              </div>
            </div>

            {/* SME Support */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-amber-200 transition-all duration-300 group">
              <div className="h-1 bg-gradient-to-r from-indigo-400 to-indigo-600" />
              <div className="p-8">
                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-5">
                  <Package size={20} className="text-indigo-600" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2 block">
                  Product Development
                </span>
                <h3
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                  className="text-xl font-bold text-slate-900 mb-4"
                >
                  SME Support for Tool Development
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  If your organisation is building a software tool that needs to understand RDS,
                  document management, or asset data structures, we can embed as subject matter
                  experts in your development team. We bring the domain knowledge your developers
                  cannot get from a standard specification.
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                  We support your team with
                </p>
                <ul className="space-y-2.5 mb-6">
                  {[
                    'Requirements definition from an energy sector practitioner perspective',
                    'Review of data models against IEC 81346 and ISO 19650',
                    'Validation of workflows against real operational practice',
                    'User story development grounded in field experience',
                    'Ongoing expert availability during development sprints',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-indigo-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-xs text-slate-400 pt-4 border-t border-slate-100">
                  <Clock size={12} /> Flexible engagement model
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Who attends ── */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">
                Who this is for
              </p>
              <h2
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                className="text-3xl font-bold text-slate-900 mb-6"
              >
                Built for people who apply these standards in the field
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our training is not generic standards awareness. It is designed for engineers,
                document controllers, project managers, and asset managers who need to apply
                IEC 81346 and ISO 19650 in real energy infrastructure projects.
              </p>
              <div className="space-y-3">
                {[
                  'Engineering teams implementing RDS on new or existing assets',
                  'Document controllers managing technical documentation workflows',
                  'Project managers overseeing information management on major projects',
                  'Asset managers building or restructuring asset registers',
                  'Software teams building tools for the energy sector',
                  'Organisations preparing for ISO 19650 or IEC 81346 compliance',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-700 text-sm">
                    <CheckCircle size={15} className="text-amber-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <h3
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                className="font-bold text-slate-900 text-xl mb-6"
              >
                How to get started
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: '01',
                    title: 'Tell us about your team',
                    desc: 'Share the background of your participants, what systems you use, and what problems you are trying to solve.',
                  },
                  {
                    step: '02',
                    title: 'We tailor the programme',
                    desc: 'We design a training programme around your specific context, using examples from your industry and asset type.',
                  },
                  {
                    step: '03',
                    title: 'Deliver and follow up',
                    desc: 'Training delivered on-site or remotely, with follow-up support available for questions that arise during implementation.',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span
                      style={{ fontFamily: 'Georgia, serif' }}
                      className="text-2xl font-bold text-amber-200 flex-shrink-0 w-8"
                    >
                      {item.step}
                    </span>
                    <div>
                      <p className="font-bold text-slate-900 text-sm mb-1">{item.title}</p>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white text-sm rounded-lg font-semibold hover:bg-amber-400 transition-colors w-full justify-center"
                >
                  Enquire About Training <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
