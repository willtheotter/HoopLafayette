'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { ThemePage } from '@/components/layout/ThemePage'
import { SideNavigation } from '@/components/layout/SideNavigation'
import { HeroCarousel } from '@/components/ui/HeroCarousel'
import { SectionDivider } from '@/components/ui/SectionDivider'
import Link from 'next/link'

const ballislifeGradient = 'from-red-700 via-slate-800 to-black'

const eventContent = [
  // Instagram Posts
  {
    id: 'cezar-guerrero',
    type: 'instagram',
    username: 'cezar_guerrero3',
    url: 'https://www.instagram.com/reel/Cwk2yRiSZz0/',
    caption: 'Bag Full Of Lays 🧳 CeezTheMoment ⚡️⌚️ 📹 - @wagyuballislife / @itsloskii',
    thumbnail: '/images/thumbnails/cezar-guerrero.jpg',
  },
  {
    id: 'franknittyy-community',
    type: 'instagram',
    username: 'franknittyy',
    url: 'https://www.instagram.com/reel/CwqyuZ-Pi5P/',
    caption: 'Trynna restore my community" Marshawn Lynch voice 😂. #JustFunVibes #PurestForm #TheNittyWay',
    thumbnail: '/images/thumbnails/franknittyy-community.jpg',
  },
  {
    id: 'franknittyy-sun',
    type: 'instagram',
    username: 'franknittyy',
    url: 'https://www.instagram.com/reel/CwwH8QCrIv9/',
    caption: 'Fun in the sun 🕺🏾… #theNittyWay @bionicbrooks',
    thumbnail: '/images/thumbnails/franknittyy-sun.jpg',
  },
  {
    id: 'bionicbrooks-block',
    type: 'instagram',
    username: 'bionicbrooks',
    url: 'https://www.instagram.com/reel/CxtBtLsxpCO/',
    caption: '"Blocked by James" 😂😂 Was this a good block or goaltending? 🎥: @wagyuballislife',
    thumbnail: '/images/thumbnails/bionicbrooks-block.jpg',
  },
  {
    id: 'bionicbrooks-defense',
    type: 'instagram',
    username: 'bionicbrooks',
    url: 'https://www.instagram.com/reel/Cx_YJ8RSf9K/',
    caption: '#DefenseMode #swat #block #disrespectful #defense #jump #bionicbrooks 🎥: @wagyuballislife',
    thumbnail: '/images/thumbnails/bionicbrooks-defense.jpg',
  },
  {
    id: 'lafayette-hoop',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/C-3lSmEStvH/',
    caption: 'Would you jump with @ty_g1over ?!?',
    thumbnail: '/images/thumbnails/lafayette-hoop.jpg',
  },
  // YouTube Shorts
  {
    id: 'ballislife-short-1',
    type: 'youtube',
    videoId: 'fMVHZ4N5OrI',
    title: 'Ballislife - Crazy Streetball Moves',
  },
  {
    id: 'ballislife-short-2',
    type: 'youtube',
    videoId: '0VaiVzsvgN8',
    title: 'Ballislife - Ankle Breakers Compilation',
  },
  {
    id: 'ballislife-short-3',
    type: 'youtube',
    videoId: 'InQt2I3btto',
    title: 'Ballislife - Park Takeover Moments',
  },
  {
    id: 'ballislife-short-4',
    type: 'youtube',
    videoId: 'DAAYmgUARyk',
    title: 'Ballislife - Streetball Legends',
  },
]

const InstagramCard = ({ username, url, caption, thumbnail }: { username: string; url: string; caption: string; thumbnail: string }) => {
  const [imgError, setImgError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative transition duration-500 hover:-translate-y-2 cursor-pointer block"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-slate-600 to-black rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
      <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-red-500/30 group-hover:border-slate-500/50 transition duration-300">
        <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-red-900/50 to-slate-900/50">
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
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-red-500 via-slate-500 to-black flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                </svg>
              </div>
              <p className="text-xs text-white/60 text-center px-2">Instagram Post</p>
            </div>
          )}
          {isLoading && !imgError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-red-400 border-t-transparent rounded-full animate-spin" />
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
          <p className="text-sm font-bold text-red-400 mb-1">@{username}</p>
          <p className="text-sm text-white/80 line-clamp-2">{caption}</p>
          <div className="mt-3 text-slate-400 text-xs group-hover:text-red-400 transition-colors flex items-center gap-1">
            <span>View on Instagram</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </a>
  )
}

const YouTubeCard = ({ videoId, title }: { videoId: string; title: string }) => {
  return (
    <div className="group relative transition duration-500 hover:-translate-y-2">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-slate-600 to-black rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
      <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-red-500/30 group-hover:border-slate-500/50 transition duration-300">
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
          <h3 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors line-clamp-2">
            {title}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default function BallislifePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // Type-safe filtering with non-null assertions
  const instagramPosts = eventContent.filter(
    (item): item is typeof item & { url: string; caption: string; thumbnail: string } =>
      item.type === 'instagram' && !!item.url && !!item.caption && !!item.thumbnail
  )

  const youtubeVideos = eventContent.filter(
    (item): item is typeof item & { videoId: string; title: string } =>
      item.type === 'youtube' && !!item.videoId && !!item.title
  )

  return (
    <ThemePage theme="ballislife" gradient={ballislifeGradient}>
      <Header />

      <main className="relative flex min-h-screen text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/40 via-black/50 to-slate-950/40 pointer-events-none" />
        
        <SideNavigation />

        <div className="relative flex-1 px-4 py-6 lg:px-8 z-10">
          <HeroCarousel />

          <div className="mt-12 mb-8 text-center">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-4">
              <span className="bg-gradient-to-r from-red-500 via-slate-300 to-white bg-clip-text text-transparent">
                BALLISLIFE
              </span>
              <br />
              <span className="text-3xl lg:text-4xl font-bold text-white/80">
                TAKEOVER
              </span>
            </h1>
          
            <div className="flex justify-center gap-4 mt-6">
              <Link href="https://shop.ballislife.com/" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-3 px-8 py-3 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition duration-300 backdrop-blur-sm">
                  <span className="text-xl">🛒</span>
                  <span className="text-lg font-semibold">Shop the Collection</span>
                </div>
              </Link>
              <Link href="https://www.instagram.com/ballislife" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-3 px-8 py-3 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition duration-300 backdrop-blur-sm">
                  <span className="text-xl">📸</span>
                  <span className="text-lg font-semibold">Follow on IG</span>
                </div>
              </Link>
            </div>
            
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-red-500/50 to-transparent mt-8 mx-auto" />
          </div>

          <SectionDivider theme="ballislife" variant="wave" className="my-8 opacity-50" />

          <section className="my-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-red-400 via-slate-300 to-white bg-clip-text text-transparent">
                INSTAGRAM TAKEOVER
              </h2>
              <div className="hidden lg:block h-px flex-1 ml-8 bg-gradient-to-r from-red-500/50 to-transparent" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {instagramPosts.map((item) => (
                <InstagramCard 
                  key={item.id} 
                  username={item.username} 
                  url={item.url} 
                  caption={item.caption} 
                  thumbnail={item.thumbnail} 
                />
              ))}
            </div>
          </section>

          <SectionDivider theme="ballislife" variant="curve" className="my-12 opacity-50" />

          <section className="my-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-white via-slate-300 to-red-400 bg-clip-text text-transparent">
                SHORTS
              </h2>
              <div className="hidden lg:block h-px flex-1 ml-8 bg-gradient-to-r from-slate-500/50 to-transparent" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {youtubeVideos.map((item) => (
                <YouTubeCard 
                  key={item.id} 
                  videoId={item.videoId} 
                  title={item.title} 
                />
              ))}
            </div>
          </section>

          <footer className="w-full py-12 mt-16 border-t border-red-500/30">
            <div className="text-center">
              <Link href="https://shop.ballislife.com/" target="_blank" rel="noopener noreferrer">
                <div className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-red-600/30 via-slate-600/30 to-black/60 backdrop-blur-sm border border-red-500/40 hover:border-slate-500/60 transition duration-300 group cursor-pointer hover:scale-105 transform">
                  <span className="text-3xl">🛒</span>
                  <span className="text-white font-bold text-xl tracking-wider">SHOP THE BALLISLIFE COLLECTION</span>
                  <span className="text-3xl">🏀</span>
                </div>
              </Link>
              <div className="flex justify-center gap-4 mt-6">
                <Link href="https://www.instagram.com/ballislife" target="_blank" rel="noopener noreferrer">
                  <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/40 transition duration-300">
                    <span className="text-lg">📸</span>
                    <span className="text-white/60 text-sm">@ballislife</span>
                  </div>
                </Link>
                <Link href="https://shop.ballislife.com/" target="_blank" rel="noopener noreferrer">
                  <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/40 transition duration-300">
                    <span className="text-lg">🛒</span>
                    <span className="text-white/60 text-sm">Official Store</span>
                  </div>
                </Link>
              </div>
              <p className="text-white/30 text-sm mt-6">
                Street Basketball Culture • Raw • Unfiltered • Legendary • #BallIsLife #StreetballNeverSleeps
              </p>
            </div>
          </footer>
        </div>
      </main>
    </ThemePage>
  )
}