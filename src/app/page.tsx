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

// Instagram Component - Desktop shows embed, Mobile shows button only (no freezing!)
const InstagramEmbed = ({ username, url, caption }: { username: string; url: string; caption: string }) => {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = typeof window !== 'undefined' ? window.navigator.userAgent : ''
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
      setIsMobile(mobile)
    }
    checkMobile()
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

  // MOBILE VERSION - Button only (no embed, perfect performance!)
  if (isMobile) {
    return (
      <div className="group relative transition duration-500 hover:-translate-y-2 h-full">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
        <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-red-500/30 group-hover:border-yellow-500/50 transition duration-300 h-full flex flex-col">
          <div className="p-6 flex-1 flex flex-col items-center justify-center text-center">
            <p className="text-sm font-bold text-red-400 mb-3">@{username}</p>
            
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-red-500 via-orange-500 to-yellow-500 flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
              </svg>
            </div>

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl hover:from-red-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 mb-3"
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

  // DESKTOP VERSION - Full embed
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