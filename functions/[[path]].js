// Cloudflare Pages Function for serving SEO-optimized HTML to crawlers

const blogArticles = {
  'document-management-best-practices': {
    title: 'Document Management Best Practices for Energy Infrastructure',
    description: 'Implement effective document management systems to streamline operations and ensure compliance in energy infrastructure projects.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=630&fit=crop',
    publishDate: '2024-01-15',
  },
  'iec-81346-implementation': {
    title: 'IEC 81346 Implementation Guide for Energy Companies',
    description: 'Learn how to implement Reference Designation Systems (IEC 81346) to standardize your asset data management.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop',
    publishDate: '2024-01-10',
  },
  'asset-data-management': {
    title: 'Asset Data Management Strategy for Energy Operations',
    description: 'Develop a comprehensive asset data management strategy to improve operational efficiency and reduce downtime.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop',
    publishDate: '2024-01-05',
  },
  'future-of-document-management-construction': {
    title: 'The Future of Document Management in Construction',
    description: 'Explore how digital transformation and automation are reshaping document management practices in the construction and energy sectors.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=630&fit=crop',
    publishDate: '2024-02-01',
  },
  'rds-pp-offshore-wind': {
    title: 'RDS-PP for Offshore Wind: A Complete Guide',
    description: 'Master the Reference Designation System for Power Plants (RDS-PP) specifically tailored for offshore wind farm applications.',
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1200&h=630&fit=crop',
    publishDate: '2024-02-15',
  },
  'bim-energy-sector': {
    title: 'BIM Implementation in the Energy Sector',
    description: 'Discover best practices for implementing Building Information Modeling in energy infrastructure projects.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=630&fit=crop',
    publishDate: '2024-03-01',
  },
};

const CRAWLER_USER_AGENTS = [
  'linkedinbot',
  'facebookexternalhit',
  'twitterbot',
  'whatsapp',
  'googlebot',
  'bingbot',
  'discordbot',
  'telegrambot',
  'slackbot',
];

function isCrawler(userAgent) {
  if (!userAgent) return false;
  const ua = userAgent.toLowerCase();
  return CRAWLER_USER_AGENTS.some(agent => ua.includes(agent));
}

function generateBlogHTML(articleId, article) {
  const url = `https://www.soedera.eu/blog/${articleId}`;
  
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<link rel="canonical" href="${url}" />
<title>${article.title} | SøDera</title>
<meta name="description" content="${article.description}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${url}" />
<meta property="og:title" content="${article.title}" />
<meta property="og:description" content="${article.description}" />
<meta property="og:image" content="${article.image}" />
<meta property="og:site_name" content="SøDera" />
<meta property="article:published_time" content="${article.publishDate}" />
<meta property="article:author" content="SøDera" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="${url}" />
<meta name="twitter:title" content="${article.title}" />
<meta name="twitter:description" content="${article.description}" />
<meta name="twitter:image" content="${article.image}" />
<link rel="icon" type="image/png" href="https://i.imgur.com/TK8sXC2.png" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body>
<div id="root"></div>
<script type="module" src="/src/main.tsx"></script>
</body>
</html>`;
}

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;
  const userAgent = request.headers.get('user-agent') || '';

  // Only intercept blog URLs for crawlers
  if (pathname.startsWith('/blog/') && isCrawler(userAgent)) {
    const articleId = pathname.replace('/blog/', '').replace(/\/$/, '');
    const article = blogArticles[articleId];

    if (article) {
      const html = generateBlogHTML(articleId, article);
      return new Response(html, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'public, max-age=3600',
        },
      });
    }
  }

  // For non-crawler requests or non-blog URLs, continue to static files
  return next();
}
