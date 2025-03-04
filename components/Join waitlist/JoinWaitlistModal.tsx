'use client'
import React, { useState, useEffect } from 'react';
import { User, Mail } from 'lucide-react';

const JoinWaitlistModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ firstName, lastName, email });
        onClose();
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.removeEventListener('keydown', handleKeyDown);
        }

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
             onClick={onClose} // Clicking outside closes the modal
        >
            <div className="bg-white rounded-lg p-6 w-full max-w-[40rem] mx-4 relative"
                 onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
            >
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 text-xl hover:text-red-600">
                    ✖
                </button>

                <p className="text-2xl font-bold mb-8 text-center">Join Waitlist</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900">Full Name</label>
                        <div className="flex space-x-2 md:flex-row flex-col">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 pl-10"
                                    required
                                />
                                <User className="absolute left-3 top-3 text-gray-400" size={18} />
                            </div>
                            <div className="relative mt-2 md:mt-0">
                                <input
                                    type="text"
                                    id="lastName"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 pl-10"
                                    required
                                />
                                <User className="absolute left-3 top-3 text-gray-400" size={18} />
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 pl-10"
                                required
                            />
                            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-[#40C67B] hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JoinWaitlistModal;