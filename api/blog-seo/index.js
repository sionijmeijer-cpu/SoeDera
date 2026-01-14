const BLOG_ARTICLES = {
  'document-management-best-practices': {
    title: 'Document Management Best Practices for Energy Infrastructure | SøDera',
    description: 'Discover essential document management strategies for energy infrastructure projects. Learn how proper documentation improves project efficiency, compliance, and asset lifecycle management.',
    image: 'https://i.imgur.com/lCNBEPI.jpeg',
    publishedTime: '2024-01-15T10:00:00Z',
    author: 'SøDera Team'
  },
  'iec-81346-implementation': {
    title: 'IEC 81346 Implementation Guide for Industrial Projects | SøDera',
    description: 'Complete guide to implementing IEC 81346 reference designation system in industrial and energy projects. Standardize your asset identification for better data management.',
    image: 'https://i.imgur.com/lCNBEPI.jpeg',
    publishedTime: '2024-01-20T10:00:00Z',
    author: 'SøDera Team'
  },
  'asset-data-management': {
    title: 'Asset Data Management in Energy Sector | SøDera',
    description: 'Learn how effective asset data management transforms energy infrastructure operations. From data collection to lifecycle optimization, master your asset information.',
    image: 'https://i.imgur.com/lCNBEPI.jpeg',
    publishedTime: '2024-01-25T10:00:00Z',
    author: 'SøDera Team'
  }
};

module.exports = async function (context, req) {
  const url = req.url || '';
  const articleMatch = url.match(/article=([^&]+)/);
  const articleId = articleMatch ? articleMatch[1] : (req.query?.article || '');
  
  context.log('Blog SEO Handler - URL:', url, 'Article:', articleId);
  
  if (!articleId || !BLOG_ARTICLES[articleId]) {
    context.res = {
      status: 302,
      headers: { 'Location': '/blog' }
    };
    return;
  }
  
  const article = BLOG_ARTICLES[articleId];
  const fullUrl = `https://www.soedera.eu/blog/${articleId}`;
  
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<link rel="canonical" href="${fullUrl}">
<meta property="og:url" content="${fullUrl}">
<meta property="og:type" content="article">
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
<title>${article.title}</title>
<meta name="description" content="${article.description}">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" type="image/png" href="https://i.imgur.com/TK8sXC2.png">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Article","headline":"${article.title.replace(' | SøDera', '')}","description":"${article.description}","image":"${article.image}","datePublished":"${article.publishedTime}","author":{"@type":"Organization","name":"SøDera"},"publisher":{"@type":"Organization","name":"SøDera"},"mainEntityOfPage":"${fullUrl}"}
</script>
</head>
<body>
<div id="root"></div>
<script type="module" src="/assets/index.js"></script>
<link rel="stylesheet" href="/assets/index.css">
</body>
</html>`;

  context.res = {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-cache'
    },
    body: html
  };
};
