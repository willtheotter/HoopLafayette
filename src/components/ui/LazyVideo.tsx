'use client'

import { useRef, useEffect, useState } from 'react'

interface LazyVideoProps {
  url: string
  title?: string
}

export const LazyVideo = ({ url, title }: LazyVideoProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '100px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="w-full h-full bg-gray-800 rounded-lg overflow-hidden">
      {isVisible ? (
        <iframe
          src={`https://www.youtube.com/embed/${url}`}
          title={title || 'Video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-gray-500">Loading...</div>
        </div>
      )}
    </div>
  )
}