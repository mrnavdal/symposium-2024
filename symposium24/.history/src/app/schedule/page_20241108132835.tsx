import { Calendar } from '@/components/Calendar'
import { Container } from '@/components/ui/container'
import { PageTransition } from '@/components/PageTransition'
import { AnimatedCard } from '@/components/ui/animated-card'
import { events } from '@/data/events'
import { ScheduleHeader } from '@/components/ScheduleHeader'

export default function SchedulePage() {
  return (
    <PageTransition>
      <Container className="py-8">
        <ScheduleHeader />
        <AnimatedCard 
          delay={0.2}
          className="bg-gradient-to-b from-background to-muted/20 backdrop-blur-sm"
        >
          <div className="rounded-lg overflow-hidden border bg-card/50">
            <Calendar events={events} />
          </div>
        </AnimatedCard>
      </Container>
    </PageTransition>
  )
} 