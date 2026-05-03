'use client'

import { useState, useEffect, useRef } from 'react'

interface InstagramEmbedProps {
  url: string
  caption?: string
  username?: string
}

export const InstagramEmbed = ({ url, caption, username }: InstagramEmbedProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [retryCount, setRetryCount] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptLoadAttempted = useRef(false)

  const maxRetries = 3

  const loadInstagramEmbed = () => {
    setIsLoading(true)
    setHasError(false)
    
    // Remove existing blockquote to avoid duplicates
    const existingBlockquote = containerRef.current?.querySelector('.instagram-media')
    if (existingBlockquote) {
      existingBlockquote.remove()
    }

    // Create new blockquote
    const blockquote = document.createElement('blockquote')
    blockquote.className = 'instagram-media'
    blockquote.setAttribute('data-instgrm-permalink', url)
    blockquote.setAttribute('data-instgrm-version', '14')
    blockquote.style.cssText = `
      background: transparent;
      max-width: 540px;
      min-width: 326px;
      width: 100%;
      margin: 0 auto;
    `
    
    const link = document.createElement('a')
    link.href = url
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    link.textContent = 'View on Instagram'
    blockquote.appendChild(link)
    
    containerRef.current?.appendChild(blockquote)

    // Process the embed
    const processEmbed = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process()
        setIsLoading(false)
        setHasError(false)
      } else {
        // Script not loaded yet, try again
        setTimeout(processEmbed, 500)
      }
    }

    // Load script if not already loaded
    if (!scriptLoadAttempted.current && !document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
      scriptLoadAttempted.current = true
      const script = document.createElement('script')
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      script.defer = true
      script.onload = () => {
        processEmbed()
      }
      script.onerror = () => {
        console.error('Failed to load Instagram embed script')
        setHasError(true)
        setIsLoading(false)
      }
      document.body.appendChild(script)
    } else if ((window as any).instgrm) {
      processEmbed()
    } else {
      // Wait for script to load
      setTimeout(processEmbed, 500)
    }

    // Timeout fallback
    const timeoutId = setTimeout(() => {
      if (isLoading) {
        console.warn('Instagram embed timeout')
        setHasError(true)
        setIsLoading(false)
      }
    }, 10000)

    return () => clearTimeout(timeoutId)
  }

  const handleRetry = () => {
    if (retryCount < maxRetries) {
      setRetryCount(prev => prev + 1)
      loadInstagramEmbed()
    }
  }

  const handleRefresh = () => {
    setRetryCount(0)
    loadInstagramEmbed()
  }

  useEffect(() => {
    loadInstagramEmbed()

    // Cleanup on unmount
    return () => {
      const blockquote = containerRef.current?.querySelector('.instagram-media')
      if (blockquote) {
        blockquote.remove()
      }
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
          
          <div ref={containerRef} className="instagram-embed-wrapper min-h-[400px] relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg z-10">
                <div className="text-center">
                  <div className="w-8 h-8 border-2 border-red-400 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                  <p className="text-white/60 text-xs">Loading Instagram post...</p>
                </div>
              </div>
            )}
            
            {hasError && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/80 rounded-lg z-10">
                <div className="text-center p-4">
                  <p className="text-red-400 text-sm mb-3">
                    ⚠️ Failed to load Instagram post
                  </p>
                  <div className="flex gap-2 justify-center">
                    <button
                      onClick={handleRefresh}
                      className="px-4 py-2 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg text-white text-sm hover:from-red-500 hover:to-orange-500 transition-all duration-300"
                    >
                      🔄 Refresh
                    </button>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white/10 rounded-lg text-white text-sm hover:bg-white/20 transition-all duration-300"
                    >
                      View on Instagram →
                    </a>
                  </div>
                  {retryCount > 0 && (
                    <p className="text-white/40 text-xs mt-2">
                      Retry attempt {retryCount} of {maxRetries}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {caption && !hasError && (
            <>
              <p className="text-sm text-white/80 mt-3 line-clamp-2">{caption}</p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-2 text-orange-400 text-xs group-hover:text-yellow-400 transition-colors"
              >
                <span>View original post</span>
                <span>→</span>
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  )
}