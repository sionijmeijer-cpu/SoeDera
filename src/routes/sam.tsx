import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import { useEffect, useState } from 'react'
import { ArrowRight, Shield, Zap, GitBranch, CheckCircle } from 'lucide-react'

export const Route = createFileRoute('/sam' as any)({
  component: SamPage,
})

function SamPage() {
  SEOHead({
    title: 'SAM — SøDera Asset Management | Coming Soon',
    description:
      'SAM is the RDS hub built by the people who implement ISO/IEC 81346 on major energy infrastructure. Build your asset register with correct hierarchy, built-in standard validation, and AI that understands your specification.',
    keywords:
      'SAM SøDera asset management, RDS hub, ISO/IEC 81346 software, asset register tool, RDS-PP RDS-PS platform',
    canonicalUrl: 'https://www.soedera.eu/sam',
  })

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 overflow-hidden">
      <style>{`
        @keyframes flicker {
          0%, 89%, 100% { opacity: 1; }
          90% { opacity: 0.3; }
          91% { opacity: 1; }
          93% { opacity: 0.5; }
          94% { opacity: 1; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes drift {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(12px) translateX(-8px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes glitch {
          0%, 88%, 100% { clip-path: none; transform: none; opacity: 0; }
          89% { clip-path: inset(20% 0 60% 0); transform: translate(-6px, 0); opacity: 0.4; }
          90% { clip-path: inset(70% 0 10% 0); transform: translate(6px, 0); opacity: 0.4; }
          91% { clip-path: none; transform: none; opacity: 0; }
        }
        .flicker { animation: flicker 8s infinite; }
        .drift { animation: drift 10s ease-in-out infinite; }
        .ring { animation: pulse-ring 3s ease-out infinite; }
        .fade-up { animation: fadeUp 0.9s ease forwards; }
        .fade-in { animation: fadeIn 0.8s ease forwards; }
        .glitch { animation: glitch 9s infinite; }
      `}</style>

      {/* Ambient blobs */}
      <div className="fixed inset-0 pointer-events-none select-none">
        <div className="drift absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-700/10 rounded-full blur-[120px]" />
        <div className="drift absolute bottom-1/3 right-1/3 w-96 h-96 bg-violet-700/8 rounded-full blur-[100px]" style={{ animationDelay: '-4s' }} />
        <div className="absolute inset-0 opacity-[0.035]" style={{
          backgroundImage: 'linear-gradient(rgba(99,102,241,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
      </div>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">

        {/* Pulse rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[0, 0.9, 1.8].map((delay, i) => (
            <div key={i} className="ring absolute w-56 h-56 rounded-full border border-indigo-500/15" style={{ animationDelay: `${delay}s` }} />
          ))}
        </div>

        <div className="relative z-10 text-center" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.5s' }}>

          {/* Badge */}
          <div className="fade-in inline-flex items-center gap-2.5 px-5 py-2.5 bg-indigo-500/10 border border-indigo-500/25 rounded-full mb-10" style={{ opacity: 0, animationDelay: '0.1s' }}>
            <span className="w-2 h-2 bg-indigo-400 rounded-full" style={{ animation: 'pulse 2s infinite' }} />
            <span className="text-indigo-300 text-xs font-bold uppercase tracking-[0.25em]">Coming Soon</span>
          </div>

          {/* Giant SAM */}
          <div className="relative mb-3 fade-up" style={{ opacity: 0, animationDelay: '0.2s' }}>
            <h1
              className="flicker font-black leading-none tracking-tighter select-none"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: 'clamp(8rem, 22vw, 22rem)',
                background: 'linear-gradient(140deg, #a5b4fc 0%, #818cf8 30%, #6366f1 60%, #4338ca 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 80px rgba(99,102,241,0.35))',
              }}
            >
              SAM
            </h1>
            {/* Glitch overlay */}
            <h1
              className="glitch absolute inset-0 font-black leading-none tracking-tighter select-none pointer-events-none"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: 'clamp(8rem, 22vw, 22rem)',
                color: '#a5b4fc',
                opacity: 0,
              }}
              aria-hidden
            >
              SAM
            </h1>
          </div>

          <p className="fade-up text-slate-500 text-sm font-semibold uppercase tracking-[0.35em] mb-10" style={{ opacity: 0, animationDelay: '0.4s' }}>
            SøDera Asset Management
          </p>

          <p className="fade-up text-white text-xl sm:text-2xl font-light max-w-2xl mx-auto leading-relaxed mb-4" style={{ fontFamily: 'Georgia, "Times New Roman", serif', opacity: 0, animationDelay: '0.6s' }}>
            The RDS hub built by the people who have been doing this work on major energy infrastructure.
          </p>

          <p className="fade-up text-slate-500 text-base max-w-lg mx-auto leading-relaxed mb-14" style={{ opacity: 0, animationDelay: '0.8s' }}>
            Your asset register. Your RDS hierarchy. Your standard. All in one place. Finally.
          </p>

          <div className="fade-up flex flex-wrap gap-4 justify-center" style={{ opacity: 0, animationDelay: '1s' }}>
            <a
              href="mailto:info@soedera.eu?subject=SAM Early Access&body=Hi SøDera team,%0A%0AI would like to register my interest in early access to SAM.%0A%0AOrganisation:%0ARole:%0AUse case:%0A%0AKind regards,"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-indigo-950/80"
            >
              Register for Early Access <ArrowRight size={18} />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 hover:border-white/20 bg-white/4 hover:bg-white/8 text-white font-semibold rounded-xl transition-all"
            >
              Talk to the team
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="fade-in absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: 0, animationDelay: '2.5s' }}>
          <span className="text-slate-700 text-xs uppercase tracking-widest">What is SAM</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-700 to-transparent" />
        </div>
      </section>

      {/* ── SECTION 2: WHAT SAM IS ── */}
      <section className="relative py-24 px-4 border-t border-white/6">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">The platform</p>
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Not another asset database.<br />An RDS hub.
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Most organisations manage their Reference Designation Systems in Excel. The tools that exist were built for construction or generic asset management and treat ISO/IEC 81346 as a field in a form. SAM is built from the ground up with the standard as the foundation, not an afterthought.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              {
                icon: GitBranch,
                color: 'text-indigo-400',
                bg: 'bg-indigo-500/10',
                border: 'hover:border-indigo-500/40',
                title: 'Hierarchy tree builder',
                desc: 'Choose RDS-PP or RDS-PS. Build your Function, Product, and Location hierarchies visually. SAM generates correct designations as you build.',
              },
              {
                icon: CheckCircle,
                color: 'text-emerald-400',
                bg: 'bg-emerald-500/10',
                border: 'hover:border-emerald-500/40',
                title: 'Built-in validation',
                desc: 'Every designation validated against ISO/IEC 81346 in real time. Errors flagged before they enter your register, not discovered at handover.',
              },
              {
                icon: Zap,
                color: 'text-amber-400',
                bg: 'bg-amber-500/10',
                border: 'hover:border-amber-500/40',
                title: 'AI that reads your spec',
                desc: 'Upload your RDS Specification. SAM extracts your requirements and applies them as a validation layer on top of the standard.',
              },
              {
                icon: Shield,
                color: 'text-sky-400',
                bg: 'bg-sky-500/10',
                border: 'hover:border-sky-500/40',
                title: 'Security by design',
                desc: 'Built on Azure. AI intelligence without data exposure. Your asset data stays in your environment. Not shared, not trained on.',
              },
            ].map((item) => (
              <div key={item.title} className={`bg-white/3 border border-white/8 ${item.border} rounded-2xl p-6 transition-all backdrop-blur-sm`}>
                <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <item.icon size={18} className={item.color} />
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Who it is for */}
          <div className="text-center">
            <p className="text-slate-700 text-xs uppercase tracking-widest mb-5">Built for</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Offshore wind operators', 'Transmission operators', 'EPC contractors', 'Oil and gas operators', 'Onshore wind developers', 'RDS practitioners'].map((item) => (
                <span key={item} className="px-4 py-2 bg-white/3 border border-white/8 rounded-full text-slate-500 text-xs">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: REGISTER ── */}
      <section className="relative py-24 px-4 border-t border-white/6">
        <div className="max-w-xl mx-auto text-center">

          <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">Be first</p>
          <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
            We are building this.<br />We want your input.
          </h2>
          <p className="text-slate-400 leading-relaxed mb-10">
            Early access participants will shape what SAM becomes. If you have felt the pain of managing RDS in Excel or fighting a CMMS that was never designed for ISO/IEC 81346, register now. We will reach out directly.
          </p>

          <a
            href="mailto:info@soedera.eu?subject=SAM Early Access&body=Hi SøDera team,%0A%0AI would like to register my interest in early access to SAM.%0A%0AOrganisation:%0ARole:%0AUse case:%0A%0AKind regards,"
            className="inline-flex items-center gap-2 px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-2xl shadow-indigo-950 text-lg mb-4"
          >
            Register Interest <ArrowRight size={20} />
          </a>

          <p className="text-slate-700 text-xs mb-16">No commitment. No spam. Just a conversation.</p>

          {/* Founders */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10 border-t border-white/6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 text-xs font-bold flex-shrink-0">SC</div>
              <div className="text-left">
                <p className="text-white text-sm font-semibold">Søren Christensen</p>
                <p className="text-slate-600 text-xs">7+ years ISO/IEC 81346 on major energy projects</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/6" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-900 border border-indigo-500/20 flex items-center justify-center text-indigo-300 text-xs font-bold flex-shrink-0">SA</div>
              <div className="text-left">
                <p className="text-white text-sm font-semibold">Sylvia Awoudu</p>
                <p className="text-slate-600 text-xs">Product Owner, CDE and asset tools at TenneT 2GW</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
