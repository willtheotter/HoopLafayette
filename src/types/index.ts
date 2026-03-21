export interface Video {
  id: string
  title?: string
  url: string
  type: 'youtube' | 'instagram' // Simplified to match SocialEmbed
  category?: string
  date?: string
}

export interface Category {
  id: string
  name: string
  playlist: string
  icon?: string
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
}

export type PageTheme = 'fire' | 'owyhee' | 'lakers' | 'venice' | 'mamba' | 'community'