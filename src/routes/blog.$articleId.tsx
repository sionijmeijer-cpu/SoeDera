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

  return (
    <div className="min-h-screen bg-gray-100 pb-12">
      <SEOHead {...seoProps} />

      {/* HERO */}
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
              className="w-full h-52 sm:h-60 object-cover"
            />
          </div>
        </div>
      </div>

      {/* ARTICLE */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <article className="bg-white rounded-2xl shadow-md -mt-6">

          {/* HEADER */}
          <div className="p-6 sm:p-10 border-b border-gray-100">
            <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
              {article.category}
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-6">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
              <Clock size={15} />
              <span>{article.readTime}</span>
              <span>•</span>
              <span>{article.date}</span>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          {/* BODY */}
          <div className="p-6 sm:p-10">
            <div className="prose prose-slate max-w-none prose-p:my-4">

              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{

                  blockquote: ({ children }) => (
                    <HighlightBox title="Key Insight">
                      {children}
                    </HighlightBox>
                  ),

                  h2: ({ children }) => (
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-10 mb-4">
                      {children}
                    </h2>
                  ),

                  h3: ({ children }) => (
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mt-8 mb-3">
                      {children}
                    </h3>
                  ),

                  p: ({ children }) => (
                    <p className="text-slate-700 leading-relaxed text-base">
                      {children}
                    </p>
                  ),

                  ul: ({ children }) => (
                    <ul className="space-y-2 my-4">{children}</ul>
                  ),

                  li: ({ children }) => (
                    <li className="flex items-start gap-3 text-slate-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{children}</span>
                    </li>
                  ),

                  // CENTERED IMAGES — NO FRAME
                  img: ({ alt, src }) => {
                    const size =
                      alt?.startsWith('small:')
                        ? 'max-w-md'
                        : alt?.startsWith('medium:')
                          ? 'max-w-xl'
                          : 'max-w-3xl'

                    const cleanAlt = alt?.replace(/^(small|medium):\s*/i, '') || ''

                    return (
                      <figure className="my-6 text-center">
                        <img
                          src={src}
                          alt={cleanAlt}
                          className={`mx-auto w-full ${size} object-contain`}
                        />
                        {cleanAlt && (
                          <figcaption className="mt-1 text-sm text-slate-500">
                            {cleanAlt}
                          </figcaption>
                        )}
                      </figure>
                    )
                  },

                  // CENTERED TABLES — CONTENT WIDTH
                  table: ({ children }) => (
                    <div className="my-8 flex justify-center">
                      <div className="overflow-x-auto">
                        <div className="inline-block min-w-max align-middle">
                          <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
                            <table className="table-auto border-collapse">
                              {children}
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  ),

                  thead: ({ children }) => (
                    <thead className="bg-slate-50">{children}</thead>
                  ),

                  tbody: ({ children }) => (
                    <tbody className="[&>tr:nth-child(even)]:bg-slate-50/60">
                      {children}
                    </tbody>
                  ),

                  th: ({ children }) => (
                    <th className="text-left text-xs font-semibold uppercase tracking-wider text-slate-700 px-4 py-3 border-b border-slate-200">
                      {children}
                    </th>
                  ),

                  td: ({ children }) => (
                    <td className="text-sm text-slate-700 px-4 py-3 border-b border-slate-200 align-top">
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

          {/* SHARE SECTION */}
          <div className="px-6 sm:px-10 pb-8 pt-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
            <p className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wider">
              Share this insight
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={shareOnLinkedIn}
                className="flex items-center justify-center w-10 h-10 bg-white rounded-lg hover:bg-blue-50 transition shadow-sm"
              >
                <Linkedin size={18} className="text-blue-600" />
              </button>

              <button
                onClick={shareOnTwitter}
                className="flex items-center justify-center w-10 h-10 bg-white rounded-lg hover:bg-gray-100 transition shadow-sm"
              >
                <Twitter size={18} className="text-slate-600" />
              </button>

              <button
                onClick={shareByEmail}
                className="flex items-center justify-center w-10 h-10 bg-white rounded-lg hover:bg-gray-100 transition shadow-sm"
              >
                <Mail size={18} className="text-slate-600" />
              </button>

              <button
                onClick={copyLink}
                className="flex items-center justify-center w-10 h-10 bg-white rounded-lg hover:bg-gray-100 transition shadow-sm"
              >
                {copied ? (
                  <Check size={18} className="text-green-500" />
                ) : (
                  <Link2 size={18} className="text-slate-600" />
                )}
              </button>
            </div>
          </div>

        </article>
      </div>
    </div>
  )
}
