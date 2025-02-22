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
                    src="/assets/pharmacies/rectangle-design.png" // Your full background image
                    alt="Background Design"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-100"
                />
                </Link>
            </div>
            <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                > 
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl text-white mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Discover how KuraBill can streamline your pharmacy operations and boost your revenue.
                </motion.p>
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