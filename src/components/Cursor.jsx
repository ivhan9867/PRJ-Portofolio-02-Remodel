import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Only activate on true pointer devices (not touch)
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = -200, my = -200   // start offscreen
    let rx = -200, ry = -200
    let isLarge = false
    let raf

    const onMove = e => {
      mx = e.clientX
      my = e.clientY
      // Reveal on first move
      if (dot.style.opacity === '0') {
        dot.style.opacity  = '1'
        ring.style.opacity = '1'
      }
    }

    const onOver = e => {
      if (!isLarge && e.target.closest('a, button, [data-cursor]')) {
        isLarge = true
        ring.style.width       = '50px'
        ring.style.height      = '50px'
        ring.style.borderColor = '#c9a84c'
        ring.style.background  = 'rgba(201,168,76,0.06)'
      }
    }

    const onOut = e => {
      if (isLarge && e.target.closest('a, button, [data-cursor]')) {
        isLarge = false
        ring.style.width       = '40px'
        ring.style.height      = '40px'
        ring.style.borderColor = 'rgba(201,168,76,0.4)'
        ring.style.background  = 'transparent'
      }
    }

    // rAF loop — dot snaps instantly, ring lerps for smooth follow
    const loop = () => {
      // Dot: instant via transform (no lerp needed, looks snappy)
      dot.style.transform = `translate(${mx - 5}px, ${my - 5}px)`
      // Ring: lerp for the lag effect
      rx += (mx - rx - 20) * 0.12
      ry += (my - ry - 20) * 0.12
      ring.style.transform = `translate(${Math.round(rx)}px, ${Math.round(ry)}px)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover',  onOver, { passive: true })
    document.addEventListener('mouseout',   onOut,  { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover',  onOver)
      document.removeEventListener('mouseout',   onOut)
    }
  }, [])

  return (
    <>
      {/* Dot — instant snap, mix-blend-mode:difference for visibility on any bg */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          zIndex: 99999,
          width: 10, height: 10,
          borderRadius: '50%',
          background: '#c9a84c',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          opacity: 0,
          // No will-change here — dot uses instant snap, composite layer wasted
        }}
      />
      {/* Ring — lerp follower */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          zIndex: 99998,
          width: 40, height: 40,
          borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.4)',
          background: 'transparent',
          pointerEvents: 'none',
          opacity: 0,
          willChange: 'transform', // ring lerps every frame — benefit from composite
          transition: 'width 0.22s ease, height 0.22s ease, border-color 0.22s ease, background 0.22s ease',
        }}
      />
    </>
  )
}
