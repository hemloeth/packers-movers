"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, Phone, Mail, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ]

  const isActive = (href: string) => {
    return pathname === href
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-red-600 text-white py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-2 sm:mb-0">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 9211475722</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@karnimoverspacker.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>Customer Login</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image src="/logo.png" alt="Karni Movers and Packers Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-red-600">KARNI MOVERS</span>
                <span className="text-sm text-gray-600 font-medium">& PACKERS</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-red-600 border-b-2 border-red-600 pb-1"
                      : "text-gray-700 hover:text-red-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden bg-transparent border-gray-300">
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white">
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-lg font-medium transition-colors ${
                        isActive(item.href) ? "text-red-600" : "text-gray-700 hover:text-red-600"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
