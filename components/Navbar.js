import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "18px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 100,
        background: scrolled
          ? "rgba(0,0,0,0.9)"
          : "linear-gradient(90deg, rgba(0,0,0,0.6), rgba(0,0,0,0))",
        backdropFilter: "blur(6px)",
        borderBottom: scrolled ? "1px solid rgba(192,192,192,0.2)" : "none",
        transition: "background 0.4s ease, border 0.4s ease",
      }}
    >
      <h3
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "1.3rem",
          background: "linear-gradient(90deg,#DCDCDC,#C0C0C0,#A9A9A9)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        G & G Property Tours
      </h3>

      <div style={{ display: "flex", gap: "24px" }}>
        <a href="#hero" style={linkStyle}>
          Home
        </a>
        <a href="#plans" style={linkStyle}>
          Plans
        </a>
        <a href="/subscriber-signup" style={linkStyle}>
          Sign Up
        </a>
        <a href="/tenant-signup" style={linkStyle}>
          Browse
        </a>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "#C0C0C0",
  textDecoration: "none",
  fontSize: "0.95rem",
  fontWeight: 500,
  transition: "color 0.3s ease",
};
