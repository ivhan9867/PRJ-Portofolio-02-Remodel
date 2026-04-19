// More visible CSS-only glow blobs — blue/purple like Fini, clearly visible
export default function GlowBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Primary blue — top right, most dominant */}
      <div className="blob1 absolute" style={{
        width: 800, height: 600,
        top: '-15%', right: '-10%',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse at center, rgba(60,90,230,0.35) 0%, rgba(50,75,200,0.18) 40%, transparent 70%)',
        filter: 'blur(60px)',
      }} />

      {/* Purple — mid left */}
      <div className="blob2 absolute" style={{
        width: 650, height: 560,
        top: '20%', left: '-15%',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse at center, rgba(115,55,215,0.28) 0%, rgba(90,40,180,0.12) 40%, transparent 70%)',
        filter: 'blur(70px)',
      }} />

      {/* Blue — lower center */}
      <div className="blob3 absolute" style={{
        width: 750, height: 400,
        top: '55%', left: '10%',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse at center, rgba(50,80,210,0.25) 0%, rgba(55,80,200,0.1) 40%, transparent 70%)',
        filter: 'blur(80px)',
      }} />

      {/* Purple accent — bottom right */}
      <div className="blob1 absolute" style={{
        width: 550, height: 450,
        bottom: '-5%', right: '-5%',
        borderRadius: '50%',
        animationDelay: '-10s',
        background: 'radial-gradient(ellipse at center, rgba(100,45,190,0.22) 0%, transparent 65%)',
        filter: 'blur(70px)',
      }} />

      {/* Subtle center ambient — ties it all together */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 55% 35%, rgba(55,80,200,0.1) 0%, transparent 50%)',
      }} />
    </div>
  )
}
