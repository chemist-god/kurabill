'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import WorldMap from '../components/world-map';
import { MountainGradient } from './mountain-gradient';
import JoinWaitlistModal from './Join waitlist/JoinWaitlistModal';
import { useState } from 'react';


const medicationBubbles = [
  {
    id: 1,
    type: 'Tooth Ache',
    icon: '🦷',
    position: { top: '8%', left: '40%' }
  },
  {
    id: 2,
    type: 'Antibiotics',
    icon: '❤️',
    position: { top: '25%', left: '25%' }
  },
  {
    id: 3,
    type: 'Pain Management',
    icon: '💊',
    position: { top: '28%', right: '30%' }
  },
  {
    id: 4,
    type: 'Syrups',
    icon: '💉',
    position: { bottom: '30%', left: '45%' }
  }
]

const countryProfiles = [
  {
    id: 1,
    country: 'USA',
    flag: '/assets/flags/usa.png',    
    image: '/assets/images/usa.png',   
    position: { top: '5%', left: '20%' }
  },
  {
    id: 2,
    country: 'Ghana',
    flag: '/assets/flags/gh.png',
    image: '/assets/images/gh.png',
    position: { top: '55%', left: '30%' }
  },
  {
    id: 3,
    country: 'Canada',
    flag: '/assets/flags/canada.png',
    image: '/assets/images/canada.png',
    position: { top: '36%', left: '45%' }
  },
  {
    id: 4,
    country: 'Nigeria',
    flag: '/assets/flags/nigeria.png',
    image: '/assets/images/nigeria.png',
    position: { top: '-4.5%', right: '32%' }
  },
  {
    id: 5,
    country: 'France',
    flag: '/assets/flags/france.png',
    image: '/assets/images/france.png',
    position: { top: '45%', right: '20%' }
  }
]

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-[#F5F9F7] overflow-hidden">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 pt-20 text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Send care across borders
        </motion.h1>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Buy medications from anywhere.
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Bridge the distance and show you care quickly and securely purchase medications
          for your loved ones abroad using stable coin payments.
        </motion.p>
        <motion.button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-700 text-white px-8 py-3 rounded-full text-lg hover:bg-green-800 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Join Waitlist
        </motion.button>
      </div>

      {/* Modal */}
      <JoinWaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Map Section */}
      <div className="relative mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <WorldMap />

          {/* Medication Bubbles */}
          {medicationBubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              className="absolute bg-white rounded-lg px-4 py-2 shadow-lg flex items-center gap-2 cursor-default hover:shadow-xl transition-shadow duration-300"
              style={bubble.position as React.CSSProperties}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: bubble.id * 0.1 }}
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
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, delay: profile.id * 0.2 }}
            >
              <div className="relative">
                <Image
                  src={profile.image}
                  alt={profile.country}
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-white "
                />
                <Image
                  src={profile.flag}
                  alt={`${profile.country} flag`}
                  width={40}
                  height={40}
                  className="absolute -top-2 -right-2"
                />
              </div>
            </motion.div>
          ))}

          {/* Coin Animations */}
          {/* First Coin */}
          <motion.div
            className="absolute z-10 top-[7%] right-[12%]"  
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
              width={42}
              height={42}
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Second Coin */}
          <motion.div
            className="absolute z-10 bottom-[40%] left-[8%]"  
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
              width={78}  // Slightly larger
              height={78}
              className="w-full h-full object-contain"
            />
          </motion.div>

        </div>

        {/* Mountain Gradiet */}
          <MountainGradient />
        
      </div>
    </section>
  )
}

export default HeroSection;