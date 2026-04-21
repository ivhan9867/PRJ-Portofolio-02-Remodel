// Hero — zero Framer Motion, pure CSS keyframe animations
const L1 = ['An', 'Architect', 'of', 'User', 'Minds,']
const L2 = ['based', 'in', 'Indonesia']

function Word({ word, delay, muted }) {
  return (
    <span className="word-wrap">
      <span
        className="word-inner"
        style={{
          animationDelay: `${delay}s`,
          color: muted ? 'rgba(130,133,168,0.82)' : '#e8e6f0',
        }}
      >
        {word}
      </span>
    </span>
  )
}

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        zIndex: 10,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '88px 24px 56px',
      }}
    >
      {/* ── Avatar + name tag ── */}
      <div
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 20,
          animation: 'fadeScaleIn 0.62s cubic-bezier(0.16,1,0.3,1) 0.1s both',
        }}
      >
        {/* Glow ring behind avatar */}
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <div
            style={{
              position: 'absolute',
              inset: -5,
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(60,100,220,0.35) 0%, rgba(90,50,190,0.2) 60%, transparent 80%)',
              filter: 'blur(8px)',
              zIndex: 0,
            }}
          />
          {/* Avatar circle */}
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: '50%',
              overflow: 'hidden',
              position: 'relative',
              zIndex: 1,
              border: '2px solid rgba(255,255,255,0.12)',
              background: '#0f1428',
            }}
          >
            {/* Replace src with your photo: <img src="/your-photo.jpg" ... /> */}
            <img
              src="/avatar-dummy.svg"
              alt="Vhan._47"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={e => (e.target.style.display = 'none')}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1.2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Name chip — same flex column, sits directly below avatar */}
        <div
          style={{
            marginTop: 10,
            background: 'rgba(8,10,22,0.9)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: 8,
            padding: '5px 13px',
            fontSize: '0.72rem',
            fontWeight: 500,
            color: 'rgba(232,230,240,0.8)',
            fontFamily: '"DM Sans",sans-serif',
            whiteSpace: 'nowrap',
            animation: 'fadeUp 0.45s ease 0.5s both',
          }}
        >
          Hi, I'm Vhan._47
        </div>
      </div>

      {/* ── Headline ── */}
      <div
        style={{
          fontFamily: '"Playfair Display",serif',
          fontWeight: 700,
          fontSize: 'clamp(1.9rem, 5.5vw, 3.8rem)',
          lineHeight: 1.12,
          textAlign: 'center',
          maxWidth: 660,
          marginBottom: '0.9rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0 0.22em',
            marginBottom: '0.05em',
          }}
        >
          {L1.map((w, i) => (
            <Word key={w} word={w} delay={0.36 + i * 0.07} muted={false} />
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0 0.22em',
          }}
        >
          {L2.map((w, i) => (
            <Word key={w} word={w} delay={0.73 + i * 0.07} muted={true} />
          ))}
        </div>
      </div>

      {/* ── Subtext ── */}
      <p
        style={{
          fontFamily: '"DM Sans",sans-serif',
          color: 'rgba(100,102,140,1)',
          fontSize: '0.88rem',
          maxWidth: 320,
          lineHeight: 1.65,
          marginBottom: '2rem',
          animation: 'fadeUp 0.5s ease 1.0s both',
        }}
      >
        Redesign ugly interface and experience from your website or application
      </p>

      {/* ── Buttons — horizontal like Fini ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 10,
          animation: 'fadeUp 0.5s ease 1.18s both',
        }}
      >
        <a
          href="mailto:vhan47@email.com"
          data-cursor
          className="btn-sweep"
          style={{
            display: 'block',
            textAlign: 'center',
            padding: '12px 28px',
            borderRadius: 999,
            background: 'rgba(12,15,30,0.95)',
            color: '#e8e6f0',
            fontFamily: '"DM Sans",sans-serif',
            fontSize: '0.88rem',
            fontWeight: 500,
            border: '1.5px solid rgba(255,255,255,0.15)',
            textDecoration: 'none',
            boxShadow: '0 2px 20px rgba(0,0,0,0.4)',
            transition: 'transform 0.25s ease, border-color 0.25s ease',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
          }}
        >
          Contact Me
        </a>

        <a
          href="#work"
          data-cursor
          className="btn-sweep btn-sweep-gold"
          style={{
            display: 'block',
            textAlign: 'center',
            padding: '12px 28px',
            borderRadius: 999,
            background: 'transparent',
            color: '#e8e6f0',
            fontFamily: '"DM Sans",sans-serif',
            fontSize: '0.88rem',
            fontWeight: 400,
            border: '1.5px solid rgba(255,255,255,0.12)',
            textDecoration: 'none',
            transition: 'transform 0.25s ease, border-color 0.25s ease',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
          }}
        >
          My Works
        </a>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        style={{
          position: 'absolute',
          bottom: 28,
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'fadeUp 1s ease 2s both',
        }}
      >
        <div
          style={{
            width: 1,
            height: 40,
            margin: '0 auto',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)',
            animation: 'scrollBob 1.8s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  )
}
