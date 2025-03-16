// components/AboutHero.tsx
"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          We are Revolutionizing Digital Health care in Africa
        </motion.h2>

        {/* Section Description */}
        <motion.p
          className="text-sm md:text-base lg:text-xl text-gray-600 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We are at the forefront of transforming healthcare in Africa, leveraging innovative digital solutions to improve access, enhance efficiency, and connect patients with the care they need no matter where they are.
        </motion.p>

        {/* Image */}
        <motion.div
          className="relative mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Image
            src="/assets/images/smile.png"
            alt="Pharmacy Team"
            width={900}
            height={500}
            className="w-full rounded-lg shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;