import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { PWAInstallPrompt } from '@/components/ui/PWAInstallPrompt'
import { OfflineIndicator } from '@/components/ui/OfflineIndicator'
import { PWARegister } from '@/components/ui/PWARegister'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  themeColor: '#FDB927',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' 
    ? 'https://lafayettehoop.com' 
    : 'http://localhost:3000'),
  title: 'Lafayette Hoop - Streetball Hub',
  description: 'The hottest street basketball highlights, reels, and community moments',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Replace deprecated meta tag */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="LaffyHoop" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <PWARegister />
        <OfflineIndicator />
        {children}
        <PWAInstallPrompt />
      </body>
    </html>
  )
}