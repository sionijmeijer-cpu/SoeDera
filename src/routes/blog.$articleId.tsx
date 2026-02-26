import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import { Clock, ArrowLeft, Linkedin, Twitter, Mail, Link2, Check, Download } from 'lucide-react'
import { useState } from 'react'
import { blogPosts } from '../data/blogPosts'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import HighlightBox from '@/components/HighlightBox'

export const Route = createFileRoute('/blog/$articleId')({
  component: ArticlePage,
})

function ArticlePage() {
  const { articleId } = Route.useParams()

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

  const relatedArticles = blogPosts
    .filter((post) => post.published)
    .filter((post) => post.category === article.category && post.id !== article.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-100 pb-8">
      <SEOHead {...seoProps} />

      {/* Hero */}
      <div className="relative bg-gray-200">
        <div className="h-[104px]" />

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
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 sm:h-56 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
        <article className="bg-white rounded-xl shadow-sm overflow-hidden -mt-4">

          {/* Header */}
          <div className="p-5 sm:p-8 border-b border-gray-100">
            <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              {article.category}
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-5 leading-tight">
              {article.title}
            </h1>

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

            <p className="text-lg text-slate-600 leading-relaxed mt-6">
              {article.excerpt}
            </p>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-8 bg-white">
            <div className="prose prose-slate max-w-none prose-p:my-3 prose-hr:my-6">

              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{

                  blockquote: ({ children }) => (
                    <HighlightBox title="Key Insight">
                      {children}
                    </HighlightBox>
                  ),

                  h2: ({ children }) => (
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-8 mb-3 pb-2 border-b border-gray-200">
                      {children}
                    </h2>
                  ),

                  h3: ({ children }) => (
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mt-6 mb-2">
                      {children}
                    </h3>
                  ),

                  p: ({ children }) => (
                    <p className="text-slate-700 leading-relaxed text-base mb-3">
                      {children}
                    </p>
                  ),

                  ul: ({ children }) => (
                    <ul className="space-y-2 my-3">{children}</ul>
                  ),

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
                      <figure className="my-6 flex justify-center">
                        <img
                          src={src}
                          alt={cleanAlt}
                          className={`w-full ${size} mx-auto rounded-xl shadow-sm border border-gray-100 object-contain`}
                        />
                        {cleanAlt && (
                          <figcaption className="text-center text-sm text-slate-500 mt-2">
                            {cleanAlt}
                          </figcaption>
                        )}
                      </figure>
                    )
                  },

                  // ✅ Corrected Table Logic
                  table: ({ children }) => (
                    <div className="my-6">
                      <div className="overflow-x-auto">
                        <div className="inline-block min-w-max align-middle">
                          <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                            <table className="table-auto border-collapse">
                              {children}
                            </table>
                          </div>
                        </div>
                      </div>

                      <p className="mt-2 text-center text-xs text-slate-400 sm:hidden">
                        Swipe to view full table
                      </p>
                    </div>
                  ),

                  thead: ({ children }) => <thead className="bg-slate-50">{children}</thead>,
                  tbody: ({ children }) => <tbody className="[&>tr:nth-child(even)]:bg-slate-50/60">{children}</tbody>,

                  th: ({ children }) => (
                    <th className="text-left text-xs font-semibold uppercase tracking-wider text-slate-700 px-4 py-2 border-b border-slate-200 align-top">
                      {children}
                    </th>
                  ),

                  td: ({ children }) => (
                    <td className="text-sm text-slate-700 px-4 py-2 border-b border-slate-200 align-top">
                      {children}
                    </td>
                  ),

                  tr: ({ children }) => (
                    <tr className="last:[&>td]:border-b-0">{children}</tr>
                  ),
                }}
              >
                {article.content}
              </ReactMarkdown>

            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
