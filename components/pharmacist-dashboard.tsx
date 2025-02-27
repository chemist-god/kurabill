"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PharmacistDashboard() {
  const pharmacyList = [
    { name: 'Jaywells Pharmacy', logo: '/assets/pharmacies/jaywells.svg', coordinates: { top: '12', left: '2%' } },
    { name: 'Newton Pharmacy', logo: '/assets/pharmacies/newton.svg', coordinates: { top: '15%', left: '46%' } },
    { name: 'Carewell Pharmacy', logo: '/assets/pharmacies/carewell.svg', coordinates: { top: '2%', right: '27%' } },
    { name: 'Livewell Pharmacy', logo: '/assets/pharmacies/livewell.svg', coordinates: { top: '22%', right: '5%' } }
  ]

  return (
    <div className="relative w-50% bg-[#202F26] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src="/assets/pharmacies/hex-map.png" alt="Hexagon Pattern" fill className="object-contain opacity-10" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src="/assets/pharmacies/earth.png" alt="Earth Map" fill className="object-contain opacity-80" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 pt-16">
        {pharmacyList.map((pharmacy, pharmacyIndex) => (
          <motion.div
            key={pharmacy.name}
            className="absolute"
            style={pharmacy.coordinates}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: pharmacyIndex * 0.2 }}
          >
            <div className="relative group cursor-pointer">
              <motion.div className="absolute -inset-3 rounded-full bg-white/10" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />
              <div className="relative w-14 h-14">
                <Image src={pharmacy.logo} alt={pharmacy.name} fill className="rounded-full object-cover" />
              </div>
              <div className="absolute -bottom-8 left-1/2   transition-all duration-300">
                <span className="text-white text-sm font-medium px-3 ">{pharmacy.name}</span>
              </div>
            </div>
          </motion.div>
        ))}
        <motion.div
  className="relative mt-20 rounded-xl overflow-hidden shadow-2xl"
  style={{ bottom: 0, marginTop: '20%' }} 
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
>
  <Image src="/assets/pharmacies/dashboard-preview.png" alt="Dashboard Preview" width={1200} height={675} className="object-cover responsive" />
</motion.div>
      </div>
    </div>
  )
}