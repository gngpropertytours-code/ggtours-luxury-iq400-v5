export default function Logo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.3rem",
        fontFamily: "'Montserrat', sans-serif",
        color: "#f5f5f5", // pearl white chrome tone
        fontWeight: "700",
        fontSize: "1.8rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}
    >
      <span style={{ opacity: 0.8 }}>G&nbsp;&amp;&nbsp;G</span>
      <span style={{ fontWeight: "400", letterSpacing: "0.15em" }}>
        TOURS
      </span>
    </div>
  );
}
