'use client'

import { type PageTheme } from '@/types'

interface GradientBackgroundProps {
  theme: PageTheme
  gradient?: string
}

export const GradientBackground = ({ theme, gradient }: GradientBackgroundProps) => {
  // Theme-based gradients
  const gradients = {
    fire: 'bg-gradient-to-br from-orange-600 via-red-600 to-orange-800',
    owyhee: 'bg-gradient-to-br from-[#5EC2D1] via-[#4FB8C8] to-[#6CC9D6]',
    lakers: 'bg-gradient-to-br from-purple-700 via-black to-yellow-500',
    venice: 'bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700',
    mamba: 'bg-gradient-to-br from-purple-800 via-yellow-500 to-yellow-400',
    community: 'bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600',
    snl: 'bg-gradient-to-br from-purple-800 via-black to-yellow-600',
    'new-balance': 'bg-gradient-to-br from-red-600 via-purple-600 to-blue-600',
    ballislife: 'bg-gradient-to-br from-white via-gray-100 to-black'
  }

  const gradientClass = gradient || gradients[theme] || gradients.fire

  return (
    <>
      <div className={`fixed inset-0 -z-20 ${gradientClass}`} />
      <div className="fixed inset-0 -z-10 bg-black/40" />
    </>
  )
}