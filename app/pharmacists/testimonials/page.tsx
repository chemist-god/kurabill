import React from 'react'
import { TestimonialsSection } from '@/components/Testimonials/testimonials-section'
import PharmacistNavbar from '@/components/pharmacist-navbar'

const page = () => {
  return (
    <><PharmacistNavbar /><div className="vh-100 flex flex-col justify-center items-center">
      <TestimonialsSection />
    </div></>
  )
}

export default page