"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

export default function ModernHeroCarousel() {
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

  const goToSlide = (index) => {
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
      <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-50 to-red-50">
        <div className="relative h-full w-full">
          {/* Image with slide animation */}
          <div className="relative h-full w-full">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                        index === currentIndex
                            ? "translate-x-0"
                            : index < currentIndex
                                ? "-translate-x-full"
                                : "translate-x-full"
                    }`}
                >
                  <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
            ))}
          </div>

          {/* Content with slide-up animation */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500 translate-y-0 z-10">
            <h3 className="text-2xl font-bold mb-1">{images[currentIndex].title}</h3>
            <p className="text-gray-200">{images[currentIndex].description}</p>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 hover:opacity-100 transition-opacity z-20 group">
            <button
                className="bg-white/80 hover:bg-white text-gray-900 rounded-full shadow-md p-2 transition-all duration-300"
                onClick={goToPrev}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
                className="bg-white/80 hover:bg-white text-gray-900 rounded-full shadow-md p-2 transition-all duration-300"
                onClick={goToNext}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Play/Pause Button */}
          <button
              className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-900 rounded-full shadow-md p-2 transition-all duration-300 z-20"
              onClick={toggleAutoPlay}
          >
            {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>

        {/* Modern Dot Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-1 z-20">
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
      </section>
  )
}
