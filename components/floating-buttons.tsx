"use client"

import { Phone, Mail } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { RiWhatsappFill } from "react-icons/ri"



export default function FloatingButtons() {
    const handleCall = () => {
        window.open("tel:+919216179851", "_self")
    }

    const handleWhatsApp = () => {
        window.open("https://wa.me/919216179851?text=Hello, I need moving services", "_blank")
    }

    const handleEmail = () => {
        window.open("mailto:karnipackerandmover@gmail.com", "_self")
    }

    return (
        <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
            <Button
                onClick={handleCall}
                size="icon"
                className="w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Call us"
            >
                <Phone className="w-6 h-6" />
            </Button>

      <Button
        onClick={handleWhatsApp}
        size="icon"
        className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="WhatsApp us"
      >
        <RiWhatsappFill className="w-6 h-6" />
      </Button>


            <Button
                onClick={handleEmail}
                size="icon"
                className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Email us"
            >
                <Mail className="w-6 h-6" />
            </Button>
        </div>
    )
}
