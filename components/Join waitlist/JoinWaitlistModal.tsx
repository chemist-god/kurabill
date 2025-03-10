'use client';

import React, { useState } from 'react';
import { User, Mail } from 'lucide-react';

const JoinWaitlistModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true); // Start submission process
        
        try {
            // log Form to console by API call with a delay of 1 second
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log({ firstName, lastName, email });
            
            // Clear input fields after successful submission
            setFirstName('');
            setLastName('');
            setEmail('');
            
            onClose(); // Close modal only after submission
        } catch (error) {
            console.error('Error submitting form', error);
        } finally {
            setIsSubmitting(false); // Stop submission process
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out" onClick={onClose}>
            <div className="bg-white rounded-lg p-6 w-full max-w-[40rem] mx-4 relative" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 text-xl hover:text-red-600">✖</button>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Join the Waitlist</h2>
                <form onSubmit={handleSubmit}>
                    <label className="block text-sm font-medium text-gray-900">Full Name</label>
                    <div className="relative mb-4">
                        <User className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 pl-10"
                            required
                        />
                    </div>
                    <div className="relative mb-4">
                        <User className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 pl-10"
                            required
                        />
                    </div>
                    <label className="block text-sm font-medium text-gray-900">Email</label>
                    <div className="relative mb-4">
                        <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 pl-10"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-[#40C67B] hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                        disabled={isSubmitting} // Disable button during submission
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JoinWaitlistModal;