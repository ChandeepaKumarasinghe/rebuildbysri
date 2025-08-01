import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 bg-[#080808] border-b border-[#ff4f00]">
      <div className="container mx-auto px-4">
        <h2
          className="text-[#ff4f00] text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <div className="text-center md:text-left">
            <h3
              className="text-[#ff4f00] text-lg sm:text-xl font-bold mb-4 flex items-center justify-center md:justify-start gap-2"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              <MapPin size={20} />
              Visit Us
            </h3>
            <div
              className="text-[#c9c0bb] space-y-2 text-sm sm:text-base"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              <p>84 Thimbirigasyaya Rd</p>
              <p>Colombo 00500, Sri Lanka</p>
              <div className="flex items-center justify-center md:justify-start gap-2 mt-4">
                <Clock size={18} />
                <p>Opening Hours: 6AM - 10PM Daily</p>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3
              className="text-[#ff4f00] text-lg sm:text-xl font-bold mb-4"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              Contact Info
            </h3>
            <div
              className="text-[#c9c0bb] space-y-2 text-sm sm:text-base"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone size={18} />
                <p>+94 11 234 5678</p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail size={18} />
                <p>info@rebuildgym.com</p>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3
              className="text-[#ff4f00] text-lg sm:text-xl font-bold mb-4"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              Follow Us
            </h3>
            <div
              className="text-[#c9c0bb] space-y-2 mb-4 text-sm sm:text-base"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              <p>Stay connected on social media</p>
            </div>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff4f00] hover:text-[#c9c0bb] transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff4f00] hover:text-[#c9c0bb] transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff4f00] hover:text-[#c9c0bb] transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff4f00] hover:text-[#c9c0bb] transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
