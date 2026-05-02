'use client'

import { useState, useEffect, useRef } from 'react'

interface InstagramEmbedProps {
  url: string
  caption?: string
  username?: string
}

export const InstagramEmbed = ({ url, caption, username }: InstagramEmbedProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load Instagram embed script
    const loadInstagramScript = () => {
      if (document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
        return
      }
      const script = document.createElement('script')
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      script.defer = true
      document.body.appendChild(script)
    }

    loadInstagramScript()

    // Process embeds after script loads
    const processEmbeds = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process()
        setIsLoading(false)
      } else {
        setTimeout(processEmbeds, 500)
      }
    }

    processEmbeds()

    // Cleanup
    return () => {
      // No cleanup needed
    }
  }, [url])

  return (
    <div className="group relative transition duration-500 hover:-translate-y-2">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
      <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-red-500/30 group-hover:border-yellow-500/50 transition duration-300">
        <div className="p-4">
          {username && (
            <p className="text-sm font-bold text-red-400 mb-2">@{username}</p>
          )}
          
          <div ref={containerRef} className="instagram-embed-wrapper min-h-[400px]">
            {isLoading && (
              <div className="flex items-center justify-center py-12">
                <div className="w-8 h-8 border-2 border-red-400 border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                background: 'transparent',
                maxWidth: '540px',
                minWidth: '326px',
                width: '100%',
                margin: '0 auto',
                display: isLoading ? 'none' : 'block'
              }}
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                View on Instagram
              </a>
            </blockquote>
          </div>

          {caption && (
            <>
              <p className="text-sm text-white/80 mt-3 line-clamp-2">{caption}</p>
              <div className="mt-2 text-orange-400 text-xs group-hover:text-yellow-400 transition-colors flex items-center gap-1">
                <span>View original post</span>
                <span>→</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}