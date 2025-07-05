import type { Metadata } from "next"
import Header from "@/components/header"
import ServicesSection from "@/components/services-section"
import ProcessSection from "@/components/process-section"
import Footer from "@/components/footer"
import FloatingButtons from "@/components/floating-buttons"
import ServiceAreas from "@/components/ServiceAreas"

export const metadata: Metadata = {
  title: "Our Services - Karni packers and movers | Complete Relocation Solutions",
  description:
    "Comprehensive moving services including household shifting, office relocation, car transportation, packing services, and storage solutions across India.",
  keywords:
    "moving services, household shifting, office relocation, car transportation, packing services, storage solutions, professional movers",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <ServicesSection />
        <ProcessSection />
      </div>
      <ServiceAreas/>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
