import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'

function Card({ p, i }) {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })

  return (
    <div
      ref={ref}
      className="group relative rounded-2xl overflow-hidden border border-white/[0.07] hover:border-white/14 transition-all duration-500"
      style={{
        background: p.bg,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.65s ${i*0.08}s ease, transform 0.65s ${i*0.08}s cubic-bezier(0.16,1,0.3,1)`,
      }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background:`radial-gradient(ellipse at 65% 40%,${p.accent}14 0%,transparent 65%)` }} />

      <div className="flex flex-col md:flex-row items-start gap-5 p-6 md:p-8">
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-[1.05rem] md:text-[1.2rem] text-[#e8e6f0] mb-2.5 leading-snug">
            {p.name}
          </h3>
          <p className="font-body text-[0.82rem] text-muted leading-relaxed mb-5 max-w-[380px] line-clamp-3">
            {p.overview}
          </p>
          {p.comingSoon ? (
            <span className="font-body text-[0.8rem] text-muted italic">Coming Soon</span>
          ) : (
            <Link to={`/work/${p.id}`} data-cursor
              className="inline-flex items-center gap-2 font-body text-[0.8rem] text-[#e8e6f0]/65 hover:text-[#e8e6f0] transition-colors duration-300 border border-white/10 rounded-full px-4 py-1.5 hover:border-white/22 group/btn">
              View case study
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                className="group-hover/btn:translate-x-0.5 transition-transform duration-300">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          )}
        </div>
        <div className="w-full md:w-[230px] lg:w-[260px] flex-shrink-0">
          <div className="relative rounded-xl overflow-hidden border border-white/8 bg-black/20" style={{aspectRatio:'4/3'}}>
            <img src={p.img} alt={p.name}
              className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
              onError={e=>{e.target.style.display='none';e.target.nextSibling.style.display='flex'}}/>
            <div className="absolute inset-0 hidden items-center justify-center"
              style={{background:`linear-gradient(135deg,${p.accent}0e,${p.accent}06)`}}>
              <span className="font-display text-[2.5rem] font-bold opacity-[0.08]" style={{color:p.accent}}>
                {p.name.split(' ').map(w=>w[0]).join('').slice(0,3)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="work" style={{ position:"relative", zIndex:10 }} className="px-6 md:px-10 pt-4 pb-20 md:pb-28">
      <div ref={ref} className="mb-8"
        style={{ opacity:inView?1:0, transform:inView?'translateY(0)':'translateY(20px)', transition:'all 0.5s ease' }}>
        <p className="font-body text-[0.7rem] tracking-[0.16em] uppercase text-muted mb-2">My Works</p>
        <h2 className="font-display font-bold text-[clamp(1.6rem,4vw,2.6rem)] text-[#e8e6f0]">Projects I've Done</h2>
      </div>
      <div className="flex flex-col gap-4">
        {PROJECTS.map((p,i) => <Card key={p.id} p={p} i={i} />)}
      </div>
    </section>
  )
}
