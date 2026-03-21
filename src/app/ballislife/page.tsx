'use client'

import { Header } from '@/components/layout/Header'
import { ThemePage } from '@/components/layout/ThemePage'
import { SideNavigation } from '@/components/layout/SideNavigation'
import { HeroCarousel } from '@/components/ui/HeroCarousel'
import { SectionDivider } from '@/components/ui/SectionDivider'

const ballislifeGradient = 'bg-gradient-to-br from-white via-gray-100 to-black'

export default function BallislifePage() {
  return (
    <ThemePage theme="ballislife" gradient={ballislifeGradient}>
      <Header />
      <main className="flex text-black min-h-screen">
        <SideNavigation />
        <div className="flex-1 px-4 py-6 lg:px-8 text-black">
          <HeroCarousel />
          
          <h1 className="text-4xl font-bold mb-2 text-gray-900 mt-8">BALLISLIFE TAKEOVER</h1>
          <p className="text-gray-700 mb-6">Street Basketball Culture</p>
          
          <SectionDivider theme="ballislife" variant="wave" />
          
          <section className="my-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">PARK TAKEOVERS</h2>
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl bg-black/50">
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=PLN3FmH1w6ROvAJfdzB_0QQ_9GPHb57b6H"
                title="Ballislife Takeovers Playlist"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <p className="text-center text-sm text-gray-500 mt-3">
              📺 Scroll within the player to browse all takeover videos
            </p>
          </section>
          
          <SectionDivider theme="ballislife" variant="curve" />
          
          <section className="my-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">STREETBALL CULTURE</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'Streetball', desc: 'The raw essence of basketball' },
                { title: 'Highlights', desc: 'Best plays from the streets' },
                { title: 'Culture', desc: 'The lifestyle and community' }
              ].map((item) => (
                <div key={item.title} className="bg-white/30 backdrop-blur-sm p-6 rounded-lg text-center border border-yellow-400/30">
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </ThemePage>
  )
}