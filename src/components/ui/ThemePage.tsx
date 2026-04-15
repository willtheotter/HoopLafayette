'use client'

import { type PageTheme } from '@/types'
import { GradientBackground } from '@/components/ui/GradientBackground'

interface ThemePageProps {
  children: React.ReactNode
  theme: PageTheme
  gradient?: string
}

export const ThemePage = ({ children, theme, gradient }: ThemePageProps) => {
  return (
    <div className="relative min-h-screen">
      <GradientBackground theme={theme} gradient={gradient} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}