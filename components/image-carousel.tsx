"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

export default function ModernHeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

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

  const minSwipeDistance = 50

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, images.length])

  const goToSlide = (index) => setCurrentIndex(index)
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % images.length)
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  const toggleAutoPlay = () => setIsAutoPlaying(!isAutoPlaying)

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX)
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > minSwipeDistance) goToNext()
    if (distance < -minSwipeDistance) goToPrev()
    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <section className="relative h-[30vh] sm:h-[50vh] md:h-screen w-full overflow-hidden bg-gradient-to-br from-gray-50 to-red-50">
      <div
        className="relative h-full w-full touch-pan-x"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
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
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        {/* Slide content */}
        <div className="absolute bottom-0 left-0 right-0 px-3 sm:px-4 md:px-6 py-3 text-white z-10">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">
            {images[currentIndex].title}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-gray-200">
            {images[currentIndex].description}
          </p>
        </div>

        {/* Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 md:px-6 z-20">
          <button
            className="bg-white/80 hover:bg-white text-gray-900 rounded-full shadow-md p-2 sm:p-2.5 transition-all duration-300"
            onClick={goToPrev}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            className="bg-white/80 hover:bg-white text-gray-900 rounded-full shadow-md p-2 sm:p-2.5 transition-all duration-300"
            onClick={goToNext}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Play/Pause */}
        <button
          className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/80 hover:bg-white text-gray-900 rounded-full shadow-md p-2 transition-all duration-300 z-20"
          onClick={toggleAutoPlay}
        >
          {isAutoPlaying ? (
            <Pause className="w-3 h-3 sm:w-4 sm:h-4" />
          ) : (
            <Play className="w-3 h-3 sm:w-4 sm:h-4" />
          )}
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-5 h-1 sm:w-6 md:w-8 h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-red-500 md:w-10"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
