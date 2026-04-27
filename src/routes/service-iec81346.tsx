import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Network,
  Layers,
  GitMerge,
  Database,
} from 'lucide-react'

export const Route = createFileRoute('/service-iec81346' as any)({
  component: IEC81346Page,
})

function IEC81346Page() {
  SEOHead({
    title: 'IEC 81346 Standard | Object-Oriented Asset Identification | SøDera',
    description:
      'SøDera helps energy operators implement the IEC 81346 standard series for object-oriented asset identification. The foundation for Digital Continuity, BIM, and Digital Twin in industrial energy infrastructure.',
    keywords:
      'IEC 81346, ISO 81346, IEC 81346 standard, object-oriented asset identification, industrial reference designation, IEC 81346-1, ISO 81346-2, digital twin IEC 81346, energy sector IEC 81346',
    canonicalUrl: 'https://www.soedera.eu/service-iec81346',
  })

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'IEC 81346 Implementation and Consulting',
    description:
      'SøDera helps energy operators implement the IEC 81346 standard series for object-oriented asset identification, cross-disciplinary alignment, and digital twin foundations.',
    provider: { '@type': 'Organization', name: 'SøDera', url: 'https://www.soedera.eu' },
    areaServed: { '@type': 'Place', name: 'Europe' },
    serviceType: 'IEC 81346 Implementation Consulting',
    url: 'https://www.soedera.eu/service-iec81346',
  }

  const sidebarLinks = [
    { label: 'Reference Designation (RDS)', href: '/service-rds' },
    { label: 'RDS-PS', href: '/service-rds-ps' },
    { label: 'RDS Audit', href: '/service-rds-audit' },
    { label: 'Document Management', href: '/service-document-management' },
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
          <Link to={'/service-rds' as any} className="inline-flex items-center gap-2 text-blue-300 hover:text-white mb-10 group text-sm">
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            Back to Reference Designation
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-500/20 border border-sky-400/30 text-sky-300 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              IEC 81346
            </div>
            <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Master the Universal Language of Assets
            </h1>
            <p className="text-xl text-slate-200 mb-6 leading-relaxed">
              Implement the IEC 81346 standard series to create a robust, object-oriented foundation for your industrial data. The prerequisite for Digital Continuity, BIM, and Digital Twin in energy infrastructure.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {['IEC 81346-1', 'ISO 81346-2', 'RDS-PS', 'RDS-PP'].map((b) => (
                <span key={b} className="px-3 py-1 bg-white/10 border border-white/20 text-white text-xs font-semibold rounded-full">{b}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/book-assessment" className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-400 transition-all hover:scale-105 shadow-lg">
                Get Your IEC 81346 Assessment
              </Link>
              <Link to={'/service-rds' as any} className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
                About Reference Designation
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
                "IEC 81346 is not just a tagging standard. It is a philosophy of information. It is the only standard that truly understands the multi-dimensional nature of industrial assets, providing the structure needed for the digital transformation of the entire energy sector."
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

            {/* What is IEC 81346 */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Understanding the standard</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                What is the IEC 81346 standard series?
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
                <p>
                  The IEC 81346 standard series, titled Industrial Systems, Installations and Equipment and Industrial Products — Structuring Principles and Reference Designations, is the international benchmark for asset identification. It is co-published by the International Electrotechnical Commission (IEC) and the International Organization for Standardization (ISO), making it a genuinely global and cross-disciplinary standard applicable across every industry that builds and operates complex physical systems.
                </p>
                <p>
                  The theoretical core of IEC 81346 is Object-Oriented Structuring. Unlike traditional flat tagging systems that identify objects based on a single characteristic, IEC 81346 recognises that any object in an industrial system can be viewed from multiple aspects simultaneously. The Function aspect describes what the object is intended to do. The Product aspect describes how the object is constructed or what it physically is. The Location aspect describes where the object is situated.
                </p>
                <p>
                  This multi-aspect approach is the key to Digital Continuity. It allows information from different engineering disciplines including Process, Electrical, Mechanical, and Civil to be linked to the same physical object through a consistent, hierarchical address. The same pump can be identified by its functional role in a system (=), its physical product specification (-), and its installation location (+) simultaneously. Each aspect has its own legitimate use, and the standard provides the rules for how they combine.
                </p>
                <p>
                  This structure is the essential prerequisite for BIM (ISO 19650) and the creation of Digital Twins. Without the rigorous structure of IEC 81346, industrial data remains siloed and fragmented across disciplines and systems. Organisations that fully adopt the object-oriented principles of IEC 81346 consistently experience fewer engineering coordination errors and significantly lower data integration costs across the asset lifecycle.
                </p>
              </div>
            </div>

            {/* Three aspects visual breakdown */}
            <div className="mb-16 bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl font-bold text-slate-900 mb-2">
                The three aspects of IEC 81346
              </h3>
              <p className="text-slate-500 text-sm mb-8">Every industrial object can be described from three independent perspectives. IEC 81346 provides a rigorous structure for each.</p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    prefix: '=',
                    label: 'Function',
                    color: 'bg-sky-600',
                    border: 'border-sky-200',
                    textColor: 'text-sky-700',
                    bg: 'bg-sky-50',
                    question: 'What does it do?',
                    desc: 'The functional role of the object within the system. Independent of what the object physically is or where it is located. Used in P&IDs, alarm lists, maintenance job cards, and SCADA function assignments.',
                    example: 'A pumping function, a control function, a protection function.',
                  },
                  {
                    prefix: '-',
                    label: 'Product',
                    color: 'bg-indigo-600',
                    border: 'border-indigo-200',
                    textColor: 'text-indigo-700',
                    bg: 'bg-indigo-50',
                    question: 'What is it?',
                    desc: 'The physical product or component. Independent of where it is installed or what function it performs. Used in datasheets, procurement, spare parts lists, and installation drawings.',
                    example: 'A centrifugal pump, a circuit breaker, a pressure transmitter.',
                  },
                  {
                    prefix: '+',
                    label: 'Location',
                    color: 'bg-emerald-600',
                    border: 'border-emerald-200',
                    textColor: 'text-emerald-700',
                    bg: 'bg-emerald-50',
                    question: 'Where is it?',
                    desc: 'The physical installation location. Independent of what is installed there or what function is performed. Used in construction drawings, access routes, and zone or module references.',
                    example: 'Pump room A, module 3, turbine nacelle, substation bay 4.',
                  },
                ].map((item) => (
                  <div key={item.label} className={`rounded-xl border ${item.border} ${item.bg} p-6`}>
                    <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-4`}>
                      {item.prefix}
                    </div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.label}</h4>
                    <p className={`text-xs font-bold ${item.textColor} mb-3`}>{item.question}</p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                    <p className="text-xs text-slate-400 italic">{item.example}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost callout */}
            <div className="mb-16 bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={22} />
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl font-bold text-amber-900">The cost of siloed data</h3>
              </div>
              <p className="text-amber-800 leading-relaxed mb-4">
                In large-scale industrial projects, different engineering disciplines typically use their own internal tagging logic. This creates Information Silos where the same physical valve carries four different names across four different systems: one in the process documentation, one in the electrical drawings, one in the maintenance system, and one on the physical label in the field.
              </p>
              <p className="text-amber-800 leading-relaxed">
                During a facility commissioning phase, a safety-critical interlock fails to trigger. The electrical team looks for one identifier, the process team looks for another, and the maintenance team looks for a third. The confusion and manual tracing required to verify these all refer to the same physical object can delay commissioning by days. In a high-stakes commissioning environment, a three-day delay caused by tag inconsistency can cost an operator over <strong>€60,000</strong> in specialised labour and lost production revenue. IEC 81346 eliminates this by providing a single multi-aspect identifier that is the authoritative reference for all disciplines simultaneously.
              </p>
            </div>

            {/* ── PHOTO PLACEHOLDER ── */}
            <div className="mb-16 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center h-64">
              <div className="text-center">
                <p className="text-slate-400 text-sm font-semibold">Photo placeholder</p>
                <p className="text-slate-400 text-xs mt-1">Suggested: Three-aspects diagram showing Function, Product, and Location intersecting at a single asset</p>
              </div>
            </div>

            {/* Methodology */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Our methodology</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                The SøDera IEC 81346 framework
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                We help you master and implement the standard to create a world-class information architecture. Our approach is grounded in field experience of applying IEC 81346 in real energy projects with real engineering teams across multiple disciplines.
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { n: '01', title: 'Maturity Assessment', desc: 'Evaluating your current designation practices against the requirements of IEC 81346. We identify where your existing system aligns with the standard, where it diverges, and what the practical risk of those divergences is for your operations.' },
                  { n: '02', title: 'Structuring Principles', desc: 'Defining the hierarchical levels and aspect rules specific to your facility and operations. No two facilities are identical. The structuring principles must reflect your operational reality while remaining compliant with the standard.' },
                  { n: '03', title: 'Letter Code Selection', desc: 'Implementing the standardised letter codes from ISO 81346-2 for consistent object classification across all disciplines. This is the layer that makes the designations machine-readable and interoperable with other standard-compliant systems.' },
                  { n: '04', title: 'Cross-Disciplinary Alignment', desc: 'Ensuring all engineering disciplines including Process, Electrical, Mechanical, and Civil adopt the same unified structure. Alignment across disciplines is the most common failure point in IEC 81346 implementations and the source of most engineering coordination errors.' },
                  { n: '05', title: 'Digital Integration', desc: 'Embedding the IEC 81346 codes into your engineering tools, CMMS, and Digital Twin platforms. The designation becomes the linking key across every system in your information landscape, enabling automatic data aggregation across the full asset lifecycle.' },
                  { n: '06', title: 'Governance and Training', desc: 'Providing the training and procedures needed to maintain the standard over the asset\'s full lifecycle. A designation system without trained stewards and documented governance will drift from compliance within years. We build the foundations that prevent this.' },
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
                When five engineering firms speak five different languages
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Situation</h3>
                  <p className="text-slate-700 leading-relaxed">
                    On complex energy infrastructure projects involving multiple engineering firms, each firm typically brings its own internal tagging conventions. The resulting data set by the time the project reaches handover is a mix of conflicting identifiers that makes it practically impossible to create a usable asset register. The operations team inherits a system where the same physical object has a different name in every document set, every software system, and every contractor's deliverable.
                  </p>
                </div>
                <div className="border-l-4 border-sky-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">What Good Looks Like</h3>
                  <p className="text-slate-700 leading-relaxed">
                    The resolution requires establishing a unified IEC 81346 framework at the outset of the project, before any engineering firm begins work. This means defining the core structuring principles, producing a centralised Designation Manual that all contractors are contractually required to follow, and establishing a data quality verification process that checks compliance throughout execution rather than at handover.
                  </p>
                </div>
                <div className="border-l-4 border-emerald-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Outcome</h3>
                  <p className="text-slate-700 leading-relaxed">
                    When IEC 81346 is implemented properly across all disciplines from the project outset, the handover to the operations team is clean. Every asset has a single authoritative identifier. Documents, sensor feeds, maintenance records, and spare parts lists all link to the same designation. The operations team receives a verified, usable asset register on day one rather than inheriting months of data cleanup work.
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
                SøDera's IEC 81346 practice is built on years of hands-on implementation across offshore wind, power plants, substations, and complex industrial infrastructure. We do not advise on the standard from a theoretical perspective. We apply it in the field, on real projects, with real engineering teams who need practical guidance rather than standards document interpretation.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-t border-b border-slate-100 mb-10">
                {[
                  { value: 'IEC 81346', label: 'Core standard expertise' },
                  { value: 'ISO 81346-2', label: 'Letter code mastery' },
                  { value: '20%', label: 'Reduction in coordination errors' },
                  { value: 'Digital Twin', label: 'Ready data foundation' },
                ].map((s) => (
                  <div key={s.label}>
                    <p style={{ fontFamily: 'Georgia, serif' }} className="text-2xl font-bold text-sky-600 mb-1">{s.value}</p>
                    <p className="text-xs text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { icon: Network, title: 'Cross-disciplinary unification', desc: 'IEC 81346 is the only standard designed to unify Process, Electrical, Mechanical, and Civil engineering under a single identification framework. We implement it across all disciplines simultaneously.' },
                  { icon: Layers, title: 'Multi-aspect identification', desc: 'The three-aspect structure of IEC 81346 allows the same asset to be found by function, product, or location. We design hierarchies that make this practical for the people who use them daily.' },
                  { icon: GitMerge, title: 'Lifecycle data continuity', desc: 'Designations applied during design remain the authoritative identifiers through procurement, construction, commissioning, and operations. Nothing is lost at lifecycle transitions because the tag is the constant thread.' },
                  { icon: Database, title: 'Digital twin foundation', desc: 'IEC 81346 is the prerequisite for any meaningful digital twin. Without object-oriented, multi-aspect identification, the data from different disciplines and systems cannot be reliably linked.' },
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
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-2">Assess your IEC 81346 maturity</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  We review your current designation practices against IEC 81346 and give you a clear picture of where you stand and what to do next.
                </p>
                <Link to="/book-assessment" className="block w-full px-4 py-2.5 bg-sky-500 text-white text-sm font-semibold rounded-xl hover:bg-sky-400 transition-colors text-center">
                  Book an Assessment
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
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-2">Train your team on IEC 81346</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Practical hands-on training on applying IEC 81346 in real energy projects. On-site or remote.
                </p>
                <Link to={'/service-training' as any} className="block w-full px-4 py-2.5 bg-amber-500 text-white text-sm font-semibold rounded-xl hover:bg-amber-400 transition-colors text-center">
                  Explore Training
                </Link>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Parts of the standard</h3>
                <div className="space-y-2">
                  {[
                    { std: 'IEC 81346-1', desc: 'Structuring principles' },
                    { std: 'ISO 81346-2', desc: 'Object classification codes' },
                    { std: 'IEC 81346-10', desc: 'Power plants (RDS-PP)' },
                    { std: 'IEC 81346-12', desc: 'Construction works' },
                  ].map((item) => (
                    <div key={item.std}>
                      <p className="text-sm font-semibold text-slate-700">{item.std}</p>
                      <p className="text-xs text-slate-400">{item.desc}</p>
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
