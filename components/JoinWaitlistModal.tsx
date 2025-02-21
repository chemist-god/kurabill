'use client'
import React, { useState } from 'react';

const JoinWaitlistModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ firstName, lastName, email });
        onClose(); 
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
                <h2 className="text-xl font-bold mb-4">Join Waitlist</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1">Full Name</label>
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="border rounded-lg p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="border rounded-lg p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-green-700 text-white px-4 py-2 rounded-lg w-full hover:bg-green-800 transition-colors duration-200"
                    >
                        Submit
                    </button>
                </form>
                <button onClick={onClose} className="text-gray-500 mt-4 hover:underline">
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default JoinWaitlistModal;