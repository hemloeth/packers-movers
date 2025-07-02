"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const images = [
    {
      src: "/carousel/image1.png",
      alt: "Professional Movers Packing Services",
      title: "Professional Packing Services",
      description: "Expert team handling your belongings with utmost care",
    },
    {
      src: "/carousel/image2.png",
      alt: "Loading and Unloading Services",
      title: "Safe Loading & Unloading",
      description: "Trained professionals with proper equipment",
    },
    {
      src: "/carousel/image3.png",
      alt: "Quality Packing Materials",
      title: "Quality Packing Materials",
      description: "High-grade materials for maximum protection",
    },
    {
      src: "/carousel/image4.png",
      alt: "Complete Moving Solutions",
      title: "Complete Moving Solutions",
      description: "End-to-end relocation services for your peace of mind",
    },
    {
      src: "/carousel/image5.png",
      alt: "Karni Movers Team",
      title: "Experienced Team",
      description: "15+ years of trusted moving experience",
    },
    {
      src: "/carousel/image6.png",
      alt: "Professional Moving Services",
      title: "Professional Service",
      description: "Reliable and efficient moving solutions",
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, images.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Professional Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See our expert team in action providing top-quality moving and packing services
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-0">
            <CardContent className="p-0 relative">
              {/* Main Image */}
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                <Image
                  src={images[currentIndex].src || "/placeholder.svg"}
                  alt={images[currentIndex].alt}
                  fill
                  className="object-cover transition-all duration-500"
                  priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{images[currentIndex].title}</h3>
                  <p className="text-lg md:text-xl opacity-90">{images[currentIndex].description}</p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg"
                onClick={goToPrevious}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg"
                onClick={goToNext}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Auto-play Toggle */}
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-white/90 hover:bg-white border-0 shadow-lg"
                onClick={toggleAutoPlay}
              >
                {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </Button>
            </CardContent>
          </Card>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-2 mt-6 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex ? "border-red-500 shadow-lg scale-110" : "border-gray-300 hover:border-red-300"
                }`}
              >
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              </button>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-red-500 scale-125" : "bg-gray-300 hover:bg-red-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
