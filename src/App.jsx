import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import useStudioData from './hooks/useStudioData'
import useLegalPage from './hooks/useLegalPage'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ServiceArea from './components/ServiceArea'
import Reviews from './components/Reviews'
import Location from './components/Location'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Loader from './components/Loader'
import CookieConsent from './components/CookieConsent'
import PrivacyPolicy from './components/PrivacyPolicy'
import CookiePolicy from './components/CookiePolicy'
import { LEGAL_NOTES } from './constants'

export default function App() {
  const legalPage = useLegalPage()
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
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    AOS.init({
      duration: prefersReducedMotion ? 0 : 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      disable: prefersReducedMotion,
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

  useEffect(() => {
    if (legalPage) {
      document.title = legalPage === 'privacy'
        ? 'Privacy Policy | Bruso Elite Studio'
        : 'Cookie Policy | Bruso Elite Studio'
      window.scrollTo(0, 0)
    } else {
      document.title =
        "Bruso Elite Studio | Tattoo & Aesthetics Studio in King's Lynn"
    }
  }, [legalPage])

  if (legalPage === 'privacy') {
    return (
      <>
        <PrivacyPolicy />
        <CookieConsent />
      </>
    )
  }

  if (legalPage === 'cookies') {
    return (
      <>
        <CookiePolicy />
        <CookieConsent />
      </>
    )
  }

  const dataStatus = { loading, retrying, attempt, error, onRetry: retry, maxAttempts }

  return (
    <div className="min-h-screen bg-black text-white">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:border focus:border-white focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:uppercase focus:tracking-widest"
      >
        Skip to content
      </a>
      {!heroReady && <Loader />}
      <Header />
      <main>
        <Hero image={mainImage} onImageSettled={() => setHeroImageSettled(true)} />
        <About text={text.about} />
        <ServiceArea
          id="tattoo"
          title="Tattoo"
          intro={text.tattooIntro}
          notice={LEGAL_NOTES.tattooAge}
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
      <CookieConsent />
    </div>
  )
}
