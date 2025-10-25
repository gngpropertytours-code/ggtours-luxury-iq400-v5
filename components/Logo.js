export default function Logo() {
  const logoStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 1,              // ✅ allows logo to shrink inside header
    maxWidth: "100%",           // ✅ never exceeds parent container
    overflow: "hidden",         // ✅ clips any subpixel overshoot
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    gap: "0.3rem",
    fontFamily: "'Montserrat', sans-serif",
    color: "#f5f5f5",
    fontWeight: 700,
    fontSize: "clamp(1.2rem, 1.8vw + 0.5rem, 1.8rem)", // ✅ scales elegantly
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    position: "relative",
    cursor: "pointer",
    transition: "color 0.3s ease",
    lineHeight: 1,
    padding: "0 0.25rem",       // ✅ prevents text clipping at edges
  };

  const gradientHover = (e, active) => {
    if (active) {
      e.currentTarget.style.background =
        "linear-gradient(90deg, #e0e0e0, #ffffff, #bfbfbf)";
      e.currentTarget.style.webkitBackgroundClip = "text";
      e.currentTarget.style.webkitTextFillColor = "transparent";
    } else {
      e.currentTarget.style.background = "none";
      e.currentTarget.style.webkitTextFillColor = "#f5f5f5";
    }
  };

  return (
    <div
      style={logoStyle}
      onMouseEnter={(e) => gradientHover(e, true)}
      onMouseLeave={(e) => gradientHover(e, false)}
    >
      <span style={{ opacity: 0.85, flexShrink: 0 }}>G&nbsp;&amp;&nbsp;G</span>
      <span
        style={{
          fontWeight: 400,
          letterSpacing: "0.15em",
          flexShrink: 0,
        }}
      >
        TOURS
      </span>
    </div>
  );
}
