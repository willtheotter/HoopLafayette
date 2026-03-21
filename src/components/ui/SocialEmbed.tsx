'use client'

import { useState } from 'react'

interface SocialEmbedProps {
  url: string
  type?: 'youtube' | 'instagram'
  title?: string
}

export const SocialEmbed = ({ url, type = 'youtube', title }: SocialEmbedProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const aspectRatio = type === 'instagram' ? 'aspect-square' : 'aspect-video'

  const extractYouTubeId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/playlist\?list=([^&\n?#]+)/
    ]
    
    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match) return match[1]
    }
    return null
  }

  if (type === 'youtube') {
    const videoId = extractYouTubeId(url)
    const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : url

    return (
      <div className={`${aspectRatio} w-full rounded-lg overflow-hidden shadow-2xl relative`}>
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 animate-pulse flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-gray-600 border-t-white rounded-full animate-spin" />
          </div>
        )}
        <iframe
          src={embedUrl}
          title={title || 'YouTube video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          onLoad={() => setIsLoading(false)}
        />
        {title && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
            <p className="text-white text-sm truncate">{title}</p>
          </div>
        )}
      </div>
    )
  }

  // Instagram - Link button
  return (
    <div className={`${aspectRatio} w-full rounded-lg overflow-hidden shadow-2xl bg-black/30 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center`}>
      <div className="text-4xl mb-2">📷</div>
      <p className="text-white/80 text-sm mb-2">Instagram Post</p>
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm hover:scale-105 transition-transform"
      >
        View on Instagram
      </a>
      {title && <p className="text-white/60 text-xs mt-2">{title}</p>}
    </div>
  )
}