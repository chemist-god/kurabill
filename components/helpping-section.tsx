import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-900 to-gray-900 h-screen flex items-center justify-center text-center px-4">
      {/* Background Image */}
      <div className="absolute inset-0">
      <Image 
  src="/assets/pharmacies/dashboard.png" 
  alt="KuraBill Dashboard" 
  width={1280}  
  height={523}  
  priority  
/>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
          Helping You Make More Revenue
        </h1>
        <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition">
          Join Waitlist
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
