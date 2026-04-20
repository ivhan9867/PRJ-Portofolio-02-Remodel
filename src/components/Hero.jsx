import { motion } from 'framer-motion'

function W({ w, delay, muted }) {
  return (
    <span style={{ display:'inline-block', overflow:'hidden', lineHeight:1.15, verticalAlign:'bottom' }}>
      <motion.span
        style={{ display:'inline-block', color: muted ? 'rgba(140,145,180,0.8)' : '#e8e6f0' }}
        initial={{ y: '108%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.72, delay, ease: [0.16,1,0.3,1] }}
      >{w}</motion.span>
    </span>
  )
}

export default function Hero() {
  const L1 = ['An','Architect','of','User','Minds,']
  const L2 = ['based','in','Indonesia']

  return (
    <section style={{
      position:'relative', zIndex:10,
      minHeight:'100vh',
      display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center',
      textAlign:'center',
      padding:'88px 20px 56px',
    }}>

      {/* Avatar + name tag as ONE unit */}
      <motion.div
        style={{ position:'relative', marginBottom: 16, display:'inline-flex', flexDirection:'column', alignItems:'center' }}
        initial={{ scale:0.5, opacity:0 }}
        animate={{ scale:1, opacity:1 }}
        transition={{ duration:0.6, delay:0.12, ease:[0.16,1,0.3,1] }}
      >
        {/* Circle */}
        <div style={{
          width:100, height:100, borderRadius:'50%',
          overflow:'hidden', position:'relative',
          border:'2px solid rgba(255,255,255,0.13)',
          background:'#0f1428',
          boxShadow:'0 0 0 1px rgba(255,255,255,0.05)',
          flexShrink:0,
        }}>
          <img src="/avatar-dummy.svg" alt="Vhan._47"
            style={{ width:'100%', height:'100%', objectFit:'cover' }}
            onError={e=>e.target.style.display='none'} />
          <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
        </div>

        {/* Name tag — centered directly below avatar, part of same flex column */}
        <motion.div
          initial={{ opacity:0, y:6 }}
          animate={{ opacity:1, y:0 }}
          transition={{ delay:0.5, duration:0.42 }}
          style={{
            marginTop: 10,
            background:'rgba(8,10,22,0.88)',
            border:'1px solid rgba(255,255,255,0.1)',
            backdropFilter:'blur(12px)',
            borderRadius:10,
            padding:'5px 14px',
            fontSize:'0.7rem',
            fontWeight:500,
            color:'rgba(232,230,240,0.8)',
            fontFamily:'"DM Sans",sans-serif',
            letterSpacing:'0.01em',
            whiteSpace:'nowrap',
          }}
        >
          Hi, I'm Vhan._47
        </motion.div>
      </motion.div>

      {/* Headline */}
      <div style={{
        fontFamily:'"Playfair Display",serif',
        fontWeight:700,
        fontSize:'clamp(2.2rem, 7.5vw, 5rem)',
        lineHeight:1.1,
        textAlign:'center',
        maxWidth:680,
        marginBottom:'1rem',
      }}>
        <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'0 0.22em', marginBottom:'0.05em' }}>
          {L1.map((w,i)=><W key={w} w={w} delay={0.36+i*0.07} muted={false} />)}
        </div>
        <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'0 0.22em' }}>
          {L2.map((w,i)=><W key={w} w={w} delay={0.73+i*0.07} muted={true} />)}
        </div>
      </div>

      {/* Subtext */}
      <motion.p
        initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
        transition={{ duration:0.5, delay:1.0 }}
        style={{
          fontFamily:'"DM Sans",sans-serif',
          color:'rgba(100,102,140,1)',
          fontSize:'0.88rem',
          maxWidth:280,
          lineHeight:1.65,
          marginBottom:'2rem',
          textAlign:'center',
        }}
      >
        Redesign ugly interface and experience from your website or application
      </motion.p>

      {/* Buttons - vertical stack */}
      <motion.div
        initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
        transition={{ duration:0.5, delay:1.18 }}
        style={{ display:'flex', flexDirection:'column', alignItems:'stretch', gap:10, width:'100%', maxWidth:320 }}
      >
        <a href="mailto:vhan47@email.com" data-cursor
          className="btn-sweep relative overflow-hidden"
          style={{
            display:'block', textAlign:'center',
            padding:'13px 0', borderRadius:999,
            background:'rgba(12,15,30,0.95)',
            color:'#e8e6f0',
            fontFamily:'"DM Sans",sans-serif',
            fontSize:'0.88rem', fontWeight:500,
            border:'1.5px solid rgba(255,255,255,0.14)',
            textDecoration:'none',
            boxShadow:'0 2px 20px rgba(0,0,0,0.4)',
          }}
        >Contact Me</a>

        <a href="#work" data-cursor
          className="btn-sweep btn-sweep-gold relative overflow-hidden"
          style={{
            display:'block', textAlign:'center',
            padding:'12px 0', borderRadius:999,
            background:'transparent',
            color:'#e8e6f0',
            fontFamily:'"DM Sans",sans-serif',
            fontSize:'0.88rem', fontWeight:400,
            border:'1.5px solid rgba(255,255,255,0.12)',
            textDecoration:'none',
          }}
        >My Works</a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity:0 }} animate={{ opacity:1 }}
        transition={{ delay:2.0, duration:1 }}
        style={{ position:'absolute', bottom:28, left:'50%', transform:'translateX(-50%)' }}
      >
        <motion.div
          animate={{ y:[0,10,0] }}
          transition={{ duration:1.8, repeat:Infinity, ease:'easeInOut' }}
          style={{ width:1, height:40, background:'linear-gradient(to bottom,rgba(255,255,255,0.25),transparent)', margin:'0 auto' }}
        />
      </motion.div>
    </section>
  )
}
