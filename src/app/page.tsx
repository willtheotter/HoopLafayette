'use client'

import { useState, useEffect, useRef } from 'react'
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
    id: 'trent-lowkey-viral',
    type: 'instagram',
    username: 'thereallowkey24',
    url: 'https://www.instagram.com/reel/DVQ4R9aiQIQ/',
    caption: 'Pulled up to the park and went viral on accident 😬. #keepgoing #china #viral #hoops #streetball',
  },
  {
    id: 'ian-murphy-dj',
    type: 'instagram',
    username: 'ianmurphy_',
    url: 'https://www.instagram.com/reel/DXkYr-Qksyu/',
    caption: 'Me and the DJ did not plan this💀 #basketball #hoopersofinstagram #sports',
  },
  {
    id: 'michael-beasley-nas',
    type: 'instagram',
    username: 'offthedribbletv',
    url: 'https://www.instagram.com/p/DW-M6StCQve/',
    caption: 'Michael Beasley makes it very clear where he stands on the Nas vs Austin Rivers comments! 👀🍿',
  },
  {
    id: 'nas-is-number-1',
    type: 'instagram',
    username: 'xeistsports',
    url: 'https://www.instagram.com/reel/DXpxaxvDbUc/',
    caption: 'Nas Is #1 For A Reason',
  },
  {
    id: 'brody-williams',
    type: 'instagram',
    username: 'brody_williams',
    url: 'https://www.instagram.com/reel/DXvcvYqP7eA/',
    caption: 'Had to show him @jose_ortiz_05',
  },
  {
    id: 'jumpman-jaylen',
    type: 'instagram',
    username: 'jumpman_jaylen',
    url: 'https://www.instagram.com/reel/DXkiwB8DNGv/',
    caption: 'IT’S GETTING DARK OUTSIDE 🌒 @_moooooon',
  },
  {
    id: 'kevin-durant',
    type: 'instagram',
    username: 'ballislife',
    url: 'https://www.instagram.com/reel/DXt5dt9gWZX/',
    caption: 'Still crazy 😭 @jamalcain1_  ',
  },
  {
    id: 'kelly-oustine',
    type: 'instagram',
    username: 'kellyoustine',
    url: 'https://www.instagram.com/p/DXQA8rNgV5U/',
    caption: 'The difference is astonishing... 1 year ago to now! Stay down till you come up! 🙏🏾',
  },
  {
    id: 'jumpshot',
    type: 'instagram',
    username: 'omarion_sharpe',
    url: 'https://www.instagram.com/reel/DXtZ4VDiM3i/',
    caption: '🤫🤫🤫',
  },
  // YouTube Videos
  {
    id: 'hezigod-vs-k5-ppv',
    type: 'youtube',
    videoId: 'v9NIs3t44KQ',
    title: '1V1 PPV: Nas vs Skoob',
  },
  {
    id: 'lamar-peters-vs-zae',
    type: 'youtube',
    videoId: 'xvmF-m33Zlk',
    title: 'Lamar Peters vs Zae 1v1… Clash Of The TITANS | Judgment Day',
  },
  {
    id: 'scar-vs-rilla',
    type: 'youtube',
    videoId: 'ixqCGeajBLs',
    title: 'The SHIFTIEST Hooper vs The MOST VIRAL Hooper 1v1 | Scar vs Rilla',
  },
  {
    id: 'nas-vs-sk-toronto',
    type: 'youtube',
    videoId: 'gwg2Q90jxT4',
    title: "Toronto's BIGGEST Trash Talker CALLED OUT Nas To a HEATED 1v1 In Front of NBA PROS... Nas vs SK",
  },
  {
    id: 'lamar-peters-bruce',
    type: 'youtube',
    videoId: 'a_l0NE1VEU4',
    title: 'This Is The Lamar Peters We\'ve Been WAITING FOR... OH MY GOD',
  },
  {
    id: 'dmv-vs-philly-toxic',
    type: 'youtube',
    videoId: 'toGjoqddRSM',
    title: 'He Tried To FIGHT Uncle Skoob, Bruce & Zae ALL AT ONCE... | DMV vs Philly GOT TOXIC',
  },
  {
    id: 'brody-vs-silas',
    type: 'youtube',
    videoId: 'KftoscPXPAs',
    title: 'Hezi God vs His Comment Section...',
  },
  {
    id: 'juice-vs-tyrese',
    type: 'youtube',
    videoId: 'r_PexFjpj-g',
    title: 'Battle of the Small Guards',
  },
  {
    id: 'drew-league-2025',
    type: 'youtube',
    videoId: '5LR2Ng-Z4VI',
    title: 'OTD vs ReadyToHoop 3v3',
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
        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
        <div className="relative bg-red-500/10 backdrop-blur-sm rounded-xl border border-red-500/30 p-6 text-center h-full flex flex-col items-center justify-center">
          <svg className="w-12 h-12 text-red-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-red-400 text-sm mb-3">Failed to load Instagram post</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 text-sm underline hover:text-yellow-400 transition"
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
        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
        <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-red-500/30 group-hover:border-yellow-500/50 transition duration-300 h-full flex flex-col">
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
                    <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl px-6 py-3 transform scale-90 group-hover:scale-100 transition-transform duration-300">
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
              className="mt-2 text-orange-400 text-xs hover:text-yellow-400 transition-colors flex items-center gap-1 shrink-0"
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
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
      <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-red-500/30 group-hover:border-yellow-500/50 transition duration-300 h-full flex flex-col">
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
            className="mt-2 text-orange-400 text-xs hover:text-yellow-400 transition-colors flex items-center gap-1 shrink-0"
          >
            <span>View original post</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

// Improved YouTube Component with lazy loading, loading states, and error handling
const YouTubeCard = ({ videoId, title }: { videoId: string; title: string }) => {
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
    <div className="group relative transition duration-500 hover:-translate-y-2 h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
      <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-red-500/30 group-hover:border-yellow-500/50 transition duration-300 h-full flex flex-col">
        <div ref={containerRef} className="aspect-video w-full flex-shrink-0 relative bg-black/80">
          {/* Loading State */}
          {isLoading && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/60">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 border-3 border-orange-400 border-t-transparent rounded-full animate-spin" />
                <p className="text-xs text-orange-400/80">Loading video...</p>
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
                  className="text-orange-400 text-xs underline hover:text-yellow-300"
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
                alt={title}
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
              title={title}
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
          
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {/* Main Instagram Link */}
              <Link href="https://www.instagram.com/lafayettehoop" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-3 px-8 py-3 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition duration-300 backdrop-blur-sm">
                  <span className="text-xl">🔥</span>
                  <span className="text-lg font-semibold">Follow the Movement</span>
                </div>
              </Link>

              {/* NEW: YouTube Classics Link - Gold Theme */}
              <Link href="/youtube-classics">
                <div className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-amber-700 via-yellow-500 to-amber-700 rounded-full border border-yellow-500/50 hover:scale-105 transition duration-300 shadow-lg hover:shadow-yellow-500/25">
                  <span className="text-xl">🏆</span>
                  <span className="text-lg font-semibold text-white">YouTube Classics</span>
                </div>
              </Link>

              {/* NEW: NBA Highlights Link - Basketball Brown Theme */}
              <Link href="/nba-highlights">
                <div className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-orange-800 via-amber-700 to-stone-700 rounded-full border border-orange-500/50 hover:scale-105 transition duration-300 shadow-lg hover:shadow-orange-500/25">
                  <span className="text-xl">🏀</span>
                  <span className="text-lg font-semibold text-orange-100">NBA Highlights</span>
                </div>
              </Link>

              {/* NEW: Newsletter Link - Green Theme */}
              <Link href="/newsletter">
                <div className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-emerald-700 via-green-500 to-lime-700 rounded-full border border-green-500/50 hover:scale-105 transition duration-300 shadow-lg hover:shadow-green-500/25">
                  <span className="text-xl">📧</span>
                  <span className="text-lg font-semibold text-white">Newsletter</span>
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

          {/* Featured Pages Section - Showcase the 3 new themes */}
          <section className="my-16">
            <SectionDivider theme="fire" variant="wave" className="my-12 opacity-50" />
            
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                EXPLORE MORE
              </h2>
              <p className="text-white/60 mt-2">Discover our special collections</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* YouTube Classics Card */}
              <Link href="/youtube-classics">
                <div className="group relative bg-gradient-to-br from-amber-950/40 to-yellow-950/40 rounded-2xl overflow-hidden border border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="p-6 text-center">
                    <div className="text-6xl mb-4">🏆</div>
                    <h3 className="text-2xl font-bold text-yellow-400 mb-2">YouTube Classics</h3>
                    <p className="text-white/70 text-sm">Relive the golden era of viral videos</p>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-amber-700 via-yellow-500 to-amber-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </Link>

              {/* NBA Highlights Card */}
              <Link href="/nba-highlights">
                <div className="group relative bg-gradient-to-br from-orange-950/40 to-amber-950/40 rounded-2xl overflow-hidden border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="p-6 text-center">
                    <div className="text-6xl mb-4">🏀</div>
                    <h3 className="text-2xl font-bold text-orange-400 mb-2">NBA Highlights</h3>
                    <p className="text-white/70 text-sm">Classic dunks, game winners & mixtapes</p>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-orange-800 via-amber-700 to-stone-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </Link>

              {/* Newsletter Card */}
              <Link href="/newsletter">
                <div className="group relative bg-gradient-to-br from-emerald-950/40 to-green-950/40 rounded-2xl overflow-hidden border border-green-500/30 hover:border-green-500/60 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="p-6 text-center">
                    <div className="text-6xl mb-4">📧</div>
                    <h3 className="text-2xl font-bold text-green-400 mb-2">Newsletter</h3>
                    <p className="text-white/70 text-sm">Weekly roundups & exclusive content</p>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-emerald-700 via-green-500 to-lime-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </Link>
            </div>
          </section>

          <footer className="w-full py-12 mt-16 border-t border-red-500/30">
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Link href="/youtube-classics" className="text-white/50 hover:text-yellow-400 text-sm transition">YouTube Classics</Link>
                <span className="text-white/20">•</span>
                <Link href="/nba-highlights" className="text-white/50 hover:text-orange-400 text-sm transition">NBA Highlights</Link>
                <span className="text-white/20">•</span>
                <Link href="/newsletter" className="text-white/50 hover:text-green-400 text-sm transition">Newsletter</Link>
                <span className="text-white/20">•</span>
                <Link href="/themes" className="text-white/50 hover:text-white text-sm transition">All Themes</Link>
              </div>
              
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