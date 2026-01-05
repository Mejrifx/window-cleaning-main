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
import Footer from '@/components/Footer';

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
      <Footer />
    </main>
  );
};

export default Index;
