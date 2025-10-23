export default function Testimonials() {
  const testimonials = [
    {
      quote: "G & G Property Tours helped me fill my units faster than ever — the visuals and automation are unmatched.",
      name: "Marcus T.",
      role: "Property Manager, Baltimore"
    },
    {
      quote: "As a new agent, I was blown away by how professional my listings looked. The support was first class.",
      name: "Destiny R.",
      role: "Real Estate Agent, Maryland"
    },
    {
      quote: "I found my dream apartment in under a week. The tours were smooth, and everything was verified — no stress.",
      name: "Elliot K.",
      role: "Tenant, Maryland"
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
        color: "#EAD27F",
        textAlign: "center",
        marginBottom: "2rem"
      }}>What People Are Saying</h1>

      <div style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "2rem"
      }}>
        {testimonials.map(t => (
          <div key={t.name} style={{
            border: "1px solid #333",
            borderRadius: "10px",
            padding: "2rem",
            width: "300px",
            background: "linear-gradient(145deg, #111, #000)",
            boxShadow: "0 0 20px rgba(212,175,55,0.1)",
            transition: "transform 0.3s ease"
          }}>
            <p style={{
              fontStyle: "italic",
              color: "#ccc",
              marginBottom: "1rem"
            }}>"{t.quote}"</p>
            <h3 style={{ color: "#D4AF37", margin: 0 }}>{t.name}</h3>
            <p style={{ color: "#aaa", fontSize: "0.9rem" }}>{t.role}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
