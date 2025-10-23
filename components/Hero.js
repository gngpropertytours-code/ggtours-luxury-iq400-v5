export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "120px 20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2.8rem",
          fontWeight: "700",
          background:
            "linear-gradient(90deg, #C8A951, #D4AF37, #EAD27F)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "20px",
        }}
      >
        Maryland Living, Simplified.
      </h1>
      <p style={{ fontSize: "1.1rem", color: "#d4d4d4" }}>
        A luxury property marketing and tenant-match experience built for
        agents, landlords, and residents across Maryland.
      </p>
      <div style={{ marginTop: "40px" }}>
        <a
          href="#plans"
          style={{
            background:
              "linear-gradient(90deg, #C8A951, #D4AF37, #EAD27F)",
            color: "black",
            padding: "14px 28px",
            borderRadius: "4px",
            fontWeight: "600",
            textDecoration: "none",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.opacity = "0.8")}
          onMouseOut={(e) => (e.target.style.opacity = "1")}
        >
          Explore Plans
        </a>
      </div>
    </section>
  );
}
