import { Card, CardContent } from "@/components/ui/card"
import { Truck, Home, Building2, Car, Package, Shield } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Household Shifting",
      description:
        "Complete home relocation services with professional packing and safe transportation of all household items.",
      features: ["Professional Packing", "Safe Transportation", "Unpacking Services", "Insurance Coverage"],
    },
    {
      icon: Building2,
      title: "Office Relocation",
      description: "Seamless office shifting services with minimal downtime and secure handling of office equipment.",
      features: ["IT Equipment Handling", "Furniture Dismantling", "Quick Setup", "Document Security"],
    },
    {
      icon: Car,
      title: "Vehicle Transportation",
      description: "Safe and secure car carrier services with door-to-door delivery and full insurance coverage.",
      features: ["Door to Door Service", "GPS Tracking", "Insurance Coverage", "Damage-Free Delivery"],
    },
    {
      icon: Package,
      title: "Packing Services",
      description:
        "Professional packing services using high-quality materials to ensure complete safety of your belongings.",
      features: ["Quality Materials", "Expert Packing", "Fragile Item Care", "Custom Solutions"],
    },
    {
      icon: Truck,
      title: "Loading & Unloading",
      description: "Expert loading and unloading services with trained professionals and proper equipment.",
      features: ["Trained Staff", "Proper Equipment", "Safe Handling", "Quick Service"],
    },
    {
      icon: Shield,
      title: "Storage & Warehousing",
      description: "Secure storage facilities with climate control and 24/7 security for your valuable items.",
      features: ["Climate Control", "24/7 Security", "Flexible Duration", "Easy Access"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive relocation services tailored to meet your specific needs. From household shifting to
            office relocation, we handle everything with utmost care and professionalism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
