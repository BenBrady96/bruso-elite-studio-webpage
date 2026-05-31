import Gallery from './Gallery'
import Pricing from './Pricing'

export default function ServiceArea({
  id,
  title,
  intro,
  images = [],
  prices = [],
  status = {},
  altLabel,
  galleryNote,
  pricingNote,
  galleryEmptyMessage,
  pricingEmptyMessage,
}) {
  return (
    <section id={id} className="section-padding border-t border-gray-800">
      <div className="mx-auto max-w-6xl">
        <div className="text-center" data-aos="fade-up">
          <h2 className="section-heading">{title}</h2>
          <div className="mx-auto mt-6 h-px w-16 bg-white" aria-hidden="true" />
          {intro && (
            <p className="mx-auto mt-6 max-w-2xl text-white/70">{intro}</p>
          )}
        </div>

        <Gallery
          images={images}
          status={status}
          altLabel={altLabel}
          note={galleryNote}
          emptyMessage={galleryEmptyMessage}
        />

        <Pricing
          prices={prices}
          status={status}
          note={pricingNote}
          emptyMessage={pricingEmptyMessage}
        />
      </div>
    </section>
  )
}
