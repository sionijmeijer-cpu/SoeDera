// This script generates static HTML files for each blog post
// Reads from src/data/blogPosts.ts and generates SEO-optimized HTML
// Run during build: node scripts/generate-blog-html.js

const fs = require('fs');
const path = require('path');

// Read and parse blogPosts.ts
const blogPostsFile = path.join(__dirname, '..', 'src', 'data', 'blogPosts.ts');
const blogPostsContent = fs.readFileSync(blogPostsFile, 'utf-8');

// Extract blog posts array using regex
const arrayMatch = blogPostsContent.match(/export const blogPosts[^=]*=\s*\[([\s\S]*)\]/);
if (!arrayMatch) {
  console.error('Could not find blogPosts array in src/data/blogPosts.ts');
  process.exit(1);
}

// Parse individual post objects
const postsArrayContent = arrayMatch[1];
const posts = [];

// Match each post object
const postRegex = /\{\s*id:\s*['"`]([^'"`]+)['"`][^}]*title:\s*['"`]([^'"`]+)['"`][^}]*excerpt:\s*['"`]([^'"`]+)['"`][^}]*image:\s*['"`]([^'"`]+)['"`][^}]*date:\s*['"`]([^'"`]+)['"`]/g;

let match;
while ((match = postRegex.exec(postsArrayContent)) !== null) {
  posts.push({
    id: match[1],
    title: match[2],
    excerpt: match[3],
    image: match[4],
    date: match[5]
  });
}

console.log(`Found ${posts.length} blog posts in src/data/blogPosts.ts`);

if (posts.length === 0) {
  console.error('No posts found! Check the regex parsing.');
  process.exit(1);
}

// Read the built index.html to get the correct asset paths
const distIndexPath = path.join(__dirname, '..', 'dist', 'index.html');
let assetTags = '';
let bodyContent = '<div id="root"></div>';

if (fs.existsSync(distIndexPath)) {
  const indexHtml = fs.readFileSync(distIndexPath, 'utf-8');
  
  // Extract all script and link tags from head
  const headMatch = indexHtml.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  if (headMatch) {
    const headContent = headMatch[1];
    // Get CSS links
    const cssLinks = headContent.match(/<link[^>]*rel="stylesheet"[^>]*>/gi) || [];
    // Get modulepreload links
    const preloadLinks = headContent.match(/<link[^>]*rel="modulepreload"[^>]*>/gi) || [];
    assetTags = [...cssLinks, ...preloadLinks].join('\n');
  }
  
  // Extract body content (includes the React app script)
  const bodyMatch = indexHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) {
    bodyContent = bodyMatch[1];
  }
  
  console.log('Using assets from built index.html');
} else {
  console.log('Warning: dist/index.html not found, using fallback asset paths');
  assetTags = `<link rel="stylesheet" crossorigin href="/assets/index.css">`;
  bodyContent = `<div id="root"></div>\n<script type="module" src="/assets/index.js"></script>`;
}

function generateHTML(post) {
  const fullUrl = `https://www.soedera.eu/blog/${post.id}`;
  const publishedTime = new Date(post.date).toISOString();
  const title = `${post.title} | SøDera`;
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="description" content="${post.excerpt}">
<link rel="canonical" href="${fullUrl}">
<link rel="icon" type="image/png" href="https://i.imgur.com/TK8sXC2.png">

<!-- Open Graph / Facebook / LinkedIn -->
<meta property="og:type" content="article">
<meta property="og:url" content="${fullUrl}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${post.excerpt}">
<meta property="og:image" content="${post.image}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:site_name" content="SøDera">
<meta property="article:published_time" content="${publishedTime}">
<meta property="article:author" content="SøDera">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="${fullUrl}">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${post.excerpt}">
<meta name="twitter:image" content="${post.image}">

<!-- Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "${post.title}",
  "description": "${post.excerpt}",
  "image": "${post.image}",
  "datePublished": "${publishedTime}",
  "author": {"@type": "Organization", "name": "SøDera"},
  "publisher": {"@type": "Organization", "name": "SøDera", "logo": {"@type": "ImageObject", "url": "https://i.imgur.com/yAobb2F.png"}},
  "mainEntityOfPage": {"@type": "WebPage", "@id": "${fullUrl}"}
}
</script>

${assetTags}
</head>
<body>
${bodyContent}
</body>
</html>`;
}

// Create dist/blog directory
const blogDir = path.join(__dirname, '..', 'dist', 'blog');
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir, { recursive: true });
}

// Generate HTML for each article
for (const post of posts) {
  const articleDir = path.join(blogDir, post.id);
  if (!fs.existsSync(articleDir)) {
    fs.mkdirSync(articleDir, { recursive: true });
  }
  
  const html = generateHTML(post);
  const filePath = path.join(articleDir, 'index.html');
  fs.writeFileSync(filePath, html);
  console.log(`Generated: /blog/${post.id}/index.html`);
}

console.log(`\nBlog HTML generation complete! Generated ${posts.length} pages.`);
console.log('\nYour blog URLs:');
posts.forEach(post => {
  console.log(`  https://www.soedera.eu/blog/${post.id}`);
});
