import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import { Calendar, Clock, ArrowLeft, User, Linkedin, Twitter, Mail, Link2, Check, Tag, FileText, Layers, FolderKanban, Package } from 'lucide-react'
import { useState } from 'react'
import { blogPosts } from '../data/blogPosts'

export const Route = createFileRoute('/blog/$articleId')({
  component: ArticlePage,
})

function ArticlePage() {
  const { articleId } = Route.useParams()
  const article = blogPosts.find(post => post.id === articleId)

  // Use article's own image for OG sharing
  const getOGImage = () => {
    // Use the article's featured image for LinkedIn/social sharing
    return article?.image || 'https://i.imgur.com/lCNBEPI.jpeg'
  }
  
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="text-center p-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Article Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">We couldn't find the article you're looking for.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  // Hooks must come AFTER early returns are no longer possible
  const [copied, setCopied] = useState(false)

  // Set SEO meta tags for this article
  const seoProps = {
    title: article.title,
    description: article.excerpt,
    keywords: `${article.category}, energy documentation, SøDera`,
    canonicalUrl: `https://www.soedera.eu/blog/${articleId}`,
    ogImage: getOGImage(),
    ogType: 'article' as const,
    articlePublishedTime: article.date,
    articleAuthor: article.author
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'RDS': return <Tag size={14} />
      case 'Document Management': return <FileText size={14} />
      case 'BIM': return <Layers size={14} />
      case 'Project Management': return <FolderKanban size={14} />
      case 'Product Development': return <Package size={14} />
      default: return <FileText size={14} />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'RDS': return 'bg-emerald-500'
      case 'Document Management': return 'bg-blue-500'
      case 'BIM': return 'bg-purple-500'
      case 'Project Management': return 'bg-amber-500'
      case 'Product Development': return 'bg-rose-500'
      default: return 'bg-gray-500'
    }
  }

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href)
    const title = encodeURIComponent(article.title)
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`, '_blank', 'width=600,height=400')
  }

  const shareOnTwitter = () => {
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent(article.title)
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=400')
  }

  const shareByEmail = () => {
    const subject = encodeURIComponent(article.title)
    const body = encodeURIComponent(`Check out this article: ${window.location.href}`)
    window.location.href = `mailto:?subject=${subject}&body=${body}`
  }

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const relatedArticles = blogPosts
    .filter(post => post.category === article.category && post.id !== article.id)
    .slice(0, 3)

  // Parse content into sections
  const parseContent = (content: string) => {
    const lines = content.split('\n').filter(line => line.trim())
    const sections: { type: 'heading' | 'subheading' | 'paragraph' | 'list', text?: string, items?: string[] }[] = []
    let currentList: string[] = []

    lines.forEach(line => {
      const trimmed = line.trim()
      
      if (trimmed.startsWith('## ')) {
        if (currentList.length) {
          sections.push({ type: 'list', items: currentList })
          currentList = []
        }
        sections.push({ type: 'heading', text: trimmed.replace('## ', '') })
      } else if (trimmed.startsWith('### ')) {
        if (currentList.length) {
          sections.push({ type: 'list', items: currentList })
          currentList = []
        }
        sections.push({ type: 'subheading', text: trimmed.replace('### ', '') })
      } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        currentList.push(trimmed.replace(/^[-*]\s*\*?\*?/, '').replace(/\*?\*?$/, ''))
      } else if (trimmed) {
        if (currentList.length) {
          sections.push({ type: 'list', items: currentList })
          currentList = []
        }
        sections.push({ type: 'paragraph', text: trimmed })
      }
    })

    if (currentList.length) {
      sections.push({ type: 'list', items: currentList })
    }

    return sections
  }

  const contentSections = parseContent(article.content)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <SEOHead {...seoProps} />
      {/* Compact Header */}
      <div className={`${getCategoryColor(article.category)} py-4 px-4`}>
        <div className="max-w-5xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-xs mb-2 transition-colors">
            <ArrowLeft size={12} /> Back to Blog
          </Link>
          
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
              {getCategoryIcon(article.category)}
              {article.category}
            </span>
          </div>
          
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1.5 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-2.5 text-white/80 text-xs">
            <span className="flex items-center gap-1.5">
              <User size={14} /> {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {article.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-3">
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Article Content */}
          <article className="flex-1 min-w-0">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
              {/* Featured Image */}
              {article.image && (
                <div className="w-full">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 sm:h-64 lg:h-80 object-cover"
                  />
                </div>
              )}

              <div className="p-3 sm:p-4">
              {/* Excerpt */}
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-snug mb-3 pb-3 border-b border-gray-200 dark:border-slate-700 font-medium">
                {article.excerpt}
              </p>

              {/* Article Body */}
              <div className="prose prose-gray dark:prose-invert max-w-none">
                {contentSections.map((section, index) => (
                  <div key={index} className="mb-2">
                    {section.type === 'heading' && (
                      <h2 className="text-base font-bold text-gray-900 dark:text-white mt-3 mb-1.5">
                        {section.text}
                      </h2>
                    )}
                    {section.type === 'subheading' && (
                      <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mt-2 mb-1.5">
                        {section.text}
                      </h3>
                    )}
                    {section.type === 'paragraph' && (
                      <p className="text-gray-700 dark:text-gray-300 leading-snug text-xs sm:text-sm">
                        {section.text}
                      </p>
                    )}
                    {section.type === 'list' && section.items && (
                      <ul className="space-y-1 mb-2 ml-0">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
                            <span className={`w-1.5 h-1.5 rounded-full ${getCategoryColor(article.category)} mt-2 flex-shrink-0`}></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* PDF Download Section */}
              {article.pdfDownload && (
                <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 rounded-xl border border-blue-200 dark:border-slate-500">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Download Free PDF Guide</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-300 mt-0.5">Get the complete guide with checklists and templates</p>
                    </div>
                    <a 
                      href={article.pdfDownload} 
                      download 
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2 flex-shrink-0"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                      Download PDF
                    </a>
                  </div>
                </div>
              )}

              {/* Author Bio */}
              <div className="mt-3 pt-3 border-t border-gray-200 dark:border-slate-700">
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full ${getCategoryColor(article.category)} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}>
                    {article.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-xs">{article.author}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 leading-tight">
                      Expert consultant specializing in {article.category.toLowerCase()} and industrial best practices.
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-60 flex-shrink-0">
            <div className="lg:sticky lg:top-20 space-y-3">
              {/* Share Box */}
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-3">
                <h3 className="font-semibold text-gray-900 dark:text-white text-xs mb-1.5">Share</h3>
                <div className="flex gap-2">
                  <button onClick={shareOnLinkedIn} className="flex-1 p-2 bg-[#0077b5] hover:bg-[#006699] text-white rounded-lg transition-colors" title="LinkedIn">
                    <Linkedin size={16} className="mx-auto" />
                  </button>
                  <button onClick={shareOnTwitter} className="flex-1 p-2 bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white rounded-lg transition-colors" title="Twitter">
                    <Twitter size={16} className="mx-auto" />
                  </button>
                  <button onClick={shareByEmail} className="flex-1 p-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors" title="Email">
                    <Mail size={16} className="mx-auto" />
                  </button>
                  <button onClick={copyLink} className={`flex-1 p-2 rounded-lg transition-colors ${copied ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-600'}`} title="Copy">
                    {copied ? <Check size={16} className="mx-auto" /> : <Link2 size={16} className="mx-auto" />}
                  </button>
                </div>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-xs mb-1.5">Related</h3>
                  <div className="space-y-1.5">
                    {relatedArticles.map(post => (
                      <Link key={post.id} to="/blog/$articleId" params={{ articleId: post.id }} className="block group">
                        <div className="p-1.5 rounded-lg bg-gray-50 dark:bg-slate-700/50 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">
                          <h4 className="font-medium text-gray-900 dark:text-white text-xs group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <span className="text-xs text-gray-500 dark:text-gray-400 leading-none">{post.readTime}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Box */}
              <div className={`${getCategoryColor(article.category)} rounded-lg p-3 text-white`}>
                <h3 className="font-semibold text-xs mb-0.5">Need Expert Help?</h3>
                <p className="text-xs text-white/90 mb-2 leading-tight">Let us help you implement best practices.</p>
                <Link to="/contact" className="block w-full py-1.5 bg-white text-gray-900 rounded-lg text-xs font-medium text-center hover:bg-gray-100 transition-colors">
                  Get in Touch
                </Link>
              </div>

              {/* Back to Blog */}
              <Link to="/blog" className="flex items-center justify-center gap-1.5 w-full py-1.5 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors text-xs font-medium">
                <ArrowLeft size={12} /> View All Articles
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
