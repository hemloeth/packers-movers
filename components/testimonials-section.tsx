"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Delhi to Mumbai",
      rating: 5,
      text: "Excellent service! The team was professional and handled all our belongings with great care. Highly recommended for anyone looking for reliable packers and movers.",
      service: "Household Shifting",
    },
    {
      name: "Priya Sharma",
      location: "Bangalore to Pune",
      rating: 5,
      text: "Karni Movers made our office relocation seamless. They completed the entire process within the promised timeframe without any damage to our equipment.",
      service: "Office Relocation",
    },
    {
      name: "Amit Patel",
      location: "Chennai to Hyderabad",
      rating: 5,
      text: "Outstanding car transportation service. My car was delivered safely and on time. The GPS tracking feature gave me peace of mind throughout the journey.",
      service: "Car Transportation",
    },
    {
      name: "Sunita Gupta",
      location: "Kolkata to Ahmedabad",
      rating: 5,
      text: "Professional packing and courteous staff. They took extra care of fragile items and everything reached safely. Great value for money!",
      service: "Household Shifting",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white shadow-2xl border-0">
            <CardContent className="p-12">
              <div className="text-center">
                <Quote className="w-12 h-12 text-red-500 mx-auto mb-6" />

                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-red-600 font-medium">{testimonials[currentIndex].service}</p>
                  <p className="text-gray-600">{testimonials[currentIndex].location}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-red-200 hover:bg-red-50 bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-red-200 hover:bg-red-50 bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-red-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
