import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import { Clock, ArrowLeft, Linkedin, Twitter, Mail, Link2, Check, Download } from 'lucide-react'
import { useState } from 'react'
import { blogPosts } from '../data/blogPosts'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const Route = createFileRoute('/blog/$articleId')({
  component: ArticlePage,
})

function ArticlePage() {
  const { articleId } = Route.useParams()

  // ✅ Only allow published articles to be viewed
  const article = blogPosts.find((post) => post.id === articleId && post.published)

  const [copied, setCopied] = useState(false)

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-6">
          <h1 className="text-2xl font-bold text-slate-900 mb-3">Article Not Found</h1>
          <p className="text-slate-600 mb-6">This article isn’t published yet, or the link is incorrect.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg font-medium"
          >
            <ArrowLeft size={16} /> Back to Insights
          </Link>
        </div>
      </div>
    )
  }

  const seoProps = {
    title: `${article.title} | SøDera Insights`,
    description: article.excerpt,
    keywords: `${article.category}, energy documentation, SøDera`,
    canonicalUrl: `https://www.soedera.eu/blog/${articleId}`,
    ogImage: article.image || 'https://i.imgur.com/lCNBEPI.jpeg',
    ogType: 'article' as const,
    articlePublishedTime: article.date,
    articleAuthor: article.author,
  }

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href)
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=600,height=400')
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

  // ✅ Related articles should also only show published posts
  const relatedArticles = blogPosts
    .filter((post) => post.published)
    .filter((post) => post.category === article.category && post.id !== article.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-100 pb-8">
      <SEOHead {...seoProps} />

      {/* Hero Section with smaller Image */}
      <div className="relative bg-gray-200">
        {/* Mobile padding for fixed header */}
        <div className="h-[104px]" />

        {/* Back button */}
        <div className="absolute top-6 left-4 sm:left-6 z-20">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-lg hover:bg-gray-50 transition-all shadow-sm text-sm font-medium"
          >
            <ArrowLeft size={16} /> Back to Insights
          </Link>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-6">
          <div className="rounded-xl overflow-hidden shadow-md">
            <img src={article.image} alt={article.title} className="w-full h-48 sm:h-56 object-cover" />
          </div>
        </div>
      </div>

      {/* Article Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
        {/* Main Content Card */}
        <article className="bg-white rounded-xl shadow-sm overflow-hidden -mt-4">
          {/* Header Section */}
          <div className="p-5 sm:p-8 border-b border-gray-100">
            {/* Category Badge */}
            <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              {article.category}
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-5 leading-tight">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {article.author.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-slate-900">{article.author}</p>
                  <p className="text-xs">{article.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={15} className="text-slate-400" />
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Excerpt */}
            <p className="text-lg text-slate-600 leading-relaxed mt-6">{article.excerpt}</p>
          </div>

          {/* Article Body */}
          <div className="p-5 sm:p-8 bg-white">
            <div className="prose prose-slate max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline underline-offset-4 hover:text-blue-700 hover:decoration-2 transition-colors"
                    >
                      {children}
                    </a>
                  ),

                  h2: ({ children }) => (
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-gray-200">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mt-8 mb-3">{children}</h3>
                  ),
                  p: ({ children }) => <p className="text-slate-700 leading-relaxed text-base mb-4">{children}</p>,

                  ul: ({ children }) => <ul className="space-y-3 my-4">{children}</ul>,
                  li: ({ children }) => (
                    <li className="flex items-start gap-3 text-slate-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{children}</span>
                    </li>
                  ),

                  img: ({ alt, src }) => {
                    const size =
                      alt?.startsWith('small:')
                        ? 'max-w-md'
                        : alt?.startsWith('medium:')
                        ? 'max-w-xl'
                        : 'max-w-3xl'

                    const cleanAlt = alt?.replace(/^(small|medium):\s*/i, '') || ''

                    return (
                      <figure className="my-6">
                        <img
                          src={src}
                          alt={cleanAlt}
                          loading="lazy"
                          decoding="async"
                          className={`w-full ${size} mx-auto rounded-xl shadow-sm border border-gray-100 object-contain`}
                        />
                        {cleanAlt ? (
                          <figcaption className="text-center text-sm text-slate-500 mt-2">{cleanAlt}</figcaption>
                        ) : null}
                      </figure>
                    )
                  },

                  table: ({ children }) => (
                    <div className="my-8 -mx-5 sm:mx-0 overflow-x-auto">
                      <div className="flex justify-center px-5 sm:px-0">
                        <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                          <table className="w-max table-auto border-collapse">{children}</table>
                        </div>
                      </div>
                    </div>
                  ),
                  thead: ({ children }) => <thead className="bg-slate-50">{children}</thead>,
                  tbody: ({ children }) => (
                    <tbody className="[&>tr:nth-child(even)]:bg-slate-50/60">{children}</tbody>
                  ),
                  th: ({ children }) => (
                    <th className="whitespace-nowrap text-left text-xs font-semibold uppercase tracking-wider text-slate-700 px-4 py-2.5 border-b border-slate-200">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="whitespace-nowrap text-sm text-slate-700 px-4 py-2.5 border-b border-slate-200 align-top">
                      {children}
                    </td>
                  ),
                  tr: ({ children }) => <tr className="last:[&>td]:border-b-0">{children}</tr>,
                }}
              >
                {article.content}
              </ReactMarkdown>
            </div>

            {/* PDF Download Section */}
            {article.pdfDownload && (
              <div className="mt-10 p-5 bg-blue-50 rounded-xl border border-blue-100">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-slate-900 mb-1">Download Free PDF Guide</h3>
                    <p className="text-slate-600 text-sm">Get the complete guide with checklists and templates</p>
                  </div>
                  <a
                    href={article.pdfDownload}
                    download
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-sm hover:shadow-md"
                  >
                    <Download size={16} />
                    Download PDF
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Share Section */}
          <div className="px-5 sm:px-8 pb-6 pt-5 border-t border-gray-100 bg-gray-50">
            <p className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wider">Share this insight</p>
            <div className="flex items-center gap-2">
              <button
                onClick={shareOnLinkedIn}
                className="flex items-center justify-center w-10 h-10 bg-white rounded-lg hover:bg-blue-50 transition-all shadow-sm"
                title="Share on LinkedIn"
              >
                <Linkedin size={18} className="text-blue-600" />
              </button>
              <button
                onClick={shareOnTwitter}
                className="flex items-center justify-center w-10 h-10 bg-white rounded-lg hover:bg-gray-100 transition-all shadow-sm"
                title="Share on Twitter"
              >
                <Twitter size={18} className="text-slate-600" />
              </button>
              <button
                onClick={shareByEmail}
                className="flex items-center justify-center w-10 h-10 bg-white rounded-lg hover:bg-gray-100 transition-all shadow-sm"
                title="Share via Email"
              >
                <Mail size={18} className="text-slate-600" />
              </button>
              <button
                onClick={copyLink}
                className="flex items-center justify-center w-10 h-10 bg-white rounded-lg hover:bg-gray-100 transition-all shadow-sm"
                title="Copy link"
              >
                {copied ? <Check size={18} className="text-green-500" /> : <Link2 size={18} className="text-slate-600" />}
              </button>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">Related Insights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedArticles.map((post) => (
                <Link
                  key={post.id}
                  to="/blog/$articleId"
                  params={{ articleId: post.id }}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <span className="inline-block px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold mb-2">
                      {post.category}
                    </span>
                    <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm mt-1.5 line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
