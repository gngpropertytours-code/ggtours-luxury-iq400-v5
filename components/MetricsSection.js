export default function MetricsSection() {
  const metrics = [
    { number: "1.2 K+", label: "Qualified Tenants Matched" },
    { number: "350+", label: "Landlords & Agents Served" },
    { number: "95%", label: "Tenant Match Success Rate" },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #0D0D0D 0%, #111 100%)",
        color: "white",
        padding: "100px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.3rem",
          marginBottom: "50px",
          color: "#C0C0C0",
        }}
      >
        Trusted Results in Maryland Property Marketing
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        {metrics.map((m, i) => (
          <div key={i} style={{ minWidth: "180px" }}>
            <h3
              style={{
                fontSize: "2rem",
                color: "#E0E0E0",
                marginBottom: "10px",
              }}
            >
              {m.number}
            </h3>
            <p style={{ color: "#BFBFBF" }}>{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
