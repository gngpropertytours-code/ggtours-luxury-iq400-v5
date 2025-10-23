export default function TenantSignup() {
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
      }}>Tenant Registration</h1>

      <p style={{
        textAlign: "center",
        color: "#aaa",
        marginBottom: "2rem"
      }}>
        Register to apply for listings, schedule tours, and receive matching recommendations.
      </p>

      <form style={{
        maxWidth: "500px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }}>
        <input type="text" placeholder="Full Name" style={inputStyle}/>
        <input type="email" placeholder="Email" style={inputStyle}/>
        <input type="text" placeholder="Preferred Location" style={inputStyle}/>
        <input type="text" placeholder="Bedrooms Needed" style={inputStyle}/>
        <label style={{ color: "#D4AF37", textAlign: "center" }}>
          <input type="checkbox" style={{ marginRight: "0.5rem" }}/>
          I acknowledge G & G Property Tours is a marketing & tenant acquisition service only.
        </label>
        <button type="submit" style={{
          background: "linear-gradient(90deg, #C8A951, #D4AF37, #EAD27F)",
          color: "#000",
          border: "none",
          padding: "0.8rem",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer"
        }}>Register</button>
      </form>
    </main>
  );
}

const inputStyle = {
  background: "#111",
  color: "#fff",
  border: "1px solid #333",
  borderRadius: "6px",
  padding: "0.8rem",
  fontSize: "1rem"
};
