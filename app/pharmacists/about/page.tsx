import AboutHero from '@/components/About-Hero/about-hero';
import WhyChooseKurabill from '@/components/Why-chooseKurabill/why-choose-kurabill';
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