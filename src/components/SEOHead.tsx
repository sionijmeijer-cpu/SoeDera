import { useEffect } from 'react'

interface SEOHeadProps {
  title: string
  description: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  articlePublishedTime?: string
  articleAuthor?: string
}

export function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = 'https://i.imgur.com/lCNBEPI.jpeg',
  ogType = 'website',
  articlePublishedTime,
  articleAuthor = 'SøDera',
}: SEOHeadProps) {
  useEffect(() => {
    // ── Document title ──────────────────────────────────────────────────────
    document.title = title.includes('SøDera') ? title : `${title} | SøDera`

    // ── Helper: update or create a <meta> tag ───────────────────────────────
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name'
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attr, name)
        document.head.appendChild(meta)
      }
      meta.content = content
    }

    // ── Standard meta ───────────────────────────────────────────────────────
    updateMeta('description', description)
    if (keywords) updateMeta('keywords', keywords)

    // ── Open Graph (LinkedIn reads these first) ─────────────────────────────
    updateMeta('og:type', ogType, true)
    updateMeta('og:title', title, true)
    updateMeta('og:description', description, true)
    updateMeta('og:image', ogImage, true)
    updateMeta('og:image:width', '1200', true)
    updateMeta('og:image:height', '630', true)
    updateMeta('og:image:type', 'image/jpeg', true)
    updateMeta('og:site_name', 'SøDera', true)
    if (canonicalUrl) updateMeta('og:url', canonicalUrl, true)

    // ── Twitter Card ────────────────────────────────────────────────────────
    updateMeta('twitter:card', 'summary_large_image', true)
    updateMeta('twitter:title', title, true)
    updateMeta('twitter:description', description, true)
    updateMeta('twitter:image', ogImage, true)
    updateMeta('twitter:site', '@soedera', true)

    // ── Article-specific Open Graph ─────────────────────────────────────────
    if (ogType === 'article' && articlePublishedTime) {
      updateMeta('article:published_time', articlePublishedTime, true)
      updateMeta('article:author', articleAuthor, true)
      updateMeta('article:section', 'Technology', true)
    }

    // ── Canonical link ──────────────────────────────────────────────────────
    if (canonicalUrl) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = canonicalUrl
    }

    // ── Article JSON-LD Schema (Google E-E-A-T + Rich Results) ─────────────
    // Remove any existing article schema first to avoid duplicates
    const existingSchema = document.getElementById('article-jsonld')
    if (existingSchema) existingSchema.remove()

    if (ogType === 'article') {
      // Map author names to their LinkedIn profiles
      const authorProfiles: Record<string, string> = {
        'Søren Christensen': 'https://www.linkedin.com/in/s%C3%B8ren-christensen',
        'Sylvia Awoudu': 'https://www.linkedin.com/in/sylvia-awoudu',
        'Søren Christensen & Sylvia Awoudu': 'https://www.soedera.eu/about',
      }

      const authorUrl = authorProfiles[articleAuthor] ?? 'https://www.soedera.eu/about'

      const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        image: [ogImage],
        datePublished: articlePublishedTime ?? new Date().toISOString().split('T')[0],
        dateModified: articlePublishedTime ?? new Date().toISOString().split('T')[0],
        author: {
          '@type': 'Person',
          name: articleAuthor,
          url: authorUrl,
          worksFor: {
            '@type': 'Organization',
            name: 'SøDera',
            url: 'https://www.soedera.eu',
          },
        },
        publisher: {
          '@type': 'Organization',
          name: 'SøDera',
          url: 'https://www.soedera.eu',
          logo: {
            '@type': 'ImageObject',
            url: 'https://i.imgur.com/yAobb2F.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl ?? 'https://www.soedera.eu/blog',
        },
        inLanguage: 'en',
        about: {
          '@type': 'Thing',
          name: 'Energy Documentation and Asset Management',
        },
        isPartOf: {
          '@type': 'Blog',
          name: 'SøDera Insights',
          url: 'https://www.soedera.eu/blog',
        },
      }

      const script = document.createElement('script')
      script.id = 'article-jsonld'
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(schema, null, 2)
      document.head.appendChild(script)
    } else {
      // Remove article schema if navigating away from an article
      const old = document.getElementById('article-jsonld')
      if (old) old.remove()
    }
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, articlePublishedTime, articleAuthor])

  return null
}
