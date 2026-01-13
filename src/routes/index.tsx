import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
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
  Zap,
  Shield,
  Target
} from 'lucide-react'

export const Route = createFileRoute('/')({  component: HomePage,})

function HomePage() {
  const navigate = useNavigate()

  // SEO for homepage
  SEOHead({
    title: 'Energy Documentation & Asset Data Consulting',
    description: 'SøDera helps energy companies improve documentation, Reference Designation Systems (IEC 81346), and asset data management. 15+ years experience serving Europe.',
    keywords: 'RDS, Reference Designation System, IEC 81346, energy documentation, asset data management, document management, energy consulting, Denmark',
    canonicalUrl: 'https://www.soedera.eu/'
  })

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const services = [
    {
      icon: FileText,
      title: 'Document Management',
      description: 'Structure, control, and manage technical documentation across teams and systems.',
      color: 'from-blue-500/20 to-blue-600/20',
      iconColor: 'text-blue-600',
    },
    {
      icon: Network,
      title: 'Reference Designation (RDS)',
      description: 'Implement IEC 81346, compliant designation systems for clear and consistent asset identification.',
      color: 'from-blue-500/20 to-blue-600/20',
      iconColor: 'text-blue-600',
    },
    {
      icon: Building2,
      title: 'BIM Services',
      description: 'Integrate Building Information Modeling into your asset lifecycle for enhanced collaboration.',
      color: 'from-blue-500/20 to-blue-600/20',
      iconColor: 'text-blue-600',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-24 flex items-center justify-center overflow-hidden min-h-[500px] sm:min-h-[600px]">
        {/* Blurred background image */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://i.imgur.com/lCNBEPI.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            filter: 'blur(8px)',
            transform: 'scale(1.1)'
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-600 text-sm font-medium mb-4">
            <Zap size={16} />
            Energy Sector Experts
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight px-4" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.9), 0 2px 40px rgba(0,0,0,0.6)' }}>
            We help energy companies improve documentation, RDS, and asset data.
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto mb-8 leading-relaxed px-4" style={{ textShadow: '0 3px 15px rgba(0,0,0,0.9), 0 1px 30px rgba(0,0,0,0.6)' }}>
            We take a practical, hands-on approach, working directly with teams, from Reference Designation Systems (IEC 81346) to document and asset management, to reduce complexity, improve compliance, and stay in control of their information.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 w-full">
            <Link 
              to="/services"
              className="w-full sm:w-auto px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:bg-sky-600 transition-all flex items-center justify-center gap-2 group"
            >
              Learn More
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-slate-300 text-sm px-4">
            <div className="flex items-center gap-2">
              <Shield size={18} className="text-sky-500" />
              <span>Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Target size={18} className="text-blue-400" />
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-blue-400" />
              <span>4+ Projects Delivered</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="hidden md:block absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 border-2 border-slate-300 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1 h-2 bg-blue-600 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Quick Assessments Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white" id="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Start Here</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">Quick Assessments</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Short, paid assessments designed to review your current setup and provide clear, practical recommendations.
              <br />
              Ideal for organizations looking to understand their documentation and RDS maturity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* RDS Review Card */}
            <div className="relative bg-gradient-to-br from-sky-50 to-white border-2 border-sky-100 rounded-2xl p-6 sm:p-8 hover:border-sky-300 hover:shadow-xl transition-all shadow-lg shadow-sky-200/50">
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 bg-sky-500 text-white text-xs font-semibold rounded-full">
                  IEC 81346
                </span>
              </div>
              
              <div className="w-14 h-14 bg-sky-500/10 rounded-xl flex items-center justify-center mb-6">
                <Network className="text-sky-500" size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">RDS Assessment</h3>
              <p className="text-slate-600 text-sm mb-4">
                A focused review of your current Reference Designation System to identify gaps, inconsistencies, and risks across documentation, systems, and assets.
              </p>
              
              <p className="text-slate-700 font-semibold text-sm mb-4">What's included:</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="text-sky-500 shrink-0 mt-0.5" />
                  <span>Review of current RDS structure and usage</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="text-sky-500 shrink-0 mt-0.5" />
                  <span>Alignment check against IEC 81346</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="text-sky-500 shrink-0 mt-0.5" />
                  <span>Identification of risks, inconsistencies, and quick wins</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="text-sky-500 shrink-0 mt-0.5" />
                  <span>Clear recommendations, roadmap and next steps</span>
                </li>
              </ul>

              <div className="flex flex-col pt-6 border-t border-sky-100">
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-1.5 text-slate-600 text-sm mb-1">
                    <Clock size={14} />
                    <span>~2 weeks</span>
                  </div>
                  <div className="text-slate-900 font-semibold text-sm">
                    From €1,800
                  </div>
                </div>
                <a 
                  href="https://outlook.office.com/book/AssessmentBooking1@soedera.eu/s/GDHl_HOriUOW0kXs3yLfJA2?ismsaljsauthenabled"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition-all text-sm text-center"
                >
                  Discuss RDS Assessment
                </a>
              </div>
            </div>

            {/* Document Management Card */}
            <div className="relative bg-gradient-to-br from-sky-50 to-white border-2 border-sky-100 rounded-2xl p-6 sm:p-8 hover:border-sky-300 hover:shadow-xl transition-all shadow-lg shadow-sky-200/50">
              <div className="w-14 h-14 bg-sky-500/10 rounded-xl flex items-center justify-center mb-6">
                <FileText className="text-sky-500" size={28} />
              </div>
              
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 bg-sky-500 text-white text-xs font-semibold rounded-full">
                  ISO 9001
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">Document Management Assessment</h3>
              <p className="text-slate-600 text-sm mb-4">
                A practical review of how documents are created, stored, controlled, and used across teams and systems.
              </p>
              
              <p className="text-slate-700 font-semibold text-sm mb-4">What's included:</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="text-sky-500 shrink-0 mt-0.5" />
                  <span>Review of document system, structure, workflows, and ownership</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="text-sky-500 shrink-0 mt-0.5" />
                  <span>Revision/Version control and compliance gap check</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="text-sky-500 shrink-0 mt-0.5" />
                  <span>Identification of inefficiencies, workflow and risks</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="text-sky-500 shrink-0 mt-0.5" />
                  <span>Practical improvement recommendations and data flow mapping</span>
                </li>
              </ul>

              <div className="flex flex-col pt-6 border-t border-sky-100">
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-1.5 text-slate-600 text-sm mb-1">
                    <Clock size={14} />
                    <span>~2 weeks</span>
                  </div>
                  <div className="text-slate-900 font-semibold text-sm">
                    From €1,800
                  </div>
                </div>
                <a 
                  href="https://outlook.office.com/book/AssessmentBooking1@soedera.eu/s/GDHl_HOriUOW0kXs3yLfJA2?ismsaljsauthenabled"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition-all text-sm text-center"
                >
                  Discuss Document Assessment
                </a>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 text-center">
            <p className="text-slate-600 text-sm italic">
              Both assessments are short, paid engagements designed to provide clarity, not to lock you into a larger project.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">Our Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Focused solutions designed specifically for energy sector organizations 
              looking to optimize their documentation and asset data practices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white border-2 border-slate-200 hover:border-sky-300 hover:shadow-xl rounded-2xl p-8 transition-all hover:-translate-y-1"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className={service.iconColor} size={26} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:bg-sky-600 transition-all"
            >
              See all services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden bg-cover bg-center bg-fixed" style={{
        backgroundImage: 'linear-gradient(to right, rgba(14, 116, 188, 0.55), rgba(37, 99, 235, 0.55)), url(https://i.imgur.com/BrTo5LL.jpeg)',
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        WebkitBackgroundSize: 'cover',
        filter: 'blur(6px)'
      }}>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Let&apos;s discuss how we can help optimize your business processes
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-sky-50 transition-all"
          >
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
