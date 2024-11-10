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
    workshop: { bg: 'var(--primary)', border: 'var(--primary-foreground)' },
    lecture: { bg: 'var(--secondary)', border: 'var(--secondary-foreground)' },
    networking: { bg: 'var(--accent)', border: 'var(--accent-foreground)' },
  }[event.type] || { bg: 'var(--background)', border: 'var(--border)' }

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
      theme === 'dark' ? 'bg-background' : 'bg-background',
    ),
    min: new Date(2024, 10, 8, 10, 0),
    max: new Date(2024, 10, 8, 23, 59),
    formats: {
      timeGutterFormat: (date: Date) => moment(date).format('HH:mm'),
    },
    localizer,
    events,
    defaultView: 'day' as View,
    views: ['day'] as View[],
    step: 30,
    timeslots: 2,
    eventPropGetter: eventStyleGetter,
    tooltipAccessor: (event: CalendarEvent) => 
      `${event.title}\nLocation: ${event.location}\nSpeaker: ${event.speaker}`,
    toolbar: false
  }), [events, theme])

  return <BigCalendar {...calendarProps} />
}