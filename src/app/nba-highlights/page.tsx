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
  title: string
  year: string
  player: string
  team: string
  stat: string
  era: string
  popularity: number // 1-10 scale for ordering
}

const nbaHighlightsContent: NBAHighlight[] = [
  // 1980s (Ordered by popularity: Magic/Bird rivalry, Jordan's rise, iconic moments)
  {
    id: '80-1',
    videoId: 'XSPIQiFAe6U',
    title: 'Magic Johnson vs Larry Bird - The Greatest Rivalry',
    year: '1987',
    player: 'Magic Johnson & Larry Bird',
    team: 'Lakers vs Celtics',
    stat: 'NBA Finals Classic',
    era: '1980s',
    popularity: 10
  },
  {
    id: '80-2',
    videoId: '4GYKrcM1k0U',
    title: 'Michael Jordan - 63 Points vs Celtics (Playoffs Record)',
    year: '1986',
    player: 'Michael Jordan',
    team: 'Bulls',
    stat: '63 pts, 6 ast, 5 reb',
    era: '1980s',
    popularity: 10
  },
  {
    id: '80-3',
    videoId: 'lKO7_3xYaE8',
    title: 'Michael Jordan - "The Shot" Over Craig Ehlo',
    year: '1989',
    player: 'Michael Jordan',
    team: 'Bulls',
    stat: 'Series-winning shot',
    era: '1980s',
    popularity: 9
  },
  {
    id: '80-4',
    videoId: '9KBAqe14ZzQ',
    title: 'Magic Johnson - Baby Hook Shot (1987 Finals Game 4)',
    year: '1987',
    player: 'Magic Johnson',
    team: 'Lakers',
    stat: 'Game-winning hook',
    era: '1980s',
    popularity: 8
  },
  {
    id: '80-5',
    videoId: 'qXrsMfRhwUg',
    title: 'Larry Bird - The Steal vs Pistons (1987 ECF)',
    year: '1987',
    player: 'Larry Bird',
    team: 'Celtics',
    stat: 'Clutch steal & assist',
    era: '1980s',
    popularity: 8
  },
  {
    id: '80-6',
    videoId: '2T2z658blzE',
    title: '1988 NBA Finals - Isiah Thomas 43 Points on Ankle',
    year: '1988',
    player: 'Isiah Thomas',
    team: 'Pistons',
    stat: '43 pts, 8 ast, 6 stl',
    era: '1980s',
    popularity: 7
  },
  {
    id: '80-7',
    videoId: 'v7Id88T5DPs',
    title: 'Dominique Wilkins vs Larry Bird Duel (1988 ECSF)',
    year: '1988',
    player: 'Dominique Wilkins',
    team: 'Hawks',
    stat: '47 pts in Game 7',
    era: '1980s',
    popularity: 7
  },
  {
    id: '80-8',
    videoId: 'so8R3NTbnEw',
    title: 'Julius Erving - The Baseline Move',
    year: '1980',
    player: 'Julius Erving',
    team: 'Sixers',
    stat: 'Iconic reverse layup',
    era: '1980s',
    popularity: 7
  },
  {
    id: '80-9',
    videoId: '5Uw6GkySKuo',
    title: 'Kareem Abdul-Jabbar - The Skyhook Highlights',
    year: '1985',
    player: 'Kareem Abdul-Jabbar',
    team: 'Lakers',
    stat: 'Unstoppable skyhook',
    era: '1980s',
    popularity: 6
  },
  {
    id: '80-10',
    videoId: 'Pqbv1bzddFE',
    title: 'James Worthy - Big Game James 36pt Triple Double',
    year: '1988',
    player: 'James Worthy',
    team: 'Lakers',
    stat: '36 pts, 16 reb, 10 ast',
    era: '1980s',
    popularity: 6
  },
  {
    id: '80-11',
    videoId: 'jK6OPqHpyWo',
    title: 'Clyde Drexler - The Glide Highlights',
    year: '1988',
    player: 'Clyde Drexler',
    team: 'Trail Blazers',
    stat: 'High-flying dunks',
    era: '1980s',
    popularity: 6
  },
  {
    id: '80-12',
    videoId: 'i21lbFPGFoM',
    title: 'Hakeem Olajuwon - The Dream Shake (Rookie Year)',
    year: '1985',
    player: 'Hakeem Olajuwon',
    team: 'Rockets',
    stat: 'Signature dream shake',
    era: '1980s',
    popularity: 6
  },
  {
    id: '80-13',
    videoId: 'xWoF-76R8bU',
    title: 'John Stockton & Karl Malone - Pick and Roll Masters',
    year: '1988',
    player: 'John Stockton',
    team: 'Jazz',
    stat: '17 ast, 20 pts',
    era: '1980s',
    popularity: 5
  },
  {
    id: '80-14',
    videoId: '9m3PhW6yYEQ',
    title: 'David Robinson - The Admiral 71 Points',
    year: '1989',
    player: 'David Robinson',
    team: 'Spurs',
    stat: '71 pts, 14 reb',
    era: '1980s',
    popularity: 5
  },
  {
    id: '80-15',
    videoId: 'prvjNFHSOj0',
    title: 'Patrick Ewing - Georgetown to MSG Highlights',
    year: '1985',
    player: 'Patrick Ewing',
    team: 'Knicks',
    stat: 'Rookie of the Year',
    era: '1980s',
    popularity: 5
  },

  // 1990s (Ordered by popularity: Jordan dynasty, Dream Team, iconic moments)
  {
    id: '90-1',
    videoId: 'Bpv7wPgoFBM',
    title: 'Michael Jordan - Flu Game (1997 Finals)',
    year: '1997',
    player: 'Michael Jordan',
    team: 'Bulls',
    stat: '38 pts, 7 reb, 5 ast',
    era: '1990s',
    popularity: 10
  },
  {
    id: '90-2',
    videoId: 'fRFD4VNrcIk',
    title: 'Michael Jordan - The Last Shot (1998 Finals)',
    year: '1998',
    player: 'Michael Jordan',
    team: 'Bulls',
    stat: 'Game-winner for 6th title',
    era: '1990s',
    popularity: 10
  },
  {
    id: '90-3',
    videoId: 'E7mMhPNpSiM',
    title: 'Michael Jordan - Double Nickel Return Game',
    year: '1995',
    player: 'Michael Jordan',
    team: 'Bulls',
    stat: '55 pts vs Knicks',
    era: '1990s',
    popularity: 9
  },
  {
    id: '90-4',
    videoId: 'jH-uHgdzpXQ',
    title: 'Scottie Pippen - The Dunk on Ewing',
    year: '1994',
    player: 'Scottie Pippen',
    team: 'Bulls',
    stat: 'Iconic playoff dunk',
    era: '1990s',
    popularity: 8
  },
  {
    id: '90-5',
    videoId: '_m8OeZWbcOE',
    title: '1992 Dream Team - Greatest Ever',
    year: '1992',
    player: 'Jordan, Magic, Bird',
    team: 'USA Basketball',
    stat: 'Gold Medal - Avg win by 44',
    era: '1990s',
    popularity: 9
  },
  {
    id: '90-6',
    videoId: 'igsb2tOqDJ8',
    title: 'Hakeem Olajuwon - Dream Shake Destroying David Robinson',
    year: '1995',
    player: 'Hakeem Olajuwon',
    team: 'Rockets',
    stat: '35 pts vs MVP Robinson',
    era: '1990s',
    popularity: 8
  },
  {
    id: '90-7',
    videoId: 'KGLFK0I6-mk',
    title: 'Shaquille O\'Neal - Rookie Season Dominance',
    year: '1992',
    player: 'Shaquille O\'Neal',
    team: 'Magic',
    stat: '23 pts, 14 reb, 4 blk',
    era: '1990s',
    popularity: 8
  },
  {
    id: '90-8',
    videoId: 'ZePWG9ifsXY',
    title: 'Reggie Miller - 8 Points in 9 Seconds',
    year: '1995',
    player: 'Reggie Miller',
    team: 'Pacers',
    stat: '8 pts in 9 sec vs Knicks',
    era: '1990s',
    popularity: 9
  },
  {
    id: '90-9',
    videoId: 'Wsk_Xmu5FYk',
    title: 'Charles Barkley - The Round Mound of Rebound',
    year: '1993',
    player: 'Charles Barkley',
    team: 'Suns',
    stat: 'MVP Season: 25/12/5',
    era: '1990s',
    popularity: 7
  },
  {
    id: '90-10',
    videoId: 'JTNIWbGmzGU',
    title: 'Gary Payton - The Glove Defense on Jordan',
    year: '1996',
    player: 'Gary Payton',
    team: 'SuperSonics',
    stat: 'Defensive Player of Year',
    era: '1990s',
    popularity: 7
  },

  // 2000s (Ordered by popularity: Kobe, Shaq, LeBron early years)
  {
    id: '00-1',
    videoId: 'V6DRL-Q_3AY',
    title: 'Kobe Bryant - 81 Point Game Full Highlights',
    year: '2006',
    player: 'Kobe Bryant',
    team: 'Lakers',
    stat: '81 pts, 6 reb, 2 ast',
    era: '2000s',
    popularity: 10
  },
  {
    id: '00-2',
    videoId: 'OUaXbXD_F80',
    title: 'Kobe Bryant - Final Game 60 Points',
    year: '2016',
    player: 'Kobe Bryant',
    team: 'Lakers',
    stat: '60 pts, 4 reb, 4 ast',
    era: '2000s',
    popularity: 10
  },
  {
    id: '00-3',
    videoId: 'zxIN_b-vhNQ',
    title: 'Shaq & Kobe - Lakers Three-Peat Dynasty',
    year: '2001',
    player: 'Shaquille O\'Neal',
    team: 'Lakers',
    stat: '35 pts, 17 reb in Finals',
    era: '2000s',
    popularity: 9
  },
  {
    id: '00-4',
    videoId: 'd-GkwUKBgio',
    title: 'LeBron James - 48 Points vs Pistons (2007 ECF)',
    year: '2007',
    player: 'LeBron James',
    team: 'Cavaliers',
    stat: '48 pts, 9 reb, 7 ast',
    era: '2000s',
    popularity: 10
  },
  {
    id: '00-5',
    videoId: 'ELFyIMddrtE',
    title: 'Tim Duncan - 2003 Finals Near Quadruple-Double',
    year: '2003',
    player: 'Tim Duncan',
    team: 'Spurs',
    stat: '21 pts, 20 reb, 10 ast, 8 blk',
    era: '2000s',
    popularity: 8
  },
  {
    id: '00-6',
    videoId: 'EpKyctdIOV0',
    title: 'Allen Iverson - Step Over Tyronn Lue',
    year: '2001',
    player: 'Allen Iverson',
    team: 'Sixers',
    stat: '48 pts in Finals Game 1',
    era: '2000s',
    popularity: 9
  },
  {
    id: '00-7',
    videoId: '7EvPtggzPtY',
    title: 'Vince Carter - 2000 Dunk Contest GOAT',
    year: '2000',
    player: 'Vince Carter',
    team: 'Raptors',
    stat: 'Best dunk contest ever',
    era: '2000s',
    popularity: 9
  },
  {
    id: '00-8',
    videoId: 'O36HRlMjLXQ',
    title: 'Tracy McGrady - 13 Points in 33 Seconds',
    year: '2004',
    player: 'Tracy McGrady',
    team: 'Rockets',
    stat: '13 pts in 33 sec vs Spurs',
    era: '2000s',
    popularity: 9
  },
  {
    id: '00-9',
    videoId: 'sSqMbOXkXSg',
    title: 'Dwyane Wade - 2006 Finals Comeback',
    year: '2006',
    player: 'Dwyane Wade',
    team: 'Heat',
    stat: '36 pts per game in Finals',
    era: '2000s',
    popularity: 8
  },
  {
    id: '00-10',
    videoId: 'Nma1MOe0WbQ',
    title: 'Steve Nash - Two-Time MVP Highlights',
    year: '2005',
    player: 'Steve Nash',
    team: 'Suns',
    stat: '7 Seconds or Less offense',
    era: '2000s',
    popularity: 7
  },
  {
    id: '00-11',
    videoId: '6O8qiBzaKIg',
    title: 'Dirk Nowitzki - One-Legged Fadeaway',
    year: '2007',
    player: 'Dirk Nowitzki',
    team: 'Mavericks',
    stat: 'MVP Season: 24.6 PPG',
    era: '2000s',
    popularity: 7
  },
  {
    id: '00-12',
    videoId: 'nWpw41yqwk0',
    title: 'Paul Pierce - 2008 Finals MVP Performance',
    year: '2008',
    player: 'Paul Pierce',
    team: 'Celtics',
    stat: '22 pts, 6 reb, 6 ast',
    era: '2000s',
    popularity: 7
  },

  // 2010s (Ordered by popularity: LeBron's titles, Curry revolution, big moments)
  {
    id: '10-1',
    videoId: 'H3n-GWmCE8g',
    title: 'LeBron James - The Block (Game 7, 2016 Finals)',
    year: '2016',
    player: 'LeBron James',
    team: 'Cavaliers',
    stat: '27 pts, 11 reb, 11 ast',
    era: '2010s',
    popularity: 10
  },
  {
    id: '10-2',
    videoId: 'vHJ8avygjBY',
    title: 'LeBron James - The Chase Down Block on Iguodala',
    year: '2016',
    player: 'LeBron James',
    team: 'Cavaliers',
    stat: 'Iconic Finals block',
    era: '2010s',
    popularity: 10
  },
  {
    id: '10-3',
    videoId: 'kwYApqSdHbc',
    title: 'Stephen Curry - 2016 Unanimous MVP Highlights',
    year: '2016',
    player: 'Stephen Curry',
    team: 'Warriors',
    stat: '402 3PM in a season',
    era: '2010s',
    popularity: 10
  },
  {
    id: '10-4',
    videoId: 'Sedat305uCE',
    title: 'Klay Thompson - 37 Points in a Quarter',
    year: '2015',
    player: 'Klay Thompson',
    team: 'Warriors',
    stat: '37 pts, 9/9 3PM in quarter',
    era: '2010s',
    popularity: 9
  },
  {
    id: '10-5',
    videoId: 'd5zj2VBJJ7Y',
    title: 'Kawhi Leonard - The Bounce Game 7 Winner',
    year: '2019',
    player: 'Kawhi Leonard',
    team: 'Raptors',
    stat: 'Game 7 buzzer-beater',
    era: '2010s',
    popularity: 9
  },
  {
    id: '10-6',
    videoId: 'HBHEIXjFrPk',
    title: 'Derrick Rose - Youngest MVP Highlights',
    year: '2011',
    player: 'Derrick Rose',
    team: 'Bulls',
    stat: '25 PPG, 7.7 APG',
    era: '2010s',
    popularity: 8
  },
  {
    id: '10-7',
    videoId: '8oXbCUdVU9Y',
    title: 'Kevin Durant - Back-to-Back Finals MVPs',
    year: '2018',
    player: 'Kevin Durant',
    team: 'Warriors',
    stat: '28.8 PPG in Finals',
    era: '2010s',
    popularity: 8
  },
  {
    id: '10-8',
    videoId: 'spRUq9fNHNk',
    title: 'Giannis Antetokounmpo - Rising Star',
    year: '2019',
    player: 'Giannis Antetokounmpo',
    team: 'Bucks',
    stat: 'MVP Season: 27/12/6',
    era: '2010s',
    popularity: 7
  },
  {
    id: '10-9',
    videoId: 'wepkN0KOGKE',
    title: 'James Harden - The Stepback Revolution',
    year: '2018',
    player: 'James Harden',
    team: 'Rockets',
    stat: '36 PPG MVP Season',
    era: '2010s',
    popularity: 7
  },
  {
    id: '10-10',
    videoId: 'RBiy-Ij4yvY',
    title: 'Russell Westbrook - Triple Double Season',
    year: '2017',
    player: 'Russell Westbrook',
    team: 'Thunder',
    stat: '42 triple-doubles',
    era: '2010s',
    popularity: 8
  },
  {
    id: '10-11',
    videoId: 'omgSQFiF4WI',
    title: 'Damian Lillard - Dame Time Playoff Winners',
    year: '2019',
    player: 'Damian Lillard',
    team: 'Trail Blazers',
    stat: 'Series-clinching buzzer-beater',
    era: '2010s',
    popularity: 7
  },

  // 2020s (Ordered by popularity: Recent champions, Giannis, Jokic, new stars)
  {
    id: '20-1',
    videoId: '9GH0M2ZHSTw',
    title: 'Giannis Antetokounmpo - 50 Points in Finals Closer',
    year: '2021',
    player: 'Giannis Antetokounmpo',
    team: 'Bucks',
    stat: '50 pts, 14 reb, 5 blk',
    era: '2020s',
    popularity: 10
  },
  {
    id: '20-2',
    videoId: 'rp8mc34NztY',
    title: 'Nikola Jokic - 2023 Finals MVP Performance',
    year: '2023',
    player: 'Nikola Jokic',
    team: 'Nuggets',
    stat: '30 pts, 14 reb, 7 ast',
    era: '2020s',
    popularity: 10
  },
  {
    id: '20-3',
    videoId: '-aUNr9PKT6M',
    title: 'Stephen Curry - 2022 Finals MVP & 4th Ring',
    year: '2022',
    player: 'Stephen Curry',
    team: 'Warriors',
    stat: '34 PPG in Finals',
    era: '2020s',
    popularity: 10
  },
  {
    id: '20-4',
    videoId: '7A-QGpW2GnA',
    title: 'Jayson Tatum & Jaylen Brown - Celtics Dynasty Rising',
    year: '2024',
    player: 'Jayson Tatum',
    team: 'Celtics',
    stat: 'NBA Champions 2024',
    era: '2020s',
    popularity: 9
  },
  {
    id: '20-5',
    videoId: 'HGEMlhXLIJc',
    title: 'Luka Doncic - 73 Point Game',
    year: '2024',
    player: 'Luka Doncic',
    team: 'Mavericks',
    stat: '73 pts, 10 reb, 7 ast',
    era: '2020s',
    popularity: 9
  },
  {
    id: '20-6',
    videoId: 'MOPjtuzoSyA',
    title: 'Ja Morant - Most Viral Dunks',
    year: '2022',
    player: 'Ja Morant',
    team: 'Grizzlies',
    stat: 'High-flying poster dunks',
    era: '2020s',
    popularity: 8
  },
  {
    id: '20-7',
    videoId: 'XlqZ--6jkbQ',
    title: 'LeBron James - All-Time Scoring Record',
    year: '2023',
    player: 'LeBron James',
    team: 'Lakers',
    stat: '38,390+ career points',
    era: '2020s',
    popularity: 10
  },
  {
    id: '20-8',
    videoId: 'oNG4qTstFzI',
    title: 'Victor Wembanyama - Rookie Sensation',
    year: '2024',
    player: 'Victor Wembanyama',
    team: 'Spurs',
    stat: 'Rookie of the Year',
    era: '2020s',
    popularity: 8
  }
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
            loading="lazy"
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