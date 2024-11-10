'use client'

import { AnimatedCard } from './ui/animated-card'
import { Calendar, Clock, MapPin } from 'lucide-react'

interface NetworkingEvent {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
}

const networkingEvents: NetworkingEvent[] = [
  {
    id: '1',
    title: 'Welcome Reception',
    date: 'April 15, 2024',
    time: '18:00 - 20:00',
    location: 'Main Hall',
    description: 'Join us for drinks and appetizers while meeting fellow conference attendees.'
  },
  {
    id: '2',
    title: 'Industry Mixer',
    date: 'April 16, 2024',
    time: '19:00 - 21:00',
    location: 'Rooftop Lounge',
    description: 'Connect with industry leaders and professionals in a relaxed atmosphere.'
  },
  {
    id: '3',
    title: 'Closing Networking',
    date: 'April 17, 2024',
    time: '17:00 - 19:00',
    location: 'Garden Terrace',
    description: 'Final networking opportunity to exchange contacts and discuss conference highlights.'
  }
]

export function NetworkingEvents() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Scheduled Events</h2>
      {networkingEvents.map((event, index) => (
        <AnimatedCard 
          key={event.id}
          delay={index * 0.1}
          className="hover:shadow-md transition-shadow"
        >
          <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
          <div className="space-y-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{event.location}</span>
            </div>
          </div>
          <p className="mt-4 text-sm">{event.description}</p>
        </AnimatedCard>
      ))}
    </div>
  )
} 