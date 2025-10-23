export default function Plans() {
  const plans = [
    { name: 'Premium', price: '$2,000 / month', features: ['2 listings', 'Photo/video walkthrough', 'Instagram feature'] },
    { name: 'Elite', price: '$4,000 / month', features: ['4 listings', 'Cinematic walkthroughs', 'Analytics dashboard', 'Priority support'] },
    { name: 'Enterprise', price: '$8,000 / month', features: ['8 listings', 'AI automation', 'Team access', 'Advanced analytics'] }
  ];

  return (
    <section id="plans" style={{ background: '#000', color: '#fff', padding: '100px 20px', textAlign: 'center' }}>
      <h2 style={{
        fontSize: '2rem', marginBottom: 14,
        background: 'linear-gradient(90deg, #D3D3D3, #C0C0C0, #A9A9A9)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
      }}>
        Subscription Plans
      </h2>
      <p style={{ color: '#BFBFBF', marginBottom: 30 }}>
        60% cinematic content • 20% targeted ads • 20% AI & product innovation
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: 22, maxWidth: 1100, margin: '0 auto' }}>
        {plans.map((p) => (
          <div key={p.name} style={{
            background: '#121212', border: '1px solid rgba(192,192,192,0.25)',
            borderRadius: 10, padding: '28px 22px'
          }}>
            <h3 style={{ color: '#C0C0C0', margin: '0 0 6px' }}>{p.name}</h3>
            <p style={{ margin: '0 0 16px' }}>{p.price}</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#BFBFBF', textAlign: 'left' }}>
              {p.features.map((f) => (<li key={f}>• {f}</li>))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
