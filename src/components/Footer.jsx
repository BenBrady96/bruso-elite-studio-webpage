import { Mail, Phone } from 'lucide-react'
import SocialLinks from './SocialLinks'
import ServiceChooser from './ServiceChooser'
import {
  ADDRESS_FULL,
  COMPANY,
  CONTACTS,
  STUDIO_NAME,
  TEXT_DEFAULTS,
} from '../constants'

export default function Footer({ text = TEXT_DEFAULTS.thankYou }) {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-extrabold uppercase tracking-[0.2em]">
              {STUDIO_NAME}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {text}
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
              <SocialLinks size={22} chooserAlign="left" chooserDirection="up" />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 gap-6 text-xs leading-relaxed text-white/50 md:grid-cols-2">
            <div>
              <p>
                {COMPANY.legalName} (company number {COMPANY.number}), registered
                in {COMPANY.jurisdiction}.
              </p>
              <p className="mt-2">Registered office: {COMPANY.registeredOffice}</p>
              {COMPANY.vatRegistered && (
                <p className="mt-2">
                  {COMPANY.vatNumber ? (
                    <>VAT number: {COMPANY.vatNumber}</>
                  ) : (
                    <>
                      VAT registered.{' '}
                      <a
                        href={`mailto:${COMPANY.privacyEmail}?subject=VAT%20registration%20number%20request`}
                        className="text-white/70 underline underline-offset-4 hover:text-white"
                      >
                        Contact us
                      </a>{' '}
                      for our VAT registration number.
                    </>
                  )}
                </p>
              )}
            </div>
            <div className="flex flex-wrap items-start gap-x-6 gap-y-2 uppercase tracking-widest">
              <a
                href="#privacy"
                className="transition-opacity hover:text-white/80"
              >
                Privacy Policy
              </a>
              <a
                href="#cookies"
                className="transition-opacity hover:text-white/80"
              >
                Cookie Policy
              </a>
            </div>
          </div>

          <p className="mt-6 text-center text-xs uppercase tracking-widest text-white/50">
            &copy; {new Date().getFullYear()} {STUDIO_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
