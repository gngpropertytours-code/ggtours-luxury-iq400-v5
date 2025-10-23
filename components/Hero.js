import React from "react";

export default function Hero() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #000 0%, #0A0A0A 100%)",
        color: "#E0E0E0",
        padding: "160px 20px 140px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Cinematic Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.15,
          zIndex: 0,
        }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "800px", margin: "0 auto" }}>
        <h1
          className="text-silver"
          style={{
            fontSize: "3.8rem",
            marginBottom: "25px",
            lineHeight: "1.2",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Maryland Living, Simplified.
        </h1>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1.25rem",
            color: "#BFBFBF",
            marginBottom: "50px",
          }}
        >
          G & G Property Tours redefines tenant acquisition and property marketing —
          blending AI precision with cinematic presentation.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <a
            href="#listings"
            style={{
              background: "linear-gradient(90deg, #C0C0C0, #A9A9A9)",
              color: "#000",
              padding: "14px 30px",
              borderRadius: "6px",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Explore Properties
          </a>
          <a
            href="#plans"
            style={{
              border: "1px solid #C0C0C0",
              color: "#C0C0C0",
              padding: "14px 30px",
              borderRadius: "6px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#C0C0C0")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}
