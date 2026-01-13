import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const DIST_DIR = path.join(__dirname, 'dist');

// Blog articles data
const blogArticles = [
  {
    id: 'document-management-best-practices',
    title: 'Document Management Best Practices for Energy Infrastructure',
    description: 'Implement effective document management systems to streamline operations and ensure compliance in energy infrastructure.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=630&fit=crop',
    publishDate: '2024-01-15',
    author: 'SøDera',
  },
  {
    id: 'iec-81346-implementation',
    title: 'IEC 81346 Implementation Guide for Energy Companies',
    description: 'Learn how to implement Reference Designation Systems (IEC 81346) to standardize your asset data management.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop',
    publishDate: '2024-01-10',
    author: 'SøDera',
  },
  {
    id: 'asset-data-management',
    title: 'Asset Data Management Strategy for Energy Operations',
    description: 'Develop a comprehensive asset data management strategy to improve operational efficiency and reduce downtime.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop',
    publishDate: '2024-01-05',
    author: 'SøDera',
  },
];

const CRAWLER_USER_AGENTS = [
  'LinkedInBot',
  'facebookexternalhit',
  'Twitterbot',
  'WhatsApp',
  'Slurp',
  'googlebot',
  'bingbot',
  'Googlebot',
  'Baiduspider',
  'yandexbot',
  'baiduspider',
];

function isCrawler(userAgent) {
  return CRAWLER_USER_AGENTS.some(agent => userAgent.includes(agent));
}

function getArticleFromPath(pathname) {
  const match = pathname.match(/\/blog\/([a-z0-9\-]+)/);
  if (!match) return null;
  return blogArticles.find(a => a.id === match[1]);
}

function generateMetaTags(article) {
  const url = `https://www.soedera.eu/blog/${article.id}`;
  return `
    <title>${article.title} | SøDera</title>
    <meta name="description" content="${article.description}" />
    <meta property="og:title" content="${article.title}" />
    <meta property="og:description" content="${article.description}" />
    <meta property="og:image" content="${article.image}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:type" content="article" />
    <meta property="article:published_time" content="${article.publishDate}" />
    <meta property="article:author" content="${article.author}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${article.title}" />
    <meta name="twitter:description" content="${article.description}" />
    <meta name="twitter:image" content="${article.image}" />
    <link rel="canonical" href="${url}" />
  `;
}

// Middleware to handle crawler requests for blog posts
app.use((req, res, next) => {
  const userAgent = req.headers['user-agent'] || '';
  const pathname = req.path;

  // Check if this is a crawler requesting a blog URL
  if (isCrawler(userAgent) && pathname.startsWith('/blog/')) {
    const article = getArticleFromPath(pathname);

    if (article) {
      try {
        const indexPath = path.join(DIST_DIR, 'index.html');
        let html = fs.readFileSync(indexPath, 'utf-8');

        // Remove existing meta tags that might conflict
        html = html.replace(/<meta property="og:.*?">/g, '');
        html = html.replace(/<meta name="description".*?">/g, '');
        html = html.replace(/<meta name="twitter:.*?">/g, '');
        html = html.replace(/<link rel="canonical".*?">/g, '');
        html = html.replace(/<title>.*?<\/title>/g, '');

        // Insert our custom meta tags
        const metaTags = generateMetaTags(article);
        html = html.replace('</head>', `${metaTags}\n</head>`);

        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.setHeader('Cache-Control', 'public, max-age=3600');
        res.end(html);
        return;
      } catch (e) {
        console.error('Error serving crawler response:', e);
      }
    }
  }

  next();
});

// Serve static files
app.use(express.static(DIST_DIR));

// Handle SPA routing - serve index.html for all non-static requests
app.get('*', (req, res) => {
  try {
    const indexPath = path.join(DIST_DIR, 'index.html');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.sendFile(indexPath);
  } catch (e) {
    console.error('Error serving index.html:', e);
    res.status(500).send('Server error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
