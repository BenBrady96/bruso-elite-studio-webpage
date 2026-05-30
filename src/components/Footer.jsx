import { Phone } from 'lucide-react'
import SocialLinks from './SocialLinks'
import {
  ADDRESS_FULL,
  PHONE_DISPLAY,
  STUDIO_NAME,
  WHATSAPP_URL,
} from '../constants'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-extrabold uppercase tracking-[0.2em]">
              {STUDIO_NAME}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Thank you for visiting. We look forward to welcoming you to the
              studio and bringing your vision to life.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest">
              Contact
            </h4>
            <p className="mt-4 text-sm text-white/70">{ADDRESS_FULL}</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm text-white transition-opacity hover:opacity-60"
            >
              <Phone size={16} />
              {PHONE_DISPLAY}
            </a>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest">
              Follow Us
            </h4>
            <p className="mt-4 text-sm text-white/70">
              Stay up to date with our latest work across social media.
            </p>
            <div className="mt-4">
              <SocialLinks size={22} />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-xs uppercase tracking-widest text-white/50">
          &copy; {new Date().getFullYear()} {STUDIO_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
