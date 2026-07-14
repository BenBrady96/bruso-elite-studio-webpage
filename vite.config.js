import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { SECURITY_HEADERS, formatHeadersFile } from './security-headers.mjs'

const rootDir = dirname(fileURLToPath(import.meta.url))

function applySecurityHeaders() {
  return (req, res, next) => {
    for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
      res.setHeader(name, value)
    }
    next()
  }
}

function securityHeadersPlugin() {
  return {
    name: 'security-headers',
    buildStart() {
      // Keep public/_headers in sync with security-headers.mjs (copied into dist on build).
      writeFileSync(join(rootDir, 'public', '_headers'), formatHeadersFile())
    },
    configureServer(server) {
      server.middlewares.use(applySecurityHeaders())
    },
    configurePreviewServer(server) {
      server.middlewares.use(applySecurityHeaders())
    },
  }
}

// The site is served from the root of the custom domain (brusoelitestudio.com),
// so the base path is '/' in both development and production.
export default defineConfig(() => ({
  base: '/',
  plugins: [react(), securityHeadersPlugin()],
}))
