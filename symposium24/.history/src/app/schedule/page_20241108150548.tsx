import { Calendar } from '@/components/Calendar'
import { PageTransition } from '@/components/PageTransition'
import { events } from '@/data/events'

export default function SchedulePage() {
  return (
    <PageTransition>
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-background">Schedule</h1>
          <div className="h-full rounded-lg overflow-hidden border bg-card/50">
            <Calendar events={events} />
        </div>
      
    </PageTransition>
  )
}