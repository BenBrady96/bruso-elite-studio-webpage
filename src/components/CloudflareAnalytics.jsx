import { useEffect } from 'react'
import useCookieConsent from '../hooks/useCookieConsent'
import { CLOUDFLARE_ANALYTICS_TOKEN } from '../constants'
import { COOKIE_CONSENT } from '../utils/cookieConsent'

const SCRIPT_ID = 'bes-cloudflare-analytics'

export default function CloudflareAnalytics() {
  const consent = useCookieConsent()

  useEffect(() => {
    const existing = document.getElementById(SCRIPT_ID)

    if (consent !== COOKIE_CONSENT.ACCEPTED) {
      existing?.remove()
      return
    }

    if (existing) return

    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.type = 'module'
    script.src = 'https://static.cloudflareinsights.com/beacon.min.js'
    script.setAttribute(
      'data-cf-beacon',
      JSON.stringify({ token: CLOUDFLARE_ANALYTICS_TOKEN })
    )
    document.head.appendChild(script)

    return () => {
      document.getElementById(SCRIPT_ID)?.remove()
    }
  }, [consent])

  return null
}
