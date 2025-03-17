'use client'
import React from 'react';
import Image from 'next/image';

const HelpingSection: React.FC = () => {
    return (
 <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-8">
            {/* Background Image */}
            <div className="relative overflow-hidden rounded-3 cursor-pointer " >
                <Image
                    src="/assets/pharmacies/rectangle-design.svg"
                    alt="Background Design"
                    width={1200}
                    height={800}
                    objectFit="cover"
                    style={{ width: '100%', height: '100%', objectPosition: 'center' }}
                />
            </div>
        </section>
    );
};
export default HelpingSection;