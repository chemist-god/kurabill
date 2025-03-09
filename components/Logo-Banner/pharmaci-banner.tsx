import Image from 'next/image'
import { MobileLogoBanner } from './mobile-logo'

export function PharmaciBanner() {
  const logos = [
    { src: '/assets/logos/roku.png', alt: 'Roku', width: 100 },
    { src: '/assets/logos/syneos-health.png', alt: 'Syneos Health', width: 120 },
    { src: '/assets/logos/nemours.png', alt: 'Nemours', width: 110 },
    { src: '/assets/logos/klarna.png', alt: 'Klarna', width: 100 },
    { src: '/assets/logos/pfizer.png', alt: 'Pfizer', width: 100 },
    { src: '/assets/logos/novartis.png', alt: 'Novartis', width: 110 },
    { src: '/assets/logos/merck.png', alt: 'Merck', width: 100 },
  ]

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
  <h2 className="text-4xl font-bold mb-12 hidden md:block">
    Join 2K+ pharmacies boosting profits with Kurabill.
  </h2>
  <h2 className="text-4xl font-bold mb-12 block md:hidden">
    Trusted By
  </h2>
</div>

        {/* Logos */}
        <div className="hidden md:flex items-center justify-center flex-nowrap overflow-x-auto gap-x-16 gap-y-8">
          {logos.map((logo) => (
            <div 
              key={logo.alt} 
              className="relative h-[22px]"
              style={{ width: logo.width }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain grayscale"
                quality={100}
              />
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
                  <MobileLogoBanner />
                </div>
      </div>
    </section>
  )
}