import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, Calendar, Truck, Home } from "lucide-react"

export default function ProcessSection() {
  const steps = [
    {
      icon: Phone,
      title: "Get Quote",
      description: "Contact us for a free, no-obligation quote for your moving needs.",
      step: "01",
    },
    {
      icon: Calendar,
      title: "Schedule Survey",
      description: "Our expert team visits your location for accurate assessment.",
      step: "02",
    },
    {
      icon: CheckCircle,
      title: "Confirm Booking",
      description: "Finalize your moving date and service requirements with us.",
      step: "03",
    },
    {
      icon: Truck,
      title: "Pack & Move",
      description: "Professional packing, loading, and safe transportation of your belongings.",
      step: "04",
    },
    {
      icon: Home,
      title: "Deliver & Unpack",
      description: "Timely delivery and unpacking at your new destination.",
      step: "05",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Moving Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a systematic approach to ensure your relocation is smooth, efficient, and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full mb-6 mx-auto">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
