import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import SocialLinks from './SocialLinks'
import { NAV_LINKS, STUDIO_NAME } from '../constants'

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-gray-800 bg-black/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-16">
        <a
          href="#top"
          className="fire-text text-base font-extrabold uppercase tracking-[0.2em] sm:text-lg"
        >
          {STUDIO_NAME}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest text-white transition-opacity hover:opacity-60"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 sm:gap-6">
          <SocialLinks size={24} className="gap-4 sm:gap-5" />

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex items-center justify-center border border-gray-800 p-1.5 text-white transition-colors hover:border-white lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-gray-800 bg-black lg:hidden">
          <nav className="flex flex-col px-5 py-2 sm:px-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-gray-800 py-4 text-sm uppercase tracking-widest text-white transition-opacity hover:opacity-60 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
