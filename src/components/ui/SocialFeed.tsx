'use client'

import { LazyVideo } from './LazyVideo'

interface SocialFeedProps {
  type: 'youtube' | 'instagram'
  urls: string[]
  theme: string
}

export const SocialFeed = ({ type, urls, theme }: SocialFeedProps) => {
  if (type === 'youtube') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {urls.map((url, index) => (
          <div key={index} className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <LazyVideo url={url} title={`Video ${index + 1}`} />
          </div>
        ))}
      </div>
    )
  }

  // Instagram - Link buttons
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {urls.map((url, index) => (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-square rounded-lg bg-black/30 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center hover:scale-105 transition-transform"
        >
          <span className="text-4xl mb-2">📷</span>
          <span className="text-white/80 text-sm">View on Instagram</span>
        </a>
      ))}
    </div>
  )
}