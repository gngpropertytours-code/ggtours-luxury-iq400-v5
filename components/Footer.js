export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(192,192,192,0.2)",
        padding: "50px 20px",
        textAlign: "center",
        color: "#C0C0C0",
        fontSize: "0.9rem",
        background: "rgba(0,0,0,0.9)",
        marginTop: "80px",
      }}
    >
      <h4
        className="text-silver"
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "1.2rem",
          marginBottom: "10px",
        }}
      >
        G & G Property Tours
      </h4>
      <p style={{ marginBottom: "12px" }}>
        A luxury tenant acquisition & marketing service powered by AI and automation.
      </p>

      <div style={{ marginBottom: "14px" }}>
        <a href="#hero" style={footerLink}>
          Home
        </a>
        <a href="#plans" style={footerLink}>
          Plans
        </a>
        <a href="/contact" style={footerLink}>
          Contact
        </a>
      </div>

      <p style={{ fontSize: "0.8rem", color: "#888" }}>
        © {new Date().getFullYear()} G & G Property Tours · All rights reserved.
      </p>
    </footer>
  );
}

const footerLink = {
  color: "#C0C0C0",
  textDecoration: "none",
  margin: "0 10px",
  transition: "color 0.3s ease",
};
