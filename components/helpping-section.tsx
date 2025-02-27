"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const HelpingSection: React.FC = () => {
    return (
        <section className="relative py-16 px-4 md:px-6">
            {/* Background Image */}
            <div className="absolute inset-0 hover:bg-gray-200 cursor-pointer">
                <Link href="/waitlist">
                <Image
                    src="/assets/pharmacies/rectangle-design.png" 
                    alt="Background Design"
                    fill
                    style= {{objectFit:'cover' }}
                    className="opacity-100"
                />
                </Link>
            </div>
            <div className="max-w-7xl mx-auto text-center relative z-10">
                
                    <motion.button
                        className="cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                    </motion.button>
            </div>
        </section>
    );
};

export default HelpingSection;