// components/WhyChooseKurabill.tsx
"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

const WhyChooseKurabill = () => {
  return (
    <section className="bg-[#F4F6F5] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Kurabill?
        </motion.h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div>
            {/* Images */}
            <div className=" justify-center mb-8 hidden md:flex">
              <Image src="/assets/about/man.svg" alt="Pharmacist 1" width={124} height={178} className="rounded-lg shadow-md mr-[25rem]" />
            </div>
            {/* Content */}
            <div className="space-y-4">
              <motion.div
                className="bg-white p-4 rounded-lg flex items-center space-x-4 hover:bg-gray-200 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-gray-200 p-2 rounded-full">
                  <Image src="/assets/about/icon.svg" alt="Icon 1" width={100} height={100} className="rounded-full" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Do Business With Less Stress</h3>
                  <p className="text-gray-600">
                    Streamline your operations, simplify processes, and focus on what matters most—growing your business with ease.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="bg-white p-4 rounded-lg flex items-center space-x-4 hover:bg-gray-200 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="bg-gray-200 p-2 rounded-full">
                  <Image src="/assets/about/icon.svg" alt="Icon 2" width={100} height={100} className="rounded-full" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Digital Pharmacy</h3>
                  <p className="text-gray-600">
                    Redefining healthcare with seamless, secure, and accessible digital solutions for modern pharmacies.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="bg-white p-4 rounded-lg flex items-center space-x-4 hover:bg-gray-200 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="bg-gray-200 p-2 rounded-full">
                  <Image src="/assets/about/icon.svg" alt="Icon 3" width={100} height={100} className="rounded-full" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">X10 Your Revenue</h3>
                  <p className="text-gray-600">
                    Boost your pharmacy’s growth and multiply your revenue with smarter digital solutions.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Images */}
            <div className="justify-center mb-8 hidden md:flex first-letter:">
  <Image src="/assets/about/lady.svg" alt="Pharmacist 2" width={161} height={144} className="rounded-lg shadow-md ml-[15rem]" />
</div>
            <div className="flex justify-center">
              <Image src="/assets/about/doctor.svg" alt="Pharmacist 3" width={416} height={450} className="rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseKurabill;