const BLOG_ARTICLES = {
  'document-management-best-practices': {
    title: 'Document Management Best Practices for Energy Infrastructure | SøDera',
    description: 'Discover essential document management strategies for energy infrastructure projects. Learn how proper documentation improves project efficiency, compliance, and asset lifecycle management.',
    image: 'https://www.soedera.eu/soedera-og-image.png',
    publishedTime: '2024-01-15T10:00:00Z',
    author: 'SøDera Team'
  },
  'iec-81346-implementation': {
    title: 'IEC 81346 Implementation Guide for Industrial Projects | SøDera',
    description: 'Complete guide to implementing IEC 81346 reference designation system in industrial and energy projects. Standardize your asset identification for better data management.',
    image: 'https://www.soedera.eu/soedera-og-image.png',
    publishedTime: '2024-01-20T10:00:00Z',
    author: 'SøDera Team'
  },
  'asset-data-management': {
    title: 'Asset Data Management in Energy Sector | SøDera',
    description: 'Learn how effective asset data management transforms energy infrastructure operations. From data collection to lifecycle optimization, master your asset information.',
    image: 'https://www.soedera.eu/soedera-og-image.png',
    publishedTime: '2024-01-25T10:00:00Z',
    author: 'SøDera Team'
  }
};

const CRAWLERS = [
  'linkedinbot',
  'facebookexternalhit',
  'twitterbot',
  'slackbot',
  'telegrambot',
  'whatsapp',
  'discordbot',
  'googlebot',
  'bingbot'
];

function isCrawler(userAgent) {
  if (!userAgent) return false;
  const ua = userAgent.toLowerCase();
  return CRAWLERS.some(crawler => ua.includes(crawler));
}

function generateHTML(articleId, article, fullUrl) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${article.title}</title>
<meta name="description" content="${article.description}">
<link rel="canonical" href="${fullUrl}">
<meta property="og:type" content="article">
<meta property="og:url" content="${fullUrl}">
<meta property="og:title" content="${article.title}">
<meta property="og:description" content="${article.description}">
<meta property="og:image" content="${article.image}">
<meta property="og:site_name" content="SøDera">
<meta property="article:published_time" content="${article.publishedTime}">
<meta property="article:author" content="${article.author}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${article.title}">
<meta name="twitter:description" content="${article.description}">
<meta name="twitter:image" content="${article.image}">
</head>
<body>
<h1>${article.title}</h1>
<p>${article.description}</p>
<p>Loading full article...</p>
<script>window.location.reload();</script>
</body>
</html>`;
}

module.exports = async function (context, req) {
  const userAgent = req.headers['user-agent'] || '';
  const path = req.url || context.bindingData.path || '';
  
  // Extract article ID from path
  const match = path.match(/\/blog\/([^/?]+)/);
  const articleId = match ? match[1] : null;
  
  // Check if this is a crawler and we have article data
  if (isCrawler(userAgent) && articleId && BLOG_ARTICLES[articleId]) {
    const article = BLOG_ARTICLES[articleId];
    const fullUrl = `https://www.soedera.eu/blog/${articleId}`;
    const html = generateHTML(articleId, article, fullUrl);
    
    context.res = {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache'
      },
      body: html
    };
    return;
  }
  
  // For non-crawlers or unknown articles, let SWA handle it normally
  context.res = {
    status: 302,
    headers: {
      'Location': path || '/index.html'
    }
  };
};
