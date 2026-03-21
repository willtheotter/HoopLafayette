'use client'

interface CategoryTabsProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

const categories = [
  { id: 'oneonone', name: 'ONE-ON-ONE' },
  { id: 'threeonthree', name: 'THREE-ON-THREE' },
  { id: 'takeovers', name: 'PARK TAKEOVERS' },
  { id: 'events', name: 'EVENTS' }
]

export const CategoryTabs = ({ activeCategory, onCategoryChange }: CategoryTabsProps) => {
  return (
    <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
      <div className="flex gap-2 min-w-max">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-6 py-3 rounded-full font-bold transition-all whitespace-nowrap text-lg ${
              activeCategory === category.id
                ? 'bg-yellow-500 text-black shadow-lg'
                : 'bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 hover:text-yellow-400'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  )
}