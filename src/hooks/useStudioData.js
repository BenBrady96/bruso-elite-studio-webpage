import { useCallback, useEffect, useRef, useState } from 'react'
import { API_URL } from '../constants'

const MAX_ATTEMPTS = 5
const REQUEST_TIMEOUT_MS = 12000

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function requestStudioData(timeoutMs) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)

  try {
    const response = await fetch(API_URL, {
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
      // A common cause here is the Apps Script deployment not being public,
      // which makes Google return a sign in HTML page instead of JSON.
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

    return {
      prices: Array.isArray(json.data.prices) ? json.data.prices : [],
      images: Array.isArray(json.data.images) ? json.data.images : [],
    }
  } finally {
    clearTimeout(timer)
  }
}

export default function useStudioData() {
  const [prices, setPrices] = useState([])
  const [images, setImages] = useState([])
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

    async function load() {
      for (let i = 1; i <= MAX_ATTEMPTS; i += 1) {
        if (cancelledRef.current) return

        setAttempt(i)
        if (i > 1) setRetrying(true)

        try {
          const data = await requestStudioData(REQUEST_TIMEOUT_MS)
          if (cancelledRef.current) return

          setPrices(data.prices)
          setImages(data.images)
          setError(null)
          setLoading(false)
          setRetrying(false)
          return
        } catch (err) {
          if (cancelledRef.current) return

          const message = err.message || 'Something went wrong while loading content.'
          console.error(`Studio data fetch failed (attempt ${i}/${MAX_ATTEMPTS}):`, err)
          setError(message)
          setLoading(false)

          if (i < MAX_ATTEMPTS) {
            const delay = Math.min(2000 * 2 ** (i - 1), 15000)
            await sleep(delay)
          } else {
            setRetrying(false)
          }
        }
      }
    }

    load()

    return () => {
      cancelledRef.current = true
    }
  }, [reloadKey])

  return { prices, images, loading, retrying, attempt, error, retry, maxAttempts: MAX_ATTEMPTS }
}
