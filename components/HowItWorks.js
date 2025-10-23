export default function HowItWorks() {
  const steps = [
    { title: "1. Explore", desc: "Browse verified listings across Maryland." },
    { title: "2. Apply", desc: "Submit applications with credit info and paystubs securely." },
    { title: "3. Schedule", desc: "Book tours instantly through SYNCRO AI." },
    { title: "4. Lease", desc: "Landlords approve verified tenants seamlessly through the platform." },
  ];

  return (
    <section
      id="howitworks"
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "100px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          background:
            "linear-gradient(90deg, #C8A951, #D4AF37, #EAD27F)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "50px",
        }}
      >
        How It Works
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              border: "1px solid rgba(212,175,55,0.3)",
              borderRadius: "6px",
              padding: "30px",
              backgroundColor: "#0d0d0d",
            }}
          >
            <h3 style={{ color: "#EAD27F", marginBottom: "10px" }}>
              {step.title}
            </h3>
            <p style={{ color: "#d4d4d4" }}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
