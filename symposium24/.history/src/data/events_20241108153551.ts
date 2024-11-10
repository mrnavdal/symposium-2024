import { CalendarEvent } from '@/types/event'

export const events: CalendarEvent[] = [
  {
    id: '1',
    title: 'Nečekejte na diplom. Jak správně chápat pojem “Investice”',
    type: 'lecture',
    start: new Date(2024, 10, 8, 13, 0), 
    end: new Date(2024, 10, 8, 14, 30),
    speaker: 'Jane Smith',
    location: 'Main Hall',
    description: 'An overview of Web3 technologies and their impact on the future of the internet.'
  },
  {
    id: '2',
    title: 'Sebehodnota a peníze',
    type: 'workshop',
    start: new Date(2024, 10, 8, 13, 0),
    end: new Date(2024, 10, 8, 15, 0),
    speaker: 'John Doe',
    location: 'Workshop Room A',
    description: 'Hands-on workshop on creating and deploying smart contracts.'
  },
  {
    id: '3',
    title: 'Networking Lunch',
    type: 'networking',
    start: new Date(2024, 10, 8, 17, 0),
    end: new Date(2024, 10, 8, 18, 0),
    speaker: '',
    location: 'Dining Hall',
    description: 'Network with fellow attendees over lunch.'
  }
] 