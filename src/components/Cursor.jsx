import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ x: -200, y: -200 })
  const ring    = useRef({ x: -200, y: -200 })
  const [big, setBig]     = useState(false)
  const [visible, setVisible] = useState(false)
  const raf = useRef(null)

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return

    const onMove = (e) => {
      if (!visible) setVisible(true)
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current)
        dotRef.current.style.transform = `translate(${e.clientX - 5}px,${e.clientY - 5}px)`
    }
    window.addEventListener('mousemove', onMove)

    const lerp = () => {
      ring.current.x += (pos.current.x - ring.current.x - 20) * 0.11
      ring.current.y += (pos.current.y - ring.current.y - 20) * 0.11
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${ring.current.x}px,${ring.current.y}px)`
      raf.current = requestAnimationFrame(lerp)
    }
    raf.current = requestAnimationFrame(lerp)

    const over = (e) => { if (e.target.closest('a,button,[data-cursor]')) setBig(true)  }
    const out  = (e) => { if (e.target.closest('a,button,[data-cursor]')) setBig(false) }
    document.addEventListener('mouseover',  over)
    document.addEventListener('mouseout',   out)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
      document.removeEventListener('mouseover',  over)
      document.removeEventListener('mouseout',   out)
    }
  }, [])

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return null

  return (
    <>
      <div ref={dotRef}
        style={{
          position:'fixed', top:0, left:0, zIndex:99999,
          width:10, height:10, borderRadius:'50%',
          background:'#c9a84c', mixBlendMode:'difference',
          pointerEvents:'none',
          opacity: visible ? 1 : 0,
          transition:'opacity 0.3s',
        }}
      />
      <div ref={ringRef}
        style={{
          position:'fixed', top:0, left:0, zIndex:99998,
          borderRadius:'50%', pointerEvents:'none',
          border: big ? '1.5px solid #c9a84c' : '1px solid rgba(201,168,76,0.4)',
          background: big ? 'rgba(201,168,76,0.06)' : 'transparent',
          width: big ? 52 : 40,
          height: big ? 52 : 40,
          transition:'width 0.25s,height 0.25s,border-color 0.25s,background 0.25s',
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  )
}
