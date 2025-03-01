// hero-section.tsx
'use client'
import HeroMobile from './HeroMobile';
import HeroSection from '../Hero/hero-section';

const HeroMain = () => {


  return (
    <>
      <div className="hidden md:block">
        <HeroSection />
      </div>
      <div className="md:hidden">
        <HeroMobile />
      </div>
    </>
  );
};

export default HeroMain