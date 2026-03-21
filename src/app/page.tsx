'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { ThemePage } from '@/components/layout/ThemePage'
import { SideNavigation } from '@/components/layout/SideNavigation'
import { HeroCarousel } from '@/components/ui/HeroCarousel'
import { CategoryTabs } from '@/components/ui/CategoryTabs'
import { VideoGrid } from '@/components/ui/VideoGrid'
import { SectionDivider } from '@/components/ui/SectionDivider'

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('oneonone')

  return (
    <ThemePage theme="fire">
      <Header />
      <main className="flex text-white min-h-screen">
        <SideNavigation />
        <div className="flex-1 px-4 py-6 lg:px-8">
          <HeroCarousel />
          <SectionDivider theme="fire" variant="wave" />
          <section className="my-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">WHAT'S HOT</h2>
            </div>
            <CategoryTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
            <div className="mt-8">
              <VideoGrid category={activeCategory} />
            </div>
          </section>
          <SectionDivider theme="fire" variant="curve" />
          {/* Featured Events removed */}
        </div>
      </main>
    </ThemePage>
  )
}