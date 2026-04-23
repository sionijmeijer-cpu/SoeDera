import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import {
  FileText,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
  ExternalLink,
  Shield,
  Search,
  GitBranch,
  Monitor,
  Newspaper,
} from 'lucide-react'

export const Route = createFileRoute('/service-document-management')({
  component: DocumentManagementPage,
})

function DocumentManagementPage() {
  SEOHead({
    title: 'Document Management Services for Energy Infrastructure | SøDera',
    description:
      'SøDera brings clarity to complex energy documentation with structured filing systems, rigorous version control, ISO 19650 alignment, and EDMS implementation for offshore wind, oil & gas, power plants, and industrial infrastructure.',
    keywords:
      'document management energy sector, EDMS energy, technical documentation control, ISO 19650, document control offshore wind, asset documentation, engineering document management, IEC 81346 document management',
    canonicalUrl: 'https://www.soedera.eu/service-document-management',
  })

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Document Management Services for Energy Infrastructure',
    description:
      'SøDera provides document management consulting for energy operators with structured filing systems, EDMS implementation, ISO 19650 alignment, metadata design, and handover readiness.',
    provider: {
      '@type': 'Organization',
      name: 'SøDera',
      url: 'https://www.soedera.eu',
    },
    areaServed: { '@type': 'Place', name: 'Europe' },
    serviceType: 'Document Management Consulting',
    url: 'https://www.soedera.eu/service-document-management',
  }

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema, null, 2) }}
      />

      {/* ── Hero with real photo ── */}
      <section
        className="relative min-h-[600px] flex items-center py-24 sm:py-32 overflow-hidden"
        style={{
          backgroundImage: 'url(https://i.imgur.com/M0wtSyY.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-white mb-10 group text-sm"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-500/20 border border-sky-400/30 text-sky-300 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <FileText size={13} />
              Document Management
            </div>

            <h1
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Bringing Clarity to Complex Energy Documentation
            </h1>

            <p className="text-xl text-slate-200 mb-4 leading-relaxed">
              In energy and industrial operations, effective document management is not an
              administrative task, it is the operational backbone that ensures safety, compliance,
              and long-term asset value.
            </p>

            <p className="text-base text-slate-400 mb-10">
              SøDera transforms fragmented, chaotic documentation into organised, accessible, and
              fully compliant systems. Built on over a decade of hands-on experience in oil & gas
              and energy sectors.
            </p>

            {/* Standards badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              {['ISO 9001', 'IEC 81346', 'ISO 19650', 'ISO 15926'].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 bg-white/10 border border-white/20 text-white text-xs font-semibold rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {/* Primary CTA — paid assessment */}
              <Link
                to="/book-assessment"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-400 transition-all hover:scale-105 shadow-lg shadow-sky-500/30"
              >
                Get Your Documentation Assessment <ArrowRight size={18} />
              </Link>

              {/* Secondary CTA — article link with newspaper icon */}
              <Link
                to="/blog/$articleId"
                params={{ articleId: 'before-you-sign-dms-requirements' }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
              >
                <Newspaper size={15} /> DMS Vendor Checklist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Expert quote ── */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-start gap-6 max-w-4xl">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md"
              style={{ background: '#1a3a5c' }}
            >
              SA
            </div>
            <div>
              <blockquote
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                className="text-xl text-slate-800 italic leading-relaxed mb-3"
              >
                "Over a decade in Oil & gas and energy sectors, I've realized that structured data
                is not just an administrative requirement; it is the operational backbone that
                ensures safety, compliance, and long-term asset value."
              </blockquote>
              <p className="text-sm font-semibold text-slate-600">
                Sylvia Awoudu
                <span className="font-normal text-slate-400"> · Co-founder & COO, SøDera</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cost callout ── */}
      <section className="py-12 bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 max-w-4xl">
            <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={22} />
            <div>
              <h2 className="text-base font-bold text-amber-900 mb-1">
                The hidden cost of poor documentation in energy operations
              </h2>
              <p className="text-amber-800 text-sm leading-relaxed">
                When offshore technicians travel with the wrong spare parts because equipment
                documentation is unstructured or unsearchable, the cost per incident ranges from{' '}
                <strong>€8,000 to €20,000</strong> excluding lost production. Structured document
                management typically pays for itself within months.
              </p>
              <Link
                to="/blog/$articleId"
                params={{ articleId: 'information-management-offshore-wind-rds-cost' }}
                className="inline-flex items-center gap-1.5 text-xs text-amber-700 font-semibold mt-2 hover:text-amber-900"
              >
                Read the full cost analysis <ExternalLink size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Challenges ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">
              The problems we solve
            </p>
            <h2
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
            >
              Documentation challenges we understand because we've lived them
            </h2>
            <p className="text-lg text-slate-600">
              Energy companies grapple with unique documentation challenges that stem from the sheer
              volume, complexity, and dynamic nature of technical information, directly impacting
              operations, compliance, and efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Search,
                title: 'Scattered Information',
                description:
                  'Critical documents dispersed across legacy archives, email threads, shared drives, and physical locations. Engineers waste hours searching for the right drawing or procedure — time that should be spent on the work itself. A unified, structured approach is the only sustainable solution.',
              },
              {
                icon: GitBranch,
                title: 'Version Control Failures',
                description:
                  'Multiple unsynchronised document versions are a recipe for costly errors and compliance risks. When teams work with outdated specifications or superseded drawings, the consequences range from rework to safety incidents. Rigorous version control is not optional in safety-critical environments.',
              },
              {
                icon: Shield,
                title: 'Compliance Gaps',
                description:
                  'In a heavily regulated industry, missing or incomplete documentation creates substantial audit risks. Adhering to ISO 9001, IEC 81346, and applicable safety regulations demands meticulous record-keeping. Our deep understanding of these regulatory frameworks allows us to build systems that stand up to scrutiny.',
              },
              {
                icon: Monitor,
                title: 'Legacy Systems Without Integration',
                description:
                  'Ageing document systems that cannot connect to CMMS, asset registers, or engineering tools create information silos. Maintenance teams cannot find documents by equipment tag. Integration is not a luxury, it is the difference between a document system and an operational information system.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-5 p-6 rounded-xl border border-slate-200 hover:border-sky-200 hover:shadow-sm transition-all"
              >
                <div className="w-11 h-11 bg-sky-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} className="text-sky-600" />
                </div>
                <div>
                  <h3
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                    className="text-lg font-bold text-slate-900 mb-2"
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-slate-200" />
      </div>

      {/* ── Our approach ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">
              Our methodology
            </p>
            <h2
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
            >
              SøDera's proven document management approach
            </h2>
            <p className="text-lg text-slate-600">
              Our methodology is built on decades of practical experience within the energy sector.
              We don't just implement systems, we partner with your teams to embed a culture of
              structured information management that delivers lasting value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                number: '01',
                title: 'Document Audit & Assessment',
                description:
                  'Every successful transformation begins with understanding the current state. We conduct a structured review of your existing documentation landscape, identifying critical gaps, inefficiencies, and opportunities for improvement. This assessment forms the blueprint for a customised strategy aligned with your operational needs and compliance obligations.',
              },
              {
                number: '02',
                title: 'Structured Filing Systems',
                description:
                  'Chaos gives way to clarity with the implementation of logical folder structures, intuitive naming conventions, and robust metadata standards. Documents are not just stored — they are intelligently categorised, making them easily discoverable and accessible to authorised personnel.',
              },
              {
                number: '03',
                title: 'Rigorous Version Control',
                description:
                  'We establish clear and unambiguous versioning protocols, ensuring that every document revision is tracked, approved, and readily identifiable. This eliminates ambiguity, prevents the use of outdated information, and provides a complete audit trail for compliance.',
              },
              {
                number: '04',
                title: 'Digital Transformation',
                description:
                  'Transitioning from paper-based records to modern, searchable document management platforms is a cornerstone of operational efficiency. We guide you through digitisation, implementing solutions that centralise your documentation and integrate seamlessly with your existing operational systems.',
              },
              {
                number: '05',
                title: 'ISO 19650 & IEC 81346 Alignment',
                description:
                  'We align your document management practice with ISO 19650 principles and connect documentation to your asset structure via IEC 81346 Reference Designation Systems, enabling teams to navigate from an equipment tag directly to every related drawing, manual, and procedure.',
              },
              {
                number: '06',
                title: 'Handover Readiness',
                description:
                  'The project-to-operations handover is where documentation quality is truly tested. We structure handover packages so that maintenance teams inherit a usable, verified document set from day one and not a scramble. Includes completeness verification and O&M information packs.',
              },
            ].map((item) => (
              <div
                key={item.number}
                className="flex gap-5 p-6 rounded-xl border border-slate-200 hover:border-sky-200 hover:shadow-sm transition-all"
              >
                <div className="flex-shrink-0 w-10">
                  <span
                    className="text-3xl font-bold text-slate-100"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {item.number}
                  </span>
                </div>
                <div>
                  <h3
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                    className="text-lg font-bold text-slate-900 mb-2"
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-slate-200" />
      </div>

      {/* ── Why SøDera ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">
                Why partner with us
              </p>
              <h2
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6"
              >
                Expertise you can measure. Trust you can verify.
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Choosing SøDera means partnering with experts who bring unparalleled experience in
                energy sector documentation. Our work is grounded in international standards, IEC
                81346, ISO 19650, ISO 9001, applied through hands-on project delivery across
                offshore wind, power plants, and industrial infrastructure in Northern Europe.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We don't offer generic solutions. We provide tailored strategies that deliver
                tangible improvements to your operational resilience, compliance posture, and bottom
                line.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8 py-8 border-t border-b border-slate-100">
                {[
                  { value: '10+', label: 'Years in energy sector' },
                  { value: 'IEC', label: '81346 certified practice' },
                  { value: 'ISO', label: '19650 aligned' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p
                      style={{ fontFamily: 'Georgia, serif' }}
                      className="text-3xl font-bold text-sky-600 mb-1"
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-500 leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {[
                  'Offshore wind developers and operators',
                  'Power plant and substation asset owners',
                  'EPC contractors with documentation obligations',
                  'O&M teams inheriting incomplete handover packages',
                  'Organisations preparing for ISO 19650 compliance',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-700 text-sm">
                    <CheckCircle size={15} className="text-sky-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Warning signs card */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
              <h3
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                className="font-bold text-slate-900 text-xl mb-6"
              >
                Signs your documentation needs attention
              </h3>
              <div className="space-y-4">
                {[
                  'Engineers spend more than 20 minutes finding a specific document',
                  'Multiple versions of the same drawing exist across different systems',
                  'Contractors submit documents via email instead of your DMS',
                  'Handover packages are assembled manually at project closeout',
                  'Maintenance teams cannot find documents by equipment tag',
                  'Audit preparation requires manual document gathering across systems',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm text-slate-600 pb-4 border-b border-slate-200 last:border-0 last:pb-0"
                  >
                    <AlertTriangle size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 mb-4">
                  If any of these sound familiar, we should talk.
                </p>
                <Link
                  to="/book-assessment"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-600 text-white text-sm rounded-lg font-semibold hover:bg-sky-700 transition-colors"
                >
                  Get Your Documentation Assessment <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-slate-200" />
      </div>

      {/* ── Related insights ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">
            From our team
          </p>
          <h2
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            className="text-2xl font-bold text-slate-900 mb-8"
          >
            Related insights
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                id: 'before-you-sign-dms-requirements',
                title: 'Before You Sign: 10 Critical Requirements to Demand from any DMS Vendor',
                category: 'Document Management',
                readTime: '10 min read',
              },
              {
                id: 'essential-guide-document-control-systems',
                title: 'How to Design Metadata That Actually Works for Technical Documentation',
                category: 'Document Management',
                readTime: '4 min read',
              },
              {
                id: 'information-management-offshore-wind-rds-cost',
                title: 'Information Management in Offshore Wind: Why RDS and Structured Data Save €20,000 Per Incident',
                category: 'RDS',
                readTime: '11 min read',
              },
            ].map((article) => (
              <Link
                key={article.id}
                to="/blog/$articleId"
                params={{ articleId: article.id }}
                className="block p-5 rounded-xl border border-slate-200 hover:border-sky-300 hover:shadow-sm transition-all group"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                  {article.category}
                </span>
                <h3
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                  className="text-sm font-bold text-slate-900 mt-2 mb-2 leading-snug group-hover:text-sky-700 transition-colors"
                >
                  {article.title}
                </h3>
                <span className="text-xs text-slate-400">{article.readTime}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
