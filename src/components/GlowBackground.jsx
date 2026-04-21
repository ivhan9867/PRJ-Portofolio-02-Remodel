// Matches Fini's bg: dark teal-blue, soft scattered glow, very subtle grain
// Key insight from screenshot: Fini's glow is SOFTER and more evenly spread
// Less saturated, feels like environmental light not spotlight
export default function GlowBackground() {
  return (
    <div style={{
      position:'fixed', inset:0,
      pointerEvents:'none', zIndex:0,
      overflow:'hidden', contain:'strict',
      transform:'translateZ(0)',
    }}>
      {/* Very dark teal base — matches Fini's dark background with subtle warmth */}
      <div style={{
        position:'absolute', inset:0,
        background:'linear-gradient(150deg, #080f1a 0%, #070c18 30%, #080910 60%, #07080d 100%)',
      }} />

      {/* TOP LEFT — soft blue-teal, wide spread */}
      <div className="blob2" style={{
        position:'absolute', borderRadius:'50%',
        width:800, height:700, top:'-15%', left:'-15%',
        background:'radial-gradient(ellipse, rgba(25,85,140,0.55) 0%, rgba(20,70,120,0.22) 45%, transparent 70%)',
        filter:'blur(55px)',
      }}/>

      {/* TOP RIGHT — muted indigo, softer than before */}
      <div className="blob1" style={{
        position:'absolute', borderRadius:'50%',
        width:700, height:600, top:'-12%', right:'-10%',
        background:'radial-gradient(ellipse, rgba(65,45,185,0.45) 0%, rgba(55,35,165,0.18) 45%, transparent 70%)',
        filter:'blur(55px)',
      }}/>

      {/* CENTER GLOW — wide ambient, ties everything together like Fini */}
      <div className="blob3" style={{
        position:'absolute', borderRadius:'50%',
        width:1100, height:600,
        top:'0%', left:'50%', transform:'translateX(-50%)',
        background:'radial-gradient(ellipse, rgba(20,70,120,0.25) 0%, rgba(15,55,105,0.08) 55%, transparent 72%)',
        filter:'blur(80px)',
        // No animation on center — stays stable like Fini
      }}/>

      {/* MID LEFT */}
      <div className="blob1" style={{
        position:'absolute', borderRadius:'50%',
        width:600, height:500, top:'35%', left:'-18%',
        animationDelay:'-6s',
        background:'radial-gradient(ellipse, rgba(22,55,165,0.42) 0%, rgba(18,45,145,0.16) 45%, transparent 70%)',
        filter:'blur(60px)',
      }}/>

      {/* BOTTOM RIGHT — muted purple */}
      <div className="blob2" style={{
        position:'absolute', borderRadius:'50%',
        width:620, height:520, bottom:'-5%', right:'-8%',
        animationDelay:'-12s',
        background:'radial-gradient(ellipse, rgba(80,38,172,0.4) 0%, rgba(68,28,152,0.15) 45%, transparent 70%)',
        filter:'blur(60px)',
      }}/>

      {/* BOTTOM LEFT — teal */}
      <div className="blob3" style={{
        position:'absolute', borderRadius:'50%',
        width:540, height:420, bottom:'2%', left:'2%',
        animationDelay:'-4s',
        background:'radial-gradient(ellipse, rgba(15,95,130,0.38) 0%, rgba(12,80,112,0.14) 45%, transparent 70%)',
        filter:'blur(60px)',
      }}/>

      {/* Fini-style fine grain via SVG filter — subtle overlay */}
      <svg style={{
        position:'absolute', inset:0, width:'100%', height:'100%',
        opacity:0.045, mixBlendMode:'overlay', pointerEvents:'none',
      }}>
        <filter id="bg-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#bg-grain)"/>
      </svg>
    </div>
  )
}
