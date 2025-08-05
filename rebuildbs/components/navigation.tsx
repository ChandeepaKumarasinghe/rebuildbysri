"use client"

import { useState } from "react"
import { Menu, Facebook, Instagram, Twitter, Linkedin, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMounted } from "@/lib/use-mounted"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false)
  const isMounted = useMounted()

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/SripaliW",
      color: "#1877F2",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/sripali_weerakkody/",
      color: "#E4405F",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/SriW07",
      color: "#1DA1F2",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/sripali-weerakkody-b457bba0/",
      color: "#0A66C2",
    },
  ]

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
      {/* Main Navigation Bar */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-[#080808]/95 backdrop-blur-md border-b-2 border-[#ff4f00]/30 h-20 flex items-center px-6 sm:px-8 shadow-2xl">
        {/* Left: Logo */}
        <div className="flex-1 flex items-center">
          <button
            onClick={() => setIsShortcutsOpen(!isShortcutsOpen)}
            className="group relative"
            aria-label="Open shortcuts"
          >
            <img
              src="/placeholder.svg?height=48&width=48"
              alt="Gym Logo"
              className="w-12 h-12 rounded-lg object-cover group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-[#ff4f00]/20"
            />
            {/* Hover effect */}
            <div className="absolute inset-0 rounded-lg bg-[#ff4f00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Center: Gym Name */}
        <div className="flex-1 flex justify-center items-center">
          <h1
            className="text-[#ff4f00] text-xl sm:text-2xl font-bold tracking-wider uppercase"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            Rebuild Ladies Only Gym
          </h1>
        </div>

        {/* Right: Menu Button */}
        <div className="flex-1 flex justify-end items-center">
          <Button
            variant="ghost"
            size="icon"
            className="text-[#c9c0bb] hover:bg-[#ff4f00] hover:text-[#080808] hover:border-[#ff4f00] transition-all duration-300 w-14 h-14 rounded-lg border-2 border-[#555555] shadow-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open menu"
          >
            {isMounted && isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>
      </nav>

      {/* Shortcuts Dropdown */}
      {isMounted && isShortcutsOpen && (
        <div className="fixed top-20 left-6 z-40 mt-2">
          <div className="bg-[#080808]/98 backdrop-blur-md border-2 border-[#ff4f00] rounded-lg p-4 shadow-2xl min-w-[200px]">
            <div className="space-y-3">
              <h3 className="text-[#ff4f00] text-sm font-bold uppercase tracking-wider mb-3 text-center">
                Follow Us
              </h3>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#ff4f00]/20 transition-all duration-300 group"
                    onClick={() => setIsShortcutsOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#555555]/30 flex items-center justify-center group-hover:bg-[#ff4f00] transition-colors duration-300">
                      <IconComponent
                        size={16}
                        className="text-[#c9c0bb] group-hover:text-[#080808] transition-colors duration-300"
                      />
                    </div>
                    <span className="text-[#c9c0bb] text-sm font-medium group-hover:text-[#ff4f00] transition-colors duration-300">
                      {social.name}
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Simple Menu Dropdown */}
      {isMounted && isMenuOpen && (
        <div className="fixed top-20 right-6 z-40 mt-2">
          <div className="bg-[#080808]/90 backdrop-blur-sm rounded-lg p-3 shadow-xl min-w-[180px]">
            <nav className="space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-[#c9c0bb] hover:text-[#ff4f00] transition-all duration-300 text-sm font-medium py-2 px-3 rounded-md hover:bg-[#ff4f00]/10"
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Backdrop for shortcuts and menu */}
      {(isShortcutsOpen || isMenuOpen) && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={() => {
            setIsShortcutsOpen(false)
            setIsMenuOpen(false)
          }}
        />
      )}
    </>
  )
}
