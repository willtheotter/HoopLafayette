'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { ThemePage } from '@/components/layout/ThemePage'
import { SideNavigation } from '@/components/layout/SideNavigation'
import { HeroCarousel } from '@/components/ui/HeroCarousel'
import { VideoGrid } from '@/components/ui/VideoGrid'
import { SectionDivider } from '@/components/ui/SectionDivider'

const newBalanceGradient = 'bg-gradient-to-br from-red-600 via-purple-600 to-blue-600'

export default function NewBalancePage() {
  const [activeCategory, setActiveCategory] = useState('highlights')

  return (
    <ThemePage theme="new-balance" gradient={newBalanceGradient}>
      <Header />
      <main className="flex text-white min-h-screen">
        <SideNavigation />
        <div className="flex-1 px-4 py-6 lg:px-8">
          <HeroCarousel />
          
          <h1 className="text-4xl font-bold mb-2">NEW BALANCE ALLSTAR</h1>
          <p className="text-gray-200 mb-6">Allstar Weekend Activation</p>
          
          <SectionDivider theme="new-balance" variant="wave" />
          
          <section className="my-12">
            <h2 className="text-2xl font-bold mb-4">Featured Highlights</h2>
            <VideoGrid category={activeCategory} />
          </section>
        </div>
      </main>
    </ThemePage>
  )
}