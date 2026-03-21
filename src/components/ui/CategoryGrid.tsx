'use client'

import { SocialEmbed } from './SocialEmbed'
import type { Category } from '@/types'

interface CategoryGridProps {
  categories: Category[]
  title?: string
  theme: string
}

export const CategoryGrid = ({ categories, title, theme }: CategoryGridProps) => {
  return (
    <section className="mb-20">
      {title && (
        <h2 className={`text-4xl font-bold mb-8 border-l-8 pl-4 
                       border-${theme === 'fire' ? 'red-500' : 
                               theme === 'mamba' ? 'yellow-400' : 'current'}`}>
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} 
               className="bg-black/30 backdrop-blur-sm rounded-xl p-4 
                          hover:bg-black/40 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-white">{category.name}</h3>
            <SocialEmbed url={category.playlist} type="youtube" />
          </div>
        ))}
      </div>
    </section>
  )
}