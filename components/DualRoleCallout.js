export default function DualRoleCallout() {
  return (
    <section
      style={{
        background: "#0A0A0A",
        padding: "100px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#E0E0E0",
          fontSize: "2.2rem",
          marginBottom: "40px",
        }}
      >
        Choose Your Path with G & G Property Tours
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        {/* Tenant Box */}
        <div
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
            border: "1px solid rgba(255,255,255,0.1)",
            padding: "40px",
            width: "320px",
            borderRadius: "10px",
            transition: "0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow =
              "0 0 15px rgba(192,192,192,0.3)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
        >
          <h3 style={{ color: "#C0C0C0", marginBottom: "15px" }}>
            I’m a Tenant
          </h3>
          <p style={{ color: "#BFBFBF", marginBottom: "25px" }}>
            Discover verified Maryland homes, apply securely, and book your next tour with ease.
          </p>
          <a
            href="#listings"
            style={{
              color: "white",
              background: "linear-gradient(90deg, #C0C0C0, #A9A9A9)",
              padding: "10px 24px",
              borderRadius: "6px",
              textDecoration: "none",
            }}
          >
            Browse Listings
          </a>
        </div>

        {/* Landlord Box */}
        <div
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
            border: "1px solid rgba(255,255,255,0.1)",
            padding: "40px",
            width: "320px",
            borderRadius: "10px",
            transition: "0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow =
              "0 0 15px rgba(192,192,192,0.3)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
        >
          <h3 style={{ color: "#C0C0C0", marginBottom: "15px" }}>
            I’m a Landlord / Agent
          </h3>
          <p style={{ color: "#BFBFBF", marginBottom: "25px" }}>
            Get cinematic marketing, qualified tenant matches & AI-driven workflow automation.
          </p>
          <a
            href="#plans"
            style={{
              color: "white",
              background: "linear-gradient(90deg, #C0C0C0, #A9A9A9)",
              padding: "10px 24px",
              borderRadius: "6px",
              textDecoration: "none",
            }}
          >
            Explore Plans
          </a>
        </div>
      </div>
    </section>
  );
}
