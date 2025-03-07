'use client'
import { motion } from 'framer-motion';
import WorldMap from '../Hero/world-map';
import { MountainGradient} from '../Hero/mountain-gradient';
import JoinWaitlistModal from '../Join waitlist/JoinWaitlistModal';
import { useState } from 'react';
import MedicationBubbles from '../Hero/MedicationBubbles';
import CountryProfiles from '../Hero/CountryProfiles';
import CoinAnimations from '../Hero/CoinAnimations';
import { MedicationBubble, CountryProfile } from '@/types';

const medicationBubbles: MedicationBubble[] = [
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
];

const countryProfiles: CountryProfile[] = [
  {
    id: 1,
    country: 'USA',
    flag: 'usa.svg',    
    image: 'usa.svg',   
    position: { top: '5%', left: '20%' }
  },
  {
    id: 2,
    country: 'Ghana',
    flag: 'gh.svg',
    image: 'gh.svg',
    position: { top: '55%', left: '30%' }
  },
  {
    id: 3,
    country: 'Canada',
    flag: 'canada.svg',
    image: 'canada.svg',
    position: { top: '36%', left: '45%' }
  },
  {
    id: 4,
    country: 'Nigeria',
    flag: 'nigeria.svg',
    image: 'nigeria.svg',
    position: { top: '-4.5%', right: '32%' }
  },
  {
    id: 5,
    country: 'France',
    flag: 'france.svg',
    image: 'france.svg',
    position: { top: '45%', right: '20%' }
  }
];

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-[#F5F9F7] overflow-hidden">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 pt-20 text-center">
        <motion.h1
          className="text-5xl md:text-[3.15rem] font-bold mb-6"
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
          className="bg-[#336E2E] text-white px-8 py-3 rounded-full text-lg hover:bg-green-800 transition-colors"
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
          <MedicationBubbles bubbles={medicationBubbles} />
          <CountryProfiles profiles={countryProfiles} />
          <CoinAnimations />
        </div>
        <MountainGradient />
      </div>
    </section>
  );
};

export default HeroSection;