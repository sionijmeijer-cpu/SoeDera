/**
 * Generate static HTML files for blog posts with proper meta tags
 * This runs after Vite build to create SEO-friendly blog pages
 */
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.soedera.eu';

// OG Image - use CDN URL that's always accessible
const OG_IMAGE_URL = 'https://pub-9a02e27fa7b24d5fafc4e75a28532471.r2.dev/image/users/cmi8klm2u0000l50423d6cdpq/1768477298090-mj0zuzx0wm-blog-og-image.png';

// Blog posts data - must match src/data/blogPosts.ts
const blogPosts = [
  {
    id: 'future-of-document-management-construction',
    title: 'The Future of Document Management in Construction',
    description: 'Explore how digital transformation is revolutionizing document management in the construction industry, from BIM integration to AI-powered systems.',
    author: 'Søren Christensen'
  },
  {
    id: 'essential-guide-document-control-systems',
    title: 'How to Design Metadata That Actually Works for Technical Documentation',
    description: 'Learn how to design metadata that supports real work in energy infrastructure, not just system configuration. A practical guide to metadata that users barely notice because it just works.',
    author: 'Sylvia Awoudu'
  },
  {
    id: 'rds-compliance-what-you-need-to-know',
    title: 'RDS Compliance: What You Need to Know',
    description: 'A comprehensive guide to understanding and implementing RDS (Reference Designation System) compliance in your projects.',
    author: 'Søren Christensen'
  },
  {
    id: 'understanding-iec-81346-guide',
    title: 'Understanding IEC 81346: A Practical Guide to Reference Designation Systems',
    description: 'Reference Designation Systems are the backbone of effective documentation in the energy sector. This guide explores the fundamentals of IEC 81346.',
    author: 'Søren Christensen'
  },
  {
    id: 'document-management-best-practices',
    title: 'Document Management Best Practices for Energy Infrastructure 2026',
    description: 'Learn how leading energy companies are improving their documentation practices to enhance efficiency and compliance.',
    author: 'Sylvia Awoudu'
  },
  {
    id: 'bim-energy-infrastructure',
    title: 'Applying BIM Methods in Energy Infrastructure Projects',
    description: 'Building Information Modeling is transforming how energy infrastructure is designed, built, and operated.',
    author: 'Sylvia Awoudu'
  },
  {
    id: 'rds-implementation-lessons',
    title: 'Lessons Learned from RDS Implementation Projects',
    description: 'Real-world insights from organizations that have successfully implemented Reference Designation Systems.',
    author: 'Søren Christensen'
  },
  {
    id: 'project-management-energy-sector',
    title: 'Focused Project Management in the Energy Sector',
    description: 'How structured project management approaches improve outcomes in complex energy infrastructure projects.',
    author: 'Sylvia Awoudu'
  },
  {
    id: 'structured-product-development',
    title: 'Structured Product Development for Technical Solutions',
    description: 'How to bring structure to product development in technical industries through focused processes.',
    author: 'Sylvia Awoudu'
  }
];

function generateBlogHTML(post, mainIndexContent) {
  const url = `${SITE_URL}/blog/${post.id}`;
  
  // Extract the head content (CSS links, preloads, etc.) from main index.html
  const headMatch = mainIndexContent.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  let headContent = '';
  if (headMatch) {
    // Get everything from head except title and meta tags (we'll add our own)
    headContent = headMatch[1]
      .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, '')
      .replace(/<meta[^>]*name="(title|description|author)"[^>]*>/gi, '')
      .replace(/<meta[^>]*property="og:[^"]*"[^>]*>/gi, '')
      .replace(/<meta[^>]*name="twitter:[^"]*"[^>]*>/gi, '')
      .replace(/<link[^>]*rel="canonical"[^>]*>/gi, '');
  }
  
  // Extract the body content (script tags) from main index.html
  const bodyMatch = mainIndexContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let bodyContent = '<div id="root"></div>';
  if (bodyMatch) {
    bodyContent = bodyMatch[1];
  }
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Primary Meta Tags -->
  <title>${post.title} | SøDera Blog</title>
  <meta name="title" content="${post.title}">
  <meta name="description" content="${post.description}">
  <meta name="author" content="${post.author}">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${post.title}">
  <meta property="og:description" content="${post.description}">
  <meta property="og:image" content="${OG_IMAGE_URL}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:site_name" content="SøDera">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${url}">
  <meta name="twitter:title" content="${post.title}">
  <meta name="twitter:description" content="${post.description}">
  <meta name="twitter:image" content="${OG_IMAGE_URL}">
  
  <!-- LinkedIn specific -->
  <meta property="og:image:secure_url" content="${OG_IMAGE_URL}">
  
  <!-- Canonical -->
  <link rel="canonical" href="${url}">
  
  ${headContent}
</head>
<body>
  ${bodyContent}
</body>
</html>`;
}

function main() {
  const distDir = path.join(__dirname, '..', 'dist');
  const blogDir = path.join(distDir, 'blog');
  
  // Ensure blog directory exists
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
  }
  
  console.log('Generating blog HTML files...');
  console.log('Using OG image:', OG_IMAGE_URL);
  
  // Read the main index.html to copy script/css references
  const mainIndexPath = path.join(distDir, 'index.html');
  let mainIndexContent = '';
  if (fs.existsSync(mainIndexPath)) {
    mainIndexContent = fs.readFileSync(mainIndexPath, 'utf8');
    console.log('Found main index.html, extracting assets...');
  } else {
    console.error('ERROR: dist/index.html not found! Run vite build first.');
    process.exit(1);
  }
  
  blogPosts.forEach(post => {
    const html = generateBlogHTML(post, mainIndexContent);
    
    // Create directory for the blog post
    const postDir = path.join(blogDir, post.id);
    if (!fs.existsSync(postDir)) {
      fs.mkdirSync(postDir, { recursive: true });
    }
    
    // Write index.html in the post directory
    const indexPath = path.join(postDir, 'index.html');
    fs.writeFileSync(indexPath, html);
    console.log(`Generated: /blog/${post.id}/index.html`);
  });
  
  console.log(`\nSuccessfully generated ${blogPosts.length} blog HTML files with full React app!`);
}

main();
