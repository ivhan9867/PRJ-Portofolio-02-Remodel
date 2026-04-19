import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const JOBS = [
  { role: 'Design Lead',        company: 'Your Company',         period: 'Nov 2023 – Present', current: true },
  { role: 'Freelance Designer', company: 'Instagram @vhan._47',  period: 'Jun 2020 – Present' },
  { role: 'UI/UX Designer',     company: 'PT. Company Indonesia', period: 'Dec 2021 – Oct 2022' },
  { role: 'Visual Designer',    company: 'PT. Company Indonesia', period: 'Jul 2019 – Mar 2021' },
]

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })

  return (
    <section id="experience" className="relative z-10 px-6 md:px-10 py-14 md:py-22">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h2 className="font-display font-bold text-[clamp(1.6rem,4vw,2.6rem)] text-[#e8e6f0]">
          Experience
        </h2>
      </motion.div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        {JOBS.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.06 + i * 0.07 }}
            className="flex justify-between items-center py-5 group -mx-2 px-2 rounded-lg hover:bg-white/[0.025] transition-colors duration-300"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
          >
            {/* Left */}
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="font-display font-bold text-[0.95rem] md:text-[1rem] text-[#e8e6f0] group-hover:text-accent transition-colors duration-300">
                {job.role}
              </span>
              {job.current && (
                <span className="flex items-center gap-1 font-mono text-[0.57rem] tracking-wider uppercase text-[#4ade80] px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] pulse-dot inline-block" />
                  Now
                </span>
              )}
            </div>
            {/* Right */}
            <div className="text-right flex-shrink-0 ml-4">
              <div className="font-body text-[0.8rem] text-[#e8e6f0]/60">{job.company}</div>
              <div className="font-mono text-[0.66rem] text-muted mt-0.5">{job.period}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
