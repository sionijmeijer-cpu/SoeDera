import { createRootRoute, Link, Outlet, useLocation } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'
import { ThemeProvider } from '@/components/theme-provider'

if (typeof window !== 'undefined' && !document.getElementById('flash-animations')) {
  const style = document.createElement('style')
  style.id = 'flash-animations'
  style.textContent = `
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    .animate-shimmer { animation: shimmer 1.5s infinite; }
  `
  document.head.appendChild(style)
}

import { ScrollHandler } from '@/components/ScrollHandler'
import {
  Linkedin, ChevronDown, Menu, X, ArrowRight,
  GraduationCap, ClipboardCheck, Network, FileText,
  BookOpen, Zap, Package, FolderKanban,
} from 'lucide-react'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const location = useLocation()
  const [mounted, setMounted] = useState(false)
  const megaMenuTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsMegaMenuOpen(false)
    setIsMobileServicesOpen(false)
  }, [location.pathname])

  const openMegaMenu = () => {
    if (megaMenuTimerRef.current) clearTimeout(megaMenuTimerRef.current)
    setIsMegaMenuOpen(true)
  }

  const closeMegaMenuDelayed = () => {
    megaMenuTimerRef.current = setTimeout(() => setIsMegaMenuOpen(false), 150)
  }

  if (!mounted) return null

  const col1 = [
    { label: 'RDS-PP', href: '/service-rds' },
    { label: 'RDS-PS', href: '/service-rds' },
    { label: 'IEC 81346', href: '/service-rds' },
    { label: 'RDS Audit', href: '/service-rds-audit' },
    { label: 'RDS Training', href: '/service-training' },
  ]

  const col2 = [
    { label: 'Document & Data Management', href: '/service-document-management' },
    { label: 'Building Information Modelling', href: '/service-bim' },
    { label: 'Digital Twin', href: '/service-bim' },
    { label: 'Document Assessment', href: '/service-document-management' },
    { label: 'Documentation Audit', href: '/service-document-management' },
  ]

  const col3 = [
    { label: 'Project Management', href: '/service-project-management' },
    { label: 'Product Development', href: '/service-product-development' },
  ]

  const featured = [
    {
      label: 'RDS Audit',
      href: '/service-rds-audit',
      desc: 'IEC 81346 compliance review with remediation roadmap.',
      icon: ClipboardCheck,
      color: 'text-sky-600',
      bg: 'bg-sky-50',
    },
    {
      label: 'Document Audit',
      href: '/service-document-management',
      desc: 'Review of your document system, structure and workflows.',
      icon: FileText,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      label: 'RDS Training',
      href: '/service-training',
      desc: 'Hands-on IEC 81346 training for your engineering team.',
      icon: Network,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      label: 'Document Training',
      href: '/service-training',
      desc: 'ISO 19650 and document management training on-site or remote.',
      icon: BookOpen,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      label: 'SAM — RDS Tool',
      href: '/service-product-development',
      desc: 'Cloud-native RDS management platform built on Azure.',
      icon: Zap,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      badge: 'Coming Soon',
    },
    {
      label: 'Book Assessment',
      href: '/book-assessment',
      desc: 'Paid engagement to review your RDS or document setup.',
      icon: ClipboardCheck,
      color: 'text-sky-600',
      bg: 'bg-sky-50',
    },
    {
      label: 'Explore Training',
      href: '/service-training',
      desc: 'Practical training on RDS and document management.',
      icon: GraduationCap,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
  ]

  // Is the current page a non-hero page? Use dark nav on these
  const isHeroPage = location.pathname === '/'

  return (
    <ThemeProvider defaultTheme="system" storageKey="soedera-theme">
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors">
        <ScrollHandler />

        {/* ── Navigation ── */}
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200'
            : 'bg-white border-b border-slate-200'
        }`}>
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">

              {/* Logo — dark version for light nav */}
              <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
                <img
                  src="https://i.imgur.com/yAobb2F.png"
                  alt="SøDera"
                  className="h-20 w-auto"
                  style={{ filter: 'brightness(0) saturate(100%) invert(15%) sepia(50%) saturate(500%) hue-rotate(190deg)' }}
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1">
                <Link
                  to="/"
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-all"
                  activeProps={{ className: 'px-4 py-2 text-sm font-medium text-sky-600 bg-slate-50 rounded-lg' }}
                >
                  Home
                </Link>

                {/* Mega Menu Trigger — hover */}
                <div
                  className="relative"
                  onMouseEnter={openMegaMenu}
                  onMouseLeave={closeMegaMenuDelayed}
                >
                  <button
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-all flex items-center gap-1"
                  >
                    Information Management
                    <ChevronDown size={14} className={`transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Mega Menu Panel */}
                  {isMegaMenuOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[900px] bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                      onMouseEnter={openMegaMenu}
                      onMouseLeave={closeMegaMenuDelayed}
                    >
                      <div className="grid grid-cols-4 gap-0 p-6">

                        {/* Column 1 */}
                        <div className="pr-6 border-r border-slate-100">
                          <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-4 pb-2 border-b border-slate-100">
                            Reference Designation
                          </p>
                          <ul className="space-y-0.5">
                            {col1.map((item) => (
                              <li key={item.label}>
                                <Link
                                  to={item.href as any}
                                  className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-slate-50 group transition-colors"
                                  onClick={() => setIsMegaMenuOpen(false)}
                                >
                                  <ArrowRight size={12} className="text-slate-300 group-hover:text-sky-500 flex-shrink-0 transition-colors" />
                                  <span className="text-sm text-slate-700 group-hover:text-sky-600 transition-colors">
                                    {item.label}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Column 2 */}
                        <div className="px-6 border-r border-slate-100">
                          <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-4 pb-2 border-b border-slate-100">
                            Information Management
                          </p>
                          <ul className="space-y-0.5">
                            {col2.map((item) => (
                              <li key={item.label}>
                                <Link
                                  to={item.href as any}
                                  className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-slate-50 group transition-colors"
                                  onClick={() => setIsMegaMenuOpen(false)}
                                >
                                  <ArrowRight size={12} className="text-slate-300 group-hover:text-sky-500 flex-shrink-0 transition-colors" />
                                  <span className="text-sm text-slate-700 group-hover:text-sky-600 transition-colors">
                                    {item.label}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Column 3 */}
                        <div className="px-6 border-r border-slate-100">
                          <p className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-4 pb-2 border-b border-slate-100">
                            Tools and Management
                          </p>
                          <ul className="space-y-0.5">
                            {col3.map((item) => (
                              <li key={item.label}>
                                <Link
                                  to={item.href as any}
                                  className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-slate-50 group transition-colors"
                                  onClick={() => setIsMegaMenuOpen(false)}
                                >
                                  <ArrowRight size={12} className="text-slate-300 group-hover:text-sky-500 flex-shrink-0 transition-colors" />
                                  <span className="text-sm text-slate-700 group-hover:text-sky-600 transition-colors">
                                    {item.label}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Featured Panel */}
                        <div className="pl-6 bg-slate-50 rounded-xl -mr-2 -my-2 p-5">
                          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 pb-2 border-b border-slate-200">
                            Featured
                          </p>
                          <div className="space-y-2">
                            {featured.map((item) => (
                              <Link
                                key={item.label}
                                to={item.href as any}
                                className="flex items-start gap-3 p-2.5 rounded-xl bg-white hover:bg-sky-50 border border-transparent hover:border-sky-100 group transition-all"
                                onClick={() => setIsMegaMenuOpen(false)}
                              >
                                <div className={`w-7 h-7 ${item.bg} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                  <item.icon size={13} className={item.color} />
                                </div>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <p className="text-xs font-bold text-slate-800 group-hover:text-sky-600 transition-colors leading-snug">
                                      {item.label}
                                    </p>
                                    {item.badge && (
                                      <span className="px-1.5 py-0.5 bg-indigo-100 text-indigo-600 text-[9px] font-bold rounded-full whitespace-nowrap">
                                        {item.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-[11px] text-slate-400 leading-snug mt-0.5 line-clamp-2">
                                    {item.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>
                  )}
                </div>

                <Link
                  to="/blog"
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-all"
                  activeProps={{ className: 'px-4 py-2 text-sm font-medium text-sky-600 bg-slate-50 rounded-lg' }}
                >
                  Insights
                </Link>
                <Link
                  to="/about"
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-all"
                  activeProps={{ className: 'px-4 py-2 text-sm font-medium text-sky-600 bg-slate-50 rounded-lg' }}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-all"
                  activeProps={{ className: 'px-4 py-2 text-sm font-medium text-sky-600 bg-slate-50 rounded-lg' }}
                >
                  Contact
                </Link>
              </div>

              {/* CTA Buttons */}
              <div className="hidden md:flex items-center gap-2 flex-shrink-0">
                <Link
                  to={'/service-training' as any}
                  className="inline-block px-4 py-2.5 bg-amber-500 text-white text-sm font-semibold rounded-lg shadow-md shadow-amber-500/20 hover:bg-amber-400 transition-all hover:scale-105 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30" style={{ animation: 'shimmer 3s ease-in-out infinite' }} />
                  <span className="relative z-10 flex items-center gap-1.5">
                    <GraduationCap size={14} /> Explore Training
                  </span>
                </Link>
                <Link
                  to="/book-assessment"
                  className="inline-block px-5 py-2.5 bg-sky-500 text-white text-sm font-semibold rounded-lg shadow-md shadow-sky-500/20 hover:bg-sky-600 transition-all hover:scale-105 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40" style={{ animation: 'shimmer 2.5s ease-in-out infinite' }} />
                  <span className="relative z-10">Book Assessment</span>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-slate-600 hover:text-sky-600 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-slate-200 animate-in slide-in-from-top duration-200">
              <div className="px-4 py-4 space-y-1">
                <Link to="/" className="block px-4 py-3 text-slate-700 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-colors">
                  Home
                </Link>
                <div>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-slate-700 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    Information Management
                    <ChevronDown size={16} className={`transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isMobileServicesOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      <p className="px-4 py-1 text-xs font-bold uppercase tracking-wider text-sky-500">Reference Designation</p>
                      {col1.map((item) => (
                        <Link key={item.label} to={item.href as any} className="block px-4 py-2 text-sm text-slate-600 hover:text-sky-600 transition-colors">
                          {item.label}
                        </Link>
                      ))}
                      <p className="px-4 py-1 text-xs font-bold uppercase tracking-wider text-sky-500 mt-2">Information Management</p>
                      {col2.map((item) => (
                        <Link key={item.label} to={item.href as any} className="block px-4 py-2 text-sm text-slate-600 hover:text-sky-600 transition-colors">
                          {item.label}
                        </Link>
                      ))}
                      <p className="px-4 py-1 text-xs font-bold uppercase tracking-wider text-sky-500 mt-2">Tools and Management</p>
                      {col3.map((item) => (
                        <Link key={item.label} to={item.href as any} className="block px-4 py-2 text-sm text-slate-600 hover:text-sky-600 transition-colors">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link to="/blog" className="block px-4 py-3 text-slate-700 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-colors">
                  Insights
                </Link>
                <Link to="/about" className="block px-4 py-3 text-slate-700 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-colors">
                  About
                </Link>
                <Link to="/contact" className="block px-4 py-3 text-slate-700 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-colors">
                  Contact
                </Link>
                <div className="pt-4 flex flex-col gap-2">
                  <Link
                    to={'/service-training' as any}
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
                        <Link to={link.to as any} className="text-slate-400 hover:text-sky-400 text-sm transition-colors">
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
                        <Link
                          to={link.to as any}
                          className={`text-sm transition-colors ${link.label === 'Training & SME' ? 'text-amber-400 hover:text-amber-300' : 'text-slate-400 hover:text-sky-400'}`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li><a href="mailto:info@soedera.eu" className="hover:text-sky-400 transition-colors">info@soedera.eu</a></li>
                  <li><a href="https://www.soedera.eu" className="hover:text-sky-400 transition-colors">www.soedera.eu</a></li>
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
