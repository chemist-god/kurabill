import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/kurabill-logo-I.png";
import facebook from "@/public/assets/facebook.png";
import twitter from "@/public/assets/twitter.png";
import youtube from "@/public/assets/youtube.png";
import instagram from "@/public/assets/instagram.png";

const FooterMobile: React.FC = () => {
  return (
    <footer className="bg-[#1B4332] text-white px-6 py-10 rounded-t-3xl">
      <div className="max-w-md mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-[3.5rem]">
          <Link href="/">
            <Image src={logo} alt="KuraBill" width={117} height={35} />
          </Link>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-2 gap-6 text-sm text-left">
          {/* For Patients */}
          <div>
            <h3 className="font-bold text-lg">For Patients</h3>
            <ul className="space-y-2 mt-2">
              <li>
                <Link href="/services" className="hover:underline">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:underline">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:underline">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* For Pharmacists */}
          <div>
            <h3 className="font-bold text-lg">For Pharmacists</h3>
            <ul className="space-y-2 mt-2">
              <li>
                <Link href="/pharmacists/pricing" className="hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:underline">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:underline">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg">Company</h3>
            <ul className="space-y-2 mt-2">
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg">Contact</h3>
            <ul className="space-y-2 mt-2">
              <li>
                <Link href="tel:+23300903390" className="hover:underline">
                  +234 009 033 90
                </Link>
              </li>
              <li>
                <Link href="tel:+233049994040" className="hover:underline">
                  +233 049 994 040
                </Link>
              </li>
              <li>
                <Link href="mailto:kurabill@gmail.com" className="hover:underline">
                  Kurabill@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Join Waitlist Button */}
        <div className="mt-[4rem]">
          <Link
            href="/waitlist"
            className="bg-white text-[#1B4332] px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
          >
            Join Waitlist
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-[8rem]">
          <Link href="#" className="hover:opacity-80">
            <Image src={facebook} alt="Facebook" width={24} height={24} />
          </Link>
          <Link href="#" className="hover:opacity-80">
            <Image src={twitter} alt="Twitter" width={24} height={24} />
          </Link>
          <Link href="#" className="hover:opacity-80">
            <Image src={youtube} alt="YouTube" width={28} height={28} />
          </Link>
          <Link href="#" className="hover:opacity-80">
            <Image src={instagram} alt="Instagram" width={24} height={24} />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs mt-6">&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default FooterMobile;
