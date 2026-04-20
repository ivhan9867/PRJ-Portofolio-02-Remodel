import { useEffect, useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const location = useLocation()
  const ticking  = useRef(false)

  useEffect(() => {
    // Throttle scroll handler with rAF
    const fn = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40)
          ticking.current = false
        })
        ticking.current = true
      }
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [location])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '20px 24px',
      background: scrolled ? 'rgba(7,8,15,0.82)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
      transition: 'background 0.4s ease, border-color 0.4s ease',
      animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both',
    }}>
      <Link to="/" style={{
        fontFamily: '"Playfair Display",serif',
        fontSize: '1rem', textDecoration: 'none',
        color: '#e8e6f0',
        transition: 'color 0.3s',
      }}
        onMouseEnter={e => e.target.style.color = '#c9a84c'}
        onMouseLeave={e => e.target.style.color = '#e8e6f0'}
      >
        Vhan<span style={{ color: '#c9a84c' }}>._47</span>
      </Link>

      {/* Desktop links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}
        className="hidden md:flex">
        {[['Work','#work'],['Experience','#experience']].map(([l,h]) => (
          <a key={l} href={h} style={{
            fontFamily: '"DM Sans",sans-serif',
            fontSize: '0.74rem', letterSpacing: '0.12em',
            textTransform: 'uppercase', textDecoration: 'none',
            color: 'rgba(82,82,110,1)',
            transition: 'color 0.3s',
          }}
            onMouseEnter={e => e.target.style.color = '#e8e6f0'}
            onMouseLeave={e => e.target.style.color = 'rgba(82,82,110,1)'}
          >{l}</a>
        ))}
        <a href="mailto:vhan47@email.com" style={{
          fontFamily: '"DM Sans",sans-serif',
          fontSize: '0.74rem', letterSpacing: '0.08em',
          textTransform: 'uppercase', textDecoration: 'none',
          color: '#c9a84c',
          padding: '7px 18px', borderRadius: 999,
          border: '1px solid rgba(201,168,76,0.55)',
          transition: 'all 0.3s',
        }}
          onMouseEnter={e => { e.target.style.background='#c9a84c'; e.target.style.color='#000' }}
          onMouseLeave={e => { e.target.style.background='transparent'; e.target.style.color='#c9a84c' }}
        >Get in Touch</a>
      </div>

      {/* Hamburger */}
      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
        style={{
          background: 'none', border: 'none', cursor: 'none',
          display: 'flex', flexDirection: 'column', gap: 5, padding: 4,
        }}
        data-cursor
      >
        {[
          { w: open ? 20 : 20, rotate: open ?  45 : 0, ty: open ?  6 : 0 },
          { w: open ?  0 : 14, rotate: 0,               ty: 0 },
          { w: open ? 20 : 16, rotate: open ? -45 : 0, ty: open ? -6 : 0 },
        ].map((s, i) => (
          <span key={i} style={{
            display: 'block', height: 1,
            width: s.w, background: '#e8e6f0',
            transform: `rotate(${s.rotate}deg) translateY(${s.ty}px)`,
            opacity: s.w === 0 ? 0 : 1,
            transition: 'all 0.25s ease',
          }} />
        ))}
      </button>

      {/* Mobile menu */}
      <div style={{
        position: 'absolute', top: '100%', left: 0, right: 0,
        background: 'rgba(7,8,15,0.96)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        padding: open ? '28px 24px' : '0 24px',
        maxHeight: open ? 300 : 0,
        overflow: 'hidden',
        transition: 'max-height 0.35s cubic-bezier(0.16,1,0.3,1), padding 0.35s ease',
        display: 'flex', flexDirection: 'column', gap: 20,
      }} className="md:hidden">
        <Link to="/" style={{ fontFamily: '"Playfair Display",serif', fontSize: '1.2rem', color: '#e8e6f0', textDecoration: 'none' }}>Home</Link>
        {[['Work','#work'],['Experience','#experience']].map(([l,h]) => (
          <a key={l} href={h} onClick={() => setOpen(false)}
            style={{ fontFamily: '"Playfair Display",serif', fontSize: '1.2rem', color: '#e8e6f0', textDecoration: 'none' }}>{l}
          </a>
        ))}
        <a href="mailto:vhan47@email.com"
          style={{ alignSelf: 'flex-start', fontFamily: '"DM Sans",sans-serif', fontSize: '0.85rem', color: '#c9a84c', border: '1px solid rgba(201,168,76,0.5)', borderRadius: 999, padding: '8px 18px', textDecoration: 'none' }}>
          Get in Touch
        </a>
      </div>
    </nav>
  )
}
