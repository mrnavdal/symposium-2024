import { CalendarEvent } from '@/types/event'

export const events: CalendarEvent[] = [
  {
    id: '1',
    title: 'Introduction to Web3',
    type: 'lecture',
    start: new Date(2024, 10, 8, 13, 0), 
    end: new Date(2024, 10, 8, 14, 30),
    speaker: 'Jane Smith',
    location: 'Main Hall',
    description: 'An overview of Web3 technologies and their impact on the future of the internet.'
  },
  {
    id: '2',
    title: 'Building Smart Contracts',
    type: 'workshop',
    start: new Date(2024, 3, 15, 13, 0),
    end: new Date(2024, 3, 15, 15, 0),
    speaker: 'John Doe',
    location: 'Workshop Room A',
    description: 'Hands-on workshop on creating and deploying smart contracts.'
  },
  {
    id: '3',
    title: 'Networking Lunch',
    type: 'networking',
    start: new Date(2024, 3, 15, 12, 0),
    end: new Date(2024, 3, 15, 13, 0),
    speaker: '',
    location: 'Dining Hall',
    description: 'Network with fellow attendees over lunch.'
  }
] 