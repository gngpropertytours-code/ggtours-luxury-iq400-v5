export default function HowItWorks() {
  const steps = [
    "Browse verified listings",
    "Apply with secure documents",
    "Schedule tours via SYNCRO AI",
    "Lease your dream home"
  ];

  return (
    <section
      id="howitworks"
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          background: "linear-gradient(90deg, #C8A951, #D4AF37, #EAD27F)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "40px",
        }}
      >
        How It Works
      </h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {steps.map((step, i) => (
          <li key={i} style={{ marginBottom: "10px", color: "#d4d4d4" }}>
            {step}
          </li>
        ))}
      </ul>
    </section>
  );
}
