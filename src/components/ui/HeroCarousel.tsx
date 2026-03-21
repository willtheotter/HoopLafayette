'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const slides = [
  {
    id: 1,
    title: "What's Hot?",
    subtitle: "The best of the best",
    video: "/videos/Home.mp4",
    image: "/images/Home.jpg",
    cta: "Explore",
    link: "/"
  },
  {
    id: 2,
    title: "GAME OF THE NIGHT",
    subtitle: "The best battles...",
    video: "/videos/GOTD.mp4",
    image: "/images/GOTD.jpg",
    cta: "Explore",
    link: "/gotd"
  },
  {
    id: 3,
    title: "Laffy Moments",
    subtitle: "The Best Moments and Plays at Lafayette",
    video: "/videos/Laffy.mp4",
    image: "/images/Laffy.jpg",
    cta: "Tap In",
    link: "/laffy-moments"
  },
  {
    id: 4,
    title: "SUMMER NIGHT LIGHTS",
    subtitle: "Sunday Night Lights League",
    video: "/videos/SNL.mp4",
    image: "/images/SNL.jpg",
    cta: "Watch Now",
    link: "/snl"
  },
  {
    id: 5,
    title: "New Balance Activation",
    subtitle: "Experience New Balance Allstar Activation Weekend",
    video: "/videos/NewBalance.mp4",
    image: "/images/NewBalance.jpg",
    cta: "Experience Now",
    link: "/new-balance"
  },
  {
    id: 6,
    title: "Venice Beach",
    subtitle: "The best of the legendary weekend run",
    video: "/videos/Venice.mp4",
    image: "/images/Venice.jpg",
    cta: "Check it out",
    link: "/venice-beach"
  },
  {
    id: 7,
    title: "Ballislife Takeovers",
    subtitle: "Relive the Ballislife Takeover Era",
    video: "/videos/Ballislife.mp4",
    image: "/images/Ballislife.jpg",
    cta: "Relive it",
    link: "/ballislife"
  },
  {
    id: 8,
    title: "Kobe Tribute",
    subtitle: "Pay Homage to the Black Mamba's Best Moments",
    video: "/videos/kobe.mp4",
    image: "/images/kobe.jpg",
    cta: "Pay Respect",
    link: "/kobe-tribute"
  }
]

export const HeroCarousel = () => {
  const pathname = usePathname()
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [hasInitialized, setHasInitialized] = useState(false)

  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // 🔥 Initialize carousel to start on current page
  useEffect(() => {
    const matchingIndex = slides.findIndex(slide => slide.link === pathname)
    if (matchingIndex !== -1) {
      setCurrent(matchingIndex)
    } else {
      setCurrent(0)
    }
    setHasInitialized(true)
  }, [pathname])

  // 🔥 Auto-slide - 15 seconds
  useEffect(() => {
    if (!hasInitialized || isHovered) return

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 15000) // 15 seconds

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isHovered, hasInitialized])

  // 🔥 Swipe logic
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide()
    }
    if (touchStart - touchEnd < -50) {
      prevSlide()
    }
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div
      className="relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 🔥 Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          {/* Video or Image */}
          {slides[current].video ? (
            <video
              src={slides[current].video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={slides[current].image}
              className="w-full h-full object-cover"
              alt={slides[current].title}
            />
          )}

          {/* 🔥 Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* 🔥 Content - Center aligned button */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-xl text-center px-4">
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-extrabold mb-2"
            >
              {slides[current].title}
            </motion.h2>

            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-300 mb-4"
            >
              {slides[current].subtitle}
            </motion.p>

            <motion.a
              href={slides[current].link}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-400 to-amber-600 hover:from-yellow-500 hover:to-amber-700 transition rounded-lg font-bold text-white mx-auto"
            >
              {slides[current].cta}
            </motion.a>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* 🔥 Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white text-2xl w-12 h-12 flex items-center justify-center"
        aria-label="Previous slide"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white text-2xl w-12 h-12 flex items-center justify-center"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* 🔥 Progress Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 w-[60%]">
        {slides.map((_, index) => (
          <div
            key={index}
            className="flex-1 h-[4px] bg-white/30 rounded overflow-hidden cursor-pointer"
            onClick={() => setCurrent(index)}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: current === index && !isHovered ? '100%' : '0%' }}
              transition={{ duration: 15, ease: 'linear' }} // 15 seconds
              className="h-full bg-gradient-to-r from-yellow-400 to-amber-600"
            />
          </div>
        ))}
      </div>
    </div>
  )
}