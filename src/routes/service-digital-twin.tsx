import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Zap,
  Database,
  GitMerge,
  Shield,
} from 'lucide-react'

export const Route = createFileRoute('/service-digital-twin' as any)({
  component: DigitalTwinPage,
})

function DigitalTwinPage() {
  SEOHead({
    title: 'Digital Twin for Energy Infrastructure | IEC 81346 | SøDera',
    description:
      'SøDera helps energy operators build digital twins grounded in IEC 81346 and ISO 19650. From feasibility through to predictive maintenance, we create dynamic virtual replicas of energy assets that deliver operational intelligence.',
    keywords:
      'digital twin energy sector, digital twin IEC 81346, digital twin offshore wind, digital twin power plant, predictive maintenance digital twin, energy asset digital twin, ISO 19650 digital twin',
    canonicalUrl: 'https://www.soedera.eu/service-digital-twin',
  })

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Digital Twin Services for Energy Infrastructure',
    description:
      'SøDera helps energy operators build digital twins grounded in IEC 81346 and ISO 19650. From feasibility through to predictive maintenance deployment for offshore wind, power plants, and industrial assets.',
    provider: { '@type': 'Organization', name: 'SøDera', url: 'https://www.soedera.eu' },
    areaServed: { '@type': 'Place', name: 'Europe' },
    serviceType: 'Digital Twin Consulting and Implementation',
    url: 'https://www.soedera.eu/service-digital-twin',
  }

  const sidebarLinks = [
    { label: 'Building Information Modelling', href: '/service-bim' },
    { label: 'Reference Designation (RDS)', href: '/service-rds' },
    { label: 'IEC 81346', href: '/service-iec81346' },
    { label: 'Document Management', href: '/service-document-management' },
    { label: 'Project Management', href: '/service-project-management' },
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
          <Link to="/service-bim" className="inline-flex items-center gap-2 text-blue-300 hover:text-white mb-10 group text-sm">
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            Back to BIM Services
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-500/20 border border-sky-400/30 text-sky-300 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              Digital Twin
            </div>
            <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Real-Time Intelligence for Your Physical Assets
            </h1>
            <p className="text-xl text-slate-200 mb-6 leading-relaxed">
              Create a dynamic virtual replica of your energy infrastructure to optimise performance, predict failures, and transform how you make operational decisions across the full asset lifecycle.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {['ISO 19650', 'IEC 81346', 'Industry 4.0'].map((b) => (
                <span key={b} className="px-3 py-1 bg-white/10 border border-white/20 text-white text-xs font-semibold rounded-full">{b}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-400 transition-all hover:scale-105 shadow-lg">
                Discuss Your Digital Twin
              </Link>
              <Link to="/service-bim" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
                About BIM Services
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
                "The Digital Twin is the ultimate realisation of data-driven asset management. It transforms static information into dynamic intelligence, allowing us to not just react to problems, but to predict and prevent them, fundamentally changing how we design, operate, and maintain critical energy infrastructure."
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

            {/* What is a Digital Twin */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Understanding the discipline</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                What is a Digital Twin in the energy sector?
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
                <p>
                  A Digital Twin is a virtual representation of a physical asset, process, or system that is continuously updated with real-time data from its physical counterpart. In the energy sector, this concept is transforming asset management from reactive to predictive. A Digital Twin is not a 3D model or a static documentation set. It is a dynamic, living replica of the physical world that enables advanced analytics, operational simulations, and genuinely informed decision-making.
                </p>
                <p>
                  The foundation of a robust Digital Twin rests on several interconnected pillars. Data Integration brings together information from diverse sources including sensors and IoT devices, SCADA systems, CMMS, and engineering documents structured through BIM and IEC 81346. Without a standardised information architecture, this data aggregation is either impossible or produces a system that cannot be trusted. Real-time Synchronisation ensures the virtual model accurately reflects the current condition of the physical asset through robust data pipelines.
                </p>
                <p>
                  Advanced Analytics enables machine learning algorithms to process large volumes of operational data, identify degradation patterns, predict potential failures before they occur, and optimise asset performance parameters. Simulation capability allows operators to run what-if scenarios and test operational changes in the digital environment before implementing them in the physical one, eliminating the risk of costly trial and error on live assets.
                </p>
                <p>
                  The returns from well-implemented Digital Twins in the energy sector are consistently significant. Research demonstrates reductions in unplanned downtime of between 25 and 42 percent, decreases in maintenance-related incidents of between 35 and 50 percent, and meaningful extension of asset operational lifespan. These outcomes are achievable, but only when the Digital Twin is built on a foundation of clean, structured, IEC 81346 compliant asset identification.
                </p>
              </div>
            </div>

            {/* Four pillars */}
            <div className="mb-16 bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl font-bold text-slate-900 mb-2">
                The four pillars of a functional Digital Twin
              </h3>
              <p className="text-slate-500 text-sm mb-8">Each pillar must be in place. A Digital Twin without structured asset identification cannot aggregate data reliably. One without real-time synchronisation is just a static model.</p>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { n: '1', label: 'Data Integration', color: 'bg-sky-600', desc: 'Aggregating data from sensors, SCADA, CMMS, and engineering documents into a unified information architecture built on IEC 81346 and ISO 19650. The quality of the Digital Twin is determined entirely by the quality of this foundation.' },
                  { n: '2', label: 'Real-time Synchronisation', color: 'bg-indigo-600', desc: 'Robust data pipelines and communication protocols ensuring the virtual model accurately and continuously reflects the current state of the physical asset. Latency and data loss at this layer undermine every other capability.' },
                  { n: '3', label: 'Advanced Analytics', color: 'bg-emerald-600', desc: 'Machine learning models that process operational data to identify patterns, predict component degradation, and surface actionable insights. This is where the Digital Twin moves from observation to prediction.' },
                  { n: '4', label: 'Simulation and Optimisation', color: 'bg-amber-600', desc: 'The ability to run what-if scenarios in the digital environment before making changes to the physical asset. Test maintenance schedules, operational parameters, and response plans without touching the live system.' },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 p-5 rounded-xl border border-slate-200">
                    <div className={`w-9 h-9 ${item.color} rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>{item.n}</div>
                    <div>
                      <p style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-1">{item.label}</p>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost callout */}
            <div className="mb-16 bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={22} />
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl font-bold text-amber-900">The cost of unplanned downtime</h3>
              </div>
              <p className="text-amber-800 leading-relaxed mb-4">
                In the energy sector, unplanned downtime of critical assets can lead to massive financial losses, regulatory penalties, and in extreme cases, grid instability. Without a Digital Twin, maintenance is often scheduled based on fixed intervals or triggered by failure, both of which are suboptimal for complex, high-value assets.
              </p>
              <p className="text-amber-800 leading-relaxed">
                Consider a major power transformer in a substation. If a critical internal component degrades undetected and fails unexpectedly, the cost of the resulting outage can be extraordinary. For a large generation asset, lost revenue alone can reach <strong>€500,000 per day</strong>, before emergency repair costs and potential regulatory penalties are added. A Digital Twin continuously monitoring the transformer's condition can predict such failures weeks or months in advance, enabling scheduled preventive maintenance and avoiding catastrophic unplanned outages entirely.
              </p>
            </div>

            {/* ── PHOTO PLACEHOLDER ── */}
            <div className="mb-16 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center h-64">
              <div className="text-center">
                <p className="text-slate-400 text-sm font-semibold">Photo placeholder</p>
                <p className="text-slate-400 text-xs mt-1">Suggested: Digital twin visualisation showing physical asset alongside real-time data dashboard</p>
              </div>
            </div>

            {/* Methodology */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Our methodology</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                The SøDera Digital Twin framework
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                We guide operators through the entire Digital Twin lifecycle, from initial feasibility assessment through to operational deployment and continuous improvement. Our approach is grounded in the understanding that a Digital Twin is only as good as the information architecture beneath it.
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { n: '01', title: 'Feasibility and Strategy', desc: 'Assessing your current assets, data landscape, and operational goals to define a clear Digital Twin roadmap. Not every asset justifies a full Digital Twin immediately. We help you prioritise where the investment delivers the highest return.' },
                  { n: '02', title: 'Data Integration and Harmonisation', desc: 'Connecting diverse data sources including IoT sensors, SCADA systems, CMMS records, and BIM models, and structuring the information using IEC 81346 as the linking standard. This foundation determines the reliability of everything built on top of it.' },
                  { n: '03', title: 'Model Development', desc: 'Creating high-fidelity 3D models integrated with real-time operational data. Every model element is tagged with IEC 81346 compliant designations so that sensor data, maintenance records, and engineering documents all link to the same asset identifier.' },
                  { n: '04', title: 'Analytics and AI Layer', desc: 'Developing predictive models and AI algorithms to extract actionable insights from operational data. This layer translates raw sensor readings into meaningful operational intelligence: predicted failure windows, anomaly alerts, and performance optimisation recommendations.' },
                  { n: '05', title: 'Simulation and Optimisation', desc: 'Building what-if scenario capabilities to test operational changes and optimise asset performance without risk to the physical asset. Maintenance schedules, load profiles, and emergency response procedures can all be tested digitally before implementation.' },
                  { n: '06', title: 'Deployment and Training', desc: 'Implementing the Digital Twin platform and training your teams to use it effectively for day-to-day decision-making. A Digital Twin that is not embedded in operational workflows delivers no value. We ensure adoption is structured and sustained.' },
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
                When reactive maintenance becomes operationally unsustainable
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Situation</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Across offshore wind fleets, we consistently see operators experiencing high maintenance costs and significant unplanned downtime from unexpected failures of critical components such as gearboxes and generators. The root cause is rarely poor maintenance practice. It is the absence of early warning. Without visibility into component degradation trends, the first indication of a problem is the failure itself, at which point the cost and logistics of offshore intervention are at their highest.
                  </p>
                </div>
                <div className="border-l-4 border-sky-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">What Good Looks Like</h3>
                  <p className="text-slate-700 leading-relaxed">
                    A Digital Twin built on clean IEC 81346 compliant asset identification integrates real-time sensor data from each asset with historical maintenance records and engineering specifications. Advanced predictive models are trained on this combined data to identify the signature patterns that precede component degradation and failure. Maintenance interventions are then scheduled at the optimal point in the degradation curve: late enough to minimise unnecessary maintenance, early enough to prevent failure entirely.
                  </p>
                </div>
                <div className="border-l-4 border-emerald-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Outcome</h3>
                  <p className="text-slate-700 leading-relaxed">
                    When Digital Twin implementation is done properly on offshore wind fleets, operators consistently achieve meaningful reductions in unplanned downtime and maintenance costs within the first year of operation. The shift from reactive to predictive maintenance optimises vessel usage, reduces the frequency and cost of offshore interventions, and materially extends the operational lifespan of critical components across the fleet.
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
                What distinguishes SøDera's Digital Twin practice is that we start from the information architecture, not from the visualisation layer. Most Digital Twin failures we see in the energy sector trace back to the same root cause: the underlying asset identification was not structured, not compliant, and not consistent enough to support reliable data aggregation. We solve this problem first, which is why the Digital Twins we support actually deliver operational value.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-t border-b border-slate-100 mb-10">
                {[
                  { value: '25-42%', label: 'Reduction in unplanned downtime' },
                  { value: '35-50%', label: 'Fewer maintenance incidents' },
                  { value: 'IEC 81346', label: 'Data foundation standard' },
                  { value: 'Real-time', label: 'Dynamic operational intelligence' },
                ].map((s) => (
                  <div key={s.label}>
                    <p style={{ fontFamily: 'Georgia, serif' }} className="text-2xl font-bold text-sky-600 mb-1">{s.value}</p>
                    <p className="text-xs text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { icon: Database, title: 'Information architecture first', desc: 'We build the IEC 81346 and ISO 19650 foundation before connecting sensors or building models. A Digital Twin built on poorly structured data will not deliver reliable predictions regardless of the analytics layer above it.' },
                  { icon: Zap, title: 'From BIM to live Digital Twin', desc: 'We bridge the gap between the static BIM model delivered at handover and a genuinely dynamic Digital Twin. The BIM model is the starting point. The live operational data is what makes it intelligence rather than documentation.' },
                  { icon: GitMerge, title: 'Lifecycle continuity', desc: 'Digital Twins that are built during design and updated through commissioning and operations provide the deepest value. We structure engagements to build the foundation early and evolve the capability across the full asset lifecycle.' },
                  { icon: Shield, title: 'Grounded in energy sector reality', desc: 'Our Digital Twin practice is built on direct experience of how energy assets are operated, maintained, and handed over. The models we build reflect operational reality, not laboratory conditions.' },
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
                  { id: 'before-you-sign-dms-requirements', title: 'Before You Sign: 10 Critical Requirements to Demand from any DMS Vendor', category: 'Document Management', readTime: '10 min read' },
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
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-2">Discuss your Digital Twin</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Whether you are assessing feasibility or ready to build, we can help you define the right approach for your assets and operational goals.
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
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-2">Train your team</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Practical ISO 19650 and IEC 81346 training for the teams building and operating your Digital Twin foundation. On-site or remote.
                </p>
                <Link to={'/service-training' as any} className="block w-full px-4 py-2.5 bg-amber-500 text-white text-sm font-semibold rounded-xl hover:bg-amber-400 transition-colors text-center">
                  Explore Training
                </Link>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Prerequisites for a Digital Twin</h3>
                <div className="space-y-3">
                  {[
                    { item: 'IEC 81346 compliant asset identification', linked: '/service-rds' },
                    { item: 'ISO 19650 aligned information management', linked: '/service-document-management' },
                    { item: 'BIM model with structured asset data', linked: '/service-bim' },
                  ].map((p) => (
                    <div key={p.item} className="flex items-start gap-2">
                      <CheckCircle size={13} className="text-sky-500 flex-shrink-0 mt-0.5" />
                      <Link to={p.linked as any} className="text-xs text-slate-600 hover:text-sky-600 transition-colors">{p.item}</Link>
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
