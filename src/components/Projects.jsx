import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const PROJECTS = [
  {
    id: 1,
    name: 'NoLimitClass Landing Page',
    desc: 'No Limit Class is an e-learning platform founded by Indonesia\'s premier gaming content creator. The project involved a strategic overhaul of the platform\'s visual identity to ensure it stands out in the crowded ed-tech market, moving away from generic templates to a custom, immersive gaming experience.',
    tag: 'Landing Page',
    img: '/projects/nolimitclass.svg',
    accent: '#4f46e5',
    bg: 'linear-gradient(135deg, #0f1228 0%, #121535 100%)',
  },
  {
    id: 2,
    name: 'Logitech MXFest Landing Page',
    desc: 'This case study explores the redesign of the Logitech MXFest landing page, focusing on improving user experience, increasing program sign-ups, and driving customer engagement with a gamified rewards system.',
    tag: 'UX Redesign',
    img: '/projects/logitech.svg',
    accent: '#06b6d4',
    bg: 'linear-gradient(135deg, #0b1a22 0%, #0d2030 100%)',
  },
  {
    id: 3,
    name: "Plans: Women's Health App",
    desc: 'Plans is a comprehensive mobile application designed to empower women throughout their reproductive journey, providing personalized tools and expert guidance for period tracking, family planning, and pregnancy support.',
    tag: 'Mobile App',
    img: '/projects/plans.svg',
    accent: '#ec4899',
    bg: 'linear-gradient(135deg, #180e20 0%, #1e0f28 100%)',
  },
  {
    id: 4,
    name: 'GoVirtual Mobile Redesign',
    desc: 'This case study delves into the UX design process behind GoVirtual, an immersive virtual reality application that aims to introduce Indonesia through next-generation experiences.',
    tag: 'Coming Soon',
    img: '/projects/govirtual.svg',
    accent: '#22c55e',
    bg: 'linear-gradient(135deg, #0a1510 0%, #0d1c14 100%)',
    comingSoon: true,
  },
]

function Card({ p, i }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16,1,0.3,1] }}
      className="group relative rounded-2xl overflow-hidden border border-white/[0.07] hover:border-white/14 transition-all duration-500"
      style={{ background: p.bg }}
      data-cursor
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 65% 40%, ${p.accent}14 0%, transparent 65%)` }} />

      <div className="flex flex-col md:flex-row items-start gap-5 p-6 md:p-8">
        {/* Text */}
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-[1.05rem] md:text-[1.2rem] text-[#e8e6f0] mb-2.5 leading-snug">
            {p.name}
          </h3>
          <p className="font-body text-[0.82rem] text-muted leading-relaxed mb-5 max-w-[380px]">
            {p.desc}
          </p>
          {p.comingSoon ? (
            <span className="font-body text-[0.8rem] text-muted italic">Coming Soon</span>
          ) : (
            <a href="#" data-cursor
              className="inline-flex items-center gap-2 font-body text-[0.8rem] text-[#e8e6f0]/65 hover:text-[#e8e6f0] transition-colors duration-300 border border-white/10 rounded-full px-4 py-1.5 hover:border-white/22 group/btn">
              View case study
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover/btn:translate-x-0.5 transition-transform duration-300">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          )}
        </div>

        {/* Mockup */}
        <div className="w-full md:w-[230px] lg:w-[260px] flex-shrink-0">
          <div className="relative rounded-xl overflow-hidden border border-white/8 bg-black/20"
            style={{ aspectRatio: '4/3' }}>
            <img
              src={p.img} alt={p.name}
              className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
              onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }}
            />
            {/* Fallback */}
            <div className="absolute inset-0 hidden items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${p.accent}0e, ${p.accent}06)` }}>
              <span className="font-display text-[2.5rem] font-bold opacity-[0.08]" style={{ color: p.accent }}>
                {p.name.split(' ').map(w=>w[0]).join('').slice(0,3)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="work" className="relative z-10 px-6 md:px-10 pt-4 pb-20 md:pb-28">
      <motion.div ref={ref}
        initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }} className="mb-8">
        <p className="font-body text-[0.7rem] tracking-[0.16em] uppercase text-muted mb-2">My Works</p>
        <h2 className="font-display font-bold text-[clamp(1.6rem,4vw,2.6rem)] text-[#e8e6f0]">
          Projects I've Done
        </h2>
      </motion.div>

      <div className="flex flex-col gap-4">
        {PROJECTS.map((p, i) => <Card key={p.id} p={p} i={i} />)}
      </div>
    </section>
  )
}
