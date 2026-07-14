import { MapPin } from 'lucide-react'
import { ADDRESS_FULL, MAPS_EMBED_URL, MAPS_URL } from '../constants'
import useCookieConsent from '../hooks/useCookieConsent'
import { COOKIE_CONSENT } from '../utils/cookieConsent'

export default function MapEmbed() {
  const consent = useCookieConsent()
  const mapsAllowed = consent === COOKIE_CONSENT.ACCEPTED

  if (mapsAllowed) {
    return (
      <iframe
        title="Map showing the location of Bruso Elite Studio"
        src={MAPS_EMBED_URL}
        className="block h-full min-h-[320px] w-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    )
  }

  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center gap-4 bg-white/5 p-8 text-center">
      <MapPin size={28} className="text-white/70" />
      <p className="max-w-sm text-sm leading-relaxed text-white/70">
        The interactive map uses Google Maps, which may set cookies. Accept cookies
        to view the embedded map, or open our location directly in Google Maps.
      </p>
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-white px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
      >
        Open in Google Maps
      </a>
      <a
        href="#cookies"
        className="text-xs uppercase tracking-widest text-white/50 underline underline-offset-4 hover:text-white/80"
      >
        Cookie settings
      </a>
    </div>
  )
}
