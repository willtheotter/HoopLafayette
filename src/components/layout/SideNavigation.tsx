'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'BALLISLIFE', path: '/ballislife' },
  { name: 'GAME OF THE DAY', path: '/gotd' },
  { name: 'KOBE TRIBUTE', path: '/kobe-tribute' },
  { name: 'LAFFY MOMENTS', path: '/laffy-moments' },
  { name: 'NBA HIGHLIGHTS', path: '/nba-highlights' },
  { name: 'NEW BALANCE', path: '/new-balance' },
  { name: 'NEWSLETTER', path: '/newsletter' },
  { name: 'SUMMER NIGHT LIGHTS', path: '/snl' },
  { name: 'VENICE BEACH', path: '/venice-beach' },
  { name: "WHAT'S HOT", path: '/' },
  { name: 'YOUTUBE CLASSICS', path: '/youtube-classics' },
]

export const SideNavigation = () => {
  const pathname = usePathname()

  // Helper function to get theme-specific active styles
  const getActiveBorderClass = (path: string) => {
    if (pathname !== path) return 'border-yellow-400'
    
    switch(path) {
      case '/youtube-classics':
        return 'border-yellow-500'
      case '/nba-highlights':
        return 'border-orange-500'
      case '/newsletter':
        return 'border-green-500'
      default:
        return 'border-yellow-400'
    }
  }

  const getActiveBgClass = (path: string) => {
    if (pathname !== path) return 'bg-yellow-500/20'
    
    switch(path) {
      case '/youtube-classics':
        return 'bg-yellow-500/20'
      case '/nba-highlights':
        return 'bg-orange-500/20'
      case '/newsletter':
        return 'bg-green-500/20'
      default:
        return 'bg-yellow-500/20'
    }
  }

  const getActiveDotColor = (path: string) => {
    if (pathname !== path) return 'text-yellow-400'
    
    switch(path) {
      case '/youtube-classics':
        return 'text-yellow-400'
      case '/nba-highlights':
        return 'text-orange-400'
      case '/newsletter':
        return 'text-green-400'
      default:
        return 'text-yellow-400'
    }
  }

  const getTextColorClass = (path: string) => {
    if (pathname !== path) return 'group-hover:text-yellow-400'
    
    switch(path) {
      case '/youtube-classics':
        return 'text-yellow-400'
      case '/nba-highlights':
        return 'text-orange-400'
      case '/newsletter':
        return 'text-green-400'
      default:
        return 'text-yellow-400'
    }
  }

  // Static class names - no template literals with newlines
  const asideClass = 'hidden lg:flex flex-col w-64 h-[calc(100vh-80px)] sticky top-20 p-6 border-r border-white/10 backdrop-blur-md bg-black/40'
  const sectionTitleClass = 'text-sm font-semibold text-yellow-400 uppercase tracking-wider'
  const linkBaseClass = 'flex items-center px-3 py-2.5 rounded-xl hover:bg-white/10 transition-all group relative hover:translate-x-1'
  const textBaseClass = 'text-sm font-medium transition-colors'

  return (
    <aside className={asideClass}>
      <div className="mb-6 pb-4 border-b border-white/10">
        <h2 className={sectionTitleClass}>
          EXPLORE
        </h2>
      </div>

      <nav className="flex flex-col gap-1">
        {navItems.map((page) => {
          const isActive = pathname === page.path
          const activeBorderClass = getActiveBorderClass(page.path)
          const activeBgClass = getActiveBgClass(page.path)
          const activeDotColor = getActiveDotColor(page.path)
          const textColorClass = getTextColorClass(page.path)
          
          const linkClass = `${linkBaseClass} ${isActive ? activeBgClass : ''} ${isActive ? `border-l-4 ${activeBorderClass}` : ''}`
          const textClass = `${textBaseClass} ${textColorClass}`
          
          return (
            <Link
              key={page.path}
              href={page.path}
              className={linkClass}
            >
              <span className={textClass}>
                {page.name}
              </span>
              {isActive && (
                <span className={`absolute right-3 ${activeDotColor}`}>●</span>
              )}
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/10">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span>Live Now</span>
        </div>
        <div className="mt-3 text-xs text-gray-500">
          {navItems.length} total pages
        </div>
      </div>
    </aside>
  )
}