'use client'
import React from 'react'
import JoinWaitlistModal from '@/components/JoinWaitlistModal'
import { useState } from 'react'

const Page = () => {

    const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <div>
        {/* Modal */}
        <JoinWaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default Page