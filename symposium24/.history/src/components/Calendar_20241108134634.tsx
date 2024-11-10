'use client'

import { Calendar as BigCalendar, momentLocalizer, View } from 'react-big-calendar'
import moment from 'moment'
import { CalendarEvent } from '@/types/event'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { useMemo } from 'react'

import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

const eventStyleGetter = (event: CalendarEvent) => {
  const isPast = moment(event.end).isBefore(moment())
  const isOngoing = moment().isBetween(event.start, event.end)
  
  const colors = {
    workshop: { bg: '#22c55e', border: '#16a34a' },  // green-500, green-600
    lecture: { bg: '#22c55e', border: '#16a34a' },   // green-500, green-600
    networking: { bg: '#a855f7', border: '#9333ea' }, // purple-500, purple-600
  }[event.type] || { bg: '#3b82f6', border: '#2563eb' }  // blue-500, blue-600

  return {
    className: cn(
      'rounded-md border backdrop-blur-sm transition-colors',
      isPast && 'opacity-50 hover:opacity-70',
      isOngoing && 'ring-2 ring-yellow-400/50 shadow-lg'
    ),
    style: {
      backgroundColor: colors.bg,
      borderColor: colors.border,
      padding: '4px 8px',
    }
  }
}

interface CalendarProps {
  events: CalendarEvent[]
}
export function Calendar({ events }: CalendarProps) {
  const { theme } = useTheme()
  
  console.log('Calendar events:', events)
  
  const calendarProps = useMemo(() => ({
    className: cn(
      'h-[700px] md:h-[800px] bg-gray-900',
      theme === 'dark' && 'rbc-calendar-dark',
    ),
    localizer,
    events,
    defaultView: 'day' as View,
    views: ['day'] as View[],
    step: 30,
    timeslots: 2,
    eventPropGetter: eventStyleGetter,
    tooltipAccessor: (event: CalendarEvent) => 
      `${event.title}\nLocation: ${event.location}\nSpeaker: ${event.speaker}`,
    dayPropGetter: () => ({
      style: {
        backgroundColor: theme === 'dark' ? '#121212' : '#1a1a1a',
        color: theme === 'dark' ? '#e5e5e5' : '#fff'
      }
    }),
    slotPropGetter: () => ({
      style: {
        backgroundColor: theme === 'dark' ? '#121212' : '#1a1a1a',
        borderColor: theme === 'dark' ? '#2a2a2a' : '#333',
        color: theme === 'dark' ? '#e5e5e5' : '#fff'
      }
    }),
    toolbar: false
  }), [events, theme])

  return <BigCalendar {...calendarProps} />
}