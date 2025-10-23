import { useState } from 'react';

export default function Navbar() {
  const [hover, setHover] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#000',
        borderBottom: '2px solid transparent',
        borderImage: 'linear-gradient(90deg, #C8A951, #D4AF37, #EAD27F) 1',
        backgroundImage: hover
          ? 'linear-gradient(90deg, rgba(200,169,81,0.1), rgba(234,210,127,0.15))'
          : 'none',
        transition: 'background-image 1s ease',
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1000
      }}
    >
      {/* Logo */}
      <div style={{ color: '#EAD27F', fontWeight: 'bold', fontSize: '1.3rem' }}>
        G & G Property Tours
      </div>

      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a onClick={() => scrollToSection('hero')} style={linkStyle}>Home</a>
        <a onClick={() => scrollToSection('howitworks')} style={linkStyle}>How It Works</a>
        <a onClick={() => scrollToSection('plans')} style={linkStyle}>Plans</a>
        <a href="/subscriber-signup" style={linkStyle}>Join</a>
        <a href="/tenant-signup" style={linkStyle}>For Tenants</a>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: '500',
  transition: 'color 0.3s ease',
  cursor: 'pointer'
};
