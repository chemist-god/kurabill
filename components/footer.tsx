import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/assets/kurabill-logo-I.png'
import facebook from '@/public/assets/facebook.png'
import twitter from '@/public/assets/twitter.png'
import youtube from '@/public/assets/youtube.png'
import instagram from '@/public/assets/instagram.png'

export function Footer() {
  return (
    <footer className="bg-[#1B4332] text-white px-8 py-16 rounded-t-3xl">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <Link href="/">
              <Image 
                src={logo} 
                alt="KuraBill" 
                width={117} 
                height={35}
              />
            </Link>
          </div>

          {/* Navigation Sections */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">For Patients</h3>
            <ul className="space-y-2">
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/testimonials">Testimonials</Link></li>
              <li><Link href="/faqs">FAQs</Link></li>
              <li><Link href="/about">About Us</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">For Pharmacists</h3>
            <ul className="space-y-2">
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/testimonials">Testimonials</Link></li>
              <li><Link href="/faqs">FAQs</Link></li>
              <li><Link href="/about">About Us</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms & Condition</Link></li>
              <li><Link href="/about">About Us</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <ul className="space-y-2">
              <Link
              href="tel:+23300903390"
              >
                +234 009 033 90
                </Link>
              <li>+233 049 994 040</li>
              <Link 
                href="mailto:kurabill@gmail.com"
              >
                Kurabill@gmail.com
              </Link>
            </ul>
          </div>
        </div>

        {/* Social Links & Join Waitlist */}
        <div className="flex justify-between items-center flex-col md:flex-row gap-8">
            <div className="flex gap-4">
              <Link href="#">
                <Image src={facebook} alt="Facebook" width={32} height={32} />
              </Link>
              <Link href="#">
                <Image src={twitter} alt="Twitter" width={32} height={32} />
              </Link>
              <Link href="#">
                <Image src={youtube} alt="YouTube" width={32} height={32} />
              </Link>
              <Link href="#">
                <Image src={instagram} alt="Instagram" width={32} height={32} />
              </Link>
            </div>

          <Link 
            href="/waitlist" 
            className="bg-white text-[#1B4332] px-8 py-3 rounded-full font-medium"
          >
            Join Waitlist
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-600">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <p> &copy; {new Date().getFullYear()} Kurabill. All Rights Reserved</p>
            <div className="flex gap-8">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Use</Link>
              <Link href="/refunds">Sales and Refunds</Link>
              <Link href="/legal">Legal</Link>
              <Link href="/sitemap">Site Map</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;