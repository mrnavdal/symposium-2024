import { Calendar } from '@/components/Calendar'
import { PageTransition } from '@/components/PageTransition'
import { events } from '@/data/events'

export default function SchedulePage() {
  return (
    <PageTransition>
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold mb-8">Schedule</h1> 
                <div className="h-full rounded-lg overflow-hidden border bg-card/50">
                    <Calendar events={events} />
                </div>
            </div>
        </div>
      
    </PageTransition>
  )
}