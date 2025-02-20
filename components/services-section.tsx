import Image from 'next/image'

export function ServicesSection() {
  const services = [
    {
      title: "Medication Management",
      description: "Easily manage your prescriptions and discover trusted pharmacies near you, ensuring a convenient healthcare experience every time.",
    },
    {
      title: "Effortless Payments",
      description: "Make secure payments for medications from anywhere in the world, with fast, easy, and reliable transactions using stablecoins.",
    },
    {
      title: "Global Healthcare",
      description: "Send essential medications to your loved ones, no matter where they are, with just a few clicks and secure payment options.",
    }
  ]

  return (
    <section className="w-full py-16 bg-[#F5F9F7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="flex justify-center mb-10">
          <span className="inline-block px-6 py-2 rounded-full border border-[#44724A] text-[#44724A]">
            Our Services
          </span>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden">
          <Image
            src="/assets/images/pharmacist.png"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`flex justify-between items-center p-6 rounded-xl transition-shadow ${
                index === 0 ? 'bg-[#E6F0E9]' : 'bg-white'
              }`}
            >
              <div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#E6F0E9] flex items-center justify-center">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M9 18L15 12L9 6" 
                      stroke="#44724A" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
