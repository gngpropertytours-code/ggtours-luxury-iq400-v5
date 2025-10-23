export default function HowItWorks() {
  const steps = [
    { title: '1. Explore', desc: 'Public, verified listings. No signup required to browse.' },
    { title: '2. Apply', desc: 'Secure application with documents when you’re ready.' },
    { title: '3. Schedule', desc: 'SYNCRO AI coordinates virtual or in-person tours.' },
    { title: '4. Lease', desc: 'Finalize confidently with verified records and reminders.' }
  ];

  return (
    <section id="howitworks" style={{ background: '#000', color: '#fff', padding: '90px 20px', textAlign: 'center' }}>
      <h2 style={{
        fontSize: '2.2rem', marginBottom: 36,
        background: 'linear-gradient(90deg, #D3D3D3, #C0C0C0, #A9A9A9)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
      }}>
        How It Works
      </h2>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))',
        gap: 20, maxWidth: 1000, margin: '0 auto'
      }}>
        {steps.map((s) => (
          <div key={s.title} style={{
            background: '#121212', border: '1px solid rgba(192,192,192,0.25)',
            borderRadius: 10, padding: 24
          }}>
            <h3 style={{ color: '#C0C0C0', margin: '0 0 8px' }}>{s.title}</h3>
            <p style={{ color: '#BFBFBF', margin: 0 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
