"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const heroImages = [
  {
    url: "/poultry-feeder-equipment.jpg",
    alt: "Poultry feeder equipment",
  },
  {
    url: "/livestock-feeding-system.jpg",
    alt: "Livestock feeding system",
  },
  {
    url: "/automatic-feed-dispensing.jpg",
    alt: "Automatic feed dispensing system",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="home" className="relative h-96 md:h-screen bg-black overflow-hidden">
      {/* Carousel */}
      <div className="relative w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={image.url || "/placeholder.svg"} alt={image.alt} fill className="object-cover" priority />
          </div>
        ))}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-balance">
          Feeding Innovation.
          <br />
          Sustaining Growth.
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl text-balance">
          Your trusted partner for quality animal feeder equipment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg">
            Explore Products
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent"
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
