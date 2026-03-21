'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { ThemePage } from '@/components/layout/ThemePage'
import { SideNavigation } from '@/components/layout/SideNavigation'
import { HeroCarousel } from '@/components/ui/HeroCarousel'
import { SectionDivider } from '@/components/ui/SectionDivider'

export default function GOTDPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  // GOTD Playlist ID
  const playlistId = 'PLN3FmH1w6ROsLAE3IUgpN9WpOfWfOjBJc'

  // Featured videos
  const featuredVideos = [
    {
      id: 'wGWi-z4zUKU',
      title: 'GOTD Highlight 1',
      url: 'https://youtu.be/wGWi-z4zUKU'
    },
    {
      id: 'VetHD8OiF0Y',
      title: 'GOTD Highlight 2',
      url: 'https://youtu.be/VetHD8OiF0Y'
    },
    {
      id: 'VZXLa0ll4z4',
      title: 'Sunday Funday: Venice Beach Basketball',
      url: 'https://youtu.be/VZXLa0ll4z4'
    },
    {
      id: 'e2AJyjIFN2s',
      title: 'Game of the Day: Venice Beach Edition',
      url: 'https://youtu.be/e2AJyjIFN2s'
    }
  ]

  return (
    <ThemePage theme="lakers">
      <Header />
      <main className="flex text-white min-h-screen">
        <SideNavigation />
        <div className="flex-1 px-4 py-6 lg:px-8">
          <HeroCarousel />
          
          <h1 className="text-4xl font-bold mb-2 mt-8">
            <span className="text-purple-300">GAME</span>{' '}
            <span className="text-yellow-400">OF THE</span>{' '}
            <span className="text-purple-300">DAY</span>
          </h1>
          <p className="text-purple-200 mb-6">Featured Games & Highlights</p>
          
          <SectionDivider theme="lakers" variant="wave" />
          
          {/* Main Playlist */}
          <section className="my-12">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">GOTD PLAYLIST</h2>
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl bg-black/50">
              <iframe
                src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
                title="GOTD Playlist"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <p className="text-center text-sm text-gray-400 mt-3">
              📺 Scroll within the player to browse all GOTD videos
            </p>
          </section>
          
          <SectionDivider theme="lakers" variant="curve" />
          
          {/* Featured Videos */}
          <section className="my-12">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">FEATURED VIDEOS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredVideos.map((video) => (
                <div key={video.id} className="group">
                  <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl bg-black/50">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium mt-2 group-hover:text-yellow-400 transition-colors">
                    {video.title}
                  </h3>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </ThemePage>
  )
}