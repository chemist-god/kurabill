"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import logo from '@/public/assets/kurabill-logo.png';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('patients');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: '/services', label: 'Our Services' },
        { href: '/testimonials', label: 'Testimonials' },
        { href: '/faqs', label: 'FAQs' },
        { href: '/about', label: 'About Us' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#F1FBF8] shadow-sm backdrop-blur-sm">
            <nav className="max-w-7xl mx-auto py-4 px-4 md:px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <Image 
                            src={logo} 
                            alt="KuraBill Logo" 
                            width={120} 
                            height={32} 
                            className="w-auto h-8"
                        />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {/* Toggle Button */}
                        <div className="flex items-center bg-gray-200 rounded-full p-1">
                            <button
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                    activeTab === 'patients' ? 'bg-[#44724A] text-white' : 'text-gray-700'
                                }`}
                                onClick={() => setActiveTab('patients')}
                            >
                                For Patients
                            </button>
                            <button
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                    activeTab === 'pharmacists' ? 'bg-[#44724A] text-white' : 'text-gray-700'
                                }`}
                                onClick={() => setActiveTab('pharmacists')}
                            >
                                For Pharmacists
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex items-center gap-6 text-gray-600">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="hover:text-[#1B4332] hover: transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Join Waitlist Button */}
                        <Link
                            href="/waitlist"
                            className="border border-[#44724A] text-[#44724A] px-6 py-2 rounded-full hover:bg-[#44724A] hover:text-white transition-all"
                        >
                            Join Waitlist
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out ${
                        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                >
                    <div className="pt-4 pb-3 space-y-4">
                        {/* Mobile Toggle */}
                        <div className="flex flex-col gap-2 bg-gray-200 rounded-lg p-2">
                            <button
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                    activeTab === 'patients' ? 'bg-[#44724A] text-white' : 'text-gray-700'
                                }`}
                                onClick={() => setActiveTab('patients')}
                            >
                                For Patients
                            </button>
                            <button
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                    activeTab === 'pharmacists' ? 'bg-[#44724A] text-white' : 'text-gray-700'
                                }`}
                                onClick={() => setActiveTab('pharmacists')}
                            >
                                For Pharmacists
                            </button>
                        </div>

                        {/* Mobile Navigation Links */}
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block px-4 py-2 text-gray-600 hover:text-[#298250] transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Mobile Join Waitlist Button */}
                        <div className="px-4">
                            <Link
                                href="/waitlist"
                                className="block w-full text-center border border-[#44724A] text-[#44724A] px-6 py-2 rounded-full hover:bg-[#44724A] hover:text-white transition-all"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Join Waitlist
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;