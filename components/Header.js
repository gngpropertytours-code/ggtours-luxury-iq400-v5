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
    { name: "Home", href: "#" },
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
        background: "rgba(0,0,0,0.9)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(192,192,192,0.25)",
        padding: "1rem clamp(1rem, 4vw, 2.5rem)",
        boxSizing: "border-box",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Logo />

        {/* Burger Icon */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "5px",
            width: "30px",
            height: "24px",
          }}
        >
          <span
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "#C0C0C0",
              transition: "all 0.3s ease",
              transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
            }}
          />
          <span
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "#C0C0C0",
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.3s ease",
            }}
          />
          <span
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "#C0C0C0",
              transition: "all 0.3s ease",
              transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
            }}
          />
        </div>
      </div>

      {/* Dropdown Menu */}
      <nav
        style={{
          maxHeight: menuOpen ? "260px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.5s ease-in-out",
          background: "linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(60,60,60,0.6) 100%)",
          borderTop: menuOpen ? "1px solid rgba(192,192,192,0.2)" : "none",
          boxShadow: menuOpen
            ? "0 4px 30px rgba(255,255,255,0.05)"
            : "none",
          animation: menuOpen
            ? "shimmer 2s linear infinite"
            : "none",
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
          {links.map((link) => (
            <li key={link.name} style={{ margin: "1rem 0" }}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#E5E5E5",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: "500",
                  fontSize: "1rem",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#D8D8D8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#E5E5E5")}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Add shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
      `}</style>
    </header>
  );
}
