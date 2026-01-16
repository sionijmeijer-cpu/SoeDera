import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import { blogPosts } from '../data/blogPosts'
import { Calendar, Clock, User, ChevronRight, FileText, Settings, Building2, Briefcase, Package, Download } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/blog')({
  component: BlogPage,
})

const categories = [
  { id: 'all', label: 'All Articles', icon: FileText },
  { id: 'RDS', label: 'RDS', icon: Settings },
  { id: 'Document Management', label: 'Document Management', icon: FileText },
  { id: 'BIM', label: 'BIM', icon: Building2 },
  { id: 'Project Management', label: 'Project Management', icon: Briefcase },
  { id: 'Product Development', label: 'Product Development', icon: Package },
]

function BlogPage() {
  SEOHead({
    title: 'Blog - Energy Documentation & RDS Insights',
    description: 'Expert insights on Reference Designation Systems (IEC 81346), document management, BIM, and asset data best practices for the energy sector.',
    keywords: 'RDS blog, IEC 81346 guide, document management tips, energy sector insights, asset data articles',
    canonicalUrl: 'https://www.soedera.eu/blog'
  })

  const [selectedCategory, setSelectedCategory] = useState('all')
  const navigate = useNavigate()

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const handleCardClick = (articleId: string) => {
    console.log('Navigating to article:', articleId)
    navigate({ to: '/blog/$articleId', params: { articleId } })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden" style={{
        backgroundImage: 'url(https://i.imgur.com/HcE9N83.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-white font-semibold text-sm uppercase tracking-wider">Insights & Resources</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
            Expert Knowledge
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-400"> Hub</span>
          </h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Expert perspectives on RDS, BIM, document management, and industry best practices
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`
                    flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium
                    transition-all duration-200
                    ${selectedCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-md dark:bg-blue-700'
                      : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-slate-700 shadow'
                    }
                  `}
                >
                  <Icon size={14} />
                  <span>{cat.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredPosts.map((post) => {
            const CategoryIcon = categories.find(c => c.id === post.category)?.icon || FileText
            return (
              <div 
                key={post.id}
                onClick={() => handleCardClick(post.id)}
                className="cursor-pointer group h-full bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden border border-gray-100 dark:border-slate-700 hover:-translate-y-1"
              >
                {/* Blog Image */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <CategoryIcon size={14} className="text-white" />
                      <span className="text-white text-xs font-semibold uppercase tracking-wide">
                        {post.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-white/90 text-xs">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Category Badge - removed, now in image overlay */}
                {/*<div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 px-4 py-2.5 flex items-center justify-between">
                  */}

                <div className="p-4">
                  {/* Title */}
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 pt-3 border-t border-gray-100 dark:border-slate-700">
                    <div className="flex items-center gap-1">
                      <User size={12} />
                      <span className="truncate">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <div className="mt-3">
                    {post.pdfDownload ? (
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:gap-2 transition-all">
                        Read Article
                        <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                      </span>
                      <a
                        href={post.pdfDownload}
                        download
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold rounded transition-colors"
                      >
                        <Download size={12} />
                        PDF
                      </a>
                    </div>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:gap-2 transition-all">
                      Read Article
                      <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-10">
            <FileText size={40} className="mx-auto text-gray-400 dark:text-gray-600 mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              No articles found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Try selecting a different category
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
