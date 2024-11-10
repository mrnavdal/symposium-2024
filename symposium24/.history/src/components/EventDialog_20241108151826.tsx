'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { CalendarEvent } from "@/types/event"
import moment from 'moment'
import { speakers } from "@/data/speakers"
import Image from "next/image"

interface EventDialogProps {
  event: CalendarEvent | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EventDialog({ event, open, onOpenChange }: EventDialogProps) {
  if (!event) return null

  const speaker = event.speaker ? speakers.find(s => s.name === event.speaker) : null

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
              {moment(event.start).format("HH:mm")} - {moment(event.end).format("HH:mm")}
            </p>
          </div>
          <div>
            <p className="font-semibold">Místo</p>
            <p>{event.location}</p>
          </div>
          {speaker && (
            <div>
              <p className="font-semibold">Přednášející</p>
              <div className="flex items-start gap-4 mt-2">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={speaker.imageUrl}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{speaker.name}</p>
                  <p className="text-sm text-muted-foreground">{speaker.description}</p>
                </div>
              </div>
            </div>
          )}
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