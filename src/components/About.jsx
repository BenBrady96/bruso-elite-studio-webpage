import { TEXT_DEFAULTS } from '../constants'

export default function About({ text = TEXT_DEFAULTS.about }) {
  return (
    <section id="about" className="section-padding border-t border-gray-800">
      <div className="mx-auto max-w-4xl text-center" data-aos="fade-up">
        <h2 className="section-heading">About the Studio</h2>
        <div className="mx-auto mt-6 h-px w-16 bg-white" aria-hidden="true" />
        <p className="mt-8 text-base leading-relaxed text-white/85 sm:text-lg">
          {text}
        </p>
      </div>
    </section>
  )
}
