import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Inline pill slot that cycles words — exactly like Fini
function Pill({ words, delay = 0 }) {
  const [cur, setCur]   = useState(0)
  const [prev, setPrev] = useState(null)
  const timer = useRef(null)

  useEffect(() => {
    timer.current = setTimeout(function tick() {
      setPrev(cur)
      const next = (cur + 1) % words.length
      setCur(next)
      setPrev(null)
      timer.current = setTimeout(tick, 2600 + delay * 120)
    }, 2600 + delay * 120)
    return () => clearTimeout(timer.current)
  }, [cur, words, delay])

  // width based on longest word
  const maxLen = words.reduce((a, b) => a.length > b.length ? a : b, '').length

  return (
    <span
      className="relative inline-flex items-center justify-center overflow-hidden align-middle mx-[3px] flex-shrink-0"
      style={{
        height: '1.55em',
        minWidth: `${Math.max(maxLen * 0.52 + 1.2, 4)}em`,
        background: 'rgba(255,255,255,0.055)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '999px',
        padding: '0 10px',
        verticalAlign: 'middle',
      }}
    >
      {/* Exiting */}
      {prev !== null && (
        <motion.span
          key={`p${prev}`}
          className="absolute font-body text-[#e8e6f0] whitespace-nowrap text-[0.82rem]"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: '-110%', opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.4, 0, 1, 1] }}
        >{words[prev]}</motion.span>
      )}
      {/* Entering */}
      <motion.span
        key={`c${cur}`}
        className="font-body text-[#e8e6f0] whitespace-nowrap text-[0.82rem]"
        initial={{ y: '110%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
      >{words[cur]}</motion.span>
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
  const { ref, inView } = useInView({ threshold: 0.06, triggerOnce: true })

  return (
    <section id="about" className="relative z-10 px-6 md:px-10 py-14 md:py-22">
      <div ref={ref} className="max-w-2xl mx-auto">

        {/* Rolling text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}
          className="text-muted font-body text-[0.88rem] md:text-[0.95rem] mb-12"
          style={{ lineHeight: '2.7' }}
        >
          Expertised in
          <Pill words={['UI/UX Design','Product Design','Visual Design','Interaction Design']} delay={0} />
          with over
          <Pill words={['6+ years','50+ projects','20+ clients']} delay={1} />
          of industry experience.{' '}
          Specializing in crafting
          <Pill words={['Intuitive and Engaging','Beautiful and Functional','Bold and Memorable']} delay={2} />
          user interfaces both aesthetically pleasing and easily implementable.{' '}
          Currently works as
          <Pill words={['Lead Designer','Freelance Designer','Product Designer']} delay={3} />
          at Your Company
        </motion.p>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.18 }}
        >
          <h3 className="font-display font-bold text-[1.1rem] text-[#e8e6f0] mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.22 + i * 0.028, duration: 0.3 }}
                whileHover={{ borderColor: 'rgba(201,168,76,0.5)', color: '#c9a84c', y: -2 }}
                className="font-body text-[0.76rem] px-3.5 py-1.5 rounded-full border border-white/8 text-muted cursor-none transition-colors duration-200"
                data-cursor
              >{s}</motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
