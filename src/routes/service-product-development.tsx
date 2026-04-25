import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Zap,
  Package,
  GitMerge,
  Shield,
} from 'lucide-react'

export const Route = createFileRoute('/service-product-development')({
  component: ProductDevelopmentPage,
})

function ProductDevelopmentPage() {
  SEOHead({
    title: 'Energy Product Development | Compliance by Design | SøDera',
    description:
      'SøDera partners with energy companies and startups to develop products built on IEC 81346 and ISO 9001 from day one. From concept to utility-ready deployment with compliant documentation and structured asset data.',
    keywords:
      'energy product development, compliance by design, IEC 81346 product, ISO 9001 product development, energy technology development, SME energy sector, utility approval energy product',
    canonicalUrl: 'https://www.soedera.eu/service-product-development',
  })

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Energy Product Development',
    description:
      'SøDera partners with energy companies and startups to develop products built on IEC 81346 and ISO 9001 from day one. Compliance by design, structured documentation, and utility-ready information architecture.',
    provider: { '@type': 'Organization', name: 'SøDera', url: 'https://www.soedera.eu' },
    areaServed: { '@type': 'Place', name: 'Europe' },
    serviceType: 'Energy Product Development Consulting',
    url: 'https://www.soedera.eu/service-product-development',
  }

  const sidebarLinks = [
    { label: 'Document Management', href: '/service-document-management' },
    { label: 'Reference Designation (RDS)', href: '/service-rds' },
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
              Product Development
            </div>
            <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Innovate with Operational Intelligence
            </h1>
            <p className="text-xl text-slate-200 mb-6 leading-relaxed">
              Partner with energy sector experts to develop products that are technically sound, standards-compliant, and ready for the operational realities of the field from day one.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {['ISO 9001', 'IEC 81346', 'Compliance by Design'].map((b) => (
                <span key={b} className="px-3 py-1 bg-white/10 border border-white/20 text-white text-xs font-semibold rounded-full">{b}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-400 transition-all hover:scale-105 shadow-lg">
                Discuss Your Product
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
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md" style={{ background: '#1a3a5c' }}>SA</div>
            <div>
              <blockquote style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl text-slate-800 italic leading-relaxed mb-3">
                "Successful product development in the energy sector is about meticulously bridging the gap between innovative concepts and operational realities. It demands a holistic approach where robust documentation and data intelligence are integrated from day one, ensuring solutions are not just groundbreaking, but also reliable and compliant."
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

            {/* What is Compliance by Design */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Understanding the discipline</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                What is Compliance by Design in energy product development?
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
                <p>
                  Product development in the energy sector sits at the intersection of rapid technological innovation and stringent regulatory and operational requirements. The theoretical framework for successful development in this environment is Compliance by Design. This principle holds that regulatory, safety, and documentation requirements must be integrated into a product's architecture from the very first conceptual sketch, rather than treated as a compliance exercise after the design is complete.
                </p>
                <p>
                  In the energy sector, this is intrinsically linked to Information Standardisation. Products must be designed to fit into the existing information ecosystems of major operators. This means adhering to standards like IEC 81346 for asset designation and ISO 9001 for quality management. A product that lacks standardised technical documentation or a clear asset identification framework will face significant hurdles during utility approval and certification phases regardless of its technical merit.
                </p>
                <p>
                  Data-Driven Design is the other critical pillar. By leveraging asset data and operational feedback from the field, developers can create products that are precisely tailored to address real-world problems rather than theoretical ones. Products developed with integrated documentation and compliance frameworks consistently reach market readiness faster and achieve significantly higher success rates during pilot deployments with major energy operators.
                </p>
                <p>
                  SøDera brings something rare to product development engagements: we have built our own product through exactly this process. SAM, our cloud-native RDS management platform, was developed from the ground up with IEC 81346 compliance embedded in the data model, ISO 9001 quality management built into the development workflow, and technical documentation structured for energy operator adoption. We apply the same framework to the products we help others develop.
                </p>
              </div>
            </div>

            {/* ── PHOTO PLACEHOLDER 1 ── */}
            <div className="mb-16 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center h-64">
              <div className="text-center">
                <p className="text-slate-400 text-sm font-semibold">Photo placeholder</p>
                <p className="text-slate-400 text-xs mt-1">Suggested: Product prototype, technical blueprint, or SAM platform screenshot</p>
              </div>
            </div>

            {/* SAM callout */}
            <div className="mb-16 bg-indigo-50 border border-indigo-200 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap size={20} className="text-indigo-600" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl font-bold text-indigo-900">SAM — Our RDS Management Platform</h3>
                    <span className="px-2 py-0.5 bg-indigo-200 text-indigo-700 text-xs font-bold rounded-full">Coming Soon</span>
                  </div>
                  <p className="text-indigo-800 leading-relaxed mb-3">
                    SAM is our own cloud-native platform for managing Reference Designation Systems built on Azure. It is the product of applying everything we know about IEC 81346, energy sector workflows, and operator information requirements to a software product designed from the ground up for the people who implement and maintain RDS systems.
                  </p>
                  <p className="text-indigo-800 leading-relaxed">
                    SAM is currently in development. If you are an energy operator or EPC contractor interested in early access or would like to shape the product through your operational requirements, we would like to hear from you.
                  </p>
                </div>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-500 transition-colors">
                Register Interest in SAM <ArrowRight size={14} />
              </Link>
            </div>

            {/* Cost callout */}
            <div className="mb-16 bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={22} />
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl font-bold text-amber-900">The cost of certification failure</h3>
              </div>
              <p className="text-amber-800 leading-relaxed mb-4">
                For an energy startup or an established firm launching a new product, failing to meet documentation or compliance standards during a utility approval process can be extremely costly in both money and time.
              </p>
              <p className="text-amber-800 leading-relaxed">
                Consider a company developing a new modular battery storage system. If they approach a major utility for a pilot project but lack standardised technical manuals or an IEC-compliant asset identification system, the utility's technical due diligence will fail. The cost of re-engineering the product's information architecture and resubmitting for certification can easily exceed <strong>€200,000</strong> in additional engineering hours and lost market opportunity. More critically, the delay allows competitors to secure the first-mover advantage that is so difficult to recover in a relationship-driven market.
              </p>
            </div>

            {/* Lifecycle diagram */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Where we fit</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-2xl font-bold text-slate-900 mb-6">
                Compliance by Design across the product development lifecycle
              </h2>
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 overflow-x-auto">
                <svg width="100%" viewBox="0 0 640 200" role="img">
                  <title>Product development lifecycle diagram</title>
                  <desc>Five product development phases with compliance and documentation spanning all phases</desc>
                  <defs>
                    <marker id="marrC" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                      <path d="M2 1L8 5L2 9" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </marker>
                  </defs>
                  {[
                    { label: 'Concept', x: 20 },
                    { label: 'Design', x: 152 },
                    { label: 'Prototype', x: 284 },
                    { label: 'Certification', x: 416 },
                  ].map((p) => (
                    <g key={p.label}>
                      <rect x={p.x} y={20} width={110} height={46} rx={6} fill="#f8fafc" stroke="#cbd5e1" strokeWidth={0.5}/>
                      <text x={p.x + 55} y={43} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={500} fill="#334155">{p.label}</text>
                      <line x1={p.x + 111} y1={43} x2={p.x + 150} y2={43} stroke="#94a3b8" strokeWidth={1} markerEnd="url(#marrC)"/>
                    </g>
                  ))}
                  <rect x={548} y={20} width={72} height={46} rx={6} fill="#f8fafc" stroke="#cbd5e1" strokeWidth={0.5}/>
                  <text x={584} y={43} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={500} fill="#334155">Launch</text>
                  <rect x={20} y={100} width={600} height={36} rx={6} fill="#f0fdf4" stroke="#86efac" strokeWidth={0.5}/>
                  <text x={320} y={118} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={500} fill="#14532d">Compliance by Design (ISO 9001, IEC 81346)</text>
                  <rect x={20} y={146} width={600} height={36} rx={6} fill="#dbeafe" stroke="#93c5fd" strokeWidth={0.5}/>
                  <text x={320} y={164} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={500} fill="#1e40af">Documentation Integration from Day One</text>
                </svg>
              </div>
            </div>

            {/* Methodology */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Our methodology</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                The SøDera collaborative framework
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                We partner with your team to accelerate your product's journey from concept to field deployment. Our framework integrates compliance and documentation at every stage, so they never become a bottleneck at the end of the development cycle.
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { n: '01', title: 'Concept and Feasibility', desc: 'Refining your vision through market analysis, regulatory landscape mapping, and technical feasibility assessment. We identify the compliance and documentation requirements that will govern the product before a line of design work begins.' },
                  { n: '02', title: 'Data-Driven Design', desc: 'Leveraging operational data and field insights to inform product specifications and user experience. Products designed around real operator workflows and real asset data structures are adopted faster and with fewer integration issues.' },
                  { n: '03', title: 'Iterative Prototyping', desc: 'Building and testing solutions through a structured but agile process. Each iteration includes a documentation and compliance checkpoint so that the product and its information architecture evolve together rather than separately.' },
                  { n: '04', title: 'Documentation Integration', desc: 'Embedding technical documentation and compliance verification into the design phase rather than appending them at project closeout. This is the core of Compliance by Design and the most common area where products fail utility approval.' },
                  { n: '05', title: 'Standard Alignment', desc: 'Ensuring all product data structures, asset identification systems, and technical manuals comply with IEC 81346 and ISO 9001. Alignment with these standards is what makes a product credible to major energy operators during procurement.' },
                  { n: '06', title: 'Launch and Optimisation', desc: 'Supporting market entry with utility-ready documentation packages, pilot deployment support, and structured feedback collection for future product iterations. The launch is the beginning of the product lifecycle, not the end of the development cycle.' },
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
                <p className="text-slate-400 text-xs mt-1">Suggested: Product development timeline or compliance framework diagram</p>
              </div>
            </div>

            <hr className="border-t border-slate-200 mb-16" />

            {/* Case study */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">A pattern we see repeatedly</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-10">
                When good technology fails utility approval
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Situation</h3>
                  <p className="text-slate-700 leading-relaxed">
                    We consistently encounter energy startups and established firms with technically sound products that struggle to gain traction with major utility customers. The technology works. The commercial case is clear. But the product lacks standardised technical documentation, an IEC-compliant asset identification system, or the structured information package that a utility's technical due diligence team needs to evaluate and approve it. The product fails at procurement, not at engineering.
                  </p>
                </div>
                <div className="border-l-4 border-sky-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">What Good Looks Like</h3>
                  <p className="text-slate-700 leading-relaxed">
                    The resolution always involves the same work: overhauling the product's information architecture, implementing an IEC 81346 compliant designation system for internal components, and building a comprehensive ISO-aligned technical documentation suite. When this work is done as part of the product development process rather than as a remediation exercise, it costs a fraction of the price and takes a fraction of the time.
                  </p>
                </div>
                <div className="border-l-4 border-emerald-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Outcome</h3>
                  <p className="text-slate-700 leading-relaxed">
                    When a product arrives at utility procurement with a professional, standardised information package, it passes technical due diligence where comparable products fail. The utility's evaluation team can quickly assess integration into their asset management systems, verify maintenance documentation, and confirm regulatory compliance. Operational readiness and documentation quality are consistently cited as key deciding factors by procurement teams evaluating new energy products.
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
                SøDera brings a perspective to product development that is extremely rare: we understand both the standards that govern energy operator information systems and the commercial realities of bringing a new product to market in a relationship-driven, compliance-intensive sector. We have been on both sides of the procurement table.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our own experience building SAM means we have applied every element of this framework to a real product under real constraints. When we advise on documentation architecture or IEC 81346 implementation for a new product, we do so from direct experience of what works and what does not.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-t border-b border-slate-100 mb-10">
                {[
                  { value: 'ISO 9001', label: 'Quality management' },
                  { value: 'IEC 81346', label: 'Asset identification' },
                  { value: '25%', label: 'Faster time to market readiness' },
                  { value: 'Field-Proven', label: 'Solutions for real environments' },
                ].map((s) => (
                  <div key={s.label}>
                    <p style={{ fontFamily: 'Georgia, serif' }} className="text-2xl font-bold text-sky-600 mb-1">{s.value}</p>
                    <p className="text-xs text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { icon: Package, title: 'Utility-ready from the start', desc: 'Products built with IEC 81346 designations and ISO-aligned documentation from day one pass utility technical due diligence without the costly remediation that compliance-after-design always requires.' },
                  { icon: GitMerge, title: 'Designed for operator integration', desc: 'Products that fit into existing energy operator information ecosystems are adopted faster. We design the information architecture of your product around the systems it will need to connect to.' },
                  { icon: Zap, title: 'Built by practitioners', desc: 'We have built our own product through this framework. SAM is the proof of concept. When we advise on product development, we advise from direct experience, not from theory.' },
                  { icon: Shield, title: 'Compliance that accelerates, not slows', desc: 'When compliance is designed in from the start, it removes risk rather than adding cost. The products that move fastest through utility approval are the ones where documentation and compliance were never afterthoughts.' },
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
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-2">Discuss your product</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Whether you are at concept stage or preparing for utility approval, we can help you build the information foundation your product needs.
                </p>
                <Link to="/contact" className="block w-full px-4 py-2.5 bg-sky-500 text-white text-sm font-semibold rounded-xl hover:bg-sky-400 transition-colors text-center">
                  Get in Touch
                </Link>
              </div>

              {/* SAM sidebar card */}
              <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-indigo-900">SAM — RDS Platform</h3>
                  <span className="px-1.5 py-0.5 bg-indigo-200 text-indigo-700 text-[10px] font-bold rounded-full">Coming Soon</span>
                </div>
                <p className="text-indigo-700 text-sm leading-relaxed mb-4">
                  Our own cloud-native RDS management platform built on Azure. Register your interest to be first to hear when it launches.
                </p>
                <Link to="/contact" className="block w-full px-4 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-500 transition-colors text-center">
                  Register Interest
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
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-2">SME Training Support</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  We also embed as subject matter experts in product development teams. On-site or remote.
                </p>
                <Link to={'/service-training' as any} className="block w-full px-4 py-2.5 bg-amber-500 text-white text-sm font-semibold rounded-xl hover:bg-amber-400 transition-colors text-center">
                  Explore Training & SME
                </Link>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Standards we work with</h3>
                <div className="space-y-2">
                  {['ISO 9001', 'IEC 81346', 'ISO 19650', 'ISO 55001'].map((std) => (
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
