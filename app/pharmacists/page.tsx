import PharmacistNavbar from '@/components/pharmacist-navbar'
import PharmacistHero from '@/components/pharmacist-hero'
import PharmacistDashboard from '@/components/pharmacist-dashboard'
import { PharmaciBanner } from '@/components/pharmaci-banner'
import { TestimonialsSection } from '@/components/testimonials-section'
import { FAQSection } from '@/components/faq-section'
import RevenueSection from '@/components/revenue-section'
import HelpingSection from '@/components/helpping-section'
import PricingSection from '@/components/pricing-section'


export default function PharmacistsPage() {
  return (
    <div className="min-h-screen bg-[#1B4332]">
      <PharmacistNavbar />
      <main>
        <PharmacistHero />
        <PharmacistDashboard />
        <PharmaciBanner />
        <RevenueSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <HelpingSection />
      </main>
    </div>
  )
}