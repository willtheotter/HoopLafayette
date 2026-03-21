'use client'

interface VideoGridProps {
  category: string
}

// Your 4 playlist IDs
const playlistIds: Record<string, string> = {
  oneonone: 'PLN3FmH1w6ROvqv-aTr-veZOrvGEkdCkyl',
  threeonthree: 'PLN3FmH1w6ROuyzZMbxDUojFd07ddZOngt',
  takeovers: 'PLN3FmH1w6ROvAJfdzB_0QQ_9GPHb57b6H',
  events: 'PLN3FmH1w6ROt6L4c5Da-DcleL4Ap1Y4Az'
}

export const VideoGrid = ({ category }: VideoGridProps) => {
  const playlistId = playlistIds[category]

  if (!playlistId) {
    return (
      <div className="text-center py-12 text-gray-400">
        <p>No videos available for this category.</p>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl bg-black/50">
        <iframe
          src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
          title={`YouTube playlist - ${category}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      <p className="text-center text-sm text-gray-400 mt-3">
        📺 Scroll within the player to browse all videos
      </p>
    </div>
  )
}