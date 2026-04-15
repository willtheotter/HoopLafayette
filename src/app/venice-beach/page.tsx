'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { ThemePage } from '@/components/layout/ThemePage'
import { SideNavigation } from '@/components/layout/SideNavigation'
import { HeroCarousel } from '@/components/ui/HeroCarousel'
import { SectionDivider } from '@/components/ui/SectionDivider'
import Link from 'next/link'

const veniceGradient = 'from-cyan-700 via-blue-800 to-cyan-900'

const eventContent = [
  // Instagram Posts
  {
    id: 'veniceball-shop',
    type: 'instagram',
    username: 'veniceball',
    url: 'https://www.instagram.com/reel/DRhu8uhiVwD/',
    caption: 'Get you SUM or get dunked ON! 50-75% OFF on all collections and collabs. On shop.veniceball.com #veniceball #gameneverstops',
    thumbnail: '/images/thumbnails/veniceball-shop.jpg',
  },
  {
    id: 'veniceball-champions',
    type: 'instagram',
    username: 'veniceball',
    url: 'https://www.instagram.com/reel/DN_zg1kEqv3/',
    caption: '@bballjunkies cement their names as our 2025 VBL Men\'s Champions after a hard fought battle against @alwaystimeless.co 🏆',
    thumbnail: '/images/thumbnails/veniceball-champions.jpg',
  },
  {
    id: 'shotby-eristheo',
    type: 'instagram',
    username: 'shotby_eristheo',
    url: 'https://www.instagram.com/reel/DNxF47N3E3u/',
    caption: '@everybody_hatechriss 😤 🏀 🏝️ #venicebeach #venice #hoopbus #hoop #paradise #losangeles',
    thumbnail: '/images/thumbnails/shotby-eristheo.jpg',
  },
  {
    id: 'venicehoops-skills',
    type: 'instagram',
    username: 'venicehoops',
    url: 'https://www.instagram.com/reel/DW6kmaBE2I3/',
    caption: 'Venice Beach Skills Challenge (Date TBD) • 7\'s Game • 1v1 King of the Court • Fundamentals Course 🏆 Prizes on the line. OG\'s 3v3 League starts May 30. #VeniceHoops',
    thumbnail: '/images/thumbnails/venicehoops-skills.jpg',
  },
  {
    id: 'venicehoops-community',
    type: 'instagram',
    username: 'venicehoops',
    url: 'https://www.instagram.com/reel/DWxg5PVkyMv/',
    caption: 'Venice showed up in a big way. From the energy on the courts to the love around them — this was special. #VeniceHoops #VeniceBeach #CommunityBuilt',
    thumbnail: '/images/thumbnails/venicehoops-community.jpg',
  },
  {
    id: 'venicehoops-pbj',
    type: 'instagram',
    username: 'venicehoops',
    url: 'https://www.instagram.com/reel/DWfMEy5D2g-/',
    caption: '400+ PB&J sandwiches, 300 bananas, countless apples shared with the Venice community. More than basketball. This is what community looks like. #VeniceHoops',
    thumbnail: '/images/thumbnails/venicehoops-pbj.jpg',
  },
  {
    id: 'thehoopbus-harry',
    type: 'instagram',
    username: 'thehoopbus',
    url: 'https://www.instagram.com/reel/DVxIL0VCcob/',
    caption: 'At 75 years young, Harry Perry just ran another marathon — on the hottest day of the year. Pure legend. #thehoopbus',
    thumbnail: '/images/thumbnails/thehoopbus-harry.jpg',
  },
  {
    id: 'adam-carterleague',
    type: 'instagram',
    username: 'adam.carterleague',
    url: 'https://www.instagram.com/reel/DVMSXmtDldL/',
    caption: '@thehoopbus sunset takeover with @usbank on the Santa Monica Pier during @nbaallstar weekend. #santamonica #losangeles #basketball',
    thumbnail: '/images/thumbnails/adam-carterleague.jpg',
  },
  {
    id: 'thehoopbus-holidays',
    type: 'instagram',
    username: 'thehoopbus',
    url: 'https://www.instagram.com/reel/DSlZtmmkl-X/',
    caption: 'Happy Holidays from the Hoopers Paradise ! 🎄🌴',
    thumbnail: '/images/thumbnails/thehoopbus-holidays.jpg',
  },
  // YouTube Videos
  {
    id: 'vbl-legends-day',
    type: 'youtube',
    videoId: 'b_WREebXct8',
    title: 'VBL 2025 Legends Day (8/23)',
  },
  {
    id: 'legends-day-doc',
    type: 'youtube',
    videoId: 'bCQkw_NiBkA',
    title: 'LEGENDS DAY 2024 - The mini documentary',
  },
  {
    id: 'juice-63-points',
    type: 'youtube',
    videoId: 'TxR0WRH3ukU',
    title: 'Juice GOES INSANE in Venice Basketball League Week 4! Drops League Record 63 Points!',
  },
  {
    id: 'kobe-30000',
    type: 'youtube',
    videoId: 'bayiUXVh858',
    title: 'KOBE BRYANT CELEBRATES 30,000 POINTS AT VENICE BEACH',
  },
  {
    id: 'hall-of-fame-day',
    type: 'youtube',
    videoId: 'YX9nu56wcBQ',
    title: 'Venice Beach Hall of Fame Day - Kobe Bryant, Lisa Leslie, Paul Pierce, Elton Brand, Derick Fisher',
  },
  {
    id: 'skid-row',
    type: 'youtube',
    videoId: '34yI8plq3dE',
    title: 'VENICEBALL IN SKID ROW',
  },
  {
    id: 'venice-hoops-full',
    type: 'youtube',
    videoId: 'orL-_-kJ6TU',
    title: 'VeniceHoops: Full Experience',
  },
  {
    id: 'march-mayhem',
    type: 'youtube',
    videoId: '9iwy7rXavLU',
    title: 'March Mayhem Semi-Finals (3/21/26)',
  },
  {
    id: 'marathon-burger',
    type: 'youtube',
    videoId: 's18FRmdInzo',
    title: 'Marathon Burger Grand Opening Runs (5/31/25)',
  },
  {
    id: 'unedited-uncut',
    type: 'youtube',
    videoId: '5IA3ZaZZ4WM',
    title: 'Venice Basketball Unedited & Uncut (Featuring Hezigod, Mark Anthony, Kam, Rob and B Ellis)',
  },
  {
    id: 'sunday-funday',
    type: 'youtube',
    videoId: 'VZXLa0ll4z4',
    title: 'Sunday Funday: Venice Beach Basketball (6/9)',
  },
  {
    id: 'game-of-the-day',
    type: 'youtube',
    videoId: 'e2AJyjIFN2s',
    title: 'Game of the Day: Venice Beach Edition (6/8)',
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
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
      <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-500/30 group-hover:border-blue-500/50 transition duration-300">
        <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-cyan-900/50 to-blue-900/50">
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
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center">
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
          <p className="text-sm text-white/80 line-clamp-2">{caption}</p>
          <div className="mt-3 text-blue-400 text-xs group-hover:text-cyan-400 transition-colors flex items-center gap-1">
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
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
      <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-500/30 group-hover:border-blue-500/50 transition duration-300">
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

export default function VeniceBeachPage() {
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
    <ThemePage theme="venice" gradient={veniceGradient}>
      <Header />

      <main className="relative flex min-h-screen text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/40 via-black/50 to-blue-950/40 pointer-events-none" />
        
        <SideNavigation />

        <div className="relative flex-1 px-4 py-6 lg:px-8 z-10">
          <HeroCarousel />

          <div className="mt-12 mb-8 text-center">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-white to-blue-400 bg-clip-text text-transparent">
                VENICE BEACH
              </span>
              <br />
              <span className="text-3xl lg:text-4xl font-bold text-white/80">
                HOOPERS PARADISE
              </span>
            </h1>
          
            <div className="flex justify-center mt-6">
              <Link href="https://shop.veniceball.com" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-3 px-8 py-3 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition duration-300 backdrop-blur-sm">
                  <span className="text-xl">🛒</span>
                  <span className="text-lg font-semibold">SHOP VENICEBALL</span>
                </div>
              </Link>
            </div>
            
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mt-8 mx-auto" />
          </div>

          <SectionDivider theme="venice" variant="wave" className="my-8 opacity-50" />

          <section className="my-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                INSTAGRAM COLLECTION
              </h2>
              <div className="hidden lg:block h-px flex-1 ml-8 bg-gradient-to-r from-cyan-500/50 to-transparent" />
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

          <SectionDivider theme="venice" variant="curve" className="my-12 opacity-50" />

          <section className="my-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                YOUTUBE COLLECTION
              </h2>
              <div className="hidden lg:block h-px flex-1 ml-8 bg-gradient-to-r from-blue-500/50 to-transparent" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {youtubeVideos.map((item) => (
                <YouTubeCard 
                  key={item.id} 
                  videoId={item.videoId} 
                  title={item.title} 
                />
              ))}
            </div>
          </section>

          <footer className="w-full py-12 mt-16 border-t border-cyan-500/30">
            <div className="text-center">
              <Link href="https://shop.veniceball.com" target="_blank" rel="noopener noreferrer">
                <div className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-cyan-600/30 to-blue-600/30 backdrop-blur-sm border border-cyan-500/40 hover:border-blue-500/60 transition duration-300 group cursor-pointer hover:scale-105 transform">
                  <span className="text-3xl">🏀</span>
                  <span className="text-white font-bold text-xl tracking-wider">SHOP THE VENICE BEACH COLLECTION</span>
                  <span className="text-3xl">🌊</span>
                </div>
              </Link>
              <p className="text-white/30 text-sm mt-6">
                HOOPERS PARADISE • The Mecca of Outdoor Basketball • Culture • Community • Legacy
              </p>
            </div>
          </footer>
        </div>
      </main>
    </ThemePage>
  )
}