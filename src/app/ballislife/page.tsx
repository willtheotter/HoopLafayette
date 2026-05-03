'use client'

import { useState, useEffect, useRef } from 'react'
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
  },
  {
    id: 'franknittyy-community',
    type: 'instagram',
    username: 'franknittyy',
    url: 'https://www.instagram.com/reel/CwqyuZ-Pi5P/',
    caption: 'Trynna restore my community" Marshawn Lynch voice 😂. #JustFunVibes #PurestForm #TheNittyWay',
  },
  {
    id: 'franknittyy-sun',
    type: 'instagram',
    username: 'franknittyy',
    url: 'https://www.instagram.com/reel/CwwH8QCrIv9/',
    caption: 'Fun in the sun 🕺🏾… #theNittyWay @bionicbrooks',
  },
  {
    id: 'bionicbrooks-block',
    type: 'instagram',
    username: 'bionicbrooks',
    url: 'https://www.instagram.com/reel/CxtBtLsxpCO/',
    caption: '"Blocked by James" 😂😂 Was this a good block or goaltending? 🎥: @wagyuballislife',
  },
  {
    id: 'bionicbrooks-defense',
    type: 'instagram',
    username: 'bionicbrooks',
    url: 'https://www.instagram.com/reel/Cx_YJ8RSf9K/',
    caption: '#DefenseMode #swat #block #disrespectful #defense #jump #bionicbrooks 🎥: @wagyuballislife',
  },
  {
    id: 'lafayette-hoop',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/C-3lSmEStvH/',
    caption: 'Would you jump with @ty_g1over ?!?',
  },
  // YouTube Shorts
  {
    id: 'ballislife-short-1',
    type: 'youtube',
    videoId: 'fMVHZ4N5OrI',
  },
  {
    id: 'ballislife-short-2',
    type: 'youtube',
    videoId: '0VaiVzsvgN8',
  },
  {
    id: 'ballislife-short-3',
    type: 'youtube',
    videoId: 'InQt2I3btto',
  },
  {
    id: 'ballislife-short-4',
    type: 'youtube',
    videoId: 'DAAYmgUARyk',
  },
]

// Instagram Component - Official Blockquote Method
const InstagramEmbed = ({ username, url, caption }: { username: string; url: string; caption: string }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [error, setError] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptLoadedRef = useRef(false)

  // Check for mobile devices
  useEffect(() => {
    const checkDevice = () => {
      const userAgent = window.navigator.userAgent
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
      const isSmallScreen = window.innerWidth < 768
      setIsMobile(isMobileUA || isSmallScreen)
    }
    
    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  // Load Instagram embed script and process embeds
  useEffect(() => {
    if (isMobile) return // Don't load script on mobile

    let retryCount = 0
    const maxRetries = 15
    
    const loadInstagramScript = () => {
      // Check if script already exists
      if (document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
        scriptLoadedRef.current = true
        processEmbeds()
        return
      }

      // Create and load script
      const script = document.createElement('script')
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      script.defer = true
      
      script.onload = () => {
        scriptLoadedRef.current = true
        processEmbeds()
      }
      
      script.onerror = () => {
        console.error('Failed to load Instagram embed script')
        setError(true)
        setIsLoading(false)
      }
      
      document.body.appendChild(script)
    }

    const processEmbeds = () => {
      // Check if Instagram embed API is ready
      if ((window as any).instgrm && (window as any).instgrm.Embeds) {
        try {
          (window as any).instgrm.Embeds.process()
          setIsLoading(false)
        } catch (err) {
          console.error('Error processing Instagram embeds:', err)
          setError(true)
          setIsLoading(false)
        }
      } else if (retryCount < maxRetries) {
        retryCount++
        setTimeout(processEmbeds, 500)
      } else {
        // Timeout - show error
        setError(true)
        setIsLoading(false)
      }
    }

    if (!isMobile) {
      loadInstagramScript()
    }

    return () => {
      // No cleanup needed
    }
  }, [url, isMobile])

  // Mobile view - button only
  if (isMobile) {
    return (
      <div className="group relative transition duration-500 hover:-translate-y-2 h-full">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-slate-600 to-black rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
        <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-red-500/30 group-hover:border-slate-500/50 transition duration-300 h-full flex flex-col">
          <div className="p-6 flex-1 flex flex-col items-center justify-center text-center">
            <p className="text-sm font-bold text-red-400 mb-3">@{username}</p>
            
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-red-500 via-slate-500 to-black flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
              </svg>
            </div>

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-slate-600 rounded-xl hover:from-red-500 hover:to-slate-500 transition-all duration-300 transform hover:scale-105 mb-3"
            >
              <span className="text-white font-bold">View on Instagram</span>
              <span className="text-white">→</span>
            </a>

            <p className="text-sm text-white/80 line-clamp-2">{caption}</p>
            <p className="text-xs text-white/40 mt-3">Opens in Instagram app</p>
          </div>
        </div>
      </div>
    )
  }

  // Error view
  if (error) {
    return (
      <div className="group relative transition duration-500 hover:-translate-y-2 h-full">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
        <div className="relative bg-red-500/10 backdrop-blur-sm rounded-xl border border-red-500/30 p-6 text-center h-full flex flex-col items-center justify-center">
          <svg className="w-12 h-12 text-red-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-red-400 text-sm mb-3">Failed to load Instagram post</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 text-sm underline hover:text-red-400 transition"
          >
            View on Instagram →
          </a>
        </div>
      </div>
    )
  }

  // Desktop view - Official Instagram Blockquote Embed
  return (
    <div className="group relative transition duration-500 hover:-translate-y-2 h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-slate-600 to-black rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
      <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-red-500/30 group-hover:border-slate-500/50 transition duration-300 h-full flex flex-col">
        <div className="p-4 flex-1 flex flex-col">
          <p className="text-sm font-bold text-red-400 mb-2 shrink-0">@{username}</p>
          
          <div ref={containerRef} className="instagram-embed-wrapper min-h-[450px] relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg z-10">
                <div className="w-8 h-8 border-2 border-red-400 border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            
            {/* Official Instagram Blockquote Embed */}
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                background: 'transparent',
                maxWidth: '540px',
                minWidth: '326px',
                width: 'calc(100% - 2px)',
                margin: '0 auto',
                display: isLoading ? 'none' : 'block'
              }}
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                Loading Instagram Post...
              </a>
            </blockquote>
          </div>

          <p className="text-sm text-white/80 mt-3 line-clamp-2 shrink-0">{caption}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-slate-400 text-xs hover:text-red-400 transition-colors flex items-center gap-1 shrink-0"
          >
            <span>View original post</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

const YouTubeCard = ({ videoId }: { videoId: string }) => {
  return (
    <div className="group relative transition duration-500 hover:-translate-y-2 h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-slate-600 to-black rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
      <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-red-500/30 group-hover:border-slate-500/50 transition duration-300 h-full">
        <div className="aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={`Ballislife video ${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          />
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

  // Type-safe filtering
  const instagramPosts = eventContent.filter(
    (item): item is typeof item & { url: string; caption: string; username: string } =>
      item.type === 'instagram' && !!item.url && !!item.caption && !!item.username
  )

  const youtubeVideos = eventContent.filter(
    (item): item is typeof item & { videoId: string } =>
      item.type === 'youtube' && !!item.videoId
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
          
            <div className="flex flex-wrap justify-center gap-4 mt-6">
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

          <SectionDivider theme="ballislife" variant="curve" className="my-12 opacity-50" />

          <section className="my-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-white via-slate-300 to-red-400 bg-clip-text text-transparent">
                SHORTS
              </h2>
              <div className="hidden lg:block h-px flex-1 ml-8 bg-gradient-to-r from-slate-500/50 to-transparent" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
              {youtubeVideos.map((item) => (
                <YouTubeCard 
                  key={item.id} 
                  videoId={item.videoId} 
                />
              ))}
            </div>
          </section>

          <footer className="w-full py-12 mt-16 border-t border-red-500/30">
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Link href="/" className="text-white/50 hover:text-red-400 text-sm transition">Home</Link>
                <span className="text-white/20">•</span>
                <Link href="/youtube-classics" className="text-white/50 hover:text-yellow-400 text-sm transition">YouTube Classics</Link>
                <span className="text-white/20">•</span>
                <Link href="/nba-highlights" className="text-white/50 hover:text-orange-400 text-sm transition">NBA Highlights</Link>
                <span className="text-white/20">•</span>
                <Link href="/newsletter" className="text-white/50 hover:text-green-400 text-sm transition">Newsletter</Link>
                <span className="text-white/20">•</span>
                <Link href="/themes" className="text-white/50 hover:text-white text-sm transition">All Themes</Link>
              </div>
              
              <Link href="https://shop.ballislife.com/" target="_blank" rel="noopener noreferrer">
                <div className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-red-600/30 via-slate-600/30 to-black/60 backdrop-blur-sm border border-red-500/40 hover:border-slate-500/60 transition duration-300 group cursor-pointer hover:scale-105 transform">
                  <span className="text-3xl">🛒</span>
                  <span className="text-white font-bold text-xl tracking-wider">SHOP THE BALLISLIFE COLLECTION</span>
                  <span className="text-3xl">🏀</span>
                </div>
              </Link>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
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
              <p className="text-white/20 text-xs mt-4">
                © {new Date().getFullYear()} Lafayette Hoops • All Rights Reserved
              </p>
            </div>
          </footer>
        </div>
      </main>
    </ThemePage>
  )
}