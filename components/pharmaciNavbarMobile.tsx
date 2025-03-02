"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PhamarcistNavbarMobile() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"patients" | "pharmacists">("pharmacists");
  const router = useRouter();

  return (
    <div className="md:hidden">
      <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
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
                ${activeTab === "patients" ? "bg-[#2B4033] text-white" : "text-gray-700"}`}
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
            <Link href="/pharmacists/pricing" className="text-gray-600 hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>
              Pricing
            </Link>
            <Link href="/pharmacists/testimonials" className="text-gray-600 hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>
              Testimonials
            </Link>
            <Link href="/pharmacists/faqs" className="text-gray-600 hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>
              FAQs
            </Link>
            <Link href="/pharmacists/about" className="text-gray-600 hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link
              href="/waitlist"
              className="border border-[#44724A] text-[#44724A] px-6 py-2 rounded-full 
              hover:bg-[#44724A] hover:text-white transition-all text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join Waitlist
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
