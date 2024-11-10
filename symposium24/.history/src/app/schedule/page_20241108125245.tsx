import { Calendar } from '@/components/Calendar'
import { Container } from '@/components/ui/container'
import { PageTransition } from '@/components/PageTransition'
import { AnimatedCard } from '@/components/ui/animated-card'
import { events } from '@/data/events'

export default function SchedulePage() {
  return (
    <PageTransition>
      <Container className="py-8">
        <h1 className="text-3xl font-bold mb-8">Conference Schedule</h1>
        <AnimatedCard delay={0.2}>
          <Calendar events={events} />
        </AnimatedCard>
      </Container>
    </PageTransition>
  )
} 