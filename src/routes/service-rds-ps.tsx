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

export const Route = createFileRoute('/service-rds-ps' as any)({
  component: RDSPSPage,
})

function RDSPSPage() {
  SEOHead({
    title: 'RDS-PS: Reference Designation System for Power Systems | SøDera',
    description:
      'SøDera helps energy operators implement RDS-PS for offshore wind, solar, and grid infrastructure. IEC 81346-10 compliant designation systems for distributed renewable assets.',
    keywords:
      'RDS-PS, reference designation system power systems, IEC 81346-10, offshore wind RDS, renewable energy designation, wind farm asset tagging, RDS-PS implementation',
    canonicalUrl: 'https://www.soedera.eu/service-rds-ps',
  })

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'RDS-PS Implementation for Power Systems',
    description:
      'SøDera helps energy operators implement RDS-PS for offshore wind, solar, and grid infrastructure. IEC 81346-10 compliant designation for distributed renewable assets.',
    provider: { '@type': 'Organization', name: 'SøDera', url: 'https://www.soedera.eu' },
    areaServed: { '@type': 'Place', name: 'Europe' },
    serviceType: 'RDS-PS Implementation and Consulting',
    url: 'https://www.soedera.eu/service-rds-ps',
  }

  const sidebarLinks = [
    { label: 'Reference Designation (RDS)', href: '/service-rds' },
    { label: 'RDS Audit', href: '/service-rds-audit' },
    { label: 'Document Management', href: '/service-document-management' },
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
          <Link to={'/service-rds' as any} className="inline-flex items-center gap-2 text-blue-300 hover:text-white mb-10 group text-sm">
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            Back to Reference Designation
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-500/20 border border-sky-400/30 text-sky-300 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              RDS-PS
            </div>
            <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Future-Proof Your Power Systems
            </h1>
            <p className="text-xl text-slate-200 mb-6 leading-relaxed">
              Implement RDS-PS to unify your renewable assets, substations, and grid infrastructure under a single, modern designation standard built for the energy transition.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {['IEC 81346-10', 'RDS-PS', 'ISO 81346'].map((b) => (
                <span key={b} className="px-3 py-1 bg-white/10 border border-white/20 text-white text-xs font-semibold rounded-full">{b}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/book-assessment" className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-400 transition-all hover:scale-105 shadow-lg">
                Get Your RDS-PS Assessment
              </Link>
              <Link to="/blog/$articleId" params={{ articleId: 'rds-ps-explained-plant-asset-tagging' }} className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
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
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md" style={{ background: '#1a3a5c' }}>SC</div>
            <div>
              <blockquote style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl text-slate-800 italic leading-relaxed mb-3">
                "RDS-PS is the missing link for the energy transition. It provides the standardised structure needed to manage the vast, distributed networks of renewable assets and smart grids that define our future. It is about moving from naming things to architecting data."
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

            {/* What is RDS-PS */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Understanding the standard</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                What is RDS-PS?
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
                <p>
                  The Reference Designation System for Power Systems (RDS-PS) is the latest evolution in the IEC 81346 family, specifically designed to address the unique challenges of modern power systems including offshore wind farms, solar plants, grid infrastructure, and distributed energy resources. While RDS-PP focuses on traditional centralised power plants with fixed, complex equipment hierarchies, RDS-PS provides a more flexible and scalable framework for the modular, distributed assets that characterise today's energy transition.
                </p>
                <p>
                  The core theory of RDS-PS is Modular Standardisation. It recognises that modern energy assets are composed of repeating, modular units — hundreds of identical wind turbines, thousands of solar panels, or dozens of grid substations. RDS-PS allows for a hierarchical structure that is both deep and scalable. At the System Level, the designation identifies the overall power system, for example an entire offshore wind farm. At the Unit Level, it identifies the specific modular unit, for example Turbine 42. At the Component Level, it identifies the specific part within that unit, for example the gearbox or the pitch controller.
                </p>
                <p>
                  This unit-based approach enables Digital Continuity across massive, geographically dispersed assets. It ensures that a technician in the field, an engineer in the office, and an automated monitoring system are all referencing the exact same digital address for every component. This interoperability is essential for modern SCADA systems and for the development of portfolio-wide Digital Twins. Standardised designation in renewables consistently reduces data integration costs during the transition from construction to operations, and eliminates the Data Debt that accumulates when contractor-specific tagging systems are allowed to proliferate across a growing asset portfolio.
                </p>
              </div>
            </div>

            {/* RDS-PS vs RDS-PP comparison */}
            <div className="mb-16 bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl font-bold text-slate-900 mb-6">
                RDS-PS and RDS-PP: understanding the difference
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl border border-sky-200 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">PS</div>
                    <h4 className="font-bold text-slate-900">RDS-PS</h4>
                  </div>
                  <p className="text-xs font-semibold text-sky-600 mb-3">Power Systems and Renewables</p>
                  <div className="space-y-2">
                    {[
                      'Designed for distributed, modular assets',
                      'Wind farms, solar plants, grid infrastructure',
                      'Unit-based hierarchy for repeating assets',
                      'Scalable across large portfolios',
                      'Latest IEC 81346-10 standard',
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
                    <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">PP</div>
                    <h4 className="font-bold text-slate-900">RDS-PP</h4>
                  </div>
                  <p className="text-xs font-semibold text-slate-500 mb-3">Power Plants (Traditional)</p>
                  <div className="space-y-2">
                    {[
                      'Designed for centralised plant assets',
                      'Thermal, hydro, and nuclear facilities',
                      'Deep functional hierarchy for complex systems',
                      'Established in the industry for decades',
                      'VGB standard, widely adopted in Europe',
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
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl font-bold text-amber-900">The cost of homegrown tagging</h3>
              </div>
              <p className="text-amber-800 leading-relaxed mb-4">
                Many renewable projects still use contractor-specific or homegrown tagging systems. This lack of standardisation creates Data Debt that becomes increasingly expensive to service over a 25-year asset life.
              </p>
              <p className="text-amber-800 leading-relaxed">
                Consider an offshore wind farm where the cooling system tags are inconsistent across different turbine batches because different OEMs used different conventions. A maintenance team is dispatched with spare parts for a specific cooling pump, but upon arrival the physical tag on the turbine does not match the work order. The dry run costs the vessel charter, technician time, and lost production for that day, easily exceeding <strong>€30,000</strong> for a single incident. Multiplied across a 25-year operational period and a portfolio of hundreds of turbines, the cumulative cost of tag inconsistency is substantial. RDS-PS eliminates this ambiguity by providing a single authoritative standard for the entire asset.
              </p>
            </div>

            {/* ── PHOTO PLACEHOLDER ── */}
            <div className="mb-16 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center h-64">
              <div className="text-center">
                <p className="text-slate-400 text-sm font-semibold">Photo placeholder</p>
                <p className="text-slate-400 text-xs mt-1">Suggested: Offshore wind farm or RDS-PS tag structure diagram</p>
              </div>
            </div>

            {/* Methodology */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Our methodology</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                The SøDera RDS-PS rollout
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                We help you implement RDS-PS to create a scalable, digital-ready asset register that grows with your portfolio and remains compliant over the full asset lifecycle.
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { n: '01', title: 'Requirement Analysis', desc: 'Defining the specific designation needs for your asset type — wind, solar, grid, or hybrid. Different asset structures require different hierarchy depths and unit classification approaches within the RDS-PS framework.' },
                  { n: '02', title: 'Standard Alignment', desc: 'Designing a designation manual that strictly adheres to the latest RDS-PS guidelines and IEC 81346-10. The manual becomes the governing document for all designation decisions across the asset lifecycle.' },
                  { n: '03', title: 'Modular Hierarchy Design', desc: 'Creating the Unit and Component structures that best fit your operational model. For offshore wind, this typically means a turbine-level unit structure with standardised component codes aligned across the entire fleet.' },
                  { n: '04', title: 'Data Migration and Mapping', desc: 'Systematically converting legacy or contractor tags into the new RDS-PS framework with full traceability. Every existing identifier is accounted for and mapped. The history of the asset is preserved.' },
                  { n: '05', title: 'Software Integration', desc: 'Embedding the RDS-PS codes into your CMMS, SCADA, and remote monitoring tools. The designation becomes the linking key across all operational systems, enabling true portfolio-wide visibility.' },
                  { n: '06', title: 'Training and Stewardship', desc: 'Empowering your team to manage and expand the system as your portfolio grows. A designation system without trained stewards will drift. We build the competency and governance needed to sustain it.' },
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
                When three wind farms speak three different languages
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Situation</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Across growing offshore wind portfolios, we consistently encounter developers who have acquired or built multiple wind farms, each inheriting the tagging convention of the turbine OEM or EPC contractor that built it. The assets work. But comparing maintenance performance across sites is impossible, because the same component is called something different on every farm. A centralised operations centre cannot be built on a foundation of three incompatible data structures.
                  </p>
                </div>
                <div className="border-l-4 border-sky-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">What Good Looks Like</h3>
                  <p className="text-slate-700 leading-relaxed">
                    The resolution requires developing a unified RDS-PS designation manual that covers all asset types in the portfolio and mapping every asset across every site to the new standard. This is painstaking work but it is finite. Once done, the portfolio has a single data structure that is both IEC-compliant and operationally meaningful. New assets added to the portfolio are designated from day one under the same standard.
                  </p>
                </div>
                <div className="border-l-4 border-emerald-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Outcome</h3>
                  <p className="text-slate-700 leading-relaxed">
                    When portfolio-wide RDS-PS standardisation is achieved, operators gain the ability to compare maintenance performance across all sites using a single data structure. Centralised operations centres become possible. Fleet-wide availability benchmarking becomes meaningful. And every new asset added to the portfolio starts with a clean, compliant designation rather than inheriting the conventions of whoever built it.
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
                SøDera's RDS-PS practice is grounded in direct experience with the designation challenges of the renewable energy sector. We understand the operational reality of offshore wind maintenance, the data structures of modern SCADA systems, and the governance requirements of managing a growing distributed asset portfolio over a 25-year asset life.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-t border-b border-slate-100 mb-10">
                {[
                  { value: 'RDS-PS', label: 'Power systems standard' },
                  { value: 'IEC 81346-10', label: 'International compliance' },
                  { value: '25%', label: 'Savings on data integration' },
                  { value: 'Scalable', label: 'Portfolio-wide frameworks' },
                ].map((s) => (
                  <div key={s.label}>
                    <p style={{ fontFamily: 'Georgia, serif' }} className="text-2xl font-bold text-sky-600 mb-1">{s.value}</p>
                    <p className="text-xs text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { icon: Network, title: 'Built for distributed assets', desc: 'RDS-PS is designed for the modular, repeating structure of renewable assets. Our implementation frameworks are built around this reality, not adapted from conventional power plant practice.' },
                  { icon: Layers, title: 'Portfolio-wide standardisation', desc: 'We work at portfolio scale, not just single-site scale. The goal is a single designation standard that works across every asset in your fleet, regardless of who built it or when.' },
                  { icon: GitMerge, title: 'Lifecycle data continuity', desc: 'Designations applied during construction remain the authoritative identifiers through commissioning, operations, and maintenance. No translation layer, no ambiguity across the asset lifecycle.' },
                  { icon: Database, title: 'Digital twin ready', desc: 'RDS-PS compliant designations are the foundation for any meaningful digital twin of a renewable asset. Without consistent identification, sensor data and engineering documents cannot be reliably linked.' },
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
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-2">Get your RDS-PS assessment</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  We review your current designation system against the RDS-PS standard and give you a clear picture of what needs to change. Delivered in approximately two weeks.
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
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-2">Train your team on RDS-PS</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Hands-on IEC 81346 and RDS-PS training for your engineering and operations teams. On-site or remote.
                </p>
                <Link to={'/service-training' as any} className="block w-full px-4 py-2.5 bg-amber-500 text-white text-sm font-semibold rounded-xl hover:bg-amber-400 transition-colors text-center">
                  Explore Training
                </Link>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Standards we work with</h3>
                <div className="space-y-2">
                  {['IEC 81346-10', 'RDS-PS', 'RDS-PP', 'ISO 81346', 'IEC 81346'].map((std) => (
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
