"use client"

import { useState, useRef } from "react"
import { Play, Pause } from "lucide-react"
import { useMounted } from "@/lib/use-mounted"

export function GallerySection() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)
  const isMounted = useMounted()
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const galleryItems = [
    { type: "image", src: "/placeholder.svg?height=300&width=300", alt: "Gym Equipment" },
    {
      type: "video",
      src: "https://res.cloudinary.com/deygx3lzf/video/upload/v1752759657/cks_aapmyf.mp4",
      alt: "Workout Session",
      poster: "/placeholder.svg?height=400&width=600",
    },
    { type: "image", src: "/placeholder.svg?height=300&width=500", alt: "Yoga Class" },
    { type: "image", src: "/placeholder.svg?height=500&width=300", alt: "Cardio Machines" },
    {
      type: "video",
      src: "https://res.cloudinary.com/deygx3lzf/video/upload/v1752759657/cks_aapmyf.mp4",
      alt: "Strength Training",
      poster: "/placeholder.svg?height=300&width=300",
    },
    { type: "image", src: "/placeholder.svg?height=400&width=600", alt: "Group Fitness" },
    { type: "image", src: "/placeholder.svg?height=300&width=500", alt: "Pilates Class" },
    {
      type: "video",
      src: "https://res.cloudinary.com/deygx3lzf/video/upload/v1752759657/cks_aapmyf.mp4",
      alt: "Personal Training",
      poster: "/placeholder.svg?height=500&width=300",
    },
    { type: "image", src: "/placeholder.svg?height=300&width=300", alt: "Gym Interior" },
    { type: "image", src: "/placeholder.svg?height=400&width=600", alt: "Equipment Area" },
    {
      type: "video",
      src: "https://res.cloudinary.com/deygx3lzf/video/upload/v1752759657/cks_aapmyf.mp4",
      alt: "Cardio Session",
      poster: "/placeholder.svg?height=300&width=500",
    },
    { type: "image", src: "/placeholder.svg?height=500&width=300", alt: "Fitness Class" },
  ]

  const handleVideoClick = (index: number) => {
    if (!isMounted) return
    
    const video = videoRefs.current[index]
    if (!video) return

    if (playingVideo === index) {
      video.pause()
      setPlayingVideo(null)
    } else {
      // Pause all other videos
      videoRefs.current.forEach((v, i) => {
        if (v && i !== index) {
          v.pause()
        }
      })
      video.play()
      setPlayingVideo(index)
    }
  }

  return (
    <section id="gallery" className="py-12 sm:py-16 bg-[#080808]">
      <div className="container mx-auto px-4">
        <h2
          className="text-[#ff4f00] text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          Gallery
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 auto-rows-[150px] sm:auto-rows-[200px]">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300 ${
                index % 7 === 1
                  ? "sm:col-span-2 sm:row-span-2"
                  : index % 5 === 2
                    ? "lg:col-span-2"
                    : index % 6 === 3
                      ? "lg:row-span-2"
                      : ""
              }`}
            >
              {item.type === "image" ? (
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <div className="relative w-full h-full">
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el
                    }}
                    src={item.src}
                    poster={item.poster}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    autoPlay
                    loop
                    muted
                    playsInline
                    onClick={() => handleVideoClick(index)}
                  />
                  {isMounted && (
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#080808]/30"
                      onClick={() => handleVideoClick(index)}
                    >
                      {playingVideo === index ? (
                        <Pause className="text-[#ff4f00] w-8 h-8 sm:w-12 sm:h-12" />
                      ) : (
                        <Play className="text-[#ff4f00] w-8 h-8 sm:w-12 sm:h-12" />
                      )}
                    </div>
                  )}
                </div>
              )}
              <div className="absolute inset-0 bg-[#080808]/20 group-hover:bg-[#080808]/40 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
