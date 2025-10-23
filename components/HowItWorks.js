export default function HowItWorks() {
  const steps = [
    {
      title: "1. Explore Verified Listings",
      description:
        "Tenants can browse high-quality listings with cinematic tours, verified details, and transparent pricing — no signup required.",
    },
    {
      title: "2. Apply & Get Matched",
      description:
        "Once ready, tenants submit a simple application. HAVEN AI securely evaluates fit and automatically notifies property owners.",
    },
    {
      title: "3. Schedule Effortlessly",
      description:
        "SYNCRO AI handles every tour schedule — virtual or in-person — and confirms with both tenant and landlord in real-time.",
    },
    {
      title: "4. Lease with Confidence",
      description:
        "Once the lease is signed, both parties stay connected through verified records, reminders, and secure communication.",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
        padding: "4rem 2rem",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "#EAD27F",
          fontSize: "2.5rem",
          marginBottom: "2rem",
        }}
      >
        How It Works
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {steps.map((s) => (
          <div
            key={s.title}
            style={{
              flex: "1 1 300px",
              background: "linear-gradient(145deg,#111,#000)",
              border: "1px solid #333",
              borderRadius: "10px",
              padding: "2rem",
              boxShadow: "0 0 20px rgba(212,175,55,0.08)",
              transition: "transform 0.3s ease",
            }}
          >
            <h3 style={{ color: "#D4AF37" }}>{s.title}</h3>
            <p style={{ color: "#ccc", lineHeight: "1.6" }}>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
