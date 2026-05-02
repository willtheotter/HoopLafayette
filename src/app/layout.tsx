// src/app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' 
    ? 'https://lafayettehoop.com' 
    : 'http://localhost:3000'),
  title: {
    default: 'Lafayette Hoop - Streetball Hub',
    template: '%s | Lafayette Hoop'
  },
  description: 'The hottest street basketball highlights, reels, and community moments from Lafayette and beyond. Experience the culture, the energy, and the game.',
  keywords: [
    'streetball', 
    'basketball', 
    'highlights', 
    'lafayette', 
    'hoop', 
    'ballislife', 
    'street basketball', 
    'hoopin', 
    'community',
    'nba highlights',
    'youtube classics',
    'basketball newsletter'
  ],
  authors: [{ name: 'Lafayette Hoop' }],
  creator: 'Lafayette Hoop',
  publisher: 'Lafayette Hoop',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Lafayette Hoop - Streetball Hub',
    description: 'The hottest street basketball highlights, reels, and community moments',
    url: 'https://lafayettehoop.com',
    siteName: 'Lafayette Hoop',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lafayette Hoop - Streetball Hub',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lafayette Hoop - Streetball Hub',
    description: 'The hottest street basketball highlights, reels, and community moments',
    images: ['/twitter-image.jpg'],
    creator: '@lafayettehoop',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon-180.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    title: 'LaffyHoop',
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    telephone: false,
  },
  category: 'sports',
  verification: {
    google: 'optional-google-site-verification-code', // Add your Google Search Console code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="LaffyHoop" />
        <meta name="application-name" content="Lafayette Hoop" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-icon-180.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#FDB927" />
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://www.youtube.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.instagram.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/og-image.jpg" as="image" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://lafayettehoop.com" />
        
        {/* Alternate language versions (if you add language support) */}
        <link rel="alternate" href="https://lafayettehoop.com" hrefLang="x-default" />
        
        {/* RSS Feed (optional) */}
        <link rel="alternate" type="application/rss+xml" title="Lafayette Hoop" href="/feed.xml" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsOrganization",
              "name": "Lafayette Hoop",
              "url": "https://lafayettehoop.com",
              "logo": "https://lafayettehoop.com/logo.png",
              "sameAs": [
                "https://www.instagram.com/lafayettehoop",
                "https://www.youtube.com/@lafayettehoop",
                "https://twitter.com/lafayettehoop"
              ],
              "description": "The hottest street basketball highlights, reels, and community moments",
              "sport": "Basketball",
              "location": {
                "@type": "Place",
                "name": "Lafayette Park",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Los Angeles",
                  "addressRegion": "CA",
                  "addressCountry": "US"
                }
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div id="app-root" className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}