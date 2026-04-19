import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const JOBS = [
  { role: 'Design Lead',        company: 'Your Company',          period: 'Nov 2023 – Present', current: true },
  { role: 'Freelance Designer', company: 'Instagram @vhan._47',   period: 'Jun 2020 – Present' },
  { role: 'UI/UX Designer',     company: 'PT. Company Indonesia',  period: 'Dec 2021 – Oct 2022' },
  { role: 'Visual Designer',    company: 'PT. Company Indonesia',  period: 'Jul 2019 – Mar 2021' },
]

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="experience" className="relative z-10 px-6 md:px-10 py-16 md:py-24">
      <motion.div ref={ref}
        initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }} className="mb-8">
        <h2 className="font-display font-bold text-[clamp(1.6rem,4vw,2.6rem)] text-[#e8e6f0]">
          Experience
        </h2>
      </motion.div>

      <div className="border-t border-white/[0.07]">
        {JOBS.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 + i * 0.08 }}
            className="flex justify-between items-start py-5 border-b border-white/[0.07] group -mx-2 px-2 rounded-lg hover:bg-white/[0.02] transition-colors duration-300"
          >
            {/* Left: role + badge */}
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="font-display font-bold text-[0.95rem] md:text-[1rem] text-[#e8e6f0] group-hover:text-accent transition-colors duration-300">
                {job.role}
              </span>
              {job.current && (
                <span className="flex items-center gap-1 font-mono text-[0.58rem] tracking-wider uppercase text-[#4ade80] bg-[#4ade80]/8 border border-[#4ade80]/20 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] pulse-dot" />
                  Now
                </span>
              )}
            </div>
            {/* Right: company + period */}
            <div className="text-right flex-shrink-0 ml-4">
              <div className="font-body text-[0.82rem] text-[#e8e6f0]/65">{job.company}</div>
              <div className="font-mono text-[0.68rem] text-muted mt-0.5">{job.period}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
