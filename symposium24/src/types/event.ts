export type EventType = 'workshop' | 'lecture' | 'networking' | 'break' | 'other'

export interface CalendarEvent {
  id: string
  title: string
  type: EventType
  start: Date
  end: Date
  speaker: string
  location: string
  description: string
} 