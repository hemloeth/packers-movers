"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Shield, Clock, Award } from "lucide-react"

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    shiftingFrom: "",
    shiftingTo: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Professional Packing and Moving Services"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Professional
                <span className="text-red-600 block">Relocation Services</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Trusted packers and movers with 15+ years of experience. We make your relocation stress-free with our
                professional packing, safe transportation, and timely delivery services.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <Shield className="w-8 h-8 text-red-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">100% Safe</h3>
                  <p className="text-sm text-gray-600">Secure Packing</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <Clock className="w-8 h-8 text-red-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">On Time</h3>
                  <p className="text-sm text-gray-600">Delivery</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <Award className="w-8 h-8 text-red-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Trusted</h3>
                  <p className="text-sm text-gray-600">Service</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Right Content - Enquiry Form */}
          <div className="lg:ml-8">
            <Card id="contact" className="bg-gradient-to-br from-orange-400 to-red-500 border-0 shadow-2xl">
              <CardContent className="p-4 sm:p-8">
                <h2 className="text-2xl font-bold text-white text-center mb-4 sm:mb-6">Enquire Now</h2>
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <Input
                      name="name"
                      placeholder="Name..."
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/90 border-0 placeholder:text-gray-500"
                      required
                    />
                    <Input
                      name="mobile"
                      placeholder="Mobile..."
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="bg-white/90 border-0 placeholder:text-gray-500"
                      required
                    />
                  </div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email..."
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white/90 border-0 placeholder:text-gray-500"
                    required
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <Input
                      name="shiftingFrom"
                      placeholder="Shifting From..."
                      value={formData.shiftingFrom}
                      onChange={handleInputChange}
                      className="bg-white/90 border-0 placeholder:text-gray-500"
                      required
                    />
                    <Input
                      name="shiftingTo"
                      placeholder="Shifting To..."
                      value={formData.shiftingTo}
                      onChange={handleInputChange}
                      className="bg-white/90 border-0 placeholder:text-gray-500"
                      required
                    />
                  </div>
                  <Textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white/90 border-0 placeholder:text-gray-500 min-h-[80px] sm:min-h-[100px]"
                    rows={4}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 text-lg"
                  >
                    Send Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
