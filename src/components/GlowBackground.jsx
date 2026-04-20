// PERFORMANCE: blobs use translate3d only (GPU composite layer)
// blur is static — never animated — this is the key perf improvement
// backdrop-filter and filter:blur() are expensive when animated
export default function GlowBackground() {
  return (
    <div style={{
      position: 'fixed', inset: 0,
      pointerEvents: 'none', zIndex: 0,
      overflow: 'hidden',
      contain: 'strict',
      transform: 'translateZ(0)', // promote to composite layer
    }}>
      {/* Dark base gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(150deg,#081020 0%,#070e1c 35%,#08090f 65%,#07080f 100%)',
      }} />

      {/* TOP-LEFT teal — static blur, only position animates */}
      <div className="blob2" style={{
        position: 'absolute', borderRadius: '50%',
        width: 660, height: 560, top: '-8%', left: '-8%',
        background: 'radial-gradient(ellipse,rgba(28,98,158,0.65) 0%,rgba(22,78,138,0.28) 42%,transparent 68%)',
        filter: 'blur(48px)', // STATIC, never changes
      }} />

      {/* TOP-RIGHT indigo */}
      <div className="blob1" style={{
        position: 'absolute', borderRadius: '50%',
        width: 600, height: 520, top: '-10%', right: '-6%',
        background: 'radial-gradient(ellipse,rgba(78,52,208,0.55) 0%,rgba(62,38,188,0.22) 42%,transparent 68%)',
        filter: 'blur(48px)',
      }} />

      {/* CENTER ambient — no animation, just static */}
      <div style={{
        position: 'absolute', borderRadius: '50%',
        width: 880, height: 480,
        top: '6%', left: '50%', transform: 'translateX(-50%)',
        background: 'radial-gradient(ellipse,rgba(22,78,128,0.3) 0%,rgba(18,62,118,0.1) 52%,transparent 70%)',
        filter: 'blur(70px)',
        // No animation — saves GPU cycles
      }} />

      {/* MID-LEFT deep blue */}
      <div className="blob1" style={{
        position: 'absolute', borderRadius: '50%',
        width: 540, height: 440, top: '38%', left: '-14%',
        animationDelay: '-6s',
        background: 'radial-gradient(ellipse,rgba(28,62,178,0.5) 0%,rgba(22,52,158,0.18) 42%,transparent 68%)',
        filter: 'blur(52px)',
      }} />

      {/* BOTTOM-RIGHT purple */}
      <div className="blob2" style={{
        position: 'absolute', borderRadius: '50%',
        width: 560, height: 460, bottom: '-2%', right: '-4%',
        animationDelay: '-11s',
        background: 'radial-gradient(ellipse,rgba(92,42,188,0.48) 0%,rgba(78,32,168,0.18) 42%,transparent 68%)',
        filter: 'blur(52px)',
      }} />

      {/* BOTTOM-LEFT teal */}
      <div className="blob3" style={{
        position: 'absolute', borderRadius: '50%',
        width: 500, height: 380, bottom: '4%', left: '4%',
        animationDelay: '-3s',
        background: 'radial-gradient(ellipse,rgba(18,108,142,0.45) 0%,rgba(14,88,122,0.16) 42%,transparent 68%)',
        filter: 'blur(52px)',
      }} />
    </div>
  )
}
