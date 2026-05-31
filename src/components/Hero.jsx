import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { CONTACTS, STUDIO_NAME } from '../constants'
import { getDriveImageCandidates } from '../utils/driveImage'

export default function Hero({ image, onImageSettled }) {
  const candidates = getDriveImageCandidates(image, 1600)
  const [candidateIndex, setCandidateIndex] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const src = candidates[candidateIndex]

  const handleLoad = () => {
    setLoaded(true)
    onImageSettled?.()
  }

  const handleError = () => {
    setLoaded(false)
    setCandidateIndex((current) => {
      const next = current + 1
      if (next >= candidates.length) {
        onImageSettled?.()
      }
      return next
    })
  }

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-black" aria-hidden="true">
        {src && (
          <img
            src={src}
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            onLoad={handleLoad}
            onError={handleError}
            className={`h-full w-full object-cover transition-opacity duration-700 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
      </div>
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 pt-24 text-center sm:px-8">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-white sm:text-sm">
          Premium Tattoo &amp; Aesthetics Studio
        </p>
        <h1 className="fire-text text-4xl font-extrabold uppercase leading-tight tracking-tight sm:text-6xl md:text-7xl">
          {STUDIO_NAME}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
          Exceptional custom tattoo artwork and expert aesthetic treatments in a
          spotless, welcoming studio.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={CONTACTS.tattoo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 border border-white bg-white px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-colors hover:bg-black hover:text-white sm:w-auto"
          >
            Book Tattoo
            <ArrowRight size={18} />
          </a>
          <a
            href={CONTACTS.aesthetics.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 border border-white bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black sm:w-auto"
          >
            Book Aesthetics
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
