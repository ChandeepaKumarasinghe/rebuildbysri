"use client"

import { useState, useRef } from "react"
import { Play, Pause } from "lucide-react"
import { useMounted } from "@/lib/use-mounted"

export function GallerySection() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)
  const isMounted = useMounted()
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const galleryItems = [
    { type: "image", src: "https://i.pinimg.com/736x/29/d6/c5/29d6c5741c01b385f25e3a2ec38a8ab0.jpg", alt: "Gallery Image 1" },
    { type: "image", src: "https://i.pinimg.com/736x/44/83/4a/44834ae3cb82f8bf25029d0fc93d12b2.jpg", alt: "Gallery Image 2" },
    { type: "image", src: "https://i.pinimg.com/736x/ae/1c/71/ae1c7114b4482fa7e099068dc8a26910.jpg", alt: "Gallery Image 3" },
    { type: "image", src: "https://i.pinimg.com/736x/2f/2b/11/2f2b11925fbcffc8a347bf5b3f2f6312.jpg", alt: "Gallery Image 4" },
    { type: "image", src: "https://i.pinimg.com/736x/6e/99/e5/6e99e51df2f0ca865e3954ca05ba2264.jpg", alt: "Gallery Image 5" },
    { type: "image", src: "https://i.pinimg.com/736x/58/5e/38/585e38a4af70e8a498bd18c11fb6f316.jpg", alt: "Gallery Image 6" },
    {
      type: "video",
      src: "https://res.cloudinary.com/deygx3lzf/video/upload/v1752759657/cks_aapmyf.mp4",
      alt: "Workout Session",
      poster: "https://i.pinimg.com/736x/29/d6/c5/29d6c5741c01b385f25e3a2ec38a8ab0.jpg",
    },
    {
      type: "video",
      src: "https://res.cloudinary.com/deygx3lzf/video/upload/v1752759657/cks_aapmyf.mp4",
      alt: "Strength Training",
      poster: "https://i.pinimg.com/736x/44/83/4a/44834ae3cb82f8bf25029d0fc93d12b2.jpg",
    },
    {
      type: "video",
      src: "https://res.cloudinary.com/deygx3lzf/video/upload/v1752759657/cks_aapmyf.mp4",
      alt: "Personal Training",
      poster: "https://i.pinimg.com/736x/ae/1c/71/ae1c7114b4482fa7e099068dc8a26910.jpg",
    },
    {
      type: "video",
      src: "https://res.cloudinary.com/deygx3lzf/video/upload/v1752759657/cks_aapmyf.mp4",
      alt: "Cardio Session",
      poster: "https://i.pinimg.com/736x/2f/2b/11/2f2b11925fbcffc8a347bf5b3f2f6312.jpg",
    },
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
