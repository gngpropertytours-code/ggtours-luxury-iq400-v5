export default function Plans() {
  const plans = [
    {
      name: "Premium",
      price: "$2,000 / month",
      features: [
        "2 verified listings",
        "Photo & cinematic walkthrough video tours",
        "Instagram feature placement",
        "Full tenant match access via HAVEN AI",
      ],
      accent: "rgba(192,192,192,0.9)",
    },
    {
      name: "Elite",
      price: "$4,000 / month",
      features: [
        "4 verified listings",
        "Cinematic property tours + IG Feature",
        "Analytics dashboard + AI tenant insights",
        "Priority support & AI workflow upgrades",
      ],
      accent: "rgba(224,224,224,0.95)",
    },
    {
      name: "Enterprise",
      price: "$8,000 / month",
      features: [
        "8 verified listings",
        "AI automation suite + team access",
        "Comprehensive analytics & performance reporting",
        "Exclusive concierge onboarding & support",
      ],
      accent: "rgba(255,255,255,0.8)",
    },
  ];

  return (
    <section id="plans">
      <h2
        className="text-silver fade-in"
        style={{ fontSize: "2.4rem", marginBottom: "20px", textAlign: "center" }}
      >
        Subscription Plans
      </h2>

      <p
        className="fade-in"
        style={{
          color: "#BFBFBF",
          maxWidth: "750px",
          margin: "0 auto 60px",
          fontSize: "1.1rem",
          lineHeight: "1.6",
          textAlign: "center",
        }}
      >
        Choose your access level — each plan funds 60% cinematic visuals, 20% targeted ads, and 20% AI automation and product innovation.  
        Invest once, and let G & G handle your tenant pipeline for you.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {plans.map((plan, i) => (
          <div
            key={i}
            className="card fade-in"
            style={{
              width: "320px",
              padding: "40px 30px",
              border: `1px solid ${plan.accent}`,
              background: "rgba(18,18,18,0.8)",
              boxShadow:
                "0 0 20px rgba(192,192,192,0.1), inset 0 0 10px rgba(192,192,192,0.05)",
              backdropFilter: "blur(6px)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <h3
              className="text-silver"
              style={{
                fontSize: "1.6rem",
                marginBottom: "12px",
                letterSpacing: "0.5px",
              }}
            >
              {plan.name}
            </h3>

            <p
              style={{
                fontSize: "1.2rem",
                color: "#C0C0C0",
                marginBottom: "20px",
              }}
            >
              {plan.price}
            </p>

            <ul style={{ listStyle: "none", padding: 0, color: "#BFBFBF" }}>
              {plan.features.map((f, j) => (
                <li
                  key={j}
                  style={{
                    marginBottom: "10px",
                    borderLeft: `2px solid ${plan.accent}`,
                    paddingLeft: "10px",
                    lineHeight: "1.5",
                  }}
                >
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="/subscriber-signup"
              className="btn-silver"
              style={{ marginTop: "24px", display: "inline-block" }}
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
