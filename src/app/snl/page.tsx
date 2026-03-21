'use client'

import { Header } from '@/components/layout/Header'
import { ThemePage } from '@/components/layout/ThemePage'
import { SideNavigation } from '@/components/layout/SideNavigation'
import { HeroCarousel } from '@/components/ui/HeroCarousel'
import { SectionDivider } from '@/components/ui/SectionDivider'

export default function SNLPage() {
  // SNL Hoopin' & Hollerin' episodes
  const snlVideos = [
    {
      id: 'R5PY0CoxWkw',
      title: "Hoopin' & Hollerin' ep#244: Championship in SNL",
      description: "The chip! Championship game victory"
    },
    {
      id: 'UzT7l_DZx7Q',
      title: "Hoopin' & Hollerin' ep#242: Playoffs in SNL",
      description: "Playoff game to determine who goes to the championship"
    },
    {
      id: 'fGm_jt-elqU',
      title: "Hoopin' & Hollerin' ep#238: Shorthanded in SNL",
      description: "Playing with limited roster"
    },
    {
      id: '6Iw32ZCpE8s',
      title: "Hoopin' & Hollerin' Ep#236: Having fun in SNL",
      description: "Good team basketball and having fun"
    },
    {
      id: 'TyrW9sNagns',
      title: "Hoopin' & Hollerin' Ep#234: Summer League begins",
      description: "Summer League starts at Lafayette Recreation Center"
    },
    {
      id: '_i6JZDH4uoI',
      title: "Hoopin' & Hollerin' Ep#186: SNL Playoff/Semi-final",
      description: "Playoff mode - win or season ends"
    },
    {
      id: 'F5rLjQcythI',
      title: "Hoopin' & Hollerin' Ep#101: don't underestimate the comp",
      description: "SNL league competition"
    },
    {
      id: 'qEIYf5tJhUQ',
      title: "Hoopin' & Hollerin' Ep#101: SNL league",
      description: "Team chemistry and figuring it out"
    },
    {
      id: 'fAbZ9Wdi2Ao',
      title: "Hoopin' & Hollerin' Ep#94: SNL vibes (game 2)",
      description: "Second game with new roster"
    },
    {
      id: '2k9-ATew2c4',
      title: "Hoopin' & Hollerin' SNL",
      description: "Summer Night Lights highlights"
    },
    {
      id: 'Es2kE382nTc',
      title: "Hoopin' & Hollerin' SNL",
      description: "Summer Night Lights action"
    },
    {
      id: 'glprSblHDt4',
      title: "Hoopin' & Hollerin' SNL",
      description: "Summer Night Lights recap"
    }
  ]

  return (
    <ThemePage theme="snl">
      <Header />
      <main className="flex text-white min-h-screen">
        <SideNavigation />
        <div className="flex-1 px-4 py-6 lg:px-8">
          <HeroCarousel />
          
          <h1 className="text-4xl font-bold mb-2 mt-8">
            <span className="text-purple-300">SUMMER NIGHT</span>{' '}
            <span className="text-yellow-400">LIGHTS</span>
          </h1>
          <p className="text-purple-200 mb-6">Hoopin' & Hollerin' at Lafayette Recreation Center</p>
          
          <SectionDivider theme="snl" variant="curve" />
          
          {/* Video Grid */}
          <section className="my-12">
            <h2 className="text-2xl font-bold mb-6 text-yellow-400">SNL GAME RECAPS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {snlVideos.map((video, index) => (
                <div key={`${video.id}-${index}`} className="group">
                  <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl bg-black/50">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-bold mt-3 group-hover:text-yellow-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{video.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          <SectionDivider theme="snl" variant="wave" />
          
          {/* Quote Section */}
          <section className="my-12 text-center">
            <p className="text-xl italic text-purple-300 max-w-2xl mx-auto">
              "Good team basketball is about encouragement, willingness to see your teammates succeed, and most importantly having fun while getting some buckets."
            </p>
            <p className="text-gray-400 mt-4">— Hoopin' & Hollerin'</p>
          </section>
        </div>
      </main>
    </ThemePage>
  )
}