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
  
  const baseStyle = {
    workshop: 'bg-blue-500 border-blue-600',
    lecture: 'bg-green-500 border-green-600',
    networking: 'bg-purple-500 border-purple-600'
  }[event.type]

  return {
    className: cn(
      baseStyle,
      'rounded-md border text-white',
      isPast && 'opacity-50',
      isOngoing && 'ring-2 ring-yellow-400'
    ),
    style: {
      padding: '4px'
    }
  }
}

interface CalendarProps {
  events: CalendarEvent[]
}

export function Calendar({ events }: CalendarProps) {
  const { theme } = useTheme()
  
  const calendarProps = useMemo(() => ({
    className: cn(
      'h-[700px] md:h-[800px]',
      theme === 'dark' && 'rbc-calendar-dark'
    ),
    localizer,
    events,
    defaultView: 'day' as View,
    views: ['day', 'week'] as View[],
    step: 30,
    timeslots: 2,
    eventPropGetter: eventStyleGetter,
    tooltipAccessor: (event: CalendarEvent) => 
      `${event.title}\nLocation: ${event.location}\nSpeaker: ${event.speaker}`,
  }), [events, theme])

  return <BigCalendar {...calendarProps} />
} 