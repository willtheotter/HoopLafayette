'use client'

import { type PageTheme } from '@/types'
import { useMemo } from 'react'

interface GradientBackgroundProps {
  theme: PageTheme
  gradient?: string
}

const gradients: Record<PageTheme, string> = {
  fire: 'from-black via-red-700 via-orange-600 to-yellow-500',
  
  owyhee: 'from-[#021B2B] via-[#0E7490] via-[#06B6D4] to-[#7DD3FC]',
  
  lakers: 'from-black via-purple-900 via-purple-700 to-amber-400',
  
  venice: 'from-black via-blue-950 via-blue-600 to-sky-400',
  
  mamba: 'from-black via-black via-gold-700 to-gold-500',
  
  community: 'from-black via-emerald-900 via-emerald-600 to-lime-400',
  
  snl: 'from-black via-purple-900 via-fuchsia-700 to-amber-400',
  
  'new-balance': 'from-blue-700 via-blue-600 to-rose-700',
  
  ballislife: 'from-slate-100 via-red-600 via-neutral-800 to-black',
  
  // ========== NEW THEMES ==========
  
  gold: 'from-black via-amber-900 via-yellow-600 to-amber-300',
  
  'basketball-brown': 'from-black via-amber-800 via-orange-800 to-stone-700',
  
  green: 'from-black via-emerald-900 via-green-700 to-lime-500'
}

export const GradientBackground = ({
  theme,
  gradient
}: GradientBackgroundProps) => {
  const gradientClass = useMemo(() => {
    return gradient || gradients[theme] || gradients.fire
  }, [theme, gradient])

  return (
    <>
      <div
        className={`fixed inset-0 -z-20 bg-gradient-to-br ${gradientClass} gradient-animated`}
        style={{
          backgroundSize: '200% 200%',
        }}
      />
      <div className="fixed inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent breath-animation" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-40 pulse-glow-animation bg-[radial-gradient(ellipse_at_50%_30%,rgba(255,255,255,0.25),rgba(255,255,255,0.05)_40%,transparent_70%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_40%,rgba(255,255,255,0.08),transparent_50%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.08),transparent_50%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-noise noise-animation opacity-30" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-radial from-transparent via-transparent to-black/30" />
    </>
  )
}