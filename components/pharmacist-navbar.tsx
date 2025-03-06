"use client"
import Link from 'next/link';
import Image from 'next/image';
import PharmacistNavbarMobile from './pharmaciNavbarMobile'

export default function PharmacistNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#202F26] backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/pharmacists" className="flex-shrink-0">
            <Image 
              src="/assets/kurabill-logo-white.svg"
              alt="KuraBill"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center bg-[#2B4033] rounded-full p-1">
              <Link href="/"
                className="px-6 py-2 rounded-full text-white hover:text-white/90"
              >
                For Patients
              </Link>
              <Link href="/pharmacists">
                <button
                  className="px-6 py-2 rounded-full bg-[#336E2E] text-white"
                   
                >
                  For Pharmacists
                </button>
              </Link>
            </div>
          </div>
          {/* Right Nav Items */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/pharmacists/pricing" className="text-white hover:text-white/80">
              Pricing
            </Link>
            <Link href="/pharmacists/testimonials" className="text-white hover:text-white/80">
              Testimonials
            </Link>
            <Link href="/pharmacists/faqs" className="text-white hover:text-white/80">
              FAQs
            </Link>
            <Link href="/pharmacists/about" className="text-white hover:text-white/80">
              About Us
            </Link>
            <Link
              href="/waitlist"
              className="border border-white text-white px-6 py-2 rounded-full 
                       hover:bg-white hover:text-[#1B4332] transition-all"
            >
              Join Waitlist
            </Link>
          </div>
          {/* Mobile Navbar */}
          <PharmacistNavbarMobile />
        </div>
      </nav>
    </header>
  );
}