import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  GraduationCap,
  Users,
  Monitor,
  MapPin,
} from 'lucide-react'

export const Route = createFileRoute('/service-rds-training' as any)({
  component: RDSTrainingPage,
})

function RDSTrainingPage() {
  SEOHead({
    title: 'RDS Training | IEC 81346 for Engineering Teams | SøDera',
    description:
      'SøDera delivers practical RDS training on IEC 81346, RDS-PP, and RDS-PS for engineering teams in the energy sector. On-site and remote, tailored to your assets and systems.',
    keywords:
      'RDS training, IEC 81346 training, RDS-PP training, RDS-PS training, reference designation training, energy sector training, asset tagging training, IEC 81346 course',
    canonicalUrl: 'https://www.soedera.eu/service-rds-training',
  })

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'RDS Training on IEC 81346',
    description:
      'SøDera delivers practical training on IEC 81346, RDS-PP, and RDS-PS for engineering teams in the energy sector. On-site and remote delivery, tailored to your assets and operational context.',
    provider: { '@type': 'Organization', name: 'SøDera', url: 'https://www.soedera.eu' },
    areaServed: { '@type': 'Place', name: 'Europe' },
    serviceType: 'RDS Training and IEC 81346 Education',
    url: 'https://www.soedera.eu/service-rds-training',
  }

  const sidebarLinks = [
    { label: 'Reference Designation (RDS)', href: '/service-rds' },
    { label: 'IEC 81346', href: '/service-iec81346' },
    { label: 'RDS-PS', href: '/service-rds-ps' },
    { label: 'RDS Audit', href: '/service-rds-audit' },
    { label: 'All Training & SME', href: '/service-training' },
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
          <Link to={'/service-training' as any} className="inline-flex items-center gap-2 text-amber-300 hover:text-white mb-10 group text-sm">
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            Back to Training and SME
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/20 border border-amber-400/30 text-amber-300 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <GraduationCap size={13} /> RDS Training
            </div>
            <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Master the Language of Industrial Assets
            </h1>
            <p className="text-xl text-slate-200 mb-6 leading-relaxed">
              Equip your engineers, technicians, and project teams with the practical skills to implement and maintain IEC 81346 Reference Designation Systems across your energy assets.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {['IEC 81346', 'RDS-PP', 'RDS-PS', 'On-site and Remote'].map((b) => (
                <span key={b} className="px-3 py-1 bg-white/10 border border-white/20 text-white text-xs font-semibold rounded-full">{b}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-400 transition-all hover:scale-105 shadow-lg">
                Enquire About RDS Training
              </Link>
              <Link to={'/service-rds' as any} className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
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
                "The true power of IEC 81346 is only unlocked when your team understands its principles and practical application. Effective RDS training transforms complex standards into intuitive tools, empowering your personnel to build and maintain robust information architectures that drive operational excellence."
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

            {/* Why competency matters */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">Why training matters</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                The critical role of competency in RDS implementation
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
                <p>
                  The successful implementation and long-term maintenance of a Reference Designation System based on IEC 81346 is fundamentally dependent on the competency of the people who apply it. Even the most carefully designed designation framework will suffer from Standard Drift and gradually fail to deliver its intended benefits if the engineering team does not have a genuine working understanding of the principles behind it.
                </p>
                <p>
                  Effective RDS training goes beyond memorising codes. It builds a deep understanding of the object-oriented structuring principles that underpin IEC 81346: the multi-aspect views of Function, Product, and Location, and how each aspect serves a different discipline and a different operational purpose. It covers the practical application of sector-specific standards such as RDS-PP for power plants and RDS-PS for power systems, so that engineers can correctly apply the rules to the specific asset types they work with every day.
                </p>
                <p>
                  Training is also essential for building a culture of information quality. When all stakeholders from design engineers to maintenance technicians understand the importance and methodology of RDS, they become active participants in maintaining data integrity rather than passive users of a system they do not understand. Organisations that invest in practical technical training for complex information systems consistently see a measurable reduction in human errors, faster adoption of digital tools, and improved data quality in asset handovers.
                </p>
              </div>
            </div>

            {/* Delivery formats */}
            <div className="mb-16 bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl font-bold text-slate-900 mb-6">
                How we deliver RDS training
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: MapPin, color: 'bg-amber-50', iconColor: 'text-amber-600', title: 'On-site delivery', desc: 'We come to your location and deliver training in your environment, using your assets and your systems as the basis for practical exercises. On-site delivery is the most effective format for teams who will be applying the standard immediately.' },
                  { icon: Monitor, color: 'bg-sky-50', iconColor: 'text-sky-600', title: 'Remote delivery', desc: 'Live, instructor-led sessions delivered online with full interactivity, exercises, and Q&A. Effective for geographically distributed teams or as a more cost-efficient option for introductory programmes.' },
                  { icon: Users, color: 'bg-emerald-50', iconColor: 'text-emerald-600', title: 'Team workshops', desc: 'Structured workshops designed for groups of 4 to 20 participants. Half-day introduction sessions through to multi-day programmes covering RDS-PP, RDS-PS, and IEC 81346-1 in depth.' },
                ].map((item) => (
                  <div key={item.title} className={`rounded-xl ${item.color} border border-slate-200 p-5`}>
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                      <item.icon size={18} className={item.iconColor} />
                    </div>
                    <h4 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost callout */}
            <div className="mb-16 bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={22} />
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl font-bold text-amber-900">The cost of inadequate training</h3>
              </div>
              <p className="text-amber-800 leading-relaxed mb-4">
                Inadequate training in RDS principles leads directly to misapplication of the standard. Inconsistent tagging, incorrect aspect usage, and undocumented deviations accumulate silently until a system integration or handover event forces a reckoning.
              </p>
              <p className="text-amber-800 leading-relaxed">
                Consider a project where engineers lacking proper RDS training incorrectly apply designation codes to hundreds of new components. This may not be discovered until commissioning, when the CMMS fails to integrate correctly with the asset register. The cost of auditing, identifying, and manually correcting these errors can easily exceed <strong>€25,000</strong> in specialised labour and project delays. Beyond the financial cost, it erodes trust in the data and makes every subsequent digital initiative harder to justify internally. Training is a fraction of the cost of remediation.
              </p>
            </div>

            {/* ── PHOTO PLACEHOLDER ── */}
            <div className="mb-16 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center h-64">
              <div className="text-center">
                <p className="text-slate-400 text-sm font-semibold">Photo placeholder</p>
                <p className="text-slate-400 text-xs mt-1">Suggested: Training session in progress or team workshop with IEC 81346 diagrams</p>
              </div>
            </div>

            {/* Methodology */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">Our approach</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                The SøDera practical training approach
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                Our training programmes are designed for practical application and lasting impact. Every programme is tailored to your specific asset types, systems, and operational context. We do not deliver generic standards awareness sessions.
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { n: '01', title: 'Needs Assessment', desc: 'Identifying specific knowledge gaps and training objectives for your team before designing the programme. Different roles need different depths of understanding. A design engineer and a maintenance technician do not need the same training.' },
                  { n: '02', title: 'Customised Curriculum', desc: 'Developing modules focused on your industry sector and your specific asset types. RDS-PP for a power plant engineering team looks very different from RDS-PS for an offshore wind operations team, even though both are based on IEC 81346.' },
                  { n: '03', title: 'Hands-on Workshops', desc: 'Practical exercises using real-world scenarios drawn from the energy sector. Participants apply designation rules to actual asset structures, not abstract examples. This is where the standard stops being a document and starts being a tool.' },
                  { n: '04', title: 'Standard Deep Dive', desc: 'Comprehensive coverage of IEC 81346-1 principles, RDS-PP application for power plants, and RDS-PS application for renewables and grid infrastructure. Participants understand not just what to do but why the standard is structured the way it is.' },
                  { n: '05', title: 'Tool Integration', desc: 'Guidance on applying RDS within your existing engineering and asset management software. The standard only delivers value when it is embedded in the tools people use every day, and training must bridge the gap between the standard and the software.' },
                  { n: '06', title: 'Ongoing Support', desc: 'Providing certificates of completion and ongoing support for continuous learning. Questions arise during implementation that were not covered in training. We are available to answer them, so that implementation proceeds correctly rather than defaulting to old habits.' },
                ].map((item) => (
                  <div key={item.n} className="flex gap-5 p-6 rounded-xl border border-slate-200 hover:border-amber-200 hover:shadow-sm transition-all">
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
              <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">A pattern we see repeatedly</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-10">
                When skilled engineers do not share a common standard
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Situation</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Across large European utilities, we consistently encounter engineering departments where the individuals are highly competent in their specific disciplines but do not share a common understanding of IEC 81346 and its practical application. The result is inconsistent asset tagging across a diverse portfolio of power plants and substations. Different sites apply the standard differently. The same asset type is designated differently depending on when the facility was built and who led the engineering team at the time.
                  </p>
                </div>
                <div className="border-l-4 border-sky-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">What Good Looks Like</h3>
                  <p className="text-slate-700 leading-relaxed">
                    A structured training programme delivered to the engineering team — combining theoretical instruction on IEC 81346-1 and hands-on workshops applying RDS-PP and RDS-PS to the operator's specific asset types — creates a shared language across the organisation. Every engineer, from the most senior to the most recently hired, applies the standard in the same way. The designation manual becomes something the team uses, not just something that exists.
                  </p>
                </div>
                <div className="border-l-4 border-emerald-400 pl-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Outcome</h3>
                  <p className="text-slate-700 leading-relaxed">
                    When RDS training is delivered practically and tailored to the operator's specific assets, teams consistently show significant improvement in correct standard application. Data discrepancies in subsequent project handovers reduce materially. Confidence among engineers when working with asset data increases measurably. And the organisation has the internal competency it needs to sustain a compliant designation system over the full asset lifecycle without external intervention for every change.
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-t border-slate-200 mb-16" />

            {/* Expertise */}
            <div className="mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">Why train with us</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Expertise you can measure. Trust you can verify.
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                SøDera's RDS training is delivered by practitioners who have applied IEC 81346 in the field on real energy projects. We do not teach from a standards document. We teach from direct experience of what goes wrong when the standard is misapplied, and how to apply it correctly in the specific operational context of the energy sector.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-t border-b border-slate-100 mb-10">
                {[
                  { value: 'IEC 81346', label: 'Core standard expertise' },
                  { value: 'RDS-PP/PS', label: 'Sector-specific application' },
                  { value: '90%+', label: 'Improvement in correct application' },
                  { value: 'Practical', label: 'Real-world focus throughout' },
                ].map((s) => (
                  <div key={s.label}>
                    <p style={{ fontFamily: 'Georgia, serif' }} className="text-2xl font-bold text-amber-500 mb-1">{s.value}</p>
                    <p className="text-xs text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <p className="text-sm font-bold text-slate-700 mb-4">Who attends our RDS training</p>
                {[
                  'Design engineers implementing RDS on new energy assets',
                  'Engineering managers overseeing designation standards across projects',
                  'Document controllers managing RDS-linked technical documentation',
                  'Maintenance technicians who use designation systems in daily operations',
                  'Project managers overseeing information management on major projects',
                  'Organisations preparing for IEC 81346 compliance across their portfolio',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-700 text-sm">
                    <CheckCircle size={15} className="text-amber-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-t border-slate-200 mb-16" />

            {/* Related insights */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">From our team</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-2xl font-bold text-slate-900 mb-8">Related insights</h2>
              <div className="grid sm:grid-cols-3 gap-5">
                {[
                  { id: 'rds-ps-explained-plant-asset-tagging', title: 'RDS-PS Explained: How One Tag Connects Your Entire Plant', category: 'RDS', readTime: '8 min read' },
                  { id: 'rdspp-vs-rdsps', title: 'RDS-PP vs RDS-PS: Understanding Standardisation, Flexibility, and the Choices Asset Owners Must Make', category: 'RDS', readTime: '5 min read' },
                  { id: 'information-management-offshore-wind-rds-cost', title: 'Information Management in Offshore Wind: Why RDS and Structured Data Save €20,000 Per Incident', category: 'RDS', readTime: '11 min read' },
                ].map((a) => (
                  <Link key={a.id} to="/blog/$articleId" params={{ articleId: a.id }} className="block p-5 rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-sm transition-all group">
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">{a.category}</span>
                    <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-sm font-bold text-slate-900 mt-2 mb-2 leading-snug group-hover:text-amber-700 transition-colors">{a.title}</h3>
                    <span className="text-xs text-slate-400">{a.readTime}</span>
                  </Link>
                ))}
              </div>
            </div>

          </div>{/* end main content */}

          {/* ── Sticky Sidebar ── */}
          <aside className="hidden xl:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-5">

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-2">Enquire about RDS training</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Tell us about your team, your asset types, and what you need to achieve. We will design a programme around your specific context.
                </p>
                <Link to="/contact" className="block w-full px-4 py-2.5 bg-amber-500 text-white text-sm font-semibold rounded-xl hover:bg-amber-400 transition-colors text-center">
                  Get in Touch
                </Link>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Related Services</h3>
                <div className="space-y-1">
                  {sidebarLinks.map((item) => (
                    <Link key={item.label} to={item.href as any} className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 group transition-colors text-sm text-slate-700 hover:text-amber-600">
                      <ArrowRight size={12} className="text-slate-300 group-hover:text-amber-500 flex-shrink-0 transition-colors" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Training formats</h3>
                <div className="space-y-3">
                  {[
                    { format: 'Half-day introduction', desc: 'IEC 81346 principles and overview' },
                    { format: 'Full-day workshop', desc: 'Principles and practical application' },
                    { format: 'Multi-day programme', desc: 'In-depth RDS-PP or RDS-PS coverage' },
                    { format: 'On-site or remote', desc: 'Flexible delivery to suit your team' },
                  ].map((item) => (
                    <div key={item.format}>
                      <p className="text-sm font-semibold text-slate-700">{item.format}</p>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5">
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-2">Need an RDS audit first?</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  An RDS audit before training helps identify exactly where your team's knowledge gaps are and what the training needs to address.
                </p>
                <Link to="/service-rds-audit" className="block w-full px-4 py-2.5 bg-sky-500 text-white text-sm font-semibold rounded-xl hover:bg-sky-400 transition-colors text-center">
                  Learn About RDS Audits
                </Link>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}
