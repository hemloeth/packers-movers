import type { Metadata } from "next"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ImageCarousel from "@/components/image-carousel"
import ServicesSection from "@/components/services-section"
import WhyChooseUs from "@/components/why-choose-us"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import FloatingButtons from "@/components/floating-buttons"
import ServiceAreas from "@/components/ServiceAreas"

export const metadata: Metadata = {
  title: "Karni packers and movers - Professional Relocation Services | Best Packers and Movers",
  description:
    "Karni packers and movers offers professional packing and moving services across India. Trusted relocation experts with 15+ years experience. Get free quotes for household shifting, office relocation, car transportation.",
  keywords:
    "packers and movers, relocation services, household shifting, office relocation, car transportation, professional movers, packing services, moving company, Karni movers, Gurgaon packers, Delhi movers",
  openGraph: {
    title: "Karni packers and movers - Professional Relocation Services",
    description:
      "Trusted packers and movers with 15+ years experience. Professional household shifting, office relocation, and car transportation services.",
    type: "website",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://karnimoverspacers.com",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header /><ImageCarousel />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ContactSection />
      <ServiceAreas/>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
