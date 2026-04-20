// Zero Framer Motion — pure CSS keyframe animations
// Each word gets animation-delay for stagger effect
const L1 = ['An','Architect','of','User','Minds,']
const L2 = ['based','in','Indonesia']

function Word({ word, delay, muted }) {
  return (
    <span className="word-wrap">
      <span className="word-inner" style={{
        animationDelay: `${delay}s`,
        color: muted ? 'rgba(130,133,168,0.82)' : '#e8e6f0',
      }}>
        {word}
      </span>
    </span>
  )
}

export default function Hero() {
  return (
    <section style={{
      position: 'relative', zIndex: 10,
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center',
      padding: '88px 20px 56px',
    }}>

      {/* Avatar + name tag */}
      <div style={{
        display: 'inline-flex', flexDirection: 'column',
        alignItems: 'center', marginBottom: 16,
        animation: 'fadeScaleIn 0.62s cubic-bezier(0.16,1,0.3,1) 0.1s both',
      }}>
        <div style={{
          width: 100, height: 100, borderRadius: '50%',
          overflow: 'hidden', position: 'relative',
          border: '2px solid rgba(255,255,255,0.12)',
          background: '#0f1428',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.05)',
          flexShrink: 0,
        }}>
          {/* Replace src with your photo */}
          <img src="/avatar-dummy.svg" alt="Vhan._47"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={e => e.target.style.display = 'none'} />
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
              stroke="rgba(255,255,255,0.2)" strokeWidth="1.2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
        </div>

        {/* Name chip — centered below, same flex column */}
        <div style={{
          marginTop: 10,
          background: 'rgba(8,10,22,0.9)',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: 10,
          padding: '5px 14px',
          fontSize: '0.7rem', fontWeight: 500,
          color: 'rgba(232,230,240,0.8)',
          fontFamily: '"DM Sans",sans-serif',
          whiteSpace: 'nowrap',
          animation: 'fadeUp 0.45s ease 0.5s both',
        }}>
          Hi, I'm Vhan._47
        </div>
      </div>

      {/* Headline — staggered word reveal */}
      <div style={{
        fontFamily: '"Playfair Display",serif',
        fontWeight: 700,
        fontSize: 'clamp(2.2rem,7.5vw,5rem)',
        lineHeight: 1.1, textAlign: 'center',
        maxWidth: 680, marginBottom: '1rem',
      }}>
        <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'0 0.22em', marginBottom:'0.05em' }}>
          {L1.map((w,i) => <Word key={w} word={w} delay={0.36+i*0.07} muted={false} />)}
        </div>
        <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'0 0.22em' }}>
          {L2.map((w,i) => <Word key={w} word={w} delay={0.73+i*0.07} muted={true} />)}
        </div>
      </div>

      {/* Subtext */}
      <p style={{
        fontFamily: '"DM Sans",sans-serif',
        color: 'rgba(100,102,140,1)',
        fontSize: '0.88rem', maxWidth: 280,
        lineHeight: 1.65, marginBottom: '2rem',
        animation: 'fadeUp 0.5s ease 1.0s both',
      }}>
        Redesign ugly interface and experience from your website or application
      </p>

      {/* Buttons */}
      <div style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'stretch', gap: 10,
        width: '100%', maxWidth: 320,
        animation: 'fadeUp 0.5s ease 1.18s both',
      }}>
        <a href="mailto:vhan47@email.com" data-cursor
          className="btn-sweep"
          style={{
            display: 'block', textAlign: 'center',
            padding: '13px 0', borderRadius: 999,
            background: 'rgba(12,15,30,0.95)', color: '#e8e6f0',
            fontFamily: '"DM Sans",sans-serif',
            fontSize: '0.88rem', fontWeight: 500,
            border: '1.5px solid rgba(255,255,255,0.14)',
            textDecoration: 'none',
            boxShadow: '0 2px 20px rgba(0,0,0,0.4)',
            transition: 'border-color 0.3s, transform 0.3s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
        >Contact Me</a>

        <a href="#work" data-cursor
          className="btn-sweep btn-sweep-gold"
          style={{
            display: 'block', textAlign: 'center',
            padding: '12px 0', borderRadius: 999,
            background: 'transparent', color: '#e8e6f0',
            fontFamily: '"DM Sans",sans-serif',
            fontSize: '0.88rem', fontWeight: 400,
            border: '1.5px solid rgba(255,255,255,0.12)',
            textDecoration: 'none',
            transition: 'border-color 0.3s, transform 0.3s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
        >My Works</a>
      </div>

      {/* Scroll line */}
      <div style={{
        position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
        animation: 'fadeUp 1s ease 2s both',
      }}>
        <div style={{
          width: 1, height: 40, margin: '0 auto',
          background: 'linear-gradient(to bottom,rgba(255,255,255,0.25),transparent)',
          animation: 'scrollBob 1.8s ease-in-out infinite',
        }} />
      </div>
    </section>
  )
}
