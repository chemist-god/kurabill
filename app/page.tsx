import HeroSection  from "../components/hero-section";
import { LogoBanner } from "@/components/logo-banner";
import { FeaturesSection } from "@/components/features-section";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <LogoBanner />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
    </main>
  )
}