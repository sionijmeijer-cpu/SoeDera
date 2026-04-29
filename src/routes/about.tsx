import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import {
  ArrowRight,
  Linkedin,
  CheckCircle,
  Zap,
  MessageCircle,
} from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  SEOHead({
    title: 'About SøDera | ISO/IEC 81346 and Information Management Specialists',
    description:
      'SøDera was founded by two specialists who worked together on a 2GW offshore wind project at TenneT. Søren Christensen brings 7+ years of RDS and ISO/IEC 81346 expertise. Sylvia Awoudu brings deep experience in document management, BIM, and asset information systems.',
    keywords:
      'about SøDera, ISO/IEC 81346 specialists, RDS-PP experts, offshore wind information management, energy documentation consultancy, Søren Christensen, Sylvia Awoudu',
    canonicalUrl: 'https://www.soedera.eu/about',
  })

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section
        className="relative min-h-[520px] flex items-center py-32 overflow-hidden"
        style={{
          backgroundImage: 'url(https://i.imgur.com/L0OivFj.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-4">Who we are</p>
            <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Two specialists.<br />One shared conviction.
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              SøDera exists because two people who worked together on one of Europe's largest offshore wind projects saw the same gap and decided to do something about it.
            </p>
          </div>
        </div>
      </section>

      {/* ── Founding story ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-4">The founding story</p>
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
              Born from a 2GW project
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                SøDera was not founded in a boardroom. It came from a shared recognition that two specialists working on the same major offshore wind infrastructure programme were approaching the same fundamental challenge from different angles. Søren was the ISO/IEC 81346 subject matter expert, developing the designation framework and ensuring its integration across engineering, documentation, and asset systems. Sylvia was the Product Owner of the Common Data Environment, responsible for translating operational and engineering requirements into functioning digital systems. It was during the development of the asset management application within that CDE that the two found common ground.
              </p>
              <p>
                What became clear was that the distance between how asset data is structured and how the systems built to reflect it are designed and governed was wider than it needed to be, and that closing it required someone who genuinely understood both sides. SøDera was built to do exactly that. Not to provide resources, but to bring the knowledge, the standards expertise, and the practical experience of having worked at that intersection on a programme at real scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What makes us different ── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-4">What makes us different</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
                We tailor everything to your situation
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  We are two people who are genuinely committed to solving the problem in front of us. We do not have a standard package and we do not apply a template. We listen to where you are, we understand your assets and your systems, and we build the approach around that.
                </p>
                <p>
                  What we bring is not a methodology off a shelf. It is direct, practitioner-level experience of applying ISO/IEC 81346 in the field on major energy infrastructure, building and owning the information systems that govern how that data lives, and understanding exactly where the gaps open up between the two.
                </p>
                <p>
                  You give us the problem. We give you the clearest possible picture of your assets, your data, and what needs to change. And we work alongside you to make it happen.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: 'Tailored to your reality', desc: 'No standard packages. Every engagement starts with understanding your specific assets, systems, and operational context.' },
                { title: 'Practitioner-level expertise', desc: 'We have applied ISO/IEC 81346 on live major infrastructure projects and built the information systems that govern asset data at scale.' },
                { title: 'Both sides of the problem', desc: 'RDS implementation and the information systems that reflect it. We understand both and the gap between them.' },
                { title: 'Transparent and direct', desc: 'We will tell you exactly where your risks are, what they cost, and what the most practical path forward looks like.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 bg-white rounded-xl border border-slate-200 hover:border-sky-200 transition-all">
                  <CheckCircle size={20} className="text-sky-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-1">{item.title}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-4">The team</p>
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900">
              The people behind SøDera
            </h2>
          </div>

          {/* Søren */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://i.imgur.com/oIDeYJ5.jpeg"
                alt="Søren Christensen, Co-founder and CEO of SøDera"
                className="w-full h-[520px] object-cover object-top"
              />
            </div>
            <div className="lg:pt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-2">Co-founder & CEO</p>
              <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl font-bold text-slate-900 mb-1">Søren Christensen</h3>
              <p className="text-slate-400 text-sm mb-8">Denmark</p>

              <div className="space-y-5 text-slate-600 leading-relaxed mb-8">
                <p>
                  Søren is one of the most experienced RDS practitioners in the European energy sector. He has spent more than seven years at TenneT as an RDS consultant, working across some of the most technically demanding offshore wind programmes in the Netherlands, including Hollandse Kust Zuid from contractor commencement through to operational handover, and the 2GW LanWin2 programme covering offshore platforms, onshore substations, and DC cable systems. He is a Marine and Technical Engineer by training, graduating from Aarhus School of Marine and Technical Engineering.
                </p>
                <p>
                  Before TenneT, Søren worked as an RDS consultant at Vattenfall, advising on RDS-PP and the newer ISO 81346 series standards across onshore and offshore wind sites. His experience spans designation framework development, contractor compliance management, training delivery, and the integration of RDS structures with documentation systems, asset registers, and 3D models.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-5 mb-8 border border-slate-200">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Experience highlights</p>
                <div className="space-y-2">
                  {[
                    '7+ years ISO/IEC 81346 consultant at TenneT Netherlands',
                    'Hollandse Kust Zuid — offshore platforms, onshore station, export cable',
                    'LanWin2 2GW programme — offshore, onshore, DC cable systems',
                    'RDS-PS and RDS-CW advisory at Vattenfall',
                    'RDS training delivery to internal teams and external contractors',
                    'ISO/IEC 81346 implementation across 10+ contractors simultaneously',
                    'Marine and Technical Engineer, Aarhus School of Marine and Technical Engineering',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-sky-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <blockquote className="border-l-4 border-sky-200 pl-5 mb-8">
                <p style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-slate-700 italic leading-relaxed text-sm">
                  "Søren was a key member of the team that delivered RDS-PP to early pilot offshore wind projects and a principal contributor in formulating Vattenfall standards in this area. I would have no hesitation in recommending Søren for his technical skills, enthusiasm, professionalism and overall ability."
                </p>
                <p className="text-xs text-slate-400 mt-3">Ronald Donnelly — Chartered Energy Engineer, British Standards Institute ISO/IEC 81346 Technical Expert</p>
              </blockquote>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/s%C3%B8ren-lemvigh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 text-white rounded-xl hover:bg-sky-400 transition-colors text-sm font-semibold"
                >
                  <Linkedin size={15} /> Connect on LinkedIn
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors text-sm font-semibold"
                >
                  <MessageCircle size={15} /> Talk to Søren directly
                </Link>
              </div>
            </div>
          </div>

          {/* Sylvia */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 lg:pt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-2">Co-founder & COO</p>
              <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl font-bold text-slate-900 mb-1">Sylvia Awoudu</h3>
              <p className="text-slate-400 text-sm mb-8">Portugal</p>

              <div className="space-y-5 text-slate-600 leading-relaxed mb-8">
                <p>
                  Sylvia has spent more than a decade working at the intersection of information, complexity, and structure across energy, oil & gas and infrastructure. Holding a degree in Business Information Technology, with studies at Saxion University of Applied Sciences and Arden University, and certified in PRINCE2, she built her career from document control through to Product Owner of the Common Data Environment at TenneT, where she led cross-functional squads of business analysts, QA testers, and developers to deliver the asset management application, document management tool, and bulk upload solutions used across a major 2GW offshore wind program. In that role she acted as both product owner and product manager, working directly with suppliers to ensure the tools delivered met the operational requirements of the engineering teams.
                </p>
                <p>
                  She currently serves as BIM Manager at TenneT, bringing ISO 19650 aligned information management to one of Europe's largest transmission infrastructure organisations. Before TenneT, Sylvia worked as a Master Data Specialist in SAP-integrated environments at Philips. Her expertise spans offshore wind, cables, substations, onshore infrastructure, and the full information lifecycle from design through to operations.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-5 mb-8 border border-slate-200">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Experience highlights</p>
                <div className="space-y-2">
                  {[
                    'BIM Manager at TenneT Netherlands (current)',
                    'Product Owner, Common Data Environment — TenneT 2GW programme',
                    'Led cross-functional squads: business analysts, QA testers, developers',
                    'Asset management application, document management tool, bulk upload development',
                    'ISO 19650 aligned information management at scale',
                    'Master Data Specialist, SAP environments at Philips',
                    'BSc Business Information Technology, Saxion University of Applied Sciences',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-sky-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <blockquote className="border-l-4 border-sky-200 pl-5 mb-8">
                <p style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-slate-700 italic leading-relaxed text-sm">
                  "Sylvia has proven herself as a very talented document manager with strong communication skills, able to focus on managing day-to-day document related work as well as managing the development of new documentation systems. All with an open, transparent and analytical mindset."
                </p>
                <p className="text-xs text-slate-400 mt-3">Robin de Ronde — Lead Project Management at TenneT</p>
              </blockquote>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/sylvia-awoudu-53480262/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 text-white rounded-xl hover:bg-sky-400 transition-colors text-sm font-semibold"
                >
                  <Linkedin size={15} /> Connect on LinkedIn
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors text-sm font-semibold"
                >
                  <MessageCircle size={15} /> Talk to Sylvia directly
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://i.imgur.com/OEWaaGg.jpeg"
                alt="Sylvia Awoudu, Co-founder and COO of SøDera"
                className="w-full h-[520px] object-cover object-[center_-30px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Standards and industries ── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-4">Standards and industries</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Deep expertise in the standards that govern energy infrastructure
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our work is grounded in the international standards that govern how industrial assets are identified, documented, and managed across their lifecycle. We do not advise on these standards from the outside. We have applied them in the field, on major live projects, across multiple disciplines and contractor organisations.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The industries we work in reflect where these standards matter most: offshore wind, onshore wind, high-voltage substations, transmission infrastructure, and industrial assets where the cost of poor information is measured in operational incidents and project delays.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Standards</p>
                <div className="space-y-2">
                  {['ISO/IEC 81346', 'RDS-PP', 'RDS-PS', 'ISO 19650', 'ISO 9001', 'ISO 55001'].map((s) => (
                    <div key={s} className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-slate-200 text-sm font-semibold text-slate-700">
                      <div className="w-2 h-2 bg-sky-500 rounded-full flex-shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Industries</p>
                <div className="space-y-2">
                  {['Offshore wind', 'Onshore wind', 'HV substations', 'Transmission infrastructure', 'Cable systems', 'Industrial assets', 'Oil and gas'].map((s) => (
                    <div key={s} className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-slate-200 text-sm font-semibold text-slate-700">
                      <div className="w-2 h-2 bg-sky-500 rounded-full flex-shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission and values ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-200 hover:border-sky-200 transition-all">
              <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center mb-5">
                <Zap size={18} className="text-sky-600" />
              </div>
              <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl font-bold text-slate-900 mb-3">Our mission</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                To help energy companies bring structure and clarity to their asset information. We work hands-on to deliver practical, standards-aligned solutions that create real, lasting operational value.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 hover:border-sky-200 transition-all">
              <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center mb-5">
                <CheckCircle size={18} className="text-sky-600" />
              </div>
              <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl font-bold text-slate-900 mb-3">How we work</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                We tailor everything to your situation. We listen before we advise. We tell you what we honestly see. And we work alongside you as partners, not as vendors delivering a report.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 hover:border-sky-200 transition-all">
              <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center mb-5">
                <ArrowRight size={18} className="text-sky-600" />
              </div>
              <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-xl font-bold text-slate-900 mb-3">Our vision</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                A European energy sector where asset information is treated as foundational infrastructure, structured, trusted, and usable across the full lifecycle of every asset.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
