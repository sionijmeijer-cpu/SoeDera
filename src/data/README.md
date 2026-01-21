# Blog Posts Data

This file contains all blog articles for the SøDera website.

## How to Add a New Blog Post

1. Open `blogPosts.ts` in GitHub
2. Add a new object to the `blogPosts` array
3. Push to GitHub

That's it! Azure will automatically:
- Build your website
- Generate the SEO-optimized HTML for social sharing
- Your new post will be live

## Blog Post Structure

```typescript
{
  id: 'your-url-slug',                    // ← This becomes your URL!
  title: 'Your Blog Post Title',
  excerpt: 'A short description for previews and social sharing',
  content: `Your full article content in markdown...`,
  date: '2026-01-15',                     // Format: YYYY-MM-DD
  readTime: '8 min read',
  category: 'Document Management',        // See categories below
  author: 'Søren Christensen',
  color: 'from-blue-500 to-blue-400',     // Gradient for the card
  image: 'https://i.imgur.com/xxxxx.jpeg' // Image URL for social sharing
}
```

## Your Blog URL

Your URL will be: `https://www.soedera.eu/blog/{id}`

**Example:**
- If `id: 'my-new-article'`
- URL: `https://www.soedera.eu/blog/my-new-article`

## Categories

Use one of these categories:
- `'RDS'`
- `'Document Management'`
- `'BIM'`
- `'Project Management'`
- `'Product Development'`

## Color Options (for card gradients)

- Blue: `'from-blue-500 to-blue-400'`
- Teal: `'from-teal-500 to-teal-400'`
- Purple: `'from-purple-500 to-purple-400'`
- Orange: `'from-orange-500 to-orange-400'`
- Green: `'from-green-500 to-green-400'`

## Images for Social Sharing

For best results on LinkedIn/Twitter:
- Use images at least 1200x630 pixels
- You can upload to [Imgur](https://imgur.com/) and use the direct link
- Or place images in `/public/images/` and use `/images/your-image.jpg`

## After Publishing

1. Push your changes to GitHub
2. Wait for Azure to deploy (~2 minutes)
3. Use [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) to verify
4. Share your link!
