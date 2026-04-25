import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Layers,
  GitMerge,
  Database,
  Shield,
} from 'lucide-react'

export const Route = createFileRoute('/service-bim')({
  component: BIMPage,
})

function BIMPage() {
  SEOHead({
    title: 'BIM Services for Energy Infrastructure | ISO 19650 | SøDera',
    description:
      'SøDera delivers Building Information Modelling services for energy operators aligned with ISO 19650 and IEC 81346. From CDE implementation to digital twin development for offshore wind, power plants, and industrial assets.',
    keywords:
      'BIM energy sector, Building Information Modelling energy, ISO 19650 BIM, IEC 81346 BIM, digital twin energy, CDE energy, offshore wind BIM, power plant BIM',
    canonicalUrl: 'https://www.soedera.eu/service-bim',
  })

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'BIM Services for Energy Infrastructure',
    description:
      'SøDera provides Building Information Modelling services for energy operators including CDE implementation, 3D model development, ISO 19650 alignment, and digital twin foundation for offshore wind, power plants, and industrial assets.',
    provider: { '@type': 'Organization', name: 'SøDera', url: 'https://www.soedera.eu' },
    areaServed: { '@type': 'Place', name: 'Europe' },
    serviceType: 'BIM Consulting and Implementation',
    url: 'https://www.soedera.eu/service-bim',
  }

  const sidebarLinks = [
    { label: 'Document Management', href: '/service-document-management' },
    { label: 'Reference Designation (RDS)', href: '/service-rds' },
    { label: 'RDS Audit', href: '/service-rds-audit' },
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
              Building Information Modelling
            </div>
            <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Building Information Modelling for Energy Assets
            </h1>
            <p className="text-xl text-slate-200 mb-6 leading-relaxed">
              Unlock data-driven decisions and enhanced collaboration with a digital foundation built for your asset's entire lifecycle. Aligned with ISO 19650 and IEC 81346.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {['ISO 19650', 'IEC 81346', 'openBIM', 'IFC'].map((b) => (
                <span key={b} className="px-3 py-1 bg-white/10 border border-white/20 text-white text-xs font-semibold rounded-full">{b}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/book-assessment" className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-400 transition-all hover:scale-105 shadow-lg">
                Discuss Your BIM Requirements
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
                Get in Touch
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
                "BIM is more than just 3D modelling. It is a digital ecosystem that integrates all aspects of an asset's lifecycle. For energy companies, it is the key to unlocking unprecedented levels of collaboration, data integrity, and efficiency, transforming how we build and manage critical infrastructure."
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

            {/* What is BIM in the energy sector */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Understanding the discipline</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                What is BIM in the energy sector?
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
                <p>
                  Building Information Modelling (BIM) is a collaborative process for the creation and management of information on a built asset. In the energy sector, BIM extends far beyond traditional architecture to encompass complex industrial systems and infrastructure: offshore wind farms, substations, hydrogen plants, and power generation facilities. The theoretical core of modern BIM is the Common Data Environment (CDE), as defined in ISO 19650.
                </p>
                <p>
                  A CDE is a centralised digital repository where all project information including 3D models, 2D drawings, technical specifications, and maintenance data is stored and managed through a controlled workflow. The value of BIM lies in Interoperability and Digital Continuity. By using open standards such as IFC and structured designation systems such as IEC 81346, BIM ensures that information created during the design phase remains usable, linked, and accurate for maintenance operations 20 years later.
                </p>
                <p>
                  The Digital Twin is the ultimate evolution of BIM in energy infrastructure. A Digital Twin is a virtual representation that is dynamically linked to its physical counterpart through real-time data feeds. This enables Virtual Commissioning, where systems are tested in the digital environment before physical installation begins, and Predictive Maintenance, where asset condition data is visualised and analysed against the engineering model. Research indicates that BIM-enabled projects can reduce uncoordinated design changes by up to 40 percent and lower total lifecycle costs by 5 to 10 percent through better-informed facility management.
                </p>
                <p>
                  For these benefits to materialise, the BIM model must be built on a foundation of structured asset identification. Without IEC 81346 compliant designations embedded in every model element, the data cannot be reliably linked to documents, maintenance records, or sensor feeds. BIM and RDS are not separate disciplines. They are two layers of the same information architecture.
                </p>
              </div>
            </div>

            {/* ── PHOTO PLACEHOLDER 1 ── */}
            <div className="mb-16 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center h-64">
              <div className="text-center">
                <p className="text-slate-400 text-sm font-semibold">Photo placeholder</p>
                <p className="text-slate-400 text-xs mt-1">Suggested: 3D BIM model of an energy asset or substation with data callouts</p>
              </div>
            </div>

            {/* BIM layers breakdown */}
            <div className="mb-16 bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl font-bold text-slate-900 mb-6">
                The four information layers of energy BIM
              </h3>
              <div className="space-y-5">
                {[
                  { n: '1', label: 'Geometric data', color: 'bg-sky-600', desc: 'The 3D model: accurate spatial representation of every component, pipe, cable tray, structural element, and equipment item. The foundation for clash detection and constructability review.' },
                  { n: '2', label: 'Asset data', color: 'bg-indigo-600', desc: 'Structured non-geometric information linked to every model element: manufacturer, specification, datasheet, IEC 81346 designation, and maintenance classification. This layer is what turns a visual model into an operational tool.' },
                  { n: '3', label: 'Document links', color: 'bg-emerald-600', desc: 'Direct connections from each model element to its associated technical documents: P&IDs, manuals, inspection records, and safety procedures. Powered by the RDS tag as the common identifier.' },
                  { n: '4', label: 'Live operational data', color: 'bg-amber-600', desc: 'For Digital Twin implementations, real-time sensor feeds, SCADA data, and condition monitoring results linked to the model. Enables predictive maintenance and anomaly detection at the asset level.' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className={`w-9 h-9 ${item.color} rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>{item.n}</div>
                    <div>
                      <p className="font-bold text-slate-900 mb-1 capitalize">{item.label}</p>
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
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl font-bold text-amber-900">The cost of physical clashes</h3>
              </div>
              <p className="text-amber-800 leading-relaxed mb-4">
                In complex energy projects, clashes occur when two components such as a pipe and a structural beam occupy the same physical space. Without BIM-led design coordination, these are typically discovered during construction when correction is most expensive.
              </p>
              <p className="text-amber-800 leading-relaxed">
                In a specialised industrial project such as a hydrogen pilot plant, a single major piping clash discovered during installation requires stopping work, re-engineering the piping layout, procuring new materials, and potentially delaying the entire project schedule. The cost of a single major clash resolution can easily reach <strong>€150,000</strong> in direct rework and indirect delay costs. BIM identifies these clashes in the digital model months before construction begins, allowing for zero-cost resolution in the design phase.
              </p>
            </div>

            {/* Lifecycle diagram */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Where BIM fits</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-2xl font-bold text-slate-900 mb-6">
                BIM creates the digital foundation that spans the entire asset lifecycle
              </h2>
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 overflow-x-auto">
                <svg width="100%" viewBox="0 0 640 200" role="img">
                  <title>BIM asset lifecycle diagram</title>
                  <desc>Five lifecycle phases with BIM and related services spanning all phases</desc>
                  <defs>
                    <marker id="marrB" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
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
                      <line x1={p.x + 101} y1={43} x2={p.x + 130} y2={43} stroke="#94a3b8" strokeWidth={1} markerEnd="url(#marrB)"/>
                    </g>
                  ))}
                  <rect x={468} y={20} width={152} height={46} rx={6} fill="#f8fafc" stroke="#cbd5e1" strokeWidth={0.5}/>
                  <text x={544} y={43} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={500} fill="#334155">Operations</text>
                  <rect x={20} y={100} width={600} height={36} rx={6} fill="#ede9fe" stroke="#c4b5fd" strokeWidth={0.5}/>
                  <text x={320} y={118} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={500} fill="#4c1d95">Building Information Modelling (ISO 19650)</text>
                  <rect x={20} y={146} width={600} height={36} rx={6} fill="#e0f2fe" stroke="#7dd3fc" strokeWidth={0.5}/>
                  <text x={320} y={164} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={500} fill="#0c4a6e">Reference Designation System (IEC 81346)</text>
                </svg>
              </div>
            </div>

            {/* Methodology */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Our methodology</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                The SøDera BIM framework
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                We guide energy organisations through every stage of their BIM journey, from initial strategy through to operational digital twin. Our approach is grounded in the energy sector context, not adapted from construction or architecture practice.
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { n: '01', title: 'BIM Strategy Development', desc: 'Defining BIM execution plans, Employer Information Requirements (EIR), and organisational goals. The strategy determines what information you need, when you need it, and who is responsible for producing it.' },
                  { n: '02', title: 'CDE Implementation', desc: 'Establishing a robust Common Data Environment for seamless stakeholder collaboration across disciplines and contractor boundaries. Includes workflow configuration, naming conventions, and access control.' },
                  { n: '03', title: 'Model Development and Management', desc: 'Creating data-rich 3D models with structured asset attributes linked to IEC 81346 designations. Every model element carries the information needed to support operations, not just geometry for construction.' },
                  { n: '04', title: 'Standard Alignment', desc: 'Ensuring all models and data structures comply with ISO 19650 and IEC 81346. This is the layer that makes the model useful beyond handover, connecting it to CMMS, asset registers, and document systems.' },
                  { n: '05', title: 'Implementation and Integration', desc: 'Guiding engineering teams through BIM workflows and integrating models with existing maintenance management systems. Adoption requires training, process change, and support, not just software.' },
                  { n: '06', title: 'Lifecycle Optimisation', desc: 'Linking BIM data to real-time operational parameters for predictive maintenance and performance monitoring. This is where the model transitions from a project deliverable to a living operational asset.' },
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
                <p className="text-slate-400 text-xs mt-1">Suggested: BIM clash detection screenshot or digital twin visualisation</p>
              </div>
            </div>

            <hr className="border-t border-slate-200 mb-16" />

            {/* Case study */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">A pattern we see repeatedly</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-10">
                When complexity makes coordination the biggest risk
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Situation</h3>
                  <p className="text-slate-700 leading-relaxed">
                    In pioneering energy projects with multiple international partners and highly complex piping layouts, we consistently see the same challenge: coordination between disciplines happens too late and too informally. Clashes between mechanical, electrical, and structural elements are discovered during construction rather than during design. On specialised industrial projects, the consequences include stopped work, re-engineering, procurement delays, and significant cost overruns that could have been prevented entirely.
                  </p>
                </div>
                <div className="border-l-4 border-sky-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">What Good Looks Like</h3>
                  <p className="text-slate-700 leading-relaxed">
                    The resolution follows a consistent pattern: a CDE established early in the design phase, a BIM-led design review process replacing informal coordination meetings, and every component in the 3D model tagged according to IEC 81346. This creates direct links between model elements and their technical specifications and safety procedures. Clash detection is automated and continuous rather than manual and periodic. Issues are resolved in the digital model before a single component is fabricated.
                  </p>
                </div>
                <div className="border-l-4 border-emerald-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Outcome</h3>
                  <p className="text-slate-700 leading-relaxed">
                    When BIM is implemented properly on complex energy projects, hundreds of physical clashes are identified and resolved digitally before construction begins. At handover, the operations team receives an intelligent model rather than a static drawing set, enabling maintenance tasks to be visualised in 3D before engineers enter high-pressure or hazardous environments. The model becomes an operational asset that continues to deliver value throughout the facility's lifecycle.
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
                SøDera brings a rare combination to BIM engagements: deep understanding of both the information management standards and the operational reality of the energy assets being modelled. We do not just build models. We build models that are useful for the people who will maintain the facility for the next 30 years.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our approach connects BIM directly to the RDS and document management practices that govern how asset information is used in operations. This integration is what turns a BIM deliverable into a genuine operational foundation rather than a project closeout artefact.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-t border-b border-slate-100 mb-10">
                {[
                  { value: 'ISO 19650', label: 'BIM information management' },
                  { value: 'IEC 81346', label: 'Asset data structuring' },
                  { value: '40%', label: 'Reduction in design clashes' },
                  { value: 'Digital Twin', label: 'Ready model delivery' },
                ].map((s) => (
                  <div key={s.label}>
                    <p style={{ fontFamily: 'Georgia, serif' }} className="text-2xl font-bold text-sky-600 mb-1">{s.value}</p>
                    <p className="text-xs text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { icon: Layers, title: 'Models built for operations', desc: 'Every model element carries structured asset data linked to IEC 81346 designations. The model is useful from day one of operations, not just during construction.' },
                  { icon: GitMerge, title: 'Connected to your information landscape', desc: 'BIM models integrated with document management systems, CMMS platforms, and asset registers so information flows without manual re-entry or duplication.' },
                  { icon: Database, title: 'Digital twin foundation', desc: 'Models structured for live data integration, enabling the transition from a static handover deliverable to a dynamic digital twin as operational data becomes available.' },
                  { icon: Shield, title: 'Standard-aligned from the start', desc: 'ISO 19650 and IEC 81346 compliance built into the model from the first element, not retrofitted at handover. This is what makes the model trustworthy for lifecycle use.' },
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
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-2">Discuss your BIM requirements</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Whether you are starting a new project or improving an existing model, we can help you build a BIM foundation that delivers operational value.
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
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-2">Train your team on BIM</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Practical ISO 19650 and information management training for project teams. On-site or remote.
                </p>
                <Link to={'/service-training' as any} className="block w-full px-4 py-2.5 bg-amber-500 text-white text-sm font-semibold rounded-xl hover:bg-amber-400 transition-colors text-center">
                  Explore Training
                </Link>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Standards we work with</h3>
                <div className="space-y-2">
                  {['ISO 19650', 'IEC 81346', 'IFC', 'openBIM', 'ISO 9001'].map((std) => (
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
