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

export const themes: Record<string, Theme> = {
  fire: {
    name: 'What\'s Hot',
    gradient: 'from-orange-600/30 via-red-600/30 to-orange-800/30',
    overlay: 'bg-black/40',
    text: 'text-orange-100',
    accent: 'text-orange-400',
    border: 'border-orange-500',
    video: '/videos/fire-bg.mp4',
    pattern: 'fire-pattern'
  },
  owyhee: {
    name: 'Laffy Moments',
    gradient: 'from-blue-600/30 via-cyan-500/30 to-teal-600/30',
    overlay: 'bg-blue-900/40',
    text: 'text-blue-50',
    accent: 'text-cyan-300',
    border: 'border-cyan-400',
    video: '/videos/owyhee-bg.mp4',
    pattern: 'wave-pattern'
  },
  lakers: {
    name: 'GOTD & SNL',
    gradient: 'from-purple-700/30 via-yellow-500/30 to-purple-900/30',
    overlay: 'bg-purple-900/40',
    text: 'text-yellow-50',
    accent: 'text-yellow-400',
    border: 'border-yellow-400',
    video: '/videos/lakers-bg.mp4',
    pattern: 'lakers-pattern'
  },
  venice: {
    name: 'Venice Beach',
    gradient: 'from-cyan-500/30 via-blue-500/30 to-indigo-600/30',
    overlay: 'bg-blue-800/40',
    text: 'text-cyan-50',
    accent: 'text-cyan-300',
    border: 'border-cyan-300',
    video: '/videos/waves-bg.mp4',
    pattern: 'wave-pattern'
  },
  mamba: {
    name: 'Kobe Tribute',
    gradient: 'from-zinc-800/50 via-gray-900/50 to-black/50',
    overlay: 'bg-black/60',
    text: 'text-gray-100',
    accent: 'text-yellow-400',
    border: 'border-yellow-500',
    video: '/videos/snake-bg.mp4',
    pattern: 'snake-texture'
  },
  community: {
    name: 'Community Service',
    gradient: 'from-green-600/30 via-emerald-600/30 to-teal-600/30',
    overlay: 'bg-green-900/40',
    text: 'text-green-50',
    accent: 'text-emerald-400',
    border: 'border-emerald-400',
    video: '/videos/community-bg.mp4',
    pattern: 'community-pattern'
  }
}