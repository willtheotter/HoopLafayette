'use client'

import { useState, useEffect, useRef } from 'react'
import { Header } from '@/components/layout/Header'
import { ThemePage } from '@/components/layout/ThemePage'
import { SideNavigation } from '@/components/layout/SideNavigation'
import { HeroCarousel } from '@/components/ui/HeroCarousel'
import { SectionDivider } from '@/components/ui/SectionDivider'
import Link from 'next/link'

const laffyGradient = 'from-cyan-700 via-teal-800 to-cyan-900'

const eventContent = [
  // Top Posts (All Instagram - Ranked by Actual Engagement)
  {
    id: 'top-1',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/DWjT30GASRy/',
    caption: '#1: Is @geotherealest100 tough?? #basketball #hoops #marchmadness #fyp',
    rank: 1,
  },
  {
    id: 'top-2',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/DVbluZkCR99/',
    caption: '#2: Jordan gave the home team 11 in a game to 13, last night. Performance of the night! 🏀',
    rank: 2,
  },
  {
    id: 'top-3',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/DVys99vEX31/',
    caption: '#3: We did go past 9 o\'clock, again. (8:58) #basketball #hoops',
    rank: 3,
  },
  {
    id: 'top-4',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/DV808OSgc8B/',
    caption: '#4: Lafayette Monday?!? (Permit from 5:30-10:00) #basketball #hoops',
    rank: 4,
  },
  {
    id: 'top-5',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/DWj23DnAfNK/',
    caption: '#5: Good shit, yeah I gotta slide up here mane I didn\'t know my folks still be getting down at this park',
    rank: 5,
  },
  {
    id: 'top-6',
    type: 'instagram',
    username: 'lightmeupwill',
    url: 'https://www.instagram.com/reel/DVyunxmDFBK/',
    caption: '#6: Back and Forth Basketball… (9:05) @thecoldestgenocide @kobe_zyhe24',
    rank: 6,
  },
  {
    id: 'top-7',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/DVOtkqiifci/',
    caption: '#7: @kobe_zyhe24 out here his 9 pm cones…',
    rank: 7,
  },
  {
    id: 'top-8',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/DV81TB9ARjM/',
    caption: '#8: @titolokz_95 doing y\'all like this now… #basketball #hoops',
    rank: 8,
  },
  {
    id: 'top-9',
    type: 'instagram',
    username: 'flyislifety',
    url: 'https://www.instagram.com/reel/DXY9iUHETcd/',
    caption: '#9: At Laffy every Monday and Wednesday',
    rank: 9,
  },
  {
    id: 'top-10',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/DWnZrXBAVl5/',
    caption: '#10: Maybe it\'s the shoes… @ploctheruler1017',
    rank: 10,
  },
  {
    id: 'top-11',
    type: 'instagram',
    username: 'flyislifety',
    url: 'https://www.instagram.com/reel/DXY9ylkEVwt/',
    caption: '#11: Simple IQ.. HAND DOWN MAN DOWN DID HE FALL FOR THE FAKE PASS???',
    rank: 11,
  },
  {
    id: 'top-12',
    type: 'instagram',
    username: 'nickwhoshotit',
    url: 'https://www.instagram.com/reel/DWQS_TaCTzZ/',
    caption: '#12: Come hoop at Lafayette park Mondays and Wednesdays',
    rank: 12,
  },
  {
    id: 'top-13',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/DWSSUDVAaMV/',
    caption: '#13: @problemch1ld22 establishing his presence… @veniceball @therealsidneydean3',
    rank: 13,
  },
  {
    id: 'top-14',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/DVr9L2UEccL/',
    caption: '#14: Lafayette Park runs going crazy 🔥',
    rank: 14,
  },
  {
    id: 'top-15',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/DVyxzL_gVhz/',
    caption: '#15: Late night hoops at Laffy 🌙',
    rank: 15,
  },
  {
    id: 'top-16',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/DVyz1CKAbxh/',
    caption: '#16: Another day, another bucket at Lafayette',
    rank: 16,
  },
  {
    id: 'top-17',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/DVKAnwjkuW2/',
    caption: '#17: @flyislifety said he\'s hunting @thehezigod as well… 😳😳😳',
    rank: 17,
  },
  {
    id: 'top-18',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/DW5bSpCAeJg/',
    caption: '#18: @geotherealest100 does it again… 🔥',
    rank: 18,
  },
  {
    id: 'top-19',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/DW6nstjgcwx/',
    caption: '#19: @therealsidneydean3 with the kill of the day… @problemch1ld22',
    rank: 19,
  },
  {
    id: 'top-20',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/DXYMGa7kTmF/',
    caption: '#20: Morning runs at Lafayette hit different ☀️',
    rank: 20,
  },
  {
    id: 'top-21',
    type: 'instagram',
    username: 'lafayette_hoop',
    url: 'https://www.instagram.com/reel/DVywNu7gf_L/',
    caption: '#21: Streetball at its finest 🏀',
    rank: 21,
  },
]

// Type definitions
interface InstagramItem {
  id: string
  type: 'instagram'
  username: string
  url: string
  caption: string
  rank: number
}

type EventItem = InstagramItem

// Instagram Component - Official Blockquote Method
const InstagramEmbed = ({ username, url, caption, rank }: { username: string; url: string; caption: string; rank?: number }) => {
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
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
        <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-500/30 group-hover:border-teal-500/50 transition duration-300 h-full flex flex-col">
          {rank && (
            <div className="absolute top-2 left-2 z-10 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg border-2 border-white/20">
              <span className="text-white font-black text-lg">{rank}</span>
            </div>
          )}
          <div className="p-6 flex-1 flex flex-col items-center justify-center text-center">
            <p className="text-sm font-bold text-cyan-400 mb-3">@{username}</p>
            
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-500 to-teal-500 flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
              </svg>
            </div>

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-xl hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 transform hover:scale-105 mb-3"
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
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
        <div className="relative bg-red-500/10 backdrop-blur-sm rounded-xl border border-red-500/30 p-6 text-center h-full flex flex-col items-center justify-center">
          {rank && (
            <div className="absolute top-2 left-2 z-10 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg border-2 border-white/20">
              <span className="text-white font-black text-lg">{rank}</span>
            </div>
          )}
          <svg className="w-12 h-12 text-red-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-red-400 text-sm mb-3">Failed to load Instagram post</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 text-sm underline hover:text-cyan-400 transition"
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
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
      <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-500/30 group-hover:border-teal-500/50 transition duration-300 h-full flex flex-col">
        {rank && (
          <div className="absolute top-2 left-2 z-10 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg border-2 border-white/20">
            <span className="text-white font-black text-lg">{rank}</span>
          </div>
        )}
        <div className="p-4 flex-1 flex flex-col">
          <p className="text-sm font-bold text-cyan-400 mb-2 shrink-0">@{username}</p>
          
          <div ref={containerRef} className="instagram-embed-wrapper min-h-[450px] relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg z-10">
                <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
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
            className="mt-2 text-teal-400 text-xs hover:text-cyan-400 transition-colors flex items-center gap-1 shrink-0"
          >
            <span>View original post</span>
            <span>→</span>
          </a>
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

  const topPosts = eventContent as EventItem[]

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
                TOP MOMENTS
              </span>
              <br />
              <span className="text-3xl lg:text-4xl font-bold text-white/80">
                LAFFY HIGHLIGHTS
              </span>
            </h1>
          
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link href="https://www.instagram.com/lafayette_hoop" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-3 px-8 py-3 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition duration-300 backdrop-blur-sm">
                  <span className="text-xl">📸</span>
                  <span className="text-lg font-semibold">Follow on IG</span>
                </div>
              </Link>
            </div>
            
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mt-8 mx-auto" />
          </div>

          <SectionDivider theme="owyhee" variant="wave" className="my-8 opacity-50" />

          <section className="my-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                ALL LAFFY MOMENTS
              </h2>
              <div className="hidden lg:block h-px flex-1 ml-8 bg-gradient-to-r from-cyan-500/50 to-transparent" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              {topPosts.map((item) => (
                <InstagramEmbed 
                  key={item.id} 
                  username={item.username} 
                  url={item.url} 
                  caption={item.caption}
                  rank={item.rank}
                />
              ))}
            </div>
          </section>

          <footer className="w-full py-12 mt-16 border-t border-cyan-500/30">
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Link href="/" className="text-white/50 hover:text-cyan-400 text-sm transition">Home</Link>
                <span className="text-white/20">•</span>
                <Link href="/youtube-classics" className="text-white/50 hover:text-yellow-400 text-sm transition">YouTube Classics</Link>
                <span className="text-white/20">•</span>
                <Link href="/nba-highlights" className="text-white/50 hover:text-orange-400 text-sm transition">NBA Highlights</Link>
                <span className="text-white/20">•</span>
                <Link href="/newsletter" className="text-white/50 hover:text-green-400 text-sm transition">Newsletter</Link>
                <span className="text-white/20">•</span>
                <Link href="/themes" className="text-white/50 hover:text-white text-sm transition">All Themes</Link>
              </div>
              
              <div className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-cyan-600/30 to-teal-600/30 backdrop-blur-sm border border-cyan-500/40 hover:border-teal-500/60 transition duration-300 group cursor-pointer">
                <span className="text-3xl">🏀</span>
                <span className="text-white font-bold text-xl tracking-wider">#LAFFYMOMENTS</span>
                <span className="text-3xl">🌊</span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <Link href="https://www.instagram.com/lafayette_hoop" target="_blank" rel="noopener noreferrer">
                  <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/40 transition duration-300">
                    <span className="text-lg">📸</span>
                    <span className="text-white/60 text-sm">@lafayette_hoop</span>
                  </div>
                </Link>
              </div>
              
              <p className="text-white/30 text-sm mt-6">
                The Best of Lafayette Streetball • All the top moments • Where Legends Are Made • Community First
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