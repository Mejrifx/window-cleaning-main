import HeroSection from '@/components/HeroSection';
import ServiceCards from '@/components/ServiceCards';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import VideoSection from '@/components/VideoSection';
import ContactBar from '@/components/ContactBar';

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <ServiceCards />
      <BeforeAfterSlider />
      <VideoSection />
      <ContactBar />
    </main>
  );
};

export default Index;
