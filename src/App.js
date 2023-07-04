import React, {useEffect} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Recommend from './components/Recommend'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Testimonials />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App

