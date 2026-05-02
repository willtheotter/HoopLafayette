'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { ThemePage } from '@/components/layout/ThemePage'
import { SideNavigation } from '@/components/layout/SideNavigation'
import { ThemeBanner } from '@/components/ui/ThemeBanner'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { ThemeAnimations } from '@/components/ui/ThemeAnimations'
import Link from 'next/link'

const nbaHighlightsContent = [
  {
    id: '1',
    videoId: 'LAr7VjWX6U0',
    title: 'Michael Jordan - "The Flu Game" 1997 Finals',
    year: '1997',
    player: 'Michael Jordan',
    team: 'Bulls',
    stat: '38 pts, 7 reb, 5 ast',
  },
  {
    id: '2',
    videoId: 'UZfHbjOkYOk',
    title: 'Kobe Bryant - 81 Point Game FULL Highlights',
    year: '2006',
    player: 'Kobe Bryant',
    team: 'Lakers',
    stat: '81 pts, 6 reb, 2 ast',
  },
  {
    id: '3',
    videoId: 'H_RyfoRtdJg',
    title: 'LeBron James - The Block (Game 7, 2016 Finals)',
    year: '2016',
    player: 'LeBron James',
    team: 'Cavaliers',
    stat: '27 pts, 11 reb, 11 ast',
  },
  {
    id: '4',
    videoId: 't5JQr1Pm0Z8',
    title: 'Stephen Curry - Greatest Shots of All Time',
    year: '2016',
    player: 'Stephen Curry',
    team: 'Warriors',
    stat: '402 3PM in a season',
  },
  {
    id: '5',
    videoId: 'Z4tLpsZqF-c',
    title: 'Allen Iverson - Crossover on MJ Rookie Year',
    year: '1997',
    player: 'Allen Iverson',
    team: 'Sixers',
    stat: '23 pts, 5 ast',
  },
  {
    id: '6',
    videoId: 'Q-cUxK8B0QM',
    title: 'Vince Carter - Dunk Contest (Best Ever)',
    year: '2000',
    player: 'Vince Carter',
    team: 'Raptors',
    stat: '50 points in contest',
  },
  {
    id: '7',
    videoId: 'j-_7Ud-Zx6M',
    title: 'Magic Johnson - 1980 Finals (42 pts, 15 reb)',
    year: '1980',
    player: 'Magic Johnson',
    team: 'Lakers',
    stat: '42 pts, 15 reb, 7 ast',
  },
  {
    id: '8',
    videoId: 'YVpyD6iY2oQ',
    title: 'Larry Bird - Greatest Trash Talker',
    year: '1987',
    player: 'Larry Bird',
    team: 'Celtics',
    stat: '34 pts, 8 reb, 6 ast',
  },
  {
    id: '9',
    videoId: 'wD3Zt4C6p0U',
    title: 'Shaq & Kobe - Dynasty Highlights',
    year: '2001',
    player: 'Shaquille O\'Neal',
    team: 'Lakers',
    stat: '35 pts, 17 reb in Finals',
  },
]

const NBAHighlightCard = ({ videoId, title, year, player, team, stat }: { videoId: string; title: string; year: string; player: string; team: string; stat: string }) => {
  return (
    <div className="group relative transition-all duration-500 hover:-translate-y-2">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-700 via-amber-600 to-orange-700 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition duration-300" />
      <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-orange-500/30 group-hover:border-orange-400/70 transition-all duration-300">
        <div className="aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-orange-400 group-hover:text-orange-300 transition-colors line-clamp-2">
            {title}
          </h3>
          <div className="mt-2 space-y-1 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-amber-500">🏀 {player}</span>
              <span className="text-orange-500">•</span>
              <span className="text-orange-400">{team}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-amber-400">📅 {year}</span>
              <span className="text-amber-400">📊 {stat}</span>
            </div>
          </div>
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

  const eras = ['All', '1980s', '1990s', '2000s', '2010s']
  const filteredContent = selectedEra === 'All' 
    ? nbaHighlightsContent 
    : nbaHighlightsContent.filter(item => {
        const decade = Math.floor(parseInt(item.year) / 10) * 10
        return `${decade}s` === selectedEra
      })

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
            subtitle="Greatest moments in basketball history"
            pattern="stripes"
            size="xl"
          />

          <SectionDivider theme="basketball-brown" variant="curve" className="my-12 opacity-50" />

          {/* Era Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {eras.map((era) => (
                <button
                  key={era}
                  onClick={() => setSelectedEra(era)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedEra === era
                      ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg'
                      : 'bg-black/50 border border-orange-500/30 text-orange-400 hover:bg-orange-500/20'
                  }`}
                >
                  {era}
                </button>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <section className="my-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredContent.map((item, index) => (
                <ThemeAnimations key={item.id} theme="basketball-brown" delay={index * 0.05}>
                  <NBAHighlightCard 
                    videoId={item.videoId}
                    title={item.title}
                    year={item.year}
                    player={item.player}
                    team={item.team}
                    stat={item.stat}
                  />
                </ThemeAnimations>
              ))}
            </div>
          </section>

          <footer className="w-full py-12 mt-16 border-t border-orange-500/30 text-center">
            <p className="text-white/40 text-sm">
              🏀 Reliving the greatest moments in NBA history
            </p>
          </footer>
        </div>
      </main>
    </ThemePage>
  )
}