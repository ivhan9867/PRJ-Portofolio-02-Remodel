import { HashRouter, Routes, Route } from 'react-router-dom'
import GlowBackground from './components/GlowBackground'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import CaseStudy from './pages/CaseStudy'

function Home() {
  return (
    <div style={{ position:'relative', minHeight:'100vh', background:'#07080f', overflowX:'hidden' }}>
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

export default function App() {
  return (
    // HashRouter works on GitHub Pages with no server config needed
    // URLs will be: yourdomain.com/#/work/nolimitclass
    <HashRouter>
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/work/:id" element={<CaseStudy />} />
        <Route path="*"         element={<Home />} />
      </Routes>
    </HashRouter>
  )
}
