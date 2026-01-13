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
  articleAuthor = 'SøDera'
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title immediately
    document.title = `${title} | SøDera`

    // Helper to update or create meta tag
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

    // Update standard meta tags
    updateMeta('description', description)
    if (keywords) updateMeta('keywords', keywords)
    
    // Update Open Graph tags (LinkedIn reads these FIRST)
    updateMeta('og:type', ogType, true)
    updateMeta('og:title', title, true)
    updateMeta('og:description', description, true)
    updateMeta('og:image', ogImage, true)
    updateMeta('og:image:width', '1200', true)
    updateMeta('og:image:height', '630', true)
    updateMeta('og:image:type', 'image/jpeg', true)
    updateMeta('og:site_name', 'SøDera', true)
    if (canonicalUrl) {
      updateMeta('og:url', canonicalUrl, true)
    }
    
    // Twitter Card tags
    updateMeta('twitter:card', 'summary_large_image', true)
    updateMeta('twitter:title', title, true)
    updateMeta('twitter:description', description, true)
    updateMeta('twitter:image', ogImage, true)
    updateMeta('twitter:site', '@soedera', true)
    
    // Article-specific tags (for blog posts)
    if (ogType === 'article' && articlePublishedTime) {
      updateMeta('article:published_time', articlePublishedTime, true)
      updateMeta('article:author', articleAuthor, true)
      updateMeta('article:section', 'Technology', true)
    }

    // Update canonical link
    if (canonicalUrl) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = canonicalUrl
    }
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, articlePublishedTime, articleAuthor])

  return null
}
