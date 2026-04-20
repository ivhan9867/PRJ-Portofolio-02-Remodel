export default function GlowBackground() {
  return (
    <div style={{
      position: 'fixed', inset: 0,
      pointerEvents: 'none',
      zIndex: 0,          // always behind everything
      overflow: 'hidden',
      contain: 'strict',
    }}>
      {/* Dark base */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(150deg,#081020 0%,#070e1c 35%,#08090f 65%,#070810 100%)',
      }} />

      {/* TOP LEFT — teal/blue */}
      <div className="blob2" style={{
        position: 'absolute', borderRadius: '50%',
        width: 680, height: 580, top: '-8%', left: '-8%',
        background: 'radial-gradient(ellipse,rgba(30,100,160,0.62) 0%,rgba(25,80,140,0.28) 40%,transparent 68%)',
        filter: 'blur(50px)', willChange: 'transform',
      }} />

      {/* TOP RIGHT — indigo */}
      <div className="blob1" style={{
        position: 'absolute', borderRadius: '50%',
        width: 620, height: 540, top: '-10%', right: '-6%',
        background: 'radial-gradient(ellipse,rgba(80,55,210,0.52) 0%,rgba(65,40,190,0.22) 40%,transparent 68%)',
        filter: 'blur(50px)', willChange: 'transform',
      }} />

      {/* CENTER ambient */}
      <div className="blob3" style={{
        position: 'absolute', borderRadius: '50%',
        width: 900, height: 500,
        top: '8%', left: '50%', transform: 'translateX(-50%)',
        background: 'radial-gradient(ellipse,rgba(25,80,130,0.32) 0%,rgba(20,65,120,0.1) 50%,transparent 70%)',
        filter: 'blur(70px)', willChange: 'transform',
      }} />

      {/* MID LEFT — deep blue */}
      <div className="blob1" style={{
        position: 'absolute', borderRadius: '50%',
        width: 560, height: 460, top: '38%', left: '-14%',
        animationDelay: '-6s',
        background: 'radial-gradient(ellipse,rgba(30,65,180,0.48) 0%,rgba(25,55,160,0.18) 40%,transparent 68%)',
        filter: 'blur(55px)', willChange: 'transform',
      }} />

      {/* BOTTOM RIGHT — purple */}
      <div className="blob2" style={{
        position: 'absolute', borderRadius: '50%',
        width: 580, height: 480, bottom: '-2%', right: '-4%',
        animationDelay: '-11s',
        background: 'radial-gradient(ellipse,rgba(95,45,190,0.45) 0%,rgba(80,35,170,0.18) 40%,transparent 68%)',
        filter: 'blur(55px)', willChange: 'transform',
      }} />

      {/* BOTTOM LEFT — teal */}
      <div className="blob3" style={{
        position: 'absolute', borderRadius: '50%',
        width: 520, height: 400, bottom: '4%', left: '4%',
        animationDelay: '-3s',
        background: 'radial-gradient(ellipse,rgba(20,110,145,0.42) 0%,rgba(15,90,125,0.16) 40%,transparent 68%)',
        filter: 'blur(55px)', willChange: 'transform',
      }} />

      {/* Grain texture via inline SVG */}
      <svg style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        opacity: 0.05, mixBlendMode: 'overlay',
        pointerEvents: 'none',
      }}>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)"/>
      </svg>
    </div>
  )
}
