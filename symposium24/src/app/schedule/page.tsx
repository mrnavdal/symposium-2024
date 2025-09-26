import { Calendar } from '@/components/Calendar'
import { PageTransition } from '@/components/PageTransition'
import { Container } from '@/components/ui/container'
import { events } from '@/data/events'

export default function SchedulePage() {
  return (
    <PageTransition>
        <Container className="pb-20 md:pb-10  md:pt-5 min-h-screen bg-background">
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-semibold text-foreground">Časový rozvrh</h1>
                <div className="h-full rounded-lg overflow-hidden border bg-card/50">
                    <Calendar events={events} />
                </div>
            </div>
        </Container>
    </PageTransition>
 
)
}