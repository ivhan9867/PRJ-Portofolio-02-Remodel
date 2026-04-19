// Matches Fini's background: dark teal/blue-green texture with scattered color blobs
// Glow is spread across ENTIRE background, not focused behind avatar
export default function GlowBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

      {/* Base tinted background — dark teal like Fini */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(160deg, #080e18 0%, #070d16 40%, #08090f 70%, #070810 100%)',
      }} />

      {/* TOP LEFT — blue-teal blob */}
      <div className="blob2 absolute" style={{
        width: 700, height: 600,
        top: '-5%', left: '-10%',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(30,90,140,0.55) 0%, rgba(20,70,120,0.25) 40%, transparent 70%)',
        filter: 'blur(55px)',
      }} />

      {/* TOP RIGHT — indigo/purple blob */}
      <div className="blob1 absolute" style={{
        width: 650, height: 550,
        top: '-8%', right: '-8%',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(70,50,180,0.45) 0%, rgba(55,35,160,0.2) 40%, transparent 70%)',
        filter: 'blur(60px)',
      }} />

      {/* CENTER — subtle teal ambient */}
      <div className="blob3 absolute" style={{
        width: 800, height: 500,
        top: '15%', left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(20,80,110,0.3) 0%, rgba(15,60,100,0.12) 50%, transparent 70%)',
        filter: 'blur(80px)',
      }} />

      {/* MID LEFT — deep blue */}
      <div className="blob1 absolute" style={{
        width: 580, height: 480,
        top: '35%', left: '-12%',
        borderRadius: '50%',
        animationDelay: '-7s',
        background: 'radial-gradient(ellipse, rgba(25,60,160,0.4) 0%, rgba(20,50,140,0.15) 45%, transparent 70%)',
        filter: 'blur(65px)',
      }} />

      {/* BOTTOM RIGHT — purple/violet */}
      <div className="blob2 absolute" style={{
        width: 600, height: 500,
        bottom: '0%', right: '-5%',
        borderRadius: '50%',
        animationDelay: '-12s',
        background: 'radial-gradient(ellipse, rgba(85,40,170,0.38) 0%, rgba(70,30,150,0.15) 45%, transparent 70%)',
        filter: 'blur(70px)',
      }} />

      {/* BOTTOM LEFT — teal */}
      <div className="blob3 absolute" style={{
        width: 550, height: 420,
        bottom: '5%', left: '5%',
        borderRadius: '50%',
        animationDelay: '-4s',
        background: 'radial-gradient(ellipse, rgba(20,100,130,0.35) 0%, rgba(15,80,110,0.14) 45%, transparent 70%)',
        filter: 'blur(65px)',
      }} />

      {/* Fine noise texture overlay — gives Fini's grain feel */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
        backgroundSize: '400px 400px',
        opacity: 1,
        mixBlendMode: 'overlay',
      }} />

    </div>
  )
}
