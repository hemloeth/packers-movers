"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

export default function ModernImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const images = [
    {
      src: "/carousel/image1.png",
      alt: "Professional Movers Packing Services",
      title: "Professional Packing",
      description: "Expert handling with care",
    },
    {
      src: "/carousel/image2.png",
      alt: "Loading and Unloading Services",
      title: "Safe Transport",
      description: "Trained professionals",
    },
    {
      src: "/carousel/image3.png",
      alt: "Quality Packing Materials",
      title: "Premium Materials",
      description: "Maximum protection",
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, images.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  return (
      <section className="py-16 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quality moving and packing services
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Modern Card Carousel */}
            <Card className="overflow-hidden shadow-lg border-0 rounded-xl">
              <CardContent className="p-0 relative group">
                {/* Image with fade animation */}
                <div className="relative h-[400px] w-full">
                  {images.map((image, index) => (
                      <div
                          key={index}
                          className={`absolute inset-0 transition-opacity duration-500 ${
                              index === currentIndex ? "opacity-100" : "opacity-0"
                          }`}
                      >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            priority={index === currentIndex}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      </div>
                  ))}
                </div>

                {/* Content with slide-up animation */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500 translate-y-0">
                  <h3 className="text-2xl font-bold mb-1">{images[currentIndex].title}</h3>
                  <p className="text-gray-200">{images[currentIndex].description}</p>
                </div>

                {/* Minimal Navigation Arrows (appear on hover) */}
                <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                      variant="ghost"
                      size="icon"
                      className="bg-white/80 hover:bg-white text-gray-900 rounded-full shadow-md"
                      onClick={goToPrev}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                      variant="ghost"
                      size="icon"
                      className="bg-white/80 hover:bg-white text-gray-900 rounded-full shadow-md"
                      onClick={goToNext}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>

                {/* Play/Pause Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-900 rounded-full shadow-md"
                    onClick={toggleAutoPlay}
                >
                  {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
              </CardContent>
            </Card>

            {/* Modern Dot Indicators */}
            <div className="flex justify-center mt-6 gap-1">
              {images.map((_, index) => (
                  <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-8 h-1.5 rounded-full transition-all duration-300 ${
                          index === currentIndex ? "bg-red-500 w-12" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                  />
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}
