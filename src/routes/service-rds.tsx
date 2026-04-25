import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import {
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  Network,
  Layers,
  GitMerge,
  Database,
  ArrowRight,
} from 'lucide-react'

export const Route = createFileRoute('/service-rds')({
  component: RDSPage,
})

function RDSPage() {
  SEOHead({
    title: 'Reference Designation System (RDS) Consulting | IEC 81346 | SøDera',
    description:
      'SøDera helps energy operators implement IEC 81346 compliant Reference Designation Systems. Unify engineering, operations, and maintenance under a single asset language. RDS-PP, RDS-PS, and RDS-CW specialists.',
    keywords:
      'Reference Designation System, RDS, IEC 81346, RDS-PS, RDS-PP, asset tagging energy, IEC 81346 consulting, industrial asset designation, energy sector RDS',
    canonicalUrl: 'https://www.soedera.eu/service-rds',
  })

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Reference Designation System Consulting',
    description:
      'SøDera designs and implements IEC 81346 compliant Reference Designation Systems for energy operators across offshore wind, power plants, and industrial infrastructure.',
    provider: {
      '@type': 'Organization',
      name: 'SøDera',
      url: 'https://www.soedera.eu',
    },
    areaServed: { '@type': 'Place', name: 'Europe' },
    serviceType: 'Reference Designation System Consulting',
    url: 'https://www.soedera.eu/service-rds',
  }

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema, null, 2) }}
      />

      {/* ── Hero — placeholder photo ── */}
      <section
        className="relative min-h-[600px] flex items-center py-32 overflow-hidden"
        style={{
          backgroundImage: 'url(https://i.imgur.com/lCNBEPI.jpeg)',
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
              Reference Designation Systems
            </div>

            <h1
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Unify Your Assets with IEC 81346
            </h1>

            <p className="text-xl text-slate-200 mb-6 leading-relaxed">
              Implement a clear, consistent, and industry-standard designation system to bridge
              the gap between engineering, operations, and maintenance across your entire asset
              portfolio.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {['IEC 81346', 'ISO 81346', 'RDS-PS', 'RDS-PP', 'RDS-CW'].map((badge) => (
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
                Get Your RDS Assessment
              </Link>
              <Link
                to="/blog/$articleId"
                params={{ articleId: 'rds-ps-explained-plant-asset-tagging' }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
              >
                Read: RDS-PS Explained
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
              SC
            </div>
            <div>
              <blockquote
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                className="text-xl text-slate-800 italic leading-relaxed mb-3"
              >
                "Implementing a robust Reference Designation System is about more than just
                tagging assets. It is about creating a universal language that unifies engineering,
                operations, and maintenance. It is the foundational layer for true information
                mastery in any complex energy environment."
              </blockquote>
              <p className="text-sm font-semibold text-slate-600">
                Søren Christensen
                <span className="font-normal text-slate-400"> · Co-founder & CEO, SøDera</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main content + Sidebar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">

          {/* Left column */}
          <div className="min-w-0">

      {/* ── What is RDS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">
                Understanding the standard
              </p>
              <h2
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6"
              >
                What is a Reference Designation System?
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  A Reference Designation System, as defined by the IEC 81346 standard series,
                  is a structured method for identifying objects within a system. Unlike traditional
                  flat tagging systems that often rely on arbitrary numbering, RDS is built on an
                  object-oriented philosophy. It recognises that any physical or functional entity
                  in a plant can be viewed from multiple aspects simultaneously.
                </p>
                <p>
                  The standard defines three primary aspects. The Function aspect (=) describes
                  what the object does within the system — for example, a pumping function. The
                  Product aspect (-) describes how the object is constructed or what it physically
                  is — for example, a specific centrifugal pump. The Location aspect (+) describes
                  where the object is situated — for example, in Pump Room A.
                </p>
                <p>
                  By combining these aspects into a single structured string, RDS creates a unique,
                  machine-readable address for every asset. This hierarchy enables Digital
                  Continuity across the entire asset lifecycle. During the design phase, an engineer
                  defines a functional requirement. A procurement specialist later assigns a
                  specific product. The installation team places it in a physical location. Because
                  the RDS tag remains the constant link, data from every phase is automatically
                  aggregated, forming the basis for a true Digital Twin.
                </p>
                <p>
                  Standardised designation systems have been shown to reduce engineering
                  coordination errors by up to 20 percent and are essential for the
                  interoperability required in modern BIM and Industry 4.0 environments.
                </p>
              </div>
            </div>

            {/* Aspects breakdown + cost callout */}
            <div className="space-y-6">
              {/* Three aspects */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <h3
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                  className="text-lg font-bold text-slate-900 mb-6"
                >
                  The three aspects of IEC 81346
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      prefix: '=',
                      label: 'Function',
                      color: 'bg-sky-600',
                      description: 'What the object does within the system. Owned by the operator and service department. Used in P&IDs, alarm lists, and maintenance job cards.',
                    },
                    {
                      prefix: '-',
                      label: 'Product',
                      color: 'bg-indigo-600',
                      description: 'What the object physically is. Owned by the designer or manufacturer. Used in datasheets, procurement, spare parts, and installation drawings.',
                    },
                    {
                      prefix: '+',
                      label: 'Location',
                      color: 'bg-emerald-600',
                      description: 'Where the object is situated. Used in installation drawings, access routes, module and zone references.',
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className={`w-9 h-9 ${item.color} rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                        {item.prefix}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm mb-1">{item.label}</p>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cost callout */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                  <h3
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                    className="text-lg font-bold text-amber-900"
                  >
                    The cost of tag duplication
                  </h3>
                </div>
                <p className="text-amber-800 text-sm leading-relaxed mb-3">
                  In large-scale energy projects involving multiple contractors, the absence of a
                  unified RDS leads to Tag Drift. Each contractor uses their own internal numbering
                  logic, resulting in duplicate or ambiguous tags for the same physical equipment.
                </p>
                <p className="text-amber-800 text-sm leading-relaxed">
                  In a power plant commissioning phase, a safety-critical sensor identified by two
                  different tags in the SCADA system and the physical wiring diagrams can cause
                  technicians to spend days tracing wires. A two-day delay caused by tag ambiguity
                  in a high-pressure commissioning environment can cost an operator upwards of
                  <strong> €50,000</strong> in specialised labour and delayed startup revenue.
                  RDS eliminates this ambiguity entirely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><hr className="border-t border-slate-200" /></div>

      {/* ── Methodology ── */}
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
              The SøDera RDS framework
            </h2>
            <p className="text-lg text-slate-600">
              We partner with your team to design and embed an RDS that works for your specific
              operational context. Not a generic template applied from the outside, but a framework
              built around your assets, your systems, and your people.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                number: '01',
                title: 'Assessment and Planning',
                description:
                  'Reviewing current designation practices and information architecture to identify inconsistencies, gaps, and risks. We document what exists before recommending what should change.',
              },
              {
                number: '02',
                title: 'Framework Design',
                description:
                  'Defining comprehensive designation rules and aspect hierarchies specific to your assets and operational needs. The framework is designed to be both standards-compliant and practical for the engineers who will use it daily.',
              },
              {
                number: '03',
                title: 'Standard Alignment',
                description:
                  'Ensuring all designation rules strictly adhere to IEC 81346 principles for international compliance. We support RDS-PP for power plants, RDS-PS for power supply systems, and RDS-CW for construction works.',
              },
              {
                number: '04',
                title: 'Migration Support',
                description:
                  'Systematically mapping legacy tags to the new RDS framework with full traceability. Every existing identifier is accounted for. Nothing is lost. Every change is documented.',
              },
              {
                number: '05',
                title: 'Tool Integration',
                description:
                  'Embedding the RDS into your engineering tools, CMMS, and asset management platforms via API or structured data export. The tag becomes the linking key across every system in your information landscape.',
              },
              {
                number: '06',
                title: 'Training and Governance',
                description:
                  'Providing hands-on training and establishing procedures for long-term system maintenance. An RDS only delivers value if the people applying it understand why and how. We make sure they do.',
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
              A pattern we see repeatedly
            </p>
            <h2
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              className="text-3xl sm:text-4xl font-bold text-slate-900 mb-10"
            >
              When three contractors speak three different languages
            </h2>

            <div className="space-y-8">
              <div className="border-l-4 border-amber-400 pl-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Situation</h3>
                <p className="text-slate-700 leading-relaxed">
                  In multi-contractor energy projects, we consistently see the same problem emerge
                  at commissioning. Each EPC contractor has used their own internal tagging
                  convention during design and construction. By the time the facility is handed
                  over, a significant proportion of equipment carries conflicting identifiers
                  across the SCADA system, the asset register, and the physical labels on site.
                  Maintenance cannot begin with confidence until the ambiguity is resolved.
                </p>
              </div>

              <div className="border-l-4 border-sky-400 pl-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">What Good Looks Like</h3>
                <p className="text-slate-700 leading-relaxed">
                  The resolution requires mapping all legacy tags to a unified IEC 81346 hierarchy
                  covering functional, product, and location designations. Every asset gets one
                  authoritative identifier that is understood across engineering, operations, and
                  maintenance. The digital asset register and physical labels are updated
                  systematically, and the new framework is embedded into the operator's CMMS to
                  ensure long-term compliance.
                </p>
              </div>

              <div className="border-l-4 border-emerald-400 pl-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Outcome</h3>
                <p className="text-slate-700 leading-relaxed">
                  When this work is done properly, operators achieve complete unique identification
                  across the facility. Maintenance search and verify time drops by around 40
                  percent. Perhaps most significantly, the facility's digital twin becomes fully
                  operational for the first time, enabling real-time data visualisation and laying
                  the groundwork for predictive maintenance across the wider portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><hr className="border-t border-slate-200" /></div>

      {/* ── Expertise ── */}
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
                SøDera's RDS practice is built on years of hands-on implementation across offshore
                wind, power plants, substations, and industrial infrastructure. We do not consult
                on IEC 81346 from a standards document. We apply it in the field, on real projects,
                with real engineering teams.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our work is grounded in the standard and shaped by the operational reality of the
                people who use the designations every day. The result is an RDS that is compliant,
                practical, and built to last.
              </p>

              <div className="grid grid-cols-2 gap-6 py-8 border-t border-b border-slate-100 mb-8">
                {[
                  { value: 'IEC 81346', label: 'Core standard expertise' },
                  { value: '20+', label: 'Years in energy asset tagging' },
                  { value: 'Zero', label: 'Ambiguity goal for all frameworks' },
                  { value: 'Digital Twin', label: 'Ready data interoperability' },
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
                  'EPC contractors building multi-discipline assets',
                  'Operations teams managing large asset portfolios',
                  'Organisations building or upgrading digital twins',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-700 text-sm">
                    <CheckCircle size={15} className="text-sky-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* What RDS enables */}
            <div className="space-y-5">
              <h3
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                className="text-xl font-bold text-slate-900"
              >
                What a well-implemented RDS enables
              </h3>
              {[
                {
                  icon: Network,
                  title: 'A single asset language across all disciplines',
                  description:
                    'Engineering, procurement, construction, operations, and maintenance all refer to the same asset using the same identifier. No translation layer, no ambiguity.',
                },
                {
                  icon: Layers,
                  title: 'Multi-dimensional asset discovery',
                  description:
                    'Search by function, product, or location independently. Find every document, signal, maintenance record, and spare parts list linked to a single tag instantly.',
                },
                {
                  icon: GitMerge,
                  title: 'Lifecycle data continuity',
                  description:
                    'Data created during design is automatically linked to data created during commissioning and operations. Nothing is lost at handover because the tag is the constant thread.',
                },
                {
                  icon: Database,
                  title: 'Digital twin foundation',
                  description:
                    'A compliant RDS is the prerequisite for any meaningful digital twin. Without consistent asset identification, sensor data, maintenance records, and engineering documents cannot be reliably connected.',
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
                id: 'rds-ps-explained-plant-asset-tagging',
                title: 'RDS-PS Explained: How One Tag Connects Your Entire Plant',
                category: 'RDS',
                readTime: '8 min read',
              },
              {
                id: 'rdspp-vs-rdsps',
                title: 'RDS-PP vs RDS-PS: Understanding Standardisation, Flexibility, and the Choices Asset Owners Must Make',
                category: 'RDS',
                readTime: '5 min read',
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

          </div>{/* end left column */}

          {/* ── Right: Sticky Sidebar ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-5">

              <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6">
                <h3
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                  className="font-bold text-slate-900 mb-2 text-base"
                >
                  Get your RDS reviewed
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  An RDS Assessment identifies exactly where your designations are
                  non-compliant or creating operational risk. Delivered in approximately two weeks.
                </p>
                <Link
                  to="/book-assessment"
                  className="block w-full px-4 py-3 bg-sky-500 text-white text-sm font-semibold rounded-xl hover:bg-sky-400 transition-colors text-center"
                >
                  Book an RDS Assessment
                </Link>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                  Related Services
                </h3>
                <div className="space-y-2">
                  {[
                    { label: 'Document Management', href: '/service-document-management' },
                    { label: 'RDS Audit', href: '/service-rds-audit' },
                    { label: 'Building Information Modelling', href: '/service-bim' },
                    { label: 'Project Management', href: '/service-project-management' },
                    { label: 'Training & SME', href: '/service-training' },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      to={item.href as any}
                      className="flex items-center gap-2 p-2.5 rounded-lg hover:bg-slate-50 group transition-colors text-sm text-slate-700 hover:text-sky-600"
                    >
                      <ArrowRight size={13} className="text-slate-300 group-hover:text-sky-500 flex-shrink-0 transition-colors" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <h3
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                  className="font-bold text-slate-900 mb-2 text-base"
                >
                  Train your team on RDS
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Hands-on IEC 81346 training for your engineering team. On-site or remote,
                  half-day to multi-day.
                </p>
                <Link
                  to={'/service-training' as any}
                  className="block w-full px-4 py-3 bg-amber-500 text-white text-sm font-semibold rounded-xl hover:bg-amber-400 transition-colors text-center"
                >
                  Explore Training
                </Link>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                  Standards we work with
                </h3>
                <div className="space-y-2">
                  {['IEC 81346', 'RDS-PP', 'RDS-PS', 'RDS-CW', 'ISO 81346'].map((std) => (
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
