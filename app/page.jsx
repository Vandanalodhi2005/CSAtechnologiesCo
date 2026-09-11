import Hero from '@/components/home/Hero';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import ProcessSection from '@/components/home/ProcessSection';
import TechGrid from '@/components/home/TechGrid';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero — Dark */}
      <Hero />

      {/* 2. Services — Light */}
      <ServicesSection />

      {/* 3. Why Choose CSA — Dark (with office photo) */}
      <WhyChooseUs />

      {/* 4. Featured Projects — Light */}
      <FeaturedProjects />

      {/* 5. How We Work (Process) — Light */}
      <ProcessSection />

      {/* 6. Technology Stack — Light */}
      <TechGrid />

      {/* 7. Client Reviews (Testimonials) — Dark */}
      <Testimonials />

      {/* 8. Let's Talk (Contact Form) — Light */}
      <CTASection />
    </main>
  );
}