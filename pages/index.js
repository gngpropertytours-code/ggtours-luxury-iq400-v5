import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Plans from "../components/Plans";
<Plans />
import Plans from "../components/Plans";
import FadeInSection from '../components/FadeInSection';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';

export default function Home() {
  return (
    <>
      <FadeInSection><Hero /></FadeInSection>
      <FadeInSection><HowItWorks /></FadeInSection>
      <FadeInSection><Plans /></FadeInSection>
    </>
  );
}
