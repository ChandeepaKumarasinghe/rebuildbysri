import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
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

  return (
    <footer className="py-8 sm:py-12 bg-[#080808] text-center border-t-2 border-[#ff4f00]">
      <div className="container mx-auto px-4">
        {/* Logo and Title */}
        <div className="flex items-center justify-center mb-6">
          <img src="/placeholder.svg?height=40&width=40" alt="Gym Logo" className="w-10 h-10 rounded mr-3" />
          <h3
            className="text-[#ff4f00] text-xl sm:text-2xl font-bold"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            Rebuild Ladies Only Gym
          </h3>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social) => {
            const IconComponent = social.icon
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label={social.name}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#555555]/30 rounded-full flex items-center justify-center border-2 border-[#555555] group-hover:border-[#ff4f00] group-hover:bg-[#ff4f00] transition-all duration-300 group-hover:scale-110">
                  <IconComponent
                    size={24}
                    className="text-[#c9c0bb] group-hover:text-[#080808] transition-colors duration-300"
                  />
                </div>
                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#ff4f00] text-[#080808] px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.name}
                </span>
              </a>
            )
          })}
        </div>

        {/* Copyright */}
        <div className="border-t border-[#555555] pt-6">
          <p className="text-[#c9c0bb] text-sm sm:text-base" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
            © 2025 Rebuild Ladies Only Gym by Sripali Weerakkody. All rights reserved.
          </p>
          <p className="text-[#555555] text-xs sm:text-sm mt-2" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
            Empowering women through fitness since 2010
          </p>
        </div>
      </div>
    </footer>
  )
}
