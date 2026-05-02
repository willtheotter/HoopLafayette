'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { ThemePage } from '@/components/layout/ThemePage'
import { SideNavigation } from '@/components/layout/SideNavigation'
import { HeroCarousel } from '@/components/ui/HeroCarousel'
import { SectionDivider } from '@/components/ui/SectionDivider'
import Link from 'next/link'

const fireGradient = 'from-red-600 via-orange-600 to-yellow-600'

const eventContent = [
  // Instagram Posts
  {
    id: 'ballislife-toronto',
    type: 'instagram',
    username: 'ballislife.hoops',
    url: 'https://www.instagram.com/reel/DWzyFmDj4Hu/',
    caption: 'This is THE GREATEST SERIES to ever hit Ballislife… and maybe the internet. We\'ve NEVER seen a city bring out the energy like Toronto did. 🔥🔥🔥',
  },
  {
    id: 'themeccaproam-champions',
    type: 'instagram',
    username: 'themeccaproam',
    url: 'https://www.instagram.com/reel/DXDHwaEOsQj/',
    caption: 'OTD are your Battle Los Angeles Champions. $100K secured. 🔥',
  },
  {
    id: 'themeccaproam-otd',
    type: 'instagram',
    username: 'themeccaproam',
    url: 'https://www.instagram.com/reel/DXCkvsUuYDE/',
    caption: 'OTD vs Blazers/Problems. Old school vs New school. $100K on the line.',
  },
  {
    id: 'regithq-lebron',
    type: 'instagram',
    username: 'regithq',
    url: 'https://www.instagram.com/reel/CthalmutaYH/',
    caption: 'LeBron with moves in Drew league game 🧏‍♂️🔥 #reels #lebronjames #dancing #drewleague',
  },
  {
    id: 'tncleague-kam',
    type: 'instagram',
    username: 'tncleague',
    url: 'https://www.instagram.com/reel/DVRIjvBDhbK/',
    caption: 'Do y\'all want to see @kamsosmoove_ and @mjm.hoodieqel play together more often? 👀',
  },
  {
    id: 'queenvision-hezi',
    type: 'instagram',
    username: 'queenvision__',
    url: 'https://www.instagram.com/reel/DW9zuIEEhLE/',
    caption: 'Hezi vs K5 1v1 fade of the night got real!! 🏀💰 @ready_to_hoop',
  },
  // YouTube Videos
  {
    id: 'youtube-1',
    type: 'youtube',
    videoId: 'O8uEUKbIhcU',
    title: 'Ballislife Toronto Series - Epic Moments',
  },
  {
    id: 'youtube-2',
    type: 'youtube',
    videoId: 'EE1xnkI8iY4',
    title: 'Battle Los Angeles Championship Live',
  },
  {
    id: 'youtube-3',
    type: 'youtube',
    videoId: 'Q90SapWnX-w',
    title: 'Pro-Am Highlights: OTD vs Blazers',
  },
  {
    id: 'youtube-4',
    type: 'youtube',
    videoId: '5LR2Ng-Z4VI',
    title: 'Drew League Best Moments',
  },
  {
    id: 'youtube-5',
    type: 'youtube',
    videoId: 'o6OkOkA0sW8',
    title: 'Streetball Legends - Full Game',
  },
  {
    id: 'youtube-6',
    type: 'youtube',
    videoId: 'UMCwkIkgT9E',
    title: '1v1 Tournament Highlights',
  },
  {
    id: 'youtube-7',
    type: 'youtube',
    videoId: 'cf1TzCLnCtg',
    title: 'Pro-Am Basketball Classics',
  },
  {
    id: 'youtube-8',
    type: 'youtube',
    videoId: '3rqflHygnBI',
    title: 'Streetball Culture - LA Edition',
  },
  {
    id: 'youtube-9',
    type: 'youtube',
    videoId: 'O5exGBjHAHI',
    title: 'Summer League Showcase',
  },
  {
    id: 'youtube-10',
    type: 'youtube',
    videoId: '9CGs24RzUGY',
    title: 'Best of Pro-Am Basketball',
  },
]

// Fixed Instagram Embed - Uses direct iframe (no script, no mobile freezing)
const InstagramEmbed = ({ username, url, caption }: { username: string; url: string; caption: string }) => {
  const [isLoading, setIsLoading] = useState(true)
  
  // Extract the post/reel ID from Instagram URL
  const getEmbedUrl = (instagramUrl: string) => {
    // Handle different URL formats: /reel/ID, /p/ID, /tv/ID
    const reelMatch = instagramUrl.match(/\/reel\/([A-Za-z0-9_-]+)/)
    const postMatch = instagramUrl.match(/\/p\/([A-Za-z0-9_-]+)/)
    const tvMatch = instagramUrl.match(/\/tv\/([A-Za-z0-9_-]+)/)
    const id = reelMatch?.[1] || postMatch?.[1] || tvMatch?.[1]
    
    if (id) {
      // Use Instagram's embed-friendly URL (no script required!)
      return `https://www.instagram.com/p/${id}/embed/`
    }
    return null
  }

  const embedUrl = getEmbedUrl(url)

  return (
    <div className="group relative transition duration-500 hover:-translate-y-2 h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
      <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-red-500/30 group-hover:border-yellow-500/50 transition duration-300 h-full flex flex-col">
        <div className="p-4 flex-1 flex flex-col">
          <p className="text-sm font-bold text-red-400 mb-2">@{username}</p>
          
          <div className="instagram-embed-wrapper min-h-[450px] relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-red-400 border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title={`Instagram post by ${username}`}
                className="w-full h-full min-h-[450px]"
                frameBorder="0"
                scrolling="no"
                allow="encrypted-media; picture-in-picture; fullscreen"
                onLoad={() => setIsLoading(false)}
              />
            ) : (
              <div className="flex items-center justify-center py-12 text-white/60">
                <p>Unable to load post</p>
              </div>
            )}
          </div>

          <p className="text-sm text-white/80 mt-3 line-clamp-2 flex-shrink-0">{caption}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-orange-400 text-xs group-hover:text-yellow-400 transition-colors flex items-center gap-1 flex-shrink-0"
          >
            <span>View on Instagram</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

const YouTubeCard = ({ videoId, title }: { videoId: string; title: string }) => {
  return (
    <div className="group relative transition duration-500 hover:-translate-y-2 h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
      <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-red-500/30 group-hover:border-yellow-500/50 transition duration-300 h-full flex flex-col">
        <div className="aspect-video w-full flex-shrink-0">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <div className="p-4 text-center flex-1 flex items-center justify-center">
          <h3 className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors line-clamp-2">
            {title}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // Type-safe filtering
  const instagramPosts = eventContent.filter(
    (item): item is typeof item & { url: string; caption: string; username: string } =>
      item.type === 'instagram' && !!item.url && !!item.caption && !!item.username
  )

  const youtubeVideos = eventContent.filter(
    (item): item is typeof item & { videoId: string; title: string } =>
      item.type === 'youtube' && !!item.videoId && !!item.title
  )

  return (
    <ThemePage theme="fire" gradient={fireGradient}>
      <Header />

      <main className="relative flex min-h-screen text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/40 via-black/50 to-orange-950/40 pointer-events-none" />
        
        <SideNavigation />

        <div className="relative flex-1 px-4 py-6 lg:px-8 z-10">
          <HeroCarousel />

          <div className="mt-12 mb-8 text-center">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-4">
              <span className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                LAFAYETTE
              </span>
              <br />
              <span className="text-3xl lg:text-4xl font-bold text-white/80">
                HOOPS
              </span>
            </h1>
          
            <div className="flex justify-center mt-6">
              <Link href="https://www.instagram.com/lafayettehoop" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-3 px-8 py-3 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition duration-300 backdrop-blur-sm">
                  <span className="text-xl">🔥</span>
                  <span className="text-lg font-semibold">Follow the Movement</span>
                </div>
              </Link>
            </div>
            
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-red-500/50 to-transparent mt-8 mx-auto" />
          </div>

          <SectionDivider theme="fire" variant="wave" className="my-8 opacity-50" />

          <section className="my-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                WHAT'S HOT
              </h2>
              <div className="hidden lg:block h-px flex-1 ml-8 bg-gradient-to-r from-red-500/50 to-transparent" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              {instagramPosts.map((item) => (
                <InstagramEmbed 
                  key={item.id} 
                  username={item.username} 
                  url={item.url} 
                  caption={item.caption} 
                />
              ))}
            </div>
          </section>

          <SectionDivider theme="fire" variant="curve" className="my-12 opacity-50" />

          <section className="my-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                FEATURED CONTENT
              </h2>
              <div className="hidden lg:block h-px flex-1 ml-8 bg-gradient-to-r from-orange-500/50 to-transparent" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
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
              <Link href="https://www.instagram.com/lafayettehoop" target="_blank" rel="noopener noreferrer">
                <div className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-red-600/30 via-orange-600/30 to-yellow-600/30 backdrop-blur-sm border border-red-500/40 hover:border-yellow-500/60 transition duration-300 group cursor-pointer hover:scale-105 transform">
                  <span className="text-3xl">🏀</span>
                  <span className="text-white font-bold text-xl tracking-wider">#LAFAYETTEHOOPS</span>
                  <span className="text-3xl">🔥</span>
                </div>
              </Link>
              <p className="text-white/30 text-sm mt-6">
                Home of the hottest hoops content • Streetball • Pro-Am • 1v1 • Culture
              </p>
            </div>
          </footer>
        </div>
      </main>
    </ThemePage>
  )
}