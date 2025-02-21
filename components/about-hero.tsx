import React from 'react';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <section className="max-w-7xl mx-auto text-center">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          We are Revolutionizing Digital
          <br />
          Health care in Africa
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          We are at the forefront of transforming healthcare in Africa, leveraging innovative digital solutions to
          improve access, enhance efficiency, and connect patients with the care they need no matter where they are.
        </p>
      </div>
      
          {/* Image Section */}
      <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
        <Image
          src="/assets/images/smile.png"
          alt="Healthcare Professionals"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </div>
    </section>
  );
};

export default AboutHero;