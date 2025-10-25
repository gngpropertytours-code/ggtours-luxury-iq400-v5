import Header from "../components/Header";
import Hero from "../components/Hero";
import Plans from "../components/Plans";
import Footer from "../components/Footer";
import FadeInSection from "../components/FadeInSection";

export default function Home() {
  return (
    <>
      {/* Fixed Header */}
      <Header />

      {/* Main Content Area */}
      <main
        style={{
          paddingTop: "calc(90px + env(safe-area-inset-top))",
          paddingBottom: "calc(60px + env(safe-area-inset-bottom))",
          backgroundColor: "#000",
          color: "#E0E0E0",
          fontFamily: "'Inter', sans-serif",
          overflowX: "hidden",
        }}
      >
        {/* Cinematic Hero Section */}
        <section id="hero" style={heroSection}>
          <FadeInSection>
            <Hero />
          </FadeInSection>
        </section>

        {/* Luxury Subscription Plans */}
        <section id="plans" style={plansSection}>
          <FadeInSection>
            <Plans />
          </FadeInSection>
        </section>

        {/* Optional: Add a "How It Works" section later */}
        {/* <section id="how-it-works"><FadeInSection><HowItWorks /></FadeInSection></section> */}
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

/* ---------------- Styles ---------------- */

const heroSection = {
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
  background: "linear-gradient(180deg, #000 0%, #111 100%)",
  animation: "fadeInHero 1.2s ease forwards",
};

const plansSection = {
  backgroundColor: "#000",
  textAlign: "center",
  padding: "100px 20px",
  borderTop: "1px solid rgba(192,192,192,0.15)",
  borderBottom: "1px solid rgba(192,192,192,0.15)",
};
