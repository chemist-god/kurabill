"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import JoinWaitlistModal from "../Join waitlist/JoinWaitlistModal";

export default function NavbarMobile() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"patients" | "pharmacists">("patients");
  const router = useRouter();

  return (
    <div className="md:hidden">
      <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700">
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isMobileMenuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 w-64">
          {/* Toggle Buttons for Mobile */}
          <div className="flex flex-col bg-[#E6F0E9] rounded-lg p-2">
            <button
              onClick={() => {
                setActiveTab("patients");
                router.push("/");
                setIsMobileMenuOpen(false);
              }}
              className={`w-full py-2 rounded-lg text-sm font-medium transition-all text-center
                ${activeTab === "patients" ? "bg-[#336E2E] text-white" : "text-gray-700"}`}
            >
              For Patients
            </button>
            <button
              onClick={() => {
                setActiveTab("pharmacists");
                router.push("/pharmacists");
                setIsMobileMenuOpen(false);
              }}
              className={`w-full py-2 rounded-lg text-sm font-medium transition-all text-center
                ${activeTab === "pharmacists" ? "bg-[#336E2E] text-white" : "text-gray-700"}`}
            >
              For Pharmacists
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-4 mt-4">
            <Link href="/services" className="text-gray-600 hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>
              Our Services
            </Link>
            <Link href="/testimonials" className="text-gray-600 hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>
              Testimonials
            </Link>
            <Link href="/faqs" className="text-gray-600 hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>
              FAQs
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="border border-[#336E2E] text-[#44724A] px-6 py-2 rounded-full 
              hover:bg-[#44724A] hover:text-white transition-all text-center"
            >
              Join Waitlist
            </button>
            {/* Modal */} 
            <JoinWaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </nav>
        </div>
      )}
    </div>
  );
}
