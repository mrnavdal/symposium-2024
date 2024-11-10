'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { CalendarEvent } from "@/types/event"
import { format } from "date-fns"

interface EventDialogProps {
  event: CalendarEvent | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EventDialog({ event, open, onOpenChange }: EventDialogProps) {
  if (!event) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{event.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <p className="font-semibold">Čas</p>
            <p>
              {format(event.start, "HH:mm")} - {format(event.end, "HH:mm")}
            </p>
          </div>
          <div>
            <p className="font-semibold">Místo</p>
            <p>{event.location}</p>
          </div>
          <div>
            <p className="font-semibold">Přednášející</p>
            <p>{event.speaker}</p>
          </div>
          {event.description && (
            <div>
              <p className="font-semibold">Popis</p>
              <p>{event.description}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
} 