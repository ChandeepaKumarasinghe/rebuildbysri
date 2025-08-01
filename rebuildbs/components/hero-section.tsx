"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://res.cloudinary.com/deygx3lzf/video/upload/v1752759657/cks_aapmyf.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Gym Background"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-[#080808]/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1
          className={`text-[#ff4f00] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 uppercase tracking-wider transition-all duration-1000 leading-tight drop-shadow-lg ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          Rebuild Your Body
        </h1>
        <h2
          className={`text-[#c9c0bb] text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-8 transition-all duration-1000 delay-300 leading-relaxed px-2 drop-shadow-md ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          {"With Sripali Weerakkody's expert guidance"}
        </h2>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-[#c9c0bb] text-center transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
      >
        <p className="text-xs sm:text-sm mb-2">Scroll to explore</p>
        <ChevronDown className="mx-auto animate-bounce" size={20} />
      </div>
    </section>
  )
}
