import { motion } from 'framer-motion'

// Reveal each word with slide-up — like Fini's smooth text entrance
function WordReveal({ children, delay = 0, className = '' }) {
  return (
    <span className={`inline-block overflow-hidden align-bottom ${className}`}>
      <motion.span
        className="inline-block"
        initial={{ y: '105%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 z-10">

      {/* ── Avatar ── */}
      <motion.div
        className="relative mb-5"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.65, delay: 0.25, ease: [0.16,1,0.3,1] }}
      >
        {/* Glow ring behind avatar */}
        <div className="absolute inset-[-8px] rounded-full opacity-80"
          style={{ background: 'radial-gradient(circle, rgba(70,100,240,0.55) 0%, rgba(110,60,220,0.3) 50%, transparent 75%)', filter: 'blur(8px)' }} />
        {/* Avatar circle */}
        <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden border border-white/15 bg-[#161830]"
          style={{ boxShadow: '0 0 0 1.5px rgba(70,100,240,0.35)' }}>
          {/* Replace src with your real photo */}
          <img src="/avatar-dummy.svg" alt="Vhan._47"
            className="w-full h-full object-cover"
            onError={e => { e.target.style.display = 'none' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
        </div>

        {/* Name chip below avatar */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#161830]/90 backdrop-blur-sm border border-white/10 rounded-full px-3 py-[3px] text-[0.65rem] text-[#e8e6f0]/75 font-body"
        >
          Hi, I'm Vhan._47
        </motion.div>
      </motion.div>

      {/* Spacer for chip */}
      <div className="h-7" />

      {/* ── Headline ── */}
      <h1 className="font-display font-bold leading-[1.1] mb-5"
        style={{ fontSize: 'clamp(2rem, 7vw, 4.8rem)' }}>
        {/* Line 1 */}
        <div className="flex flex-wrap justify-center gap-x-[0.22em]">
          {['An','Architect','of','User','Minds,'].map((w,i) => (
            <WordReveal key={w} delay={0.45 + i * 0.07} className="text-[#e8e6f0]">{w}</WordReveal>
          ))}
        </div>
        {/* Line 2 — muted like Fini */}
        <div className="flex flex-wrap justify-center gap-x-[0.22em] mt-1">
          {['based','in','Indonesia'].map((w,i) => (
            <WordReveal key={w} delay={0.85 + i * 0.07} className="text-muted">{w}</WordReveal>
          ))}
        </div>
      </h1>

      {/* ── Subtext ── */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.15 }}
        className="font-body text-muted text-[0.88rem] max-w-[300px] mb-9 leading-relaxed"
      >
        Redesign ugly interface and experience from your website or application
      </motion.p>

      {/* ── Buttons — matches Fini exactly ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="flex gap-3 items-center"
      >
        <a href="mailto:vhan47@email.com" data-cursor
          className="px-6 py-2.5 bg-[#e8e6f0] text-[#07080f] rounded-full font-body text-[0.85rem] font-medium hover:bg-white hover:-translate-y-0.5 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(232,230,240,0.18)]">
          Contact Me
        </a>
        <a href="#work" data-cursor
          className="px-6 py-2.5 rounded-full border border-white/15 text-[#e8e6f0] font-body text-[0.85rem] hover:border-white/28 hover:-translate-y-0.5 transition-all duration-300">
          My Works
        </a>
      </motion.div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 mx-auto bg-gradient-to-b from-white/25 to-transparent"
        />
      </motion.div>
    </section>
  )
}
