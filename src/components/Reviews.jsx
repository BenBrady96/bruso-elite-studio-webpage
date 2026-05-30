import { Star } from 'lucide-react'
import { REVIEWS } from '../data/reviews'

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, index) => (
        <Star key={index} size={16} className="fill-white text-white" />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding border-t border-gray-800">
      <div className="mx-auto max-w-6xl" data-aos="fade-up">
        <div className="text-center">
          <h2 className="section-heading">Reviews</h2>
          <div className="mx-auto mt-6 h-px w-16 bg-white" aria-hidden="true" />
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            What our clients say about their experience at the studio.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <article
              key={review.name}
              className="flex h-full flex-col border border-white bg-black p-6"
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
            >
              <Stars rating={review.rating} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/85">
                {review.text}
              </p>
              <p className="mt-6 border-t border-gray-800 pt-4 text-sm font-bold uppercase tracking-widest">
                {review.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
