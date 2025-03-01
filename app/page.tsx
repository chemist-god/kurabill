import HeroMain from "@/components/Hero/HeroMain";
import { LogoBanner } from "@/components/Logo-Banner/logo-banner";
import { FeaturesSection } from "@/components/features-section";
import { ServicesSection } from "@/components/services-component/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";
import  Navbar  from '@/components/navbar/navbar'


export default function Home() {
  return (
    <>
    <Navbar />
    <main>
      <HeroMain/>
      <LogoBanner />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
    </main>
    </>
  )
}