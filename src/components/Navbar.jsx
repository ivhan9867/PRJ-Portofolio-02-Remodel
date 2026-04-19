import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.16,1,0.3,1] }}
      className={`fixed top-0 inset-x-0 z-50 flex justify-between items-center px-6 md:px-10 py-5 transition-all duration-500 ${
        scrolled ? 'bg-[#07080f]/80 backdrop-blur-xl border-b border-white/5' : ''
      }`}
    >
      <a href="#" className="font-display text-[1rem] text-[#e8e6f0] hover:text-accent transition-colors duration-300">
        Vhan<span className="text-accent">._47</span>
      </a>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-7">
        {[['Work','#work'],['Experience','#experience']].map(([l,h]) => (
          <a key={l} href={h}
            className="font-body text-[0.75rem] tracking-[0.12em] uppercase text-muted hover:text-[#e8e6f0] transition-colors duration-300">
            {l}
          </a>
        ))}
        <a href="mailto:vhan47@email.com"
          className="font-body text-[0.75rem] tracking-[0.08em] uppercase px-5 py-2 rounded-full border border-accent/60 text-accent hover:bg-accent hover:text-black transition-all duration-300">
          Get in Touch
        </a>
      </div>

      {/* Hamburger */}
      <button className="md:hidden flex flex-col gap-[5px] cursor-none p-1" onClick={() => setOpen(!open)}>
        <span className={`block h-px bg-[#e8e6f0] transition-all duration-300 ${open ? 'w-5 rotate-45 translate-y-[6px]' : 'w-5'}`} />
        <span className={`block h-px bg-[#e8e6f0] transition-all duration-300 ${open ? 'w-0 opacity-0' : 'w-3.5'}`} />
        <span className={`block h-px bg-[#e8e6f0] transition-all duration-300 ${open ? 'w-5 -rotate-45 -translate-y-[6px]' : 'w-4'}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 right-0 bg-[#07080f]/96 backdrop-blur-xl border-b border-white/5 px-6 py-8 flex flex-col gap-6"
          >
            {[['Work','#work'],['Experience','#experience']].map(([l,h]) => (
              <a key={l} href={h} onClick={() => setOpen(false)}
                className="font-display text-xl text-[#e8e6f0]">{l}
              </a>
            ))}
            <a href="mailto:vhan47@email.com" className="self-start px-5 py-2 rounded-full border border-accent text-accent text-sm font-body">
              Get in Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
