import Image from 'next/image'

export function FeaturesSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Global Healthcare Feature */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-24 ">
          {/* Image */}
          <div className="w-full md:w-1/2 relative bg-[#FCF6ED]">
            <div className="relative w-full aspect-square max-w-[500px]">
              <Image
                src="/assets/images/global.svg"
                alt="Global Healthcare Interface"
                fill
                className="object-contain"
                priority
              />
              {/* Floating coin */}
              <div className="absolute -top-8 -left-8">
                <Image
                  src="/assets/images/coin.svg"
                  alt="Stable coin"
                  width={100}
                  height={100}
                  className="w-auto h-auto"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">
              Global Healthcare
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Payment used to be a restriction, we solved that! Buy medications 
              for Yourself, family & Friends from anywhere in the world
            </p>
            <button className="bg-[#44724A] text-white px-8 py-3 rounded-full hover:bg-[#375c3c] transition-colors">
              Join Waitlist
            </button>
          </div>
        </div>

        {/* Digital Pharmacy Feature */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-16">
          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">
              Digital Pharmacy
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Your trusted partner in delivering medications globally, with 
              seamless digital solutions for easy access and secure payments
            </p>
            <button className="bg-[#44724A] text-white px-8 py-3 rounded-full hover:bg-[#375c3c] transition-colors">
              Join Waitlist
            </button>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-[500px]  rounded-lg">
              <Image
                src="/assets/images/digital.svg"
                alt="Digital Pharmacy Interface"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}