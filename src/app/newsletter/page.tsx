'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { ThemePage } from '@/components/layout/ThemePage'
import { SideNavigation } from '@/components/layout/SideNavigation'
import { ThemeBanner } from '@/components/ui/ThemeBanner'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { ThemeAnimations } from '@/components/ui/ThemeAnimations'
import Link from 'next/link'

export default function NewsletterPage() {
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setSubscribed(true)
      setIsLoading(false)
      setEmail('')
    }, 1000)
  }

  if (!mounted) return null

  const benefits = [
    { icon: '🏆', title: 'Weekly Classics', desc: 'Hand-picked YouTube classics every Sunday' },
    { icon: '🏀', title: 'NBA Highlights', desc: 'Top 10 plays & game recaps' },
    { icon: '🔥', title: 'Exclusive Content', desc: 'Behind-the-scenes & never-before-seen' },
    { icon: '📅', title: 'Event Updates', desc: 'Pro-AM, streetball tournaments & more' },
    { icon: '🎁', title: 'Giveaways', desc: 'Merch, tickets & special prizes' },
    { icon: '💬', title: 'Community Spotlights', desc: 'Fan features & top comments' },
  ]

  const pastIssues = [
    { date: 'April 28, 2026', title: 'Classic Dunks of the 90s', preview: 'From Jordan to Kemp...' },
    { date: 'April 21, 2026', title: 'Streetball Legends', preview: 'The AND1 Mixtape era...' },
    { date: 'April 14, 2026', title: 'Playoff Moments', preview: 'Game winners & buzzer beaters...' },
  ]

  return (
    <ThemePage theme="green">
      <Header />
      
      <main className="relative flex min-h-screen text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/40 via-black/50 to-green-950/40 pointer-events-none" />
        
        <SideNavigation />

        <div className="relative flex-1 px-4 py-6 lg:px-8 z-10">
          <ThemeBanner 
            theme="green"
            title="Newsletter"
            subtitle="Stay in the loop with weekly updates"
            pattern="waves"
            size="xl"
          />

          <SectionDivider theme="green" variant="wave" className="my-12 opacity-50" />

          {/* Benefits Grid */}
          <section className="my-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 bg-clip-text text-transparent">
                Why Subscribe?
              </h2>
              <p className="text-white/60 mt-2">Get the best hoops content delivered to your inbox</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <ThemeAnimations key={index} theme="green" delay={index * 0.05}>
                  <div className="group bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 hover:border-green-400/60 transition-all duration-300 hover:scale-105">
                    <div className="text-4xl mb-3">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-green-400 mb-2">{benefit.title}</h3>
                    <p className="text-white/60 text-sm">{benefit.desc}</p>
                  </div>
                </ThemeAnimations>
              ))}
            </div>
          </section>

          <SectionDivider theme="green" variant="curve" className="my-12 opacity-50" />

          {/* Subscribe Form */}
          <section className="my-16 max-w-2xl mx-auto">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30">
              {!subscribed ? (
                <>
                  <h3 className="text-2xl font-bold text-center text-green-400 mb-4">
                    Subscribe Now
                  </h3>
                  <p className="text-white/70 text-center mb-6">
                    Join our community of hoop heads — no spam, just 🔥 content
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-green-500/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-green-400 transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold hover:from-emerald-500 hover:to-green-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" />
                      ) : (
                        'Subscribe →'
                      )}
                    </button>
                  </form>
                  <p className="text-white/40 text-xs text-center mt-4">
                    By subscribing, you agree to our Privacy Policy
                  </p>
                </>
              ) : (
                <ThemeAnimations theme="green">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-2xl font-bold text-green-400 mb-2">
                      Thanks for Subscribing!
                    </h3>
                    <p className="text-white/70">
                      Check your inbox for the confirmation email.
                    </p>
                    <button
                      onClick={() => setSubscribed(false)}
                      className="mt-6 px-6 py-2 rounded-lg border border-green-500/50 text-green-400 hover:bg-green-500/20 transition-all"
                    >
                      Subscribe another email
                    </button>
                  </div>
                </ThemeAnimations>
              )}
            </div>
          </section>

          <SectionDivider theme="green" variant="wave" className="my-12 opacity-50" />

          {/* Past Issues */}
          <section className="my-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">
                Past Issues
              </h2>
              <p className="text-white/60 mt-2">Catch up on what you missed</p>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {pastIssues.map((issue, index) => (
                <ThemeAnimations key={index} theme="green" delay={index * 0.1}>
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-green-500/30 hover:border-green-400/60 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <p className="text-green-400 text-sm">{issue.date}</p>
                        <h3 className="text-lg font-bold text-white">{issue.title}</h3>
                        <p className="text-white/60 text-sm">{issue.preview}</p>
                      </div>
                      <button className="px-4 py-2 rounded-lg border border-green-500/50 text-green-400 hover:bg-green-500/20 transition-all whitespace-nowrap">
                        Read More →
                      </button>
                    </div>
                  </div>
                </ThemeAnimations>
              ))}
            </div>
          </section>

          <footer className="w-full py-12 mt-16 border-t border-green-500/30 text-center">
            <p className="text-white/40 text-sm">
              📧 Join thousands of subscribers getting weekly hoops content
            </p>
          </footer>
        </div>
      </main>
    </ThemePage>
  )
}