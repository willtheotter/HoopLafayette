'use client'

import { useState, useMemo } from 'react'
import { SocialEmbed } from './SocialEmbed'
import type { Video, Category } from '@/types'

interface SearchFilterProps {
  videos: Video[]
  categories: Category[]
  theme: string
}

export const SearchFilter = ({ videos, categories, theme }: SearchFilterProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'popular'>('newest')

  // Filter and sort videos
  const filteredVideos = useMemo(() => {
    let filtered = videos.filter(video => {
      const matchesSearch = video.title?.toLowerCase().includes(searchTerm.toLowerCase()) || false
      const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory
      return matchesSearch && matchesCategory
    })

    // Sort videos
    return filtered.sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()
      } else if (sortBy === 'oldest') {
        return new Date(a.date || 0).getTime() - new Date(b.date || 0).getTime()
      }
      return 0
    })
  }, [videos, searchTerm, selectedCategory, sortBy])

  // Map video type to SocialEmbed type
  const mapVideoType = (type: string): 'youtube' | 'instagram' => {
    if (type.includes('youtube')) return 'youtube'
    return 'instagram'
  }

  // Theme-based colors
  const themeColors = {
    fire: 'bg-orange-500/20 border-orange-500 focus:ring-orange-500',
    mamba: 'bg-zinc-800/50 border-yellow-500/50 focus:ring-yellow-500',
    venice: 'bg-blue-500/20 border-cyan-500 focus:ring-cyan-500',
    lakers: 'bg-purple-500/20 border-yellow-400 focus:ring-yellow-400',
    owyhee: 'bg-blue-400/20 border-cyan-400 focus:ring-cyan-400',
    community: 'bg-green-500/20 border-emerald-500 focus:ring-emerald-500'
  }

  return (
    <div className="w-full space-y-6">
      {/* Search Bar */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search videos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`flex-1 px-4 py-2 rounded-lg backdrop-blur-md 
                     bg-black/30 text-white placeholder-gray-400
                     border ${themeColors[theme as keyof typeof themeColors] || themeColors.fire}
                     focus:outline-none focus:ring-2 transition-all`}
        />

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className={`px-4 py-2 rounded-lg backdrop-blur-md 
                     bg-black/30 text-white
                     border ${themeColors[theme as keyof typeof themeColors] || themeColors.fire}
                     focus:outline-none focus:ring-2 transition-all`}
        >
          <option value="all">All Categories</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id} className="bg-gray-800">
              {cat.name}
            </option>
          ))}
        </select>

        {/* Sort Options */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'popular')}
          className={`px-4 py-2 rounded-lg backdrop-blur-md 
                     bg-black/30 text-white
                     border ${themeColors[theme as keyof typeof themeColors] || themeColors.fire}
                     focus:outline-none focus:ring-2 transition-all`}
        >
          <option value="newest" className="bg-gray-800">Newest First</option>
          <option value="oldest" className="bg-gray-800">Oldest First</option>
          <option value="popular" className="bg-gray-800">Most Popular</option>
        </select>
      </div>

      {/* Results Count */}
      <div className="text-white/70 text-sm">
        Found {filteredVideos.length} videos
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map(video => (
          <div key={video.id} className="relative group">
            <SocialEmbed 
              url={video.url} 
              type={mapVideoType(video.type)} 
              title={video.title} 
            />
            {/* Category Tag */}
            {video.category && (
              <span className="absolute top-2 right-2 px-2 py-1 text-xs rounded-full
                             bg-black/60 text-white backdrop-blur-sm
                             opacity-0 group-hover:opacity-100 transition-opacity">
                {video.category}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredVideos.length === 0 && (
        <div className="text-center py-20">
          <p className="text-white/60 text-xl">No videos found matching your criteria</p>
          <button
            onClick={() => {
              setSearchTerm('')
              setSelectedCategory('all')
            }}
            className="mt-4 px-6 py-2 rounded-full bg-white/10 text-white
                     hover:bg-white/20 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  )
}