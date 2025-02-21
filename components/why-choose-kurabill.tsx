import React from 'react';
import Image from 'next/image';

const WhyChooseKurabill: React.FC = () => {
    const features = [
        {
            title: 'Do Business With Less Stress',
            description: 'Streamline your operations, simplify processes, and focus on what matters most—growing your business with ease.',
        },
        {
            title: 'Digital Pharmacy',
            description: 'Redefining healthcare with seamless, secure, and accessible digital solutions for modern pharmacies.',
        },
        {
            title: 'X10 Your Revenue',
            description: 'Boost your pharmacy’s growth and multiply your revenue with smarter digital solutions.',
        },
    ];

    return (
        <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Kurabill?</h2>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-between">
                {/* Left Image */}
                <div className="flex-1 flex justify-center mb-8 md:mb-0">
                    <Image
                        src="/assets/about/man.png" 
                        alt="Pharmacist"
                        width={300}
                        height={300}
                        className="rounded-lg shadow-lg"
                    />
                </div>

                {/* Feature Blocks */}
                <div className="flex-1 space-y-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
                            <Image
                                src="/assets/about/icon.png" 
                                alt="Feature Icon"
                                width={40}
                                height={40}
                                className="mr-4"
                            />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Image */}
                <div className="flex-1 flex justify-center">
                    <Image
                        src="/assets/about/doctor.png" 
                        alt="Doctor"
                        width={300}
                        height={300}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyChooseKurabill;