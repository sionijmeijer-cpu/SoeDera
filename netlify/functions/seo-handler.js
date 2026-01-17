// Netlify Function for serving SEO-optimized HTML to crawlers

const blogArticles = {
  'document-management-best-practices': {
    title: 'Document Management Best Practices for Energy Infrastructure',
    description: 'Implement effective document management systems to streamline operations and ensure compliance in energy infrastructure projects.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=630&fit=crop',
    publishDate: '2024-01-15',
  },
  'iec-81346-implementation': {
    title: 'IEC 81346 Implementation Guide for Energy Companies',
    description: 'Learn how to implement Reference Designation Systems (IEC 81346) to standardize your asset data management.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop',
    publishDate: '2024-01-10',
  },
  'asset-data-management': {
    title: 'Asset Data Management Strategy for Energy Operations',
    description: 'Develop a comprehensive asset data management strategy to improve operational efficiency and reduce downtime.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop',
    publishDate: '2024-01-05',
  },
  'future-of-document-management-construction': {
    title: 'The Future of Document Management in Construction',
    description: 'Explore how digital transformation and automation are reshaping document management practices in the construction and energy sectors.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=630&fit=crop',
    publishDate: '2024-02-01',
  },
  'rds-pp-offshore-wind': {
    title: 'RDS-PP for Offshore Wind: A Complete Guide',
    description: 'Master the Reference Designation System for Power Plants (RDS-PP) specifically tailored for offshore wind farm applications.',
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1200&h=630&fit=crop',
    publishDate: '2024-02-15',
  },
  'bim-energy-sector': {
    title: 'BIM Implementation in the Energy Sector',
    description: 'Discover best practices for implementing Building Information Modeling in energy infrastructure projects.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=630&fit=crop',
    publishDate: '2024-03-01',
  },
  'metadata-design-technical-documentation': {
    title: 'How to Design Metadata That Actually Works for Technical Documentation',
    description: 'Learn how to design effective metadata schemas for technical documentation that improves searchability, compliance, and long-term maintainability.',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&h=630&fit=crop',
    publishDate: '2024-03-15',
  },
};

exports.handler = async (event) => {
  const userAgent = (event.headers['user-agent'] || '').toLowerCase();
  const path = event.path || '';
  const articleId = path.replace('/blog/', '').replace(/\/$/, '');
  const article = blogArticles[articleId];

  // Check if this is a bot/crawler
  const isCrawler = /linkedinbot|facebookexternalhit|twitterbot|googlebot|bingbot|slackbot|whatsapp|telegram/i.test(userAgent);

  // If not a crawler, redirect to the main app
  if (!isCrawler) {
    return {
      statusCode: 302,
      headers: {
        'Location': `/blog/${articleId}`,
        'Cache-Control': 'no-cache',
      },
      body: '',
    };
  }

  // For crawlers, serve SEO-optimized HTML
  if (article) {
    const url = `https://www.soedera.eu/blog/${articleId}`;
    
    const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<link rel="canonical" href="${url}" />
<title>${article.title} | SøDera</title>
<meta name="description" content="${article.description}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${url}" />
<meta property="og:title" content="${article.title}" />
<meta property="og:description" content="${article.description}" />
<meta property="og:image" content="${article.image}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="SøDera" />
<meta property="article:published_time" content="${article.publishDate}" />
<meta property="article:author" content="SøDera" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="${url}" />
<meta name="twitter:title" content="${article.title}" />
<meta name="twitter:description" content="${article.description}" />
<meta name="twitter:image" content="${article.image}" />
<link rel="icon" type="image/png" href="https://i.imgur.com/TK8sXC2.png" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="refresh" content="0;url=${url}" />
</head>
<body>
<h1>${article.title}</h1>
<p>${article.description}</p>
<p>Redirecting to <a href="${url}">${url}</a></p>
</body>
</html>`;

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
      body: html,
    };
  }

  // Fallback - redirect to blog index
  return {
    statusCode: 302,
    headers: {
      'Location': '/blog',
      'Cache-Control': 'no-cache',
    },
    body: '',
  };
};
