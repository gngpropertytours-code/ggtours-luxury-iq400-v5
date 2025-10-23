export default function Logo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.3rem",
        fontFamily: "'Montserrat', sans-serif",
        color: "#f5f5f5",
        fontWeight: "700",
        fontSize: "1.8rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        position: "relative",
        cursor: "pointer",
        transition: "color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          "linear-gradient(90deg, #e0e0e0, #ffffff, #bfbfbf)";
        e.currentTarget.style.webkitBackgroundClip = "text";
        e.currentTarget.style.webkitTextFillColor = "transparent";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "none";
        e.currentTarget.style.webkitTextFillColor = "#f5f5f5";
      }}
    >
      <span style={{ opacity: 0.8 }}>G&nbsp;&amp;&nbsp;G</span>
      <span style={{ fontWeight: "400", letterSpacing: "0.15em" }}>
        TOURS
      </span>
    </div>
  );
}
