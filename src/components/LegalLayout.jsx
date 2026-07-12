import { ArrowLeft } from 'lucide-react'
import { STUDIO_NAME } from '../constants'

export default function LegalLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-800 bg-black/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#top"
            className="text-base font-extrabold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-60"
          >
            {STUDIO_NAME}
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white/70 transition-opacity hover:opacity-100"
          >
            <ArrowLeft size={16} />
            Back to site
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <h1 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
          {title}
        </h1>
        <div className="prose-invert mt-10 space-y-6 text-sm leading-relaxed text-white/80 sm:text-base">
          {children}
        </div>
        <p className="mt-12 border-t border-gray-800 pt-6 text-xs text-white/50">
          Last updated: July 2026
        </p>
      </main>
    </div>
  )
}
