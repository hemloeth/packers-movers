import type { Metadata } from "next"
import Header from "@/components/header"
import ServicesSection from "@/components/services-section"
import ProcessSection from "@/components/process-section"
import Footer from "@/components/footer"
import FloatingButtons from "@/components/floating-buttons"

export const metadata: Metadata = {
  title: "Our Services - Karni Movers and Packers | Complete Relocation Solutions",
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
      <Footer />
      <FloatingButtons />
    </div>
  )
}
