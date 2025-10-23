import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Plans from "../components/Plans";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        fontFamily: "Inter, sans-serif",
        overflowX: "hidden",
      }}
    >
      <Hero />
      <HowItWorks />
      <Plans />
      <footer
        style={{
          marginTop: "80px",
          textAlign: "center",
          padding: "50px 20px",
          borderTop: "1px solid rgba(212,175,55,0.2)",
          color: "#d4d4d4",
          fontSize: "0.9rem",
        }}
      >
        © {new Date().getFullYear()} G & G Property Tours — Maryland Living,
        Simplified.
      </footer>
    </div>
  );
}
