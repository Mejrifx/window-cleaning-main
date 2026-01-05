import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ReviewsSection from '@/components/ReviewsSection';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import HowItWorks from '@/components/HowItWorks';
import AboutSection from '@/components/AboutSection';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ContactBar from '@/components/ContactBar';

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <ReviewsSection />
      <BeforeAfterSlider />
      <HowItWorks />
      <AboutSection />
      <CTASection />
      <ContactForm />
      <Footer />
      <ContactBar />
    </main>
  );
};

export default Index;
