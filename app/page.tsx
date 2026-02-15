import { HeroSection } from '@/components/home/hero-section';
import { BenefitCards } from '@/components/home/benefit-cards';
import { ProductWalkthrough } from '@/components/home/product-walkthrough';
import { TestimonialsCarousel } from '@/components/home/testimonials-carousel';
import { MissionVision } from '@/components/home/mission-vision';
import { TrustBadges } from '@/components/home/trust-badges';

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <TrustBadges />
      <BenefitCards />
      <ProductWalkthrough />
      <TestimonialsCarousel />
      <MissionVision />
    </div>
  );
}