'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { ThemePage } from '@/components/layout/ThemePage'
import { SideNavigation } from '@/components/layout/SideNavigation'
import { HeroCarousel } from '@/components/ui/HeroCarousel'
import { SectionDivider } from '@/components/ui/SectionDivider'
import Link from 'next/link'

const kobeGradient = 'from-amber-600 via-black to-amber-700'

const eventContent = [
  // YouTube Shorts (8 shorts)
  {
    id: 'kobe-short-1',
    type: 'youtube',
    videoId: 'yBEaH80AcEc',
  },
  {
    id: 'kobe-short-2',
    type: 'youtube',
    videoId: 'rvuaGxOVXyo',
  },
  {
    id: 'kobe-short-3',
    type: 'youtube',
    videoId: 'icoyAVuJGZQ',
  },
  {
    id: 'kobe-short-4',
    type: 'youtube',
    videoId: 'Uhdn0NzvHoc',
  },
  {
    id: 'kobe-short-5',
    type: 'youtube',
    videoId: 'pRImm0zFlCU',
  },
  {
    id: 'kobe-short-6',
    type: 'youtube',
    videoId: 'C8mdP5m7GwA',
  },
  {
    id: 'kobe-short-7',
    type: 'youtube',
    videoId: 'a7i0zqfShDY',
  },
  {
    id: 'kobe-short-8',
    type: 'youtube',
    videoId: '1E_xWzmb46U',
  },
  // Existing Videos (no titles)
  {
    id: 'kobe-81-points',
    type: 'youtube',
    videoId: '46nYnjGdQlk',
  },
  {
    id: 'kobe-speech',
    type: 'youtube',
    videoId: 'RvtxDjKJ5Jk',
  },
  {
    id: 'kobe-clutch',
    type: 'youtube',
    videoId: '2NVfbAtNvpY',
  },
  {
    id: 'kobe-clutch-40',
    type: 'youtube',
    videoId: 'RFA-cvi0xcE',
  },
  {
    id: 'kobe-speeches-40',
    type: 'youtube',
    videoId: 'lfkUs6jQ_EU',
  },
  {
    id: 'kobe-allstar',
    type: 'youtube',
    videoId: 'vjXK91jf-Zc',
  },
  {
    id: 'kobe-top-40-plays',
    type: 'youtube',
    videoId: '1fjhIWJSxfw',
  },
  {
    id: 'kobe-nike-commercial',
    type: 'youtube',
    videoId: 'h0qglJu0aD8',
  },
]

const YouTubeCard = ({ videoId }: { videoId: string }) => {
  return (
    <div className="group relative transition duration-500 hover:-translate-y-2">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
      <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-amber-500/30 group-hover:border-amber-500/50 transition duration-300">
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

export default function KobeTributePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // Type-safe filtering with non-null assertions
  const youtubeVideos = eventContent.filter(
    (item): item is typeof item & { videoId: string } =>
      item.type === 'youtube' && !!item.videoId
  )

  return (
    <ThemePage theme="mamba" gradient={kobeGradient}>
      <Header />

      <main className="relative flex min-h-screen text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/40 via-black/50 to-black/80 pointer-events-none" />
        
        <SideNavigation />

        <div className="relative flex-1 px-4 py-6 lg:px-8 z-10">
          <HeroCarousel />

          <div className="mt-12 mb-8 text-center">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-4">
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                KOBE
              </span>
              <br />
              <span className="text-3xl lg:text-4xl font-bold text-white/80">
                MAMBA FOREVER
              </span>
            </h1>
          
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link href="https://www.nike.com/kobe" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-3 px-8 py-3 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition duration-300 backdrop-blur-sm">
                  <span className="text-xl">🐍</span>
                  <span className="text-lg font-semibold">Honor the Legacy</span>
                </div>
              </Link>
            </div>
            
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mt-8 mx-auto" />
          </div>

          <SectionDivider theme="mamba" variant="wave" className="my-8 opacity-50" />

          <section className="my-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                SHORTS
              </h2>
              <div className="hidden lg:block h-px flex-1 ml-8 bg-gradient-to-r from-amber-500/50 to-transparent" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {youtubeVideos.slice(0, 8).map((item) => (
                <YouTubeCard 
                  key={item.id} 
                  videoId={item.videoId} 
                />
              ))}
            </div>
          </section>

          <SectionDivider theme="mamba" variant="curve" className="my-12 opacity-50" />

          <section className="my-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                CLASSIC MOMENTS
              </h2>
              <div className="hidden lg:block h-px flex-1 ml-8 bg-gradient-to-r from-amber-500/50 to-transparent" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {youtubeVideos.slice(8).map((item) => (
                <YouTubeCard 
                  key={item.id} 
                  videoId={item.videoId} 
                />
              ))}
            </div>
          </section>

          <footer className="w-full py-12 mt-16 border-t border-amber-500/30">
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Link href="/" className="text-white/50 hover:text-amber-400 text-sm transition">Home</Link>
                <span className="text-white/20">•</span>
                <Link href="/youtube-classics" className="text-white/50 hover:text-yellow-400 text-sm transition">YouTube Classics</Link>
                <span className="text-white/20">•</span>
                <Link href="/nba-highlights" className="text-white/50 hover:text-orange-400 text-sm transition">NBA Highlights</Link>
                <span className="text-white/20">•</span>
                <Link href="/newsletter" className="text-white/50 hover:text-green-400 text-sm transition">Newsletter</Link>
                <span className="text-white/20">•</span>
                <Link href="/themes" className="text-white/50 hover:text-white text-sm transition">All Themes</Link>
              </div>
              
              <Link href="https://www.nike.com/kobe" target="_blank" rel="noopener noreferrer">
                <div className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-amber-600/30 to-black/60 backdrop-blur-sm border border-amber-500/40 hover:border-amber-500/60 transition duration-300 group cursor-pointer hover:scale-105 transform">
                  <span className="text-3xl">🐍</span>
                  <span className="text-white font-bold text-xl tracking-wider">MAMBA MENTALITY FOREVER</span>
                  <span className="text-3xl">💛</span>
                </div>
              </Link>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                  <span className="text-lg">🏆</span>
                  <span className="text-white/60 text-sm">5x NBA Champion</span>
                </div>
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                  <span className="text-lg">⭐</span>
                  <span className="text-white/60 text-sm">18x All-Star</span>
                </div>
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                  <span className="text-lg">🔥</span>
                  <span className="text-white/60 text-sm">81 Points</span>
                </div>
              </div>
              <p className="text-white/30 text-sm mt-6">
                1978 - 2020 • 5x NBA Champion • 18x All-Star • 81 Points • Mamba Mentality • Legend Never Dies
              </p>
              <p className="text-white/20 text-xs mt-4">
                © {new Date().getFullYear()} Lafayette Hoops • In Memory of Kobe Bryant
              </p>
            </div>
          </footer>
        </div>
      </main>
    </ThemePage>
  )
}