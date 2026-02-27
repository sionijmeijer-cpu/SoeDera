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
import { useEffect, useMemo, useRef, useState } from 'react'
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

type TocItem = {
  id: string
  text: string
  level: 2 | 3
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[`~!@#$%^&*()=+\[{\]}\\|;:'\",.<>/?]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

function extractToc(markdown: string): TocItem[] {
  // Lightweight markdown heading extraction for ## and ###.
  // Avoid headings inside fenced code blocks.
  const lines = (markdown || '').split(/\r?\n/)
  const items: TocItem[] = []
  const counts = new Map<string, number>()

  let inFence = false
  for (const rawLine of lines) {
    const line = rawLine.trimEnd()

    // Toggle on fenced code blocks (``` or ~~~)
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence
      continue
    }
    if (inFence) continue

    const m = line.match(/^\s*(#{2,3})\s+(.+?)\s*$/)
    if (!m) continue

    const hashes = m[1]
    const level = hashes.length === 2 ? 2 : 3
    const text = m[2]
      .replace(/\s*#*\s*$/, '')
      .replace(/\[(.*?)\]\(.*?\)/g, '$1') // strip inline links
      .replace(/[*_`]/g, '')
      .trim()
    if (!text) continue

    const base = slugify(text)
    const next = (counts.get(base) || 0) + 1
    counts.set(base, next)
    const id = next === 1 ? base : `${base}-${next}`

    items.push({ id, text, level: level as 2 | 3 })
  }

  return items
}

function Toc({ items, activeId }: { items: TocItem[]; activeId: string | null }) {
  if (!items.length) return null

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    history.replaceState(null, '', `#${id}`)
  }

  return (
    <nav aria-label="Table of contents" className="text-sm">
      <div className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">
        On this page
      </div>

      <ul className="space-y-1">
        {items.map((it) => {
          const isActive = activeId === it.id
          return (
            <li key={it.id} className={it.level === 3 ? 'pl-4' : ''}>
              <button
                type="button"
                onClick={() => scrollTo(it.id)}
                className={
                  `w-full text-left rounded-lg px-2 py-1 transition ` +
                  (isActive
                    ? 'bg-blue-50 text-blue-700 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50')
                }
              >
                {it.text}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

function nodeToText(node: any): string {
  if (node == null) return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(nodeToText).join('')
  if (typeof node === 'object' && 'props' in node) return nodeToText((node as any).props?.children)
  return ''
}

function ArticlePage() {
  const { articleId } = Route.useParams()
  const article = blogPosts.find((post) => post.id === articleId && post.published)
  const [copied, setCopied] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)
  const contentRootRef = useRef<HTMLDivElement | null>(null)

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

  const tocItems = useMemo(() => extractToc(article.content), [article.content])

  useEffect(() => {
    // Highlight the currently visible section in the ToC.
    const root = contentRootRef.current
    if (!root) return

    const headingEls = Array.from(root.querySelectorAll<HTMLElement>('h2[id], h3[id]'))
    if (!headingEls.length) return

    const obs = new IntersectionObserver(
      (entries) => {
        // Pick the top-most intersecting entry.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0))
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id)
      },
      {
        root: null,
        // Activate a heading when it crosses the upper third of the viewport.
        rootMargin: '0px 0px -70% 0px',
        threshold: [0, 1],
      },
    )

    headingEls.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [articleId])

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
      <div className="max-w-[67rem] mx-auto px-4 sm:px-6">
        <div className="-mt-6 lg:grid lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10">
          <article className="bg-white rounded-2xl shadow-md">
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

              {/* MOBILE TOC (doesn't interfere with reading flow) */}
              {tocItems.length > 0 && (
                <div className="mt-8 lg:hidden">
                  <details className="rounded-xl border border-slate-200 bg-white shadow-sm">
                    <summary className="cursor-pointer select-none px-4 py-3 text-sm font-semibold text-slate-900">
                      On this page
                    </summary>
                    <div className="px-3 pb-3">
                      <Toc items={tocItems} activeId={activeId} />
                    </div>
                  </details>
                </div>
              )}
            </div>

            {/* BODY */}
            <div className="p-6 sm:p-10">
              {/** Keep ID generation consistent with extractToc() by reusing the same slug+counter scheme. */}
              {(() => {
                const headingCounts = new Map<string, number>()

                const nextHeadingId = (text: string) => {
                  const base = slugify(text)
                  const next = (headingCounts.get(base) || 0) + 1
                  headingCounts.set(base, next)
                  return next === 1 ? base : `${base}-${next}`
                }

                return (
                  <div
                    ref={contentRootRef}
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

                        h2: ({ children }) => {
                          const text = nodeToText(children).trim()
                          const id = nextHeadingId(text)
                          return (
                            <h2
                              id={id}
                              className="text-xl sm:text-2xl font-bold text-slate-900 mt-10 mb-4 scroll-mt-24"
                            >
                              {children}
                            </h2>
                          )
                        },

                        h3: ({ children }) => {
                          const text = nodeToText(children).trim()
                          const id = nextHeadingId(text)
                          return (
                            <h3
                              id={id}
                              className="text-lg sm:text-xl font-semibold text-slate-800 mt-8 mb-3 scroll-mt-24"
                            >
                              {children}
                            </h3>
                          )
                        },

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
                )
              })()}
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

          {/* DESKTOP TOC (sticky, always visible while reading) */}
          {tocItems.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <div className="rounded-2xl bg-white shadow-md border border-slate-100 p-5">
                  <Toc items={tocItems} activeId={activeId} />
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  )
}
