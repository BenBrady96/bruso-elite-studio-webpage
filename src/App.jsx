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
        <About />
        <ServiceArea
          id="tattoo"
          title="Tattoo"
          intro="Custom artwork, cover ups and fine detail work. Browse a selection of recent pieces and view our session pricing below."
          images={tattooGallery}
          prices={tattooPricing}
          status={dataStatus}
          altLabel="Tattoo artwork"
          pricingNote="Get in touch for a bespoke quote on larger custom pieces."
          galleryEmptyMessage="No tattoo images are available at the moment."
        />
        <ServiceArea
          id="aesthetics"
          title="Aesthetics"
          intro="Skin treatments, boosters, piercings and more, carried out with the same care and precision. Explore our work and the full price list below."
          images={aestheticsGallery}
          prices={aestheticsPricing}
          status={dataStatus}
          altLabel="Aesthetics treatment"
          pricingNote="Get in touch to book a consultation or to ask about a treatment."
          galleryEmptyMessage="No aesthetics images are available at the moment."
        />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
