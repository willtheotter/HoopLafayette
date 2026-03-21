'use client'

import { ReactNode } from 'react'
import { GradientBackground } from '@/components/ui/GradientBackground'
import { type PageTheme } from '@/types'

interface ThemePageProps {
  theme: PageTheme
  gradient?: string // Optional custom gradient
  children: ReactNode
}

export const ThemePage = ({ theme, gradient, children }: ThemePageProps) => {
  return (
    <div className="relative min-h-screen">
      <GradientBackground theme={theme} gradient={gradient} />
      <div className="relative z-10 pt-20 lg:pt-24">
        {children}
      </div>
    </div>
  )
}