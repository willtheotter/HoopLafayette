'use client'

import { useState, useEffect, useRef } from 'react'
import { Header } from '@/components/layout/Header'
import { ThemePage } from '@/components/layout/ThemePage'
import { SideNavigation } from '@/components/layout/SideNavigation'
import { HeroCarousel } from '@/components/ui/HeroCarousel'
import { SectionDivider } from '@/components/ui/SectionDivider'
import Link from 'next/link'

const newsletterGradient = 'from-emerald-700 via-green-800 to-lime-900'

const newsletterContent = [
  {
    id: 'ballin-for-peace',
    type: 'instagram',
    username: 'ballinforpeaceig',
    url: 'https://www.instagram.com/reel/DXpuSQGj_IC/',
    caption: '@venicehoops @ballinforpeaceig Summer 2026 🔥🔥🔥🔥🔥',
  },
  {
    id: 'hoopin4her-women',
    type: 'instagram',
    username: 'hoopin4her',
    url: 'https://www.instagram.com/reel/DWS1Xi0kbQe/',
    caption: 'WE HOOPINNNN 🔥🔥🔥 - Womens Herstory Month celebration! Middle School & High School girls eligible.',
  },
  {
    id: 'no-gray-areas',
    type: 'instagram',
    username: 'nograyareasfoundation',
    url: 'https://www.instagram.com/p/DVZtUd3DGSD/',
    caption: 'No Gray Areas Foundation × Girls Love Basketball collaboration! Use code: NOGRAYAREAS',
  },
  {
    id: 'lafayette-summer-camp',
    type: 'instagram',
    username: 'lafayette_c.c',
    url: 'https://www.instagram.com/p/DW95qOTEu6z/',
    caption: '☀️🌴 SUMMER CAMP 2026 IS HERE! 🌴☀️ June 15 – August 7. Ages 5–12.',
  },
  {
    id: 'ballin-for-peace-repost',
    type: 'instagram',
    username: 'ballinforpeaceig',
    url: 'https://www.instagram.com/p/Cew7ZdlP5Sz/',
    caption: 'Building peace and community through basketball worldwide. 🌍🏀',
  },
  {
    id: 'venice-hoops-announcement',
    type: 'instagram',
    username: 'venicehoops',
    url: 'https://www.instagram.com/reel/DXqCKxtgSet/',
    caption: 'Venice Hoops - New season announcements and community events.',
  },
  {
    id: 'lafayette-community-event',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/DXlsftPgYWf/',
    caption: 'Community event at Lafayette Park. Come through!',
  },
  {
    id: 'lafayette-night-hoops',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/DXjxMh_BohD/',
    caption: 'Night hoops at Lafayette. The energy is different after dark. 🌙',
  },
  {
    id: 'lafayette-park-post',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/p/DXo7cxDlMCO/',
    caption: 'Another day at the office. Lafayette Park.',
  },
  {
    id: 'lafayette-highlight',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/p/DXim2JllUrD/',
    caption: 'Highlight from last week\'s runs. Who\'s the best in the city?',
  },
  {
    id: 'spanish-harlem-food',
    type: 'instagram',
    username: 'flyislifety',
    url: 'https://www.instagram.com/reel/DXPQNjliYwi/',
    caption: 'FRIDAY. 1PM. NO EXCUSES. Spanish Harlem is LIVE today — fresh off the grill, made from scratch.',
  },
  {
    id: 'caba-league-update',
    type: 'instagram',
    username: 'cababasketball',
    url: 'https://www.instagram.com/p/DWVG8mCAvE7/',
    caption: 'Updated list of all open team spots for the upcoming Spring 2026 season! DM to lock in.',
  },
  {
    id: 'xleague-nation',
    type: 'instagram',
    username: 'xleaguenation',
    url: 'https://www.instagram.com/p/DWcREPzEkQe/',
    caption: 'Season 24 We\'re backkk! June 13 2026. DM for registration inquiries.',
  },
  {
    id: 'latin-gauntlet-tourney',
    type: 'instagram',
    username: 'thelatinogauntlet',
    url: 'https://www.instagram.com/p/DT5p2YcFM4M/',
    caption: 'YOUTH divisions TAP IN… VETS teams (35/40/45)… 213xSTR collaboration is doing it again.',
  },
]

// Instagram Component - Desktop shows interactive embed, Mobile shows iframe with overlay
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
            className="text-emerald-400 text-sm underline hover:text-emerald-300 transition"
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
        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
        <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-emerald-500/30 group-hover:border-green-500/50 transition duration-300 h-full flex flex-col">
          <div className="p-4 flex-1 flex flex-col">
            <p className="text-sm font-bold text-emerald-400 mb-2 shrink-0">@{username}</p>
            
            <div className="instagram-embed-wrapper min-h-[450px] relative">
              {/* Loading spinner */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg z-10">
                  <div className="w-8 h-8 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
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
                    <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl px-6 py-3 transform scale-90 group-hover:scale-100 transition-transform duration-300">
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
              className="mt-2 text-green-400 text-xs hover:text-emerald-400 transition-colors flex items-center gap-1 shrink-0"
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
      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
      <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-emerald-500/30 group-hover:border-green-500/50 transition duration-300 h-full flex flex-col">
        <div className="p-4 flex-1 flex flex-col">
          <p className="text-sm font-bold text-emerald-400 mb-2 shrink-0">@{username}</p>
          
          <div ref={containerRef} className="instagram-embed-wrapper min-h-[450px] relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg z-10">
                <div className="w-8 h-8 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
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
            className="mt-2 text-green-400 text-xs hover:text-emerald-400 transition-colors flex items-center gap-1 shrink-0"
          >
            <span>View original post</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function NewsletterPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemePage theme="green" gradient={newsletterGradient}>
      <Header />

      <main className="relative flex min-h-screen text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/40 via-black/50 to-green-950/40 pointer-events-none" />
        
        <SideNavigation />

        <div className="relative flex-1 px-4 py-6 lg:px-8 z-10">
          <HeroCarousel />

          <div className="mt-12 mb-8 text-center">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-lime-400 bg-clip-text text-transparent">
                THE RUNDOWN
              </span>
              <br />
              <span className="text-3xl lg:text-4xl font-bold text-white/80">
                COMMUNITY NEWSLETTER
              </span>
            </h1>
          
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link href="https://www.instagram.com/lafayette_hoop" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-3 px-8 py-3 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition duration-300 backdrop-blur-sm">
                  <span className="text-xl">📰</span>
                  <span className="text-lg font-semibold">Seasonal Roundup</span>
                </div>
              </Link>
            </div>
            
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mt-8 mx-auto" />
          </div>

          <SectionDivider theme="fire" variant="wave" className="my-8 opacity-50" />

          <section className="my-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 bg-clip-text text-transparent">
                THIS SEASON IN HOOPS
              </h2>
              <div className="hidden lg:block h-px flex-1 ml-8 bg-gradient-to-r from-emerald-500/50 to-transparent" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              {newsletterContent.map((item) => (
                <InstagramEmbed 
                  key={item.id} 
                  username={item.username} 
                  url={item.url} 
                  caption={item.caption} 
                />
              ))}
            </div>
          </section>

          <footer className="w-full py-12 mt-16 border-t border-emerald-500/30">
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Link href="/" className="text-white/50 hover:text-emerald-400 text-sm transition">Home</Link>
                <span className="text-white/20">•</span>
                <Link href="/youtube-classics" className="text-white/50 hover:text-yellow-400 text-sm transition">YouTube Classics</Link>
                <span className="text-white/20">•</span>
                <Link href="/nba-highlights" className="text-white/50 hover:text-orange-400 text-sm transition">NBA Highlights</Link>
                <span className="text-white/20">•</span>
                <Link href="/laffy-moments" className="text-white/50 hover:text-cyan-400 text-sm transition">Laffy Moments</Link>
                <span className="text-white/20">•</span>
                <Link href="/themes" className="text-white/50 hover:text-white text-sm transition">All Themes</Link>
              </div>
              
              <Link href="https://www.instagram.com/lafayette_hoop" target="_blank" rel="noopener noreferrer">
                <div className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-emerald-600/30 to-green-600/30 backdrop-blur-sm border border-emerald-500/40 hover:border-green-500/60 transition duration-300 group cursor-pointer hover:scale-105 transform">
                  <span className="text-3xl">🏀</span>
                  <span className="text-white font-bold text-xl tracking-wider">#LAFAYETTEHOOPS NEWSLETTER</span>
                  <span className="text-3xl">📧</span>
                </div>
              </Link>
              
              <p className="text-white/30 text-sm mt-6">
                Weekly Community Updates • Events • Camps • Leagues • LA Streetball Culture
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