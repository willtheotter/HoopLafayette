// src/components/ui/InstagramEmbed.tsx
'use client'

import { InstagramEmbed as SocialInstagramEmbed } from 'react-social-media-embed'

interface InstagramEmbedProps {
  url: string
  caption?: string
  width?: number
}

export const InstagramEmbed = ({ url, caption, width = 400 }: InstagramEmbedProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="overflow-hidden rounded-xl shadow-lg w-full flex justify-center">
        <SocialInstagramEmbed 
          url={url} 
          width={width}
        />
      </div>
      {caption && (
        <p className="text-xs text-white/60 mt-2 text-center max-w-[326px]">{caption}</p>
      )}
    </div>
  )
}