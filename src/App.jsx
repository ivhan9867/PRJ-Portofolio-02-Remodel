import GlowBackground from './components/GlowBackground'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* Grain - fixed, clipped inside its own element via overflow:hidden in CSS */}
      <div className="grain-overlay" />
      {/* Glow blobs - fixed behind everything */}
      <GlowBackground />
      {/* Custom cursor */}
      <Cursor />
      {/* Main wrapper - clip horizontal overflow only */}
      <div className="relative min-h-screen" style={{ background: '#07080f', overflowX: 'hidden' }}>
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <About />
          <Experience />
          <Footer />
        </main>
      </div>
    </>
  )
}
