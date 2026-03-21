'use client'

import { useEffect } from 'react'

// Extend the ServiceWorkerRegistration type
interface ServiceWorkerRegistrationWithSync extends ServiceWorkerRegistration {
  sync: {
    register: (tag: string) => Promise<void>
    getTags: () => Promise<string[]>
  }
}

export function useBackgroundSync() {
  useEffect(() => {
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
      navigator.serviceWorker.ready.then((registration) => {
        // Use type assertion to access sync property
        const regWithSync = registration as ServiceWorkerRegistrationWithSync
        if (regWithSync.sync) {
          regWithSync.sync.register('sync-videos')
            .catch(err => console.log('Background sync registration failed:', err))
        }
      })
    }
  }, [])
}