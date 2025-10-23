export default function HowItWorks() {
  const steps = [
    {
      title: "1. Browse Verified Listings",
      desc: "Explore hand-picked, fully verified rental listings curated for the Baltimore and Maryland area — all presented with cinematic detail.",
    },
    {
      title: "2. Apply Securely Online",
      desc: "Upload your paystubs, references, and background info within minutes. Our HAVEN AI intelligently scores applications for landlords.",
    },
    {
      title: "3. Schedule a Tour",
      desc: "SYNCRO AI coordinates your virtual or in-person tour, confirming times with both tenant and landlord automatically.",
    },
  ];

  return (
    <section id="how-it-works">
      <h2
        className="text-silver fade-in"
        style={{
          fontSize: "2.4rem",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        How It Works
      </h2>

      <p
        className="fade-in"
        style={{
          color: "#BFBFBF",
          maxWidth: "700px",
          margin: "0 auto 50px",
          fontSize: "1.1rem",
          lineHeight: "1.6",
          textAlign: "center",
        }}
      >
        Whether you’re searching for your next home or managing multiple
        properties, G & G Property Tours streamlines your journey with
        simplicity, precision, and automation.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            className="card fade-in"
            style={{
              width: "320px",
              background: "rgba(20, 20, 20, 0.8)",
              backdropFilter: "blur(4px)",
              cursor: "default",
            }}
          >
            <h3
              style={{
                color: "#C0C0C0",
                marginBottom: "10px",
                fontSize: "1.4rem",
              }}
            >
              {step.title}
            </h3>
            <p style={{ color: "#BFBFBF", fontSize: "1rem", lineHeight: "1.5" }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
