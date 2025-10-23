<section id="hero" style={ ... }>
export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "90vh",
        backgroundImage: "url('/images/hero-static.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "#fff",
      }}
    >
      {/* Overlay for cinematic contrast */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.65)",
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div style={{ zIndex: 2 }}>
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
            color: "#EAD27F",
            letterSpacing: "1px",
          }}
        >
          Maryland Living, Simplified.
        </h1>
        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto 2rem",
            color: "#ccc",
            lineHeight: "1.6",
          }}
        >
          AI-powered marketing & tenant-matching for Maryland’s most discerning
          agents, landlords & property managers.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <a
            href="/subscriber-signup"
            style={{
              background:
                "linear-gradient(90deg,#C8A951,#D4AF37,#EAD27F)",
              color: "#000",
              fontWeight: "bold",
              padding: "0.9rem 1.8rem",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "opacity 0.3s ease",
            }}
          >
            Join Now
          </a>
          <a
            href="/tenant-signup"
            style={{
              border: "1px solid #D4AF37",
              color: "#EAD27F",
              fontWeight: "500",
              padding: "0.9rem 1.8rem",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "background 0.3s ease,color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#EAD27F";
              e.target.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "#EAD27F";
            }}
          >
            Browse Listings
          </a>
        </div>
      </div>
    </section>
  );
}
