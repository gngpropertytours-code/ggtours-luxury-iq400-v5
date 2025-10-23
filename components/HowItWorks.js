import { useEffect, useRef } from "react";

export default function HowItWorks() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("fade-in");
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      title: "1 · Browse Verified Listings",
      desc: "Tenants explore our publicly verified properties curated for the Maryland market — each listing reviewed for accuracy and presentation.",
    },
    {
      title: "2 · Apply with Confidence",
      desc: "HAVEN AI reviews uploaded paystubs, credit info, and references to ensure landlords receive trusted, qualified applicants instantly.",
    },
    {
      title: "3 · Schedule Your Tour",
      desc: "SYNCRO AI coordinates times between tenant and landlord, sending confirmations and reminders seamlessly.",
    },
  ];

  return (
    <section id="how-it-works" style={{ padding: "120px 20px", textAlign: "center" }}>
      <h2 className="text-silver" style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
        How It Works
      </h2>
      <p
        style={{
          color: "#BFBFBF",
          maxWidth: "720px",
          margin: "0 auto 60px",
          fontSize: "1.1rem",
          lineHeight: "1.6",
        }}
      >
        Simplicity · Automation · Trust — the foundation of G & G Property Tours.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "24px",
        }}
      >
        {steps.map((step, i) => (
          <div
            key={i}
            ref={el => (cardsRef.current[i] = el)}
            className="card"
            style={{
              width: "320px",
              background: "rgba(18,18,18,0.8)",
              backdropFilter: "blur(6px)",
              cursor: "default",
            }}
          >
            <h3
              style={{
                color: "#C0C0C0",
                fontSize: "1.3rem",
                marginBottom: "10px",
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
