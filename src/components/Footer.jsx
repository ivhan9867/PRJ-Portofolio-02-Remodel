import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function WordReveal({ text, className, delay = 0 }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  return (
    <div ref={ref} className={className}>
      {text.split(' ').map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.2em]">
          <motion.span className="inline-block"
            initial={{ y: '110%' }} animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.65, delay: delay + i * 0.07, ease: [0.16,1,0.3,1] }}>
            {w}
          </motion.span>
        </span>
      ))}
    </div>
  )
}

export default function Footer() {
  const waveRef = useRef(null)

  useEffect(() => {
    const canvas = waveRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId, t = 0
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.005
      for (let i = 0; i < 4; i++) {
        ctx.beginPath()
        const amp = 10 + i * 5
        const yBase = canvas.height * (0.38 + i * 0.13)
        ctx.moveTo(0, yBase)
        for (let x = 0; x <= canvas.width; x += 3) {
          ctx.lineTo(x, yBase
            + Math.sin(x * 0.008 + t + i * 1.3) * amp
            + Math.cos(x * 0.005 + t * 0.7 + i) * (amp * 0.45))
        }
        ctx.strokeStyle = `rgba(255,255,255,${0.045 - i * 0.008})`
        ctx.lineWidth = 1
        ctx.stroke()
      }
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <>
      {/* CTA pill — matches Fini's big rounded rectangle with gradient */}
      <section id="contact" className="relative z-10 px-6 md:px-10 pb-8">
        <div className="relative rounded-[2rem] overflow-hidden"
          style={{ background: 'linear-gradient(140deg, #18243e 0%, #1c1832 50%, #18243e 100%)' }}>
          <canvas ref={waveRef} className="absolute inset-0 w-full h-full pointer-events-none" />
          {/* Subtle glow center */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 65%, rgba(55,75,200,0.18) 0%, transparent 60%)' }} />

          <div className="relative px-8 md:px-16 py-20 md:py-24 text-center flex flex-col items-center gap-8">
            <div>
              <WordReveal text="Let's Upgrade Your" delay={0}
                className="font-display font-bold text-[#e8e6f0] leading-tight"
                style={{ fontSize: 'clamp(1.6rem,5vw,3.2rem)' }} />
              <WordReveal text="Website/Application." delay={0.1}
                className="font-display font-bold text-[#e8e6f0] leading-tight"
                style={{ fontSize: 'clamp(1.6rem,5vw,3.2rem)' }} />
            </div>

            <motion.a href="mailto:vhan47@email.com" data-cursor
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden btn-sweep px-8 py-3 bg-[#0c1020] text-[#e8e6f0] rounded-full font-body text-[0.85rem] font-medium border border-white/10 hover:border-white/20 transition-all duration-300">
              Contact Me
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer bar */}
      <footer className="relative z-10 px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-3 border-t border-white/[0.05]">
        <span className="font-display text-[0.8rem] text-muted">© Vhan._47 2025</span>
        <div className="flex items-center gap-5">
          {[['LinkedIn','#'],['Mail','mailto:vhan47@email.com'],['Instagram','#']].map(([s,h]) => (
            <a key={s} href={h} data-cursor
              className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-muted hover:text-[#e8e6f0] transition-colors duration-300">
              {s}
            </a>
          ))}
        </div>
      </footer>
    </>
  )
}
