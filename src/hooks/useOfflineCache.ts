'use client'

import { useState, useEffect } from 'react'

interface CacheOptions {
  key: string
  version?: number
  expiration?: number
}

export function useOfflineCache<T>(
  fetchData: () => Promise<T>,
  options: CacheOptions
) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const cacheKey = `${options.key}_v${options.version || 1}`
    const expirationTime = options.expiration || 24 * 60 * 60 * 1000

    const loadData = async () => {
      try {
        if ('caches' in window) {
          const cache = await caches.open('lafayette-hoop-data')
          const cachedResponse = await cache.match(cacheKey)
          
          if (cachedResponse) {
            const cachedData = await cachedResponse.json()
            const timestamp = cachedData.timestamp
            
            if (Date.now() - timestamp < expirationTime) {
              setData(cachedData.value)
              setLoading(false)
              return
            }
          }
        }

        const freshData = await fetchData()
        
        if ('caches' in window) {
          const cache = await caches.open('lafayette-hoop-data')
          const response = new Response(
            JSON.stringify({
              value: freshData,
              timestamp: Date.now()
            })
          )
          await cache.put(cacheKey, response)
        }

        setData(freshData)
      } catch (err) {
        setError(err as Error)
        
        if ('caches' in window) {
          const cache = await caches.open('lafayette-hoop-data')
          const cachedResponse = await cache.match(cacheKey)
          
          if (cachedResponse) {
            const cachedData = await cachedResponse.json()
            setData(cachedData.value)
          }
        }
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [options.key, options.version, options.expiration])

  return { data, loading, error }
}