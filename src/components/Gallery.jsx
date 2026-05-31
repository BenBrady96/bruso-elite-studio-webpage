import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

import DataStatus from './DataStatus'
import GalleryImage from './GalleryImage'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function Gallery({
  images = [],
  status = {},
  title = 'Gallery',
  note = 'Swipe or drag to explore.',
  altLabel = 'Studio artwork',
  emptyMessage = 'No gallery images are available at the moment.',
}) {
  const hasImages = Array.isArray(images) && images.length > 0

  return (
    <div className="mt-16" data-aos="fade-up">
      <div className="text-center">
        <h3 className="sub-heading">{title}</h3>
        {note && (
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/60">{note}</p>
        )}
      </div>

      <div className="mt-10">
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
                    <GalleryImage image={image} index={index} altLabel={altLabel} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <DataStatus {...status} emptyMessage={emptyMessage} />
        )}
      </div>
    </div>
  )
}
