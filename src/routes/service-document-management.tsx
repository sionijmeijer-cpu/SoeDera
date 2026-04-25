import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
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
    provider: { '@type': 'Organization', name: 'SøDera', url: 'https://www.soedera.eu' },
    areaServed: { '@type': 'Place', name: 'Europe' },
    serviceType: 'Document Management Consulting',
    url: 'https://www.soedera.eu/service-document-management',
  }

  const sidebarLinks = [
    { label: 'Reference Designation (RDS)', href: '/service-rds' },
    { label: 'RDS Audit', href: '/service-rds-audit' },
    { label: 'Building Information Modelling', href: '/service-bim' },
    { label: 'Project Management', href: '/service-project-management' },
    { label: 'Training & SME', href: '/service-training' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema, null, 2) }}
      />

      {/* ── Hero ── */}
      <section
        className="relative min-h-[580px] flex items-center py-32 overflow-hidden"
        style={{ backgroundImage: 'url(https://i.imgur.com/M0wtSyY.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <Link to="/services" className="inline-flex items-center gap-2 text-blue-300 hover:text-white mb-10 group text-sm">
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-500/20 border border-sky-400/30 text-sky-300 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              Document Management
            </div>
            <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Bring Structure to Chaotic Documentation
            </h1>
            <p className="text-xl text-slate-200 mb-6 leading-relaxed">
              Organised, accessible, and compliant systems that save time and reduce operational risks for energy assets.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {['ISO 19650', 'ISO 9001', 'IEC 81346'].map((b) => (
                <span key={b} className="px-3 py-1 bg-white/10 border border-white/20 text-white text-xs font-semibold rounded-full">{b}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/book-assessment" className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-400 transition-all hover:scale-105 shadow-lg">
                Get Your Documentation Assessment
              </Link>
              <Link to="/blog/$articleId" params={{ articleId: 'before-you-sign-dms-requirements' }} className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
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
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md" style={{ background: '#1a3a5c' }}>SA</div>
            <div>
              <blockquote style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl text-slate-800 italic leading-relaxed mb-3">
                "In the energy sector, structured data is not just an administrative requirement. It is the operational backbone that ensures safety, compliance, and long-term asset value. Our goal is to turn chaotic information into a strategic asset that empowers teams to work with absolute confidence."
              </blockquote>
              <p className="text-sm font-semibold text-slate-600">Sylvia Awoudu <span className="font-normal text-slate-400">· Co-founder & COO, SøDera</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Page body: main content + sidebar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex gap-16 items-start">

          {/* ── Main content (full width on mobile, ~70% on desktop) ── */}
          <div className="flex-1 min-w-0">

            {/* What is Industrial Document Management */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Understanding the discipline</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                What is Industrial Document Management?
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
                <p>
                  Industrial Document Management (IDM) is the systematic control of technical information throughout the lifecycle of a built asset. Unlike general office filing, IDM in the energy sector is governed by the principle of Digital Continuity. According to ISO 19650, information must be managed as a structured asset, ensuring that the right person has the right information at the right time.
                </p>
                <p>
                  The core of this discipline is the Single Source of Truth. In a complex facility, a single piece of equipment such as a high-pressure pump may be referenced in hundreds of documents: P&IDs, electrical schematics, maintenance manuals, and safety procedures. Without a centralised management system, these documents often exist in multiple versions across disparate silos. Legacy archives, email threads, and local drives all hold fragments of the same information. This fragmentation leads to Information Decay, where the accuracy of the documentation set degrades by an estimated 10 to 15 percent annually due to unrecorded field changes.
                </p>
                <p>
                  Effective IDM uses metadata-driven architectures rather than simple folder structures. By tagging documents with attributes such as equipment tag numbers aligned with IEC 81346, document types, and revision status, the system enables multi-dimensional discovery. This transforms a passive archive into an active operational tool. IDM also establishes a Common Data Environment, a rigorous process for managing information exchange between project participants, ensuring that as-built data is captured incrementally rather than scrambled for at project closeout.
                </p>
              </div>
            </div>

            {/* Cost callout */}
            <div className="mb-16 bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={22} />
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl font-bold text-amber-900">The cost of getting it wrong</h3>
              </div>
              <p className="text-amber-800 leading-relaxed mb-4">
                In safety-critical environments, poor documentation is a direct liability. Research into offshore wind incidents shows that indirect costs including lost productivity, investigations, and legal liabilities are often several times larger than direct repair costs.
              </p>
              <p className="text-amber-800 leading-relaxed mb-4">
                Consider a maintenance team dispatched to an offshore platform to repair a faulty valve. If they rely on a superseded P&ID, they may arrive with the wrong tools or spare parts. The cost of the dry run including vessel charter, technician hours, and lost production can easily exceed <strong>€20,000 for a single day</strong>. Beyond the financial impact, working with outdated safety procedures or electrical diagrams poses a severe risk to personnel.
              </p>
              <div className="mt-6 border-t border-amber-200 pt-6">
                <h4 className="text-sm font-bold text-amber-900 mb-3">Signs your documentation needs attention</h4>
                <div className="space-y-2">
                  {[
                    'Engineers spend more than 20 minutes finding a specific document',
                    'Multiple versions of the same drawing exist across different systems',
                    'Contractors submit documents via email instead of your DMS',
                    'Handover packages are assembled manually at project closeout',
                    'Maintenance teams cannot find documents by equipment tag',
                    'Audit preparation requires manual document gathering across systems',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-amber-800">
                      <AlertTriangle size={13} className="text-amber-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Lifecycle diagram */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Where we fit</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-2xl font-bold text-slate-900 mb-6">
                Document management spans the entire asset lifecycle
              </h2>
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 overflow-x-auto">
                <svg width="100%" viewBox="0 0 640 240" role="img">
                  <title>Asset lifecycle diagram</title>
                  <desc>Five phases from Design to Operations with SøDera services spanning all phases</desc>
                  <defs>
                    <marker id="marr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                      <path d="M2 1L8 5L2 9" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </marker>
                  </defs>
                  {[
                    { label: 'Design', x: 20 },
                    { label: 'Procurement', x: 132 },
                    { label: 'Construction', x: 244 },
                    { label: 'Commission', x: 356 },
                  ].map((p) => (
                    <g key={p.label}>
                      <rect x={p.x} y={20} width={100} height={46} rx={6} fill="#f8fafc" stroke="#cbd5e1" strokeWidth={0.5}/>
                      <text x={p.x + 50} y={43} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={500} fill="#334155">{p.label}</text>
                      <line x1={p.x + 101} y1={43} x2={p.x + 130} y2={43} stroke="#94a3b8" strokeWidth={1} markerEnd="url(#marr)"/>
                    </g>
                  ))}
                  <rect x={468} y={20} width={152} height={46} rx={6} fill="#f8fafc" stroke="#cbd5e1" strokeWidth={0.5}/>
                  <text x={544} y={43} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={500} fill="#334155">Operations</text>
                  <rect x={20} y={90} width={600} height={36} rx={6} fill="#dbeafe" stroke="#93c5fd" strokeWidth={0.5}/>
                  <text x={320} y={108} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={500} fill="#1e40af">Document &amp; Information Management (ISO 19650)</text>
                  <rect x={20} y={136} width={600} height={36} rx={6} fill="#e0f2fe" stroke="#7dd3fc" strokeWidth={0.5}/>
                  <text x={320} y={154} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={500} fill="#0c4a6e">Reference Designation System (IEC 81346)</text>
                  <rect x={20} y={182} width={600} height={36} rx={6} fill="#fef3c7" stroke="#fcd34d" strokeWidth={0.5}/>
                  <text x={320} y={200} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={500} fill="#78350f">Training &amp; SME Support</text>
                </svg>
              </div>
            </div>

            {/* Methodology */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Our methodology</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                The SøDera approach to document management
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                Our methodology is built on decades of practical experience within the energy sector. We do not just implement systems. We partner with your teams to embed a culture of structured information management that delivers lasting value.
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { n: '01', title: 'Audit and Assessment', desc: 'A structured review of your existing documentation to identify gaps, redundancies, and compliance risks. This assessment forms the blueprint for a customised strategy aligned with your operational needs and regulatory obligations.' },
                  { n: '02', title: 'Strategy Development', desc: 'Designing a customised information architecture aligned with ISO 19650 and your operational goals. We define information requirements, metadata schemas, and governance frameworks before touching a single system.' },
                  { n: '03', title: 'Structured Filing and Metadata', desc: 'Implementing logical hierarchies and robust tagging standards for instant discoverability. Documents are tagged with equipment identifiers aligned with IEC 81346, enabling teams to navigate from an asset tag directly to every related document.' },
                  { n: '04', title: 'Rigorous Version Control', desc: 'Establishing unambiguous protocols to ensure teams always work with the latest, verified information. Every revision is tracked, attributed, and auditable. Superseded documents are flagged or archived, never silently left in place.' },
                  { n: '05', title: 'Digital Transformation', desc: 'Guiding the migration from legacy paper or fragmented digital files to a centralised, searchable Document Management System. We support vendor evaluation, configuration, and contractor onboarding so the system is actually used.' },
                  { n: '06', title: 'Handover Readiness', desc: 'Structuring project-to-operations handover packages so maintenance teams inherit a usable, verified document set from day one. Includes completeness verification, O&M information packs, and alignment to the asset register.' },
                ].map((item) => (
                  <div key={item.n} className="flex gap-5 p-6 rounded-xl border border-slate-200 hover:border-sky-200 hover:shadow-sm transition-all">
                    <span className="text-3xl font-bold text-slate-100 flex-shrink-0 w-10 leading-none" style={{ fontFamily: 'Georgia, serif' }}>{item.n}</span>
                    <div>
                      <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-t border-slate-200 mb-16" />

            {/* Case study */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">A pattern we see repeatedly</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-10">
                When 40,000 drawings become a liability
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Situation</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Across the offshore wind sector, we consistently encounter operators managing legacy archives where tens of thousands of drawings are scattered across multiple systems. Maintenance teams frequently work with superseded versions of electrical diagrams because no single source of truth exists. During planned outages, this leads to significant rework and raises serious safety concerns during live-line operations.
                  </p>
                </div>
                <div className="border-l-4 border-sky-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">What Good Looks Like</h3>
                  <p className="text-slate-700 leading-relaxed">
                    The resolution in every case follows the same pattern: a comprehensive documentation audit, a new metadata-driven structure aligned with IEC 81346, and every drawing linked to its corresponding asset in a centralised Common Data Environment. Version control protocols are established and contractor submission workflows are restructured to prevent superseded documents from re-entering the active set.
                  </p>
                </div>
                <div className="border-l-4 border-emerald-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Outcome</h3>
                  <p className="text-slate-700 leading-relaxed">
                    When this work is done properly, search times for critical drawings drop from 15 minutes to under 45 seconds. Operators achieve near-complete version accuracy during subsequent maintenance cycles, eliminating rework costs and materially enhancing site safety. The structured approach then becomes the template for all subsequent projects within the operator's portfolio.
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-t border-slate-200 mb-16" />

            {/* Expertise */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Why partner with us</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Expertise you can measure. Trust you can verify.
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Choosing SøDera means partnering with experts who bring unparalleled experience in energy sector documentation. Our work is grounded in international standards applied through hands-on project delivery across offshore wind, power plants, and industrial infrastructure in Northern Europe.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We do not offer generic solutions. We provide tailored strategies that deliver tangible improvements to your operational resilience, compliance posture, and bottom line. Our clients do not just get a document system. They get a team that understands why structured information management matters at every stage of an asset's lifecycle.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-t border-b border-slate-100 mb-10">
                {[
                  { value: '20+', label: 'Years in energy sector' },
                  { value: 'IEC 81346', label: 'Asset tagging standard' },
                  { value: 'ISO 19650', label: 'Information management' },
                  { value: '100%', label: 'Target version accuracy' },
                ].map((s) => (
                  <div key={s.label}>
                    <p style={{ fontFamily: 'Georgia, serif' }} className="text-2xl font-bold text-sky-600 mb-1">{s.value}</p>
                    <p className="text-xs text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { icon: Search, title: 'Scattered Information', desc: 'Critical documents dispersed across legacy archives, email threads, and shared drives. Engineers waste hours searching for the right drawing. A unified, structured approach is the only sustainable solution.' },
                  { icon: GitBranch, title: 'Version Control Failures', desc: 'Multiple unsynchronised document versions leading to costly errors and compliance risks. When teams work with outdated specifications, the consequences range from rework to safety incidents.' },
                  { icon: Shield, title: 'Compliance Gaps', desc: 'Missing or incomplete documentation creating substantial audit risks. Adhering to ISO 9001, IEC 81346, and applicable safety regulations demands meticulous record-keeping.' },
                  { icon: Monitor, title: 'Legacy Systems Without Integration', desc: 'Ageing document systems that cannot connect to CMMS, asset registers, or engineering tools. Maintenance teams cannot find documents by equipment tag.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-5 rounded-xl border border-slate-200 hover:border-sky-200 transition-all">
                    <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-sky-600" />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-t border-slate-200 mb-16" />

            {/* Related insights */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">From our team</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-2xl font-bold text-slate-900 mb-8">Related insights</h2>
              <div className="grid sm:grid-cols-3 gap-5">
                {[
                  { id: 'before-you-sign-dms-requirements', title: 'Before You Sign: 10 Critical Requirements to Demand from any DMS Vendor', category: 'Document Management', readTime: '10 min read' },
                  { id: 'essential-guide-document-control-systems', title: 'How to Design Metadata That Actually Works for Technical Documentation', category: 'Document Management', readTime: '4 min read' },
                  { id: 'information-management-offshore-wind-rds-cost', title: 'Information Management in Offshore Wind: Why RDS and Structured Data Save €20,000 Per Incident', category: 'RDS', readTime: '11 min read' },
                ].map((a) => (
                  <Link key={a.id} to="/blog/$articleId" params={{ articleId: a.id }} className="block p-5 rounded-xl border border-slate-200 hover:border-sky-300 hover:shadow-sm transition-all group">
                    <span className="text-xs font-semibold uppercase tracking-wider text-sky-600">{a.category}</span>
                    <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-sm font-bold text-slate-900 mt-2 mb-2 leading-snug group-hover:text-sky-700 transition-colors">{a.title}</h3>
                    <span className="text-xs text-slate-400">{a.readTime}</span>
                  </Link>
                ))}
              </div>
            </div>

          </div>{/* end main content */}

          {/* ── Sticky Sidebar ── */}
          <aside className="hidden xl:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-5">

              <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5">
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-2">Not sure where to start?</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  A Document Assessment gives you a clear picture of where you stand and exactly what to do next. Delivered in approximately two weeks.
                </p>
                <Link to="/book-assessment" className="block w-full px-4 py-2.5 bg-sky-500 text-white text-sm font-semibold rounded-xl hover:bg-sky-400 transition-colors text-center">
                  Book a Document Assessment
                </Link>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Related Services</h3>
                <div className="space-y-1">
                  {sidebarLinks.map((item) => (
                    <Link key={item.label} to={item.href as any} className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 group transition-colors text-sm text-slate-700 hover:text-sky-600">
                      <ArrowRight size={12} className="text-slate-300 group-hover:text-sky-500 flex-shrink-0 transition-colors" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-2">Train your team</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Practical document management and ISO 19650 training. On-site or remote.
                </p>
                <Link to={'/service-training' as any} className="block w-full px-4 py-2.5 bg-amber-500 text-white text-sm font-semibold rounded-xl hover:bg-amber-400 transition-colors text-center">
                  Explore Training
                </Link>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Standards we work with</h3>
                <div className="space-y-2">
                  {['ISO 19650', 'ISO 9001', 'IEC 81346', 'ISO 55001'].map((std) => (
                    <div key={std} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle size={13} className="text-sky-500 flex-shrink-0" />
                      {std}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}
