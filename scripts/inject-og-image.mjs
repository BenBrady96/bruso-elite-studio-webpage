// Build-time Open Graph image injection.
//
// Social/link-preview crawlers (WhatsApp, Facebook, X, Google, etc.) do NOT run
// JavaScript, so they only ever see the static index.html. This script runs after
// `vite build`, fetches the studio's current main image from the API, and rewrites
// the og:image / twitter:image / schema image in dist/index.html to point at it.
//
// If anything fails, the dedicated og-image.jpg referenced in index.html is left in
// place as a reliable fallback and the build still succeeds.

import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

import { API_URL } from '../src/constants.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const HTML_PATH = resolve(__dirname, '../dist/index.html')

// The placeholder URL that index.html ships with; replaced on success, kept on failure.
const FALLBACK_OG_URL = 'https://brusoelitestudio.com/og-image.jpg'
const OG_IMAGE_WIDTH = 1200
const REQUEST_TIMEOUT_MS = 12000

function getDriveFileId(image) {
  if (!image) return null
  if (image.id) return image.id

  const url = image.url || ''
  const match =
    url.match(/[?&]id=([^&]+)/) || url.match(/\/d\/([^/]+)/) || url.match(/\/file\/d\/([^/]+)/)
  return match ? match[1] : null
}

async function fetchMainImage() {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    const response = await fetch(`${API_URL}?type=main`, {
      signal: controller.signal,
      redirect: 'follow',
    })
    if (!response.ok) {
      throw new Error(`The server responded with status ${response.status}.`)
    }

    const json = JSON.parse(await response.text())
    if (!json || json.success !== true || !json.data) {
      throw new Error('The data endpoint returned an unexpected response.')
    }

    const images = json.images || json.data.images || {}
    const mainImages = Array.isArray(images.main) ? images.main : []
    return mainImages[0] || null
  } finally {
    clearTimeout(timer)
  }
}

async function main() {
  let ogUrl
  try {
    const image = await fetchMainImage()
    const id = getDriveFileId(image)
    if (!id) {
      throw new Error('Could not resolve a Google Drive file id for the main image.')
    }
    ogUrl = `https://lh3.googleusercontent.com/d/${id}=w${OG_IMAGE_WIDTH}`
  } catch (err) {
    console.warn(
      `[inject-og-image] Skipping injection, keeping fallback og-image.jpg: ${err.message}`
    )
    return
  }

  const html = await readFile(HTML_PATH, 'utf8')
  if (!html.includes(FALLBACK_OG_URL)) {
    console.warn(
      `[inject-og-image] Fallback URL "${FALLBACK_OG_URL}" not found in dist/index.html; nothing replaced.`
    )
    return
  }

  const updated = html.split(FALLBACK_OG_URL).join(ogUrl)
  await writeFile(HTML_PATH, updated, 'utf8')
  console.log(`[inject-og-image] og:image / twitter:image / schema set to ${ogUrl}`)
}

main().catch((err) => {
  // Never fail the deploy over a preview image; the static fallback stays in place.
  console.warn(`[inject-og-image] Unexpected error, keeping fallback: ${err.message}`)
})
