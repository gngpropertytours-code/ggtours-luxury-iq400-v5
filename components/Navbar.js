import React from "react";
import Logo from "./Logo";

export default function Header() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.2rem 2.5rem",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    backdropFilter: "blur(6px)",
    borderBottom: "1px solid rgba(192,192,192,0.2)",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 999,
  };

  const linkStyle = {
    color: "#f5f5f5",
    textDecoration: "none",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: "500",
    fontSize: "0.95rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    position: "relative",
    transition: "color 0.3s ease",
  };

  const links = [
    { name: "Home", href: "#" },
    { name: "Properties", href: "#listings" },
    { name: "Plans", href: "#plans" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header style={navStyle}>
      <Logo />
      <nav style={{ display: "flex", gap: "2rem" }}>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            style={linkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#C0C0C0";
              const underline = document.createElement("span");
              underline.style.position = "absolute";
              underline.style.left = 0;
              underline.style.bottom = "-4px";
              underline.style.width = "100%";
              underline.style.height = "1px";
              underline.style.background =
                "linear-gradient(90deg, #C0C0C0, #FFFFFF, #A9A9A9)";
              underline.style.animation = "fadeInLine 0.5s forwards";
              e.currentTarget.appendChild(underline);
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#f5f5f5";
              const span = e.currentTarget.querySelector("span");
              if (span) span.remove();
            }}
          >
            {link.name}
          </a>
        ))}
      </nav>
      <style jsx>{`
        @keyframes fadeInLine {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }
      `}</style>
    </header>
  );
}
