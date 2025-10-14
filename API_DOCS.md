# Screenshot API Documentation

## What It Does
Convert any URL to a screenshot image via simple HTTP request. Perfect for developers building social media tools, link previews, portfolio generators, and website monitoring systems.

## Quick Example

```bash
curl -X POST https://api.screenshotapi.dev/v1/capture \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example.com",
    "width": 1280,
    "height": 800,
    "format": "png"
  }'
```

## Response

```json
{
  "success": true,
  "image_url": "https://cdn.screenshotapi.dev/abc123.png",
  "credits_used": 1,
  "credits_remaining": 999,
  "cached": false
}
```

## API Reference

### POST /v1/capture

Capture a screenshot of any URL.

**Headers:**
- `Authorization: Bearer YOUR_API_KEY` (required)
- `Content-Type: application/json` (required)

**Request Body:**

```json
{
  "url": "https://example.com",
  "width": 1280,
  "height": 800,
  "format": "png",
  "full_page": false,
  "cache": true
}
```

**Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `url` | string | Yes | - | The URL to capture |
| `width` | integer | No | 1280 | Viewport width (100-3840) |
| `height` | integer | No | 800 | Viewport height (100-2160) |
| `format` | string | No | "png" | Image format: "png", "jpeg", "webp" |
| `full_page` | boolean | No | false | Capture entire page length |
| `cache` | boolean | No | true | Use cached version if available |

**Response Fields:**

| Field | Type | Description |
|-------|------|-------------|
| `success` | boolean | Whether the request succeeded |
| `image_url` | string | CDN URL of the captured screenshot |
| `credits_used` | integer | Credits consumed (1 per request) |
| `credits_remaining` | integer | Remaining credits in your account |
| `cached` | boolean | Whether the image was served from cache |

**Error Response:**

```json
{
  "success": false,
  "error": "Invalid URL format",
  "error_code": "INVALID_URL"
}
```

**Error Codes:**

| Code | Description |
|------|-------------|
| `INVALID_URL` | URL format is invalid |
| `URL_UNREACHABLE` | Target URL cannot be accessed |
| `INSUFFICIENT_CREDITS` | No credits remaining |
| `RATE_LIMIT_EXCEEDED` | Too many requests |
| `INVALID_API_KEY` | API key is invalid or expired |

## Authentication

Get your API key after signing up at https://api.screenshotapi.dev

Include it in the `Authorization` header:
```
Authorization: Bearer sk_live_abc123xyz789
```

## Rate Limits

Rate limits are based on your plan:

| Plan | Requests/Month | Rate Limit |
|------|----------------|------------|
| Free | 100 | 10/minute |
| Starter | 1,000 | 60/minute |
| Growth | 10,000 | 300/minute |
| Scale | 100,000 | 1000/minute |

Rate limit headers included in response:
```
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1640000000
```

## Caching

Screenshots are cached for 24 hours by default. Subsequent requests for the same URL return the cached version (no credit charge).

To bypass cache:
```json
{
  "url": "https://example.com",
  "cache": false
}
```

## Use Cases

### Social Media Preview Cards
Generate Open Graph images for social sharing.

### Portfolio Thumbnails
Create thumbnails of live websites for your portfolio.

### Website Monitoring
Capture periodic screenshots to monitor changes.

### Link Preview Service
Show visual previews of URLs in chat apps.

### Documentation
Capture screenshots for technical documentation.

## Pricing

| Plan | Screenshots/Month | Price | Best For |
|------|-------------------|-------|----------|
| **Free** | 100 | $0 | Testing & hobby projects |
| **Starter** | 1,000 | $9 | Side projects & small apps |
| **Growth** | 10,000 | $29 | Growing SaaS products |
| **Scale** | 100,000 | $99 | Production applications |

**All plans include:**
- ✅ 24-hour caching
- ✅ Multiple image formats
- ✅ Full-page screenshots
- ✅ 99.9% uptime SLA
- ✅ Global CDN delivery

**No credit card required for free tier.**

## Code Examples

### Node.js

```javascript
const fetch = require('node-fetch');

async function captureScreenshot(url) {
  const response = await fetch('https://api.screenshotapi.dev/v1/capture', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: url,
      width: 1280,
      height: 800,
      format: 'png'
    })
  });

  const data = await response.json();
  return data.image_url;
}

captureScreenshot('https://example.com')
  .then(imageUrl => console.log('Screenshot:', imageUrl));
```

### Python

```python
import requests

def capture_screenshot(url):
    response = requests.post(
        'https://api.screenshotapi.dev/v1/capture',
        headers={
            'Authorization': 'Bearer YOUR_API_KEY',
            'Content-Type': 'application/json'
        },
        json={
            'url': url,
            'width': 1280,
            'height': 800,
            'format': 'png'
        }
    )

    data = response.json()
    return data['image_url']

image_url = capture_screenshot('https://example.com')
print(f'Screenshot: {image_url}')
```

### cURL

```bash
curl -X POST https://api.screenshotapi.dev/v1/capture \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com","width":1280,"height":800}'
```

### PHP

```php
<?php
$ch = curl_init('https://api.screenshotapi.dev/v1/capture');

curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer YOUR_API_KEY',
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    'url' => 'https://example.com',
    'width' => 1280,
    'height' => 800
]));

$response = curl_exec($ch);
$data = json_decode($response, true);

echo "Screenshot: " . $data['image_url'];
?>
```

## FAQ

**Q: How long do screenshots take?**
A: 1-3 seconds for most websites. Cached requests return instantly.

**Q: What if the target URL requires authentication?**
A: Currently only public URLs are supported. Auth support coming soon.

**Q: Can I capture localhost URLs?**
A: No, only public internet URLs are accessible.

**Q: What happens if I run out of credits?**
A: Requests return `INSUFFICIENT_CREDITS` error. Upgrade your plan or wait for monthly reset.

**Q: Do you store the screenshots?**
A: Cached for 24 hours on CDN, then automatically deleted.

**Q: Can I white-label the image URLs?**
A: Custom domains available on Scale plan ($99/mo).

**Q: Is there a free trial?**
A: Free tier (100 screenshots/month) available forever. No credit card required.

## Support

- **Documentation**: https://api.screenshotapi.dev/docs
- **Status Page**: https://status.screenshotapi.dev
- **Email**: support@screenshotapi.dev (response within 24 hours)

## Getting Started

1. **Sign up**: https://api.screenshotapi.dev/signup
2. **Get API key**: Copy from dashboard
3. **Make first request**: Use code examples above
4. **Upgrade**: When you need more screenshots

---

**Ready to get started?**

👉 [Join the waitlist for early access](https://api.screenshotapi.dev)

*API launching soon. Be among the first to get access.*
