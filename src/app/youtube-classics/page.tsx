'use client'

import { useState, useEffect, useRef } from 'react'
import { Header } from '@/components/layout/Header'
import { ThemePage } from '@/components/layout/ThemePage'
import { SideNavigation } from '@/components/layout/SideNavigation'
import { ThemeBanner } from '@/components/ui/ThemeBanner'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { ThemeAnimations } from '@/components/ui/ThemeAnimations'
import Link from 'next/link'

const youtubeClassicsContent = [
  // ========== 1v1s (10 unique videos) ==========
  { id: '1v1-1', videoId: 'v9NIs3t44KQ', category: '1v1s' },
  { id: '1v1-2', videoId: '9CGs24RzUGY', category: '1v1s' },
  { id: '1v1-3', videoId: 'O5exGBjHAHI', category: '1v1s' },
  { id: '1v1-4', videoId: 'xvmF-m33Zlk', category: '1v1s' },
  { id: '1v1-5', videoId: 'UMCwkIkgT9E', category: '1v1s' },
  { id: '1v1-6', videoId: 'xv90tSI_GCM', category: '1v1s' },
  { id: '1v1-7', videoId: '3rqflHygnBI', category: '1v1s' },
  { id: '1v1-8', videoId: 'Kc5Ecn5RLb8', category: '1v1s' },
  { id: '1v1-9', videoId: 'cf1TzCLnCtg', category: '1v1s' },
  { id: '1v1-10', videoId: 'CuW120sT24U', category: '1v1s' },

  // ========== 3v3s (7 unique videos) ==========
  { id: '3v3-1', videoId: 'O8uEUKbIhcU', category: '3v3s' },
  { id: '3v3-2', videoId: 'toGjoqddRSM', category: '3v3s' },
  { id: '3v3-3', videoId: 'Q90SapWnX-w', category: '3v3s' },
  { id: '3v3-4', videoId: 'EE1xnkI8iY4', category: '3v3s' },
  { id: '3v3-5', videoId: '8w9UI870464', category: '3v3s' },
  { id: '3v3-6', videoId: '73Q3jluUTZU', category: '3v3s' },
  { id: '3v3-7', videoId: 'w4-3Tibs6F4', category: '3v3s' },

  // ========== Takeovers (10 unique videos) ==========
  { id: 'take-1', videoId: '6GY3I2Upguo', category: 'Takeovers' },
  { id: 'take-2', videoId: 'D1dKDltXqfQ', category: 'Takeovers' },
  { id: 'take-3', videoId: 'Ofy2VAr54L8', category: 'Takeovers' },
  { id: 'take-4', videoId: '3RHGrXRTfjI', category: 'Takeovers' },
  { id: 'take-5', videoId: 'kdMH_Mcb9qM', category: 'Takeovers' },
  { id: 'take-6', videoId: 'emdn3zt8pUk', category: 'Takeovers' },
  { id: 'take-7', videoId: 'XC-CSwyC6tU', category: 'Takeovers' },
  { id: 'take-8', videoId: 'z3ItWfcRhRo', category: 'Takeovers' },
  { id: 'take-9', videoId: 'f1RjlDhbAEY', category: 'Takeovers' },
  { id: 'take-10', videoId: 'YVFYpwaY3xY', category: 'Takeovers' },

  // ========== Events (14 unique videos) ==========
  { id: 'event-1', videoId: 'OJixT7F-Vog', category: 'Events' },
  { id: 'event-2', videoId: 'IQX-UGea3Cg', category: 'Events' },
  { id: 'event-3', videoId: 'aLBlVvRQty8', category: 'Events' },
  { id: 'event-4', videoId: 'mZSGGS52FMA', category: 'Events' },
  { id: 'event-5', videoId: 'gpDx3DIUx8w', category: 'Events' },
  { id: 'event-6', videoId: '7y7HgmdyZs4', category: 'Events' },
  { id: 'event-7', videoId: 'bCQkw_NiBkA', category: 'Events' },
  { id: 'event-8', videoId: 'TxR0WRH3ukU', category: 'Events' },
  { id: 'event-9', videoId: 'oax9gE6v978', category: 'Events' },
  { id: 'event-10', videoId: '4PWjzads1k4', category: 'Events' },
  { id: 'event-11', videoId: '9_WOUhOTK0Y', category: 'Events' },
  { id: 'event-12', videoId: 'k4WyTkFm6SY', category: 'Events' },
  { id: 'event-13', videoId: 'WuhYCP6Y91M', category: 'Events' },
  { id: 'event-14', videoId: 'qZXztdG-43c', category: 'Events' },
]

// Improved YouTube Component with lazy loading, loading states, and error handling
const YouTubeClassicCard = ({ videoId }: { videoId: string }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: '200px' } // Load when within 200px of viewport
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [isInView])

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const handleIframeError = () => {
    setHasError(true)
    setIsLoading(false)
  }

  // YouTube thumbnail URL for placeholder
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  const fallbackThumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&modestbranding=1&rel=0&showinfo=0`

  return (
    <div className="group relative transition-all duration-500 hover:-translate-y-2">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition duration-300" />
      <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-yellow-500/30 group-hover:border-yellow-400/70 transition-all duration-300">
        <div ref={containerRef} className="aspect-video w-full relative bg-black/80">
          {/* Loading State */}
          {isLoading && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/60">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 border-3 border-yellow-400 border-t-transparent rounded-full animate-spin" />
                <p className="text-xs text-yellow-400/80">Loading video...</p>
              </div>
            </div>
          )}

          {/* Error State */}
          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/80">
              <div className="text-center p-4">
                <svg className="w-12 h-12 text-red-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <p className="text-red-400 text-sm mb-2">Failed to load video</p>
                <a 
                  href={`https://www.youtube.com/watch?v=${videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 text-xs underline hover:text-yellow-300"
                >
                  Watch on YouTube →
                </a>
              </div>
            </div>
          )}

          {/* Thumbnail Placeholder (shows while loading) */}
          {isLoading && !hasError && (
            <div className="absolute inset-0 z-5">
              <img 
                src={thumbnailUrl}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to standard quality if maxres doesn't exist
                  (e.target as HTMLImageElement).src = fallbackThumbnail
                }}
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* YouTube Iframe - only loads when in viewport */}
          {isInView && !hasError && (
            <iframe
              src={youtubeUrl}
              title={`YouTube classic video ${videoId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default function YouTubeClassicsPage() {
  const [mounted, setMounted] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    setMounted(true)
  }, [])

  // Filter videos based on selected category
  const filteredContent = activeCategory === 'All' 
    ? youtubeClassicsContent 
    : youtubeClassicsContent.filter(item => item.category === activeCategory)

  if (!mounted) return null

  return (
    <ThemePage theme="gold">
      <Header />
      
      <main className="relative flex min-h-screen text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/40 via-black/50 to-yellow-950/40 pointer-events-none" />
        
        <SideNavigation />

        <div className="relative flex-1 px-4 py-6 lg:px-8 z-10">
          <ThemeBanner 
            theme="gold"
            title="Basketball Classics"
            subtitle="The best 1v1s, 3v3s, Takeovers and Events"
            pattern="dots"
            size="xl"
          />

          <SectionDivider theme="gold" variant="wave" className="my-12 opacity-50" />

          {/* Categories Section */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {['All', '1v1s', '3v3s', 'Takeovers', 'Events'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-yellow-500 text-black border-yellow-400 font-bold shadow-lg shadow-yellow-500/30'
                      : 'bg-black/50 border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/20 hover:border-yellow-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mb-8 text-center">
            <p className="text-yellow-400/60 text-sm">
              Showing {filteredContent.length} video{filteredContent.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Classics Grid */}
          <section className="my-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredContent.map((item, index) => (
                <ThemeAnimations key={item.id} theme="gold" delay={index * 0.05}>
                  <YouTubeClassicCard 
                    videoId={item.videoId}
                  />
                </ThemeAnimations>
              ))}
            </div>
          </section>

          <footer className="w-full py-12 mt-16 border-t border-yellow-500/30 text-center">
            <p className="text-white/40 text-sm">
              🏆 Celebrating the best basketball content on YouTube
            </p>
          </footer>
        </div>
      </main>
    </ThemePage>
  )
}