'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { ThemePage } from '@/components/layout/ThemePage'
import { SideNavigation } from '@/components/layout/SideNavigation'
import { HeroCarousel } from '@/components/ui/HeroCarousel'
import { VideoGrid } from '@/components/ui/VideoGrid'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { SocialFeed } from '@/components/ui/SocialFeed'
import { INSTAGRAM_POSTS } from '@/utils/constants'

export default function VeniceBeachPage() {
  const [activeCategory, setActiveCategory] = useState('highlights')

  return (
    <ThemePage theme="venice">
      <Header />
      <main className="flex text-white min-h-screen">
        <SideNavigation />
        <div className="flex-1 px-4 py-6 lg:px-8">
          <HeroCarousel />
          
          <h1 className="text-4xl font-bold mb-2">VENICE BEACH</h1>
          <p className="text-cyan-200 mb-6">Where Streetball Was Born</p>
          
          <SectionDivider theme="venice" variant="wave" />
          
          {/* History Section */}
          <section className="my-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-300">HISTORY</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { year: '1960s', desc: 'Birth of Streetball' },
                { year: '1980s', desc: 'The Golden Era' },
                { year: '2000s', desc: 'Global Recognition' },
                { year: '2024', desc: 'New Generation' }
              ].map((item) => (
                <div key={item.year} className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-cyan-500/30">
                  <h3 className="text-xl font-bold text-cyan-400">{item.year}</h3>
                  <p className="text-cyan-200">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
          
          <SectionDivider theme="venice" variant="curve" />
          
          {/* Venice Vibes */}
          <section className="my-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-300">VENICE VIBES</h2>
            <SocialFeed 
              type="instagram" 
              urls={INSTAGRAM_POSTS.veniceBeach} 
              theme="venice"
            />
          </section>
        </div>
      </main>
    </ThemePage>
  )
}