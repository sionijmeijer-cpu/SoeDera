import { Plugin, ViteDevServer } from 'vite';

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

function isCrawler(userAgent: string): boolean {
  return CRAWLER_USER_AGENTS.some(agent => userAgent.includes(agent));
}

function getArticleFromPath(pathname: string) {
  const match = pathname.match(/\/blog\/([a-z0-9\-]+)/);
  if (!match) return null;
  return blogArticles.find(a => a.id === match[1]);
}

function generateMetaTags(article: {
  id: string;
  title: string;
  description: string;
  image: string;
  publishDate: string;
  author: string;
}) {
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

export default function seoPrerender(): Plugin {
  let server: ViteDevServer;

  return {
    name: 'seo-prerender',
    configResolved() {
      // Plugin initialized
    },
    configureServer(dev: any) {
      server = dev;
      return () => {
        dev.middlewares.use((req: any, res: any, next: any) => {
          const userAgent = req.headers['user-agent'] || '';
          const pathname = (req.url || '').split('?')[0];

          // Check if this is a crawler and if it's a blog URL
          if (isCrawler(userAgent) && pathname.startsWith('/blog/')) {
            const article = getArticleFromPath(pathname);
            
            if (article) {
              // Read the base index.html
              const fs = require('fs');
              const path = require('path');
              const indexPath = path.resolve(__dirname, 'index.html');
              
              try {
                let html = fs.readFileSync(indexPath, 'utf-8');
                
                // Remove existing meta tags that might conflict
                html = html.replace(/<meta property="og:.*?">/g, '');
                html = html.replace(/<meta name="description".*?">/g, '');
                html = html.replace(/<meta name="twitter:.*?">/g, '');
                html = html.replace(/<link rel="canonical".*?">/g, '');
                html = html.replace(/<title>.*?<\/title>/g, '');
                
                // Insert our custom meta tags before </head>
                const metaTags = generateMetaTags(article);
                html = html.replace('</head>', `${metaTags}\n</head>`);
                
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                res.setHeader('Cache-Control', 'public, max-age=3600');
                res.end(html);
                return;
              } catch (e) {
                console.error('Error reading index.html:', e);
              }
            }
          }

          next();
        });
      };
    },
    transformIndexHtml: {
      order: 'pre',
      handler(html: any, ctx: any) {
        const pathname = ctx.path.split('?')[0];

        // For production builds, we'll handle this differently
        // Check if this is a blog post request
        if (pathname.startsWith('/blog/')) {
        const article = getArticleFromPath(pathname);
        
        if (article) {
          // Remove conflicting meta tags
          html = html.replace(/<meta property="og:.*?">/g, '');
          html = html.replace(/<meta name="description".*?">/g, '');
          html = html.replace(/<meta name="twitter:.*?">/g, '');
          html = html.replace(/<link rel="canonical".*?">/g, '');
          html = html.replace(/<title>.*?<\/title>/g, '');
          
          // Insert correct meta tags
          const metaTags = generateMetaTags(article);
          html = html.replace('</head>', `${metaTags}\n</head>`);
          }
      }

      return html;
      },
    },
  };
}
