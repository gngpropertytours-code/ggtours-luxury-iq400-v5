export default function Testimonials() {
  const items = [
    { quote: "Filled units faster than ever — the visuals and flow are elite.", name: "Marcus T.", role: "Property Manager" },
    { quote: "Professional from day one. The experience felt high-end throughout.", name: "Destiny R.", role: "Agent" },
    { quote: "I found my place in a week — verified, simple, and stress-free.", name: "Elliot K.", role: "Tenant" },
  ];
  return (
    <main style={{ background: '#000', color: '#fff', minHeight: '80vh', padding: '90px 20px', textAlign: 'center' }}>
      <h1 style={{ background: 'linear-gradient(90deg,#C0C0C0,#E0E0E0,#A8A8A8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        What People Are Saying
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20, maxWidth: 1000, margin: '30px auto' }}>
        {items.map((t) => (
          <div key={t.name} style={{ background: '#121212', border: '1px solid rgba(192,192,192,0.25)', borderRadius: 10, padding: 24 }}>
            <p style={{ color: '#BFBFBF', fontStyle: 'italic' }}>"{t.quote}"</p>
            <h3 style={{ marginBottom: 6 }}>{t.name}</h3>
            <p style={{ color: '#9C9C9C', margin: 0 }}>{t.role}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
