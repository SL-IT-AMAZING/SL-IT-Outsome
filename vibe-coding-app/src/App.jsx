import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Services from './components/Services'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Process />
        <Portfolio />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default App
