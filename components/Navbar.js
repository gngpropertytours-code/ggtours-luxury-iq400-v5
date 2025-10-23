import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [hover, setHover] = useState(false);

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
        transition: 'background-image 1s ease'
      }}
    >
      {/* Logo */}
      <div style={{ color: '#EAD27F', fontWeight: 'bold', fontSize: '1.3rem' }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#EAD27F' }}>
          G & G Property Tours
        </Link>
      </div>

      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link href="/" style={linkStyle}>Home</Link>
        <Link href="/plans" style={linkStyle}>Plans</Link>
        <Link href="/subscriber-signup" style={linkStyle}>Join</Link>
        <Link href="/tenant-signup" style={linkStyle}>For Tenants</Link>
        <Link href="/testimonials" style={linkStyle}>Testimonials</Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: '500',
  transition: 'color 0.3s ease',
};
