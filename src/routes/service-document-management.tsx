import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import {
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  ExternalLink,
  Search,
  GitBranch,
  Shield,
  Monitor,
  Newspaper,
} from 'lucide-react'

export const Route = createFileRoute('/service-document-management')({
  component: DocumentManagementPage,
})

function DocumentManagementPage() {
  SEOHead({
    title: 'Document Management for Energy Infrastructure | SøDera',
    description:
      'SøDera provides industrial document management consulting for energy operators. ISO 19650 aligned, IEC 81346 connected, built on 20+ years of hands-on energy sector experience.',
    keywords:
      'document management energy sector, industrial document management, ISO 19650, IEC 81346 document control, offshore wind document management, EDMS energy, technical documentation energy',
    canonicalUrl: 'https://www.soedera.eu/service-document-management',
  })

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Document Management Services for Energy Infrastructure',
    description:
      'SøDera provides industrial document management consulting for energy operators including ISO 19650 alignment, metadata architecture, EDMS implementation, and handover readiness.',
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

      {/* ── Hero ── */}
      <section
        className="relative min-h-[600px] flex items-center py-32 overflow-hidden"
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
              Document Management
            </div>

            <h1
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Bring Structure to Chaotic Documentation
            </h1>

            <p className="text-xl text-slate-200 mb-6 leading-relaxed">
              Organised, accessible, and compliant systems that save time and reduce operational
              risks for energy assets. Aligned with ISO 19650, ISO 9001, and IEC 81346.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {['ISO 19650', 'ISO 9001', 'IEC 81346'].map((badge) => (
                <span key={badge} className="px-3 py-1 bg-white/10 border border-white/20 text-white text-xs font-semibold rounded-full">
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/book-assessment"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-400 transition-all hover:scale-105 shadow-lg"
              >
                Get Your Documentation Assessment
              </Link>
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
      <section className="bg-slate-50 border-b border-slate-200">
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
                "In the energy sector, structured data is not just an administrative requirement.
                It is the operational backbone that ensures safety, compliance, and long-term asset
                value. Our goal is to turn chaotic information into a strategic asset that empowers
                teams to work with absolute confidence."
              </blockquote>
              <p className="text-sm font-semibold text-slate-600">
                Sylvia Awoudu
                <span className="font-normal text-slate-400"> · Co-founder & COO, SøDera</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What is Industrial Document Management ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">
                Understanding the discipline
              </p>
              <h2
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6"
              >
                What is Industrial Document Management?
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  Industrial Document Management (IDM) is the systematic control of technical
                  information throughout the lifecycle of a built asset. Unlike general office
                  filing, IDM in the energy sector is governed by the principle of Digital
                  Continuity. According to ISO 19650, information must be managed as a structured
                  asset, ensuring that the right person has the right information at the right time.
                </p>
                <p>
                  The core of this discipline is the Single Source of Truth. In a complex facility,
                  a single piece of equipment such as a high-pressure pump may be referenced in
                  hundreds of documents: P&IDs, electrical schematics, maintenance manuals, and
                  safety procedures. Without a centralised management system, these documents often
                  exist in multiple versions across disparate silos — legacy archives, email
                  threads, and local drives. This fragmentation leads to Information Decay, where
                  the accuracy of the documentation set degrades by an estimated 10 to 15 percent
                  annually due to unrecorded field changes.
                </p>
                <p>
                  Effective IDM uses metadata-driven architectures rather than simple folder
                  structures. By tagging documents with attributes such as equipment tag numbers
                  aligned with IEC 81346, document types, and revision status, the system enables
                  multi-dimensional discovery. This transforms a passive archive into an active
                  operational tool. IDM also establishes a Common Data Environment, a rigorous
                  process for managing information exchange between project participants, ensuring
                  that as-built data is captured incrementally rather than scrambled for at project
                  closeout.
                </p>
              </div>
            </div>

            {/* Cost callout */}
            <div className="space-y-6">
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={22} />
                  <h3
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                    className="text-lg font-bold text-amber-900"
                  >
                    The cost of getting it wrong
                  </h3>
                </div>
                <p className="text-amber-800 text-sm leading-relaxed mb-4">
                  In safety-critical environments, poor documentation is a direct liability.
                  Research into offshore wind incidents shows that indirect costs — including lost
                  productivity, investigations, and legal liabilities — are often several times
                  larger than direct repair costs.
                </p>
                <p className="text-amber-800 text-sm leading-relaxed mb-4">
                  Consider a maintenance team dispatched to an offshore platform to repair a faulty
                  valve. If they rely on a superseded P&ID, they may arrive with the wrong tools or
                  spare parts. The cost of the dry run — including vessel charter, technician hours,
                  and lost production — can easily exceed <strong>€20,000 for a single day</strong>.
                  Beyond the financial impact, working with outdated safety procedures or electrical
                  diagrams poses a severe risk to personnel.
                </p>
                <Link
                  to="/blog/$articleId"
                  params={{ articleId: 'information-management-offshore-wind-rds-cost' }}
                  className="inline-flex items-center gap-1.5 text-xs text-amber-700 font-semibold hover:text-amber-900"
                >
                  Read the full cost analysis <ExternalLink size={12} />
                </Link>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <h3
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                  className="text-lg font-bold text-slate-900 mb-4"
                >
                  Signs your documentation needs attention
                </h3>
                <div className="space-y-3">
                  {[
                    'Engineers spend more than 20 minutes finding a specific document',
                    'Multiple versions of the same drawing exist across different systems',
                    'Contractors submit documents via email instead of your DMS',
                    'Handover packages are assembled manually at project closeout',
                    'Maintenance teams cannot find documents by equipment tag',
                    'Audit preparation requires manual document gathering across systems',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-slate-600 pb-3 border-b border-slate-200 last:border-0 last:pb-0">
                      <AlertTriangle size={13} className="text-amber-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><hr className="border-t border-slate-200" /></div>

      {/* ── Our Methodology ── */}
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
              The SøDera approach to document management
            </h2>
            <p className="text-lg text-slate-600">
              Our methodology is built on decades of practical experience within the energy sector.
              We do not just implement systems. We partner with your teams to embed a culture of
              structured information management that delivers lasting value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                number: '01',
                title: 'Audit and Assessment',
                description:
                  'A structured review of your existing documentation to identify gaps, redundancies, and compliance risks. This assessment forms the blueprint for a customised strategy aligned with your operational needs and regulatory obligations.',
              },
              {
                number: '02',
                title: 'Strategy Development',
                description:
                  'Designing a customised information architecture aligned with ISO 19650 and your operational goals. We define information requirements, metadata schemas, and governance frameworks before touching a single system.',
              },
              {
                number: '03',
                title: 'Structured Filing and Metadata',
                description:
                  'Implementing logical hierarchies and robust tagging standards for instant discoverability. Documents are tagged with equipment identifiers aligned with IEC 81346, enabling teams to navigate from an asset tag directly to every related document.',
              },
              {
                number: '04',
                title: 'Rigorous Version Control',
                description:
                  'Establishing unambiguous protocols to ensure teams always work with the latest, verified information. Every revision is tracked, attributed, and auditable. Superseded documents are flagged or archived, never silently left in place.',
              },
              {
                number: '05',
                title: 'Digital Transformation',
                description:
                  'Guiding the migration from legacy paper or fragmented digital files to a centralised, searchable Document Management System. We support vendor evaluation, configuration, and contractor onboarding so the system is actually used.',
              },
              {
                number: '06',
                title: 'Handover Readiness',
                description:
                  'Structuring project-to-operations handover packages so maintenance teams inherit a usable, verified document set from day one. Includes completeness verification, O&M information packs, and alignment to the asset register.',
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><hr className="border-t border-slate-200" /></div>

      {/* ── Case Study ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">
              In practice
            </p>
            <h2
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              className="text-3xl sm:text-4xl font-bold text-slate-900 mb-10"
            >
              Restoring order to a North Sea wind asset
            </h2>

            <div className="space-y-8">
              <div className="border-l-4 border-amber-400 pl-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Challenge</h3>
                <p className="text-slate-700 leading-relaxed">
                  A major offshore wind operator struggled with a legacy archive where over 40,000
                  drawings were scattered across three different systems. Maintenance teams were
                  frequently using superseded versions of electrical diagrams, leading to significant
                  rework during a planned outage and raising serious safety concerns during
                  live-line operations.
                </p>
              </div>

              <div className="border-l-4 border-sky-400 pl-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Solution</h3>
                <p className="text-slate-700 leading-relaxed">
                  SøDera performed a comprehensive documentation audit and implemented a new
                  metadata-driven structure aligned with IEC 81346. Every drawing was linked to its
                  corresponding turbine component in a centralised Common Data Environment. Version
                  control protocols were established and contractor submission workflows were
                  restructured to prevent superseded documents from entering the active set.
                </p>
              </div>

              <div className="border-l-4 border-emerald-400 pl-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Result</h3>
                <p className="text-slate-700 leading-relaxed">
                  Search times for critical drawings were reduced from 15 minutes to under 45
                  seconds. The operator achieved 100 percent version accuracy during the subsequent
                  maintenance cycle, eliminating rework costs and significantly enhancing site
                  safety. The structured handover package delivered at the end of the engagement
                  became the template for all subsequent projects within the operator's portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><hr className="border-t border-slate-200" /></div>

      {/* ── Expertise section ── */}
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
                energy sector documentation. Our work is grounded in international standards applied
                through hands-on project delivery across offshore wind, power plants, and industrial
                infrastructure in Northern Europe.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We do not offer generic solutions. We provide tailored strategies that deliver
                tangible improvements to your operational resilience, compliance posture, and bottom
                line. Our clients do not just get a document system. They get a team that understands
                why structured information management matters at every stage of an asset's lifecycle.
              </p>

              <div className="grid grid-cols-2 gap-6 py-8 border-t border-b border-slate-100 mb-8">
                {[
                  { value: '20+', label: 'Years in energy sector' },
                  { value: 'IEC 81346', label: 'Asset tagging standard' },
                  { value: 'ISO 19650', label: 'Information management' },
                  { value: '100%', label: 'Target version accuracy' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p
                      style={{ fontFamily: 'Georgia, serif' }}
                      className="text-2xl font-bold text-sky-600 mb-1"
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-500">{stat.label}</p>
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

            {/* Challenges */}
            <div className="space-y-6">
              <h3
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                className="text-xl font-bold text-slate-900"
              >
                Documentation challenges we solve
              </h3>
              <div className="grid gap-5">
                {[
                  {
                    icon: Search,
                    title: 'Scattered Information',
                    description:
                      'Critical documents dispersed across legacy archives, email threads, and shared drives. Engineers waste hours searching for the right drawing. A unified, structured approach is the only sustainable solution.',
                  },
                  {
                    icon: GitBranch,
                    title: 'Version Control Failures',
                    description:
                      'Multiple unsynchronised document versions leading to costly errors and compliance risks. When teams work with outdated specifications, the consequences range from rework to safety incidents.',
                  },
                  {
                    icon: Shield,
                    title: 'Compliance Gaps',
                    description:
                      'Missing or incomplete documentation creating substantial audit risks. Adhering to ISO 9001, IEC 81346, and applicable safety regulations demands meticulous record-keeping.',
                  },
                  {
                    icon: Monitor,
                    title: 'Legacy Systems Without Integration',
                    description:
                      'Ageing document systems that cannot connect to CMMS, asset registers, or engineering tools. Maintenance teams cannot find documents by equipment tag.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-5 rounded-xl border border-slate-200 hover:border-sky-200 transition-all">
                    <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-sky-600" />
                    </div>
                    <div>
                      <h4
                        style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                        className="font-bold text-slate-900 mb-1"
                      >
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><hr className="border-t border-slate-200" /></div>

      {/* ── Related Insights ── */}
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
