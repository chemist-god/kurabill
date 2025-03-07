'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import JoinWaitlistModal from '../Join waitlist/JoinWaitlistModal';
import { useState } from 'react';

const medicationBubbles = [
  {
    id: 1,
    type: 'Tooth Ache',
    icon: '🦷',
    position: { top: '2%', left: '40%' }
  },
  {
    id: 2,
    type: 'Antibiotics',
    icon: '❤️',
    position: { top: '12%', left: '5%' }
  },
  {
    id: 3,
    type: 'Pain Management',
    icon: '💊',
    position: { top: '33%', right: '3%' }
  }
];

const countryProfiles = [
  {
    id: 1,
    country: 'USA',
    flag: 'usa.svg',    
    image: 'usa.svg',   
    position: { top: '16%', right: '18%' }
  },
  {
    id: 2,
    country: 'Ghana',
    flag: 'gh.svg',
    image: 'gh.svg',
    position: { top: '-8%', left: '16%' }
  },
  {
    id: 3,
    country: 'Canada',
    flag: 'canada.svg',
    image: 'canada.svg',
    position: { bottom: '39%', right: '28%' }
  },
  {
    id: 4,
    country: 'Nigeria',
    flag: 'nigeria.svg',
    image: 'nigeria.svg',
    position: { top: '27%', left: '22%' }
  }
];

const HeroMobile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-[#F5F9F7] overflow-hidden">
      {/* Hero Content */}
      <div className="max-w-md mx-auto px-3 pt-[3.5rem] text-center">
        <motion.h1
          className="text-[24px] md:text-[36px] font-bold text-center leading-snug"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Send care across borders
        </motion.h1>
        <motion.h2
          className="text-[22px] md:text-[28px] font-semibold text-center leading-snug mt-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Buy medications from anywhere.
        </motion.h2>
        <motion.p
          className="text-[14px] md:text-[18px] text-gray-600 text-center max-w-md mx-auto mt-3 mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Bridge the distance and show you care quickly and securely purchase medications for your loved ones abroad using stable coin payments.
        </motion.p>
        <motion.button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#336E2E] text-white px-4 py-2 rounded-full text-lg transition-colors w-full md:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Join Waitlist
        </motion.button>
      </div>

      {/* Modal */}
      <JoinWaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Map Section */}
      <div className="relative mt-[5rem] pb-[13rem]">
        <div className="max-w-7xl mx-auto px-6">

          {/* World Map */}
          <div className="relative w-full aspect-[2/1] sm:aspect-[1.5/1]">
  <svg
    viewBox="0 0 1000 500"
    className="w-full h-full sm:w-[400px] sm:h-[200px]"
    style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))' }}
  >
    <image
      href="/assets/images/earth.png"
      width="1000"
      height="550"
      x="0"
      y="0"
      
    />
  </svg>
</div>
          {/* Medication Bubbles */}
          {medicationBubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              className="absolute bg-white rounded-lg px-4 pt-1 pb-1 shadow-lg flex items-center gap-2 transition-shadow duration-300"
              style={bubble.position as React.CSSProperties}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: bubble.id * 0.1 }}
            >
              <div className="bg-gray-100 rounded-full p-0.5">
                <span>{bubble.icon}</span>
              </div>
              <span>{bubble.type}</span>
            </motion.div>
          ))}
          {/* Country Profiles */}
          {countryProfiles.map((profile) => (
            <motion.div
              key={profile.id}
              className="absolute"
              style={profile.position as React.CSSProperties}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: profile.id * 0.2 }}
            >
              <div className="relative">
                <Image
                  src={`/assets/images/${profile.image}`}
                  alt={profile.country}
                  width={48}
                  height={48}
                  className="rounded-full "
                />
                <Image
                  src={`/assets/flags/${profile.flag}`}
                  alt={`${profile.country} flag`}
                  width={25}
                  height={30}
                  className="absolute -top-2 -right-2"
                />
              </div>
            </motion.div>
          ))}
                {/* Coin Animations */}
          {/* First Coin */}
          <motion.div
            className="absolute z-10 top-[-10%] right-[8%]"
            animate={{
              y: [-10, 0, -10],
              rotate: [0, 360]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src="/assets/images/coin.png"
              alt="Stable coin"
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </motion.div>
          {/* Second Coin */}
          <motion.div
            className="absolute z-10 bottom-[30%] left-[4%]"
            animate={{
              y: [-20, 0, -20],
              rotate: [0, 360]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <Image
              src="/assets/images/coin.png"
              alt="Stable coin"
              width={68}
              height={68}
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
        {/* Mountain Gradient */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
            <Image
              src="/assets/images/group.png"
              alt="Mountain gradient"
              width={600}
              height={100}
              className="w-full object-cover object-bottom mountain-gradient"
              priority
              quality={100}
            />
          </div>
      </div>
    </section>
  );
};

export default HeroMobile;