import { motion } from 'framer-motion'

function WordReveal({ children, delay = 0, className = '' }) {
  return (
    <span className={`inline-block overflow-hidden align-bottom ${className}`}>
      <motion.span
        className="inline-block"
        initial={{ y: '108%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.72, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  const line1 = ['An', 'Architect', 'of', 'User', 'Minds,']
  const line2 = ['based', 'in', 'Indonesia']

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 z-10">

      {/* ── Avatar ── */}
      <motion.div
        className="relative mb-5"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16,1,0.3,1] }}
      >
        {/* Glowing ring */}
        <div className="absolute rounded-full" style={{
          inset: -10,
          background: 'radial-gradient(circle, rgba(80,110,255,0.6) 0%, rgba(110,60,230,0.35) 50%, transparent 75%)',
          filter: 'blur(10px)',
        }} />
        {/* Avatar */}
        <div className="relative w-[78px] h-[78px] rounded-full overflow-hidden bg-[#161830]"
          style={{ border: '1.5px solid rgba(100,130,255,0.3)', boxShadow: '0 0 20px rgba(70,100,240,0.25)' }}>
          {/* Replace with: <img src="/your-photo.jpg" className="w-full h-full object-cover" /> */}
          <img src="/avatar-dummy.svg" alt="Vhan._47" className="w-full h-full object-cover"
            onError={e => { e.target.style.display = 'none' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
        </div>

        {/* Name chip */}
        <motion.div
          initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.45 }}
          className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-[3px] text-[0.63rem] text-[#e8e6f0]/75 font-body"
          style={{ background: 'rgba(20,22,48,0.9)', border: '1px solid rgba(255,255,255,0.09)', backdropFilter: 'blur(8px)' }}
        >
          Hi, I'm Vhan._47
        </motion.div>
      </motion.div>

      <div className="h-7" />

      {/* ── Headline ── */}
      <h1 className="font-display font-bold leading-[1.12] mb-5"
        style={{ fontSize: 'clamp(2.1rem, 6.5vw, 5rem)' }}>
        <div className="flex flex-wrap justify-center gap-x-[0.22em] mb-1">
          {line1.map((w, i) => (
            <WordReveal key={w} delay={0.42 + i * 0.07} className="text-[#e8e6f0]">{w}</WordReveal>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-x-[0.22em]">
          {line2.map((w, i) => (
            <WordReveal key={w} delay={0.82 + i * 0.07} className="text-muted">{w}</WordReveal>
          ))}
        </div>
      </h1>

      {/* ── Subtext ── */}
      <motion.p
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 1.1 }}
        className="font-body text-muted text-[0.88rem] max-w-[290px] mb-9 leading-relaxed"
      >
        Redesign ugly interface and experience from your website or application
      </motion.p>

      {/* ── Buttons with light sweep ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 1.28 }}
        className="flex gap-3 items-center"
      >
        {/* Primary — white with sweep */}
        <a href="mailto:vhan47@email.com" data-cursor
          className="relative overflow-hidden btn-sweep px-7 py-[10px] rounded-full font-body text-[0.84rem] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(232,230,240,0.2)]"
          style={{ background: '#e8e6f0', color: '#07080f' }}>
          Contact Me
        </a>
        {/* Secondary — border with gold sweep */}
        <a href="#work" data-cursor
          className="relative overflow-hidden btn-sweep btn-sweep-gold px-7 py-[10px] rounded-full font-body text-[0.84rem] text-[#e8e6f0] transition-all duration-300 hover:-translate-y-0.5"
          style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
          My Works
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 mx-auto"
          style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.28), transparent)' }}
        />
      </motion.div>
    </section>
  )
}
