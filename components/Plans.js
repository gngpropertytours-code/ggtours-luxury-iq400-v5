export default function Plans() {
  const plans = [
    { name: "Premium", price: "$2,000/mo", perks: "2 listings, IG feature" },
    { name: "Elite", price: "$4,000/mo", perks: "4 listings, analytics, cinematic tour" },
    { name: "Enterprise", price: "$8,000/mo", perks: "8 listings, AI automation, team access" },
  ];

  return (
    <section
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
          background: "linear-gradient(90deg, #C8A951, #D4AF37, #EAD27F)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "50px",
        }}
      >
        Subscription Plans
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {plans.map((plan, index) => (
          <div
            key={index}
            style={{
              border: "1px solid rgba(212,175,55,0.3)",
              borderRadius: "6px",
              padding: "30px",
              minWidth: "250px",
              backgroundColor: "#0d0d0d",
            }}
          >
            <h3 style={{ color: "#EAD27F" }}>{plan.name}</h3>
            <p>{plan.price}</p>
            <p style={{ color: "#d4d4d4" }}>{plan.perks}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
