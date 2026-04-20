import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Skip on touch devices entirely
    if (!window.matchMedia('(hover:hover) and (pointer:fine)').matches) return

    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = -100, my = -100
    let rx = -100, ry = -100
    let big = false
    let raf

    // Show cursor on first move
    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      if (dot.style.opacity === '0') {
        dot.style.opacity  = '1'
        ring.style.opacity = '1'
      }
    }

    const onOver = (e) => {
      if (e.target.closest('a,button,[data-cursor]') && !big) {
        big = true
        ring.style.width  = '50px'
        ring.style.height = '50px'
        ring.style.borderColor = '#c9a84c'
        ring.style.background  = 'rgba(201,168,76,0.06)'
      }
    }
    const onOut = (e) => {
      if (e.target.closest('a,button,[data-cursor]') && big) {
        big = false
        ring.style.width  = '40px'
        ring.style.height = '40px'
        ring.style.borderColor = 'rgba(201,168,76,0.4)'
        ring.style.background  = 'transparent'
      }
    }

    // Single rAF loop for ring — dot moves instantly via transform
    const loop = () => {
      // Dot: instant snap
      dot.style.transform = `translate(${mx-5}px,${my-5}px)`
      // Ring: lerp for smooth follow
      rx += (mx - rx - 20) * 0.12
      ry += (my - ry - 20) * 0.12
      ring.style.transform = `translate(${rx}px,${ry}px)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseout',  onOut,  { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout',  onOut)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} style={{
        position: 'fixed', top: 0, left: 0, zIndex: 99999,
        width: 10, height: 10, borderRadius: '50%',
        background: '#c9a84c', mixBlendMode: 'difference',
        pointerEvents: 'none', opacity: 0,
        willChange: 'transform',
      }} />
      <div ref={ringRef} style={{
        position: 'fixed', top: 0, left: 0, zIndex: 99998,
        width: 40, height: 40, borderRadius: '50%',
        border: '1px solid rgba(201,168,76,0.4)',
        pointerEvents: 'none', opacity: 0,
        willChange: 'transform',
        transition: 'width 0.22s ease, height 0.22s ease, border-color 0.22s ease, background 0.22s ease',
      }} />
    </>
  )
}
