import React, { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        width: "100%",
        zIndex: 9999,
        background: "rgba(0, 0, 0, 0.92)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(192,192,192,0.25)",
        padding: "1rem 1.2rem",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingRight: "1rem",
          paddingLeft: "1rem",
        }}
      >
        <Logo />

        {/* Burger Icon */}
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
        style={{
          display: menuOpen ? "block" : "none",
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(80,80,80,0.5) 100%)",
          borderTop: "1px solid rgba(192,192,192,0.2)",
          textAlign: "center",
          padding: "1.2rem 0",
          animation: "fadeDown 0.4s ease",
        }}
      >
        {links.map((l) => (
          <a
            key={l.name}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              padding: "0.8rem 0",
              color: "#f5f5f5",
              textDecoration: "none",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              fontSize: "1rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C0C0C0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#f5f5f5")}
          >
            {l.name}
          </a>
        ))}
      </nav>

      <style jsx>{`
        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}

const burgerBtn = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "5px",
  width: "32px",
  height: "24px",
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
  if (state === "top") return { ...base, transform: "rotate(45deg) translateY(8px)" };
  if (state === "hide") return { ...base, opacity: 0 };
  if (state === "bottom") return { ...base, transform: "rotate(-45deg) translateY(-8px)" };
  return base;
}
