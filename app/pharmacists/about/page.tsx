import AboutHero from '@/components/about-hero';
import WhyChooseKurabill from '@/components/why-choose-kurabill';
import PharmacistNavbar from '@/components/pharmacist-navbar';

export default function AboutPage() {
  return (
    <><PharmacistNavbar />
    <main className="min-h-screen pt-1 ">
      <AboutHero />
      <WhyChooseKurabill />
    </main>
      </>
  );
}