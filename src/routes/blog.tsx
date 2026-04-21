import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import { blogPosts } from '../data/blogPosts'
import { Clock, User, ArrowRight } from 'lucide-react'
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

  const visiblePosts = blogPosts.filter((post) => post.published)

  const filteredPosts =
    selectedCategory === 'all'
      ? visiblePosts
      : visiblePosts.filter((post) => post.category === selectedCategory)

  const featuredPost = filteredPosts[0]
  const secondPost = filteredPosts[1]
  const thirdPost = filteredPosts[2]
  const remainingPosts = filteredPosts.slice(3)

  const handleCardClick = (articleId: string) => {
    navigate({ to: '/blog/$articleId', params: { articleId } })
  }

  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <>
      <style>{`
        .nyt-serif {
          font-family: Georgia, 'Times New Roman', serif;
        }
        .nyt-sans {
          font-family: 'Helvetica Neue', Arial, sans-serif;
        }
        .nyt-rule {
          border-top: 3px double #1a1a1a;
        }
        .nyt-rule-thin {
          border-top: 1px solid #d1d5db;
        }
        .nyt-card:hover .nyt-headline {
          text-decoration: underline;
          text-decoration-color: #374151;
        }
        .category-pill-active {
          background: #1e3a5f;
          color: white;
        }
        .category-pill {
          background: white;
          color: #374151;
          border: 1px solid #d1d5db;
        }
        .category-pill:hover {
          border-color: #1e3a5f;
          color: #1e3a5f;
        }
      `}</style>

      <div className="min-h-screen bg-[#f7f4ef]">
        {/* Spacer for fixed header */}
        <div className="h-[104px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Masthead ── */}
          <div className="pt-8 pb-4 text-center border-b-4 border-double border-gray-900 mb-1">
            <p className="nyt-sans text-xs uppercase tracking-[0.25em] text-gray-500 mb-2">
              SøDera · Energy Documentation & RDS Expertise
            </p>
            <h1 className="nyt-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-none mb-3">
              Insights
            </h1>
            <p className="nyt-sans text-xs text-gray-500 uppercase tracking-widest">
              {today}
            </p>
          </div>

          {/* ── Thin rule ── */}
          <div className="border-t border-gray-400 mb-6" />

          {/* ── Category filter ── */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`
                  nyt-sans text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-200
                  ${selectedCategory === cat.id ? 'category-pill-active' : 'category-pill'}
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-24">
              <p className="nyt-serif text-2xl text-gray-500 italic">
                No articles in this category yet.
              </p>
            </div>
          )}

          {filteredPosts.length > 0 && (
            <>
              {/* ── TOP SECTION: Featured + Two secondary ── */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-0">

                {/* Secondary left (if exists) */}
                {secondPost && (
                  <div
                    className="nyt-card lg:col-span-3 lg:border-r border-gray-300 lg:pr-6 pb-6 lg:pb-0 border-b lg:border-b-0 mb-6 lg:mb-0 cursor-pointer"
                    onClick={() => handleCardClick(secondPost.id)}
                  >
                    <div className="nyt-sans text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700 mb-3 pb-2 border-b border-gray-300">
                      {secondPost.category}
                    </div>
                    <div className="aspect-[4/3] overflow-hidden rounded mb-3">
                      <img
                        src={secondPost.image}
                        alt={secondPost.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="nyt-serif nyt-headline text-lg font-bold text-gray-900 leading-snug mb-2">
                      {secondPost.title}
                    </h3>
                    <p className="nyt-sans text-sm text-gray-600 leading-relaxed line-clamp-3 mb-3">
                      {secondPost.excerpt}
                    </p>
                    <div className="nyt-sans text-xs text-gray-400 flex items-center gap-2 flex-wrap">
                      {secondPost.author && (
                        <span className="flex items-center gap-1">
                          <User size={11} /> {secondPost.author}
                        </span>
                      )}
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} /> {secondPost.readTime}
                      </span>
                    </div>
                  </div>
                )}

                {/* Featured centre */}
                {featuredPost && (
                  <div
                    className="nyt-card lg:col-span-6 lg:px-8 pb-6 lg:pb-0 border-b lg:border-b-0 mb-6 lg:mb-0 cursor-pointer lg:border-r border-gray-300"
                    onClick={() => handleCardClick(featuredPost.id)}
                  >
                    <div className="nyt-sans text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700 mb-3 pb-2 border-b border-gray-300">
                      {featuredPost.category} · <span className="text-orange-600">Featured</span>
                    </div>
                    <h2 className="nyt-serif nyt-headline text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="nyt-serif text-base text-gray-600 italic leading-relaxed mb-4 border-l-4 border-orange-400 pl-4">
                      {featuredPost.excerpt}
                    </p>
                    <div className="aspect-[16/9] overflow-hidden rounded mb-4">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="nyt-sans text-xs text-gray-400 flex items-center gap-3 flex-wrap">
                      {featuredPost.author && (
                        <span className="flex items-center gap-1 font-semibold text-gray-600">
                          <User size={11} /> {featuredPost.author}
                        </span>
                      )}
                      <span>·</span>
                      <span>{featuredPost.date}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} /> {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                )}

                {/* Secondary right (if exists) */}
                {thirdPost && (
                  <div
                    className="nyt-card lg:col-span-3 lg:pl-6 pb-6 lg:pb-0 border-b lg:border-b-0 mb-6 lg:mb-0 cursor-pointer"
                    onClick={() => handleCardClick(thirdPost.id)}
                  >
                    <div className="nyt-sans text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700 mb-3 pb-2 border-b border-gray-300">
                      {thirdPost.category}
                    </div>
                    <div className="aspect-[4/3] overflow-hidden rounded mb-3">
                      <img
                        src={thirdPost.image}
                        alt={thirdPost.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="nyt-serif nyt-headline text-lg font-bold text-gray-900 leading-snug mb-2">
                      {thirdPost.title}
                    </h3>
                    <p className="nyt-sans text-sm text-gray-600 leading-relaxed line-clamp-3 mb-3">
                      {thirdPost.excerpt}
                    </p>
                    <div className="nyt-sans text-xs text-gray-400 flex items-center gap-2 flex-wrap">
                      {thirdPost.author && (
                        <span className="flex items-center gap-1">
                          <User size={11} /> {thirdPost.author}
                        </span>
                      )}
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} /> {thirdPost.readTime}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* ── Section divider ── */}
              {remainingPosts.length > 0 && (
                <div className="nyt-rule mt-8 mb-8 flex items-center gap-4">
                  <span className="nyt-sans text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500 whitespace-nowrap pr-4">
                    More from SøDera
                  </span>
                </div>
              )}

              {/* ── Remaining articles grid ── */}
              {remainingPosts.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mb-12">
                  {remainingPosts.map((post, index) => (
                    <div
                      key={post.id}
                      className={`
                        nyt-card cursor-pointer pb-6 mb-6
                        ${index < remainingPosts.length - 1 ? 'sm:border-r border-gray-300 sm:pr-6 sm:mr-0' : ''}
                        ${index > 0 ? 'sm:pl-6' : ''}
                        border-b border-gray-200
                      `}
                      onClick={() => handleCardClick(post.id)}
                    >
                      <div className="nyt-sans text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700 mb-3 pb-2 border-b border-gray-300">
                        {post.category}
                      </div>
                      <div className="aspect-[3/2] overflow-hidden rounded mb-3">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="nyt-serif nyt-headline text-base font-bold text-gray-900 leading-snug mb-2">
                        {post.title}
                      </h3>
                      <p className="nyt-sans text-xs text-gray-600 leading-relaxed line-clamp-3 mb-3">
                        {post.excerpt}
                      </p>
                      <div className="nyt-sans text-xs text-gray-400 flex items-center gap-2 flex-wrap">
                        {post.author && (
                          <span className="flex items-center gap-1">
                            <User size={10} /> {post.author}
                          </span>
                        )}
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock size={10} /> {post.readTime}
                        </span>
                      </div>
                      <button
                        className="nyt-sans mt-3 text-xs font-semibold text-blue-700 flex items-center gap-1 hover:gap-2 transition-all"
                        onClick={(e) => { e.stopPropagation(); handleCardClick(post.id) }}
                      >
                        Read Article <ArrowRight size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* ── Newsletter strip ── */}
              <div className="border-t-4 border-double border-gray-900 mt-4 pt-8 pb-12 text-center">
                <p className="nyt-sans text-[10px] uppercase tracking-[0.25em] text-gray-500 mb-2">
                  Stay Informed
                </p>
                <h3 className="nyt-serif text-3xl font-bold text-gray-900 mb-3">
                  The SøDera Briefing
                </h3>
                <p className="nyt-sans text-sm text-gray-600 max-w-md mx-auto mb-6">
                  Expert analysis on RDS, document management, and asset data strategy — delivered to your inbox.
                </p>
                <a
                  href="/contact"
                  className="nyt-sans inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white text-sm font-semibold uppercase tracking-wider hover:bg-gray-700 transition-colors"
                >
                  Get in Touch <ArrowRight size={14} />
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
