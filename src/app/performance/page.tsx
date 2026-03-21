'use client'

import { useEffect, useState } from 'react'

export default function PerformancePage() {
  const [metrics, setMetrics] = useState<any>({})

  useEffect(() => {
    // Get performance metrics
    const perfData = performance.getEntriesByType('navigation')[0] as any
    setMetrics({
      loadTime: perfData?.loadEventEnd - perfData?.navigationStart,
      domReady: perfData?.domComplete - perfData?.navigationStart,
      ttfb: perfData?.responseStart - perfData?.requestStart,
      videoSize: 'Check console for video sizes'
    })

    // Log video sizes
    fetch('/videos/fire-bg.mp4', { method: 'HEAD' })
      .then(res => {
        const size = res.headers.get('content-length')
        console.log(`🔥 Fire video size: ${size ? (parseInt(size) / 1024 / 1024).toFixed(2) : 'unknown'} MB`)
      })
  }, [])

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Performance Metrics</h1>
      <div className="space-y-4">
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key} className="p-4 bg-gray-900 rounded">
            <span className="text-gray-400">{key}: </span>
            <span className="text-green-400">{String(value)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}