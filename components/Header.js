import React, { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Properties", href: "#listings" },
    { name: "Plans", href: "#plans" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 1.8rem",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        backdropFilter: "blur(6px)",
        borderBottom: "1px solid rgba(192,192,192,0.2)",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 999,
      }}
    >
      <Logo />

      {/* --- Hamburger icon --- */}
      {isMobile ? (
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <span
            style={{
              width: "25px",
              height: "2px",
              background: "#f5f5f5",
              transition: "0.3s",
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }}
          ></span>
          <span
            style={{
              width: "25px",
              height: "2px",
              background: "#f5f5f5",
              opacity: menuOpen ? 0 : 1,
              transition: "0.3s",
            }}
          ></span>
          <span
            style={{
              width: "25px",
              height: "2px",
              background: "#f5f5f5",
              transition: "0.3s",
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }}
          ></span>
        </div>
      ) : (
        <nav style={{ display: "flex", gap: "2rem" }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: "#f5f5f5",
                textDecoration: "none",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "500",
                fontSize: "0.95rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                position: "relative",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C0C0C0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#f5f5f5")}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}

      {/* --- Mobile Slide Menu --- */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            right: 0,
            width: "70%",
            height: "calc(100vh - 70px)",
            background: "rgba(0,0,0,0.95)",
            backdropFilter: "blur(10px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            borderLeft: "1px solid rgba(192,192,192,0.2)",
            transition: "all 0.4s ease",
            zIndex: 998,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#f5f5f5",
                textDecoration: "none",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "1.2rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
