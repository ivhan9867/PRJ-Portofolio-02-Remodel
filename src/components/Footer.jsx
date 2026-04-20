import { useEffect, useRef } from 'react'
import { useInView } from '../hooks/useInView'

export default function Footer() {
  const waveRef = useRef(null)
  const { ref: ctaRef, inView: ctaInView } = useInView(0.2)

  useEffect(() => {
    const canvas = waveRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf, t = 0
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.005
      for (let i = 0; i < 4; i++) {
        ctx.beginPath()
        const amp = 9 + i * 4, yBase = canvas.height * (0.38 + i * 0.13)
        ctx.moveTo(0, yBase)
        for (let x = 0; x <= canvas.width; x += 4) {
          ctx.lineTo(x,
            yBase
            + Math.sin(x * 0.008 + t + i * 1.3) * amp
            + Math.cos(x * 0.005 + t * 0.7 + i) * amp * 0.4
          )
        }
        ctx.strokeStyle = `rgba(255,255,255,${0.04 - i * 0.007})`
        ctx.lineWidth = 1
        ctx.stroke()
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <>
      {/* CTA pill */}
      <section id="contact" style={{ position:'relative', zIndex:10 }}
        className="px-6 md:px-10 pb-8">
        <div ref={ctaRef} style={{
          position: 'relative', borderRadius: '2rem', overflow: 'hidden',
          background: 'linear-gradient(140deg,#18243e 0%,#1c1832 50%,#18243e 100%)',
        }}>
          <canvas ref={waveRef} style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none' }} />
          <div style={{
            position:'absolute', inset:0, pointerEvents:'none',
            background:'radial-gradient(ellipse at 50% 65%,rgba(55,75,200,0.18) 0%,transparent 60%)',
          }} />
          <div style={{
            position:'relative', padding:'80px 32px',
            display:'flex', flexDirection:'column', alignItems:'center',
            textAlign:'center', gap:28,
          }}>
            <div style={{
              opacity: ctaInView ? 1 : 0,
              transform: ctaInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.65s ease, transform 0.65s ease',
            }}>
              <div style={{ fontFamily:'"Playfair Display",serif', fontWeight:700, color:'#e8e6f0', lineHeight:1.15, fontSize:'clamp(1.7rem,5vw,3.2rem)' }}>
                Let's Upgrade Your
              </div>
              <div style={{ fontFamily:'"Playfair Display",serif', fontWeight:700, color:'#e8e6f0', lineHeight:1.15, fontSize:'clamp(1.7rem,5vw,3.2rem)' }}>
                Website/Application.
              </div>
            </div>
            <a href="mailto:vhan47@email.com" data-cursor
              className="btn-sweep"
              style={{
                padding:'12px 32px', borderRadius:999,
                background:'rgba(10,12,22,0.9)', color:'#e8e6f0',
                fontFamily:'"DM Sans",sans-serif', fontSize:'0.88rem', fontWeight:500,
                border:'1.5px solid rgba(255,255,255,0.12)',
                textDecoration:'none',
                opacity: ctaInView ? 1 : 0,
                transform: ctaInView ? 'translateY(0)' : 'translateY(16px)',
                transition:'opacity 0.5s 0.3s ease, transform 0.5s 0.3s ease, border-color 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor='rgba(255,255,255,0.22)'}
              onMouseLeave={e => e.currentTarget.style.borderColor='rgba(255,255,255,0.12)'}
            >Contact Me</a>
          </div>
        </div>
      </section>

      {/* Footer bar */}
      <footer style={{ position:'relative', zIndex:10 }}
        className="px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-3 border-t border-white/[0.05]">
        <span style={{ fontFamily:'"Playfair Display",serif', fontSize:'0.8rem', color:'rgba(82,82,110,1)' }}>
          © Vhan._47 2025
        </span>
        <div style={{ display:'flex', gap:20 }}>
          {[['LinkedIn','#'],['Mail','mailto:vhan47@email.com'],['Instagram','#']].map(([s,h]) => (
            <a key={s} href={h} data-cursor style={{
              fontFamily:'"DM Mono",monospace', fontSize:'0.68rem',
              letterSpacing:'0.1em', textTransform:'uppercase',
              color:'rgba(82,82,110,1)', textDecoration:'none',
              transition:'color 0.3s',
            }}
              onMouseEnter={e => e.target.style.color='#e8e6f0'}
              onMouseLeave={e => e.target.style.color='rgba(82,82,110,1)'}
            >{s}</a>
          ))}
        </div>
      </footer>
    </>
  )
}
