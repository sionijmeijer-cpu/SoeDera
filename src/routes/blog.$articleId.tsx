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
  level: 2
  index: number
}

// Easy controls you can edit yourself later
const PAGE_MAX_WIDTH = 'max-w-[94rem]'
const RIGHT_RAIL_WIDTH = '320px'
const HERO_TOP_SPACE_CLASS = 'h-[36px] sm:h-[44px]'
const TABLE_CELL_MAX_WIDTH = '14rem'
const TABLE_CELL_LINE_CLAMP = 2

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[`~!@#$%^&*()=+\[{\]}\\|;:'\",.<>/?]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

function extractToc(markdown: string): TocItem[] {
  // Extract ## only.
  // Avoid headings inside fenced code blocks.
  const lines = (markdown || '').split(/\r?\n/)
  const items: TocItem[] = []
  const counts = new Map<string, number>()

  let inFence = false
  for (const rawLine of lines) {
    const line = rawLine.trimEnd()

    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence
      continue
    }
    if (inFence) continue

    const m = line.match(/^\s*(##)\s+(.+?)\s*$/)
    if (!m) continue

    const level = 2
    const text = m[2]
      .replace(/\s*#*\s*$/, '')
      .replace(/\[(.*?)\]\(.*?\)/g, '$1')
      .replace(/[*_`]/g, '')
      .trim()
    if (!text) continue

    const base = slugify(text)
    const next = (counts.get(base) || 0) + 1
    counts.set(base, next)
    const id = next === 1 ? base : `${base}-${next}`

    items.push({
      id,
      text,
      level,
      index: items.length + 1,
    })
  }

  return items
}

function nodeToText(node: any): string {
  if (node == null) return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(nodeToText).join('')
  if (typeof node === 'object' && 'props' in node) return nodeToText((node as any).props?.children)
  return ''
}

function clamp01(v: number) {
  if (v < 0) return 0
  if (v > 1) return 1
  return v
}

function TocProgressCircle({
  value,
  index,
  isActive,
}: {
  value: number
  index: number
  isActive: boolean
}) {
  const size = 34
  const stroke = 3
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const dash = c
  const offset = c * (1 - clamp01(value))

  return (
    <div className="relative w-[34px] h-[34px] flex items-center justify-center shrink-0">
      <svg width={size} height={size} className="absolute inset-0">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
          className="stroke-slate-200"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
          strokeDasharray={dash}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={isActive || value > 0 ? 'stroke-emerald-700' : 'stroke-slate-200'}
          style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
        />
      </svg>

      <div
        className={
          'text-xs font-semibold ' +
          (isActive ? 'text-emerald-800' : value >= 1 ? 'text-slate-700' : 'text-slate-500')
        }
      >
        {index}
      </div>
    </div>
  )
}

function Toc({
  items,
  activeId,
  progressById,
}: {
  items: TocItem[]
  activeId: string | null
  progressById: Record<string, number>
}) {
  if (!items.length) return null

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    history.replaceState(null, '', `#${id}`)
  }

  return (
    <nav aria-label="Table of contents" className="text-sm">
      <div className="text-xs uppercase tracking-[0.18em] text-slate-600 mb-4">
        Table of contents
      </div>

      <ol className="space-y-3">
        {items.map((it) => {
          const isActive = activeId === it.id
          const progress = progressById[it.id] ?? 0

          return (
            <li key={it.id}>
              <button
                type="button"
                onClick={() => scrollTo(it.id)}
                className="w-full text-left flex items-start gap-3 group"
              >
                <TocProgressCircle value={progress} index={it.index} isActive={isActive} />
                <div className="pt-[2px]">
                  <div
                    className={
                      'text-[13px] ' +
                      (isActive
                        ? 'font-semibold text-emerald-800'
                        : 'font-medium text-slate-700 group-hover:text-slate-900')
                    }
                  >
                    {it.text}
                  </div>
                </div>
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

function SharePanel({
  onLinkedIn,
  onTwitter,
  onEmail,
  onCopy,
  copied,
}: {
  onLinkedIn: () => void
  onTwitter: () => void
  onEmail: () => void
  onCopy: () => void
  copied: boolean
}) {
  return (
    <div className="rounded-2xl bg-white shadow-md border border-slate-100 p-6">
      <div className="text-xs uppercase tracking-[0.18em] text-slate-600 mb-4">
        Share
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <button
          onClick={onLinkedIn}
          className="flex items-center justify-center w-10 h-10 bg-white rounded-lg hover:bg-blue-50 transition shadow-sm border border-slate-100"
          aria-label="Share on LinkedIn"
        >
          <Linkedin size={18} className="text-blue-600" />
        </button>

        <button
          onClick={onTwitter}
          className="flex items-center justify-center w-10 h-10 bg-white rounded-lg hover:bg-slate-100 transition shadow-sm border border-slate-100"
          aria-label="Share on X"
        >
          <Twitter size={18} className="text-slate-800" />
        </button>

        <button
          onClick={onEmail}
          className="flex items-center justify-center w-10 h-10 bg-white rounded-lg hover:bg-slate-100 transition shadow-sm border border-slate-100"
          aria-label="Share by email"
        >
          <Mail size={18} className="text-slate-800" />
        </button>

        <button
          onClick={onCopy}
          className="flex items-center gap-2 px-4 h-10 bg-white rounded-lg hover:bg-slate-100 transition shadow-sm border border-slate-100 text-sm font-medium"
        >
          {copied ? (
            <>
              <Check size={16} className="text-green-600" />
              Copied
            </>
          ) : (
            <>
              <Link2 size={16} className="text-slate-700" />
              Copy
            </>
          )}
        </button>
      </div>
    </div>
  )
}

function RelatedPanel({
  related,
}: {
  related: Array<{ id: string; title: string; category: string; date: string; readTime: string }>
}) {
  if (related.length === 0) return null

  return (
    <div className="rounded-2xl bg-white shadow-md border border-slate-100 p-6">
      <div className="text-xs uppercase tracking-[0.18em] text-slate-600 mb-4">
        Related articles
      </div>

      <div className="space-y-4">
        {related.map((p) => (
          <Link
            key={p.id}
            to="/blog/$articleId"
            params={{ articleId: p.id }}
            className="block group"
          >
            <div className="text-sm font-semibold text-slate-900 group-hover:text-emerald-800 transition">
              {p.title}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              {p.category} • {p.date} • {p.readTime}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function ArticlePage() {
  const { articleId } = Route.useParams()
  const article = blogPosts.find((post) => post.id === articleId && post.published)

  const [copied, setCopied] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)
  const [progressById, setProgressById] = useState<Record<string, number>>({})

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

  const tocItems = useMemo(() => extractToc(article.content), [article.content])

  const related = useMemo(() => {
    return blogPosts
      .filter((p) => p.published && p.id !== article.id && p.category === article.category)
      .slice(0, 3)
      .map((p) => ({
        id: p.id,
        title: p.title,
        category: p.category,
        date: p.date,
        readTime: p.readTime,
      }))
  }, [article.id, article.category])

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

  useEffect(() => {
    const root = contentRootRef.current
    if (!root || tocItems.length === 0) return

    const offsetPx = 140
    let raf = 0

    const compute = () => {
      const ids = tocItems.map((t) => t.id)
      const els = ids
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[]
      if (els.length === 0) return

      const starts = els.map((el) => el.getBoundingClientRect().top + window.scrollY)
      const docEnd = document.documentElement.scrollHeight
      const ends = starts.map((s, i) => (i < starts.length - 1 ? starts[i + 1] - 1 : docEnd))

      const y = window.scrollY + offsetPx

      let activeIdx = 0
      for (let i = 0; i < starts.length; i++) {
        if (y >= starts[i]) activeIdx = i
      }

      const nextActiveId = els[activeIdx]?.id ?? null
      setActiveId(nextActiveId)

      const nextProgress: Record<string, number> = {}
      for (let i = 0; i < els.length; i++) {
        const id = els[i].id
        if (i < activeIdx) nextProgress[id] = 1
        else if (i > activeIdx) nextProgress[id] = 0
        else {
          const span = Math.max(1, ends[i] - starts[i])
          nextProgress[id] = clamp01((y - starts[i]) / span)
        }
      }
      setProgressById(nextProgress)
    }

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(compute)
    }

    const onResize = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(compute)
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [articleId, tocItems])

  const heroPatternSvg =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cg fill='none' stroke='%2394a3b8' stroke-opacity='0.18'%3E%3Cpath d='M0 70h140M70 0v140'/%3E%3Cpath d='M0 0l140 140M140 0L0 140' stroke-opacity='0.10'/%3E%3C/g%3E%3C/svg%3E"

  const tableCellClampStyle =
    TABLE_CELL_LINE_CLAMP > 0
      ? {
          display: '-webkit-box',
          WebkitLineClamp: TABLE_CELL_LINE_CLAMP,
          WebkitBoxOrient: 'vertical' as const,
          overflow: 'hidden',
        }
      : undefined

  return (
    <div className="min-h-screen bg-gray-100 pb-12">
      <SEOHead {...seoProps} />

      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(226,232,240,0.95), rgba(241,245,249,1)), url("${heroPatternSvg}")`,
          backgroundSize: 'cover, 240px 240px',
          backgroundPosition: 'center, top left',
        }}
      >
        <div className={HERO_TOP_SPACE_CLASS} />

        <div className="absolute top-4 left-4 sm:left-6 z-20">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur text-slate-900 rounded-lg hover:bg-white transition-all shadow-sm text-sm font-medium"
          >
            <ArrowLeft size={16} /> Back to Insights
          </Link>
        </div>

        <div className={`${PAGE_MAX_WIDTH} mx-auto px-4 sm:px-6 pt-2 pb-4`}>
          <div className={`lg:grid lg:grid-cols-[minmax(0,1fr)_${RIGHT_RAIL_WIDTH}] lg:gap-10`}>
            <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-6 sm:p-10">
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

            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      <div className={`${PAGE_MAX_WIDTH} mx-auto px-4 sm:px-6 mt-4`}>
        <div className={`lg:grid lg:grid-cols-[minmax(0,1fr)_${RIGHT_RAIL_WIDTH}] lg:gap-10`}>
          <article className="bg-white rounded-2xl shadow-md border border-slate-100">
            <div className="p-6 sm:p-10 pb-0">
              <div className="rounded-xl overflow-hidden shadow-sm border border-slate-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 sm:h-72 object-cover"
                />
              </div>

              <div className="mt-6 lg:hidden space-y-4">
                {tocItems.length > 0 && (
                  <details className="rounded-xl border border-slate-200 bg-white shadow-sm">
                    <summary className="cursor-pointer select-none px-4 py-3 text-sm font-semibold text-slate-900">
                      Table of contents
                    </summary>
                    <div className="px-4 pb-4">
                      <Toc items={tocItems} activeId={activeId} progressById={progressById} />
                    </div>
                  </details>
                )}

                <SharePanel
                  onLinkedIn={shareOnLinkedIn}
                  onTwitter={shareOnTwitter}
                  onEmail={shareByEmail}
                  onCopy={copyLink}
                  copied={copied}
                />

                <RelatedPanel related={related} />
              </div>
            </div>

            <div className="p-6 sm:p-10">
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
                              className="text-xl sm:text-2xl font-bold text-slate-900 mt-10 mb-4 scroll-mt-28"
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
                              className="text-lg sm:text-xl font-semibold text-slate-800 mt-8 mb-3 scroll-mt-28"
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

                        table: ({ node, children }) => {
                          const caption = (node as any)?.data?.caption as string | undefined

                          return (
                            <figure className="my-8 flex flex-col items-center">
                              <div className="w-full flex justify-center">
                                <div className="w-full overflow-x-auto">
                                  <div className="w-full align-middle">
                                    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
                                      <table className="w-full table-fixed border-collapse">
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
                          <th className="px-4 py-3 border-b border-slate-200 text-left text-xs font-semibold uppercase tracking-wider text-slate-700 align-top">
                            <div
                              className="whitespace-normal break-words"
                              style={{ maxWidth: TABLE_CELL_MAX_WIDTH, ...tableCellClampStyle }}
                            >
                              {children}
                            </div>
                          </th>
                        ),

                        td: ({ children }) => (
                          <td className="px-4 py-3 border-b border-slate-200 align-top text-sm text-slate-700">
                            <div
                              className="whitespace-normal break-words"
                              style={{ maxWidth: TABLE_CELL_MAX_WIDTH, ...tableCellClampStyle }}
                            >
                              {children}
                            </div>
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

            {article.pdfDownload && (
              <div className="px-6 sm:px-10 pb-8">
                <a
                  href={article.pdfDownload}
                  download
                  className="inline-flex items-center gap-2 px-4 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm text-sm font-medium"
                >
                  <Download size={16} />
                  Download PDF
                </a>
              </div>
            )}
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-4">
              {tocItems.length > 0 && (
                <div className="rounded-2xl bg-white shadow-md border border-slate-100 p-6">
                  <Toc items={tocItems} activeId={activeId} progressById={progressById} />
                </div>
              )}

              <SharePanel
                onLinkedIn={shareOnLinkedIn}
                onTwitter={shareOnTwitter}
                onEmail={shareByEmail}
                onCopy={copyLink}
                copied={copied}
              />

              <RelatedPanel related={related} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
