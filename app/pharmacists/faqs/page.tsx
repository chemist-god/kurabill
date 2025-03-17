import React from 'react'
import { FAQSection } from '@/components/FAQ/faq-section';
import PharmacistNavbar from '@/components/pharmacist-navbar';

const page = () => {
  return (
    <><PharmacistNavbar /><div>
      <FAQSection />
    </div></>
  )
}

export default page