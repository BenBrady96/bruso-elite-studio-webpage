const STORAGE_KEY = 'bes-cookie-consent'

export const COOKIE_CONSENT = {
  ACCEPTED: 'accepted',
  REJECTED: 'rejected',
}

export function getCookieConsent() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    if (value === COOKIE_CONSENT.ACCEPTED || value === COOKIE_CONSENT.REJECTED) {
      return value
    }
  } catch {
    // localStorage may be unavailable in private browsing or restricted contexts.
  }
  return null
}

export function setCookieConsent(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // Ignore write failures; the banner will remain visible on the next visit.
  }
  window.dispatchEvent(new CustomEvent('cookie-consent-change', { detail: value }))
}

export function hasAnalyticsConsent() {
  return getCookieConsent() === COOKIE_CONSENT.ACCEPTED
}
