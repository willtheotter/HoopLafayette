'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { ThemePage } from '@/components/layout/ThemePage'
import { SideNavigation } from '@/components/layout/SideNavigation'
import { HeroCarousel } from '@/components/ui/HeroCarousel'
import { VideoGrid } from '@/components/ui/VideoGrid'
import { SectionDivider } from '@/components/ui/SectionDivider'

const ballislifeGradient = 'bg-gradient-to-br from-white via-gray-100 to-black'

export default function BallislifePage() {
  const [activeCategory, setActiveCategory] = useState('highlights')

  return (
    <ThemePage theme="ballislife" gradient={ballislifeGradient}>
      <Header />
      <main className="flex text-black min-h-screen">
        <SideNavigation />
        <div className="flex-1 px-4 py-6 lg:px-8 text-black">
          <HeroCarousel />
          
          <h1 className="text-4xl font-bold mb-2 text-gray-900">BALLISLIFE TAKEOVER</h1>
          <p className="text-gray-700 mb-6">Street Basketball Culture</p>
          
          <SectionDivider theme="ballislife" variant="wave" />
          
          <section className="my-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Park Takeovers</h2>
            <VideoGrid category={activeCategory} />
          </section>
          
          <SectionDivider theme="ballislife" variant="curve" />
          
          <section className="my-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Featured Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'Streetball' },
                { title: 'Highlights' },
                { title: 'Culture' }
              ].map((item) => (
                <div key={item.title} className="bg-white/30 backdrop-blur-sm p-6 rounded-lg text-center border border-yellow-400/30">
                  <h3 className="font-bold">{item.title}</h3>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </ThemePage>
  )
}