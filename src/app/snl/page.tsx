'use client'

import { Header } from '@/components/layout/Header'
import { ThemePage } from '@/components/layout/ThemePage'
import { SideNavigation } from '@/components/layout/SideNavigation'
import { HeroCarousel } from '@/components/ui/HeroCarousel'
import { SectionDivider } from '@/components/ui/SectionDivider'

export default function SNLPage() {
  const snlVideos = [
    {
      id: 'R5PY0CoxWkw',
      title: "Hoopin' & Hollerin' ep#244: Championship in SNL",
      description: "The chip! Championship game victory",
      episode: "244",
      category: "Championship"
    },
    {
      id: 'UzT7l_DZx7Q',
      title: "Hoopin' & Hollerin' ep#242: Playoffs in SNL",
      description: "Playoff game to determine who goes to the championship",
      episode: "242",
      category: "Playoffs"
    },
    {
      id: 'fGm_jt-elqU',
      title: "Hoopin' & Hollerin' ep#238: Shorthanded in SNL",
      description: "Playing with limited roster",
      episode: "238",
      category: "Highlights"
    },
    {
      id: '6Iw32ZCpE8s',
      title: "Hoopin' & Hollerin' Ep#236: Having fun in SNL",
      description: "Good team basketball and having fun",
      episode: "236",
      category: "Vibes"
    },
    {
      id: 'TyrW9sNagns',
      title: "Hoopin' & Hollerin' Ep#234: Summer League begins",
      description: "Summer League starts at Lafayette Recreation Center",
      episode: "234",
      category: "Season Opener"
    },
    {
      id: '_i6JZDH4uoI',
      title: "Hoopin' & Hollerin' Ep#186: SNL Playoff/Semi-final",
      description: "Playoff mode - win or season ends",
      episode: "186",
      category: "Playoffs"
    },
    {
      id: 'F5rLjQcythI',
      title: "Hoopin' & Hollerin' Ep#101: don't underestimate the comp",
      description: "SNL league competition",
      episode: "101",
      category: "Highlights"
    },
    {
      id: 'qEIYf5tJhUQ',
      title: "Hoopin' & Hollerin' Ep#101: SNL league",
      description: "Team chemistry and figuring it out",
      episode: "101",
      category: "Team Chemistry"
    },
    {
      id: 'fAbZ9Wdi2Ao',
      title: "Hoopin' & Hollerin' Ep#94: SNL vibes (game 2)",
      description: "Second game with new roster",
      episode: "94",
      category: "Vibes"
    },
    {
      id: '2k9-ATew2c4',
      title: "Hoopin' & Hollerin' SNL",
      description: "Summer Night Lights highlights",
      episode: "Special",
      category: "Highlights"
    },
    {
      id: 'Es2kE382nTc',
      title: "Hoopin' & Hollerin' SNL",
      description: "Summer Night Lights action",
      episode: "Special",
      category: "Action"
    },
    {
      id: 'glprSblHDt4',
      title: "Hoopin' & Hollerin' SNL",
      description: "Summer Night Lights recap",
      episode: "Special",
      category: "Recap"
    }
  ]

  const snlStats = [
    { label: 'EPISODES', value: '240+', icon: '🎬' },
    { label: 'SEASONS', value: '8', icon: '🏆' },
    { label: 'PLAYERS', value: '100+', icon: '🏀' },
    { label: 'COMMUNITY NIGHTS', value: '∞', icon: '🌙' }
  ]

  const featuredMoments = [
    { title: 'Championship Run', icon: '🏆', color: 'yellow' },
    { title: 'Playoff Intensity', icon: '🔥', color: 'purple' },
    { title: 'Team Vibes', icon: '🤝', color: 'yellow' },
    { title: 'Summer Nights', icon: '🌙', color: 'purple' }
  ]

  return (
    <ThemePage theme="snl">
      <Header />

      <main className="relative flex min-h-screen text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/40 via-black/40 to-purple-950/40 backdrop-blur-[1px] pointer-events-none" />
        
        <SideNavigation />

        <div className="relative flex-1 px-4 py-6 lg:px-8 z-10">
          <HeroCarousel />

          <div className="mt-12 mb-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-400/30">
              <span className="text-yellow-400 text-sm font-bold tracking-wider animate-pulse">🌙 LAFAYETTE REC CENTER</span>
              <span className="text-purple-400 text-sm font-bold">|</span>
              <span className="text-purple-400 text-sm font-bold tracking-wider">HOOPIN' & HOLLERIN'</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-4">
              <span className="bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300 bg-clip-text text-transparent animate-text-shimmer">
                SUMMER NIGHT
              </span>
              <br className="lg:hidden" />
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent animate-text-shimmer">
                LIGHTS
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-purple-200/90 font-light tracking-wide max-w-2xl lg:mx-0 mx-auto">
              Hoopin' & Hollerin' at Lafayette Recreation Center • Where Community Comes Alive
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-6">
              <div className="flex items-center gap-2 px-3 py-1 bg-purple-600/20 rounded-full border border-purple-400/30">
                <span className="text-purple-400 text-sm">🏀</span>
                <span className="text-xs text-white/80">Summer League</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-yellow-600/20 rounded-full border border-yellow-400/30">
                <span className="text-yellow-400 text-sm">🎬</span>
                <span className="text-xs text-white/80">240+ Episodes</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-purple-600/20 rounded-full border border-purple-400/30">
                <span className="text-purple-400 text-sm">🌙</span>
                <span className="text-xs text-white/80">Community First</span>
              </div>
            </div>
            
            <div className="h-px w-32 bg-gradient-to-r from-purple-500 via-yellow-500 to-transparent mt-8 mx-auto lg:mx-0" />
          </div>

          <SectionDivider theme="snl" variant="curve" className="my-8 opacity-80" />

          <section className="my-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-purple-300 to-yellow-300 bg-clip-text text-transparent">
                FEATURED MOMENTS
              </h2>
              <div className="hidden lg:block h-px flex-1 ml-8 bg-gradient-to-r from-purple-500/50 to-transparent" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {featuredMoments.map((moment, index) => (
                <div
                  key={moment.title}
                  className="group relative transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-yellow-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                  
                  <div className="relative bg-gradient-to-br from-purple-600/20 to-yellow-600/20 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-400/20 group-hover:border-yellow-400/50 transition-all duration-300 p-6 text-center">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {moment.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-yellow-300 transition-colors">
                      {moment.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="my-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                SNL GAME RECAPS
              </h2>
              <div className="hidden lg:block h-px flex-1 ml-8 bg-gradient-to-r from-yellow-500/50 to-transparent" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {snlVideos.map((video, index) => (
                <div
                  key={`${video.id}-${index}`}
                  className="group relative transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-yellow-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                  
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-400/20 group-hover:border-yellow-400/60 transition-all duration-300">
                    <div className="aspect-video w-full overflow-hidden relative">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full"
                      />
                      
                      <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs font-mono text-yellow-400 border border-yellow-400/30">
                        EP {video.episode}
                      </div>
                      
                      <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs font-mono text-purple-300 border border-purple-400/30">
                        {video.category}
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 mb-2">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-300">{video.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <SectionDivider theme="snl" variant="wave" className="my-12 opacity-80" />

          <section className="my-16 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-yellow-500/5 to-purple-500/5 rounded-3xl blur-3xl" />
            
            <div className="relative max-w-4xl mx-auto">
              <div className="text-8xl mb-4 opacity-50">"</div>
              <p className="text-2xl lg:text-3xl font-light italic text-purple-200 leading-relaxed">
                Good team basketball is about encouragement, willingness to see your teammates succeed, 
                and most importantly having fun while getting some buckets.
              </p>
              <div className="text-8xl mt-4 opacity-50 rotate-180">"</div>
              <p className="text-xl text-yellow-300 mt-6 font-bold">— Hoopin' & Hollerin'</p>
              <p className="text-sm text-gray-400 mt-2">#SNLVibes • #SummerNightLights • #CommunityHoops</p>
            </div>
          </section>

          <div className="py-12 mt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {snlStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-5 rounded-xl bg-gradient-to-br from-purple-600/10 to-yellow-600/10 backdrop-blur-sm border border-purple-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                  <div className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60 tracking-wider mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="py-8 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600/20 to-yellow-600/20 backdrop-blur-sm border border-purple-400/40 hover:border-yellow-400/80 transition-all duration-300 group">
              <span className="text-2xl group-hover:animate-bounce">🌙</span>
              <span className="text-white/90 text-sm tracking-wider font-bold">#SNL • #HoopinAndHollerin • #SummerNightLights • #LafayetteRec</span>
              <span className="text-2xl group-hover:animate-bounce delay-100">🏀</span>
            </div>
          </div>
        </div>
      </main>
    </ThemePage>
  )
}