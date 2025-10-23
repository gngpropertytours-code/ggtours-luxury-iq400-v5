export default function Plans() {
  const plans = [
    {
      name: "Premium",
      price: "$2,000 / month",
      features: [
        "2 listings included",
        "Photo / cinematic walkthrough",
        "Instagram feature",
      ],
    },
    {
      name: "Elite",
      price: "$4,000 / month",
      features: [
        "4 listings included",
        "Cinematic walkthrough tours",
        "Analytics dashboard",
        "Instagram feature",
      ],
    },
    {
      name: "Enterprise",
      price: "$8,000 / month",
      features: [
        "8 listings included",
        "AI automation + team access",
        "Advanced analytics",
      ],
    },
  ];

  return (
    <main
      id="plans"
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
        Subscription Plans
      </h2>
      <p
        style={{
          color: "#d4d4d4",
          marginBottom: "40px",
          fontSize: "1.05rem",
        }}
      >
        60% cinematic content • 20% targeted ads • 20% AI automation
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {plans.map((plan, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#0d0d0d",
              border: "1px solid rgba(212,175,55,0.3)",
              borderRadius: "6px",
              padding: "40px 25px",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3 style={{ color: "#EAD27F" }}>{plan.name}</h3>
            <p style={{ color: "white" }}>{plan.price}</p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                color: "#d4d4d4",
                fontSize: "0.95rem",
                lineHeight: "1.7",
              }}
            >
              {plan.features.map((f, idx) => (
                <li key={idx}>• {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
