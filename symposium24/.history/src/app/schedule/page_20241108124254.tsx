import { Calendar } from '@/components/Calendar'
import { Container } from '@/components/ui/container'
import { events } from '@/data/events'

export default function SchedulePage() {
  return (
    <Container className="py-8">
      <h1 className="text-3xl font-bold mb-8">Conference Schedule</h1>
      <div className="rounded-lg border bg-card p-4">
        <Calendar events={events} />
      </div>
    </Container>
  )
} 