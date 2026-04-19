// CSS-only glow blobs — more visible, matches Fini's blue/purple aesthetic
export default function GlowBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Main blue — top center/right */}
      <div className="blob1 absolute rounded-full" style={{
        width: 750, height: 550,
        top: '-8%', right: '-12%',
        background: 'radial-gradient(ellipse, rgba(55,85,220,0.28) 0%, rgba(45,65,190,0.12) 45%, transparent 70%)',
        filter: 'blur(70px)',
      }} />
      {/* Purple — mid left */}
      <div className="blob2 absolute rounded-full" style={{
        width: 600, height: 520,
        top: '25%', left: '-12%',
        background: 'radial-gradient(ellipse, rgba(110,55,210,0.22) 0%, rgba(85,40,170,0.08) 45%, transparent 70%)',
        filter: 'blur(85px)',
      }} />
      {/* Blue — lower center */}
      <div className="blob3 absolute rounded-full" style={{
        width: 700, height: 380,
        top: '55%', left: '15%',
        background: 'radial-gradient(ellipse, rgba(45,75,200,0.2) 0%, rgba(55,80,200,0.07) 45%, transparent 70%)',
        filter: 'blur(90px)',
      }} />
      {/* Purple bottom right */}
      <div className="blob1 absolute rounded-full" style={{
        width: 500, height: 420,
        bottom: '0%', right: '0%',
        animationDelay: '-9s',
        background: 'radial-gradient(ellipse, rgba(95,45,185,0.18) 0%, transparent 65%)',
        filter: 'blur(80px)',
      }} />
    </div>
  )
}
