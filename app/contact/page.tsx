import type { Metadata } from "next"
import Header from "@/components/header"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import FloatingButtons from "@/components/floating-buttons"

export const metadata: Metadata = {
  title: "Contact Us - Karni Movers and Packers | Get Free Quote",
  description:
    "Contact Karni Movers and Packers for professional relocation services. Get free quotes, expert consultation, and 24/7 customer support.",
  keywords:
    "contact packers movers, free moving quote, relocation consultation, moving company contact, customer support",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
