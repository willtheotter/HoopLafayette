// src/app/new-balance/page.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { Header } from '@/components/layout/Header'
import { ThemePage } from '@/components/layout/ThemePage'
import { SideNavigation } from '@/components/layout/SideNavigation'
import { HeroCarousel } from '@/components/ui/HeroCarousel'
import { SectionDivider } from '@/components/ui/SectionDivider'
import Link from 'next/link'

const eventGradient = 'from-red-700 via-blue-800 to-red-900'

const eventContent = [
  {
    id: 'nb-allstar-reel',
    type: 'instagram',
    username: 'newbalancebasketball',
    url: 'https://www.instagram.com/reel/DU3mzq2EfZN/',
    caption: '2026 NBA All-Star.',
  },
  {
    id: 'nba-darius',
    type: 'instagram',
    username: 'NBA',
    url: 'https://www.instagram.com/reel/DUyhuneEZOU/',
    caption: 'Darius Garland pulled up to the @newbalancebasketball courts in LA and brought the energy to the dunk showcase!',
  },
  {
    id: 'nb-instant-film',
    type: 'instagram',
    username: 'newbalancebasketball',
    url: 'https://www.instagram.com/p/DU1sRBNDV5m/',
    caption: '2026 NBA All-Star. Shot on instant film.',
  },
  {
    id: 'nb-lafayette-1',
    type: 'instagram',
    username: 'newbalancebasketball',
    url: 'https://www.instagram.com/p/DUynrxREhAw/',
    caption: '2026 NBA All-Star. 📍Lafayette Park',
  },
  {
    id: 'nb-lafayette-2',
    type: 'instagram',
    username: 'newbalancebasketball',
    url: 'https://www.instagram.com/p/DUwV-lMErYT/',
    caption: '2026 NBA All-Star 📍Lafayette Park',
  },
  {
    id: 'nb-welcome',
    type: 'instagram',
    username: 'newbalancebasketball',
    url: 'https://www.instagram.com/p/DUirq8ljmjZ/',
    caption: 'All-Star Weekend. Lafayette Park. All are welcome.',
  },
  {
    id: 'veniceball-day1',
    type: 'instagram',
    username: 'veniceball',
    url: 'https://www.instagram.com/p/DUyyAcHE5K1/',
    caption: 'New Balance All Star Experience DAY 1 ✅',
  },
  {
    id: 'tcurrie',
    type: 'instagram',
    username: 't.currie',
    url: 'https://www.instagram.com/reel/DU6GCflDyDL/',
    caption: 'Going crazy at New Balance All Star Event ⭐️🏀',
  },
  {
    id: 'ruthless',
    type: 'instagram',
    username: 'ruthlesscreationz',
    url: 'https://www.instagram.com/reel/DU8ZcOEDiwx/',
    caption: 'Allstar weekend @newbalance @veniceball 2026',
  },
  {
    id: 'dscarss-geek',
    type: 'instagram',
    username: 'dscarss',
    url: 'https://www.instagram.com/reel/DU4IvKLkUqb/',
    caption: 'GEEEK TALK 🖖🏼 @newbalancebasketball ❤️',
  },
  {
    id: 'dscarss-aliens',
    type: 'instagram',
    username: 'dscarss',
    url: 'https://www.instagram.com/reel/DU52WhPkTxh/',
    caption: 'Aliens Took Over @newbalancebasketball 🖖🏼',
  },
  {
    id: 'baller-bree',
    type: 'instagram',
    username: 'baller_bree',
    url: 'https://www.instagram.com/reel/DU_mhnmkpUc/',
    caption: 'W\'s IN THE CHAT WITH THA GANG',
  },
  {
    id: 'kgv-sports',
    type: 'instagram',
    username: 'kgv.sports',
    url: 'https://www.instagram.com/reel/DU2HAGaEc02/',
    caption: 'Just having fun @uncleskoob 🕷️ #kgv 🚀',
  },
  {
    id: 'juice1hunnit',
    type: 'instagram',
    username: 'juice1hunnit',
    url: 'https://www.instagram.com/reel/DU4GnW9koYk/',
    caption: '@newbalance @veniceball',
  },
  {
    id: 'only-winns',
    type: 'instagram',
    username: 'only.winns',
    url: 'https://www.instagram.com/reel/DVNJ2QsERN7/',
    caption: 'Getting buckets at the New Balance All Star Weekend Experience',
  },
  {
    id: 'larry-sanders',
    type: 'instagram',
    username: 'thereal_larrysanders',
    url: 'https://www.instagram.com/reel/DU4Zl-tkQFU/',
    caption: 'Sometimes you just gotta shake the haters off and shoot your shot',
  },
  {
    id: 'drew-koda-kids',
    type: 'instagram',
    username: 'drew.koda',
    url: 'https://www.instagram.com/reel/DUwtyWDCU42/',
    caption: 'We had the kids jumpin at the @veniceball x @newbalancebasketball event 🔥',
  },
  {
    id: 'kymani-d2',
    type: 'instagram',
    username: 'kymani_d2',
    url: 'https://www.instagram.com/reel/DU9YWVgjVfg/',
    caption: 'Idk how but wait for it😂👀',
  },
  {
    id: 'coloradogold',
    type: 'instagram',
    username: 'coloradogold__',
    url: 'https://www.instagram.com/reel/DU6c2Cikm4N/',
    caption: 'Buckets were handed out at the @newbalancebasketball activation',
  },
  {
    id: 'zermillion',
    type: 'instagram',
    username: 'zermillion',
    url: 'https://www.instagram.com/reel/DUsA0VVkfUH/',
    caption: 'NB🏁 ALLSTAR WEEKEND 🏁',
  },
  {
    id: 'shotbydyl',
    type: 'instagram',
    username: '_shotbydyl',
    url: 'https://www.instagram.com/p/DU4GWYwkiC5/',
    caption: 'pt 2 from all ⭐️ week',
  },
  {
    id: 'davyds',
    type: 'instagram',
    username: 'd.avyds',
    url: 'https://www.instagram.com/p/DVE4m5jkhLg/',
    caption: 'ASW LA 26\'',
  },
  {
    id: 'reallyrarejaay',
    type: 'instagram',
    username: 'reallyrarejaay',
    url: 'https://www.instagram.com/p/DUzOUR_CTt5/',
    caption: 'Allstar Weekend 2026 ✨',
  },
  {
    id: 'drew-koda-post',
    type: 'instagram',
    username: 'drew.koda',
    url: 'https://www.instagram.com/p/DU_qbcbEs0n/',
    caption: 'Koda Street Vol. 2 📼',
  },
  {
    id: 'kotc-youtube',
    type: 'youtube',
    videoId: '90BXJd9yDb4',
  },
  {
    id: 'new-video',
    type: 'youtube',
    videoId: '9BPZ2c2AnrE',
  },
  {
    id: 'kicktheconcrete',
    type: 'youtube',
    videoId: 'MoU3Ag2i8po',
  },
]

// Instagram Component - Desktop uses blockquote (interactive), Mobile uses iframe with overlay
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

  // Extract the post/reel ID from Instagram URL
  const getEmbedUrl = (instagramUrl: string) => {
    const reelMatch = instagramUrl.match(/\/reel\/([A-Za-z0-9_-]+)/)
    const postMatch = instagramUrl.match(/\/p\/([A-Za-z0-9_-]+)/)
    const tvMatch = instagramUrl.match(/\/tv\/([A-Za-z0-9_-]+)/)
    const id = reelMatch?.[1] || postMatch?.[1] || tvMatch?.[1]
    
    if (id) {
      return `https://www.instagram.com/p/${id}/embed/`
    }
    return null
  }

  const embedUrl = getEmbedUrl(url)

  // Load Instagram embed script (desktop only - for blockquote method)
  useEffect(() => {
    if (isMobile) return // Don't load script on mobile, we use iframe instead

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

  // Error view (for both desktop and mobile)
  if (error) {
    return (
      <div className="group relative transition duration-500 hover:-translate-y-2 h-full">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
        <div className="relative bg-red-500/10 backdrop-blur-sm rounded-xl border border-red-500/30 p-6 text-center h-full flex flex-col items-center justify-center">
          <svg className="w-12 h-12 text-red-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-red-400 text-sm mb-3">Failed to load Instagram post</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-sm underline hover:text-red-400 transition"
          >
            View on Instagram →
          </a>
        </div>
      </div>
    )
  }

  // MOBILE VERSION - Iframe with overlay (can't play, must tap to open Instagram)
  if (isMobile) {
    return (
      <div className="group relative transition duration-500 hover:-translate-y-2 h-full">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
        <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-red-500/30 group-hover:border-blue-500/50 transition duration-300 h-full flex flex-col">
          <div className="p-4 flex-1 flex flex-col">
            <p className="text-sm font-bold text-red-400 mb-2 shrink-0">@{username}</p>
            
            <div className="instagram-embed-wrapper min-h-[450px] relative">
              {/* Loading spinner */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg z-10">
                  <div className="w-8 h-8 border-2 border-red-400 border-t-transparent rounded-full animate-spin" />
                </div>
              )}
              
              {/* Iframe (loads but can't be interacted with due to overlay) */}
              {embedUrl ? (
                <>
                  <iframe
                    src={embedUrl}
                    title={`Instagram post by ${username}`}
                    className="w-full h-full min-h-[450px] pointer-events-none"
                    frameBorder="0"
                    scrolling="no"
                    allow="encrypted-media; picture-in-picture; fullscreen"
                    onLoad={() => setIsLoading(false)}
                  />
                  {/* Overlay that opens Instagram when tapped */}
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  >
                    <div className="bg-gradient-to-r from-red-600 to-blue-600 rounded-xl px-6 py-3 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-bold">View on Instagram</span>
                        <span className="text-white">→</span>
                      </div>
                    </div>
                  </a>
                </>
              ) : (
                <div className="flex items-center justify-center py-12 text-white/60">
                  <p>Unable to load post</p>
                </div>
              )}
            </div>

            <p className="text-sm text-white/80 mt-3 line-clamp-2 shrink-0">{caption}</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-400 text-xs hover:text-red-400 transition-colors flex items-center gap-1 shrink-0"
            >
              <span>View original post</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    )
  }

  // DESKTOP VERSION - Official Instagram Blockquote Embed (fully interactive)
  return (
    <div className="group relative transition duration-500 hover:-translate-y-2 h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
      <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-red-500/30 group-hover:border-blue-500/50 transition duration-300 h-full flex flex-col">
        <div className="p-4 flex-1 flex flex-col">
          <p className="text-sm font-bold text-red-400 mb-2 shrink-0">@{username}</p>
          
          <div ref={containerRef} className="instagram-embed-wrapper min-h-[450px] relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg z-10">
                <div className="w-8 h-8 border-2 border-red-400 border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            
            {/* Official Instagram Blockquote Embed - Fully interactive on desktop */}
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
            className="mt-2 text-blue-400 text-xs hover:text-red-400 transition-colors flex items-center gap-1 shrink-0"
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
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
      <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-red-500/30 group-hover:border-blue-500/50 transition duration-300 h-full">
        <div className="aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={`YouTube video ${videoId}`}
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

export default function EventActivationPage() {
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
    <ThemePage theme="new-balance" gradient={eventGradient}>
      <Header />

      <main className="relative flex min-h-screen text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/40 via-black/50 to-blue-950/40 pointer-events-none" />
        
        <SideNavigation />

        <div className="relative flex-1 px-4 py-6 lg:px-8 z-10">
          <HeroCarousel />

          <div className="mt-12 mb-8 text-center">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-4">
              <span className="bg-gradient-to-r from-red-500 via-white to-blue-500 bg-clip-text text-transparent">
                NEW BALANCE
              </span>
              <br />
              <span className="text-3xl lg:text-4xl font-bold text-white/80">
                ALL-STAR WEEKEND ACTIVATION
              </span>
            </h1>
          
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link href="https://www.newbalance.com/basketball/" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-3 px-8 py-3 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition duration-300 backdrop-blur-sm">
                  <span className="text-xl">🛒</span>
                  <span className="text-lg font-semibold">Shop the Collection</span>
                </div>
              </Link>
            </div>
            
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-red-500/50 to-transparent mt-8 mx-auto" />
          </div>

          <SectionDivider theme="new-balance" variant="wave" className="my-8 opacity-50" />

          <section className="my-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
                INSTAGRAM ACTIVATION
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

          <SectionDivider theme="new-balance" variant="curve" className="my-12 opacity-50" />

          <section className="my-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
                MORE FROM THE WEEKEND
              </h2>
              <div className="hidden lg:block h-px flex-1 ml-8 bg-gradient-to-r from-blue-500/50 to-transparent" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
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
              
              <Link href="https://www.newbalance.com/basketball/" target="_blank" rel="noopener noreferrer">
                <div className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-red-600/30 to-blue-600/30 backdrop-blur-sm border border-red-500/40 hover:border-blue-500/60 transition duration-300 group cursor-pointer hover:scale-105 transform">
                  <span className="text-3xl">🏀</span>
                  <span className="text-white font-bold text-xl tracking-wider">SHOP THE NEW BALANCE ALL-STAR COLLECTION</span>
                  <span className="text-3xl">👟</span>
                </div>
              </Link>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <Link href="https://www.instagram.com/newbalancebasketball" target="_blank" rel="noopener noreferrer">
                  <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/40 transition duration-300">
                    <span className="text-lg">📸</span>
                    <span className="text-white/60 text-sm">@newbalancebasketball</span>
                  </div>
                </Link>
                <Link href="https://www.newbalance.com/basketball/" target="_blank" rel="noopener noreferrer">
                  <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/40 transition duration-300">
                    <span className="text-lg">🛒</span>
                    <span className="text-white/60 text-sm">Official Store</span>
                  </div>
                </Link>
              </div>
              <p className="text-white/30 text-sm mt-6">
                Capturing the energy of the 2026 NBA All-Star Weekend in Los Angeles.
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