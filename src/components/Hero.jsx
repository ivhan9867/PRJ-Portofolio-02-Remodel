import { motion } from 'framer-motion'

// Single word slide-up
function W({ w, delay, muted }) {
  return (
    <span className="inline-block overflow-hidden" style={{ lineHeight: '1.15', verticalAlign: 'bottom' }}>
      <motion.span
        className="inline-block"
        style={{ color: muted ? 'rgba(120,120,150,0.85)' : '#e8e6f0' }}
        initial={{ y: '108%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.72, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {w}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  // line 1: white   line 2: muted — exactly like Fini
  const L1 = ['An','Architect','of','User','Minds,']
  const L2 = ['based','in','Indonesia']

  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center text-center"
      style={{ minHeight: '100vh', padding: '88px 20px 56px' }}
    >

      {/* ── Avatar ── */}
      <motion.div
        style={{ position: 'relative', marginBottom: 12 }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.62, delay: 0.12, ease: [0.16,1,0.3,1] }}
      >
        {/* Circle photo */}
        <div style={{
          width: 100, height: 100,
          borderRadius: '50%',
          overflow: 'hidden',
          border: '2px solid rgba(255,255,255,0.13)',
          background: '#0f1428',
          position: 'relative',
          margin: '0 auto',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.05)',
        }}>
          {/* ↓ Replace with your photo */}
          <img src="/avatar-dummy.svg" alt="Vhan._47"
            style={{ width:'100%', height:'100%', objectFit:'cover' }}
            onError={e => e.target.style.display='none'} />
          <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
        </div>

        {/* Name tag — solid box, centered below, like Fini */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.52, duration: 0.42 }}
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            marginTop: 10,
            whiteSpace: 'nowrap',
            background: 'rgba(8,10,20,0.88)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(12px)',
            borderRadius: 10,
            padding: '5px 13px',
            fontSize: '0.7rem',
            fontWeight: 500,
            color: 'rgba(232,230,240,0.78)',
            fontFamily: '"DM Sans",sans-serif',
            letterSpacing: '0.01em',
          }}
        >
          Hi, I'm Vhan._47
        </motion.div>
      </motion.div>

      {/* Spacer so name tag doesn't overlap headline */}
      <div style={{ height: 52 }} />

      {/* ── Headline line 1 — white ── */}
      <div style={{
        fontSize: 'clamp(2.2rem, 7.5vw, 5.2rem)',
        fontFamily: '"Playfair Display", serif',
        fontWeight: 700,
        lineHeight: 1.12,
        textAlign: 'center',
        maxWidth: 680,
      }}>
        <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'0 0.22em', marginBottom:'0.06em' }}>
          {L1.map((w,i) => <W key={w} w={w} delay={0.38 + i*0.07} muted={false} />)}
        </div>
        {/* Line 2 — muted gray like Fini */}
        <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'0 0.22em' }}>
          {L2.map((w,i) => <W key={w} w={w} delay={0.76 + i*0.07} muted={true} />)}
        </div>
      </div>

      {/* ── Subtext ── */}
      <motion.p
        initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
        transition={{ duration:0.5, delay:1.05 }}
        style={{
          fontFamily: '"DM Sans",sans-serif',
          color: 'rgba(82,82,110,1)',
          fontSize: '0.88rem',
          maxWidth: 280,
          lineHeight: 1.65,
          marginTop: '1.1rem',
          marginBottom: '2.2rem',
          textAlign: 'center',
        }}
      >
        Redesign ugly interface and experience from your website or application
      </motion.p>

      {/* ── Buttons — vertical stack on mobile like Fini ── */}
      <motion.div
        initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
        transition={{ duration:0.5, delay:1.22 }}
        style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:10, width:'100%', maxWidth:300 }}
      >
        {/* Contact Me — dark/black like Fini's primary */}
        <a href="mailto:vhan47@email.com" data-cursor
          className="relative overflow-hidden btn-sweep"
          style={{
            display:'block', width:'100%', textAlign:'center',
            padding:'13px 0',
            borderRadius: 999,
            background: 'rgba(15,18,32,0.95)',
            color: '#e8e6f0',
            fontFamily: '"DM Sans",sans-serif',
            fontSize: '0.88rem',
            fontWeight: 500,
            border: '1.5px solid rgba(255,255,255,0.14)',
            textDecoration: 'none',
            transition: 'all 0.3s',
            boxShadow: '0 2px 20px rgba(0,0,0,0.4)',
          }}
        >
          Contact Me
        </a>

        {/* My Works — lighter border */}
        <a href="#work" data-cursor
          className="relative overflow-hidden btn-sweep btn-sweep-gold"
          style={{
            display:'block', width:'100%', textAlign:'center',
            padding:'12px 0',
            borderRadius: 999,
            background: 'transparent',
            color: '#e8e6f0',
            fontFamily: '"DM Sans",sans-serif',
            fontSize: '0.88rem',
            fontWeight: 400,
            border: '1.5px solid rgba(255,255,255,0.12)',
            textDecoration: 'none',
            transition: 'all 0.3s',
          }}
        >
          My Works
        </a>
      </motion.div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity:0 }} animate={{ opacity:1 }}
        transition={{ delay:2.0, duration:1 }}
        style={{ position:'absolute', bottom:28, left:'50%', transform:'translateX(-50%)' }}
      >
        <motion.div
          animate={{ y:[0,10,0] }}
          transition={{ duration:1.8, repeat:Infinity, ease:'easeInOut' }}
          style={{ width:1, height:40, background:'linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)', margin:'0 auto' }}
        />
      </motion.div>
    </section>
  )
}
