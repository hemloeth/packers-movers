import type { Metadata } from "next"
import Header from "@/components/header"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import FloatingButtons from "@/components/floating-buttons"
import ServiceAreas from "@/components/ServiceAreas"

export const metadata: Metadata = {
  title: "Contact Us - Karni packers and movers | Get Free Quote",
  description:
    "Contact Karni packers and movers for professional relocation services. Get free quotes, expert consultation, and 24/7 customer support.",
  keywords:
    "contact packers movers, free moving quote, relocation consultation, moving company contact, customer support",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div >
        <ContactSection />
      </div>
      <ServiceAreas />
      <Footer />
      <FloatingButtons />
    </div>
  )
}
