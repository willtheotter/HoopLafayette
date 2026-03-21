'use client'

import { Header } from '@/components/layout/Header'
import { ThemePage } from '@/components/layout/ThemePage'
import { SideNavigation } from '@/components/layout/SideNavigation'
import { HeroCarousel } from '@/components/ui/HeroCarousel'
import { SectionDivider } from '@/components/ui/SectionDivider'

export default function KobeTributePage() {
  // 8 Kobe tribute videos
  const kobeVideos = [
    {
      id: '46nYnjGdQlk',
      title: "Kobe's IMMORTAL 81-PT Performance | 20th Anniversary",
      description: "The legendary 81-point game"
    },
    {
      id: 'RvtxDjKJ5Jk',
      title: "Kobe Bryant's Best Speech | Greatest Motivation Ever",
      description: "Mamba mentality motivational speech"
    },
    {
      id: '2NVfbAtNvpY',
      title: "Kobe Bryant's Most CLUTCH Moments!",
      description: "Clutch shots and game winners"
    },
    {
      id: 'RFA-cvi0xcE',
      title: "Kobe Bryant's Top 40 Clutch Moments",
      description: "40 unforgettable clutch performances"
    },
    {
      id: 'lfkUs6jQ_EU',
      title: "Kobe Bryant's Top 40 Motivational Speeches",
      description: "Life-changing Mamba mindset"
    },
    {
      id: 'vjXK91jf-Zc',
      title: "Kobe Bryant's Best Play of EACH NBA All-Star Game",
      description: "All-Star game highlights"
    },
    {
      id: '1fjhIWJSxfw',
      title: "Kobe Bryant's TOP 40 Plays of His NBA Career!",
      description: "The best plays from a legendary career"
    },
    {
      id: 'h0qglJu0aD8',
      title: "Kobe System | Nike Commercial",
      description: "Iconic Nike commercial"
    }
  ]

  return (
    <ThemePage theme="mamba">
      <Header />
      <main className="flex text-white min-h-screen">
        <SideNavigation />
        <div className="flex-1 px-4 py-6 lg:px-8">
          <HeroCarousel />
          
          <h1 className="text-4xl font-bold mb-2 text-yellow-300 mt-8">KOBE BRYANT</h1>
          <p className="text-purple-200 mb-6">1978 - 2020 | Mamba Mentality Forever</p>
          
          <SectionDivider theme="mamba" variant="angle" />
          
          {/* Video Grid - 8 videos */}
          <section className="my-12">
            <h2 className="text-2xl font-bold mb-6 text-yellow-300">TRIBUTE COLLECTION</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {kobeVideos.map((video, index) => (
                <div key={video.id} className="group">
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
          
          <SectionDivider theme="mamba" variant="curve" />
          
          {/* Quote Section */}
          <section className="my-12 text-center">
            <p className="text-2xl italic text-yellow-300 max-w-2xl mx-auto">
              "The most important thing is to try and inspire people so that they can be great in whatever they want to do."
            </p>
            <p className="text-gray-400 mt-4">— Kobe Bryant</p>
          </section>
        </div>
      </main>
    </ThemePage>
  )
}