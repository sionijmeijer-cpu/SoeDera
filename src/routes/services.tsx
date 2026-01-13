import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import { 
  FileText, 
  Network, 
  Building2, 
  Package, 
 
  FolderKanban,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

function ServicesPage() {
  SEOHead({
    title: 'Services - Documentation, RDS & Asset Data Solutions',
    description: 'Expert consulting services: Document Management, Reference Designation Systems (IEC 81346), BIM Services, Product Development, and Project Management for energy companies.',
    keywords: 'RDS consulting, document management services, IEC 81346 implementation, BIM energy sector, asset data consulting',
    canonicalUrl: 'https://www.soedera.eu/services'
  })

  const services = [
    {
      id: 'document-management',
      icon: FileText,
      title: 'Document Management',
      subtitle: 'Structured Documentation Systems',
      description: 'Transform chaotic documentation into organized, searchable, and maintainable systems that support your entire asset lifecycle.',
      color: 'from-sky-500/20 to-sky-600/20',
      iconColor: 'text-sky-600',
      borderColor: 'hover:border-sky-300',
      benefits: [
        'Document classification and metadata frameworks',
        'Lifecycle management and version control',
        'Integration with existing systems (EDMS, EAM, GIS)',
        'Compliance with industry standards (ISO 19650, PAS 1192)',
        'Training and change management support',
        'Custom workflow design and automation'
      ]
    },
    {
      id: 'rds',
      icon: Network,
      title: 'Reference Designation Systems (RDS)',
      subtitle: 'IEC 81346 Implementation',
      description: 'Implement and optimize Reference Designation Systems that provide clear, consistent identification of your assets across all systems and documentation.',
      color: 'from-sky-500/20 to-sky-600/20',
      iconColor: 'text-sky-600',
      borderColor: 'hover:border-sky-300',
      benefits: [
        'IEC 81346 compliant designation frameworks',
        'Cross-system consistency and integration',
        'Migration strategies for legacy designations',
        'Governance and maintenance procedures',
        'Staff training and certification programs',
        'Quality assurance and validation tools'
      ]
    },
    {
      id: 'bim',
      icon: Building2,
      title: 'BIM Services',
      subtitle: 'Building Information Modeling',
      description: 'Leverage Building Information Modeling to enhance collaboration, improve asset visibility, and support data-driven decision making throughout the asset lifecycle.',
      color: 'from-sky-500/20 to-sky-600/20',
      iconColor: 'text-sky-600',
      borderColor: 'hover:border-sky-300',
      benefits: [
        'BIM strategy and implementation planning',
        'Model development and management',
        'Asset data integration and handover',
        'Common Data Environment (CDE) setup',
        'Digital twin foundation development',
        'Training and capability building'
      ]
    },
    {
      id: 'product-development',
      icon: Package,
      title: 'Product Development',
      subtitle: 'Data Product Design',
      description: 'Design and develop data products that transform raw asset information into actionable insights, enabling better decision-making across your organization.',
      color: 'from-sky-500/20 to-sky-600/20',
      iconColor: 'text-sky-600',
      borderColor: 'hover:border-sky-300',
      benefits: [
        'Data product strategy and roadmapping',
        'Requirements analysis and specification',
        'Prototype development and validation',
        'Integration architecture design',
        'User experience optimization',
        'Deployment and scaling support'
      ]
    },

    {
      id: 'project-management',
      icon: FolderKanban,
      title: 'Project Management',
      subtitle: 'Expert Project Delivery',
      description: 'Ensure your documentation and data initiatives are delivered on time, within budget, and to the highest quality standards with our experienced project management approach.',
      color: 'from-sky-500/20 to-sky-600/20',
      iconColor: 'text-sky-600',
      borderColor: 'hover:border-sky-300',
      benefits: [
        'Project planning and scheduling',
        'Stakeholder management and communication',
        'Risk identification and mitigation',
        'Quality assurance and control',
        'Resource coordination and optimization',
        'Progress reporting and governance'
      ]
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden" style={{
        backgroundImage: 'url(https://i.imgur.com/L0OivFj.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-white font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
            Services Built for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-400"> Energy</span>
          </h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Focused consulting services designed to help energy companies optimize their 
            documentation, implement robust designation systems, and unlock the value of their asset data.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`bg-gradient-to-br from-sky-50 to-white border-2 border-slate-200 ${service.borderColor} rounded-2xl p-8 md:p-10 transition-all hover:shadow-xl scroll-mt-32`}
              >
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                      <service.icon className={service.iconColor} size={32} />
                    </div>
                    <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">{service.subtitle}</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 mb-4">{service.title}</h2>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    {service.id === 'document-management' && (
                      <Link 
                        to="/service-document-management"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-all group"
                      >
                        Learn More
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                    {service.id === 'rds' && (
                      <Link 
                        to="/service-rds"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-all group"
                      >
                        Learn More
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                    {service.id === 'bim' && (
                      <Link 
                        to="/service-bim"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-all group"
                      >
                        Learn More
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                    {service.id === 'product-development' && (
                      <Link 
                        to="/service-product-development"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-all group"
                      >
                        Learn More
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                    {service.id === 'project-management' && (
                      <Link 
                        to="/service-project-management"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-all group"
                      >
                        Learn More
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                  
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="text-slate-900 font-semibold mb-4">What We Deliver</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                          <CheckCircle2 size={18} className={service.iconColor + ' shrink-0 mt-0.5'} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden" style={{
        backgroundImage: 'url(https://i.imgur.com/BrTo5LL.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How can we assist you?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            If you would like to discuss further on how we can support refining your business processes for a productive operation, please contact us.
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
