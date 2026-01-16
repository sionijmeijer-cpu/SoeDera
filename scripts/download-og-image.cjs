/**
 * Download OG image for blog posts before build
 */
const https = require('https');
const fs = require('fs');
const path = require('path');

const IMAGE_URL = 'https://pub-9a02e27fa7b24d5fafc4e75a28532471.r2.dev/image/users/cmi8klm2u0000l50423d6cdpq/1768477298090-mj0zuzx0wm-blog-og-image.png';
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'images', 'blog-og-image.png');

// Ensure directory exists
const dir = path.dirname(OUTPUT_PATH);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

console.log('Downloading blog OG image from:', IMAGE_URL);

const file = fs.createWriteStream(OUTPUT_PATH);

https.get(IMAGE_URL, (response) => {
  // Handle redirects
  if (response.statusCode === 301 || response.statusCode === 302) {
    https.get(response.headers.location, (redirectResponse) => {
      redirectResponse.pipe(file);
      file.on('finish', () => {
        file.close();
        const stats = fs.statSync(OUTPUT_PATH);
        console.log('Blog OG image downloaded successfully! Size:', stats.size, 'bytes');
      });
    });
  } else {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      const stats = fs.statSync(OUTPUT_PATH);
      console.log('Blog OG image downloaded successfully! Size:', stats.size, 'bytes');
    });
  }
}).on('error', (err) => {
  fs.unlink(OUTPUT_PATH, () => {}); // Delete the file on error
  console.error('Error downloading image:', err.message);
  // Don't exit with error - use fallback
  console.log('Will use fallback image method');
});
