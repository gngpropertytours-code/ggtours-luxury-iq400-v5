import React, { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "Properties", href: "#listings" },
    { name: "Plans", href: "#plans" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header style={headerStyle}>
      <div style={bar}>
        <Logo />

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

      {/* Dropdown directly below header */}
      <div style={dropdownWrap(menuOpen)}>
        <nav style={dropdownNav}>
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={dropLink}
            >
              {l.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

/* ---------------- Styles ---------------- */

const headerStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  width: "100%",
  zIndex: 9999,
  background: "rgba(0,0,0,0.92)",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  borderBottom: "1px solid rgba(192,192,192,0.25)",
  paddingTop: "calc(12px + env(safe-area-inset-top))",
  paddingBottom: 12,
  paddingLeft: "calc(16px + env(safe-area-inset-left))",
  paddingRight: "calc(16px + env(safe-area-inset-right))",
  boxSizing: "border-box",
  overflow: "hidden", // fully removes right overflow
};

const bar = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "0 auto",
  maxWidth: "min(1200px, 100%)",
  width: "100%",
  overflow: "hidden", // ensures children don't push out
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
    backgroundColor: "#D0D0D0",
    transition: "all 0.3s ease",
  };
  if (state === "top") return { ...base, transform: "rotate(45deg) translateY(9px)" };
  if (state === "hide") return { ...base, opacity: 0 };
  if (state === "bottom") return { ...base, transform: "rotate(-45deg) translateY(-9px)" };
  return base;
}

const dropdownWrap = (open) => ({
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  width: "100%",
  display: open ? "block" : "none",
  background: "linear-gradient(180deg, rgba(0,0,0,0.96) 0%, rgba(70,70,70,0.55) 100%)",
  borderTop: "1px solid rgba(192,192,192,0.2)",
  animation: "fadeDown 0.35s ease",
  overflowX: "hidden",
});

const dropdownNav = {
  display: "grid",
  gap: 8,
  padding: "14px 0",
  textAlign: "center",
  overflow: "hidden",
};

const dropLink = {
  display: "block",
  padding: "10px 0",
  color: "#F5F5F5",
  textDecoration: "none",
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 500,
  fontSize: "1rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  transition: "color 0.25s ease",
};
