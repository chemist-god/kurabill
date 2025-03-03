'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface PricingPlan {
    title: string;
    price: number;
    period: string;
    description: string;
    features: string[];
    buttonColor: string;
    isPopular?: boolean;
}

const PricingSection: React.FC = () => {
    const plans: PricingPlan[] = [
        {
            title: 'Basic',
            price: 0,
            period: '/month',
            description: 'Sell Digitally and Track Your Inventories',
            features: [
                'Get a fully designed Admin Office',
                'Make money in USD & withdraw to your local Bank',
                'Limited Support',
            ],
            buttonColor: 'bg-white hover:bg-gray-100 text-black border border-gray-200',
        },
        {
            title: 'Pro',
            price: 12,
            period: '/month',
            description: 'Sell Digitally and Track Your Inventories',
            features: [
                'Get a fully designed Admin Office',
                'Make money in USD & withdraw to your local Bank',
                'Limited Support',
                'Add Other Employees',
            ],
            buttonColor: 'bg-black hover:bg-gray-900 text-white',
            isPopular: true,
        },
        {
            title: 'Enterprise',
            price: 20,
            period: '/month',
            description: 'Sell Digitally and Track Your Inventories',
            features: [
                'Get a fully designed Admin Office',
                'Make money in USD & withdraw to your local Bank',
                'Get Full Support',
                'Add Other Employees',
            ],
            buttonColor: 'bg-[#44724A] hover:bg-[#365c3a] text-white',
        },
    ];

    return (
        <section className="py-16 px-4 md:px-6 bg-[#FFFFFF]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-block px-4 py-1 rounded-full bg-gray-200 mb-4 border border-[#364C09]">
                        <span className="dm-sans-text text-sm font-medium">🏷️ Pricing</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1B1B1B] mb-[2.5rem]">
                        Find the right plan
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Invest in your Business&apos;s future with our comprehensive pharmacy solution. Contact us for pricing details and see how we can help you streamline your finances and reach your business goals.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative bg-[#F4F4F4] rounded-2xl p-8 shadow-lg flex flex-col h-full ${plan.isPopular ? 'border-2 border-[#44724A]' : ''}`}
                        >
                            {plan.isPopular && (
                                <span className="dm-sans-text absolute top-4 right-4 bg-[#1B1B1B] text-[#33C6AB] text-xs px-3 py-1 rounded-full">
                                    ✨ Popular
                                </span>
                            )}

                            <h3 className={`dm-sans-text text-2xl font-[500] mb-2 ${plan.isPopular ? 'text-[#44724A]' : ''}`}>
                                {plan.title}
                            </h3>
                            <p className="text-gray-600 mb-6">{plan.description}</p>

                            <div className="flex items-baseline mb-8">
                                <span className="dm-sans-text text-4xl font-semibold">${plan.price}</span>
                                <span className="dm-sans-text text-gray-600 ml-1">{plan.period}</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="dm-sans-text flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Button container to align all buttons */}
                            <div className="flex justify-center mt-auto">
                                <button
                                    className={`dm-sans-text w-full py-3 px-6 rounded-full text-center transition-all duration-200 ${plan.buttonColor}`}
                                >
                                    Join Waitlist
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
