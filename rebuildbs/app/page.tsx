import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LocationSection } from "@/components/location-section"
import { AboutOwnerSection } from "@/components/about-owner-section"
import { AboutGymSection } from "@/components/about-gym-section"
import { GallerySection } from "@/components/gallery-section"
import { TrainersSection } from "@/components/trainers-section"
import { JoinFormSection } from "@/components/join-form-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="bg-[#080808] text-[#c9c0bb]" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
      <Navigation />
      <HeroSection />
      <LocationSection />
      <AboutOwnerSection />
      <AboutGymSection />
      <GallerySection />
      <TrainersSection />
      <JoinFormSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
