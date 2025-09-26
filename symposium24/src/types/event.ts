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

export type UserType = 'speaker' | 'delegate' | 'moderator'

export interface User {
  id: string
  type: UserType
  name: string
  email: string
  visible: boolean
  profilePicture: string
  bio: string
  social: {
    linkedin: string
    twitter: string
  }
}