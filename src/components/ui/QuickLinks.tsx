'use client'

import Link from 'next/link'

const links = [
  { name: '🏀 GOTD', path: '/gotd' },
  { name: '✨ SNL', path: '/snl' },
  { name: '⭐ ALLSTAR', path: '/new-balance' },
  { name: '🌊 VENICE', path: '/venice-beach' },
  { name: '🚀 TAKEOVERS', path: '/ballislife' },
  { name: '🐍 KOBE', path: '/kobe-tribute' },
  { name: '🤝 COMMUNITY', path: '/community' },
  { name: '💙 LAFFY', path: '/laffy-moments' }
]

export const QuickLinks = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3 my-8">
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className="px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full text-white hover:bg-orange-500 transition-all hover:scale-105"
        >
          {link.name}
        </Link>
      ))}
    </div>
  )
}