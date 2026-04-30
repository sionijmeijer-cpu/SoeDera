import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Search,
  BarChart2,
  Shield,
  GitBranch,
} from 'lucide-react'

export const Route = createFileRoute('/service-document-assessment' as any)({
  component: DocumentAssessmentPage,
})

function DocumentAssessmentPage() {
  SEOHead({
    title: 'Document Assessment | Information Maturity Review | SøDera',
    description:
      'SøDera delivers strategic document assessments for energy operators. Identify gaps, score information maturity against ISO 19650, and receive a prioritised roadmap for digital transformation. Delivered in approximately two weeks.',
    keywords:
      'document assessment energy sector, information maturity assessment, ISO 19650 assessment, documentation health review, document management gap analysis, engineering data assessment, CMMS readiness assessment',
    canonicalUrl: 'https://www.soedera.eu/service-document-assessment',
  })

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Document Assessment for Energy Operators',
    description:
      'SøDera delivers strategic document assessments for energy operators. Identify gaps, score information maturity against ISO 19650, and receive a prioritised roadmap for digital transformation.',
    provider: { '@type': 'Organization', name: 'SøDera', url: 'https://www.soedera.eu' },
    areaServed: { '@type': 'Place', name: 'Europe' },
    serviceType: 'Document Assessment and Information Maturity Review',
    url: 'https://www.soedera.eu/service-document-assessment',
  }

  const sidebarLinks = [
    { label: 'Document Management', href: '/service-document-management' },
    { label: 'Documentation Audit', href: '/service-documentation-audit' },
    { label: 'RDS Audit', href: '/service-rds-audit' },
    { label: 'Reference Designation (RDS)', href: '/service-rds' },
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
        <div className="absolute inset-0 bg-slate-900/72" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <Link to="/service-document-management" className="inline-flex items-center gap-2 text-blue-300 hover:text-white mb-10 group text-sm">
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            Back to Document Management
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-500/20 border border-sky-400/30 text-sky-300 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              Document Assessment
            </div>
            <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Uncover the Hidden Risks in Your Documentation
            </h1>
            <p className="text-xl text-slate-200 mb-6 leading-relaxed">
              A strategic evaluation of your current information landscape to identify gaps, score maturity against ISO 19650, and define a clear roadmap for improvement. Delivered in approximately two weeks.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {['ISO 19650', 'ISO 9001', 'Maturity Assessment'].map((b) => (
                <span key={b} className="px-3 py-1 bg-white/10 border border-white/20 text-white text-xs font-semibold rounded-full">{b}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/book-assessment" className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-400 transition-all hover:scale-105 shadow-lg">
                Book a Document Assessment
              </Link>
              <Link to="/service-document-management" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
                About Document Management
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
                "You cannot optimise what you do not understand. A Document Assessment is the critical diagnostic phase. It moves the conversation from we think our data is bad to we know exactly where our risks are, what they cost, and how to fix them."
              </blockquote>
              <p className="text-sm font-semibold text-slate-600">Sylvia Awoudu <span className="font-normal text-slate-400">· Co-founder & COO, SøDera</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Page body: main content + sidebar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex gap-16 items-start">

          {/* ── Main content ── */}
          <div className="flex-1 min-w-0">

            {/* What is a Document Assessment */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Understanding the discipline</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                What is a strategic Document Assessment?
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
                <p>
                  In industrial asset management, a Document Assessment is a structured, diagnostic evaluation of an organisation's information landscape. Unlike a deep-dive audit which verifies specific data points against a standard, an assessment focuses on Information Architecture and Process Maturity. It is grounded in the principles of ISO 19650, evaluating how information is created, stored, shared, and maintained across the organisation and across the asset lifecycle.
                </p>
                <p>
                  The theoretical framework for an assessment uses a Maturity Model. This model categorises an organisation's documentation practices across a spectrum from ad-hoc and chaotic through to optimised and predictive. The assessment evaluates several key dimensions simultaneously: Structural Integrity looks at whether documents are organised logically or scattered across siloed systems. Standardisation evaluates whether there is a consistent naming convention or designation system in use. Accessibility measures whether field technicians can find critical safety and maintenance information within seconds. Governance examines whether there are clear ownership and change management processes in place.
                </p>
                <p>
                  The goal is to identify the Information Gap: the distance between where the organisation's documentation currently sits and where it needs to be for safe, efficient, and digitally ready operations. Organisations that conduct regular, structured assessments of their information management practices are significantly more likely to successfully implement advanced digital tools such as CMMS or Digital Twins, because they understand the quality of the foundation they are building on before they commit capital to the transformation.
                </p>
              </div>
            </div>

            {/* Maturity levels visual */}
            <div className="mb-16 bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl font-bold text-slate-900 mb-2">
                Information maturity levels
              </h3>
              <p className="text-slate-500 text-sm mb-8">The assessment places your organisation on this scale across five dimensions. Most energy operators sit between Level 2 and Level 3. The goal is Level 4 for operational stability and Level 5 for Digital Twin readiness.</p>
              <div className="space-y-3">
                {[
                  { level: 'Level 1', label: 'Ad-hoc', color: 'bg-red-500', width: 'w-1/5', desc: 'No consistent process. Documents are created and stored individually with no governance or structure.' },
                  { level: 'Level 2', label: 'Defined', color: 'bg-orange-400', width: 'w-2/5', desc: 'Basic processes exist but are inconsistently applied. Some naming conventions in use but not universally followed.' },
                  { level: 'Level 3', label: 'Managed', color: 'bg-amber-400', width: 'w-3/5', desc: 'Processes are documented and followed. Version control in place. Most documents are findable within a reasonable time.' },
                  { level: 'Level 4', label: 'Optimised', color: 'bg-emerald-400', width: 'w-4/5', desc: 'ISO 19650 aligned. IEC 81346 integrated. Documents linked to asset identifiers. Full version control and governance.' },
                  { level: 'Level 5', label: 'Predictive', color: 'bg-sky-500', width: 'w-full', desc: 'Digital Continuity achieved. Real-time information feeds. Digital Twin ready. Continuous improvement embedded in governance.' },
                ].map((item) => (
                  <div key={item.level} className="flex items-start gap-4">
                    <div className="w-20 flex-shrink-0 pt-1">
                      <span className="text-xs font-bold text-slate-500">{item.level}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <div className={`h-2 rounded-full ${item.color} ${item.width}`} />
                        <span className="text-xs font-bold text-slate-700">{item.label}</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost callout */}
            <div className="mb-16 bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={22} />
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl font-bold text-amber-900">The cost of unknown unknowns</h3>
              </div>
              <p className="text-amber-800 leading-relaxed mb-4">
                The greatest risk in asset management is not knowing what information you are missing. When documentation health is unknown, every maintenance task, system upgrade, and digital initiative carries hidden risks that only surface when the work is already underway.
              </p>
              <p className="text-amber-800 leading-relaxed">
                Consider a facility planning a major upgrade to its Asset Performance Management software. The IT department assumes the existing engineering data is ready for migration. Without a prior assessment, they discover mid-project that 60 percent of the P&IDs are in unsearchable PDF formats and lack consistent equipment tags. The project stalls. The cost of emergency data scraping, manual tagging, and delayed software rollout can easily exceed <strong>€100,000</strong>. A strategic Document Assessment conducted before the project begins identifies these roadblocks before capital is committed, not after.
              </p>
            </div>

            {/* ── PHOTO PLACEHOLDER ── */}
            <div className="mb-16 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center h-64">
              <div className="text-center">
                <p className="text-slate-400 text-sm font-semibold">Photo placeholder</p>
                <p className="text-slate-400 text-xs mt-1">Suggested: Information maturity heat map or assessment dashboard showing documentation health across a facility</p>
              </div>
            </div>

            {/* Methodology */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Our methodology</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                The SøDera assessment framework
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                We provide a rapid, high-impact evaluation of your information health. The assessment is designed to be completed in approximately two weeks and delivers a clear picture of where you stand and what to do next.
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { n: '01', title: 'Discovery Workshops', desc: 'Engaging with key stakeholders across Engineering, Operations, and IT to understand current workflows, pain points, and the specific information needs of each department. The conversations in this phase often reveal issues that no document inventory would surface.' },
                  { n: '02', title: 'System Sampling', desc: 'Reviewing a representative sample of documents across your existing repositories including SharePoint, legacy network drives, physical archives, and CMMS records. The sample is designed to give a statistically reliable picture of the overall documentation health.' },
                  { n: '03', title: 'Maturity Scoring', desc: 'Evaluating your practices against ISO 19650 requirements and our information maturity model. The score covers structural integrity, standardisation, accessibility, version control, and governance across each dimension of your information landscape.' },
                  { n: '04', title: 'Gap Analysis', desc: 'Identifying critical missing information, redundancies, compliance risks, and the specific gaps that would prevent a successful CMMS migration, Digital Twin implementation, or ISO 19650 compliance programme.' },
                  { n: '05', title: 'Impact Quantification', desc: 'Estimating the operational and financial impact of the identified documentation gaps. This step moves the conversation from subjective concern to quantified risk, enabling informed prioritisation of remediation investment.' },
                  { n: '06', title: 'Strategic Roadmap', desc: 'Delivering a prioritised, actionable plan for remediation and digital transformation. The roadmap distinguishes between quick wins that can be addressed immediately and structural improvements that require longer-term investment.' },
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
                When software is ready but data is not
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Situation</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Across multi-site rollouts of centralised CMMS and APM platforms, we consistently see the same scenario: the software procurement is complete, the implementation timeline is committed, and the project team assumes the underlying engineering data is ready to migrate. It rarely is. Without a prior assessment, data quality issues are discovered mid-project, causing delays and cost overruns that dwarf the cost of the assessment that would have prevented them.
                  </p>
                </div>
                <div className="border-l-4 border-sky-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">What Good Looks Like</h3>
                  <p className="text-slate-700 leading-relaxed">
                    A Document Assessment conducted before software procurement gives the operator an accurate picture of data readiness across all sites. When some sites are found to be operating at low maturity levels with fragmented and outdated information, the rollout strategy can be adjusted before the project timeline is committed. High-risk sites are prioritised for data remediation first. The software rollout proceeds in the right sequence rather than discovering problems mid-implementation.
                  </p>
                </div>
                <div className="border-l-4 border-emerald-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Outcome</h3>
                  <p className="text-slate-700 leading-relaxed">
                    When organisations assess before they implement, major project delays are avoided. The assessment typically pays for itself many times over in avoided remediation costs, prevented schedule overruns, and the ability to make informed prioritisation decisions before capital is committed. The roadmap produced by the assessment becomes the project plan for the data remediation work that precedes the digital transformation.
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
                SøDera's document assessment practice is grounded in years of hands-on experience with energy sector information systems. We have seen what Level 1 documentation looks like in practice, what it costs operators, and what it takes to move from chaos to structure. Our assessments are not theoretical exercises. They are practical diagnostics that tell you exactly where you stand and exactly what to do next.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-t border-b border-slate-100 mb-10">
                {[
                  { value: 'ISO 19650', label: 'Assessment standard' },
                  { value: '2 weeks', label: 'Typical delivery time' },
                  { value: 'Level 1 to 5', label: 'Maturity scoring scale' },
                  { value: 'Actionable', label: 'Prioritised roadmap output' },
                ].map((s) => (
                  <div key={s.label}>
                    <p style={{ fontFamily: 'Georgia, serif' }} className="text-2xl font-bold text-sky-600 mb-1">{s.value}</p>
                    <p className="text-xs text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { icon: Search, title: 'Before a CMMS or APM rollout', desc: 'Understand your data readiness before committing to a software implementation timeline. The assessment tells you which sites are ready and which need remediation first.' },
                  { icon: BarChart2, title: 'Before a Digital Twin investment', desc: 'A Digital Twin built on poorly structured documentation will not deliver reliable insights. The assessment identifies and quantifies the data quality gaps that must be resolved first.' },
                  { icon: Shield, title: 'Before an ISO 19650 compliance programme', desc: 'Understand exactly where you stand against the standard before designing the compliance programme. The gap analysis tells you where to invest and in what sequence.' },
                  { icon: GitBranch, title: 'After acquiring a new asset', desc: 'When taking over an asset from a previous operator or EPC contractor, an assessment establishes the baseline information health of the inherited documentation before the first maintenance cycle begins.' },
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
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-2">Book a Document Assessment</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  A clear picture of your documentation health and a prioritised roadmap for improvement. Delivered in approximately two weeks.
                </p>
                <Link to="/book-assessment" className="block w-full px-4 py-2.5 bg-sky-500 text-white text-sm font-semibold rounded-xl hover:bg-sky-400 transition-colors text-center">
                  Book Now
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

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Assessment vs Audit</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-bold text-slate-700 mb-1">Document Assessment</p>
                    <p className="text-xs text-slate-500 leading-snug">Strategic, high-level review of information architecture and process maturity. Delivers a roadmap. Best before a transformation programme.</p>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-sm font-bold text-slate-700 mb-1">Documentation Audit</p>
                    <p className="text-xs text-slate-500 leading-snug">Detailed, evidence-based verification of specific documentation against defined standards. Delivers graded findings. Best for compliance verification.</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-2">Train your team</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Practical ISO 19650 and document management training for project teams. On-site or remote.
                </p>
                <Link to={'/service-training' as any} className="block w-full px-4 py-2.5 bg-amber-500 text-white text-sm font-semibold rounded-xl hover:bg-amber-400 transition-colors text-center">
                  Explore Training
                </Link>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}
