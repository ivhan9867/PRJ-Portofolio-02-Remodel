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
    // Root: no overflow hidden here — let fixed elements sit freely
    <div style={{ position:'relative', minHeight:'100vh', background:'#07080f', overflowX:'hidden' }}>
      {/* Grain: fixed, self-clipping via overflow:hidden in CSS */}
      <div className="grain-overlay" />
      {/* Glow blobs behind everything */}
      <GlowBackground />
      {/* Cursor */}
      <Cursor />
      {/* Page content */}
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Footer />
      </main>
    </div>
  )
}
