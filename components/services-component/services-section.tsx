 'use client'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

export function ServicesSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const services = [
    {
      title: "Medication Management",
      description:
        "Easily manage your prescriptions and discover trusted pharmacies near you, ensuring a convenient healthcare experience every time.",
    },
    {
      title: "Effortless Payments",
      description:
        "Make secure payments for medications from anywhere in the world, with fast, easy, and reliable transactions using stablecoins.",
    },
    {
      title: "Global Healthcare",
      description:
        "Send essential medications to your loved ones, no matter where they are, with just a few clicks and secure payment options.",
    },
  ];

   // Move to the next service when arrow is clicked
   const handleNextService = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % services.length); // Cycles to next service
  };

  return (
    <section className="w-full py-16 bg-[#F5F9F7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="flex justify-center mb-10">
          <span className="inline-block px-6 py-2 rounded-full border border-[#40C67B] bg-[#FFFFFF] text-[#161817]">
            Our Services
          </span>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden">
          <Image
            src="/assets/images/pharmacist.svg"
            alt="Pharmacist smiling"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mt-10 mb-8 text-center md:text-left">
          Send Care to Family & Friends
        </h2>

        {/* Services List */}
        <motion.div
          className="grid grid-cols-1 divide-y md:divide-y-0 md:grid-cols-1 lg:grid-cols-1 border border-gray-200 rounded-xl overflow-hidden transition-all"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }} // Smooth hover effect
              whileTap={{ scale: 0.98 }} // Click feedback
              className={`flex justify-between items-center p-6 cursor-pointer transition-all ${
                selectedIndex === index ? "bg-[#E6F0E9]" : "bg-white"
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              {/* Service Text */}
              <div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>

              {/* Arrow Icon (Moves with Selection) */}
              <motion.div
                key={index} 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                whileHover={{ x: 5 }} 
                onClick={(e) => {
                  e.stopPropagation(); 
                  handleNextService();
                }}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    selectedIndex === index ? "bg-[#44724A]" : "bg-[#F5F5F5]"
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke={selectedIndex === index ? "#FFFFFF" : "#A0A0A0"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
