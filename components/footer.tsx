// components/Footer.js
import Link from "next/link"
import Image from "next/image"
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"

export default function Footer() {
  const services = [
    "Household Shifting",
    "Office Relocation",
    "Vehicle Transportation",
    "Packing Services",
    "Loading & Unloading",
    "Storage & Warehousing",
  ]

  const serviceAreas = [
    { name: "Delhi NCR", href: "/service/delhi-ncr" },
    { name: "Gurgaon", href: "/service/gurgaon" },
    { name: "Garhi Harsaru", href: "/service/garhi-harsaru" },
    { name: "Pausa", href: "/service/pausa" },
    { name: "Faridabad", href: "/service/faridabad" },
    { name: "Noida", href: "/service/noida" },
    { name: "Greater Noida", href: "/service/greater-noida" },
    { name: "Ghaziabad", href: "/service/ghaziabad" },
  ]

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
    { name: "Get Quote", href: "/#contact" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/carousel/logo.png"
                  alt="Karni Movers and Packers Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-red-400">KARNI PACKERS</span>
                <span className="text-sm text-gray-300 font-medium p-2">& MOVERS</span>
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Trusted packers and movers with 15+ years of experience. We provide professional relocation services across India with complete safety and reliability.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-red-400">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <div style={{ width: 'fit-content', padding: "8px", borderRadius: "5px", backgroundColor: "#1f2937" }}>
                    <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                      {service}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-red-400">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>shri Krishna colony garhi harsaru</p>
                  <p>Gurgaon, India - 122505</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>+91 9216179851</p>
                  <p>+91 9571968317</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>karnipackerandmover@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold text-red-400 mb-4">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {quickLinks.map((link, index) => (
                <Link key={index} href={link.href} className="text-gray-300 hover:text-white transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">
              © 2024 Karni Movers & Packers. All rights reserved. | Blessed by Maa Karni
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
