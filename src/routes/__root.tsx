import { createRootRoute, Link, Outlet, useLocation } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { ThemeProvider } from '@/components/theme-provider'

if (typeof window !== 'undefined' && !document.getElementById('flash-animations')) {
  const style = document.createElement('style')
  style.id = 'flash-animations'
  style.textContent = `
    @keyframes flash-pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    .animate-shimmer {
      animation: shimmer 1.5s infinite;
    }
    @keyframes shimmer-amber {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
  `
  document.head.appendChild(style)
}

import { ScrollHandler } from '@/components/ScrollHandler'
import { Linkedin, ChevronDown, Menu, X, FileText, Network, Building2, Package, FolderKanban, ClipboardCheck, GraduationCap } from 'lucide-react'
import { ThemeProvider as _TP } from '@/components/theme-provider'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const location = useLocation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsServicesOpen(false)
  }, [location.pathname])

  if (!mounted) return null

  const services = [
    { name: 'Document Management', href: '/service-document-management', icon: FileText },
    { name: 'Reference Designation (RDS)', href: '/service-rds', icon: Network },
    { name: 'RDS Audit', href: '/service-rds-audit', icon: ClipboardCheck },
    { name: 'BIM Services', href: '/service-bim', icon: Building2 },
    { name: 'Product Development', href: '/service-product-development', icon: Package },
    { name: 'Project Management', href: '/service-project-management', icon: FolderKanban },
    { name: 'Training & SME', href: '/service-training', icon: GraduationCap },
  ]

  return (
    <ThemeProvider defaultTheme="system" storageKey="soedera-theme">
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors">
        <ScrollHandler />

        {/* ── Navigation ── */}
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-blue-950/95 backdrop-blur-md shadow-lg border-b border-blue-900'
            : 'bg-blue-950 border-b border-blue-900'
        }`}>
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">

              {/* Logo */}
              <Link to="/" className="flex items-center gap-2 group">
                <img src="https://i.imgur.com/yAobb2F.png" alt="SøDera" className="h-20 w-auto brightness-110" />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1">
                <Link
                  to="/"
                  className="px-4 py-2 text-sm font-medium text-gray-200 hover:text-sky-400 hover:bg-blue-900/50 rounded-lg transition-all"
                  activeProps={{ className: 'px-4 py-2 text-sm font-medium text-sky-400 bg-blue-900/50 rounded-lg' }}
                >
                  Home
                </Link>

                {/* Services Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    onBlur={() => setTimeout(() => setIsServicesOpen(false), 150)}
                    className="px-4 py-2 text-sm font-medium text-gray-200 hover:text-sky-400 hover:bg-blue-900/50 rounded-lg transition-all flex items-center gap-1"
                  >
                    Services
                    <ChevronDown size={14} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-blue-950 border border-blue-900 rounded-xl shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                            service.name === 'Training & SME'
                              ? 'text-amber-300 hover:text-amber-200 hover:bg-blue-900/50 border-t border-blue-900/50 mt-1 pt-3'
                              : 'text-gray-300 hover:text-sky-400 hover:bg-blue-900/50'
                          }`}
                        >
                          <service.icon size={16} className={service.name === 'Training & SME' ? 'text-amber-400' : 'text-sky-500'} />
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to="/blog"
                  className="px-4 py-2 text-sm font-medium text-gray-200 hover:text-sky-400 hover:bg-blue-900/50 rounded-lg transition-all"
                  activeProps={{ className: 'px-4 py-2 text-sm font-medium text-sky-400 bg-blue-900/50 rounded-lg' }}
                >
                  Insights
                </Link>
                <Link
                  to="/about"
                  className="px-4 py-2 text-sm font-medium text-gray-200 hover:text-sky-400 hover:bg-blue-900/50 rounded-lg transition-all"
                  activeProps={{ className: 'px-4 py-2 text-sm font-medium text-sky-400 bg-blue-900/50 rounded-lg' }}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="px-4 py-2 text-sm font-medium text-gray-200 hover:text-sky-400 hover:bg-blue-900/50 rounded-lg transition-all"
                  activeProps={{ className: 'px-4 py-2 text-sm font-medium text-sky-400 bg-blue-900/50 rounded-lg' }}
                >
                  Contact
                </Link>
              </div>

              {/* CTA Buttons */}
              <div className="hidden md:flex items-center gap-2">
                {/* Explore Training — amber */}
                <Link
                  to={"/service-training" as any}
                  className="inline-block px-4 py-2.5 bg-amber-500 text-white text-sm font-semibold rounded-lg shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:bg-amber-400 transition-all hover:scale-105 relative overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                    style={{ animation: 'shimmer 3s ease-in-out infinite' }}
                  />
                  <span className="relative z-10 flex items-center gap-1.5">
                    <GraduationCap size={14} />
                    Explore Training
                  </span>
                </Link>

                {/* Book Assessment — sky blue */}
                <Link
                  to="/book-assessment"
                  className="inline-block px-5 py-2.5 bg-sky-500 text-white text-sm font-semibold rounded-lg shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:bg-sky-600 transition-all hover:scale-105 relative overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40"
                    style={{ animation: 'shimmer 2.5s ease-in-out infinite' }}
                  />
                  <span className="relative z-10">Book Assessment</span>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-200 hover:text-sky-400 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-blue-950 border-t border-blue-900 animate-in slide-in-from-top duration-200">
              <div className="px-4 py-4 space-y-1">
                <Link to="/" className="block px-4 py-3 text-gray-200 hover:text-sky-400 hover:bg-blue-900/50 rounded-lg transition-colors">
                  Home
                </Link>
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-200 hover:text-sky-400 hover:bg-blue-900/50 rounded-lg transition-colors"
                  >
                    Services
                    <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServicesOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                            service.name === 'Training & SME'
                              ? 'text-amber-300 hover:text-amber-200'
                              : 'text-gray-300 hover:text-sky-400'
                          }`}
                        >
                          <service.icon size={14} className={service.name === 'Training & SME' ? 'text-amber-400' : 'text-sky-500'} />
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link to="/blog" className="block px-4 py-3 text-gray-200 hover:text-sky-400 hover:bg-blue-900/50 rounded-lg transition-colors">
                  Insights
                </Link>
                <Link to="/about" className="block px-4 py-3 text-gray-200 hover:text-sky-400 hover:bg-blue-900/50 rounded-lg transition-colors">
                  About
                </Link>
                <Link to="/contact" className="block px-4 py-3 text-gray-200 hover:text-sky-400 hover:bg-blue-900/50 rounded-lg transition-colors">
                  Contact
                </Link>
                <div className="pt-4 flex flex-col gap-2">
                  <Link
                    to={"/service-training" as any}
                    className="block w-full px-5 py-3 bg-amber-500 text-white text-center font-semibold rounded-lg hover:bg-amber-400 transition-colors"
                  >
                    Explore Training
                  </Link>
                  <Link
                    to="/book-assessment"
                    className="block w-full px-5 py-3 bg-sky-500 text-white text-center font-semibold rounded-lg hover:bg-sky-600 transition-colors"
                  >
                    Book Assessment
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* ── Main Content ── */}
        <main>
          <Outlet />
        </main>

        {/* ── Footer ── */}
        <footer className="bg-slate-900 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

              {/* Brand */}
              <div>
                <Link to="/" className="inline-block mb-4">
                  <img src="https://i.imgur.com/yAobb2F.png" alt="SøDera" className="h-16 w-auto" />
                </Link>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-5">
                  Helping energy companies fix documentation, implement Reference Designation
                  Systems (IEC 81346), and optimise asset data management.
                </p>
                <a
                  href="https://www.linkedin.com/company/s%C3%B8dera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-9 h-9 bg-white/5 hover:bg-blue-500/20 rounded-lg text-slate-400 hover:text-blue-400 transition-all"
                  aria-label="SøDera on LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>

              {/* Links */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Company</h4>
                  <ul className="space-y-3">
                    {[
                      { label: 'Home', to: '/' },
                      { label: 'About', to: '/about' },
                      { label: 'Insights', to: '/blog' },
                      { label: 'Contact', to: '/contact' },
                      { label: 'Privacy Policy', to: '/privacy-policy' },
                      { label: 'Terms of Service', to: '/terms-of-service' },
                    ].map((link) => (
                      <li key={link.label}>
                        <Link to={link.to} className="text-slate-400 hover:text-sky-400 text-sm transition-colors">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Services</h4>
                  <ul className="space-y-3">
                    {[
                      { label: 'Document Management', to: '/service-document-management' },
                      { label: 'Reference Designation', to: '/service-rds' },
                      { label: 'RDS Audit', to: '/service-rds-audit' },
                      { label: 'BIM Services', to: '/service-bim' },
                      { label: 'Product Development', to: '/service-product-development' },
                      { label: 'Project Management', to: '/service-project-management' },
                      { label: 'Training & SME', to: '/service-training' },
                    ].map((link) => (
                      <li key={link.label}>
                        <Link to={link.to as any} className={`text-sm transition-colors ${link.label === 'Training & SME' ? 'text-amber-400 hover:text-amber-300' : 'text-slate-400 hover:text-sky-400'}`}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li>
                    <a href="mailto:info@soedera.eu" className="hover:text-sky-400 transition-colors">
                      info@soedera.eu
                    </a>
                  </li>
                  <li>
                    <a href="https://www.soedera.eu" className="hover:text-sky-400 transition-colors">
                      www.soedera.eu
                    </a>
                  </li>
                  <li className="pt-2 text-slate-500">Mon – Fri: 09:00 – 17:00 CET</li>
                </ul>
              </div>

            </div>
          </div>

          <div className="border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
              <p>© 2026 SøDera. All rights reserved.</p>
              <p>Energy Documentation & RDS Consulting, Europe</p>
            </div>
          </div>
        </footer>

      </div>
    </ThemeProvider>
  )
}
