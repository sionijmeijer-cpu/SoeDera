import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import {
  FileText,
  Network,
  Building2,
  Package,
  FolderKanban,
  CheckCircle2,
  Clock,
  ArrowRight,
  Shield,
  Wind,
  Flame,
  Factory,
  Zap,
} from 'lucide-react'
import { blogPosts } from '../data/blogPosts'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  SEOHead({
    title: 'Energy Documentation & Asset Data Consulting',
    description:
      'SøDera helps energy companies improve documentation, Reference Designation Systems (IEC 81346), and asset data management. 20+ years combined experience serving Europe.',
    keywords:
      'RDS, Reference Designation System, IEC 81346, energy documentation, asset data management, document management, energy consulting, offshore wind, Denmark',
    canonicalUrl: 'https://www.soedera.eu/',
  })

  // Latest 3 published articles for the insights strip
  const latestArticles = blogPosts.filter((p) => p.published).slice(0, 3)

  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section
        className="relative min-h-[580px] sm:min-h-[640px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://i.imgur.com/lCNBEPI.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Lighter overlay — was black/60, now black/45 so photo shows better */}
        <div className="absolute inset-0 bg-slate-900/45" />

        {/* Subtle brightness boost via a white gradient at top */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-slate-900/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/15 border border-sky-400/30 rounded-full text-sky-200 text-sm font-semibold mb-6 uppercase tracking-wider">
            <Zap size={14} />
            Energy Sector Specialists
          </div>

          <h1
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto"
          >
            Energy infrastructure runs on information. We make sure yours works.
          </h1>

          <p
            className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}
          >
            SøDera helps energy operators fix documentation, implement Reference Designation Systems (IEC 81346), and bring structure to asset data — built on 20+ years of hands-on industry experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book-assessment"
              className="w-full sm:w-auto px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl shadow-lg shadow-sky-500/30 hover:bg-sky-400 hover:shadow-sky-500/50 transition-all flex items-center justify-center gap-2 group"
            >
              Book an Assessment
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/25 text-white font-semibold rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              Our Services
            </Link>
          </div>

          {/* Trust strip */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-slate-300 text-sm">
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-sky-400" />
              <span>IEC 81346 Practitioners</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-sky-400" />
              <span>20+ Years Combined Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-sky-400" />
              <span>ISO 19650 Aligned</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-5 h-8 border-2 border-slate-300/60 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1 h-2 bg-sky-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES STRIP ── */}
      <section className="bg-slate-900 py-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
              Industries we serve
            </p>
            {[
              { icon: Wind, label: 'Offshore Wind' },
              { icon: Zap, label: 'Power Plants' },
              { icon: Flame, label: 'Oil & Gas' },
              { icon: Factory, label: 'Industrial' },
              { icon: Building2, label: 'Substations' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-slate-300">
                <item.icon size={16} className="text-sky-400" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK ASSESSMENTS ── */}
      <section className="py-16 sm:py-20 bg-white" id="assessments">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-widest">
              Start Here
            </span>
            <h2
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4"
            >
              Quick Assessments
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Short, paid engagements designed to review your current setup and give you clear,
              practical recommendations — not to lock you into a larger project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* RDS Assessment */}
            <div className="relative bg-gradient-to-br from-sky-50 to-white border-2 border-sky-100 rounded-2xl p-8 hover:border-sky-300 hover:shadow-xl transition-all shadow-md">
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 bg-sky-500 text-white text-xs font-semibold rounded-full">
                  IEC 81346
                </span>
              </div>
              <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mb-5">
                <Network className="text-sky-500" size={24} />
              </div>
              <h3
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                className="text-xl font-bold text-slate-900 mb-3"
              >
                RDS Assessment
              </h3>
              <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                A focused review of your current Reference Designation System to identify gaps,
                inconsistencies, and risks across documentation, systems, and assets.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  'Review of current RDS structure and usage',
                  'Alignment check against IEC 81346',
                  'Identification of risks, inconsistencies, and quick wins',
                  'Clear recommendations, roadmap and next steps',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-sky-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-sky-100">
                <div className="flex items-center justify-center gap-4 text-sm text-slate-500 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} /> ~2 weeks
                  </span>
                  <span className="font-semibold text-slate-900">From €1,800</span>
                </div>
                <a
                  href="https://outlook.office.com/book/AssessmentBooking1@soedera.eu/s/GDHl_HOriUOW0kXs3yLfJA2?ismsaljsauthenabled"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-5 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl transition-all text-sm text-center"
                >
                  Discuss RDS Assessment
                </a>
              </div>
            </div>

            {/* Document Management Assessment */}
            <div className="relative bg-gradient-to-br from-sky-50 to-white border-2 border-sky-100 rounded-2xl p-8 hover:border-sky-300 hover:shadow-xl transition-all shadow-md">
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 bg-sky-500 text-white text-xs font-semibold rounded-full">
                  ISO 9001
                </span>
              </div>
              <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mb-5">
                <FileText className="text-sky-500" size={24} />
              </div>
              <h3
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                className="text-xl font-bold text-slate-900 mb-3"
              >
                Document Management Assessment
              </h3>
              <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                A practical review of how documents are created, stored, controlled, and used
                across teams and systems — with clear recommendations for improvement.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  'Review of document system, structure, workflows, and ownership',
                  'Revision/Version control and compliance gap check',
                  'Identification of inefficiencies, workflow and risks',
                  'Practical improvement recommendations and data flow mapping',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-sky-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-sky-100">
                <div className="flex items-center justify-center gap-4 text-sm text-slate-500 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} /> ~2 weeks
                  </span>
                  <span className="font-semibold text-slate-900">From €1,800</span>
                </div>
                <a
                  href="https://outlook.office.com/book/AssessmentBooking1@soedera.eu/s/GDHl_HOriUOW0kXs3yLfJA2?ismsaljsauthenabled"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-5 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl transition-all text-sm text-center"
                >
                  Discuss Document Assessment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES — clickable cards ── */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-widest">
              What We Do
            </span>
            <h2
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4"
            >
              Our Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Focused solutions designed for energy sector organisations looking to take control
              of their documentation and asset data.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: FileText,
                title: 'Document Management',
                description:
                  'Structure, control, and manage technical documentation across teams and systems. Aligned with ISO 19650 and IEC 81346.',
                href: '/service-document-management',
              },
              {
                icon: Network,
                title: 'Reference Designation (RDS)',
                description:
                  'Implement IEC 81346-compliant designation systems for clear and consistent asset identification across your operation.',
                href: '/service-rds',
              },
              {
                icon: Building2,
                title: 'BIM Services',
                description:
                  'Integrate Building Information Modeling into your asset lifecycle for enhanced collaboration and data continuity.',
                href: '/service-bim',
              },
              {
                icon: Package,
                title: 'Product Development',
                description:
                  'Custom data products for energy infrastructure — from RDS management tools to asset registers and integration layers.',
                href: '/service-product-development',
              },
              {
                icon: FolderKanban,
                title: 'Project Management',
                description:
                  'Structured project management for documentation and data initiatives in complex energy environments.',
                href: '/service-project-management',
              },
              {
                icon: Shield,
                title: 'RDS Audit',
                description:
                  'Independent audit of your existing Reference Designation System against IEC 81346 with a clear remediation roadmap.',
                href: '/service-rds-audit',
              },
            ].map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="group bg-white border border-slate-200 hover:border-sky-300 hover:shadow-lg rounded-2xl p-7 transition-all hover:-translate-y-1 block"
              >
                <div className="w-11 h-11 bg-sky-50 rounded-xl flex items-center justify-center mb-5">
                  <service.icon size={22} className="text-sky-600" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SØDERA — founder story ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sky-600 font-bold text-xs uppercase tracking-widest mb-3 block">
                Why SøDera
              </span>
              <h2
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight"
              >
                Built by practitioners who got tired of seeing the same problems go unsolved
              </h2>
              <p className="text-lg text-slate-600 mb-5 leading-relaxed">
                After two decades working across energy projects in oil & gas, offshore wind, and
                power infrastructure, we kept encountering the same issues: documentation scattered
                across systems nobody trusted, RDS implementations that drifted from the standard,
                and handovers that left operations teams starting from scratch.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We started SøDera because we wanted to build something of our own — and because we
                knew from experience exactly what these problems cost operators, and exactly how to
                fix them. Not from a textbook. From the field.
              </p>

              <div className="grid grid-cols-2 gap-6 py-8 border-t border-b border-slate-100 mb-8">
                {[
                  { value: '20+', label: 'Combined years in energy' },
                  { value: 'IEC 81346', label: 'Core standard expertise' },
                  { value: 'ISO 19650', label: 'Document management alignment' },
                  { value: 'Europe', label: 'Primary market served' },
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

              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-800 transition-colors"
              >
                Meet the team <ArrowRight size={14} />
              </Link>
            </div>

            {/* Sylvia quote card */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-10">
              <div
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                className="text-4xl text-sky-200 font-bold mb-4 leading-none"
              >
                "
              </div>
              <blockquote
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                className="text-xl text-slate-800 italic leading-relaxed mb-8"
              >
                Over a decade in Oil & gas and energy sectors, I've realized that structured data
                is not just an administrative requirement; it is the operational backbone that
                ensures safety, compliance, and long-term asset value.
              </blockquote>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                  style={{ background: '#1a3a5c' }}
                >
                  SA
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Sylvia Awoudu</p>
                  <p className="text-slate-500 text-xs">Co-founder & COO, SøDera</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LATEST INSIGHTS ── */}
      {latestArticles.length > 0 && (
        <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-sky-600 font-bold text-xs uppercase tracking-widest mb-3 block">
                  From our team
                </span>
                <h2
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                  className="text-3xl font-bold text-slate-900"
                >
                  Latest Insights
                </h2>
              </div>
              <Link
                to="/blog"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 hover:text-sky-800 transition-colors"
              >
                All insights <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {latestArticles.map((article) => (
                <Link
                  key={article.id}
                  to="/blog/$articleId"
                  params={{ articleId: article.id }}
                  className="group block bg-white rounded-xl border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all overflow-hidden"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                      {article.category}
                    </span>
                    <h3
                      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                      className="text-base font-bold text-slate-900 mt-2 mb-2 leading-snug group-hover:text-sky-700 transition-colors line-clamp-2"
                    >
                      {article.title}
                    </h3>
                    <p className="text-xs text-slate-400 flex items-center gap-2">
                      <Clock size={11} /> {article.readTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600"
              >
                All insights <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── FINAL CTA ── */}
      <section className="py-16 sm:py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sky-400 font-bold text-xs uppercase tracking-widest mb-4 block">
            Let's talk
          </span>
          <h2
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Not sure where to start?
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            A 30-minute conversation is usually enough to identify the highest-impact area for your
            organisation. No commitment, no sales pitch — just a direct discussion about your
            documentation or RDS challenge.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sky-500 text-white rounded-xl font-bold hover:bg-sky-400 transition-all hover:scale-105 shadow-xl shadow-sky-500/20"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
            <Link
              to="/book-assessment"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all"
            >
              Book an Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
