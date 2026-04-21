import { useInView } from '../hooks/useInView'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'

function Card({ p, i }) {
  const { ref, inView } = useInView(0.08)

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        borderRadius: 16,
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.07)',
        background: p.bg,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.65s ${i * 0.08}s ease,
                     transform 0.65s ${i * 0.08}s cubic-bezier(0.16,1,0.3,1),
                     border-color 0.4s ease`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'
        // show inner glow
        e.currentTarget.querySelector('.card-glow').style.opacity = '1'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
        e.currentTarget.querySelector('.card-glow').style.opacity = '0'
      }}
    >
      {/* Inner hover glow — toggled via parent handlers above */}
      <div
        className="card-glow"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0,
          pointerEvents: 'none',
          background: `radial-gradient(ellipse at 65% 40%, ${p.accent}18 0%, transparent 65%)`,
          transition: 'opacity 0.55s ease',
        }}
      />

      {/* Card body */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          padding: '24px',
        }}
        className="md:flex-row md:items-start md:gap-5 md:p-8"
      >
        {/* Text side */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <h3
            style={{
              fontFamily: '"Playfair Display",serif',
              fontWeight: 700,
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: '#e8e6f0',
              lineHeight: 1.3,
              marginBottom: 10,
            }}
          >
            {p.name}
          </h3>
          <p
            style={{
              fontFamily: '"DM Sans",sans-serif',
              fontSize: '0.82rem',
              color: 'rgba(82,82,110,1)',
              lineHeight: 1.65,
              marginBottom: 20,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {p.overview}
          </p>

          {p.comingSoon ? (
            <span
              style={{
                fontFamily: '"DM Sans",sans-serif',
                fontSize: '0.8rem',
                color: 'rgba(82,82,110,1)',
                fontStyle: 'italic',
              }}
            >
              Coming Soon
            </span>
          ) : (
            <Link
              to={`/work/${p.id}`}
              data-cursor
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontFamily: '"DM Sans",sans-serif',
                fontSize: '0.8rem',
                color: 'rgba(232,230,240,0.65)',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 999,
                padding: '6px 14px',
                transition: 'color 0.25s ease, border-color 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#e8e6f0'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(232,230,240,0.65)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              }}
            >
              View case study
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>

        {/* Mockup image */}
        <div
          style={{
            width: '100%',
            flexShrink: 0,
            borderRadius: 12,
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(0,0,0,0.2)',
            aspectRatio: '4/3',
          }}
          className="md:w-[230px] lg:w-[260px]"
        >
          <img
            src={p.img}
            alt={p.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.65s ease',
            }}
            onMouseEnter={e => (e.target.style.transform = 'scale(1.04)')}
            onMouseLeave={e => (e.target.style.transform = 'scale(1)')}
            onError={e => (e.target.style.display = 'none')}
          />
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView(0.1)

  return (
    <section
      id="work"
      style={{ position: 'relative', zIndex: 10, padding: '16px 24px 80px' }}
      className="md:px-10"
    >
      <div
        ref={ref}
        style={{
          marginBottom: 32,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        }}
      >
        <p
          style={{
            fontFamily: '"DM Mono",monospace',
            fontSize: '0.7rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'rgba(82,82,110,1)',
            marginBottom: 8,
          }}
        >
          My Works
        </p>
        <h2
          style={{
            fontFamily: '"Playfair Display",serif',
            fontWeight: 700,
            fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
            color: '#e8e6f0',
          }}
        >
          Projects I've Done
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {PROJECTS.map((p, i) => (
          <Card key={p.id} p={p} i={i} />
        ))}
      </div>
    </section>
  )
}
