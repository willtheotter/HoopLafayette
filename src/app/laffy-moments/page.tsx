'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { ThemePage } from '@/components/layout/ThemePage'
import { SideNavigation } from '@/components/layout/SideNavigation'
import { HeroCarousel } from '@/components/ui/HeroCarousel'
import { VideoGrid } from '@/components/ui/VideoGrid'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { SocialFeed } from '@/components/ui/SocialFeed'
import { INSTAGRAM_POSTS, YOUTUBE_PLAYLISTS } from '@/utils/constants'

export default function LaffyMomentsPage() {
  const [activeCategory, setActiveCategory] = useState('highlights')

  return (
    <ThemePage theme="owyhee">
      <Header />
      <main className="flex text-white min-h-screen">
        <SideNavigation />
        <div className="flex-1 px-4 py-6 lg:px-8">
          {/* ✅ Hero Carousel Added */}
          <HeroCarousel />
          
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            LAFFY MOMENTS
          </h1>
          <p className="text-blue-200 mb-6">The Best of Lafayette Streetball</p>
          
          <SectionDivider theme="owyhee" variant="wave" />
          
          {/* Instagram Reels */}
          <section className="my-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">INSTAGRAM REELS</h2>
            <SocialFeed 
              type="instagram" 
              urls={INSTAGRAM_POSTS.laffyMoments} 
              theme="owyhee"
            />
          </section>
          
          <SectionDivider theme="owyhee" variant="curve" />
          
          {/* YouTube Highlights */}
          <section className="my-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">HIGHLIGHTS</h2>
            <SocialFeed 
              type="youtube" 
              urls={[YOUTUBE_PLAYLISTS.highlights]} 
              theme="owyhee"
            />
          </section>
        </div>
      </main>
    </ThemePage>
  )
}