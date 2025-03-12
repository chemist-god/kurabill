"use client"
import Image from 'next/image';
import { useState } from 'react';

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      name: "Stella James",
      image: "/assets/images/stella.svg",
      rating: 4,
      text: "Kurabill has made managing my prescriptions and finding trusted pharmacies a breeze. The convenience it brings to healthcare is unmatched!",
      date: "January 2025",
      borderColor: "border-emerald-500"
    },
    {
      name: "Stella James",
      image: "/assets/images/stella.svg",
      rating: 5,
      text: "Thanks to Kurabill, I can swiftly and securely make payments for medications from anywhere globally using stablecoins. It's fast, easy, and reliable!",
      date: "January 2025",
      borderColor: "border-blue-400"
    },
    {
      name: "Stella James",
      image: "/assets/images/stella.svg",
      rating: 4,
      text: "Kurabill simplifies the process of sending essential medications to loved ones, no matter where they are. With just a few clicks and secure payments.",
      date: "January 2025",
      borderColor: "border-purple-500"
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
        
        {/* Subtitle */}
        <div className="flex justify-center mb-[2rem] md:mb-[4rem]">
          <span className="manrope-text inline-block px-4 md:px-6 py-1 md:py-2 rounded-full bg-[#2D292940] text-gray-800 border-1 md:border-2 border-[#A69B9B] text-xs md:text-sm">
             Don&apos;t Just Take Our Word for It
         </span>
        </div>

        <div>
          <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold mb-[2rem]">Hear From other Customers Who Use Kurabill</h3>
        </div>

        {/* Testimonial Display */}
        <div className={`p-6 rounded-2xl border-2 ${testimonials[currentSlide].borderColor} mx-auto shadow-lg`}>
          <div className="flex items-center mb-4">
            <Image
              src={testimonials[currentSlide].image}
              alt={testimonials[currentSlide].name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="ml-4">
              <h4 className="manrope-text font-bold">{testimonials[currentSlide].name}</h4>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < testimonials[currentSlide].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className="manrope-text text-gray-600 mb-4">{testimonials[currentSlide].text}</p>
          <span className="manrope-text text-sm text-gray-500">{testimonials[currentSlide].date}</span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            className="manrope-text bg-gray-200 text-black px-4 py-2 rounded-full hover:bg-gray-300 transition-colors"
            onClick={handlePrev}
          >
            Previous
          </button>
          <button
            className="manrope-text bg-gray-200 text-black px-4 py-2 rounded-full hover:bg-gray-300 transition-colors"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}