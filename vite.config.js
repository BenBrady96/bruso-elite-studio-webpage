import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site is served from the root of the custom domain (brusoelitestudio.com),
// so the base path is '/' in both development and production.
export default defineConfig(() => ({
  base: '/',
  plugins: [react()],
}))
