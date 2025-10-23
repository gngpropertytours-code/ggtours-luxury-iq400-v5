import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Plans from '../pages/plans';
import FadeInSection from '../components/FadeInSection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <FadeInSection>
        <Hero />
      </FadeInSection>

      {/* How It Works Section */}
      <FadeInSection>
        <HowItWorks />
      </FadeInSection>

      {/* Plans Section */}
      <FadeInSection>
        <Plans />
      </FadeInSection>
    </>
  );
}
