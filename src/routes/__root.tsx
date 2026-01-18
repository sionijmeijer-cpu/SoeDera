import { createRootRoute, Link, Outlet, useLocation } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { ThemeProvider } from '@/components/theme-provider'

// Add flash and shimmer animations
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
  `
  document.head.appendChild(style)
}
import { useTheme } from '@/components/theme-provider'
import { ScrollHandler } from '@/components/ScrollHandler'
import { Mail, Linkedin, ChevronDown, Menu, X, FileText, Network, Building2, Package, FolderKanban } from 'lucide-react'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const location = useLocation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsServicesOpen(false)
  }, [location.pathname])

  const services = [
    { name: 'Document Management', href: '/service-document-management', icon: FileText },
    { name: 'Reference Designation (RDS)', href: '/service-rds', icon: Network },
    { name: 'BIM Services', href: '/service-bim', icon: Building2 },
    { name: 'Product Development', href: '/service-product-development', icon: Package },
    { name: 'Project Management', href: '/service-project-management', icon: FolderKanban },
  ]

  return (
    <ThemeProvider defaultTheme="system" storageKey="soedera-theme">
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors">
      <ScrollHandler />
      {/* Top Bar */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="w-0"></div>
            <div className="flex items-center gap-4">
              <a 
                href="mailto:info@soedera.eu" 
                className="flex items-center gap-2 text-slate-600 hover:text-sky-500 transition-colors"
              >
                <Mail size={14} />
                <span className="hidden sm:inline">info@soedera.eu</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/s%C3%B8dera" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-sky-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-blue-950/95 backdrop-blur-md shadow-lg border-b border-blue-900' 
          : 'bg-blue-950 border-b border-blue-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:text-sky-400 hover:bg-blue-900/50 transition-colors"
                      >
                        <service.icon size={16} className="text-sky-500" />
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
                Blog
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

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/book-assessment"
                className="inline-block px-5 py-2.5 bg-sky-500 text-white text-sm font-semibold rounded-lg shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:bg-sky-600 transition-all hover:scale-105 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 animate-shimmer" style={{
                  animation: 'shimmer 2.5s ease-in-out infinite'
                }}></div>
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
              <Link 
                to="/" 
                className="block px-4 py-3 text-gray-200 hover:text-sky-400 hover:bg-blue-900/50 rounded-lg transition-colors"
              >
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
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:text-sky-400 transition-colors"
                      >
                        <service.icon size={14} className="text-sky-500" />
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link 
                to="/blog" 
                className="block px-4 py-3 text-gray-200 hover:text-sky-400 hover:bg-blue-900/50 rounded-lg transition-colors"
              >
                Blog
              </Link>
              <Link 
                to="/about" 
                className="block px-4 py-3 text-gray-200 hover:text-sky-400 hover:bg-blue-900/50 rounded-lg transition-colors"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block px-4 py-3 text-gray-200 hover:text-sky-400 hover:bg-blue-900/50 rounded-lg transition-colors"
              >
                Contact
              </Link>
              <div className="pt-4">
                <Link
                  to="/book-assessment"
                  className="block w-full px-5 py-3 bg-sky-500 text-white text-center font-semibold rounded-lg hover:bg-sky-600 transition-colors hover:scale-105 animate-pulse hover:animate-none"
                >
                  Book Assessment
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1 text-center md:text-left">
              <Link to="/" className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                <img src="https://i.imgur.com/yAobb2F.png" alt="SøDera" className="h-20 w-auto" />
              </Link>
              <p className="text-gray-400 text-sm mb-6">
                Helping energy companies fix documentation, implement Reference Designation Systems (IEC 81346), and optimize asset data management.
              </p>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <a 
                  href="https://www.linkedin.com/company/s%C3%B8dera" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/5 hover:bg-blue-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-400 hover:text-sky-400 text-sm transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-sky-400 text-sm transition-colors">About Us</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-sky-400 text-sm transition-colors">Services</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-sky-400 text-sm transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-sky-400 text-sm transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                <li><Link to="/service-document-management" className="text-gray-400 hover:text-sky-400 text-sm transition-colors">Document Management</Link></li>
                <li><Link to="/service-rds" className="text-gray-400 hover:text-sky-400 text-sm transition-colors">Reference Designation (RDS)</Link></li>
                <li><Link to="/service-bim" className="text-gray-400 hover:text-sky-400 text-sm transition-colors">BIM Services</Link></li>
                <li><Link to="/service-product-development" className="text-gray-400 hover:text-sky-400 text-sm transition-colors">Product Development</Link></li>
                <li><Link to="/service-project-management" className="text-gray-400 hover:text-sky-400 text-sm transition-colors">Project Management</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-400">
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
                <li className="pt-2">
                  <span className="text-gray-500">Business Hours:</span><br />
                  Mon - Fri: 09:00 - 17:00 CET
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
              <p>© 2025 SøDera. All rights reserved.</p>

            </div>
          </div>
        </div>
      </footer>
    </div>
    </ThemeProvider>
  )
}
