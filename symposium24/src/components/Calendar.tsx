'use client'

import { Calendar as BigCalendar, momentLocalizer, View } from 'react-big-calendar'
import moment from 'moment'
import { CalendarEvent } from '@/types/event'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { useMemo, useState } from 'react'
import './Calendar.css'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import { EventDialog } from './EventDialog'

const localizer = momentLocalizer(moment)

const eventStyleGetter = (event: CalendarEvent) => {
  const isOngoing = moment().isBetween(event.start, event.end)
  
  const colors = {
    workshop: { bg: '#15803d', border: '#166534' },  // green-700, green-800
    lecture: { bg: '#1d4ed8', border: '#1e40af' },   // blue-700, blue-800
    networking: { bg: '#7e22ce', border: '#6b21a8' }, // purple-700, purple-800
    break: { bg: '#d97706', border: '#c05621' },      // orange-700, orange-800
    other: { bg: '#d97706', border: '#c05621' },      // gray-700, gray-800
  }[event.type] || { bg: '#3b82f6', border: '#2563eb' }  // blue-500, blue-600

  return {
    className: cn(
      'rounded-md border backdrop-blur-sm transition-colors',
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
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)

  // Duplicate events for the current day only
  const recurringEvents = useMemo(() => {
    const today = moment().startOf('day')
    return events.map((event) => {
      const start = moment(event.start)
      const end = moment(event.end)
      return {
        ...event,
        start: today.clone().hour(start.hour()).minute(start.minute()).toDate(),
        end: today.clone().hour(end.hour()).minute(end.minute()).toDate(),
      }
    })
  }, [events])

  const calendarProps = useMemo(() => ({
    className: cn(
      'rounded-lg',
      'bg-[#1a1a1a]',
    ),
    views: ['day'] as View[],
    defaultView: 'day' as View,

    formats: {
      timeGutterFormat: (date: Date) => moment(date).format('HH:mm'),
      eventTimeRangeFormat: ({ start, end }: { start: Date, end: Date }) => 
        `${moment(start).format('HH:mm')} - ${moment(end).format('HH:mm')}`,
    },
    localizer,
    events: recurringEvents,
    step: 30,
    timeslots: 2,
    eventPropGetter: eventStyleGetter,
    tooltipAccessor: (event: CalendarEvent) => 
      `${event.title}\nLocation: ${event.location}\nSpeaker: ${event.speaker}`,
    toolbar: false,
    dayPropGetter: () => ({
      style: {
        backgroundColor: theme === 'dark' ? '#2e334c' : '#2e334c',
        color: theme === 'dark' ? '#e5e5e5' : '#fff'
      }
    }),
    slotPropGetter: () => ({
      style: {
        backgroundColor: theme === 'dark' ? '#2e334c' : '#2e334c',
        borderColor: theme === 'dark' ? '#2a2a2a' : '#333',
        color: theme === 'dark' ? '#e5e5e5' : '#fff'
      }
    }),
    onSelectEvent: (event: CalendarEvent) => {
      setSelectedEvent(event)
    },
  }), [recurringEvents, theme])

  return (
    <>
      <BigCalendar 
        {...calendarProps} 
        style={{ height: 'calc(100vh - 100px)' }}
      />
      <EventDialog 
        event={selectedEvent}
        open={selectedEvent !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedEvent(null)
        }}
        onClose={() => setSelectedEvent(null)}
      />
    </>
  )
}
