'use client'

interface LoadingStateProps {
  theme: 'fire' | 'owyhee' | 'lakers' | 'venice' | 'mamba' | 'community'
  type?: 'skeleton' | 'spinner' | 'pulse'
  count?: number
}

export const LoadingState = ({ theme, type = 'skeleton', count = 6 }: LoadingStateProps) => {
  const themeColors = {
    fire: 'from-orange-500/20 to-red-500/20',
    mamba: 'from-zinc-700/20 to-zinc-900/20',
    venice: 'from-cyan-500/20 to-blue-500/20',
    lakers: 'from-purple-500/20 to-yellow-500/20',
    owyhee: 'from-blue-400/20 to-cyan-400/20',
    community: 'from-green-500/20 to-emerald-500/20'
  }

  const spinnerColors = {
    fire: 'border-orange-500',
    mamba: 'border-yellow-500',
    venice: 'border-cyan-500',
    lakers: 'border-yellow-400',
    owyhee: 'border-cyan-400',
    community: 'border-green-500'
  }

  if (type === 'spinner') {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="relative">
          <div className={`w-16 h-16 border-4 border-t-transparent rounded-full animate-spin ${spinnerColors[theme]}`} />
          <div className="absolute inset-0 blur-xl animate-pulse bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
    )
  }

  if (type === 'pulse') {
    return (
      <div className="space-y-8">
        {/* Header pulse */}
        <div className="h-12 w-64 mx-auto rounded-lg animate-pulse bg-gradient-to-r from-gray-700 to-gray-800" />
        
        {/* Grid pulses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(count).fill(0).map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="aspect-video rounded-xl animate-pulse bg-gradient-to-r from-gray-700 to-gray-800" />
              <div className="h-4 w-3/4 rounded animate-pulse bg-gradient-to-r from-gray-700 to-gray-800" />
              <div className="h-4 w-1/2 rounded animate-pulse bg-gradient-to-r from-gray-700 to-gray-800" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Skeleton grid (default)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array(count).fill(0).map((_, i) => (
        <div key={i} className="space-y-4">
          <div className={`aspect-video rounded-xl bg-gradient-to-r ${themeColors[theme]} animate-pulse`} />
          <div className={`h-4 w-3/4 rounded bg-gradient-to-r ${themeColors[theme]} animate-pulse`} />
          <div className={`h-4 w-1/2 rounded bg-gradient-to-r ${themeColors[theme]} animate-pulse`} />
        </div>
      ))}
    </div>
  )
}