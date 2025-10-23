export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        backgroundImage: "url('/images/hero-static.jpg')",
        backgroundSize: 'cover', backgroundPosition: 'center',
        position: 'relative', minHeight: '88vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '120px 20px', color: '#fff'
      }}
    >
      <div style={{
        position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)'
      }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 800 }}>
        <h1 style={{
          fontSize: '3rem', margin: '0 0 16px',
          background: 'linear-gradient(90deg, #C0C0C0, #E0E0E0, #A8A8A8)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
        }}>
          Maryland Living, Elevated.
        </h1>
        <p style={{ color: '#BFBFBF', lineHeight: 1.6, marginBottom: 28 }}>
          AI-powered tenant matching and a premium listing experience for Maryland’s landlords, agents, and residents.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <a href="/subscriber-signup" style={ctaPrimary}>Join Now</a>
          <a href="/tenant-signup" style={ctaGhost}>Browse Listings</a>
        </div>
      </div>
    </section>
  );
}
const ctaPrimary = {
  background: 'linear-gradient(90deg, #C0C0C0, #E0E0E0, #A8A8A8)',
  color: '#000', textDecoration: 'none', padding: '12px 22px',
  borderRadius: 8, fontWeight: 700
};
const ctaGhost = {
  border: '1px solid #C0C0C0', color: '#C0C0C0', textDecoration: 'none',
  padding: '12px 22px', borderRadius: 8
};
