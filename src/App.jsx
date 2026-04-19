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
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: '#07080f' }}>
      <div className="grain-overlay" />
      <GlowBackground />
      <Cursor />
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
