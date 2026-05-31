import { Facebook, Instagram } from 'lucide-react'
import TikTokIcon from './icons/TikTokIcon'
import ServiceChooser from './ServiceChooser'
import { CONTACTS } from '../constants'

export default function SocialLinks({
  size = 20,
  className = '',
  linkClassName = '',
  chooserAlign = 'right',
  chooserDirection = 'down',
}) {
  const baseLink =
    'inline-flex items-center justify-center text-white transition-opacity hover:opacity-60'

  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <ServiceChooser
        ariaLabel="Choose a Facebook page"
        menuLabel="Facebook"
        align={chooserAlign}
        direction={chooserDirection}
        triggerClassName={`${baseLink} ${linkClassName}`}
        trigger={<Facebook size={size} />}
        options={[
          { label: 'Tattoo', href: CONTACTS.tattoo.facebook },
          { label: 'Aesthetics', href: CONTACTS.aesthetics.facebook },
        ]}
      />
      <ServiceChooser
        ariaLabel="Choose an Instagram page"
        menuLabel="Instagram"
        align={chooserAlign}
        direction={chooserDirection}
        triggerClassName={`${baseLink} ${linkClassName}`}
        trigger={<Instagram size={size} />}
        options={[
          { label: 'Tattoo', href: CONTACTS.tattoo.instagram },
          { label: 'Aesthetics', href: CONTACTS.aesthetics.instagram },
        ]}
      />
      <a
        href={CONTACTS.tattoo.tiktok}
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
