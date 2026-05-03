'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { ThemePage } from '@/components/layout/ThemePage'
import { SideNavigation } from '@/components/layout/SideNavigation'
import { HeroCarousel } from '@/components/ui/HeroCarousel'
import { SectionDivider } from '@/components/ui/SectionDivider'

export default function GOTDPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  const playlistId = 'PLN3FmH1w6ROsLAE3IUgpN9WpOfWfOjBJc'

  const featuredVideos = [
    { id: 'U7fu6Cmbcxc', title: 'Lafayette Monday goes past 9, again (4/20/26)'},
    { id: 'd4wPaeFqSMk', title: 'Is this not game of the day?? (4/20/26)'},
    { id: 'zKOd2-BnK0s', title: 'Lafayette: The Experience (4/8/26)'},
    { id: 'otYRhWZZnwE', title: 'Does Lafayette Play Skunk (4/1/26)'},
    { id: 'wDZcbtU3mkI', title: 'Lafayette Wednesday (3/25/26)'},
    { id: 'TqyTzOnegVk', title: 'Game of the Day (3/23/26)'},
    { id: 'b9z1pAApCjo', title: 'Is Lafayette Back?!? (3/23/26)'},
    { id: 'wGWi-z4zUKU', title: 'Game of the Day (9/11)'},
    { id: 'VetHD8OiF0Y', title: 'Lafayette Monday Pt. 3 (8/26)'}
  ]

  return (
    <ThemePage theme="lakers">
      <Header />

      <main className="relative flex min-h-screen text-white">
        {/* Enhanced glassmorphism overlay with purple/gold gradient - CORRECTED */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/40 via-black/40 to-amber-950/40 backdrop-blur-[1px] pointer-events-none" />
        
        <SideNavigation />

        <div className="relative flex-1 px-4 py-6 lg:px-8 z-10">
          <HeroCarousel />

          {/* Title Section with Lakers Colors (Purple & Gold) */}
          <div className="mt-12 mb-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-amber-600/20 backdrop-blur-sm border border-amber-400/30">
              <span className="text-amber-400 text-sm font-bold tracking-wider animate-pulse">🏆 DAILY FEATURE</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-4">
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent animate-text-shimmer">
                GAME
              </span>{' '}
              <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 bg-clip-text text-transparent animate-text-shimmer">
                OF THE
              </span>{' '}
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent animate-text-shimmer">
                DAY
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-amber-200/90 font-light tracking-wide max-w-2xl lg:mx-0 mx-auto">
              Featured Games & Highlights • Where Legends Are Made
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-6">
              <div className="flex items-center gap-2 px-3 py-1 bg-amber-600/20 rounded-full border border-amber-400/30">
                <span className="text-amber-400 text-sm">🏆</span>
                <span className="text-xs text-white/80">Game of the Day</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-purple-600/20 rounded-full border border-purple-400/30">
                <span className="text-purple-400 text-sm">⭐</span>
                <span className="text-xs text-white/80">The Best Battles</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-amber-600/20 rounded-full border border-amber-400/30">
                <span className="text-amber-400 text-sm">🔥</span>
                <span className="text-xs text-white/80">Best Weekday Run</span>
              </div>
            </div>
            <div className="h-px w-32 bg-gradient-to-r from-amber-500 via-purple-500 to-transparent mt-8 mx-auto lg:mx-0" />
          </div>

          <SectionDivider theme="lakers" variant="wave" className="my-8 opacity-80" />

          {/* Main Playlist with Lakers Styling */}
          <section className="my-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                GOTD PLAYLIST
              </h2>
              <div className="hidden lg:block h-px flex-1 ml-8 bg-gradient-to-r from-amber-500/50 to-transparent" />
            </div>

            <div className="relative group">
              {/* Dual glow effect with Lakers colors */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 via-purple-500 to-amber-600 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/50 via-purple-500/50 to-amber-500/50 rounded-xl opacity-0 group-hover:opacity-50 blur-2xl transition-opacity duration-500" />
              
              <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl bg-black/60 border-2 border-amber-400/30 group-hover:border-purple-400/60 transition-all duration-300">
                <iframe
                  src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
                  title="GOTD Playlist"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>

            <p className="text-center text-sm text-amber-200/60 mt-4 flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              📺 Scroll within this playlist to watch the organic buildup
            </p>
          </section>

          <SectionDivider theme="lakers" variant="curve" className="my-12 opacity-80" />

          {/* Featured Videos Grid */}
          <section className="my-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 bg-clip-text text-transparent">
                FEATURED VIDEOS
              </h2>
              <div className="hidden lg:block h-px flex-1 ml-8 bg-gradient-to-r from-purple-500/50 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredVideos.map((video, index) => (
                <div
                  key={video.id}
                  className="group relative transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Glow effect on hover with Lakers colors */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                  
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-amber-400/20 group-hover:border-purple-400/50 transition-all duration-300">
                    <div className="aspect-video w-full overflow-hidden relative">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>

                    <div className="p-4">
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                        {video.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-purple-300">🏀 GOTD</span>
                        <span className="w-1 h-1 bg-amber-400 rounded-full" />
                        <span className="text-xs text-gray-400">Featured Game</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action with Lakers Colors */}
          <div className="py-8 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-amber-600/20 backdrop-blur-sm border border-amber-400/30 hover:border-purple-400/60 transition-all duration-300 group">
              <span className="text-2xl group-hover:animate-bounce">🏆</span>
              <span className="text-white/90 text-sm tracking-wider">#GAMEOFTHEDAY • PURPLE & GOLD • LAKERS LEGACY</span>
              <span className="text-2xl group-hover:animate-bounce delay-100">💜</span>
            </div>
          </div>
        </div>
      </main>
    </ThemePage>
  )
}