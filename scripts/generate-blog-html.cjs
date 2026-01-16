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
    author: 'SøDera Team'
  },
  {
    id: 'essential-guide-document-control-systems',
    title: 'Essential Guide to Document Control Systems',
    description: 'Learn everything you need to know about implementing effective document control systems in your organization.',
    author: 'SøDera Team'
  },
  {
    id: 'rds-compliance-what-you-need-to-know',
    title: 'RDS Compliance: What You Need to Know',
    description: 'A comprehensive guide to understanding and implementing RDS (Reference Designation System) compliance in your projects.',
    author: 'SøDera Team'
  },
  {
    id: 'understanding-iec-81346-guide',
    title: 'Understanding IEC 81346: A Complete Guide',
    description: 'Master the IEC 81346 standard for industrial systems, installations and equipment and industrial products.',
    author: 'SøDera Team'
  },
  {
    id: 'document-management-best-practices',
    title: 'Document Management Best Practices for 2024',
    description: 'Discover the latest best practices for document management that will help your organization stay organized and efficient.',
    author: 'SøDera Team'
  },
  {
    id: 'bim-energy-infrastructure',
    title: 'BIM in Energy Infrastructure Projects',
    description: 'How Building Information Modeling is transforming energy infrastructure development and management.',
    author: 'SøDera Team'
  }
];

function generateBlogHTML(post) {
  const url = `${SITE_URL}/blog/${post.id}`;
  
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
  <meta name="linkedin:image" content="${OG_IMAGE_URL}">
  
  <!-- Canonical -->
  <link rel="canonical" href="${url}">
  
  <!-- Redirect to SPA after meta tags are read -->
  <meta http-equiv="refresh" content="0;url=${url}">
  
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    .loading {
      text-align: center;
      padding: 2rem;
    }
    .spinner {
      width: 40px;
      height: 40px;
      border: 4px solid rgba(255,255,255,0.3);
      border-top-color: white;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 1rem;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <div class="loading">
    <div class="spinner"></div>
    <p>Loading article...</p>
  </div>
  <script>
    // Immediate redirect for browsers
    window.location.replace('${url}');
  </script>
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
  
  blogPosts.forEach(post => {
    const html = generateBlogHTML(post);
    
    // Create directory for the blog post
    const postDir = path.join(blogDir, post.id);
    if (!fs.existsSync(postDir)) {
      fs.mkdirSync(postDir, { recursive: true });
    }
    
    // Write index.html in the post directory
    const indexPath = path.join(postDir, 'index.html');
    fs.writeFileSync(indexPath, html);
    console.log(`Generated: ${indexPath}`);
    
    // Also create a flat HTML file for direct access
    const flatPath = path.join(blogDir, `${post.id}.html`);
    fs.writeFileSync(flatPath, html);
    console.log(`Generated: ${flatPath}`);
  });
  
  console.log(`\nSuccessfully generated ${blogPosts.length} blog HTML files!`);
}

main();
