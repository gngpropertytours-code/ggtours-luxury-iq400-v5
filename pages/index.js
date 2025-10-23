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
      }}
    >
      <Hero />
      <HowItWorks />
      <Plans />
    </div>
  );
}
