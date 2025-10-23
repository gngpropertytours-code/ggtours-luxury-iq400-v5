import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Plans from '../pages/plans'; // we’re importing the section here

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Plans />
    </>
  );
}
