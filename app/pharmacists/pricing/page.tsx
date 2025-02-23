import PricingSection from '@/components/pricing-section';
import PharmacistNavbar from '@/components/pharmacist-navbar';

export default function PricingPage() {
    return (
            <><PharmacistNavbar /><main className="min-h-screen pt-2">
            <PricingSection />
        </main></>
    );
}