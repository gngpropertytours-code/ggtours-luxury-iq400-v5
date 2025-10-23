import MetricsSection from "../components/MetricsSection";
import DualRoleCallout from "../components/DualRoleCallout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Plans from "../components/Plans";
<Plans />
import FadeInSection from '../components/FadeInSection';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MetricsSection />
      <DualRoleCallout />
      <HowItWorks />
      <Plans />
      <Footer />
    </>
  );
}
