// This script generates static HTML files for each blog post
// Run during build: node scripts/generate-blog-html.js

const fs = require('fs');
const path = require('path');

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

function generateHTML(articleId, article) {
  const fullUrl = `https://www.soedera.eu/blog/${articleId}`;
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${article.title}</title>
<meta name="description" content="${article.description}">
<link rel="canonical" href="${fullUrl}">
<link rel="icon" type="image/png" href="https://i.imgur.com/TK8sXC2.png">
<meta property="og:type" content="article">
<meta property="og:url" content="${fullUrl}">
<meta property="og:title" content="${article.title}">
<meta property="og:description" content="${article.description}">
<meta property="og:image" content="${article.image}">
<meta property="og:site_name" content="SøDera">
<meta property="article:published_time" content="${article.publishedTime}">
<meta property="article:author" content="${article.author}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="${fullUrl}">
<meta name="twitter:title" content="${article.title}">
<meta name="twitter:description" content="${article.description}">
<meta name="twitter:image" content="${article.image}">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "${article.title.replace(' | SøDera', '')}",
  "description": "${article.description}",
  "image": "${article.image}",
  "datePublished": "${article.publishedTime}",
  "author": {"@type": "Organization", "name": "SøDera"},
  "publisher": {"@type": "Organization", "name": "SøDera", "logo": {"@type": "ImageObject", "url": "https://i.imgur.com/yAobb2F.png"}},
  "mainEntityOfPage": {"@type": "WebPage", "@id": "${fullUrl}"}
}
</script>
<script>
// Redirect to SPA after meta tags are read by crawlers
if (!/bot|crawler|spider|linkedinbot|facebookexternalhit|twitterbot|slackbot/i.test(navigator.userAgent)) {
  // For regular users, load the SPA
}
</script>
<script type="module" crossorigin src="/assets/index.js"></script>
<link rel="stylesheet" crossorigin href="/assets/index.css">
</head>
<body>
<div id="root"></div>
</body>
</html>`;
}

// Create dist/blog directory
const blogDir = path.join(__dirname, '..', 'dist', 'blog');
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir, { recursive: true });
}

// Generate HTML for each article
for (const [articleId, article] of Object.entries(BLOG_ARTICLES)) {
  const articleDir = path.join(blogDir, articleId);
  if (!fs.existsSync(articleDir)) {
    fs.mkdirSync(articleDir, { recursive: true });
  }
  
  const html = generateHTML(articleId, article);
  const filePath = path.join(articleDir, 'index.html');
  fs.writeFileSync(filePath, html);
  console.log(`Generated: ${filePath}`);
}

console.log('Blog HTML generation complete!');
