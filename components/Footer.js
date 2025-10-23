import { useState } from 'react';

export default function Footer() {
  const [hover, setHover] = useState(false);

  return (
    <footer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: '40px 20px', textAlign: 'center', background: '#000', marginTop: '80px',
        borderTop: '2px solid', borderImage: 'linear-gradient(90deg, #8F8F8F, #C0C0C0, #9E9E9E) 1',
        backgroundImage: hover ? 'linear-gradient(90deg, rgba(192,192,192,0.12), rgba(168,168,168,0.12))' : 'none',
        transition: 'background-image 0.8s ease'
      }}
    >
      <p style={{ color: '#BFBFBF', margin: '0 0 8px' }}>G & G Property Tours</p>
      <p style={{ color: '#9C9C9C', fontSize: '0.9rem', margin: 0 }}>
        © {new Date().getFullYear()} All Rights Reserved.
      </p>
      <div style={{ marginTop: '12px' }}>
        <a href="/plans" style={l}>Plans</a> · <a href="/subscriber-signup" style={l}>Join</a> · <a href="/tenant-signup" style={l}>For Tenants</a> · <a href="/testimonials" style={l}>Testimonials</a>
      </div>
    </footer>
  );
}
const l = { color: '#C0C0C0', textDecoration: 'none' };
