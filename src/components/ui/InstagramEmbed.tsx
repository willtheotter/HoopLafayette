'use client'

import { useState, useEffect } from 'react'

interface InstagramEmbedProps {
  url: string
  caption?: string
  username?: string
}

export const InstagramEmbed = ({ url, caption, username }: InstagramEmbedProps) => {
  const [isMobile, setIsMobile] = useState(false)
  const [coverImage, setCoverImage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = typeof window !== 'undefined' ? window.navigator.userAgent : ''
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
      setIsMobile(mobile)
    }
    checkMobile()
  }, [])

  // Fetch cover image using oEmbed API (no access token needed for basic info)
  useEffect(() => {
    if (!isMobile) return

    const fetchCoverImage = async () => {
      try {
        setIsLoading(true)
        setError(false)
        
        // Use Instagram's oEmbed API to get thumbnail URL (no token required for public posts)
        const response = await fetch(
          `https://graph.facebook.com/v17.0/instagram_oembed?url=${encodeURIComponent(url)}&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}`
        )
        
        if (!response.ok) throw new Error('Failed to fetch')
        
        const data = await response.json()
        
        // Extract thumbnail URL from the HTML response
        const imgMatch = data.thumbnail_url || data.thumbnailURL
        if (imgMatch) {
          setCoverImage(imgMatch)
        } else {
          // Fallback: try to extract from HTML
          const html = data.html
          const imgRegex = /<img[^>]+src="([^">]+)"/i
          const match = html.match(imgRegex)
          if (match && match[1]) {
            setCoverImage(match[1])
          }
        }
      } catch (err) {
        console.error('Failed to fetch Instagram cover:', err)
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCoverImage()
  }, [url, isMobile])

  // Extract post ID from URL for embed
  const getPostId = (instagramUrl: string) => {
    const reelMatch = instagramUrl.match(/\/reel\/([A-Za-z0-9_-]+)/)
    const postMatch = instagramUrl.match(/\/p\/([A-Za-z0-9_-]+)/)
    const tvMatch = instagramUrl.match(/\/tv\/([A-Za-z0-9_-]+)/)
    return reelMatch?.[1] || postMatch?.[1] || tvMatch?.[1] || null
  }

  const postId = getPostId(url)
  const embedUrl = postId ? `https://www.instagram.com/p/${postId}/embed/` : null

  // MOBILE VERSION - Cover image with Instagram logo overlay
  if (isMobile) {
    return (
      <div className="group relative transition duration-500 hover:-translate-y-2 h-full">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
        <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-red-500/30 group-hover:border-yellow-500/50 transition duration-300 h-full">
          <div className="p-4">
            {username && (
              <p className="text-sm font-bold text-red-400 mb-2">@{username}</p>
            )}
            
            <a href={url} target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
                
                {coverImage && !isLoading && (
                  <>
                    <img 
                      src={coverImage} 
                      alt={`Instagram post by ${username}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="transform group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-12 h-12 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                        </svg>
                      </div>
                    </div>
                  </>
                )}
                
                {error && !isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80">
                    <svg className="w-12 h-12 text-white/40 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                    </svg>
                    <p className="text-white/60 text-xs text-center">Tap to view on Instagram</p>
                  </div>
                )}
              </div>
            </a>

            {caption && (
              <p className="text-sm text-white/80 mt-3 line-clamp-2">{caption}</p>
            )}
            
            <p className="text-xs text-white/40 mt-2 text-center">
              Opens in Instagram app
            </p>
          </div>
        </div>
      </div>
    )
  }

  // DESKTOP VERSION - Full embed
  if (!embedUrl) {
    return (
      <div className="group relative transition duration-500 hover:-translate-y-2 h-full">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
        <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-red-500/30 group-hover:border-yellow-500/50 transition duration-300 h-full">
          <div className="p-6 text-center">
            {username && <p className="text-sm font-bold text-red-400 mb-3">@{username}</p>}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl hover:from-red-500 hover:to-orange-500 transition-all duration-300"
            >
              <span>View on Instagram →</span>
            </a>
            {caption && <p className="text-sm text-white/80 mt-3 line-clamp-2">{caption}</p>}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="group relative transition duration-500 hover:-translate-y-2 h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
      <div className="relative bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-red-500/30 group-hover:border-yellow-500/50 transition duration-300 h-full">
        <div className="p-4">
          {username && (
            <p className="text-sm font-bold text-red-400 mb-2">@{username}</p>
          )}
          
          <div className="aspect-square w-full rounded-lg overflow-hidden bg-black/40">
            <iframe
              src={embedUrl}
              title={`Instagram post by ${username || 'user'}`}
              className="w-full h-full"
              frameBorder="0"
              scrolling="no"
              allow="encrypted-media; picture-in-picture; fullscreen"
              loading="lazy"
            />
          </div>

          {caption && (
            <p className="text-sm text-white/60 mt-3 line-clamp-2 hover:text-white/80 transition-colors">
              {caption}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}