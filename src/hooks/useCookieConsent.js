import { useEffect, useState } from 'react'
import { getCookieConsent } from '../utils/cookieConsent'

export default function useCookieConsent() {
  const [consent, setConsent] = useState(getCookieConsent)

  useEffect(() => {
    const handleChange = (event) => {
      setConsent(event.detail ?? getCookieConsent())
    }

    window.addEventListener('cookie-consent-change', handleChange)
    return () => window.removeEventListener('cookie-consent-change', handleChange)
  }, [])

  return consent
}
