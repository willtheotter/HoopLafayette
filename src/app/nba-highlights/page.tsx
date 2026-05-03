'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { ThemePage } from '@/components/layout/ThemePage'
import { SideNavigation } from '@/components/layout/SideNavigation'
import { ThemeBanner } from '@/components/ui/ThemeBanner'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { ThemeAnimations } from '@/components/ui/ThemeAnimations'

interface NBAHighlight {
  id: string
  videoId: string
  era: string
  popularity: number // 1-10 scale for ordering
}

const nbaHighlightsContent: NBAHighlight[] = [
  // 1980s (Ordered by popularity: Magic/Bird rivalry, Jordan's rise, iconic moments)
  { id: '80-1', videoId: 'XSPIQiFAe6U', era: '1980s', popularity: 10 },
  { id: '80-2', videoId: '4GYKrcM1k0U', era: '1980s', popularity: 10 },
  { id: '80-3', videoId: 'lKO7_3xYaE8', era: '1980s', popularity: 9 },
  { id: '80-4', videoId: '9KBAqe14ZzQ', era: '1980s', popularity: 8 },
  { id: '80-5', videoId: 'qXrsMfRhwUg', era: '1980s', popularity: 8 },
  { id: '80-6', videoId: '2T2z658blzE', era: '1980s', popularity: 7 },
  { id: '80-7', videoId: 'v7Id88T5DPs', era: '1980s', popularity: 7 },
  { id: '80-8', videoId: 'so8R3NTbnEw', era: '1980s', popularity: 7 },
  { id: '80-9', videoId: '5Uw6GkySKuo', era: '1980s', popularity: 6 },
  { id: '80-10', videoId: 'Pqbv1bzddFE', era: '1980s', popularity: 6 },
  { id: '80-11', videoId: 'jK6OPqHpyWo', era: '1980s', popularity: 6 },
  { id: '80-12', videoId: 'i21lbFPGFoM', era: '1980s', popularity: 6 },
  { id: '80-13', videoId: 'xWoF-76R8bU', era: '1980s', popularity: 5 },
  { id: '80-14', videoId: '9m3PhW6yYEQ', era: '1980s', popularity: 5 },
  { id: '80-15', videoId: 'prvjNFHSOj0', era: '1980s', popularity: 5 },

  // 1990s (Ordered by popularity: Jordan dynasty, Dream Team, iconic moments)
  { id: '90-1', videoId: 'Bpv7wPgoFBM', era: '1990s', popularity: 10 },
  { id: '90-2', videoId: 'fRFD4VNrcIk', era: '1990s', popularity: 10 },
  { id: '90-3', videoId: 'E7mMhPNpSiM', era: '1990s', popularity: 9 },
  { id: '90-4', videoId: 'jH-uHgdzpXQ', era: '1990s', popularity: 8 },
  { id: '90-5', videoId: '_m8OeZWbcOE', era: '1990s', popularity: 9 },
  { id: '90-6', videoId: 'igsb2tOqDJ8', era: '1990s', popularity: 8 },
  { id: '90-7', videoId: 'KGLFK0I6-mk', era: '1990s', popularity: 8 },
  { id: '90-8', videoId: 'ZePWG9ifsXY', era: '1990s', popularity: 9 },
  { id: '90-9', videoId: 'Wsk_Xmu5FYk', era: '1990s', popularity: 7 },
  { id: '90-10', videoId: 'JTNIWbGmzGU', era: '1990s', popularity: 7 },

  // 2000s (Ordered by popularity: Kobe, Shaq, LeBron early years)
  { id: '00-1', videoId: 'V6DRL-Q_3AY', era: '2000s', popularity: 10 },
  { id: '00-2', videoId: 'OUaXbXD_F80', era: '2000s', popularity: 10 },
  { id: '00-3', videoId: 'zxIN_b-vhNQ', era: '2000s', popularity: 9 },
  { id: '00-4', videoId: 'd-GkwUKBgio', era: '2000s', popularity: 10 },
  { id: '00-5', videoId: 'ELFyIMddrtE', era: '2000s', popularity: 8 },
  { id: '00-6', videoId: 'EpKyctdIOV0', era: '2000s', popularity: 9 },
  { id: '00-7', videoId: '7EvPtggzPtY', era: '2000s', popularity: 9 },
  { id: '00-8', videoId: 'O36HRlMjLXQ', era: '2000s', popularity: 9 },
  { id: '00-9', videoId: 'sSqMbOXkXSg', era: '2000s', popularity: 8 },
  { id: '00-10', videoId: 'Nma1MOe0WbQ', era: '2000s', popularity: 7 },
  { id: '00-11', videoId: '6O8qiBzaKIg', era: '2000s', popularity: 7 },
  { id: '00-12', videoId: 'nWpw41yqwk0', era: '2000s', popularity: 7 },

  // 2010s (Ordered by popularity: LeBron's titles, Curry revolution, big moments)
  { id: '10-1', videoId: 'H3n-GWmCE8g', era: '2010s', popularity: 10 },
  { id: '10-2', videoId: 'vHJ8avygjBY', era: '2010s', popularity: 10 },
  { id: '10-3', videoId: 'kwYApqSdHbc', era: '2010s', popularity: 10 },
  { id: '10-4', videoId: 'Sedat305uCE', era: '2010s', popularity: 9 },
  { id: '10-5', videoId: 'd5zj2VBJJ7Y', era: '2010s', popularity: 9 },
  { id: '10-6', videoId: 'HBHEIXjFrPk', era: '2010s', popularity: 8 },
  { id: '10-7', videoId: '8oXbCUdVU9Y', era: '2010s', popularity: 8 },
  { id: '10-8', videoId: 'spRUq9fNHNk', era: '2010s', popularity: 7 },
  { id: '10-9', videoId: 'wepkN0KOGKE', era: '2010s', popularity: 7 },
  { id: '10-10', videoId: 'RBiy-Ij4yvY', era: '2010s', popularity: 8 },
  { id: '10-11', videoId: 'omgSQFiF4WI', era: '2010s', popularity: 7 },

  // 2020s (Ordered by popularity: Recent champions, Giannis, Jokic, new stars)
  { id: '20-1', videoId: '9GH0M2ZHSTw', era: '2020s', popularity: 10 },
  { id: '20-2', videoId: 'rp8mc34NztY', era: '2020s', popularity: 10 },
  { id: '20-3', videoId: '-aUNr9PKT6M', era: '2020s', popularity: 10 },
  { id: '20-4', videoId: '7A-QGpW2GnA', era: '2020s', popularity: 9 },
  { id: '20-5', videoId: 'HGEMlhXLIJc', era: '2020s', popularity: 9 },
  { id: '20-6', videoId: 'MOPjtuzoSyA', era: '2020s', popularity: 8 },
  { id: '20-7', videoId: 'XlqZ--6jkbQ', era: '2020s', popularity: 10 },
  { id: '20-8', videoId: 'oNG4qTstFzI', era: '2020s', popularity: 8 },
]

const NBAHighlightCard = ({ videoId }: { videoId: string }) => {
  return (
    <div className="group relative transition-all duration-500 hover:-translate-y-2">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-700 via-amber-600 to-orange-700 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition duration-300" />
      <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-orange-500/30 group-hover:border-orange-400/70 transition-all duration-300">
        <div className="aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={`NBA highlight ${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}

export default function NBAHighlightsPage() {
  const [mounted, setMounted] = useState(false)
  const [selectedEra, setSelectedEra] = useState('All')

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const eras = ['All', '1980s', '1990s', '2000s', '2010s', '2020s']
  
  const filteredContent = selectedEra === 'All' 
    ? nbaHighlightsContent 
    : nbaHighlightsContent.filter(item => item.era === selectedEra)

  return (
    <ThemePage theme="basketball-brown">
      <Header />
      
      <main className="relative flex min-h-screen text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-950/50 via-black/50 to-amber-950/50 pointer-events-none" />
        
        <SideNavigation />

        <div className="relative flex-1 px-4 py-6 lg:px-8 z-10">
          <ThemeBanner 
            theme="basketball-brown"
            title="NBA Highlights"
            subtitle="Greatest moments in basketball history - From Magic & Bird to LeBron & Curry"
            pattern="stripes"
            size="xl"
          />

          <SectionDivider theme="basketball-brown" variant="curve" className="my-12 opacity-50" />

          {/* Era Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {eras.map((era) => {
                const eraCount = era === 'All' 
                  ? nbaHighlightsContent.length 
                  : nbaHighlightsContent.filter(item => item.era === era).length
                
                return (
                  <button
                    key={era}
                    onClick={() => setSelectedEra(era)}
                    className={`px-6 py-2 rounded-full transition-all duration-300 ${
                      selectedEra === era
                        ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg'
                        : 'bg-black/50 border border-orange-500/30 text-orange-400 hover:bg-orange-500/20'
                    }`}
                  >
                    {era} ({eraCount})
                  </button>
                )
              })}
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mb-8 text-center">
            <p className="text-orange-400/60 text-sm">
              Showing {filteredContent.length} highlight{filteredContent.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Highlights Grid */}
          <section className="my-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredContent.map((item, index) => (
                <ThemeAnimations key={item.id} theme="basketball-brown" delay={index * 0.05}>
                  <NBAHighlightCard 
                    videoId={item.videoId}
                  />
                </ThemeAnimations>
              ))}
            </div>
          </section>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-16 p-6 bg-black/40 rounded-xl border border-orange-500/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">{eras.length - 1}</div>
              <div className="text-sm text-white/60">Eras</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">{nbaHighlightsContent.length}</div>
              <div className="text-sm text-white/60">Highlights</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">50+</div>
              <div className="text-sm text-white/60">Legendary Players</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">1980-2024</div>
              <div className="text-sm text-white/60">Years Covered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">🏆</div>
              <div className="text-sm text-white/60">Championship Moments</div>
            </div>
          </div>

          <footer className="w-full py-12 mt-16 border-t border-orange-500/30 text-center">
            <p className="text-white/40 text-sm">
              🏀 Reliving the greatest moments in NBA history | {nbaHighlightsContent.length}+ iconic highlights
            </p>
          </footer>
        </div>
      </main>
    </ThemePage>
  )
}