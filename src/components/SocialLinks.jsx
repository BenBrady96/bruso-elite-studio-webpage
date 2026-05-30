import { Facebook, Instagram } from 'lucide-react'
import TikTokIcon from './icons/TikTokIcon'
import { SOCIAL_LINKS } from '../constants'

export default function SocialLinks({ size = 20, className = '', linkClassName = '' }) {
  const baseLink =
    'inline-flex items-center justify-center text-white transition-opacity hover:opacity-60'

  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <a
        href={SOCIAL_LINKS.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Bruso Elite Studio on Facebook"
        className={`${baseLink} ${linkClassName}`}
      >
        <Facebook size={size} />
      </a>
      <a
        href={SOCIAL_LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Bruso Elite Studio on Instagram"
        className={`${baseLink} ${linkClassName}`}
      >
        <Instagram size={size} />
      </a>
      <a
        href={SOCIAL_LINKS.tiktok}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Bruso Elite Studio on TikTok"
        className={`${baseLink} ${linkClassName}`}
      >
        <TikTokIcon size={size} />
      </a>
    </div>
  )
}
