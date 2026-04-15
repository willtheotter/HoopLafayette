'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { ThemePage } from '@/components/layout/ThemePage'
import { SideNavigation } from '@/components/layout/SideNavigation'
import { HeroCarousel } from '@/components/ui/HeroCarousel'
import { SectionDivider } from '@/components/ui/SectionDivider'
import Link from 'next/link'

const laffyGradient = 'from-cyan-700 via-teal-800 to-cyan-900'

const eventContent = [
  // Top 10 Posts (Instagram + YouTube mixed in order)
  {
    id: 'top-1',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/DVbluZkCR99/',
    caption: '#1: Jordan gave the home team 11 in a game to 13, last night. Performance of the night! 🏀 #basketball #hoops #ballislife',
    thumbnail: '/images/thumbnails/laffy-top1.jpg',
    rank: 1,
  },
  {
    id: 'top-2',
    type: 'youtube',
    videoId: 'NbadGL63T8s',
    title: '#2: Laffy Moments - Lafayette Streetball Highlights',
    rank: 2,
  },
  {
    id: 'top-3',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/DWjT30GASRy/',
    caption: '#3: Is @geotherealest100 tough?? #basketball #hoops #marchmadness #fyp',
    thumbnail: '/images/thumbnails/laffy-top3.jpg',
    rank: 3,
  },
  {
    id: 'top-4',
    type: 'youtube',
    videoId: 'p9wPvPUCVTg',
    title: '#4: Laffy Moments - Best of Lafayette Park',
    rank: 4,
  },
  {
    id: 'top-5',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/DW6nstjgcwx/',
    caption: '#5: @therealsidneydean3 with the kill of the day… @problemch1ld22',
    thumbnail: '/images/thumbnails/laffy-top5.jpg',
    rank: 5,
  },
  {
    id: 'top-6',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/DW5bSpCAeJg/',
    caption: '#6: @geotherealest100 does it again… 🔥',
    thumbnail: '/images/thumbnails/laffy-top6.jpg',
    rank: 6,
  },
  {
    id: 'top-7',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/DVyunxmDFBK/',
    caption: '#7: Back and Forth Basketball… (9:05) @thecoldestgenocide @kobe_zyhe24',
    thumbnail: '/images/thumbnails/laffy-top7.jpg',
    rank: 7,
  },
  {
    id: 'top-8',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/DVKAnwjkuW2/',
    caption: '#8: @flyislifety said he’s hunting @thehezigod as well… 😳😳😳',
    thumbnail: '/images/thumbnails/laffy-top8.jpg',
    rank: 8,
  },
  {
    id: 'top-9',
    type: 'instagram',
    username: 'nickwhoshotit',
    url: 'https://www.instagram.com/reel/DWQS_TaCTzZ/',
    caption: '#9: Come hoop at Lafayette park Mondays and Wednesdays',
    thumbnail: '/images/thumbnails/laffy-top9.jpg',
    rank: 9,
  },
  {
    id: 'top-10',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/DVys99vEX31/',
    caption: '#10: We did go past 9 o’clock, again. (8:58) #basketball #hoops',
    thumbnail: '/images/thumbnails/laffy-top10.jpg',
    rank: 10,
  },
]

// Type definitions
interface InstagramItem {
  id: string
  type: 'instagram'
  username: string
  url: string
  caption: string
  thumbnail: string
  rank: number
}

interface YouTubeItem {
  id: string
  type: 'youtube'
  videoId: string
  title: string
  rank: number
}

type EventItem = InstagramItem | YouTubeItem

const InstagramCard = ({ username, url, caption, thumbnail, rank }: { username: string; url: string; caption: string; thumbnail: string; rank?: number }) => {
  const [imgError, setImgError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative transition duration-500 hover:-translate-y-2 cursor-pointer block"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
      <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-500/30 group-hover:border-teal-500/50 transition duration-300">
        {rank && (
          <div className="absolute top-2 left-2 z-10 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-full w-10 h-10 flex items-center justify-center shadow-lg border-2 border-white/20">
            <span className="text-white font-black text-lg">{rank}</span>
          </div>
        )}
        <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-cyan-900/50 to-teal-900/50">
          {!imgError ? (
            <img
              src={thumbnail}
              alt={caption}
              className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setImgError(true)
                setIsLoading(false)
              }}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-500 to-teal-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                </svg>
              </div>
              <p className="text-xs text-white/60 text-center px-2">Instagram Post</p>
            </div>
          )}
          {isLoading && !imgError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="p-4">
          <p className="text-sm font-bold text-cyan-400 mb-1">@{username}</p>
          <p className="text-sm text-white/80 line-clamp-3">{caption}</p>
          <div className="mt-3 text-teal-400 text-xs group-hover:text-cyan-400 transition-colors flex items-center gap-1">
            <span>View on Instagram</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </a>
  )
}

const YouTubeCard = ({ videoId, title, rank }: { videoId: string; title: string; rank?: number }) => {
  return (
    <div className="group relative transition duration-500 hover:-translate-y-2">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
      <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-500/30 group-hover:border-teal-500/50 transition duration-300">
        {rank && (
          <div className="absolute top-2 left-2 z-10 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-full w-10 h-10 flex items-center justify-center shadow-lg border-2 border-white/20">
            <span className="text-white font-black text-lg">{rank}</span>
          </div>
        )}
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
        <div className="p-4 text-center">
          <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
            {title}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default function LaffyMomentsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // Type-safe filtering with type guards
  const isInstagramItem = (item: EventItem): item is InstagramItem => item.type === 'instagram'
  const isYouTubeItem = (item: EventItem): item is YouTubeItem => item.type === 'youtube'

  const top10Posts = eventContent as EventItem[]

  return (
    <ThemePage theme="owyhee" gradient={laffyGradient}>
      <Header />

      <main className="relative flex min-h-screen text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/40 via-black/50 to-teal-950/40 pointer-events-none" />
        
        <SideNavigation />

        <div className="relative flex-1 px-4 py-6 lg:px-8 z-10">
          <HeroCarousel />

          <div className="mt-12 mb-8 text-center">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                TOP 10
              </span>
              <br />
              <span className="text-3xl lg:text-4xl font-bold text-white/80">
                LAFFY MOMENTS
              </span>
            </h1>
          
            <div className="flex justify-center gap-4 mt-6">
              <Link href="https://www.instagram.com/lafayette_hoop" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-3 px-8 py-3 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition duration-300 backdrop-blur-sm">
                  <span className="text-xl">📸</span>
                  <span className="text-lg font-semibold">Follow on IG</span>
                </div>
              </Link>
              <Link href="https://www.youtube.com/@lafayettehoop" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-3 px-8 py-3 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition duration-300 backdrop-blur-sm">
                  <span className="text-xl">▶️</span>
                  <span className="text-lg font-semibold">Subscribe on YouTube</span>
                </div>
              </Link>
            </div>
            
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mt-8 mx-auto" />
          </div>

          <SectionDivider theme="owyhee" variant="wave" className="my-8 opacity-50" />

          <section className="my-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                TOP 10 MOMENTS
              </h2>
              <div className="hidden lg:block h-px flex-1 ml-8 bg-gradient-to-r from-cyan-500/50 to-transparent" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {top10Posts.map((item) => (
                isInstagramItem(item) ? (
                  <InstagramCard 
                    key={item.id} 
                    username={item.username} 
                    url={item.url} 
                    caption={item.caption} 
                    thumbnail={item.thumbnail}
                    rank={item.rank}
                  />
                ) : (
                  <YouTubeCard 
                    key={item.id} 
                    videoId={item.videoId} 
                    title={item.title}
                    rank={item.rank}
                  />
                )
              ))}
            </div>
          </section>

          <footer className="w-full py-12 mt-16 border-t border-cyan-500/30">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-cyan-600/30 to-teal-600/30 backdrop-blur-sm border border-cyan-500/40 hover:border-teal-500/60 transition duration-300 group cursor-pointer">
                <span className="text-3xl">🏀</span>
                <span className="text-white font-bold text-xl tracking-wider">#LAFFYMOMENTS TOP 10</span>
                <span className="text-3xl">🌊</span>
              </div>
              <div className="flex justify-center gap-4 mt-6">
                <Link href="https://www.instagram.com/lafayette_hoop" target="_blank" rel="noopener noreferrer">
                  <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/40 transition duration-300">
                    <span className="text-lg">📸</span>
                    <span className="text-white/60 text-sm">@lafayette_hoop</span>
                  </div>
                </Link>
                <Link href="https://www.youtube.com/@lafayettehoop" target="_blank" rel="noopener noreferrer">
                  <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/40 transition duration-300">
                    <span className="text-lg">▶️</span>
                    <span className="text-white/60 text-sm">YouTube Channel</span>
                  </div>
                </Link>
              </div>
              <p className="text-white/30 text-sm mt-6">
                The Best of Lafayette Streetball • Top 10 Moments • Where Legends Are Made • Community First
              </p>
            </div>
          </footer>
        </div>
      </main>
    </ThemePage>
  )
}