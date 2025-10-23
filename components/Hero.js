export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        padding: "100px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          background: "linear-gradient(90deg, #C8A951, #D4AF37, #EAD27F)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Maryland Living, Simplified.
      </h1>
      <p style={{ color: "#d4d4d4", marginTop: "20px" }}>
        Explore verified listings and luxury spaces through G & G Property Tours.
      </p>
    </section>
  );
}
