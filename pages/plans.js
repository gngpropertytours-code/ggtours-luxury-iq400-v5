<main id="plans" style={ ... }>
export default function Plans() {
  const plans = [
    {
      name: "Premium",
      price: "$2,000 / month",
      features: [
        "2 listings",
        "Photo & cinematic video tours",
        "Instagram feature placement"
      ]
    },
    {
      name: "Elite",
      price: "$4,000 / month",
      features: [
        "4 listings",
        "Cinematic walkthroughs & analytics dashboard",
        "Instagram feature placement"
      ]
    },
    {
      name: "Enterprise",
      price: "$8,000 / month",
      features: [
        "8 listings",
        "AI automation, analytics & team access",
        "Dedicated support"
      ]
    }
  ];

  return (
    <main style={{
      backgroundColor: "#000",
      color: "#fff",
      fontFamily: "Inter, sans-serif",
      minHeight: "100vh",
      padding: "3rem"
    }}>
      <h1 style={{
        textAlign: "center",
        color: "#D4AF37",
        marginBottom: "2rem"
      }}>Choose Your Plan</h1>

      <div style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "2rem"
      }}>
        {plans.map(plan => (
          <div key={plan.name} style={{
            border: "1px solid #333",
            borderRadius: "10px",
            padding: "2rem",
            width: "300px",
            background: "linear-gradient(145deg, #111, #000)",
            transition: "transform 0.3s ease"
          }}>
            <h2 style={{
              color: "#EAD27F",
              textAlign: "center"
            }}>{plan.name}</h2>
            <p style={{
              textAlign: "center",
              color: "#D4AF37"
            }}>{plan.price}</p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {plan.features.map(f => (
                <li key={f} style={{
                  padding: "0.5rem 0",
                  borderBottom: "1px solid #222"
                }}>{f}</li>
              ))}
            </ul>
            <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
              <a href="/subscriber-signup" style={{
                textDecoration: "none",
                color: "#000",
                background: "linear-gradient(90deg, #C8A951, #D4AF37, #EAD27F)",
                padding: "0.7rem 1.5rem",
                borderRadius: "8px",
                fontWeight: "bold",
                display: "inline-block",
                transition: "opacity 0.3s ease"
              }}>Get Started</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
