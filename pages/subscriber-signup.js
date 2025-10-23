export default function SubscriberSignup() {
  return (
    <main style={{ background: '#000', color: '#fff', minHeight: '80vh', padding: '90px 20px', textAlign: 'center' }}>
      <h1 style={{ background: 'linear-gradient(90deg,#C0C0C0,#E0E0E0,#A8A8A8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Join G & G Property Tours
      </h1>
      <p style={{ color: '#BFBFBF' }}>30-day free trial (1 listing, full features). Then pick a plan.</p>
      <form style={{ maxWidth: 520, margin: '24px auto', display: 'grid', gap: 12, textAlign: 'left' }}>
        <input style={i} placeholder="Full Name / Business Name" />
        <input style={i} placeholder="Email" type="email" />
        <input style={i} placeholder="Number of Properties" />
        <textarea style={{...i, height: 120}} placeholder="Tell us about your business..." />
        <label style={{ color: '#C0C0C0' }}><input type="checkbox" /> I agree to the Marketing Service Agreement.</label>
        <button style={b}>Submit</button>
      </form>
    </main>
  );
}
const i = { background: '#111', color: '#fff', border: '1px solid #2B2B2B', borderRadius: 8, padding: 12 };
const b = { background: '#C0C0C0', color: '#000', border: 0, padding: '12px 18px', borderRadius: 8, fontWeight: 700, cursor: 'pointer' };
