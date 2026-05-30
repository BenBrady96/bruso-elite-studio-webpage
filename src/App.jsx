import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import useStudioData from './hooks/useStudioData'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Pricing from './components/Pricing'
import Reviews from './components/Reviews'
import Location from './components/Location'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Loader from './components/Loader'

export default function App() {
  const { prices, images, loading, retrying, attempt, error, retry, maxAttempts } =
    useStudioData()

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
  }, [loading, retrying, prices, images])

  // The full screen loader only covers the first attempt; later retries are
  // reported inline by the gallery and pricing sections.
  if (loading) {
    return <Loader />
  }

  const dataStatus = { retrying, attempt, error, onRetry: retry, maxAttempts }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery images={images} status={dataStatus} />
        <Pricing prices={prices} status={dataStatus} />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
