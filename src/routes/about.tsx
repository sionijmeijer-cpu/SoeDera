import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import {
  ArrowRight,
  Linkedin,
  CheckCircle,
  Zap,
} from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  SEOHead({
    title: 'About SøDera | IEC 81346 and Information Management Specialists',
    description:
      'SøDera was founded by two specialists who worked together on a 2GW offshore wind project at TenneT. Søren Christensen brings 7+ years of RDS-PP and IEC 81346 expertise. Sylvia Awoudu brings deep experience in document management, BIM, and asset information systems.',
    keywords:
      'about SøDera, IEC 81346 specialists, RDS-PP experts, offshore wind information management, TenneT RDS, energy documentation consultancy, Søren Christensen, Sylvia Awoudu',
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
              SøDera exists because two people who worked together on one of Europe's largest offshore wind projects saw the same gap — and decided to do something about it.
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
                SøDera was not founded in a boardroom. It was founded on a shared frustration that two people who worked on the same major infrastructure programme at TenneT could see clearly: the gap between how asset data is structured and how information systems are built to reflect that structure was costing projects time, money, and operational confidence.
              </p>
              <p>
                Søren was the RDS subject matter expert on TenneT's 2GW LanWin2 programme, developing the asset designation framework and ensuring contractor compliance across a project that spans offshore platforms, onshore substations, and DC cable systems. Sylvia was the Product Owner of the asset management tool being built to house that data, responsible for translating operational requirements into a working system.
              </p>
              <p>
                They were working on the same problem from two different sides. And they kept finding that the distance between those two sides was larger than it needed to be.
              </p>
              <p>
                SøDera was built to close that distance. Not just by providing resources, but by bringing the knowledge, the standards expertise, and the practical experience of having done both at scale.
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
                  We are two people who are genuinely hungry to solve the problem in front of us. We do not have a standard package. We do not apply a template. We listen to where you are, we understand your assets and your systems, and we build the approach around that.
                </p>
                <p>
                  What we bring is not a methodology off a shelf. It is direct, practitioner-level experience of applying IEC 81346 in the field on major energy infrastructure, building and owning the information systems that govern how that data lives, and understanding exactly where the gaps open up between the two.
                </p>
                <p>
                  You give us the problem. We give you the clearest possible picture of your assets, your data, and what needs to change. And we work alongside you to make it happen.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: 'Tailored to your reality', desc: 'No standard packages. Every engagement starts with understanding your specific assets, systems, and operational context.' },
                { title: 'Practitioner-level expertise', desc: 'We have applied IEC 81346 on live major infrastructure projects and built the information systems that govern asset data at scale.' },
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
              <p className="text-slate-400 text-sm mb-8">Brande, Denmark</p>

              <div className="space-y-5 text-slate-600 leading-relaxed mb-8">
                <p>
                  Søren is one of the most experienced RDS practitioners in the European energy sector. He has spent more than seven years at TenneT as an RDS-PP consultant, working across some of the most technically demanding offshore wind programmes in the Netherlands. He is a Marine and Technical Engineer by training, graduating from Aarhus School of Marine and Technical Engineering.
                </p>
                <p>
                  His work at TenneT spans two landmark projects. On Hollandse Kust Zuid, he supported the full project lifecycle from contractor commencement through to operational handover, managing RDS integration across more than ten contractors and overseeing the linkage between designation structures, P&IDs, circuit diagrams, and documentation systems. On the 2GW LanWin2 programme, covering offshore platforms, onshore substations, and DC cable systems, he developed the employer's RDS requirements, integrated the designation framework with TenneT's Object Type Library, and delivered training to both internal teams and external contractors.
                </p>
                <p>
                  Before TenneT, Søren worked as an RDS consultant at Vattenfall, advising on both RDS-PP implementation and the newer ISO 81346 series standards including RDS-PS and RDS-CW across onshore and offshore wind sites. He began his engineering career at DIS Engineering in Aarhus, where he worked in electrical and automation engineering.
                </p>
                <p>
                  Søren is based in Denmark and brings the perspective of someone who has applied IEC 81346 in the field, on physical assets, across complex multi-contractor programmes, for years. When he advises on RDS, it comes from that direct experience.
                </p>
              </div>

              {/* Credentials */}
              <div className="bg-slate-50 rounded-xl p-5 mb-8 border border-slate-200">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Experience highlights</p>
                <div className="space-y-2">
                  {[
                    '7+ years RDS-PP consultant at TenneT Netherlands',
                    'Hollandse Kust Zuid — offshore platforms, onshore station, export cable',
                    'LanWin2 2GW programme — offshore, onshore, DC cable systems',
                    'RDS-PS and RDS-CW advisory at Vattenfall',
                    'RDS training delivery to internal teams and external contractors',
                    'IEC 81346 implementation across 10+ contractors simultaneously',
                    'Marine and Technical Engineer, Aarhus School of Marine and Technical Engineering',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-sky-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendation pull quote */}
              <blockquote className="border-l-4 border-sky-200 pl-5 mb-8">
                <p style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-slate-700 italic leading-relaxed text-sm">
                  "Søren was a key member of the team that delivered RDS-PP to early pilot offshore wind projects and a principal contributor in formulating Vattenfall standards in this area. I would have no hesitation in recommending Søren for his technical skills, enthusiasm, professionalism and overall ability."
                </p>
                <p className="text-xs text-slate-400 mt-3">Ronald Donnelly — Chartered Energy Engineer, British Standards Institute ISO/IEC 81346 Technical Expert</p>
              </blockquote>

              <a
                href="https://www.linkedin.com/in/s%C3%B8ren-lemvigh/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 text-white rounded-xl hover:bg-sky-400 transition-colors text-sm font-semibold"
              >
                <Linkedin size={15} /> Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Sylvia */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 lg:pt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-2">Co-founder & COO</p>
              <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl font-bold text-slate-900 mb-1">Sylvia Awoudu</h3>
              <p className="text-slate-400 text-sm mb-8">Netherlands</p>

              <div className="space-y-5 text-slate-600 leading-relaxed mb-8">
                <p>
                  Sylvia has spent more than a decade working at the intersection of information, complexity, and structure — making sure that in large, moving projects, nothing falls through the cracks. She studied Computer Software Engineering at Saxion University of Applied Sciences and Business and Computing at Arden University, giving her a foundation that bridges technical systems and operational delivery.
                </p>
                <p>
                  Her career has taken her from document controller roles through to Product Owner of one of TenneT's most significant digital asset management programmes. At TenneT, where she currently serves as BIM Manager, she spent nearly three years as Product Owner responsible for the EDMS and asset management tool development on TenneT's 2GW offshore wind programme — the same programme where SøDera's co-founders first worked together. She translated the RDS and operational requirements from engineering into a functioning digital system, managing the product from requirements through to delivery across a complex, multi-stakeholder environment.
                </p>
                <p>
                  Before TenneT, Sylvia worked at Philips as a Master Data Specialist, adding a cross-industry perspective on how large organisations manage structured data at scale. Her experience spans cables, offshore substations, onshore infrastructure, and the document and information systems that govern how asset data lives across all of them.
                </p>
                <p>
                  Sylvia brings a rare combination to every engagement: a deep understanding of what good information architecture looks like from the system side, and the project delivery discipline to get it implemented in real organisations under real constraints.
                </p>
              </div>

              {/* Credentials */}
              <div className="bg-slate-50 rounded-xl p-5 mb-8 border border-slate-200">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Experience highlights</p>
                <div className="space-y-2">
                  {[
                    'BIM Manager at TenneT Netherlands (current)',
                    'Product Owner, EDMS and asset management tool — TenneT 2GW programme',
                    'ISO 19650 aligned information management at scale',
                    'Document and information management across offshore wind, substations, cables',
                    'Master Data Specialist at Philips',
                    'BSc Computer Software Engineering, Saxion University',
                    'Top skills: ISO 19650, Project Management, Stakeholder Management, Agile',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-sky-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendation pull quote */}
              <blockquote className="border-l-4 border-sky-200 pl-5 mb-8">
                <p style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-slate-700 italic leading-relaxed text-sm">
                  "Sylvia has proven herself as a very talented document manager with strong communication skills, able to focus on managing day-to-day document related work as well as managing the development of new documentation systems. All with an open, transparent and analytical mindset."
                </p>
                <p className="text-xs text-slate-400 mt-3">Robin de Ronde — Lead Project Management at TenneT</p>
              </blockquote>

              <a
                href="https://www.linkedin.com/in/sylvia-awoudu-53480262/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 text-white rounded-xl hover:bg-sky-400 transition-colors text-sm font-semibold"
              >
                <Linkedin size={15} /> Connect on LinkedIn
              </a>
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

      {/* ── Standards we work to ── */}
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
                  {['IEC 81346', 'ISO 81346', 'RDS-PP', 'RDS-PS', 'ISO 19650', 'ISO 9001', 'ISO 55001'].map((s) => (
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
                A European energy sector where asset information is treated as foundational infrastructure — structured, trusted, and usable across the full lifecycle of every asset.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: 'url(https://i.imgur.com/BrTo5LL.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Tell us about your challenge
          </h2>
          <p className="text-slate-200 text-lg mb-8 leading-relaxed">
            We do not do standard packages. We start with a conversation about where you are, what you are trying to achieve, and what the most practical path forward looks like. No pressure, no sales pitch.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-600 font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all group"
          >
            Get in Touch
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  )
}
