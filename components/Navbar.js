import { useState } from 'react';

export default function Navbar() {
  const [hover, setHover] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '14px 24px', background: '#000',
        borderBottom: '2px solid', borderImage: 'linear-gradient(90deg, #8F8F8F, #C0C0C0, #9E9E9E) 1',
        backgroundImage: hover ? 'linear-gradient(90deg, rgba(160,160,160,0.12), rgba(224,224,224,0.12))' : 'none',
        transition: 'background-image 0.8s ease'
      }}
    >
      <div style={{ fontWeight: 700, color: '#C0C0C0' }}>G & G Property Tours</div>
      <div style={{ display: 'flex', gap: '1.2rem' }}>
        <a style={link} onClick={() => scrollToSection('hero')}>Home</a>
        <a style={link} onClick={() => scrollToSection('howitworks')}>How It Works</a>
        <a style={link} onClick={() => scrollToSection('plans')}>Plans</a>
        <a style={link} href="/subscriber-signup">Join</a>
        <a style={link} href="/tenant-signup">For Tenants</a>
        <a style={link} href="/testimonials">Testimonials</a>
      </div>
    </nav>
  );
}
const link = { color: '#fff', textDecoration: 'none', cursor: 'pointer' };
