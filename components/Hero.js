export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-static.jpg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(55%)",
          zIndex: 0,
        }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "800px",
          padding: "0 20px",
        }}
      >
        <h1
          style={{
            background: "linear-gradient(90deg, #DCDCDC, #C0C0C0, #A9A9A9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "3.2rem",
            marginBottom: "18px",
          }}
        >
          Maryland Living, Simplified.
        </h1>

        <p style={{ color: "#BFBFBF", fontSize: "1.1rem", marginBottom: "36px" }}>
          Discover, apply, and tour your next home with ease — powered by G & G’s verified network and next-gen AI.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          <a href="/subscriber-signup" className="btn-silver">
            Join Now
          </a>
          <a href="/tenant-signup" className="btn-outline">
            Browse Listings
          </a>
        </div>
      </div>
    </section>
  );
}
