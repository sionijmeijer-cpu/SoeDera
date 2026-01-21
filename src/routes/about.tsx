import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  Lightbulb,
  Handshake,
  ArrowRight,
  Linkedin,
  CheckCircle2
} from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  SEOHead({
    title: 'About SøDera - Energy Documentation Experts',
    description: 'SøDera: 15+ years helping energy companies with documentation, Reference Designation Systems (IEC 81346), and asset data management. Based in Denmark, serving Europe.',
    keywords: 'about SøDera, energy consulting company, RDS experts Denmark, IEC 81346 specialists',
    canonicalUrl: 'https://www.soedera.eu/about'
  })

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We deliver work of the highest quality, applying deep expertise and rigorous attention to detail in everything we do.',
      color: 'from-sky-500/20 to-sky-600/20',
      iconColor: 'text-sky-600'
    },
    {
      icon: Handshake,
      title: 'Partnership',
      description: 'We build lasting relationships with our clients, working alongside them as trusted advisors and collaborators.',
      color: 'from-sky-500/20 to-sky-600/20',
      iconColor: 'text-sky-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We develop proven approaches and industry-validated methods to solve complex documentation and data challenges.',
      color: 'from-sky-500/20 to-sky-600/20',
      iconColor: 'text-sky-600'
    },
    {
      icon: Users,
      title: 'Integrity',
      description: 'We operate with transparency and honesty, always putting our clients\' best interests at the heart of our recommendations.',
      color: 'from-sky-500/20 to-sky-600/20',
      iconColor: 'text-sky-600'
    }
  ]

  const team = [
    {
      name: 'Søren Christensen',
      role: 'Co-founder & CEO',
      bio: 'Søren specializes in Reference Designation Systems (RDS), helping energy and industrial teams bring structure and clarity to complex assets and documentation through practical, standards-based approaches.',
      image: 'https://i.imgur.com/oIDeYJ5.jpeg',
      linkedin: 'https://www.linkedin.com/in/s%C3%B8ren-lemvigh/'
    },
    {
      name: 'Sylvia Awoudu',
      role: 'Co-founder & COO',
      bio: 'Sylvia specializes in document and information management and product development, helping energy and industrial teams turn structured data into practical, usable solutions while maintaining control and compliance.',
      image: 'https://i.imgur.com/OEWaaGg.jpeg',
      linkedin: 'https://www.linkedin.com/in/sylvia-awoudu-53480262/'
    }
  ]

  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '4+', label: 'Projects Delivered' },
    { value: '100%', label: 'Client Satisfaction' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 sm:py-16 relative overflow-hidden" style={{
        backgroundImage: 'url(https://i.imgur.com/L0OivFj.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-white font-semibold text-sm uppercase tracking-wider">Who We Are</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
            Experts in Energy
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-400"> Documentation</span>
          </h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            SøDera was founded with a single mission: to help energy companies unlock the value of their 
            documentation and asset data through structured, standards-compliant approaches.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 sm:py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 md:p-10 hover:border-sky-300 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-sky-500/20 to-sky-600/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-sky-600" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To help energy companies bring structure and clarity to their documentation, Reference Designation Systems, and asset data. We work hands-on to deliver practical, standards-aligned solutions that create real, lasting value.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 md:p-10 hover:border-sky-300 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-sky-500/20 to-sky-600/20 rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-sky-600" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed">
                To be a trusted, long-term partner for energy companies working to improve their documentation and asset data foundations. We believe strong, well-structured data is essential for efficiency, compliance, and future innovation across the energy sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 sm:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-10 sm:py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Leadership Team</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">Meet Our Experts</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our team brings decades of combined experience in energy sector documentation and asset management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-slate-200 hover:border-sky-300 rounded-2xl overflow-hidden hover:shadow-xl transition-all group"
              >
                <img src={member.image} alt={member.name} className={index === 1 ? "h-72 w-full object-cover object-[center_-30px]" : "h-72 w-full object-cover object-top"} />
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-sky-600 font-semibold text-sm mb-4">{member.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-all text-sm font-medium"
                  >
                    <Linkedin size={14} />
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">What Drives Us</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              These core values shape how we work with clients and approach every engagement.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 hover:border-sky-300 rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4`}>
                  <value.icon className={value.iconColor} size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-12 sm:py-16 relative overflow-hidden" style={{
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
