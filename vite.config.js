import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// On GitHub Pages the site is served from /<repo-name>/, so the build needs a
// matching base path. Local development keeps the root base.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/bruso-elite-studio-webpage/' : '/',
  plugins: [react()],
}))
