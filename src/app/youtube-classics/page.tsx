'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { ThemePage } from '@/components/layout/ThemePage'
import { SideNavigation } from '@/components/layout/SideNavigation'
import { ThemeBanner } from '@/components/ui/ThemeBanner'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { ThemeAnimations } from '@/components/ui/ThemeAnimations'
import Link from 'next/link'

const youtubeClassicsContent = [
  {
    id: '1',
    videoId: 'dQw4w9WgXcQ',
    title: 'Never Gonna Give You Up - Rick Astley',
    year: '2007',
    views: '1.2B',
    category: 'Music',
  },
  {
    id: '2',
    videoId: '9bZkp7q19f0',
    title: 'PSY - GANGNAM STYLE',
    year: '2012',
    views: '5.1B',
    category: 'Music',
  },
  {
    id: '3',
    videoId: '_OBlgSz8sSM',
    title: 'Charlie Bit My Finger',
    year: '2007',
    views: '884M',
    category: 'Viral',
  },
  {
    id: '4',
    videoId: 'zKx3B4WdGX4',
    title: 'David After Dentist',
    year: '2009',
    views: '152M',
    category: 'Comedy',
  },
  {
    id: '5',
    videoId: 'EwTZ2xpQwpA',
    title: 'Evolution of Dance',
    year: '2006',
    views: '323M',
    category: 'Dance',
  },
  {
    id: '6',
    videoId: 'ZZ5LpwO-An4',
    title: 'Where the Hell is Matt?',
    year: '2008',
    views: '34M',
    category: 'Travel',
  },
  {
    id: '7',
    videoId: 't-3qncy5Qfk',
    title: 'Sneezing Panda',
    year: '2007',
    views: '12M',
    category: 'Animals',
  },
  {
    id: '8',
    videoId: '48H3N-0F4Fo',
    title: 'Leave Britney Alone!',
    year: '2007',
    views: '48M',
    category: 'Viral',
  },
  {
    id: '9',
    videoId: 'cdZZpaB2kDM',
    title: 'Double Rainbow',
    year: '2010',
    views: '48M',
    category: 'Viral',
  },
]

const YouTubeClassicCard = ({ videoId, title, year, views, category }: { videoId: string; title: string; year: string; views: string; category: string }) => {
  return (
    <div className="group relative transition-all duration-500 hover:-translate-y-2">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition duration-300" />
      <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-yellow-500/30 group-hover:border-yellow-400/70 transition-all duration-300">
        <div className="aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center gap-3 mt-2 text-sm">
            <span className="text-amber-400">📅 {year}</span>
            <span className="text-amber-400">👁️ {views}</span>
            <span className="px-2 py-1 bg-yellow-500/20 rounded-full text-xs text-yellow-400">
              {category}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function YouTubeClassicsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
            title="YouTube Classics"
            subtitle="Reliving the golden era of viral videos"
            pattern="dots"
            size="xl"
          />

          <SectionDivider theme="gold" variant="wave" className="my-12 opacity-50" />

          {/* Categories Section */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {['All', 'Music', 'Viral', 'Comedy', 'Dance', 'Animals'].map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full bg-black/50 border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/20 hover:border-yellow-400 transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Classics Grid */}
          <section className="my-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {youtubeClassicsContent.map((item, index) => (
                <ThemeAnimations key={item.id} theme="gold" delay={index * 0.05}>
                  <YouTubeClassicCard 
                    videoId={item.videoId}
                    title={item.title}
                    year={item.year}
                    views={item.views}
                    category={item.category}
                  />
                </ThemeAnimations>
              ))}
            </div>
          </section>

          <footer className="w-full py-12 mt-16 border-t border-yellow-500/30 text-center">
            <p className="text-white/40 text-sm">
              🏆 Celebrating the videos that shaped internet culture
            </p>
          </footer>
        </div>
      </main>
    </ThemePage>
  )
}