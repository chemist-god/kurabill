'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
    {
        icon: '/assets/pharmacies/sales-analytics.png',
        title: 'Sales Analytics',
        description: 'Track, analyze, and optimize your pharmacy\'s sales performance with Kurabill\'s powerful analytics tools.'
    },
    {
        icon: '/assets/pharmacies/transparency.png',
        title: 'Transparency',
        description: 'Clear insights and open communication for seamless pharmacy management.'
    },
    {
        icon: '/assets/pharmacies/customer-focus.png',
        title: 'Customer Focus',
        description: 'Putting your customers at the heart of every solution we provide.'
    },
    {
        icon: '/assets/pharmacies/market-expansion.png',
        title: 'Market Expansion',
        description: 'Unlock new opportunities and reach more customers across borders'
    }
];

const RevenueSection: React.FC = () => {
    return (
        <section className="py-16 px-4 md:px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row items-start justify-between mb-20">
                    {/* Left Content */}
                    <motion.div 
                        className="lg:w-1/2 mb-10 lg:mb-0"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-sm font-medium text-gray-600 mb-4">
                            Go Digital & Sell to the world
                        </p>
                        <h2 className="text-2xl sm:text-3xl md:text-[2.4rem] font-semibold mb-6">
                            X10 your Revenue with Kurabill
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                            Whatever you need, Kurabill is built with solutions in mind. Need to customize further - no problem.
                        </p>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div 
                        className="lg:w-1/2 relative"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Image
                            src="/assets/pharmacies/sales-background.svg"
                            alt="Sales Dashboard"
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </motion.div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="bg-gray-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RevenueSection;