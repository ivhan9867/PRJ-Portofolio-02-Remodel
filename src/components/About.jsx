import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Pill slot — cycles words inside a rounded pill, exactly like Fini's style
function Pill({ words, delay = 0 }) {
  const [idx, setIdx] = useState(0)
  const [prev, setPrev] = useState(null)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setPrev(idx)
      setAnimating(true)
      setTimeout(() => {
        setIdx(i => (i + 1) % words.length)
        setAnimating(false)
        setPrev(null)
      }, 400)
    }, 2800 + delay * 150)
    return () => clearInterval(id)
  }, [idx, words, delay])

  return (
    <span className="inline-flex relative overflow-hidden align-middle mx-[3px]"
      style={{
        height: '1.6em',
        verticalAlign: 'middle',
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '999px',
        padding: '0 10px',
        minWidth: '5ch',
        maxWidth: '200px',
      }}>
      {/* Exiting word */}
      {prev !== null && (
        <motion.span
          key={`prev-${prev}`}
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: '-110%', opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-x-0 flex items-center justify-center font-body text-[0.85rem] text-[#e8e6f0] whitespace-nowrap px-2"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          {words[prev]}
        </motion.span>
      )}
      {/* Entering word */}
      <motion.span
        key={`curr-${idx}`}
        initial={{ y: '110%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-center font-body text-[0.85rem] text-[#e8e6f0] whitespace-nowrap w-full"
      >
        {words[idx]}
      </motion.span>
    </span>
  )
}

const SKILLS = [
  'UX Design','UI Design','Product Design','User Empathy',
  'Design Systems','Front-End Development','Critical Thinking',
  'Problem Solving','Interaction Design','Usability Testing',
  'Prototyping','Mentoring','No-Code','Visual Design',
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })

  return (
    <section id="about" className="relative z-10 px-6 md:px-10 py-16 md:py-24">
      <div ref={ref} className="max-w-2xl mx-auto">

        {/* Rolling pill text block — Fini style */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16,1,0.3,1] }}
          className="mb-12 text-muted font-body leading-[2.6] text-[0.9rem] md:text-[0.95rem]"
        >
          Expertised in
          <Pill words={['UI/UX Design','Product Design','Visual Design','Interaction Design']} delay={0} />
          with over
          <Pill words={['6+ years','50+ projects','20+ clients']} delay={1} />
          of industry experience.{' '}
          Specializing in crafting
          <Pill words={['Intuitive and Engaging','Beautiful and Functional','Bold and Memorable']} delay={2} />
          user interfaces both aesthetically
          pleasing and easily implementable.{' '}
          Currently works as
          <Pill words={['Lead Designer','Freelance Designer','Product Designer']} delay={3} />
          at Your Company
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-display font-bold text-[1.15rem] text-[#e8e6f0] mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.25 + i * 0.03, duration: 0.32 }}
                whileHover={{ borderColor: 'rgba(201,168,76,0.45)', color: '#c9a84c', y: -2 }}
                className="font-body text-[0.78rem] px-3.5 py-1.5 rounded-full border border-white/8 text-muted cursor-none transition-colors duration-200"
                data-cursor
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
