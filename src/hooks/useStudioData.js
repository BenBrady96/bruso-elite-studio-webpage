import { useCallback, useEffect, useRef, useState } from 'react'
import { API_URL, TEXT_API_KEYS, TEXT_DEFAULTS } from '../constants'

const MAX_ATTEMPTS = 5
const REQUEST_TIMEOUT_MS = 12000

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const backoff = (attempt) => Math.min(2000 * 2 ** (attempt - 1), 15000)

async function fetchJson(url, timeoutMs) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      redirect: 'follow',
    })

    if (!response.ok) {
      throw new Error(`The server responded with status ${response.status}.`)
    }

    const text = await response.text()

    let json
    try {
      json = JSON.parse(text)
    } catch {
      if (/<!doctype html|accounts\.google\.com/i.test(text)) {
        throw new Error(
          'The data endpoint returned a Google sign in page. Set the Apps Script deployment access to "Anyone".'
        )
      }
      throw new Error('The data endpoint did not return valid JSON.')
    }

    if (!json || json.success !== true || !json.data) {
      throw new Error('The data endpoint returned an unexpected response.')
    }

    return json
  } finally {
    clearTimeout(timer)
  }
}

function getImages(json) {
  return json.images || json.data.images || {}
}

// Maps the API "text" object onto our internal keys, falling back to the
// default copy for any field that is missing or blank.
function getText(json) {
  const apiText = (json.data && json.data.text) || {}
  const result = {}
  for (const [key, apiKey] of Object.entries(TEXT_API_KEYS)) {
    const value = apiText[apiKey]
    result[key] =
      typeof value === 'string' && value.trim() ? value.trim() : TEXT_DEFAULTS[key]
  }
  return result
}

const EMPTY_CONTENT = {
  tattooGallery: [],
  aestheticsGallery: [],
  tattooPricing: [],
  aestheticsPricing: [],
  text: TEXT_DEFAULTS,
}

export default function useStudioData() {
  const [mainImage, setMainImage] = useState(null)
  const [mainImageLoading, setMainImageLoading] = useState(true)
  const [content, setContent] = useState(EMPTY_CONTENT)
  const [loading, setLoading] = useState(true)
  const [retrying, setRetrying] = useState(false)
  const [attempt, setAttempt] = useState(0)
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)

  const cancelledRef = useRef(false)

  const retry = useCallback(() => {
    setError(null)
    setLoading(true)
    setRetrying(false)
    setAttempt(0)
    setReloadKey((key) => key + 1)
  }, [])

  useEffect(() => {
    cancelledRef.current = false
    const isCancelled = () => cancelledRef.current

    async function loadMainImage() {
      for (let i = 1; i <= MAX_ATTEMPTS; i += 1) {
        if (isCancelled()) return

        try {
          const json = await fetchJson(`${API_URL}?type=main`, REQUEST_TIMEOUT_MS)
          if (isCancelled()) return

          const images = getImages(json)
          const mainImages = Array.isArray(images.main) ? images.main : []
          setMainImage(mainImages[0] || null)
          setMainImageLoading(false)
          return
        } catch (err) {
          if (isCancelled()) return
          console.error('Main image fetch failed (attempt %s/%s):', i, MAX_ATTEMPTS, err)
          if (i < MAX_ATTEMPTS) {
            await sleep(backoff(i))
          } else {
            setMainImageLoading(false)
          }
        }
      }
    }

    async function loadContent() {
      for (let i = 1; i <= MAX_ATTEMPTS; i += 1) {
        if (isCancelled()) return

        setAttempt(i)
        if (i > 1) setRetrying(true)

        try {
          const json = await fetchJson(API_URL, REQUEST_TIMEOUT_MS)
          if (isCancelled()) return

          const pricing = json.data.pricing || {}
          const images = getImages(json)

          setContent({
            tattooGallery: Array.isArray(images.tattooGallery) ? images.tattooGallery : [],
            aestheticsGallery: Array.isArray(images.aestheticsGallery)
              ? images.aestheticsGallery
              : [],
            tattooPricing: Array.isArray(pricing.tattoo) ? pricing.tattoo : [],
            aestheticsPricing: Array.isArray(pricing.aesthetics) ? pricing.aesthetics : [],
            text: getText(json),
          })
          setError(null)
          setLoading(false)
          setRetrying(false)
          return
        } catch (err) {
          if (isCancelled()) return

          const message = err.message || 'Something went wrong while loading content.'
          console.error('Studio data fetch failed (attempt %s/%s):', i, MAX_ATTEMPTS, err)
          setError(message)
          setLoading(false)

          if (i < MAX_ATTEMPTS) {
            await sleep(backoff(i))
          } else {
            setRetrying(false)
          }
        }
      }
    }

    loadMainImage()
    loadContent()

    return () => {
      cancelledRef.current = true
    }
  }, [reloadKey])

  return {
    mainImage,
    mainImageLoading,
    ...content,
    loading,
    retrying,
    attempt,
    error,
    retry,
    maxAttempts: MAX_ATTEMPTS,
  }
}
