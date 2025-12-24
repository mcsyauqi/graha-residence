import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhyChooseUs from "@/components/WhyChooseUs";
import FacilitiesPreview from "@/components/FacilitiesPreview";
import KPRSimulator from "@/components/KPRSimulator";
import PromoSection from "@/components/PromoSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <WhyChooseUs />
      <FacilitiesPreview />
      <KPRSimulator />
      <PromoSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
}
