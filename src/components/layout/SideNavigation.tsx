'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: "WHAT'S HOT", path: '/' },
  { name: 'GAME OF THE DAY', path: '/gotd' },
  { name: 'LAFFY MOMENTS', path: '/laffy-moments' },
  { name: 'SUMMER NIGHT LIGHTS', path: '/snl' },
  { name: 'NEW BALANCE', path: '/new-balance' },
  { name: 'VENICE BEACH', path: '/venice-beach' },
  { name: 'BALLISLIFE', path: '/ballislife' },
  { name: 'KOBE TRIBUTE', path: '/kobe-tribute' }
]

export const SideNavigation = () => {
  const pathname = usePathname()

  // Static class names - no template literals with newlines
  const asideClass = 'hidden lg:flex flex-col w-64 h-[calc(100vh-80px)] sticky top-20 p-6 border-r border-white/10 backdrop-blur-md bg-black/40'
  const sectionTitleClass = 'text-sm font-semibold text-yellow-400 uppercase tracking-wider'
  const linkBaseClass = 'flex items-center px-3 py-2.5 rounded-xl hover:bg-white/10 transition-all group relative hover:translate-x-1'
  const activeClass = ' bg-yellow-500/20 border-l-4 border-yellow-400'
  const textClass = 'text-sm font-medium group-hover:text-yellow-400 transition-colors'
  const activeIndicatorClass = 'absolute right-3 text-yellow-400'

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
          const linkClass = linkBaseClass + (isActive ? activeClass : '')
          
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
                <span className={activeIndicatorClass}>●</span>
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
      </div>
    </aside>
  )
}