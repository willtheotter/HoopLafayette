'use client'

const events = [
  {
    title: "Venice Beach Classic",
    date: "Aug 15-17",
    location: "Venice Beach Courts",
    type: "3v3 Tournament"
  },
  {
    title: "Summer Night Lights",
    date: "Every Sunday",
    location: "Lafayette Court",
    type: "Weekly Event"
  },
  {
    title: "All-Star Weekend",
    date: "Sep 5-7",
    location: "Downtown LA",
    type: "Special Event"
  }
]

export const FeaturedEvents = () => {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-8">📅 FEATURED EVENTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {events.map((event, index) => (
          <div key={index} className="glass-card-dark p-6 rounded-xl hover:scale-105 transition-transform">
            <div className="text-sm text-orange-400 mb-2">{event.type}</div>
            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
            <div className="text-gray-400 text-sm mb-1">{event.date}</div>
            <div className="text-gray-400 text-sm">{event.location}</div>
            <button className="mt-4 text-orange-400 hover:text-orange-300 transition-colors">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}