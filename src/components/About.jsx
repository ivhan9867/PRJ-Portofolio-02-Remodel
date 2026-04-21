import { useState, useEffect, useRef } from 'react'
import { useInView } from '../hooks/useInView'

// Pill slot machine — CSS-only transitions, no Framer Motion
function Pill({ words, delay = 0 }) {
  const [cur, setCur] = useState(0)
  const [phase, setPhase] = useState('idle') // idle | exit | enter
  const timer = useRef(null)

  useEffect(() => {
    const ms = 2800 + delay * 120
    timer.current = setInterval(() => {
      setPhase('exit')
      setTimeout(() => {
        setCur(i => (i + 1) % words.length)
        setPhase('enter')
        setTimeout(() => setPhase('idle'), 360)
      }, 300)
    }, ms)
    return () => clearInterval(timer.current)
  }, [words.length, delay])

  // Compute width from longest word to prevent layout shift
  const maxLen = words.reduce((a, b) => (a.length > b.length ? a : b), '').length

  return (
    <span
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign: 'middle',
        overflow: 'hidden',
        height: '1.6em',
        minWidth: `${Math.max(maxLen * 0.52 + 1.6, 4)}em`,
        background: 'rgba(255,255,255,0.055)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 999,
        padding: '0 10px',
        margin: '0 4px',
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: '"DM Sans",sans-serif',
          fontSize: '0.82rem',
          color: '#e8e6f0',
          whiteSpace: 'nowrap',
          display: 'block',
          opacity: phase === 'exit' ? 0 : 1,
          transform:
            phase === 'exit' ? 'translateY(-110%)' :
            phase === 'enter' ? 'translateY(110%)' : 'translateY(0)',
          transition:
            phase === 'exit'
              ? 'opacity 0.28s ease, transform 0.28s cubic-bezier(0.4,0,1,1)'
              : phase === 'enter'
              ? 'none'
              : 'opacity 0.32s ease, transform 0.36s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {words[cur]}
      </span>
    </span>
  )
}

const SKILLS = [
  'UX Design', 'UI Design', 'Product Design', 'User Empathy',
  'Design Systems', 'Front-End Development', 'Critical Thinking',
  'Problem Solving', 'Interaction Design', 'Usability Testing',
  'Prototyping', 'Mentoring', 'No-Code', 'Visual Design',
]

export default function About() {
  const { ref, inView } = useInView(0.06)

  return (
    <section
      id="about"
      style={{ position: 'relative', zIndex: 10, padding: '56px 24px' }}
    >
      <div ref={ref} style={{ maxWidth: 680, margin: '0 auto' }}>

        {/* Rolling pill paragraph */}
        <p
          style={{
            fontFamily: '"DM Sans",sans-serif',
            color: 'rgba(82,82,110,1)',
            fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
            lineHeight: 2.8,
            marginBottom: 44,
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          Expertised in
          <Pill words={['UI/UX Design', 'Product Design', 'Visual Design', 'Interaction Design']} delay={0} />
          with over
          <Pill words={['6+ years', '50+ projects', '20+ clients']} delay={1} />
          of industry experience.{' '}
          Specializing in crafting
          <Pill words={['Intuitive and Engaging', 'Beautiful and Functional', 'Bold and Memorable']} delay={2} />
          user interfaces both aesthetically pleasing and easily implementable.{' '}
          Currently works as
          <Pill words={['Lead Designer', 'Freelance Designer', 'Product Designer']} delay={3} />
          at Your Company
        </p>

        {/* Skills */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.6s 0.18s ease, transform 0.6s 0.18s ease',
          }}
        >
          <h3
            style={{
              fontFamily: '"Playfair Display",serif',
              fontWeight: 700,
              fontSize: '1.1rem',
              color: '#e8e6f0',
              marginBottom: 14,
            }}
          >
            Skills
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {SKILLS.map((s, i) => (
              <span
                key={s}
                data-cursor
                style={{
                  fontFamily: '"DM Sans",sans-serif',
                  fontSize: '0.76rem',
                  padding: '6px 14px',
                  borderRadius: 999,
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(82,82,110,1)',
                  // Fix: include all transitioned properties + use opacity for stagger
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(8px)',
                  transition: `opacity 0.4s ${0.22 + i * 0.025}s ease,
                               transform 0.4s ${0.22 + i * 0.025}s ease,
                               border-color 0.2s ease,
                               color 0.2s ease`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)'
                  e.currentTarget.style.color = '#c9a84c'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.color = 'rgba(82,82,110,1)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
