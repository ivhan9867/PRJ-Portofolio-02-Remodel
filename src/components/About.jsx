import { useState, useEffect, useRef } from 'react'
import { useInView } from '../hooks/useInView'

function Pill({ words, delay = 0 }) {
  const [cur, setCur] = useState(0)
  const [exiting, setExiting] = useState(false)
  const timer = useRef(null)

  useEffect(() => {
    const interval = 2800 + delay * 120
    timer.current = setInterval(() => {
      setExiting(true)
      setTimeout(() => {
        setCur(i => (i + 1) % words.length)
        setExiting(false)
      }, 320)
    }, interval)
    return () => clearInterval(timer.current)
  }, [words, delay])

  const maxWord = words.reduce((a, b) => a.length > b.length ? a : b, '')

  return (
    <span style={{
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      verticalAlign: 'middle',
      overflow: 'hidden',
      height: '1.55em',
      minWidth: `${Math.max(maxWord.length * 0.5 + 1.4, 4)}em`,
      background: 'rgba(255,255,255,0.055)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 999,
      padding: '0 10px',
      margin: '0 3px',
    }}>
      <span style={{
        fontFamily: '"DM Sans",sans-serif',
        fontSize: '0.82rem',
        color: '#e8e6f0',
        whiteSpace: 'nowrap',
        display: 'block',
        transform: exiting ? 'translateY(-110%)' : 'translateY(0%)',
        opacity: exiting ? 0 : 1,
        transition: exiting
          ? 'transform 0.28s cubic-bezier(0.4,0,1,1), opacity 0.28s'
          : 'transform 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.35s',
      }}>
        {words[cur]}
      </span>
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
  const { ref, inView } = useInView(0.06)

  return (
    <section id="about" style={{ position: 'relative', zIndex: 10, padding: '56px 24px' }}>
      <div ref={ref} style={{ maxWidth: 680, margin: '0 auto' }}>

        {/* Rolling pill text */}
        <p style={{
          fontFamily: '"DM Sans",sans-serif',
          color: 'rgba(82,82,110,1)',
          fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
          lineHeight: 2.8,
          marginBottom: 44,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}>
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
        </p>

        {/* Skills */}
        <div style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.6s 0.18s ease, transform 0.6s 0.18s ease',
        }}>
          <h3 style={{
            fontFamily: '"Playfair Display",serif',
            fontWeight: 700, fontSize: '1.1rem',
            color: '#e8e6f0', marginBottom: 14,
          }}>Skills</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {SKILLS.map((s, i) => (
              <span key={s}
                data-cursor
                style={{
                  fontFamily: '"DM Sans",sans-serif',
                  fontSize: '0.76rem',
                  padding: '6px 14px',
                  borderRadius: 999,
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(82,82,110,1)',
                  cursor: 'none',
                  transition: 'border-color 0.2s, color 0.2s, transform 0.2s',
                  opacity: inView ? 1 : 0,
                  transitionDelay: `${0.22 + i * 0.025}s`,
                }}
                onMouseEnter={e => {
                  e.target.style.borderColor = 'rgba(201,168,76,0.5)'
                  e.target.style.color = '#c9a84c'
                  e.target.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.target.style.color = 'rgba(82,82,110,1)'
                  e.target.style.transform = 'translateY(0)'
                }}
              >{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
