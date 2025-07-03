import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Users, Award, Truck, HeadphonesIcon } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete insurance coverage for your belongings during transit and storage.",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We guarantee timely delivery with real-time tracking of your shipment.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Trained and experienced professionals handle your belongings with utmost care.",
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "ISO certified services with commitment to excellence and customer satisfaction.",
    },
    {
      icon: Truck,
      title: "Modern Fleet",
      description: "Well-maintained vehicles equipped with GPS tracking and safety features.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist you throughout your relocation.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-red-600 to-orange-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Karni Packers & Movers?</h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            We are committed to providing exceptional relocation services that exceed your expectations. Here's what
            makes us the preferred choice for thousands of customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 mx-auto">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
                <p className="text-red-100 leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
