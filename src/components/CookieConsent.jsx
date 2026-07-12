import { useEffect, useState } from 'react'
import { getCookieConsent, setCookieConsent, COOKIE_CONSENT } from '../utils/cookieConsent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const syncVisibility = () => {
      setVisible(getCookieConsent() === null)
    }

    syncVisibility()
    window.addEventListener('cookie-consent-change', syncVisibility)
    return () => window.removeEventListener('cookie-consent-change', syncVisibility)
  }, [])

  if (!visible) return null

  const accept = () => {
    setCookieConsent(COOKIE_CONSENT.ACCEPTED)
    setVisible(false)
  }

  const reject = () => {
    setCookieConsent(COOKIE_CONSENT.REJECTED)
    setVisible(false)
  }

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-gray-800 bg-black/95 p-5 backdrop-blur sm:p-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <h2
            id="cookie-consent-title"
            className="text-sm font-bold uppercase tracking-widest text-white"
          >
            Cookies
          </h2>
          <p id="cookie-consent-description" className="mt-2 text-sm leading-relaxed text-white/75">
            We use a strictly necessary cookie to remember your choice. If you
            accept, we will also load Google Maps on our location page and
            Cloudflare Web Analytics to help us understand how the site is used.
            See our{' '}
            <a
              href="#cookies"
              className="text-white underline underline-offset-4 hover:opacity-70"
            >
              Cookie Policy
            </a>{' '}
            and{' '}
            <a
              href="#privacy"
              className="text-white underline underline-offset-4 hover:opacity-70"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={reject}
            className="border border-white/40 px-5 py-3 text-sm font-semibold uppercase tracking-widest text-white/80 transition-colors hover:border-white hover:text-white"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={accept}
            className="border border-white bg-white px-5 py-3 text-sm font-semibold uppercase tracking-widest text-black transition-colors hover:bg-black hover:text-white"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
