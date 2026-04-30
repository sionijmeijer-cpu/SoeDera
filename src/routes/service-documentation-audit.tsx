import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  ClipboardCheck,
  Shield,
  Search,
  GitBranch,
} from 'lucide-react'

export const Route = createFileRoute('/service-documentation-audit' as any)({
  component: DocumentationAuditPage,
})

function DocumentationAuditPage() {
  SEOHead({
    title: 'Documentation Audit | ISO 19650 Compliance Verification | SøDera',
    description:
      'SøDera conducts independent documentation audits for energy operators. Verify compliance with ISO 19650 and ISO 9001, identify non-conformities, and safeguard your operational and regulatory standing.',
    keywords:
      'documentation audit energy sector, ISO 19650 audit, technical documentation audit, regulatory compliance documentation, document compliance energy, ISO 9001 documentation audit, energy sector audit',
    canonicalUrl: 'https://www.soedera.eu/service-documentation-audit',
  })

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Documentation Audit for Energy Operators',
    description:
      'SøDera conducts independent documentation audits for energy operators. Rigorous compliance verification against ISO 19650 and ISO 9001 with graded findings and a prioritised remediation roadmap.',
    provider: { '@type': 'Organization', name: 'SøDera', url: 'https://www.soedera.eu' },
    areaServed: { '@type': 'Place', name: 'Europe' },
    serviceType: 'Documentation Audit and Compliance Verification',
    url: 'https://www.soedera.eu/service-documentation-audit',
  }

  const sidebarLinks = [
    { label: 'Document Assessment', href: '/service-document-assessment' },
    { label: 'Document Management', href: '/service-document-management' },
    { label: 'RDS Audit', href: '/service-rds-audit' },
    { label: 'RDS Training', href: '/service-rds-training' },
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
              Documentation Audit
            </div>
            <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Verify the Integrity of Your Technical Documentation
            </h1>
            <p className="text-xl text-slate-200 mb-6 leading-relaxed">
              A rigorous, independent audit to confirm compliance, identify non-conformities, and safeguard your operational and regulatory standing before an external inspection does it for you.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {['ISO 19650', 'ISO 9001', 'Regulatory Compliance'].map((b) => (
                <span key={b} className="px-3 py-1 bg-white/10 border border-white/20 text-white text-xs font-semibold rounded-full">{b}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-400 transition-all hover:scale-105 shadow-lg">
                Request a Documentation Audit
              </Link>
              <Link to="/service-document-assessment" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
                Not sure? Start with an Assessment
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
                "In highly regulated industries like energy, a documentation audit is not a luxury. It is a necessity. It is the definitive proof that your information assets are not just present, but accurate, compliant, and fit for purpose, protecting your operations from significant financial and safety risks."
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

            {/* What is a Documentation Audit */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Understanding the discipline</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                What is a Technical Documentation Audit?
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
                <p>
                  A Technical Documentation Audit is a systematic, independent, and documented process for obtaining audit evidence and evaluating it objectively to determine the extent to which audit criteria are fulfilled. In the energy sector, this means verifying that technical documentation from engineering drawings to operational manuals meets internal standards, industry regulations such as ISO 19650 and ISO 9001, and the legal requirements applicable to the facility.
                </p>
                <p>
                  The theoretical underpinning of a documentation audit is Risk Mitigation through Verification. Unlike a document assessment, which is diagnostic and strategic, an audit is forensic and detailed. It operates on the principle that critical information must be demonstrably accurate and accessible to prevent operational failures, ensure personnel safety, and maintain regulatory compliance. The audit evaluates four key dimensions simultaneously.
                </p>
                <p>
                  Accuracy and Completeness examines whether all required documents are present and whether they reflect the current as-built or as-operated state of the asset. Version Control verifies that the correct, approved versions of documents are in active use and that there is a clear audit trail of all changes. Compliance checks whether the documentation adheres to relevant industry standards, national regulations, and internal policies. Accessibility and Usability assesses whether authorised personnel can find and understand the information they need within the time constraints of their operational role.
                </p>
                <p>
                  Research in regulated industries consistently demonstrates the severe financial and reputational consequences of poor documentation quality. Non-compliance exposed during a regulatory inspection carries costs that far exceed what a proactive internal audit would have cost to identify and remediate the same issues. The audit is not the problem. The problem is always found before the audit, or during it.
                </p>
              </div>
            </div>

            {/* Audit vs Assessment comparison */}
            <div className="mb-16 bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl font-bold text-slate-900 mb-6">
                Documentation Audit vs Document Assessment: understanding the difference
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl border-2 border-sky-200 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center">
                      <ClipboardCheck size={16} className="text-white" />
                    </div>
                    <h4 className="font-bold text-slate-900">Documentation Audit</h4>
                  </div>
                  <p className="text-xs font-semibold text-sky-600 mb-3">Forensic and evidence-based</p>
                  <div className="space-y-2">
                    {[
                      'Detailed verification against defined standards',
                      'Graded findings: Major NC, Minor NC, Observation',
                      'Specific evidence cited for every finding',
                      'Best before regulatory inspection or handover',
                      'Produces a formal compliance report',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle size={13} className="text-sky-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-slate-400 rounded-lg flex items-center justify-center">
                      <Search size={16} className="text-white" />
                    </div>
                    <h4 className="font-bold text-slate-900">Document Assessment</h4>
                  </div>
                  <p className="text-xs font-semibold text-slate-500 mb-3">Strategic and diagnostic</p>
                  <div className="space-y-2">
                    {[
                      'High-level maturity review across dimensions',
                      'Maturity score on a Level 1 to 5 scale',
                      'Identifies patterns and systemic gaps',
                      'Best before a digital transformation programme',
                      'Produces a strategic roadmap',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle size={13} className="text-slate-400 flex-shrink-0 mt-0.5" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Cost callout */}
            <div className="mb-16 bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={22} />
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl font-bold text-amber-900">The cost of regulatory non-compliance</h3>
              </div>
              <p className="text-amber-800 leading-relaxed mb-4">
                In the energy sector, a failed documentation audit by an external regulator can have severe consequences ranging from substantial financial penalties to operational restrictions and reputational damage. The issue is not just the fine. It is the cascade of consequences that follows.
              </p>
              <p className="text-amber-800 leading-relaxed">
                Consider an oil and gas operator undergoing a routine regulatory inspection. If the inspection reveals that critical safety documentation such as pressure vessel inspection certificates or hazardous area classifications is missing, outdated, or cannot be readily produced, the regulator can impose significant fines potentially exceeding <strong>€500,000</strong>. In extreme cases this leads to operational restrictions or a temporary shutdown until the documentation is brought into compliance. A proactive Documentation Audit identifies these vulnerabilities before an external regulator does, at a fraction of the cost and without the reputational consequences.
              </p>
            </div>

            {/* ── PHOTO PLACEHOLDER ── */}
            <div className="mb-16 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center h-64">
              <div className="text-center">
                <p className="text-slate-400 text-sm font-semibold">Photo placeholder</p>
                <p className="text-slate-400 text-xs mt-1">Suggested: Audit report findings matrix or compliance checklist review</p>
              </div>
            </div>

            {/* Methodology */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Our methodology</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                The SøDera rigorous audit process
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                We conduct thorough and objective documentation audits that provide you with clear, evidence-based insights and an actionable remediation plan. Every finding is graded, evidenced, and prioritised so you know exactly what to address first.
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { n: '01', title: 'Scope Definition', desc: 'Working with you to define the audit scope, criteria, and target documentation sets. A well-defined scope ensures the audit focuses on the areas of highest operational and regulatory risk rather than producing a comprehensive but unfocused findings list.' },
                  { n: '02', title: 'Evidence Collection', desc: 'Systematically gathering documentation, interviewing personnel, and reviewing digital systems. Evidence is collected against the defined audit criteria, not against an assumed standard. Every finding is traceable to specific evidence.' },
                  { n: '03', title: 'Compliance Verification', desc: 'Cross-referencing documentation against relevant industry standards including ISO 19650 and ISO 9001, applicable regulations, and internal policies. Compliance verification is objective and criterion-referenced, not subjective.' },
                  { n: '04', title: 'Non-Conformity Identification', desc: 'Documenting all discrepancies, gaps, and areas of non-compliance with clear evidence cited for each finding. Findings are graded as Major Non-Conformities, Minor Non-Conformities, or Observations, each with a recommended response.' },
                  { n: '05', title: 'Root Cause Analysis', desc: 'Investigating the underlying reasons for identified issues rather than just cataloguing the symptoms. A Major Non-Conformity that results from a governance gap will recur unless the governance is fixed, not just the specific document.' },
                  { n: '06', title: 'Actionable Reporting', desc: 'Delivering a comprehensive audit report with prioritised recommendations for remediation and improvement. The report is structured to be useful to both the technical team addressing the findings and the management team overseeing the response.' },
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
                When a project nears handover with compliance gaps no one has verified
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Situation</h3>
                  <p className="text-slate-700 leading-relaxed">
                    On large energy infrastructure projects approaching their operational readiness date, we consistently see project teams that are unsure whether all critical documentation meets the regulatory requirements for handover and operation. The EPC contractor asserts compliance. The project team has no independent basis to verify it. And the cost of discovering non-conformities during a formal regulatory inspection rather than during an internal audit is orders of magnitude higher.
                  </p>
                </div>
                <div className="border-l-4 border-sky-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">What Good Looks Like</h3>
                  <p className="text-slate-700 leading-relaxed">
                    A comprehensive Documentation Audit conducted before the final regulatory inspection focuses on safety-critical systems, operational manuals, and regulatory compliance documentation. Major Non-Conformities are identified, including missing certification documents and inconsistent version control for critical P&IDs. Each finding is graded, evidenced, and assigned a remediation priority. The project team receives a clear list of actions before the regulator arrives.
                  </p>
                </div>
                <div className="border-l-4 border-emerald-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Outcome</h3>
                  <p className="text-slate-700 leading-relaxed">
                    When an independent documentation audit is completed before the regulatory inspection, all identified non-conformities are resolved before they are exposed externally. The facility commences operations on schedule without the fines, delays, or reputational consequences of a failed external inspection. The audit report itself becomes a demonstration to regulators and insurers that the operator manages documentation to a verifiable standard.
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
                SøDera's documentation audit practice is built on the same foundation as our RDS audit practice: independence, deep domain knowledge, and a commitment to findings that are specific enough to be actionable rather than generic enough to be safely ignored. We have seen what regulators look for in energy sector documentation audits and we know exactly where the gaps typically are.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our independence is the foundation of every audit we deliver. We have no commercial relationship with the contractors whose work we are verifying and no interest in the outcome of the findings beyond giving you an accurate picture of where your documentation stands against the standard.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-t border-b border-slate-100 mb-10">
                {[
                  { value: 'ISO 19650', label: 'Audit standard' },
                  { value: 'ISO 9001', label: 'Quality management' },
                  { value: 'Independent', label: 'Third-party objectivity' },
                  { value: 'Actionable', label: 'Graded, evidenced findings' },
                ].map((s) => (
                  <div key={s.label}>
                    <p style={{ fontFamily: 'Georgia, serif' }} className="text-2xl font-bold text-sky-600 mb-1">{s.value}</p>
                    <p className="text-xs text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { icon: ClipboardCheck, title: 'Pre-regulatory inspection', desc: 'Identify and remediate non-conformities before an external regulator does. The cost of a proactive internal audit is always lower than the cost of a failed external inspection.' },
                  { icon: Shield, title: 'Pre-handover verification', desc: 'Verify that documentation delivered by an EPC contractor at handover is complete, accurate, and compliant before final payment is released and operational responsibility transfers.' },
                  { icon: Search, title: 'Periodic compliance assurance', desc: 'Documentation quality degrades over time without active governance. Periodic audits identify emerging non-conformities before they become regulatory exposure and reinforce the governance habits that prevent recurrence.' },
                  { icon: GitBranch, title: 'Post-incident review', desc: 'Following an operational incident, a documentation audit establishes whether inadequate or inaccurate documentation contributed to the event and identifies the corrective actions required to prevent recurrence.' },
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
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-2">Request a Documentation Audit</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Independent compliance verification against ISO 19650 and ISO 9001. Graded findings with a prioritised remediation report.
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

              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Audit finding grades</h3>
                <div className="space-y-3">
                  {[
                    { grade: 'Major NC', color: 'bg-red-100 text-red-700', desc: 'Requires correction before regulatory submission or operational handover' },
                    { grade: 'Minor NC', color: 'bg-amber-100 text-amber-700', desc: 'Should be corrected within an agreed timeframe' },
                    { grade: 'Observation', color: 'bg-sky-100 text-sky-700', desc: 'Recommended improvement to reduce future compliance risk' },
                  ].map((item) => (
                    <div key={item.grade}>
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold mb-1 ${item.color}`}>{item.grade}</span>
                      <p className="text-xs text-slate-500 leading-snug">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-2">Train your team</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Practical ISO 19650 and document management training for the teams responsible for maintaining compliance. On-site or remote.
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
