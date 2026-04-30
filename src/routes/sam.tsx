import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Database,
  GitMerge,
  Shield,
  Brain,
  Network,
  Layers,
  AlertTriangle,
} from 'lucide-react'

export const Route = createFileRoute('/sam' as any)({
  component: SamPage,
})

function SamPage() {
  SEOHead({
    title: 'SAM — RDS Management Platform | Coming Soon | SøDera',
    description:
      'SAM is a cloud-native RDS management platform built on Azure. ISO/IEC 81346 compliant asset designation, AI-assisted tagging, CMMS integration, and portfolio-wide visibility. Built by the practitioners who implement RDS on major energy infrastructure.',
    keywords:
      'SAM RDS platform, ISO/IEC 81346 software, RDS management tool, asset designation software, energy asset management platform, RDS-PS software, IEC 81346 tool',
    canonicalUrl: 'https://www.soedera.eu/sam',
  })

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section
        className="relative min-h-[600px] flex items-center py-32 overflow-hidden"
        style={{
          backgroundImage: 'url(https://i.imgur.com/lCNBEPI.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-1.5 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-indigo-300 text-xs font-bold uppercase tracking-widest">
                Coming Soon
              </div>
              <div className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/70 text-xs font-semibold">
                Built on Azure
              </div>
            </div>
            <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-none">
              SAM
            </h1>
            <p className="text-xl text-indigo-300 font-semibold mb-6">
              Structured Asset Management
            </p>
            <p className="text-xl text-slate-200 leading-relaxed mb-10 max-w-2xl">
              The first RDS management platform built by practitioners who have implemented ISO/IEC 81346 on major energy infrastructure. Not adapted from construction software. Built from the ground up for the energy sector.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:info@soedera.eu?subject=SAM Early Access&body=Hi SøDera team,%0A%0AI would like to register my interest in early access to SAM.%0A%0AOrganisation:%0AUse case:%0A%0AKind regards,"
                className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-500 transition-all hover:scale-105 shadow-lg"
              >
                Register for Early Access <ArrowRight size={18} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
              >
                Talk to the team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── The problem ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-4">Why SAM exists</p>
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              The tools the energy sector uses for RDS were not built for RDS
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Today, most organisations manage their Reference Designation Systems in Excel spreadsheets, SharePoint lists, or generic database tools. The platforms that do exist were built for construction or generic asset management and bolt on ISO/IEC 81346 as an afterthought. The result is always the same: Standard Drift, data silos, and designation systems that degrade over time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: AlertTriangle,
                color: 'text-red-500',
                bg: 'bg-red-50',
                title: 'Excel and SharePoint',
                desc: 'No validation, no hierarchy enforcement, no audit trail. One wrong edit by one person cascades through thousands of designations without anyone knowing.',
              },
              {
                icon: AlertTriangle,
                color: 'text-amber-500',
                bg: 'bg-amber-50',
                title: 'Generic CMMS platforms',
                desc: 'IBM Maximo, SAP PM, Infor EAM — powerful for maintenance workflows, but their asset identification models were not designed around ISO/IEC 81346. Fitting RDS into them requires costly customisation that rarely holds.',
              },
              {
                icon: AlertTriangle,
                color: 'text-orange-500',
                bg: 'bg-orange-50',
                title: 'Construction platforms',
                desc: 'Autodesk Construction Cloud, Bentley, Hexagon — built for the construction phase. Their asset models reflect construction workflows, not the functional aspect hierarchies that ISO/IEC 81346 requires for operations.',
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-slate-200">
                <div className={`w-10 h-10 ${item.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <item.icon size={20} className={item.color} />
                </div>
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-8 max-w-3xl mx-auto text-center">
            <p style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-lg text-indigo-900 leading-relaxed">
              SAM is built on the principle that ISO/IEC 81346 is not a feature to be added to an existing platform. It is the foundation that the platform is built on.
            </p>
          </div>
        </div>
      </section>

      {/* ── What SAM does ── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-4">The platform</p>
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900">
              What SAM does
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Database,
                color: 'bg-indigo-600',
                title: 'ISO/IEC 81346 native data model',
                desc: 'Every object in SAM is structured around the three aspects of the standard: Function, Product, and Location. The hierarchy is enforced at the data level, not just the display level. You cannot create a designation that violates the standard rules.',
              },
              {
                icon: Brain,
                color: 'bg-violet-600',
                title: 'AI-assisted designation',
                desc: 'SAM uses AI to suggest designations based on your existing hierarchy, the object type, and the classification codes from ISO 81346-2. For large-scale migrations from legacy tagging systems, SAM can propose mappings across thousands of assets and flag ambiguous cases for human review.',
              },
              {
                icon: GitMerge,
                color: 'bg-sky-600',
                title: 'Multi-contractor governance',
                desc: 'Define your Employer Information Requirements once. SAM enforces them across every contractor submitting designations to your project. Non-compliant submissions are flagged automatically before they enter your master register.',
              },
              {
                icon: Network,
                color: 'bg-emerald-600',
                title: 'Portfolio-wide visibility',
                desc: 'Manage RDS across multiple sites, projects, and asset types from a single interface. Compare designation maturity across your portfolio. Identify where Standard Drift is occurring before it becomes a remediation project.',
              },
              {
                icon: Layers,
                color: 'bg-amber-600',
                title: 'CMMS and document system integration',
                desc: 'SAM acts as the authoritative RDS source that feeds your CMMS, document management system, and asset register. Change a designation in SAM and the change propagates with a full audit trail across connected systems.',
              },
              {
                icon: Shield,
                color: 'bg-rose-600',
                title: 'Audit trail and compliance reporting',
                desc: 'Every designation change is logged with who made it, when, and why. SAM produces compliance reports against ISO/IEC 81346 and your own internal designation specification, ready for contractor audits and regulatory submissions.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-200 hover:shadow-sm transition-all">
                <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                  <item.icon size={18} className="text-white" />
                </div>
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI in depth ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-4">AI in SAM</p>
              <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
                AI that understands the standard, not just the data
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  Most AI in asset management tools is applied to analytics and predictive maintenance. SAM applies AI at the information architecture layer — where the real work of RDS implementation happens and where the most time is lost.
                </p>
                <p>
                  The market is beginning to move in this direction. GreenPowerMonitor, a DNV company, launched Energy Data Tagger in 2025 — an AI tool trained on over one million signals from renewable energy projects to standardise SCADA data against IEC 81346 and RDS-PS. This is the direction the industry is heading. SAM takes it further by applying AI not just to signal naming but to the full designation hierarchy across all three aspects of the standard.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: 'Intelligent designation suggestion',
                  desc: 'When you add a new asset, SAM analyses its type, its position in the hierarchy, and the classification codes from ISO 81346-2 to suggest the correct designation. Engineers validate rather than create from scratch.',
                },
                {
                  title: 'Legacy tag translation',
                  desc: 'Migrating from a homegrown or OEM-specific tagging system? SAM analyses your existing tags, identifies the underlying asset types, and proposes ISO/IEC 81346 compliant designations at scale. Human review is built into the workflow.',
                },
                {
                  title: 'Standard Drift detection',
                  desc: 'SAM monitors your designation register continuously and flags designations that are drifting from your specification — incorrect aspect usage, missing classification codes, duplicate designations across boundaries.',
                },
                {
                  title: 'Natural language search',
                  desc: 'Ask SAM to find every pump in the hydraulic system of turbine A1 in plain language. SAM translates the query into a structured search across your RDS hierarchy and returns the correct results with their full aspect designations.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-xl border border-slate-200 hover:border-indigo-200 transition-all">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0 mt-2" />
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

      {/* ── How SAM differs ── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-4">Market positioning</p>
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900">
              How SAM differs from what exists today
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-4 text-xs font-bold uppercase tracking-widest text-slate-400 w-48">Capability</th>
                  <th className="text-center py-4 px-4 text-xs font-bold uppercase tracking-widest text-indigo-600">SAM</th>
                  <th className="text-center py-4 px-4 text-xs font-bold uppercase tracking-widest text-slate-400">Excel / SharePoint</th>
                  <th className="text-center py-4 px-4 text-xs font-bold uppercase tracking-widest text-slate-400">Generic CMMS</th>
                  <th className="text-center py-4 px-4 text-xs font-bold uppercase tracking-widest text-slate-400">ACC / Forma</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['ISO/IEC 81346 native data model', true, false, false, false],
                  ['Three-aspect hierarchy enforcement', true, false, false, false],
                  ['AI-assisted designation', true, false, false, false],
                  ['Standard Drift detection', true, false, false, false],
                  ['Multi-contractor governance', true, false, true, true],
                  ['Portfolio-wide RDS visibility', true, false, true, false],
                  ['CMMS integration', true, false, true, false],
                  ['Audit trail and compliance reporting', true, false, true, true],
                  ['Built for energy sector operations', true, false, false, false],
                ].map(([cap, sam, excel, cmms, acc]) => (
                  <tr key={cap as string} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 text-sm font-medium text-slate-700">{cap as string}</td>
                    <td className="py-4 px-4 text-center">
                      {sam ? <CheckCircle size={18} className="text-indigo-600 mx-auto" /> : <span className="text-slate-200 text-lg">—</span>}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {excel ? <CheckCircle size={18} className="text-slate-400 mx-auto" /> : <span className="text-slate-200 text-lg">—</span>}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {cmms ? <CheckCircle size={18} className="text-slate-400 mx-auto" /> : <span className="text-slate-200 text-lg">—</span>}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {acc ? <CheckCircle size={18} className="text-slate-400 mx-auto" /> : <span className="text-slate-200 text-lg">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Built by practitioners ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-4">Why trust SAM</p>
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
              Built by the people who have done the work
            </h2>
            <div className="space-y-5 text-slate-600 leading-relaxed text-lg mb-10">
              <p>
                SAM is not a product built by a software company that hired RDS consultants to advise on requirements. It is being built by the consultants themselves, using the same process they apply to every client engagement: start with the standard, understand the operational reality, and build around both.
              </p>
              <p>
                Søren has spent more than seven years implementing ISO/IEC 81346 on major offshore wind programmes at TenneT, including a 2GW programme covering offshore platforms, onshore substations, and DC cable systems, across more than ten contractors simultaneously. Sylvia built and owned the asset management tool and Common Data Environment for the same programme as Product Owner, leading cross-functional squads to deliver a working system under real project constraints.
              </p>
              <p>
                SAM is what they wished existed when they were doing that work.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 py-8 border-t border-b border-slate-100 mb-10">
              {[
                { value: '7+', label: 'Years of ISO/IEC 81346 implementation' },
                { value: '2GW', label: 'Programme scale validated against' },
                { value: '10+', label: 'Contractors managed simultaneously' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p style={{ fontFamily: 'Georgia, serif' }} className="text-3xl font-bold text-indigo-600 mb-1">{s.value}</p>
                  <p className="text-xs text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Who SAM is for ── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-4">Who SAM is for</p>
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-slate-900">
              SAM is built for energy sector organisations
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Offshore wind operators', desc: 'Managing RDS-PS across multiple turbines, offshore platforms, and onshore substations from a single portfolio view.' },
              { title: 'Transmission operators', desc: 'Governing ISO/IEC 81346 compliance across substations, cable systems, and grid infrastructure with multi-contractor enforcement.' },
              { title: 'EPC contractors', desc: 'Delivering designation systems that meet employer requirements from day one, with built-in compliance verification before handover.' },
              { title: 'Oil and gas operators', desc: 'Structuring asset identification across complex process facilities where the cost of designation inconsistency is measured in safety incidents and maintenance delays.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-200 transition-all">
                <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Register for early access
          </h2>
          <p className="text-indigo-200 text-lg mb-8 leading-relaxed">
            SAM is currently in development. If you are an energy operator or EPC contractor who wants to shape the product through your operational requirements, or simply wants to be first to hear when it launches, register your interest now.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:info@soedera.eu?subject=SAM Early Access&body=Hi SøDera team,%0A%0AI would like to register my interest in early access to SAM.%0A%0AOrganisation:%0AUse case:%0A%0AKind regards,"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-all shadow-lg"
            >
              Register Interest <ArrowRight size={18} />
            </a>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-500 text-white font-semibold rounded-xl hover:bg-indigo-400 transition-all border border-indigo-400"
            >
              About the team
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
