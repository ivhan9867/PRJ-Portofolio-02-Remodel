import { useInView } from '../hooks/useInView'

const JOBS = [
  { role: 'Design Lead',        company: 'Your Company',          period: 'Nov 2023 – Present', current: true },
  { role: 'Freelance Designer', company: 'Instagram @vhan._47',   period: 'Jun 2020 – Present' },
  { role: 'UI/UX Designer',     company: 'PT. Company Indonesia',  period: 'Dec 2021 – Oct 2022' },
  { role: 'Visual Designer',    company: 'PT. Company Indonesia',  period: 'Jul 2019 – Mar 2021' },
]

export default function Experience() {
  const { ref, inView } = useInView(0.08)

  return (
    <section
      id="experience"
      style={{ position: 'relative', zIndex: 10, padding: '56px 24px' }}
    >
      <div ref={ref} style={{ maxWidth: 680, margin: '0 auto' }}>

        <h2
          style={{
            fontFamily: '"Playfair Display",serif',
            fontWeight: 700,
            fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
            color: '#e8e6f0',
            marginBottom: 24,
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          Experience
        </h2>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          {JOBS.map((job, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '18px 8px',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 8,
                // Removed cursor:'default' — let global cursor:none rule apply
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(14px)',
                transition: `opacity 0.45s ${0.08 + i * 0.07}s ease,
                             transform 0.45s ${0.08 + i * 0.07}s ease,
                             background 0.25s ease`,
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.025)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              {/* Left: role + badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontFamily: '"Playfair Display",serif',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: '#e8e6f0',
                    transition: 'color 0.25s ease',
                  }}
                >
                  {job.role}
                </span>

                {job.current && (
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4,
                      fontFamily: '"DM Mono",monospace',
                      fontSize: '0.57rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#4ade80',
                      background: 'rgba(74,222,128,0.08)',
                      border: '1px solid rgba(74,222,128,0.2)',
                      borderRadius: 999,
                      padding: '2px 8px',
                    }}
                  >
                    <span
                      className="pulse-dot"
                      style={{
                        display: 'inline-block',
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: '#4ade80',
                        flexShrink: 0,
                      }}
                    />
                    Now
                  </span>
                )}
              </div>

              {/* Right: company + period */}
              <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 16 }}>
                <div
                  style={{
                    fontFamily: '"DM Sans",sans-serif',
                    fontSize: '0.78rem',
                    color: 'rgba(232,230,240,0.58)',
                  }}
                >
                  {job.company}
                </div>
                <div
                  style={{
                    fontFamily: '"DM Mono",monospace',
                    fontSize: '0.64rem',
                    color: 'rgba(82,82,110,1)',
                    marginTop: 2,
                  }}
                >
                  {job.period}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
