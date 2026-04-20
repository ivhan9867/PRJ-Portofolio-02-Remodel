import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { PROJECTS } from '../data/projects'
import GlowBackground from '../components/GlowBackground'
import Cursor from '../components/Cursor'
import Navbar from '../components/Navbar'

function FadeUp({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function CaseStudy() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = PROJECTS.find(p => p.id === id)

  useEffect(() => { window.scrollTo(0, 0) }, [id])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#07080f' }}>
        <div className="text-center">
          <p className="text-muted font-body mb-4">Project not found</p>
          <Link to="/" className="text-accent font-body text-sm hover:underline">← Back to home</Link>
        </div>
      </div>
    )
  }

  const nextProject = PROJECTS[(PROJECTS.findIndex(p => p.id === id) + 1) % PROJECTS.length]

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#07080f', overflowX: 'hidden' }}>
      <div className="grain-overlay" />
      <GlowBackground />
      <Cursor />
      <Navbar />

      <main style={{ paddingTop: 80 }}>

        {/* ── Header ── */}
        <section style={{ padding: '48px 24px 36px', maxWidth: 760, margin: '0 auto' }}>
          {/* Back link */}
          <FadeUp delay={0.05}>
            <Link to="/" data-cursor
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontFamily: '"DM Mono",monospace', fontSize: '0.7rem',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(82,82,110,1)', textDecoration: 'none',
                marginBottom: 32,
              }}
              className="hover:text-accent transition-colors duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back
            </Link>
          </FadeUp>

          {/* Tag */}
          <FadeUp delay={0.1}>
            <span style={{
              display: 'inline-block',
              fontFamily: '"DM Mono",monospace', fontSize: '0.68rem',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: project.accent,
              border: `1px solid ${project.accent}30`,
              background: `${project.accent}10`,
              borderRadius: 999, padding: '4px 12px',
              marginBottom: 16,
            }}>{project.tag}</span>
          </FadeUp>

          {/* Title — large, like Fini */}
          <FadeUp delay={0.18}>
            <h1 style={{
              fontFamily: '"Playfair Display",serif',
              fontWeight: 700,
              fontSize: 'clamp(1.9rem, 5vw, 3.2rem)',
              lineHeight: 1.12,
              color: '#e8e6f0',
              marginBottom: 20,
            }}>
              {project.name}
            </h1>
          </FadeUp>

          {/* Overview bold intro — like Fini's bold first para */}
          <FadeUp delay={0.24}>
            <p style={{
              fontFamily: '"DM Sans",sans-serif',
              fontSize: '0.92rem',
              lineHeight: 1.75,
              color: 'rgba(232,230,240,0.78)',
              marginBottom: 0,
            }}>
              {project.overview}
            </p>
          </FadeUp>
        </section>

        {/* ── Hero Mockup Image — full width ── */}
        <FadeUp delay={0.3}>
          <div style={{ padding: '0 24px 16px', maxWidth: 760, margin: '0 auto' }}>
            <div style={{
              borderRadius: 16,
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.07)',
              background: project.bg,
              position: 'relative',
            }}>
              {/* Accent glow inside */}
              <div style={{
                position: 'absolute', inset: 0,
                background: `radial-gradient(ellipse at 60% 40%, ${project.accent}18 0%, transparent 65%)`,
                pointerEvents: 'none',
              }} />
              <img
                src={project.mockups[0]} alt={project.name}
                style={{ width: '100%', display: 'block', position: 'relative', zIndex: 1 }}
                onError={e => e.target.style.display = 'none'}
              />
            </div>
          </div>
        </FadeUp>

        {/* ── Second mockup ── */}
        {project.mockups[1] && (
          <FadeUp delay={0.35}>
            <div style={{ padding: '0 24px 16px', maxWidth: 760, margin: '0 auto' }}>
              <div style={{
                borderRadius: 16, overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.07)',
                background: `${project.accent}08`,
              }}>
                <img
                  src={project.mockups[1]} alt={`${project.name} detail`}
                  style={{ width: '100%', display: 'block' }}
                  onError={e => e.target.parentNode.style.display = 'none'}
                />
              </div>
            </div>
          </FadeUp>
        )}

        {/* ── Meta + Challenge — two column like Fini ── */}
        <section style={{ padding: '40px 24px', maxWidth: 760, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px 48px' }}>

            {/* Left: meta info */}
            <FadeUp delay={0.4}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { label: 'Year',     value: project.year },
                  { label: 'Client',   value: project.client },
                  { label: 'Role',     value: project.role },
                  { label: 'Duration', value: project.duration },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div style={{
                      fontFamily: '"DM Mono",monospace', fontSize: '0.65rem',
                      letterSpacing: '0.14em', textTransform: 'uppercase',
                      color: 'rgba(82,82,110,1)', marginBottom: 4,
                    }}>{label}</div>
                    <div style={{
                      fontFamily: '"DM Sans",sans-serif', fontSize: '0.88rem',
                      color: 'rgba(232,230,240,0.85)',
                    }}>{value}</div>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Right: Challenge */}
            <FadeUp delay={0.45}>
              <div>
                <h2 style={{
                  fontFamily: '"Playfair Display",serif',
                  fontWeight: 700, fontSize: '1.4rem',
                  color: '#e8e6f0', marginBottom: 14,
                }}>Challenge</h2>
                <p style={{
                  fontFamily: '"DM Sans",sans-serif',
                  fontSize: '0.87rem', lineHeight: 1.75,
                  color: 'rgba(232,230,240,0.72)',
                }}>{project.challenge}</p>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── Divider ── */}
        <div style={{ maxWidth: 760, margin: '0 auto 0', padding: '0 24px' }}>
          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)' }} />
        </div>

        {/* ── Solution ── */}
        <FadeUp delay={0.5}>
          <section style={{ padding: '40px 24px', maxWidth: 760, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: '"Playfair Display",serif',
              fontWeight: 700, fontSize: '1.4rem',
              color: '#e8e6f0', marginBottom: 14,
            }}>Solution</h2>
            <p style={{
              fontFamily: '"DM Sans",sans-serif',
              fontSize: '0.87rem', lineHeight: 1.75,
              color: 'rgba(232,230,240,0.72)',
            }}>{project.solution}</p>
          </section>
        </FadeUp>

        {/* ── Results ── */}
        <FadeUp delay={0.55}>
          <section style={{ padding: '0 24px 48px', maxWidth: 760, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: '"Playfair Display",serif',
              fontWeight: 700, fontSize: '1.4rem',
              color: '#e8e6f0', marginBottom: 24,
            }}>Results</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {project.results.map((r, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 14, padding: '20px 16px',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontFamily: '"Playfair Display",serif',
                    fontWeight: 700, fontSize: '1.8rem',
                    color: project.accent, lineHeight: 1, marginBottom: 6,
                  }}>{r.num}</div>
                  <div style={{
                    fontFamily: '"DM Mono",monospace', fontSize: '0.62rem',
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'rgba(82,82,110,1)',
                  }}>{r.label}</div>
                </div>
              ))}
            </div>
          </section>
        </FadeUp>

        {/* ── Next Project ── */}
        <FadeUp delay={0.6}>
          <section style={{
            padding: '40px 24px 60px', maxWidth: 760, margin: '0 auto',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}>
            <p style={{
              fontFamily: '"DM Mono",monospace', fontSize: '0.65rem',
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'rgba(82,82,110,1)', marginBottom: 16,
            }}>Next Project</p>

            <Link to={`/work/${nextProject.id}`} data-cursor
              style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 16, padding: '20px 24px',
                textDecoration: 'none',
                transition: 'all 0.3s',
              }}
              className="hover:border-white/15 hover:bg-white/5 group"
            >
              <div>
                <div style={{
                  fontFamily: '"Playfair Display",serif',
                  fontWeight: 700, fontSize: '1.1rem', color: '#e8e6f0',
                  marginBottom: 4,
                }}>{nextProject.name}</div>
                <div style={{
                  fontFamily: '"DM Sans",sans-serif', fontSize: '0.78rem',
                  color: 'rgba(82,82,110,1)',
                }}>{nextProject.tag}</div>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="rgba(82,82,110,1)" strokeWidth="1.5"
                style={{ flexShrink: 0, transition: 'transform 0.3s' }}
                className="group-hover:translate-x-1 group-hover:stroke-accent">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </section>
        </FadeUp>

      </main>
    </div>
  )
}
