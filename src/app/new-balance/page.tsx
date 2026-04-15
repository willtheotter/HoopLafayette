// src/app/new-balance/page.tsx
'use client'

import { useState, useEffect } from 'react'
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
    thumbnail: '/images/thumbnails/nb-allstar.jpg',
  },
  {
    id: 'nba-darius',
    type: 'instagram',
    username: 'NBA',
    url: 'https://www.instagram.com/reel/DUyhuneEZOU/',
    caption: 'Darius Garland pulled up to the @newbalancebasketball courts in LA and brought the energy to the dunk showcase!',
    thumbnail: '/images/thumbnails/nba-darius.jpg',
  },
  {
    id: 'nb-instant-film',
    type: 'instagram',
    username: 'newbalancebasketball',
    url: 'https://www.instagram.com/p/DU1sRBNDV5m/',
    caption: '2026 NBA All-Star. Shot on instant film.',
    thumbnail: '/images/thumbnails/instant-film.jpg',
  },
  {
    id: 'nb-lafayette-1',
    type: 'instagram',
    username: 'newbalancebasketball',
    url: 'https://www.instagram.com/p/DUynrxREhAw/',
    caption: '2026 NBA All-Star. 📍Lafayette Park',
    thumbnail: '/images/thumbnails/lafayette-1.jpg',
  },
  {
    id: 'nb-lafayette-2',
    type: 'instagram',
    username: 'newbalancebasketball',
    url: 'https://www.instagram.com/p/DUwV-lMErYT/',
    caption: '2026 NBA All-Star 📍Lafayette Park',
    thumbnail: '/images/thumbnails/lafayette-2.jpg',
  },
  {
    id: 'nb-welcome',
    type: 'instagram',
    username: 'newbalancebasketball',
    url: 'https://www.instagram.com/p/DUirq8ljmjZ/',
    caption: 'All-Star Weekend. Lafayette Park. All are welcome.',
    thumbnail: '/images/thumbnails/welcome.jpg',
  },
  {
    id: 'veniceball-day1',
    type: 'instagram',
    username: 'veniceball',
    url: 'https://www.instagram.com/p/DUyyAcHE5K1/',
    caption: 'New Balance All Star Experience DAY 1 ✅',
    thumbnail: '/images/thumbnails/veniceball-day1.jpg',
  },
  {
    id: 'tcurrie',
    type: 'instagram',
    username: 't.currie',
    url: 'https://www.instagram.com/reel/DU6GCflDyDL/',
    caption: 'Going crazy at New Balance All Star Event ⭐️🏀',
    thumbnail: '/images/thumbnails/tcurrie.jpg',
  },
  {
    id: 'ruthless',
    type: 'instagram',
    username: 'ruthlesscreationz',
    url: 'https://www.instagram.com/reel/DU8ZcOEDiwx/',
    caption: 'Allstar weekend @newbalance @veniceball 2026',
    thumbnail: '/images/thumbnails/ruthless.jpg',
  },
  {
    id: 'dscarss-geek',
    type: 'instagram',
    username: 'dscarss',
    url: 'https://www.instagram.com/reel/DU4IvKLkUqb/',
    caption: 'GEEEK TALK 🖖🏼 @newbalancebasketball ❤️',
    thumbnail: '/images/thumbnails/dscarss-geek.jpg',
  },
  {
    id: 'dscarss-aliens',
    type: 'instagram',
    username: 'dscarss',
    url: 'https://www.instagram.com/reel/DU52WhPkTxh/',
    caption: 'Aliens Took Over @newbalancebasketball 🖖🏼',
    thumbnail: '/images/thumbnails/dscarss-aliens.jpg',
  },
  {
    id: 'baller-bree',
    type: 'instagram',
    username: 'baller_bree',
    url: 'https://www.instagram.com/reel/DU_mhnmkpUc/',
    caption: 'W’s IN THE CHAT WITH THA GANG',
    thumbnail: '/images/thumbnails/baller-bree.jpg',
  },
  {
    id: 'kgv-sports',
    type: 'instagram',
    username: 'kgv.sports',
    url: 'https://www.instagram.com/reel/DU2HAGaEc02/',
    caption: 'Just having fun @uncleskoob 🕷️ #kgv 🚀',
    thumbnail: '/images/thumbnails/kgv-sports.jpg',
  },
  {
    id: 'juice1hunnit',
    type: 'instagram',
    username: 'juice1hunnit',
    url: 'https://www.instagram.com/reel/DU4GnW9koYk/',
    caption: '@newbalance @veniceball',
    thumbnail: '/images/thumbnails/juice1hunnit.jpg',
  },
  {
    id: 'only-winns',
    type: 'instagram',
    username: 'only.winns',
    url: 'https://www.instagram.com/reel/DVNJ2QsERN7/',
    caption: 'Getting buckets at the New Balance All Star Weekend Experience',
    thumbnail: '/images/thumbnails/only-winns.jpg',
  },
  {
    id: 'larry-sanders',
    type: 'instagram',
    username: 'thereal_larrysanders',
    url: 'https://www.instagram.com/reel/DU4Zl-tkQFU/',
    caption: 'Sometimes you just gotta shake the haters off and shoot your shot',
    thumbnail: '/images/thumbnails/larry-sanders.jpg',
  },
  {
    id: 'drew-koda-kids',
    type: 'instagram',
    username: 'drew.koda',
    url: 'https://www.instagram.com/reel/DUwtyWDCU42/',
    caption: 'We had the kids jumpin at the @veniceball x @newbalancebasketball event 🔥',
    thumbnail: '/images/thumbnails/drew-koda-kids.jpg',
  },
  {
    id: 'kymani-d2',
    type: 'instagram',
    username: 'kymani_d2',
    url: 'https://www.instagram.com/reel/DU9YWVgjVfg/',
    caption: 'Idk how but wait for it😂👀',
    thumbnail: '/images/thumbnails/kymani-d2.jpg',
  },
  {
    id: 'coloradogold',
    type: 'instagram',
    username: 'coloradogold__',
    url: 'https://www.instagram.com/reel/DU6c2Cikm4N/',
    caption: 'Buckets were handed out at the @newbalancebasketball activation',
    thumbnail: '/images/thumbnails/coloradogold.jpg',
  },
  {
    id: 'zermillion',
    type: 'instagram',
    username: 'zermillion',
    url: 'https://www.instagram.com/reel/DUsA0VVkfUH/',
    caption: 'NB🏁 ALLSTAR WEEKEND 🏁',
    thumbnail: '/images/thumbnails/zermillion.jpg',
  },
  {
    id: 'shotbydyl',
    type: 'instagram',
    username: '_shotbydyl',
    url: 'https://www.instagram.com/p/DU4GWYwkiC5/',
    caption: 'pt 2 from all ⭐️ week',
    thumbnail: '/images/thumbnails/shotbydyl.jpg',
  },
  {
    id: 'davyds',
    type: 'instagram',
    username: 'd.avyds',
    url: 'https://www.instagram.com/p/DVE4m5jkhLg/',
    caption: 'ASW LA 26’',
    thumbnail: '/images/thumbnails/davyds.jpg',
  },
  {
    id: 'reallyrarejaay',
    type: 'instagram',
    username: 'reallyrarejaay',
    url: 'https://www.instagram.com/p/DUzOUR_CTt5/',
    caption: 'Allstar Weekend 2026 ✨',
    thumbnail: '/images/thumbnails/reallyrarejaay.jpg',
  },
  {
    id: 'drew-koda-post',
    type: 'instagram',
    username: 'drew.koda',
    url: 'https://www.instagram.com/p/DU_qbcbEs0n/',
    caption: 'Koda Street Vol. 2 📼',
    thumbnail: '/images/thumbnails/drew-koda-post.jpg',
  },
  {
    id: 'kotc-youtube',
    type: 'youtube',
    videoId: '90BXJd9yDb4',
    title: 'Uncle Skoob & SCAR WENT AT IT! | KOTC Ft. J Lew, Hezi God + 5v5!!',
  },
  {
    id: 'new-video',
    type: 'youtube',
    videoId: '9BPZ2c2AnrE',
    title: 'Oakley Meta X New Balance All-Star Weekend',
  },
  {
    id: 'kicktheconcrete',
    type: 'youtube',
    videoId: 'MoU3Ag2i8po',
    title: 'New Balance NBA All-Star Los Angeles Activation',
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
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
      <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-red-500/30 group-hover:border-blue-500/50 transition duration-300">
        <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-red-900/50 to-blue-900/50">
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
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-red-500 to-blue-500 flex items-center justify-center">
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
          <div className="mt-3 text-blue-400 text-xs group-hover:text-red-400 transition-colors flex items-center gap-1">
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
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
      <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-red-500/30 group-hover:border-blue-500/50 transition duration-300">
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

export default function EventActivationPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // FIXED: Type-safe filtering with non-null assertions
  const instagramPosts = eventContent.filter(
    (item): item is typeof item & { url: string; caption: string; thumbnail: string } =>
      item.type === 'instagram' && !!item.url && !!item.caption && !!item.thumbnail
  )

  const youtubeVideos = eventContent.filter(
    (item): item is typeof item & { videoId: string; title: string } =>
      item.type === 'youtube' && !!item.videoId && !!item.title
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
          
            
            <div className="flex justify-center mt-6">
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

          <SectionDivider theme="new-balance" variant="curve" className="my-12 opacity-50" />

          <section className="my-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
                MORE FROM THE WEEKEND
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

          <footer className="w-full py-12 mt-16 border-t border-red-500/30">
            <div className="text-center">
              <Link href="https://www.newbalance.com/basketball/" target="_blank" rel="noopener noreferrer">
                <div className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-red-600/30 to-blue-600/30 backdrop-blur-sm border border-red-500/40 hover:border-blue-500/60 transition duration-300 group cursor-pointer hover:scale-105 transform">
                  <span className="text-3xl">🏀</span>
                  <span className="text-white font-bold text-xl tracking-wider">SHOP THE NEW BALANCE ALL-STAR COLLECTION</span>
                  <span className="text-3xl">👟</span>
                </div>
              </Link>
              <p className="text-white/30 text-sm mt-6">
                Capturing the energy of the 2026 NBA All-Star Weekend in Los Angeles.
              </p>
            </div>
          </footer>
        </div>
      </main>
    </ThemePage>
  )
}