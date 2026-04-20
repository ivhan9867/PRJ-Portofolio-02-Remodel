import { useParams, Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { PROJECTS } from '../data/projects'
import GlowBackground from '../components/GlowBackground'
import Cursor from '../components/Cursor'
import Navbar from '../components/Navbar'

// CSS-based staggered reveal on mount
function Reveal({ children, delay = 0, style = {} }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(22px)'
    const t = setTimeout(() => {
      el.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, delay * 1000)
    return () => clearTimeout(t)
  }, [delay])
  return <div ref={ref} style={{ position:'relative', zIndex:10, ...style }}>{children}</div>
}

export default function CaseStudy() {
  const { id } = useParams()
  const project = PROJECTS.find(p => p.id === id)

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [id])

  if (!project) {
    return (
      <div style={{ minHeight:'100vh', background:'#07080f', display:'flex', alignItems:'center', justifyContent:'center' }}>
        <div style={{ textAlign:'center' }}>
          <p style={{ color:'rgba(82,82,110,1)', marginBottom:16, fontFamily:'"DM Sans",sans-serif' }}>Project not found</p>
          <Link to="/" style={{ color:'#c9a84c', fontFamily:'"DM Sans",sans-serif', fontSize:'0.875rem' }}>← Back to home</Link>
        </div>
      </div>
    )
  }

  const nextProject = PROJECTS[(PROJECTS.findIndex(p => p.id === id) + 1) % PROJECTS.length]
  const S = { fontFamily:'"DM Sans",sans-serif' } // shorthand

  return (
    <div style={{ position:'relative', minHeight:'100vh', background:'#07080f', overflowX:'hidden' }} className="page-enter">
      <div className="grain-overlay" />
      <GlowBackground />
      <Cursor />
      <Navbar />

      <main style={{ position:'relative', zIndex:10, paddingTop:80 }}>
        <div style={{ maxWidth:720, margin:'0 auto', padding:'40px 24px 28px' }}>

          <Reveal delay={0.05}>
            <Link to="/" data-cursor style={{
              display:'inline-flex', alignItems:'center', gap:6,
              fontFamily:'"DM Mono",monospace', fontSize:'0.68rem',
              letterSpacing:'0.14em', textTransform:'uppercase',
              color:'rgba(82,82,110,1)', textDecoration:'none',
              marginBottom:28, transition:'color 0.3s',
            }}
              onMouseEnter={e=>e.target.style.color='#c9a84c'}
              onMouseLeave={e=>e.target.style.color='rgba(82,82,110,1)'}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <span style={{
              display:'inline-block', marginBottom:14,
              fontFamily:'"DM Mono",monospace', fontSize:'0.66rem',
              letterSpacing:'0.14em', textTransform:'uppercase',
              color:project.accent, border:`1px solid ${project.accent}35`,
              background:`${project.accent}12`, borderRadius:999, padding:'4px 13px',
            }}>{project.tag}</span>
          </Reveal>

          <Reveal delay={0.16}>
            <h1 style={{
              fontFamily:'"Playfair Display",serif', fontWeight:700,
              fontSize:'clamp(1.8rem,5.5vw,3rem)', lineHeight:1.12,
              color:'#e8e6f0', marginBottom:18,
            }}>{project.name}</h1>
          </Reveal>

          <Reveal delay={0.22}>
            <p style={{ ...S, fontSize:'0.92rem', lineHeight:1.75, color:'rgba(232,230,240,0.72)' }}>
              {project.overview}
            </p>
          </Reveal>
        </div>

        {/* Hero image */}
        <Reveal delay={0.28} style={{ padding:'0 24px 12px', maxWidth:720, margin:'0 auto' }}>
          <div style={{
            borderRadius:16, overflow:'hidden',
            border:'1px solid rgba(255,255,255,0.08)',
            background:project.bg, position:'relative', minHeight:160,
          }}>
            <div style={{ position:'absolute', inset:0, background:`radial-gradient(ellipse at 60% 40%,${project.accent}1a 0%,transparent 65%)` }} />
            <img src={project.mockups[0]} alt={project.name}
              style={{ width:'100%', display:'block', position:'relative', zIndex:1 }}
              onError={e=>e.target.style.display='none'} />
          </div>
        </Reveal>

        {project.mockups[1] && (
          <Reveal delay={0.33} style={{ padding:'0 24px 12px', maxWidth:720, margin:'0 auto' }}>
            <div style={{ borderRadius:16, overflow:'hidden', border:'1px solid rgba(255,255,255,0.07)', background:`${project.accent}08` }}>
              <img src={project.mockups[1]} alt="" style={{ width:'100%', display:'block' }}
                onError={e=>e.target.parentNode.style.display='none'} />
            </div>
          </Reveal>
        )}

        {/* Meta + Challenge */}
        <div style={{ maxWidth:720, margin:'0 auto', padding:'36px 24px 0' }}>
          <div style={{ display:'grid', gridTemplateColumns:'minmax(0,1fr) minmax(0,2fr)', gap:'28px 40px' }}>
            <Reveal delay={0.38}>
              <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
                {[['Year',project.year],['Client',project.client],['Role',project.role],['Duration',project.duration]].map(([l,v]) => (
                  <div key={l}>
                    <div style={{ fontFamily:'"DM Mono",monospace', fontSize:'0.63rem', letterSpacing:'0.16em', textTransform:'uppercase', color:'rgba(82,82,110,1)', marginBottom:5 }}>{l}</div>
                    <div style={{ ...S, fontSize:'0.86rem', color:'rgba(232,230,240,0.82)' }}>{v}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.42}>
              <h2 style={{ fontFamily:'"Playfair Display",serif', fontWeight:700, fontSize:'1.35rem', color:'#e8e6f0', marginBottom:12 }}>Challenge</h2>
              <p style={{ ...S, fontSize:'0.86rem', lineHeight:1.75, color:'rgba(232,230,240,0.68)' }}>{project.challenge}</p>
            </Reveal>
          </div>
        </div>

        <div style={{ maxWidth:720, margin:'36px auto 0', padding:'0 24px' }}>
          <div style={{ height:1, background:'rgba(255,255,255,0.07)' }} />
        </div>

        <Reveal delay={0.46} style={{ maxWidth:720, margin:'0 auto', padding:'36px 24px 0' }}>
          <h2 style={{ fontFamily:'"Playfair Display",serif', fontWeight:700, fontSize:'1.35rem', color:'#e8e6f0', marginBottom:12 }}>Solution</h2>
          <p style={{ ...S, fontSize:'0.86rem', lineHeight:1.75, color:'rgba(232,230,240,0.68)' }}>{project.solution}</p>
        </Reveal>

        <Reveal delay={0.5} style={{ maxWidth:720, margin:'0 auto', padding:'36px 24px 0' }}>
          <h2 style={{ fontFamily:'"Playfair Display",serif', fontWeight:700, fontSize:'1.35rem', color:'#e8e6f0', marginBottom:20 }}>Results</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }}>
            {project.results.map((r,i) => (
              <div key={i} style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:14, padding:'18px 12px', textAlign:'center' }}>
                <div style={{ fontFamily:'"Playfair Display",serif', fontWeight:700, fontSize:'1.7rem', color:project.accent, lineHeight:1, marginBottom:6 }}>{r.num}</div>
                <div style={{ fontFamily:'"DM Mono",monospace', fontSize:'0.6rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(82,82,110,1)' }}>{r.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.54} style={{ maxWidth:720, margin:'0 auto', padding:'40px 24px 60px' }}>
          <div style={{ borderTop:'1px solid rgba(255,255,255,0.07)', paddingTop:36 }}>
            <p style={{ fontFamily:'"DM Mono",monospace', fontSize:'0.63rem', letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(82,82,110,1)', marginBottom:14 }}>Next Project</p>
            <Link to={`/work/${nextProject.id}`} data-cursor style={{ textDecoration:'none', display:'block' }}>
              <div style={{
                display:'flex', justifyContent:'space-between', alignItems:'center',
                background:'rgba(255,255,255,0.025)', border:'1px solid rgba(255,255,255,0.08)',
                borderRadius:16, padding:'18px 22px', transition:'all 0.3s',
              }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.15)';e.currentTarget.style.background='rgba(255,255,255,0.045)'}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.08)';e.currentTarget.style.background='rgba(255,255,255,0.025)'}}
              >
                <div>
                  <div style={{ fontFamily:'"Playfair Display",serif', fontWeight:700, fontSize:'1.05rem', color:'#e8e6f0', marginBottom:4 }}>{nextProject.name}</div>
                  <div style={{ ...S, fontSize:'0.76rem', color:'rgba(82,82,110,1)' }}>{nextProject.tag}</div>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(82,82,110,1)" strokeWidth="1.5" style={{ flexShrink:0 }}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </Link>
          </div>
        </Reveal>
      </main>
    </div>
  )
}
