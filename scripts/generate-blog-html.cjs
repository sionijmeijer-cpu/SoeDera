/**
 * Pre-generate static HTML files for blog posts with correct meta tags
 * This runs after Vite build to create SEO-friendly pages
 */

const fs = require('fs');
const path = require('path');

// All blog articles - must match src/data/blogPosts.ts
const BLOG_ARTICLES = {
  'future-of-document-management-construction': {
    title: 'The Future of Document Management in Construction | SøDera',
    description: 'Explore how digital transformation and automation are reshaping document management practices in the construction and energy sectors.',
    image: 'https://i.imgur.com/lCNBEPI.jpeg',
    publishedTime: '2026-01-10T10:00:00Z',
    author: 'Søren Christensen'
  },
  'essential-guide-document-control-systems': {
    title: 'Essential Guide to Document Control Systems | SøDera',
    description: 'A comprehensive guide to implementing and optimizing document control systems for engineering and infrastructure projects.',
    image: 'https://i.imgur.com/lCNBEPI.jpeg',
    publishedTime: '2026-01-08T10:00:00Z',
    author: 'Sylvia Awoudu'
  },
  'rds-compliance-what-you-need-to-know': {
    title: 'RDS Compliance: What You Need to Know | SøDera',
    description: 'Understanding regulatory requirements and industry standards for Reference Designation Systems in energy and infrastructure projects.',
    image: 'https://i.imgur.com/lCNBEPI.jpeg',
    publishedTime: '2026-01-05T10:00:00Z',
    author: 'Søren Christensen'
  },
  'understanding-iec-81346-guide': {
    title: 'Understanding IEC 81346: A Practical Guide | SøDera',
    description: 'Reference Designation Systems are the backbone of effective documentation in the energy sector. This guide explores the fundamentals of IEC 81346.',
    image: 'https://i.imgur.com/lCNBEPI.jpeg',
    publishedTime: '2025-12-15T10:00:00Z',
    author: 'Søren Christensen'
  },
  'document-management-best-practices': {
    title: 'Document Management Best Practices for Energy Infrastructure | SøDera',
    description: 'Learn how leading energy companies are improving their documentation practices to enhance efficiency and compliance.',
    image: 'https://i.imgur.com/lCNBEPI.jpeg',
    publishedTime: '2025-10-22T10:00:00Z',
    author: 'Sylvia Awoudu'
  },
  'bim-energy-infrastructure': {
    title: 'Applying BIM Methods in Energy Infrastructure Projects | SøDera',
    description: 'Building Information Modeling is transforming how energy infrastructure is designed, built, and operated.',
    image: 'https://i.imgur.com/lCNBEPI.jpeg',
    publishedTime: '2025-09-18T10:00:00Z',
    author: 'SøDera Team'
  }
};

// Get the directory of the script
const scriptDir = __dirname;
const distDir = path.join(scriptDir, '..', 'dist');
const blogDir = path.join(distDir, 'blog');

// Create dist/blog directory
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir, { recursive: true });
}

// Read the built index.html to get the correct asset filenames
const indexPath = path.join(distDir, 'index.html');
let assetJs = '/assets/index.js';
let assetCss = '/assets/index.css';

if (fs.existsSync(indexPath)) {
  const indexHtml = fs.readFileSync(indexPath, 'utf-8');
  const jsMatch = indexHtml.match(/src="(\/assets\/index-[^"]+\.js)"/);
  const cssMatch = indexHtml.match(/href="(\/assets\/index-[^"]+\.css)"/);
  if (jsMatch) assetJs = jsMatch[1];
  if (cssMatch) assetCss = cssMatch[1];
  console.log(`Found assets: JS=${assetJs}, CSS=${assetCss}`);
}

function generateHTMLWithAssets(articleId, article) {
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
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
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
  "author": {"@type": "Person", "name": "${article.author}"},
  "publisher": {"@type": "Organization", "name": "SøDera", "logo": {"@type": "ImageObject", "url": "https://i.imgur.com/yAobb2F.png"}},
  "mainEntityOfPage": {"@type": "WebPage", "@id": "${fullUrl}"}
}
</script>
<script type="module" crossorigin src="${assetJs}"></script>
<link rel="stylesheet" crossorigin href="${assetCss}">
</head>
<body>
<div id="root"></div>
</body>
</html>`;
}

// Generate HTML for each article
for (const [articleId, article] of Object.entries(BLOG_ARTICLES)) {
  const html = generateHTMLWithAssets(articleId, article);
  
  // Create /blog/article-id/index.html
  const articleDir = path.join(blogDir, articleId);
  if (!fs.existsSync(articleDir)) {
    fs.mkdirSync(articleDir, { recursive: true });
  }
  fs.writeFileSync(path.join(articleDir, 'index.html'), html);
  console.log(`Generated: dist/blog/${articleId}/index.html`);
  
  // Also create /blog/article-id.html for direct access
  fs.writeFileSync(path.join(blogDir, `${articleId}.html`), html);
  console.log(`Generated: dist/blog/${articleId}.html`);
}

console.log('\nBlog HTML generation complete!');
console.log(`Total files generated: ${Object.keys(BLOG_ARTICLES).length * 2}`);
