import { Calendar } from '@/components/Calendar'
import { PageTransition } from '@/components/PageTransition'
import { events } from '@/data/events'

export default function SchedulePage() {
  return (
    <PageTransition>
      
        <div className="h-full rounded-lg overflow-hidden border bg-card/50">
          <Calendar events={events} />
        </div>
      
    </PageTransition>
  )
}