// components/PharmacistDashboardMobile.tsx
"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PharmacistDashboardMobile() {
  const pharmacies = [
    { name: 'Jaywells Pharmacy', image: '/assets/pharmacies/jaywells.png', position: { top: '1%', left: '2%' } },
    { name: 'Newton Pharmacy', image: '/assets/pharmacies/newton.png', position: { top: '27%', left: '11%' } },
    { name: 'Carewell Pharmacy', image: '/assets/pharmacies/carewell.png', position: { top: '2%', right: '8%' } },
    { name: 'Livewell Pharmacy', image: '/assets/pharmacies/livewell.png', position: { top: '25%', right: '2%' } }
  ]
  return (
    <div className="relative bg-[#202F26] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src="/assets/pharmacies/hex-map.png" alt="Hexagon Pattern" layout="fill" className="object-contain opacity-10" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src="/assets/pharmacies/earth.png" alt="Earth Map" layout="fill" className="object-contain opacity-80" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 pt-16">
        {pharmacies.map((pharmacy, index) => (
          <motion.div
            key={pharmacy.name}
            className="absolute"
            style={pharmacy.position}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="relative group cursor-pointer">
              <motion.div className="absolut" />
              <div className="flex items-center">
  <div className="relative w-10 h-10">
    <Image src={pharmacy.image} alt={pharmacy.name} layout="fill" className="rounded-full object-cover" />
  </div>
  <div className="ml-1 text-white text-xs font-medium whitespace-nowrap">{pharmacy.name}</div>
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
          <Image src="/assets/pharmacies/dashboard-preview.png" alt="Dashboard Preview" layout="responsive" width={600} height={337.5} className="object-cover" />
        </motion.div>
      </div>
    </div>
  )
}