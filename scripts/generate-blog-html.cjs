/**
 * Blog HTML Generator for LinkedIn/Social Media Sharing
 * 
 * This script reads from src/data/blogPosts.ts and generates static HTML files
 * with proper Open Graph meta tags for social media sharing.
 * 
 * HOW TO ADD A NEW BLOG POST:
 * 1. Edit src/data/blogPosts.ts in GitHub
 * 2. Add your new blog post to the blogPosts array
 * 3. Push to GitHub - Azure will automatically generate the HTML
 * 4. Your URL will be: https://www.soedera.eu/blog/{your-post-id}
 * 
 * The 'id' field in blogPosts.ts becomes the URL slug.
 */

const fs = require('fs');
const path = require('path');

// Read and parse blogPosts.ts to extract blog data
function extractBlogPosts() {
  const blogPostsPath = path.join(__dirname, '..', 'src', 'data', 'blogPosts.ts');
  const content = fs.readFileSync(blogPostsPath, 'utf-8');
  
  // Extract the array content using regex
  const posts = [];
  
  // Match each blog post object
  const postRegex = /\{\s*id:\s*['"]([^'"]+)['"]\s*,\s*title:\s*['"]([^'"]+)['"]\s*,\s*excerpt:\s*['"]([^'"]+)['"]/g;
  
  let match;
  while ((match = postRegex.exec(content)) !== null) {
    const id = match[1];
    const title = match[2];
    const excerpt = match[3];
    
    // Find the image for this post
    const imageRegex = new RegExp(`id:\\s*['"]${id}['"][\\s\\S]*?image:\\s*['"]([^'"]+)['"]`);
    const imageMatch = content.match(imageRegex);
    const image = imageMatch ? imageMatch[1] : 'https://www.soedera.eu/images/blog-og-image.png';
    
    // Find the date for this post
    const dateRegex = new RegExp(`id:\\s*['"]${id}['"][\\s\\S]*?date:\\s*['"]([^'"]+)['"]`);
    const dateMatch = content.match(dateRegex);
    const date = dateMatch ? dateMatch[1] : new Date().toISOString().split('T')[0];
    
    // Find the author for this post
    const authorRegex = new RegExp(`id:\\s*['"]${id}['"][\\s\\S]*?author:\\s*['"]([^'"]+)['"]`);
    const authorMatch = content.match(authorRegex);
    const author = authorMatch ? authorMatch[1] : 'SøDera Team';
    
    posts.push({
      id,
      title,
      description: excerpt,
      image,
      publishedTime: `${date}T10:00:00Z`,
      author
    });
  }
  
  return posts;
}

async function generateBlogHTML() {
  const distDir = path.join(__dirname, '..', 'dist');
  const blogDir = path.join(distDir, 'blog');
  
  // Create blog directory if it doesn't exist
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
  }
  
  // Read the built index.html to get the asset tags
  const indexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('dist/index.html not found. Run vite build first.');
    process.exit(1);
  }
  
  const indexHtml = fs.readFileSync(indexPath, 'utf-8');
  
  // Extract head content (CSS, preload, etc.)
  const headMatch = indexHtml.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  const headContent = headMatch ? headMatch[1] : '';
  
  // Extract body content (includes the React app scripts)
  const bodyMatch = indexHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyContent = bodyMatch ? bodyMatch[1] : '<div id="root"></div>';
  
  // Extract blog posts from src/data/blogPosts.ts
  const BLOG_ARTICLES = extractBlogPosts();
  
  console.log(`Found ${BLOG_ARTICLES.length} blog posts to generate:`);
  BLOG_ARTICLES.forEach(post => {
    console.log(`  - ${post.id}: ${post.title}`);
  });
  
  // Generate HTML for each blog article
  for (const article of BLOG_ARTICLES) {
    const articleDir = path.join(blogDir, article.id);
    if (!fs.existsSync(articleDir)) {
      fs.mkdirSync(articleDir, { recursive: true });
    }
    
    const fullUrl = `https://www.soedera.eu/blog/${article.id}`;
    
    // Clean head content - remove existing meta tags we'll replace
    let cleanHeadContent = headContent
      .replace(/<title>[^<]*<\/title>/gi, '')
      .replace(/<meta\s+property="og:[^"]*"\s+content="[^"]*"\s*\/?>/gi, '')
      .replace(/<meta\s+name="twitter:[^"]*"\s+content="[^"]*"\s*\/?>/gi, '')
      .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/gi, '');
    
    const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary Meta Tags -->
    <title>${article.title} | SøDera</title>
    <meta name="title" content="${article.title} | SøDera" />
    <meta name="description" content="${article.description}" />
    <meta name="author" content="${article.author}" />
    
    <!-- Open Graph / Facebook / LinkedIn -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${fullUrl}" />
    <meta property="og:title" content="${article.title}" />
    <meta property="og:description" content="${article.description}" />
    <meta property="og:image" content="${article.image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:site_name" content="SøDera" />
    <meta property="article:published_time" content="${article.publishedTime}" />
    <meta property="article:author" content="${article.author}" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${fullUrl}" />
    <meta name="twitter:title" content="${article.title}" />
    <meta name="twitter:description" content="${article.description}" />
    <meta name="twitter:image" content="${article.image}" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${fullUrl}" />
    
    ${cleanHeadContent}
  </head>
  <body>
    ${bodyContent}
  </body>
</html>`;
    
    fs.writeFileSync(path.join(articleDir, 'index.html'), html);
    console.log(`✅ Generated: /blog/${article.id}/index.html`);
    console.log(`   URL: ${fullUrl}`);
  }
  
  // Generate a summary file for reference
  const summaryPath = path.join(blogDir, 'urls.txt');
  const summaryContent = `# Blog URLs for Social Media Sharing
# Generated: ${new Date().toISOString()}
# 
# To add a new blog post:
# 1. Edit src/data/blogPosts.ts
# 2. Push to GitHub
# 3. Your new URL will appear here after build

${BLOG_ARTICLES.map(a => `${a.title}\n${`https://www.soedera.eu/blog/${a.id}`}\n`).join('\n')}
`;
  fs.writeFileSync(summaryPath, summaryContent);
  console.log(`\n📋 URL summary saved to: dist/blog/urls.txt`);
  
  console.log(`\n✨ Generated ${BLOG_ARTICLES.length} blog pages with SEO meta tags`);
}

generateBlogHTML().catch(console.error);
