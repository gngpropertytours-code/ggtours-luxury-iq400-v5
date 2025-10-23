import { useState } from 'react';

export default function Footer() {
  const [hover, setHover] = useState(false);

  return (
    <footer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: "2rem",
        textAlign: "center",
        color: "#fff",
        backgroundColor: "#000",
        borderTop: "2px solid transparent",
        borderImage: "linear-gradient(90deg, #C8A951, #D4AF37, #EAD27F) 1",
        backgroundImage: hover
          ? "linear-gradient(90deg, rgba(200,169,81,0.2), rgba(234,210,127,0.3))"
          : "none",
        transition: "background-image 1s ease"
      }}
    >
      <p style={{ color: "#EAD27F", fontWeight: "bold", marginBottom: "0.5rem" }}>
        G & G Property Tours
      </p>
      <p style={{ fontSize: "0.9rem", color: "#aaa" }}>
        © 2025 G & G Property Tours. All Rights Reserved.
      </p>
      <div style={{ marginTop: "1rem" }}>
        <a href="/plans" style={linkStyle}>Plans</a> ·{" "}
        <a href="/subscriber-signup" style={linkStyle}>Join</a> ·{" "}
        <a href="/tenant-signup" style={linkStyle}>For Tenants</a> ·{" "}
        <a href="/testimonials" style={linkStyle}>Testimonials</a>
      </div>
    </footer>
  );
}

const linkStyle = {
  color: "#D4AF37",
  textDecoration: "none",
  fontWeight: "500",
  transition: "color 0.3s ease"
};
