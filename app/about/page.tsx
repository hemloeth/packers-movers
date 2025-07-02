import type { Metadata } from "next"
import Header from "@/components/header"
import AboutSection from "@/components/about-section"
import WhyChooseUs from "@/components/why-choose-us"
import TestimonialsSection from "@/components/testimonials-section"
import Footer from "@/components/footer"
import FloatingButtons from "@/components/floating-buttons"

export const metadata: Metadata = {
  title: "About Us - Karni Movers and Packers | 15+ Years Experience",
  description:
    "Learn about Karni Movers and Packers - trusted relocation experts with 15+ years experience. Professional team, modern equipment, and commitment to excellence.",
  keywords:
    "about karni movers, packers and movers experience, professional moving team, relocation experts, moving company history",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <AboutSection />
        <WhyChooseUs />
        <TestimonialsSection />
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
