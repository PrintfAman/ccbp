import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import Companies from '../components/Companies.jsx';
import Certification from '../components/Certification.jsx';
import Pricing from '../components/Pricing.jsx';
import FAQ from '../components/FAQ.jsx';
import VideoSection from '../components/VideoSection.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Certification />
      <Pricing />
      <FAQ />
      <VideoSection />
      <Footer />
    </>
  );
}
