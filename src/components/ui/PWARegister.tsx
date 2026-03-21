'use client'

import { useEffect } from 'react'

export const PWARegister = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      // Wait for page to load before registering
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('✅ Service Worker registered:', registration.scope)
            
            // Check for updates
            registration.addEventListener('updatefound', () => {
              const newWorker = registration.installing
              if (newWorker) {
                console.log('🔄 New service worker installing...')
              }
            })
          })
          .catch((error) => {
            console.log('❌ Service Worker registration failed:', error)
          })
      })
    }
  }, [])

  return null
}