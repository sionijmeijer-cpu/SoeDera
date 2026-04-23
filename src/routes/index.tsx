import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import {
  FileText,
  Network,
  CheckCircle2,
  Clock,
  ArrowRight,
  Shield,
  Wind,
  Flame,
  Factory,
  Zap,
  Building2,
  GraduationCap,
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

  const latestArticles = blogPosts.filter((p) => p.published).slice(0, 3)

  const scrollToServices = () => {
    const el = document.getElementById('services-section')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-white">

      {/* ── 1. HERO ── */}
      <section
        className="relative min-h-[580px] sm:min-h-[640px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://i.imgur.com/lCNBEPI.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/45" />
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
            SøDera helps energy operators fix documentation, implement Reference Designation
            Systems (IEC 81346), and bring structure to asset data. Built on 20+ years of
            hands-on industry experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToServices}
              className="w-full sm:w-auto px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition-all flex items-center justify-center gap-2 group"
            >
              Book an Assessment
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/25 text-white font-semibold rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              Our Services
            </Link>
          </div>

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

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-5 h-8 border-2 border-slate-300/60 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1 h-2 bg-sky-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES STRIP ── */}
      <section className="bg-slate-900 py-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-14">
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
                <item.icon size={15} className="text-sky-400" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. QUICK ASSESSMENTS ── */}
      <section className="py-16 sm:py-24 bg-white" id="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-widest mb-3 block">
              Start Here
            </span>
            <h2
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
            >
              Quick Assessments
            </h2>
            <p className="text-slate-500 leading-relaxed max-w-2xl mx-auto">
              A focused, paid engagement typically two weeks designed to give you a clear,
              honest picture of where you stand and exactly what to do next. No long contracts,
              no vague recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl">

            {/* RDS Assessment */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-sky-200 transition-all duration-300 group">
              {/* Top accent bar */}
              <div className="h-1 bg-gradient-to-r from-sky-400 to-blue-600" />
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-2 block">
                      Reference Designation
                    </span>
                    <h3
                      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                      className="text-2xl font-bold text-slate-900"
                    >
                      RDS Assessment
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full shrink-0 ml-4">
                    IEC 81346
                  </span>
                </div>

                {/* Value proposition */}
                <p className="text-slate-600 leading-relaxed mb-8 pb-8 border-b border-slate-100">
                  A structured review of your current Reference Designation System against IEC 81346.
                  We identify exactly where your designations are inconsistent, non-compliant, or
                  creating operational risk and give you a prioritised roadmap to fix them.
                </p>

                {/* Deliverables */}
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                  What you receive
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Review of current RDS structure and usage across systems',
                    'IEC 81346 compliance gap analysis with specific findings',
                    'Identification of risks, inconsistencies, and quick wins',
                    'Prioritised recommendations and implementation roadmap',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 size={15} className="text-sky-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div>
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                      <Clock size={12} /> ~2 weeks
                    </div>
                    <p className="text-xl font-bold text-slate-900">
                      From €3,300
                    </p>
                  </div>
                  <a
                    href="https://outlook.office.com/book/AssessmentBooking1@soedera.eu/s/GDHl_HOriUOW0kXs3yLfJA2?ismsaljsauthenabled"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl transition-all text-sm group-hover:shadow-lg group-hover:shadow-sky-500/20"
                  >
                    Discuss <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>

            {/* Document Management Assessment */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-sky-200 transition-all duration-300 group">
              {/* Top accent bar */}
              <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-600" />
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-2 block">
                      Document Management
                    </span>
                    <h3
                      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                      className="text-2xl font-bold text-slate-900"
                    >
                      Document Assessment
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full shrink-0 ml-4">
                    ISO 9001
                  </span>
                </div>

                {/* Value proposition */}
                <p className="text-slate-600 leading-relaxed mb-8 pb-8 border-b border-slate-100">
                  A practical review of how technical documents are created, controlled, stored,
                  and used across your teams and systems. We identify the gaps that cause delays,
                  errors, and compliance risks and tell you exactly how to close them.
                </p>

                {/* Deliverables */}
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                  What you receive
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Review of document system, structure, workflows, and ownership',
                    'Version control and compliance gap analysis',
                    'Identification of inefficiencies, risks, and data flow issues',
                    'Practical improvement recommendations and data flow mapping',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 size={15} className="text-sky-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div>
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                      <Clock size={12} /> ~2 weeks
                    </div>
                    <p className="text-xl font-bold text-slate-900">
                      From €3,300
                    </p>
                  </div>
                  <a
                    href="https://outlook.office.com/book/AssessmentBooking1@soedera.eu/s/GDHl_HOriUOW0kXs3yLfJA2?ismsaljsauthenabled"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl transition-all text-sm group-hover:shadow-lg group-hover:shadow-sky-500/20"
                  >
                    Discuss <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>

          </div>

          <p className="mt-8 text-slate-400 text-sm italic">
            Both assessments are short, paid engagements designed to provide clarity. Not to lock you into a larger project.
          </p>

          {/* Training signpost */}
          <div className="mt-10 p-6 bg-amber-50 border border-amber-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-5xl">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap size={20} className="text-amber-600" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm mb-1">Need to train your team instead?</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We offer practical training on RDS, IEC 81346, and document management for energy sector teams.
                  On-site or remote, half-day to multi-day.
                </p>
              </div>
            </div>
            <Link
              to="/service-training"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-white text-sm font-semibold rounded-xl hover:bg-amber-400 transition-all whitespace-nowrap flex-shrink-0"
            >
              Explore Training <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. BUILT BY PRACTITIONERS ── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
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
                We started SøDera because we wanted to build something of our own, and because we
                knew from experience exactly what these problems cost operators, and exactly how to
                fix them. Not from a textbook. From the field.
              </p>

              <div className="grid grid-cols-2 gap-6 py-8 border-t border-b border-slate-200 mb-8">
                {[
                  { value: '20+', label: 'Combined years in energy' },
                  { value: 'IEC 81346', label: 'Core standard expertise' },
                  { value: 'ISO 19650', label: 'Document management' },
                  { value: 'Europe', label: 'Primary market' },
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

            {/* Photo */}
            <div className="flex flex-col">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="/soeren-christensen-sylvia-awoudu-wind-europe-soedera.jpg"
                  alt="Søren Christensen and Sylvia Awoudu at Wind Europe Exhibition Madrid 2026 SøDera"
                  className="w-full h-auto"
                />
              </div>
              <p className="mt-3 text-xs text-slate-400 italic text-center">
                Søren Christensen and Sylvia Awoudu at Wind Europe Exhibition, Madrid 2026.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. LATEST INSIGHTS ── */}
      {latestArticles.length > 0 && (
        <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
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

      {/* ── 5. FINAL CTA ── */}
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
            A 30-minute conversation is usually enough to identify the highest-impact area for
            your organisation. No commitment, no sales pitch. Just a direct discussion about
            your information or RDS challenge.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sky-500 text-white rounded-xl font-bold hover:bg-sky-400 transition-all hover:scale-105 shadow-xl shadow-sky-500/20"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all cursor-pointer"
            >
              Book an Assessment
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}
