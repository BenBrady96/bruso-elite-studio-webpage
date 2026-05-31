import { Mail, Phone } from 'lucide-react'
import SocialLinks from './SocialLinks'
import ServiceChooser from './ServiceChooser'
import { ADDRESS_FULL, CONTACTS, STUDIO_NAME } from '../constants'

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

            <div className="mt-3">
              <ServiceChooser
                ariaLabel="Message us on WhatsApp"
                menuLabel="WhatsApp"
                align="left"
                direction="down"
                triggerClassName="inline-flex items-center gap-2 text-sm text-white transition-opacity hover:opacity-60"
                trigger={
                  <>
                    <Phone size={16} />
                    WhatsApp us
                  </>
                }
                options={[
                  {
                    label: 'Tattoo',
                    subLabel: CONTACTS.tattoo.phoneDisplay,
                    href: CONTACTS.tattoo.whatsappUrl,
                  },
                  {
                    label: 'Aesthetics',
                    subLabel: CONTACTS.aesthetics.phoneDisplay,
                    href: CONTACTS.aesthetics.whatsappUrl,
                  },
                ]}
              />
            </div>

            <div className="mt-4 space-y-2">
              <a
                href={`mailto:${CONTACTS.tattoo.email}`}
                className="flex items-center gap-2 text-sm text-white/70 transition-opacity hover:opacity-100"
              >
                <Mail size={16} />
                <span>
                  <span className="text-white/50">Tattoo: </span>
                  {CONTACTS.tattoo.email}
                </span>
              </a>
              <a
                href={`mailto:${CONTACTS.aesthetics.email}`}
                className="flex items-center gap-2 text-sm text-white/70 transition-opacity hover:opacity-100"
              >
                <Mail size={16} />
                <span>
                  <span className="text-white/50">Aesthetics: </span>
                  {CONTACTS.aesthetics.email}
                </span>
              </a>
            </div>
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
