export interface Video {
  id: string
  title?: string
  url: string
  type: 'youtube' | 'instagram'
  category?: string
  date?: string
  duration?: string
  stats?: string
  year?: string
}

export interface Category {
  id: string
  name: string
  playlist: string
  icon?: string
  description?: string
}

export interface Theme {
  name: string
  gradient: string
  overlay: string
  text: string
  accent: string
  border: string
  video: string
  pattern?: string
  shadow?: string
}

export type PageTheme = 'fire' | 'owyhee' | 'lakers' | 'venice' | 'mamba' | 'community' | 'snl' | 'new-balance' | 'ballislife'

// Theme configurations
export const themeConfig: Record<PageTheme, Theme> = {
  fire: {
    name: 'Fire',
    gradient: 'from-black via-red-700 via-orange-600 to-yellow-500',
    overlay: 'bg-gradient-to-b from-red-950/40 via-black/40 to-orange-950/40',
    text: 'text-white',
    accent: 'text-orange-500',
    border: 'border-orange-500',
    video: 'border-orange-500/30 hover:border-orange-500/60',
    pattern: 'flame-pattern',
    shadow: 'shadow-glow-fire'
  },
  owyhee: {
    name: 'Owyhee',
    gradient: 'from-[#021B2B] via-[#0E7490] via-[#06B6D4] to-[#7DD3FC]',
    overlay: 'bg-gradient-to-b from-cyan-950/40 via-teal-900/30 to-cyan-950/40',
    text: 'text-white',
    accent: 'text-cyan-400',
    border: 'border-cyan-400',
    video: 'border-cyan-400/30 hover:border-cyan-400/60',
    pattern: 'wave-pattern',
    shadow: 'shadow-glow-venice'
  },
  lakers: {
    name: 'Lakers',
    gradient: 'from-black via-purple-900 via-purple-700 to-amber-400',
    overlay: 'bg-gradient-to-b from-purple-950/40 via-black/40 to-amber-950/40',
    text: 'text-white',
    accent: 'text-lakers-gold',
    border: 'border-lakers-gold',
    video: 'border-amber-400/30 hover:border-amber-400/60',
    pattern: 'stripes-pattern',
    shadow: 'shadow-glow-lakers'
  },
  venice: {
    name: 'Venice Beach',
    gradient: 'from-black via-blue-950 via-blue-600 to-sky-400',
    overlay: 'bg-gradient-to-b from-cyan-950/40 via-blue-950/40 to-cyan-950/40',
    text: 'text-white',
    accent: 'text-cyan-400',
    border: 'border-cyan-400',
    video: 'border-cyan-400/30 hover:border-cyan-400/60',
    pattern: 'wave-pattern',
    shadow: 'shadow-glow-venice'
  },
  mamba: {
    name: 'Mamba Mentality',
    gradient: 'from-black via-black via-gold-700 to-gold-500',
    overlay: 'bg-gradient-to-b from-black/60 via-black/50 to-gold-900/20',
    text: 'text-gold-400',
    accent: 'text-gold-400',
    border: 'border-gold-400',
    video: 'border-gold-400/30 hover:border-gold-400/60',
    pattern: 'snake-pattern',
    shadow: 'shadow-glow-mamba'
  },
  community: {
    name: 'Community',
    gradient: 'from-black via-emerald-900 via-emerald-600 to-lime-400',
    overlay: 'bg-gradient-to-b from-emerald-950/40 via-black/40 to-lime-950/40',
    text: 'text-white',
    accent: 'text-emerald-400',
    border: 'border-emerald-400',
    video: 'border-emerald-400/30 hover:border-emerald-400/60',
    pattern: 'dots-pattern',
    shadow: 'shadow-glow-fire'
  },
  snl: {
    name: 'Summer Night Lights',
    gradient: 'from-black via-purple-900 via-fuchsia-700 to-amber-400',
    overlay: 'bg-gradient-to-b from-purple-950/40 via-black/40 to-amber-950/40',
    text: 'text-white',
    accent: 'text-amber-400',
    border: 'border-amber-400',
    video: 'border-amber-400/30 hover:border-amber-400/60',
    pattern: 'stripes-pattern',
    shadow: 'shadow-glow-lakers'
  },
  'new-balance': {
    name: 'New Balance',
    gradient: 'from-blue-700 via-blue-600 to-rose-700',
    overlay: 'bg-gradient-to-b from-blue-950/40 via-black/40 to-rose-950/40',
    text: 'text-white',
    accent: 'text-blue-400',
    border: 'border-blue-400',
    video: 'border-blue-400/30 hover:border-blue-400/60',
    pattern: 'stripes-pattern',
    shadow: 'shadow-glow-fire'
  },
  ballislife: {
    name: 'Ballislife',
    gradient: 'from-slate-100 via-red-600 via-neutral-800 to-black',
    overlay: 'bg-gradient-to-b from-red-950/40 via-black/40 to-slate-950/40',
    text: 'text-white',
    accent: 'text-red-500',
    border: 'border-red-500',
    video: 'border-red-500/30 hover:border-red-500/60',
    pattern: 'flame-pattern',
    shadow: 'shadow-glow-fire'
  }
}

// Helper function to get theme configuration
export const getThemeConfig = (theme: PageTheme): Theme => {
  return themeConfig[theme] || themeConfig.fire
}

// Helper function to get gradient class
export const getGradientClass = (theme: PageTheme, customGradient?: string): string => {
  if (customGradient) return customGradient
  return themeConfig[theme]?.gradient || themeConfig.fire.gradient
}

// Helper function to get overlay class
export const getOverlayClass = (theme: PageTheme): string => {
  return themeConfig[theme]?.overlay || themeConfig.fire.overlay
}

// Helper function to get border class
export const getBorderClass = (theme: PageTheme): string => {
  return themeConfig[theme]?.border || themeConfig.fire.border
}

// Helper function to get accent class
export const getAccentClass = (theme: PageTheme): string => {
  return themeConfig[theme]?.accent || themeConfig.fire.accent
}

// Theme-specific animation variants
export const themeAnimations = {
  fire: {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 }
  },
  mamba: {
    hover: { scale: 1.02, transition: { duration: 0.3 } },
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  },
  venice: {
    hover: { y: -5, transition: { duration: 0.3 } },
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  },
  lakers: {
    hover: { scale: 1.02, x: 5, transition: { duration: 0.3 } },
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 }
  },
  owyhee: {
    hover: { y: -3, transition: { duration: 0.3 } },
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  },
  snl: {
    hover: { rotate: 2, transition: { duration: 0.3 } },
    initial: { opacity: 0, rotate: -5 },
    animate: { opacity: 1, rotate: 0 }
  },
  'new-balance': {
    hover: { scale: 1.03, transition: { duration: 0.3 } },
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 }
  },
  ballislife: {
    hover: { y: -2, transition: { duration: 0.3 } },
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 }
  },
  community: {
    hover: { scale: 1.03, transition: { duration: 0.3 } },
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 }
  },
  default: {
    hover: { scale: 1.02, transition: { duration: 0.3 } },
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  }
}

// Get animation variant for a specific theme
export const getThemeAnimation = (theme: PageTheme) => {
  return themeAnimations[theme] || themeAnimations.default
}