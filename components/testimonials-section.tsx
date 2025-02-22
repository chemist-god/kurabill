  "use client"
import Image from 'next/image'
import { useState } from 'react'

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const testimonials = [
    {
      name: "Stella James",
      image: "/assets/images/stella.png",
      rating: 4,
      text: "Kurabill has made managing my prescriptions and finding trusted pharmacies a breeze. The convenience it brings to healthcare is unmatched!",
      date: "13 May 14 2024",
      borderColor: "border-emerald-500"
    },
    
    {
      name: "Stella James",
      image: "/assets/images/stella.png",
      rating: 5,
      text: "Thanks to Kurabill, I can swiftly and securely make payments for medications from anywhere globally using stablecoins. It's fast, easy, and reliable!",
      date: "13 May 14 2024",
      borderColor: "border-emerald-500"
    },
    {
      name: "Stella James",
      image: "/assets/images/stella.png",
      rating: 4,
      text: "Kurabill simplifies the process of sending essential medications to loved ones, no matter where they are. With just a few clicks and secure payments.",
      date: "13 May 14 2024",
      borderColor: "border-emerald-500"
    },
  ]

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Testimonials
        </h2>
        
        {/* Subtitle */}
        <div className="flex justify-center mb-12">
          <span className="inline-block px-6 py-2 rounded-full bg-gray-100 text-gray-800">
            Don&apos;t Just Take Our Word for It
          </span>
        </div>

        {/* Main Heading */}
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Hear From other Customers Who Use Kurabill
        </h3>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out"
                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4`}
                >
                  <div className={`p-6 rounded-2xl border-2 ${testimonial.borderColor} h-full`}>
                    {/* User Info */}
                    <div className="flex items-center mb-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div className="ml-4">
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-600 mb-4">{testimonial.text}</p>

                    {/* Date */}
                    <span className="text-sm text-gray-500">{testimonial.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
            onClick={() => setCurrentSlide(Math.min(testimonials.length - 1, currentSlide + 1))}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}