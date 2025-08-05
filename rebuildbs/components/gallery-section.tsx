"use client"

import { useState, useRef, useEffect } from "react"
import { Maximize, X } from "lucide-react"

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxContent, setLightboxContent] = useState<{ type: string; src: string; poster?: string } | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const gridRef = useRef<HTMLDivElement>(null)

  const galleryItems = [
    { type: "image", src: "https://i.pinimg.com/736x/29/d6/c5/29d6c5741c01b385f25e3a2ec38a8ab0.jpg", alt: "Image 1" },
    { type: "video", src: "https://res.cloudinary.com/deygx3lzf/video/upload/v1752759657/cks_aapmyf.mp4", poster: "https://i.pinimg.com/736x/44/83/4a/44834ae3cb82f8bf25029d0fc93d12b2.jpg", alt: "Video 1" },
    { type: "image", src: "https://i.pinimg.com/736x/ae/1c/71/ae1c7114b4482fa7e099068dc8a26910.jpg", alt: "Image 2" },
    { type: "video", src: "https://res.cloudinary.com/deygx3lzf/video/upload/v1752759657/cks_aapmyf.mp4", poster: "https://i.pinimg.com/736x/2f/2b/11/2f2b11925fbcffc8a347bf5b3f2f6312.jpg", alt: "Video 2" },
    { type: "image", src: "https://i.pinimg.com/736x/6e/99/e5/6e99e51df2f0ca865e3954ca05ba2264.jpg", alt: "Image 3" },
    { type: "video", src: "https://res.cloudinary.com/deygx3lzf/video/upload/v1752759657/cks_aapmyf.mp4", poster: "https://i.pinimg.com/736x/58/5e/38/585e38a4af70e8a498bd18c11fb6f316.jpg", alt: "Video 3" },

  ]

  // Ensure videoRefs array matches galleryItems length
  useEffect(() => {
    videoRefs.current = Array(galleryItems.length).fill(null)
  }, [galleryItems.length])

  // Resize logic for masonry grid
  const resizeAllItems = () => {
    const grid = gridRef.current
    if (!grid) return

    const items = grid.querySelectorAll(".masonry-item")
    items.forEach((item, index) => {
      const el = item as HTMLElement
      if (window.innerWidth >= 768) {
        if (index % 8 === 0) {
          el.style.gridColumn = "span 2"
          el.style.gridRow = "span 2"
        } else if (index % 8 === 3) {
          el.style.gridColumn = "span 2"
        } else if (index % 8 === 6) {
          el.style.gridRow = "span 2"
        } else {
          el.style.gridColumn = "span 1"
          el.style.gridRow = "span 1"
        }
      } else {
        el.style.gridColumn = "span 1"
        el.style.gridRow = "span 1"
      }
    })
  }

  useEffect(() => {
    if (!gridRef.current) return
    const observer = new ResizeObserver(() => {
      resizeAllItems()
    })
    observer.observe(gridRef.current)
    resizeAllItems()
    return () => observer.disconnect()
  }, [])

  // Video intersection observer for auto play/pause
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      })
    }, { threshold: 0.5 })

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video)
    })

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video)
      })
    }
  }, [galleryItems.length])

  const openLightbox = (item: { type: string; src: string; poster?: string }) => {
    setLightboxContent(item)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <section id="gallery" className="py-12 bg-[#080808]">
      <div className="container mx-auto px-4">
        <h2 className="text-[#ff4f00] text-3xl sm:text-4xl font-bold text-center mb-8">Gallery</h2>
        <div
          ref={gridRef}
          className="masonry-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="masonry-item relative overflow-hidden rounded-lg group cursor-pointer aspect-square"
              onClick={(e) => {
                const target = e.target as HTMLElement
                if (target.tagName !== "VIDEO" && !target.closest("button")) openLightbox(item)
              }}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="relative w-full h-full">
                  <video
                    ref={(el) => { videoRefs.current[index] = el; }}
                    src={item.src}
                    poster={item.poster}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-1.5 animate-pulse" />
                    VIDEO
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Maximize className="text-white w-8 h-8" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && lightboxContent && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center">
              <button
                onClick={closeLightbox}
                className="absolute -top-10 right-0 text-white hover:text-[#ff4f00] z-10"
              >
                <X className="w-8 h-8" />
              </button>
              {lightboxContent.type === "image" ? (
                <img 
                  src={lightboxContent.src} 
                  alt="" 
                  className="max-w-full max-h-[80vh] w-auto h-auto object-contain" 
                />
              ) : (
                <video
                  src={lightboxContent.src}
                  poster={lightboxContent.poster}
                  className="max-w-full max-h-[80vh] w-auto h-auto"
                  controls
                  autoPlay
                  loop
                />
              )}
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .masonry-grid {
          display: grid;
          grid-auto-flow: dense;
        }
        .masonry-item[style*="span 2"] {
          aspect-ratio: unset;
        }
        @media (min-width: 768px) {
          .masonry-item:nth-child(8n+1) {
            grid-column: span 2;
            grid-row: span 2;
            aspect-ratio: unset;
          }
          .masonry-item:nth-child(8n+4) {
            grid-column: span 2;
            aspect-ratio: unset;
          }
          .masonry-item:nth-child(8n+7) {
            grid-row: span 2;
            aspect-ratio: unset;
          }
        }
        @media (max-width: 767px) {
          .masonry-grid {
            grid-auto-rows: auto;
          }
          .masonry-item {
            aspect-ratio: 1/1;
          }
        }
      `}</style>
    </section>
  )
}