import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import useStudioData from './hooks/useStudioData'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ServiceArea from './components/ServiceArea'
import Reviews from './components/Reviews'
import Location from './components/Location'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Loader from './components/Loader'

export default function App() {
  const {
    mainImage,
    mainImageLoading,
    tattooGallery,
    aestheticsGallery,
    tattooPricing,
    aestheticsPricing,
    text,
    loading,
    retrying,
    attempt,
    error,
    retry,
    maxAttempts,
  } = useStudioData()

  const [heroImageSettled, setHeroImageSettled] = useState(false)
  const heroReady = !mainImageLoading && (!mainImage || heroImageSettled)

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    })
  }, [])

  useEffect(() => {
    AOS.refresh()
  }, [
    loading,
    retrying,
    tattooGallery,
    aestheticsGallery,
    tattooPricing,
    aestheticsPricing,
  ])

  const dataStatus = { loading, retrying, attempt, error, onRetry: retry, maxAttempts }

  return (
    <div className="min-h-screen bg-black text-white">
      {!heroReady && <Loader />}
      <Header />
      <main>
        <Hero image={mainImage} onImageSettled={() => setHeroImageSettled(true)} />
        <About text={text.about} />
        <ServiceArea
          id="tattoo"
          title="Tattoo"
          intro={text.tattooIntro}
          images={tattooGallery}
          prices={tattooPricing}
          status={dataStatus}
          altLabel="Tattoo artwork"
          pricingNote={text.tattooPricing}
          galleryEmptyMessage="No tattoo images are available at the moment."
        />
        <ServiceArea
          id="aesthetics"
          title="Aesthetics"
          intro={text.aestheticsIntro}
          images={aestheticsGallery}
          prices={aestheticsPricing}
          status={dataStatus}
          altLabel="Aesthetics treatment"
          pricingNote={text.aestheticsPricing}
          galleryEmptyMessage="No aesthetics images are available at the moment."
        />
        <Reviews />
        <Location />
      </main>
      <Footer text={text.thankYou} />
      <WhatsAppButton />
    </div>
  )
}
