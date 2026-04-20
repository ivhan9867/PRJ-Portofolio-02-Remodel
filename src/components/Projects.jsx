import { useInView } from '../hooks/useInView'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'

function Card({ p, i }) {
  const { ref, inView } = useInView(0.08)

  return (
    <div ref={ref}
      className="group relative rounded-2xl overflow-hidden border border-white/[0.07]"
      style={{
        background: p.bg,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.65s ${i*0.08}s ease, transform 0.65s ${i*0.08}s cubic-bezier(0.16,1,0.3,1), border-color 0.4s ease`,
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
    >
      {/* Hover glow */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0, pointerEvents: 'none',
        background: `radial-gradient(ellipse at 65% 40%,${p.accent}14 0%,transparent 65%)`,
        transition: 'opacity 0.6s ease',
      }}
        onMouseEnter={e => e.currentTarget.style.opacity = '1'}
        className="group-hover:opacity-100"
      />

      <div className="flex flex-col md:flex-row items-start gap-5 p-6 md:p-8">
        <div className="flex-1 min-w-0">
          <h3 style={{ fontFamily:'"Playfair Display",serif', fontWeight:700 }}
            className="text-[1.05rem] md:text-[1.2rem] text-[#e8e6f0] mb-2.5 leading-snug">
            {p.name}
          </h3>
          <p className="font-body text-[0.82rem] text-muted leading-relaxed mb-5 max-w-[380px] line-clamp-3">
            {p.overview}
          </p>
          {p.comingSoon ? (
            <span className="font-body text-[0.8rem] text-muted italic">Coming Soon</span>
          ) : (
            <Link to={`/work/${p.id}`} data-cursor
              className="inline-flex items-center gap-2 font-body text-[0.8rem] rounded-full px-4 py-1.5 border border-white/10 transition-all duration-300"
              style={{ color: 'rgba(232,230,240,0.65)', textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.color='#e8e6f0'; e.currentTarget.style.borderColor='rgba(255,255,255,0.22)' }}
              onMouseLeave={e => { e.currentTarget.style.color='rgba(232,230,240,0.65)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.1)' }}
            >
              View case study
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          )}
        </div>
        <div className="w-full md:w-[230px] lg:w-[260px] flex-shrink-0">
          <div className="relative rounded-xl overflow-hidden border border-white/8 bg-black/20" style={{aspectRatio:'4/3'}}>
            <img src={p.img} alt={p.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              onError={e=>{e.target.style.display='none'}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView(0.1)
  return (
    <section id="work" style={{ position:'relative', zIndex:10 }}
      className="px-6 md:px-10 pt-4 pb-20 md:pb-28">
      <div ref={ref} className="mb-8" style={{
        opacity:inView?1:0, transform:inView?'translateY(0)':'translateY(20px)',
        transition:'opacity 0.5s ease, transform 0.5s ease',
      }}>
        <p className="font-body text-[0.7rem] tracking-[0.16em] uppercase text-muted mb-2">My Works</p>
        <h2 style={{ fontFamily:'"Playfair Display",serif' }}
          className="font-bold text-[clamp(1.6rem,4vw,2.6rem)] text-[#e8e6f0]">
          Projects I've Done
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        {PROJECTS.map((p,i) => <Card key={p.id} p={p} i={i} />)}
      </div>
    </section>
  )
}
