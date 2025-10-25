import React, { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when resized back to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "Properties", href: "#listings" },
    { name: "Plans", href: "#plans" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "rgba(0, 0, 0, 0.9)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(192,192,192,0.25)",
        padding: "1rem clamp(1rem, 4vw, 2.5rem)",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <Logo />

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: "none", gap: "2rem" }}>
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#CFCFCF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#F5F5F5")}
            >
              {l.name}
            </a>
          ))}
        </nav>

        {/* Burger */}
        <button
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
          style={burgerBtn}
        >
          <span style={burgerLine(menuOpen ? "top" : "mid")} />
          <span style={burgerLine(menuOpen ? "hide" : "mid")} />
          <span style={burgerLine(menuOpen ? "bottom" : "mid")} />
        </button>
      </div>

      {/* Dropdown Menu */}
      <nav
        className="mobile-dropdown"
        style={{
          maxHeight: menuOpen ? 260 : 0,
          overflow: "hidden",
          transition: "max-height 0.45s ease",
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.96) 0%, rgba(60,60,60,0.55) 100%)",
          borderTop: menuOpen ? "1px solid rgba(192,192,192,0.18)" : "none",
          boxShadow: menuOpen ? "0 4px 26px rgba(255,255,255,0.05)" : "none",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: menuOpen ? "1rem 0" : 0,
            textAlign: "center",
          }}
        >
          {links.map((l) => (
            <li key={l.name} style={{ margin: "1rem 0" }}>
              <a
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#E5E5E5",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  fontSize: "1rem",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#D8D8D8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#E5E5E5")}
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <style jsx>{`
        @media (min-width: 769px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-dropdown {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}

const linkStyle = {
  color: "#F5F5F5",
  textDecoration: "none",
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 500,
  fontSize: "0.95rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  transition: "color 0.3s ease",
};

const burgerBtn = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 5,
  width: 36,
  height: 28,
  background: "transparent",
  border: "none",
  cursor: "pointer",
};

function burgerLine(state) {
  const base = {
    width: "100%",
    height: 2,
    backgroundColor: "#CFCFCF",
    transition: "all 0.3s ease",
  };
  if (state === "top") return { ...base, transform: "rotate(45deg) translateY(9px)" };
  if (state === "hide") return { ...base, opacity: 0 };
  if (state === "bottom") return { ...base, transform: "rotate(-45deg) translateY(-9px)" };
  return base;
}
