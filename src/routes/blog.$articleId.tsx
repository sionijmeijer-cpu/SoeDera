import { createFileRoute, Link } from '@tanstack/react-router'
import { SEOHead } from '@/components/SEOHead'
import {
  Clock,
  ArrowLeft,
  Linkedin,
  Twitter,
  Mail,
  Link2,
  Check,
  Download,
  User,
} from 'lucide-react'
import { useState } from 'react'
import { blogPosts } from '../data/blogPosts'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import HighlightBox from '@/components/HighlightBox'

// Extract an italic paragraph immediately following a table and render it as a table caption.
// Usage in markdown:
//   | ...table... |
//   *This becomes the table caption.*
function remarkTableCaptions() {
  return (tree: any) => {
    const children = tree?.children
    if (!Array.isArray(children)) return

    const stringify = (n: any): string => {
      if (!n) return ''
      if (typeof n.value === 'string') return n.value
      if (Array.isArray(n.children)) return n.children.map(stringify).join('')
      return ''
    }

    for (let i = 0; i < children.length - 1; i++) {
      const node = children[i]
      const next = children[i + 1]

      if (node?.type !== 'table' || next?.type !== 'paragraph') continue
      if (!Array.isArray(next.children) || next.children.length !== 1) continue

      const only = next.children[0]
      if (only?.type !== 'emphasis') continue

      const caption = stringify(only).trim()
      if (!caption) continue

      node.data = node.data || {}
      node.data.caption = caption

      // Remove the caption paragraph so it doesn't render as normal text.
      children.splice(i + 1, 1)
    }
  }
}

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

            <div className="flex items-center gap-4 text-sm text-slate-500 mb-6 flex-wrap">
              <span>{article.date}</span>

              {article.author && (
                <span className="flex items-center gap-1">
                  <User size={15} />
                  <span>{article.author}</span>
                </span>
              )}

              <span className="flex items-center gap-1">
                <Clock size={15} />
                <span>{article.readTime}</span>
              </span>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          {/* BODY */}
          <div className="p-6 sm:p-10">
            <div
              className="
                prose prose-slate max-w-none
                prose-p:my-4
                prose-figure:my-5
                prose-img:my-0
                prose-figcaption:mt-1
                prose-figcaption:leading-snug
              "
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkTableCaptions]}
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
                    <p className="text-slate-700 leading-relaxed text-base my-4">
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
                    const altText = alt || ''
                    const prefixMatch = altText.match(/^\s*(small|medium|large)\s*:\s*/i)
                    const prefix = (prefixMatch?.[1] || '').toLowerCase()

                    const size =
                      prefix === 'small'
                        ? 'max-w-md'
                        : prefix === 'medium'
                          ? 'max-w-xl'
                          : 'max-w-3xl'

                    const cleanAlt = altText.replace(/^\s*(small|medium|large)\s*:\s*/i, '').trim()

                    return (
                      <figure className="text-center">
                        <img
                          src={src}
                          alt={cleanAlt}
                          className={`mx-auto w-full ${size} object-contain`}
                        />
                        {cleanAlt && (
                          <figcaption className="text-sm text-slate-500">
                            {cleanAlt}
                          </figcaption>
                        )}
                      </figure>
                    )
                  },

                  // CENTERED TABLES — CONTENT WIDTH
                  table: ({ node, children }) => {
                    const caption = (node as any)?.data?.caption as string | undefined

                    return (
                      <figure className="my-8 flex flex-col items-center">
                        <div className="w-full flex justify-center">
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

                        {caption && (
                          <figcaption className="mt-2 text-sm text-slate-500 italic text-center max-w-2xl">
                            {caption}
                          </figcaption>
                        )}
                      </figure>
                    )
                  },

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
                className="flex items-center justify-center w-10 h-10 bg-white rounded-lg hover:bg-slate-100 transition shadow-sm"
              >
                <Twitter size={18} className="text-slate-800" />
              </button>

              <button
                onClick={shareByEmail}
                className="flex items-center justify-center w-10 h-10 bg-white rounded-lg hover:bg-slate-100 transition shadow-sm"
              >
                <Mail size={18} className="text-slate-800" />
              </button>

              <button
                onClick={copyLink}
                className="flex items-center gap-2 px-4 h-10 bg-white rounded-lg hover:bg-slate-100 transition shadow-sm text-sm font-medium"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-green-600" />
                    Copied
                  </>
                ) : (
                  <>
                    <Link2 size={16} className="text-slate-700" />
                    Copy link
                  </>
                )}
              </button>

              {article.pdfDownload && (
                <a
                  href={article.pdfDownload}
                  download
                  className="flex items-center gap-2 px-4 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm text-sm font-medium ml-auto"
                >
                  <Download size={16} />
                  Download PDF
                </a>
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
