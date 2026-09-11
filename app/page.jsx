import Hero from '@/components/home/Hero';
import TechStrip from '@/components/home/TechStrip';
import ServicesSection from '@/components/home/ServicesSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import ProcessSection from '@/components/home/ProcessSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TechGrid from '@/components/home/TechGrid';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TechStrip />
      <ServicesSection />
      <FeaturedProjects />
      <ProcessSection />
      <WhyChooseUs />
      <TechGrid />
      <Testimonials />
      <CTASection />
    </main>
  );
}