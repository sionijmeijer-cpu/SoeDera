import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import { blogPosts } from '../data/blogPosts'
import { ArrowRight, Clock } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/blog')({
  component: InsightsPage,
})

const categories = [
  { id: 'all', label: 'All Insights' },
  { id: 'RDS', label: 'RDS' },
  { id: 'Document Management', label: 'Document Management' },
  { id: 'BIM', label: 'BIM' },
  { id: 'Project Management', label: 'Project Management' },
  { id: 'Product Development', label: 'Product Development' },
]

function InsightsPage() {
  SEOHead({
    title: 'Insights - Energy Documentation & RDS Expertise | SøDera',
    description:
      'Expert insights on Reference Designation Systems (IEC 81346), document management, BIM, and asset data best practices for the energy sector.',
    keywords:
      'RDS insights, IEC 81346 guide, document management, energy sector, asset data',
    canonicalUrl: 'https://www.soedera.eu/blog',
  })

  const [selectedCategory, setSelectedCategory] = useState('all')
  const navigate = useNavigate()

  // ✅ Only show published posts
  const visiblePosts = blogPosts.filter((post) => post.published)

  // ✅ Keep your existing category filtering logic, but apply it to visible posts
  const filteredPosts =
    selectedCategory === 'all'
      ? visiblePosts
      : visiblePosts.filter((post) => post.category === selectedCategory)

  // Get featured post (first one) and rest
  const featuredPost = filteredPosts[0]
  const otherPosts = filteredPosts.slice(1)

  const handleCardClick = (articleId: string) => {
    navigate({ to: '/blog/$articleId', params: { articleId } })
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Spacer for fixed header */}
      <div className="h-[104px]" />

      {/* Hero Section - Light gray */}
      <section className="bg-gray-200 pt-8 pb-10 sm:pt-12 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Knowledge Hub
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              Insights & Expertise
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Deep dives into RDS, BIM, document management, and best practices
              for the energy and infrastructure sectors.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Category Filter */}
        <div className="bg-white rounded-xl shadow-sm p-2 mb-6 overflow-x-auto">
          <div className="inline-flex flex-nowrap sm:flex-wrap gap-1 min-w-max sm:min-w-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${
                    selectedCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-gray-100'
                  }
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        {featuredPost && (
          <article
            onClick={() => handleCardClick(featuredPost.id)}
            className="cursor-pointer group mb-6"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[380px] overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content Side */}
                <div className="p-5 sm:p-6 lg:p-10 flex flex-col justify-center bg-white">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full uppercase tracking-wide">
                      {featuredPost.category}
                    </span>
                    <span className="text-slate-400 text-sm">Featured</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-slate-600 text-base leading-relaxed mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span>{featuredPost.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Other Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 pb-8">
          {otherPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => handleCardClick(post.id)}
              className="cursor-pointer group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-white/95 text-slate-700 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow bg-white">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <Clock size={24} className="text-slate-400" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              No articles found
            </h3>
            <p className="text-slate-600">Try selecting a different category</p>
          </div>
        )}
      </div>
    </div>
  )
}
