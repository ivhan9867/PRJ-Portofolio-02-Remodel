import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ x: -100, y: -100 })
  const ring    = useRef({ x: -100, y: -100 })
  const [big, setBig] = useState(false)
  const raf = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
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

    const over  = (e) => { if (e.target.closest('a,button,[data-cursor]')) setBig(true)  }
    const out   = (e) => { if (e.target.closest('a,button,[data-cursor]')) setBig(false) }
    document.addEventListener('mouseover',  over)
    document.addEventListener('mouseout',   out)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
      document.removeEventListener('mouseover',  over)
      document.removeEventListener('mouseout',   out)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="fixed top-0 left-0 w-[10px] h-[10px] rounded-full bg-accent pointer-events-none z-[99999]" style={{ mixBlendMode:'difference' }} />
      <div ref={ringRef} className={`fixed top-0 left-0 rounded-full pointer-events-none z-[99998] border transition-all duration-300 ${big ? 'w-[52px] h-[52px] border-accent bg-accent/5' : 'w-[40px] h-[40px] border-accent/40'}`} />
    </>
  )
}
