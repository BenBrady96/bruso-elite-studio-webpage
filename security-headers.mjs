/**
 * Single source of truth for HTTP security headers.
 * Applied by Vite (dev/preview) and written to dist/_headers for
 * Cloudflare Pages / Netlify. GitHub Pages cannot set custom headers;
 * put Cloudflare (or similar) in front, or host on Pages/Netlify.
 */

export const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  // JSON-LD in index.html is inline; Cloudflare Web Analytics loads from their CDN.
  "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com",
  // AOS and Swiper set inline styles at runtime.
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://lh3.googleusercontent.com https://drive.google.com https://*.googleusercontent.com",
  "font-src 'self'",
  "connect-src 'self' https://script.google.com https://script.googleusercontent.com https://cloudflareinsights.com https://static.cloudflareinsights.com",
  "frame-src https://www.google.com https://maps.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  'upgrade-insecure-requests',
].join('; ')

export const SECURITY_HEADERS = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Content-Security-Policy': CONTENT_SECURITY_POLICY,
  'X-Frame-Options': 'SAMEORIGIN',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy':
    'accelerometer=(), autoplay=(), camera=(), cross-origin-isolated=(), display-capture=(), encrypted-media=(), fullscreen=(self), geolocation=(), gyroscope=(), keyboard-map=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), web-share=(), xr-spatial-tracking=(), interest-cohort=()',
}

/** Cloudflare Pages / Netlify `_headers` file body. */
export function formatHeadersFile(headers = SECURITY_HEADERS) {
  const lines = [
    '/*',
    ...Object.entries(headers).map(([name, value]) => `  ${name}: ${value}`),
    '',
  ]
  return lines.join('\n')
}
