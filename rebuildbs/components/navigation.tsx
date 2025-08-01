"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMounted } from "@/lib/use-mounted"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMounted = useMounted()

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#location", label: "Location" },
    { href: "#about-owner", label: "About Owner" },
    { href: "#about-gym", label: "About Gym" },
    { href: "#gallery", label: "Gallery" },
    { href: "#trainers", label: "Trainers" },
    { href: "#join", label: "Join" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <>
      {/* Hamburger Menu Button - Fixed Position */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-6 right-6 z-50 bg-[#080808]/90 backdrop-blur-sm border-2 border-[#555555] text-[#c9c0bb] hover:bg-[#ff4f00] hover:text-[#080808] hover:border-[#ff4f00] transition-all duration-300 w-14 h-14 rounded-lg shadow-lg"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMounted && isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </Button>

      {/* Full Screen Menu Overlay */}
      {isMounted && isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-md">
          <div className="flex items-center justify-center min-h-screen p-8">
            <div className="text-center max-w-md w-full">
              {/* Logo in Menu */}
              <div className="mb-16">
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt="Gym Logo"
                  className="w-24 h-24 rounded-lg mx-auto mb-6 border-2 border-[#ff4f00]"
                />
                <h1
                  className="text-[#ff4f00] text-2xl sm:text-3xl font-bold leading-tight"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  Rebuild Ladies Only Gym
                </h1>
              </div>

              {/* Menu Items */}
              <nav className="space-y-6">
                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block text-[#c9c0bb] hover:text-[#ff4f00] transition-all duration-300 text-2xl sm:text-3xl font-medium py-3 px-6 rounded-lg hover:bg-[#555555]/20 border-2 border-transparent hover:border-[#ff4f00]/30"
                    style={{
                      fontFamily: "Helvetica, Arial, sans-serif",
                      animationDelay: `${index * 0.1}s`,
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Close instruction */}
              <p className="text-[#555555] text-sm mt-12" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                Click anywhere outside or press ESC to close
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
