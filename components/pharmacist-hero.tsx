"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function PharmacistHero() {
  return (
    <section className="relative pt-24 pb-10 px-4 md:px-6 bg-[#202F26] overflow-hidden">
      
      <div className="absolute inset-0 flex items-center justify-center">
              <Image src="/assets/pharmacies/hex.png" alt="Hexagon Pattern" layout="fill" className="object-contain " />
            </div> 

      {/* Content with increased z-index to appear above gradient */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-clash-display
                     relative z-10 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Set Up a Digital Pharmacy with Kurabill
          </motion.h1>
          
          <motion.p 
            className="text-[#E5E7EB] max-w-3xl mx-auto text-lg md:text-xl mb-12 leading-relaxed
                     relative z-10 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transform your pharmacy into a digital hub with Kurabill streamline orders, manage
            prescriptions, and offer secure online payments, all in one platform
          </motion.p>

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              href="/waitlist"
              className="inline-block bg-[#44B564] text-white px-8 py-3 rounded-full
                       hover:bg-[#3a9c55] transition-all duration-300 text-lg font-medium
                       hover:shadow-lg hover:scale-105 active:scale-100"
            >
              Join Waitlist
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Interactive Gradient Effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent to-[#202F26]/50
                   pointer-events-none transition-opacity duration-500
                   opacity-0 group-hover:opacity-100"
      />
    </section>
  )
}