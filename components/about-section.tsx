import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Shield } from "lucide-react"

export default function AboutSection() {
  const stats = [
    { icon: Users, number: "10,000+", label: "Happy Customers" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Clock, number: "24/7", label: "Customer Support" },
    { icon: Shield, number: "100%", label: "Safe Delivery" },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Karni Movers & Packers</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  With over 15 years of experience in the relocation industry, Karni Movers and Packers has established
                  itself as one of the most trusted names in professional moving services. We are blessed by Maa Karni
                  and committed to providing exceptional relocation solutions across India.
                </p>
                <p>
                  Our team of experienced professionals understands the emotional and physical challenges of relocating.
                  That's why we offer comprehensive services that take care of every aspect of your move, from careful
                  packing to safe transportation and timely delivery.
                </p>
                <p>
                  We use high-quality packing materials, modern equipment, and well-maintained vehicles to ensure your
                  belongings reach their destination in perfect condition. Our commitment to excellence has earned us
                  the trust of thousands of satisfied customers.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="border-0 bg-gradient-to-br from-red-50 to-orange-50">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-8 h-8 text-red-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Professional Moving Team"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <Card className="absolute -bottom-8 -left-8 bg-white shadow-2xl border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">ISO Certified</div>
                    <div className="text-sm text-gray-600">Quality Assured Services</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
