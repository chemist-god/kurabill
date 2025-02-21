"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('patients')

  const handleTabChange = (tab: 'patients' | 'pharmacists') => {
    setActiveTab(tab)
    if (tab === 'pharmacists') {
      router.push('/pharmacists')
    } else {
      router.push('/')
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F9F7]">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/assets/kurabill-logo.png"
              alt="KuraBill"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Toggle Buttons */}
          <div className="flex items-center bg-[#E6F0E9] rounded-full p-1">
            <button
              onClick={() => handleTabChange('patients')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                ${activeTab === 'patients' ? 'bg-[#44724A] text-white' : 'text-gray-700'}`}
            >
              For Patients
            </button>
            <button
              onClick={() => handleTabChange('pharmacists')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                ${activeTab === 'pharmacists' ? 'bg-[#44724A] text-white' : 'text-gray-700'}`}
            >
              For Pharmacists
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-600 hover:text-black">
              Our Services
            </Link>
            <Link href="/testimonials" className="text-gray-600 hover:text-black">
              Testimonials
            </Link>
            <Link href="/faqs" className="text-gray-600 hover:text-black">
              FAQs
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-black">
              About Us
            </Link>
            <Link
              href="/waitlist"
              className="border border-[#44724A] text-[#44724A] px-6 py-2 rounded-full 
                       hover:bg-[#44724A] hover:text-white transition-all"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}