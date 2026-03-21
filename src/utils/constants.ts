// Replace these with your actual YouTube playlist IDs and Instagram URLs

export const YOUTUBE_PLAYLISTS = {
  highlights: 'https://youtube.com/playlist?list=YOUR_HIGHLIGHTS_ID',
  ones: 'https://youtube.com/playlist?list=YOUR_ONES_ID',
  twos: 'https://youtube.com/playlist?list=YOUR_TWOS_ID',
  threes: 'https://youtube.com/playlist?list=YOUR_THREES_ID',
  parkTakeovers: 'https://youtube.com/playlist?list=YOUR_TAKEOVERS_ID',
  events: 'https://youtube.com/playlist?list=YOUR_EVENTS_ID',
  leagues: 'https://youtube.com/playlist?list=YOUR_LEAGUES_ID',
  venice: 'https://youtube.com/playlist?list=YOUR_VENICE_ID',
  kobe: 'https://youtube.com/playlist?list=YOUR_KOBE_ID',
  gotd: 'https://youtube.com/playlist?list=YOUR_GOTD_ID',
  snl: 'https://youtube.com/playlist?list=YOUR_SNL_ID'
}

// Instagram post URLs (not embed URLs)
export const INSTAGRAM_POSTS = {
  laffyMoments: [
    'https://www.instagram.com/p/YOUR_POST_ID/',
    'https://www.instagram.com/p/YOUR_POST_ID2/',
    'https://www.instagram.com/reel/YOUR_REEL_ID/'
  ],
  veniceBeach: [
    'https://www.instagram.com/p/YOUR_VENICE_1/',
    'https://www.instagram.com/p/YOUR_VENICE_2/'
  ],
  highlights: [
    'https://www.instagram.com/reel/YOUR_HIGH_1/',
    'https://www.instagram.com/reel/YOUR_HIGH_2/'
  ]
}

export const CATEGORIES = [
  { id: 'highlights', name: '🔥 HIGHLIGHTS', playlist: YOUTUBE_PLAYLISTS.highlights },
  { id: 'ones', name: '🎯 1s', playlist: YOUTUBE_PLAYLISTS.ones },
  { id: 'twos', name: '🎯 2s', playlist: YOUTUBE_PLAYLISTS.twos },
  { id: 'threes', name: '🎯 3s', playlist: YOUTUBE_PLAYLISTS.threes },
  { id: 'takeovers', name: '🚀 PARK TAKEOVERS', playlist: YOUTUBE_PLAYLISTS.parkTakeovers },
  { id: 'events', name: '📅 EVENTS', playlist: YOUTUBE_PLAYLISTS.events },
  { id: 'leagues', name: '🏀 LEAGUES', playlist: YOUTUBE_PLAYLISTS.leagues }
]