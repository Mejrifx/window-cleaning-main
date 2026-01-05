import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServiceCards from '@/components/ServiceCards';
import WhyChooseUs from '@/components/WhyChooseUs';
import Reviews from '@/components/Reviews';
import Gallery from '@/components/Gallery';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import HowItWorks from '@/components/HowItWorks';
import AboutUs from '@/components/AboutUs';
import CallToAction from '@/components/CallToAction';
import ContactForm from '@/components/ContactForm';
import VideoSection from '@/components/VideoSection';
import Footer from '@/components/Footer';
import ContactBar from '@/components/ContactBar';

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <section id="services">
        <ServiceCards />
      </section>
      <WhyChooseUs />
      <Reviews />
      <Gallery />
      <BeforeAfterSlider />
      <HowItWorks />
      <AboutUs />
      <CallToAction />
      <ContactForm />
      <VideoSection />
      <Footer />
      <ContactBar />
    </main>
  );
};

export default Index;
