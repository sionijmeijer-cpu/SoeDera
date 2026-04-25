import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  ClipboardCheck,
  Users,
  Settings,
  GitMerge,
} from 'lucide-react'

export const Route = createFileRoute('/service-rds-audit')({
  component: RDSAuditPage,
})

function RDSAuditPage() {
  SEOHead({
    title: 'IEC 81346 RDS Audit | Independent Third-Party Review | SøDera',
    description:
      'SøDera provides independent RDS audits against IEC 81346 for energy operators. Assess compliance, maturity, and operational value of your Reference Designation System across ten structured focus areas.',
    keywords:
      'RDS audit, IEC 81346 audit, reference designation audit, asset tagging compliance, IEC 81346 compliance, RDS review energy sector, offshore wind RDS audit',
    canonicalUrl: 'https://www.soedera.eu/service-rds-audit',
  })

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'IEC 81346 RDS Audit',
    description:
      'Independent third-party audit of Reference Designation Systems against IEC 81346 for energy operators. Covers compliance, maturity, and operational value across ten structured focus areas.',
    provider: { '@type': 'Organization', name: 'SøDera', url: 'https://www.soedera.eu' },
    areaServed: { '@type': 'Place', name: 'Europe' },
    serviceType: 'RDS Audit and Compliance Review',
    url: 'https://www.soedera.eu/service-rds-audit',
  }

  const sidebarLinks = [
    { label: 'Reference Designation (RDS)', href: '/service-rds' },
    { label: 'Document Management', href: '/service-document-management' },
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
              RDS Audit
            </div>
            <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Independent Third-Party RDS Audit
            </h1>
            <p className="text-xl text-slate-200 mb-6 leading-relaxed">
              Ensure your asset designation system is compliant, mature, and delivering practical operational value. Independent verification built on IEC 81346 and two decades of energy sector experience.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {['IEC 81346', 'ISO 81346', 'Third-Party Independent', 'Compliance Verified'].map((b) => (
                <span key={b} className="px-3 py-1 bg-white/10 border border-white/20 text-white text-xs font-semibold rounded-full">{b}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/book-assessment" className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-400 transition-all hover:scale-105 shadow-lg">
                Request an RDS Audit
              </Link>
              <Link to="/service-rds" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
                About RDS and IEC 81346
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
                "An independent RDS audit is not just a compliance check. It is a strategic investment in the integrity of your asset information. It provides clarity on where you stand and a clear roadmap to ensure your designation system truly supports operational excellence and long-term asset value."
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

            {/* What is an RDS Audit */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Understanding the discipline</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                What is an RDS Audit?
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
                <p>
                  An RDS Audit is a structured, independent review of a facility's Reference Designation System against the IEC 81346 standard series. In industrial information management, an audit serves as a critical quality gate. It ensures that the Digital Thread — the consistent identification of assets from design through to operations — remains intact and has not suffered from Standard Drift.
                </p>
                <p>
                  Standard Drift is the gradual divergence of a designation system from its original intent. It happens quietly over years as different teams, contractors, and software tools each apply the standard slightly differently. By the time the problem is visible, thousands of assets may carry designations that are technically non-compliant, ambiguous, or disconnected from the rest of the information landscape.
                </p>
                <p>
                  The audit process evaluates three critical dimensions. The first is Compliance: does the system adhere to the structural and syntactical rules of IEC 81346, including the correct use of Function, Product, and Location aspects and their prefixes? The second is Maturity: how well is the system embedded in the organisation, including governance frameworks, staff competency, and change management procedures? A mature system is one that can survive a 30-year asset lifecycle without degrading. The third is Value: is the system actually useful in practice? We evaluate whether the RDS is supporting operational goals such as linking equipment tags directly to maintenance manuals in a CMMS.
                </p>
                <p>
                  Research in industrial data governance shows that facilities with audited and governed designation systems experience significantly fewer data integration issues during major system upgrades, because the underlying data structure is verified and reliable. The audit is not the end of the work. It is the beginning of a well-informed improvement programme.
                </p>
              </div>
            </div>

            {/* ── PHOTO PLACEHOLDER 1 ── */}
            <div className="mb-16 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center h-64">
              <div className="text-center">
                <p className="text-slate-400 text-sm font-semibold">Photo placeholder</p>
                <p className="text-slate-400 text-xs mt-1">Suggested: Audit report document or facility inspection photo</p>
              </div>
            </div>

            {/* Three audit dimensions */}
            <div className="mb-16">
              <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-2xl font-bold text-slate-900 mb-8">
                The three dimensions of a complete RDS audit
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    label: 'Compliance',
                    color: 'bg-sky-600',
                    short: 'Does it conform?',
                    desc: 'Technical review of syntactical and structural adherence to IEC 81346. Covers correct use of aspects, prefixes, hierarchy levels, and cross-system consistency.',
                  },
                  {
                    label: 'Maturity',
                    color: 'bg-indigo-600',
                    short: 'Is it embedded?',
                    desc: 'Assessment of governance frameworks, staff competency, change management procedures, and the organisation\'s ability to maintain the system over the full asset lifecycle.',
                  },
                  {
                    label: 'Value',
                    color: 'bg-emerald-600',
                    short: 'Does it deliver?',
                    desc: 'Evaluation of whether the RDS is practically useful. Can maintenance teams find documents by tag? Is the CMMS linked correctly? Does the system support real operational workflows?',
                  },
                ].map((item) => (
                  <div key={item.label} className="p-6 rounded-xl border border-slate-200 hover:border-sky-200 transition-all">
                    <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center text-white font-bold text-sm mb-4`}>
                      {item.label.charAt(0)}
                    </div>
                    <h4 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-1">{item.label}</h4>
                    <p className="text-xs font-semibold text-sky-600 mb-3">{item.short}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost callout */}
            <div className="mb-16 bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={22} />
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl font-bold text-amber-900">The cost of Standard Drift</h3>
              </div>
              <p className="text-amber-800 leading-relaxed mb-4">
                Without independent verification, designation systems often evolve in silos. Over time, different departments such as Electrical and Mechanical may develop their own interpretations of the standard. This Standard Drift is invisible until a major system change forces a reckoning.
              </p>
              <p className="text-amber-800 leading-relaxed">
                Consider a major utility upgrading its Asset Management System. If the underlying RDS data has suffered from Standard Drift, the new software will fail to automatically link thousands of assets. The cost of manual data cleanup and re-tagging for a single large facility can easily exceed <strong>€100,000</strong> in consultancy fees and internal labour. An RDS Audit identifies these inconsistencies early, allowing for proactive correction before they become multi-million euro integration bottlenecks.
              </p>
            </div>

            {/* Lifecycle diagram */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Where audits fit</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-2xl font-bold text-slate-900 mb-6">
                RDS audits are most critical at lifecycle transitions
              </h2>
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 overflow-x-auto">
                <svg width="100%" viewBox="0 0 640 200" role="img">
                  <title>Asset lifecycle with audit checkpoints</title>
                  <desc>Five lifecycle phases with audit checkpoint markers at key transitions</desc>
                  <defs>
                    <marker id="marrA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
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
                      <line x1={p.x + 101} y1={43} x2={p.x + 130} y2={43} stroke="#94a3b8" strokeWidth={1} markerEnd="url(#marrA)"/>
                    </g>
                  ))}
                  <rect x={468} y={20} width={152} height={46} rx={6} fill="#f8fafc" stroke="#cbd5e1" strokeWidth={0.5}/>
                  <text x={544} y={43} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={500} fill="#334155">Operations</text>
                  {/* Audit checkpoint markers */}
                  {[356, 468].map((x) => (
                    <g key={x}>
                      <line x1={x} y1={10} x2={x} y2={76} stroke="#f59e0b" strokeWidth={1.5} strokeDasharray="4 2"/>
                      <circle cx={x} cy={8} r={5} fill="#f59e0b"/>
                      <text x={x} y={8} textAnchor="middle" dominantBaseline="central" fontSize={9} fontWeight={700} fill="#fff">A</text>
                    </g>
                  ))}
                  <rect x={20} y={100} width={600} height={36} rx={6} fill="#e0f2fe" stroke="#7dd3fc" strokeWidth={0.5}/>
                  <text x={320} y={118} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={500} fill="#0c4a6e">Reference Designation System (IEC 81346)</text>
                  <rect x={20} y={146} width={600} height={36} rx={6} fill="#dcfce7" stroke="#86efac" strokeWidth={0.5}/>
                  <text x={320} y={164} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={500} fill="#14532d">RDS Audit Checkpoints: Pre-commissioning and Pre-handover</text>
                </svg>
              </div>
              <p className="text-xs text-slate-400 mt-3 italic">
                A markers indicate critical audit checkpoints before commissioning and before handover to operations.
              </p>
            </div>

            {/* Ten-point methodology */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Our methodology</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                The SøDera ten-point audit
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                We employ a consistent, comprehensive methodology across ten defined focus areas. Every audit produces a formal findings report with graded findings: Major Non-Conformities, Minor Non-Conformities, and Observations, each with a prioritised remediation roadmap.
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { n: '01', title: 'Conformance to IEC 81346', desc: 'Technical syntactical and structural review of all designations against the standard. Covers aspect usage, prefix correctness, hierarchy depth, and cross-system consistency.' },
                  { n: '02', title: 'Organisational Consistency', desc: 'Verification that designation practices are uniform across all teams, disciplines, and contractor boundaries. Inconsistency between departments is one of the most common audit findings.' },
                  { n: '03', title: 'Completeness of Coverage', desc: 'Ensuring all relevant assets across the facility carry valid, complete designations. Gaps in coverage create operational blind spots that surface during maintenance and upgrades.' },
                  { n: '04', title: 'Governance and Ownership', desc: 'Reviewing rules, processes, and accountabilities for system maintenance. A well-governed RDS has a named owner, documented procedures, and a change management workflow.' },
                  { n: '05', title: 'Tool and System Implementation', desc: 'Assessing how well the RDS is embedded in engineering tools, CMMS, asset registers, and document management systems. The tag must be the linking key across all platforms.' },
                  { n: '06', title: 'Change Management', desc: 'Evaluating the controls in place for system updates, modifications, and additions. Without formal change management, a compliant system will drift back into non-conformance within months.' },
                  { n: '07', title: 'Lifecycle Traceability', desc: 'Verifying the Digital Thread from design intent through procurement, construction, commissioning, and operations. Data loss at lifecycle transitions is among the costliest problems in asset management.' },
                  { n: '08', title: 'Staff Competency', desc: 'Assessing the knowledge levels of personnel who create, maintain, and use the RDS. Technical compliance is impossible to sustain without the right competency in the right roles.' },
                  { n: '09', title: 'Documentation Quality', desc: 'Reviewing the clarity, completeness, and accessibility of internal RDS guidelines, naming conventions, and master lists. Poor documentation is the leading cause of designation inconsistency.' },
                  { n: '10', title: 'Fitness for Purpose', desc: 'Overall evaluation of practical operational value. Does the RDS actually help maintenance teams, engineers, and asset managers do their work? Compliance without usability is not enough.' },
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
                <p className="text-slate-400 text-xs mt-1">Suggested: Sample audit finding matrix or severity breakdown chart</p>
              </div>
            </div>

            <hr className="border-t border-slate-200 mb-16" />

            {/* Case study */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">A pattern we see repeatedly</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-10">
                When the EPC says compliant but the data says otherwise
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Situation</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Across major offshore wind handovers, we consistently see the same scenario: an EPC contractor asserts full IEC 81346 compliance, yet the operations team uncovers discrepancies between the SCADA system tags and the as-built drawings within weeks of taking over the asset. By the time these are found, the leverage to compel the contractor to fix them is rapidly diminishing.
                  </p>
                </div>
                <div className="border-l-4 border-sky-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">What Good Looks Like</h3>
                  <p className="text-slate-700 leading-relaxed">
                    An independent RDS audit conducted before final handover changes this dynamic entirely. The audit identifies Major Non-Conformities in product-aspect hierarchies, observations regarding the absence of a formal change management procedure, and gaps in the completeness of coverage across specific turbine types. The findings report is formal, graded, and specific enough to form part of the contractual punch list.
                  </p>
                </div>
                <div className="border-l-4 border-emerald-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Outcome</h3>
                  <p className="text-slate-700 leading-relaxed">
                    When an independent audit is in place before handover, operators have the leverage to ensure designation errors are corrected before final payment is released. The resulting clean audit report gives the operations team the confidence to launch their maintenance management system with accurate data from day one, avoiding the costly remediation work that otherwise follows an unchecked handover.
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
                SøDera's audit practice is grounded in years of hands-on RDS implementation across offshore wind, power plants, substations, and industrial infrastructure. We do not audit against the standard from a desk. We have applied IEC 81346 in the field and understand exactly where real systems deviate from the intent of the standard and why.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our independence is the foundation of every audit we deliver. We have no commercial interest in the outcome of the findings. Our only obligation is to give you an accurate, actionable picture of where your system stands.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-t border-b border-slate-100 mb-10">
                {[
                  { value: '10', label: 'Audit focus areas' },
                  { value: 'IEC 81346', label: 'Core standard expertise' },
                  { value: 'Independent', label: 'Third-party objectivity' },
                  { value: 'Actionable', label: 'Prioritised roadmap' },
                ].map((s) => (
                  <div key={s.label}>
                    <p style={{ fontFamily: 'Georgia, serif' }} className="text-2xl font-bold text-sky-600 mb-1">{s.value}</p>
                    <p className="text-xs text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { icon: ClipboardCheck, title: 'Pre-handover assurance', desc: 'Operators receiving assets from EPC contractors need independent verification before final payment. Our audit gives you the evidence base to hold contractors accountable for designation quality.' },
                  { icon: Users, title: 'Operational readiness', desc: 'Maintenance teams cannot operate effectively from a designation system they cannot trust. An audit before system launch eliminates the data quality issues that otherwise surface during the first maintenance cycle.' },
                  { icon: Settings, title: 'System upgrade preparation', desc: 'Before migrating to a new CMMS or asset management platform, an RDS audit ensures the underlying data is clean enough to migrate. Poor data imported into a new system is still poor data.' },
                  { icon: GitMerge, title: 'Periodic compliance verification', desc: 'Designation systems degrade over time without active governance. Periodic audits identify Standard Drift before it becomes a costly remediation project, and reinforce the governance habits that prevent it recurring.' },
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
                  { id: 'rds-ps-explained-plant-asset-tagging', title: 'RDS-PS Explained: How One Tag Connects Your Entire Plant', category: 'RDS', readTime: '8 min read' },
                  { id: 'rdspp-vs-rdsps', title: 'RDS-PP vs RDS-PS: Understanding Standardisation, Flexibility, and the Choices Asset Owners Must Make', category: 'RDS', readTime: '5 min read' },
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
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-2">Request an RDS Audit</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Independent review across ten structured focus areas. Graded findings report with a prioritised remediation roadmap.
                </p>
                <Link to="/book-assessment" className="block w-full px-4 py-2.5 bg-sky-500 text-white text-sm font-semibold rounded-xl hover:bg-sky-400 transition-colors text-center">
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
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-2">Train your team on RDS</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Ensure your team understands IEC 81346 before or after an audit. On-site or remote.
                </p>
                <Link to={'/service-training' as any} className="block w-full px-4 py-2.5 bg-amber-500 text-white text-sm font-semibold rounded-xl hover:bg-amber-400 transition-colors text-center">
                  Explore Training
                </Link>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Audit finding grades</h3>
                <div className="space-y-3">
                  {[
                    { grade: 'Major NC', color: 'bg-red-100 text-red-700', desc: 'Requires correction before handover or system launch' },
                    { grade: 'Minor NC', color: 'bg-amber-100 text-amber-700', desc: 'Should be corrected within an agreed timeframe' },
                    { grade: 'Observation', color: 'bg-sky-100 text-sky-700', desc: 'Recommended improvement to reduce future risk' },
                  ].map((item) => (
                    <div key={item.grade}>
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold mb-1 ${item.color}`}>{item.grade}</span>
                      <p className="text-xs text-slate-500 leading-snug">{item.desc}</p>
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
