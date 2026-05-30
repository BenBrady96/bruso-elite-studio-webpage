import { ArrowRight } from 'lucide-react'
import { WHATSAPP_URL, STUDIO_NAME } from '../constants'
import heroImage from '../Images/viktor.jpg'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 pt-24 text-center sm:px-8">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-white sm:text-sm">
          Premium Tattoo Studio
        </p>
        <h1 className="fire-text text-4xl font-extrabold uppercase leading-tight tracking-tight sm:text-6xl md:text-7xl">
          {STUDIO_NAME}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
          Exceptional custom artwork and flawless cover ups in a spotless,
          welcoming studio.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 border border-white bg-white px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-colors hover:bg-black hover:text-white"
        >
          Book Now
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  )
}
