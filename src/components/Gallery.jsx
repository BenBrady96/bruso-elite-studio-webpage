import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

import DataStatus from './DataStatus'
import GalleryImage from './GalleryImage'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function Gallery({ images = [], status = {} }) {
  const hasImages = Array.isArray(images) && images.length > 0

  return (
    <section id="gallery" className="section-padding border-t border-gray-800">
      <div className="mx-auto max-w-6xl" data-aos="fade-up">
        <div className="text-center">
          <h2 className="section-heading">Gallery</h2>
          <div className="mx-auto mt-6 h-px w-16 bg-white" aria-hidden="true" />
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            A selection of recent work from the studio. Swipe or drag to explore.
          </p>
        </div>

        <div className="mt-12">
          {hasImages ? (
            <Swiper
              modules={[EffectCoverflow, Pagination, Navigation]}
              effect="coverflow"
              grabCursor
              centeredSlides
              loop={images.length > 2}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 40,
                stretch: 0,
                depth: 120,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{ clickable: true }}
              navigation
              className="!pb-14"
            >
              {images.map((image, index) => (
                <SwiperSlide
                  key={image.id || index}
                  className="!w-[78vw] max-w-[420px] sm:!w-[360px]"
                >
                  <div className="border border-white bg-black">
                    <div className="aspect-[3/4] w-full overflow-hidden">
                      <GalleryImage image={image} index={index} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <DataStatus
              {...status}
              emptyMessage="No gallery images are available at the moment."
            />
          )}
        </div>
      </div>
    </section>
  )
}
