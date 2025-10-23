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
      {/* Background video for cinematic depth */}
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

      {/* Hero overlay content */}
      <div
        className="fade-in"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "800px",
          padding: "0 20px",
        }}
      >
        <h1
          className="text-silver"
          style={{
            fontSize: "3.2rem",
            marginBottom: "18px",
            lineHeight: "1.2",
          }}
        >
          Maryland Living, Simplified.
        </h1>
        <p style={{ color: "#BFBFBF", fontSize: "1.15rem", marginBottom: "36px" }}>
          Discover, apply, and tour your next home with ease — powered by G & G’s
          verified network and next-gen AI.
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

      {/* Subtle silver shimmer overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(120deg, rgba(192,192,192,0.05) 0%, rgba(255,255,255,0.08) 50%, rgba(192,192,192,0.05) 100%)",
          backgroundSize: "400% 400%",
          animation: "shimmer 10s infinite linear",
          zIndex: 0,
        }}
      />

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}
