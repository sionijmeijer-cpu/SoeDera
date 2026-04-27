import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  ClipboardCheck,
  Shield,
  Database,
  GitMerge,
} from 'lucide-react'

export const Route = createFileRoute('/service-project-management')({
  component: ProjectManagementPage,
})

function ProjectManagementPage() {
  SEOHead({
    title: 'Project Management for Energy Documentation and Digital Transformation | SøDera',
    description:
      'SøDera provides information-centric project management for energy operators undertaking documentation, RDS implementation, and digital transformation initiatives. ISO 19650 and IEC 81346 aligned.',
    keywords:
      'project management energy sector, information management project, ISO 19650 project management, IEC 81346 project, digital transformation energy, CMMS migration project management, energy documentation project',
    canonicalUrl: 'https://www.soedera.eu/service-project-management',
  })

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Project Management for Energy Documentation and Digital Transformation',
    description:
      'SøDera provides information-centric project management for energy operators undertaking documentation, RDS implementation, BIM, and digital transformation initiatives.',
    provider: { '@type': 'Organization', name: 'SøDera', url: 'https://www.soedera.eu' },
    areaServed: { '@type': 'Place', name: 'Europe' },
    serviceType: 'Project Management Consulting',
    url: 'https://www.soedera.eu/service-project-management',
  }

  const sidebarLinks = [
    { label: 'Document Management', href: '/service-document-management' },
    { label: 'Reference Designation (RDS)', href: '/service-rds' },
    { label: 'RDS Audit', href: '/service-rds-audit' },
    { label: 'Building Information Modelling', href: '/service-bim' },
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
        style={{ backgroundImage: 'url(https://i.imgur.com/lCNBEPI.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-slate-900/72" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <Link to="/services" className="inline-flex items-center gap-2 text-blue-300 hover:text-white mb-10 group text-sm">
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-500/20 border border-sky-400/30 text-sky-300 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              Project Management
            </div>
            <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Expert Oversight for Critical Energy Projects
            </h1>
            <p className="text-xl text-slate-200 mb-6 leading-relaxed">
              Specialised project management for documentation, data, and digital transformation in high-stakes energy environments. Information-centric, standards-aligned, and built on field experience.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {['PMBOK Aligned', 'ISO 19650', 'IEC 81346'].map((b) => (
                <span key={b} className="px-3 py-1 bg-white/10 border border-white/20 text-white text-xs font-semibold rounded-full">{b}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-400 transition-all hover:scale-105 shadow-lg">
                Discuss Your Project
              </Link>
              <Link to="/book-assessment" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
                Book an Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Expert quote ── */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-start gap-6 max-w-4xl">
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md" style={{ background: '#1a3a5c' }}>SC</div>
            <div>
              <blockquote style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl text-slate-800 italic leading-relaxed mb-3">
                "In the energy sector, effective project management is the critical bridge between ambitious vision and successful reality. It is about meticulously orchestrating information, resources, and expertise to navigate complexity, mitigate risks, and deliver projects that not only meet but exceed operational and compliance expectations."
              </blockquote>
              <p className="text-sm font-semibold text-slate-600">Søren Christensen <span className="font-normal text-slate-400">· Co-founder & CEO, SøDera</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Page body: main content + sidebar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex gap-16 items-start">

          {/* ── Main content ── */}
          <div className="flex-1 min-w-0">

            {/* What is Information-Centric Project Management */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Understanding the discipline</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                What is Information-Centric Project Management?
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
                <p>
                  Traditional project management focuses on the Iron Triangle of Time, Cost, and Scope. In the energy and industrial sectors, this framework is necessary but not sufficient. We advocate for Information-Centric Project Management, a discipline that recognises the quality and flow of information as the primary driver of project success. If the technical data is flawed, inaccessible, or disconnected from operational requirements, the schedule and budget will inevitably suffer regardless of how well the traditional project controls are managed.
                </p>
                <p>
                  In complex energy initiatives, project management must treat information as a critical workstream in its own right, not as a byproduct of engineering activity. This means aligning with standards like ISO 19650 and IEC 81346 from the project outset, establishing a Common Data Environment early enough to prevent the Information Silo effect where critical data becomes trapped within individual departments or contractor organisations, and defining information deliverables with the same rigour applied to physical deliverables.
                </p>
                <p>
                  The most overlooked aspect of energy project management is Digital Continuity: ensuring that the data generated during the project phase is structured for long-term operational use rather than optimised for project closeout. Projects that treat handover readiness as a milestone to be achieved throughout the project rather than a deliverable assembled at the end consistently experience fewer delays during commissioning and fewer data quality issues in the first years of operation.
                </p>
                <p>
                  Industry data consistently shows that projects utilising structured information management processes experience significantly fewer delays during the commissioning and handover phases. The operations team receives a usable, verified data set rather than inheriting a liability that requires months of remediation before reliable maintenance can begin.
                </p>
              </div>
            </div>

            {/* ── PHOTO PLACEHOLDER 1 ── */}
            <div className="mb-16 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center h-64">
              <div className="text-center">
                <p className="text-slate-400 text-sm font-semibold">Photo placeholder</p>
                <p className="text-slate-400 text-xs mt-1">Suggested: Project dashboard, control room, or team coordination in an energy environment</p>
              </div>
            </div>

            {/* Information workstreams breakdown */}
            <div className="mb-16 bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl font-bold text-slate-900 mb-6">
                Information as a project workstream
              </h3>
              <div className="space-y-5">
                {[
                  { label: 'Information Requirements', color: 'bg-sky-600', desc: 'Defining what information must be produced, by whom, when, and to what standard before a single document or drawing is created. This is the Employer Information Requirement (EIR) in ISO 19650 terms and the single most important project management decision for information quality.' },
                  { label: 'Common Data Environment', color: 'bg-indigo-600', desc: 'Establishing the CDE early enough that all project participants, including contractors, use it from the outset. A CDE set up after the project is underway requires retroactive migration that is always incomplete and always costly.' },
                  { label: 'Data Quality Monitoring', color: 'bg-emerald-600', desc: 'Treating data quality as a project KPI with regular reporting, not a compliance check at handover. Data quality issues caught during execution cost a fraction of those discovered during commissioning or operations.' },
                  { label: 'Handover Readiness', color: 'bg-amber-600', desc: 'Building the handover package incrementally throughout the project rather than assembling it in the final weeks. This is the single intervention with the highest return on investment in any energy project.' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className={`w-3 h-3 ${item.color} rounded-full flex-shrink-0 mt-2`} />
                    <div>
                      <p className="font-bold text-slate-900 mb-1">{item.label}</p>
                      <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost callout */}
            <div className="mb-16 bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={22} />
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl font-bold text-amber-900">The cost of poor handover</h3>
              </div>
              <p className="text-amber-800 leading-relaxed mb-4">
                The project-to-operations handover is the most critical phase of any energy initiative. If the documentation and asset data are incomplete or unverified at this point, the operations team inherits a liability rather than an asset.
              </p>
              <p className="text-amber-800 leading-relaxed">
                Consider a major substation upgrade where the EPC contractor fails to provide a structured, IEC-compliant asset register at handover. The operations team must then manually verify thousands of physical tags against the digital system before maintenance can begin safely. This handover scramble can cost an operator upwards of <strong>€300,000</strong> in internal labour, specialised consultancy fees, and delayed maintenance cycles. Information-centric project management eliminates this risk by ensuring handover readiness is built into every project milestone, not assembled in the final weeks under pressure.
              </p>
            </div>

            {/* Lifecycle diagram */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Where we fit</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-2xl font-bold text-slate-900 mb-6">
                Information-centric management across the full project lifecycle
              </h2>
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 overflow-x-auto">
                <svg width="100%" viewBox="0 0 640 200" role="img">
                  <title>Project lifecycle diagram</title>
                  <desc>Five project phases with information management and handover readiness spanning all phases</desc>
                  <defs>
                    <marker id="marrD" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                      <path d="M2 1L8 5L2 9" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </marker>
                  </defs>
                  {[
                    { label: 'Definition', x: 20 },
                    { label: 'Planning', x: 152 },
                    { label: 'Execution', x: 284 },
                    { label: 'Commissioning', x: 416 },
                  ].map((p) => (
                    <g key={p.label}>
                      <rect x={p.x} y={20} width={110} height={46} rx={6} fill="#f8fafc" stroke="#cbd5e1" strokeWidth={0.5}/>
                      <text x={p.x + 55} y={43} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={500} fill="#334155">{p.label}</text>
                      <line x1={p.x + 111} y1={43} x2={p.x + 150} y2={43} stroke="#94a3b8" strokeWidth={1} markerEnd="url(#marrD)"/>
                    </g>
                  ))}
                  <rect x={548} y={20} width={72} height={46} rx={6} fill="#f8fafc" stroke="#cbd5e1" strokeWidth={0.5}/>
                  <text x={584} y={43} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={500} fill="#334155">Handover</text>
                  <rect x={20} y={100} width={600} height={36} rx={6} fill="#dbeafe" stroke="#93c5fd" strokeWidth={0.5}/>
                  <text x={320} y={118} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={500} fill="#1e40af">Information-Centric Project Management (ISO 19650, IEC 81346)</text>
                  <rect x={20} y={146} width={600} height={36} rx={6} fill="#dcfce7" stroke="#86efac" strokeWidth={0.5}/>
                  <text x={320} y={164} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={500} fill="#14532d">Handover Readiness Built Incrementally Throughout</text>
                </svg>
              </div>
            </div>

            {/* Methodology */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Our methodology</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                The SøDera project framework
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                We provide clarity, control, and efficiency for your most critical information and digital transformation initiatives. Our framework applies structured project management discipline to the specific challenges of energy sector documentation and data projects.
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { n: '01', title: 'Project Definition and Planning', desc: 'Clearly defining scope, objectives, information requirements, and success criteria. For information projects, this includes establishing the Employer Information Requirements, the data governance framework, and the handover readiness criteria before execution begins.' },
                  { n: '02', title: 'CDE Establishment', desc: 'Setting up a robust Common Data Environment configured for the specific project and stakeholder landscape. Includes naming conventions, workflow configuration, access rights, and contractor onboarding protocols.' },
                  { n: '03', title: 'Execution and Monitoring', desc: 'Managing resources, timelines, and deliverables with a focus on data integrity at every stage. Information quality is tracked as a project KPI alongside cost and schedule, not treated as a quality check at the end.' },
                  { n: '04', title: 'Quality and Compliance Control', desc: 'Conducting regular data quality audits against ISO 19650 and IEC 81346 standards throughout execution. Issues identified during the project cost a fraction of those discovered during commissioning.' },
                  { n: '05', title: 'Risk Mitigation', desc: 'Proactively identifying and addressing information-related risks before they impact the schedule. This includes contractor data quality, system integration risks, and the governance gaps that lead to Standard Drift.' },
                  { n: '06', title: 'Closure and Handover', desc: 'Ensuring a seamless transition to operations with a verified, usable, and compliant data set. The handover package is assembled incrementally throughout the project so that closure is a structured verification, not a scramble.' },
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

            {/* ── PHOTO PLACEHOLDER 2 ── */}
            <div className="mb-16 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center h-64">
              <div className="text-center">
                <p className="text-slate-400 text-sm font-semibold">Photo or graph placeholder</p>
                <p className="text-slate-400 text-xs mt-1">Suggested: Project milestone timeline, data quality improvement chart, or handover readiness tracker</p>
              </div>
            </div>

            <hr className="border-t border-slate-200 mb-16" />

            {/* Case study */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">A pattern we see repeatedly</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-10">
                When IT and Engineering cannot agree and the project stalls
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Situation</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Across digital transformation projects in the energy sector, we consistently encounter the same pattern: an operator transitioning from paper-based maintenance records or legacy systems to a fully digital CMMS finds the project stalled. The reason is almost always the same. IT and Engineering are not aligned on what the new system needs to contain or how the data should be structured. Data quality issues accumulated over years make migration estimates unreliable. And there is no single owner of the information workstream who can arbitrate between the two departments.
                  </p>
                </div>
                <div className="border-l-4 border-sky-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">What Good Looks Like</h3>
                  <p className="text-slate-700 leading-relaxed">
                    The resolution requires someone who understands both the technical standards governing asset information and the operational reality of the maintenance teams who will use the new system. An information-centric project management approach establishes a clear data governance framework based on IEC 81346, acts as the bridge between IT and Engineering, and ensures the new system is configured around what the operators actually need rather than what was easiest to migrate.
                  </p>
                </div>
                <div className="border-l-4 border-emerald-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Outcome</h3>
                  <p className="text-slate-700 leading-relaxed">
                    When digital transformation projects are managed with a genuine information-centric approach, they complete faster than revised estimates, with significantly higher data accuracy rates than the legacy systems they replace. The most consistent finding is a meaningful improvement in maintenance scheduling efficiency within the first year of operation, because the teams using the system can finally trust the data it contains.
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
                What distinguishes SøDera's project management practice is the depth of domain expertise behind every project decision. We do not manage energy information projects from a generic project management framework. We manage them with a thorough understanding of the standards, the data structures, and the operational realities that determine whether an energy information project actually delivers value.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                This means we can make informed decisions about data governance, contractor performance on information deliverables, and system integration risks that a general project manager cannot. And it means the projects we manage are structured to deliver clean, usable, compliant data to operations rather than a technically complete deliverable that requires months of remediation before it is fit for use.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-t border-b border-slate-100 mb-10">
                {[
                  { value: 'PMBOK', label: 'Aligned methodology' },
                  { value: 'ISO 19650', label: 'Information management' },
                  { value: '20%', label: 'Fewer commissioning delays' },
                  { value: '95%+', label: 'Target data accuracy' },
                ].map((s) => (
                  <div key={s.label}>
                    <p style={{ fontFamily: 'Georgia, serif' }} className="text-2xl font-bold text-sky-600 mb-1">{s.value}</p>
                    <p className="text-xs text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { icon: ClipboardCheck, title: 'Information projects require domain knowledge', desc: 'Generic project managers cannot assess the quality of an IEC 81346 designation system or identify the governance gaps that will cause Standard Drift. We can, and we do, on every project we manage.' },
                  { icon: GitMerge, title: 'The bridge between IT and Engineering', desc: 'Digital transformation projects fail most often at the interface between IT and Engineering. We understand both sides and can facilitate the decisions that keep projects moving.' },
                  { icon: Database, title: 'Handover is a project discipline, not a phase', desc: 'We treat handover readiness as a continuous workstream built into every project milestone, not a deliverable assembled under pressure in the final weeks of the project.' },
                  { icon: Shield, title: 'Risk identification before it becomes cost', desc: 'Information-related risks, including data quality issues, contractor non-conformances, and governance gaps, are identified and addressed during execution when the cost of correction is manageable.' },
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
                  { id: 'rds-ps-explained-plant-asset-tagging', title: 'RDS-PS Explained: How One Tag Connects Your Entire Plant', category: 'RDS', readTime: '8 min read' },
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
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-2">Discuss your project</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Whether you are starting a new initiative or rescuing a stalled one, we can provide the information-centric project management expertise you need.
                </p>
                <Link to="/contact" className="block w-full px-4 py-2.5 bg-sky-500 text-white text-sm font-semibold rounded-xl hover:bg-sky-400 transition-colors text-center">
                  Get in Touch
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
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-2">Train your project team</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Practical ISO 19650 and IEC 81346 training for project managers and document controllers. On-site or remote.
                </p>
                <Link to={'/service-training' as any} className="block w-full px-4 py-2.5 bg-amber-500 text-white text-sm font-semibold rounded-xl hover:bg-amber-400 transition-colors text-center">
                  Explore Training
                </Link>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Standards we work with</h3>
                <div className="space-y-2">
                  {['ISO 19650', 'IEC 81346', 'ISO 9001', 'ISO 55001', 'PMBOK'].map((std) => (
                    <div key={std} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle size={13} className="text-sky-500 flex-shrink-0" />
                      {std}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Types of projects we manage</h3>
                <div className="space-y-2">
                  {[
                    'RDS implementation',
                    'Document system migration',
                    'CMMS data migration',
                    'BIM implementation',
                    'Digital twin projects',
                    'Handover readiness programmes',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle size={13} className="text-slate-400 flex-shrink-0" />
                      {item}
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
