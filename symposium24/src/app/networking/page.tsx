import { PageTransition } from '@/components/PageTransition'
import { Container } from '@/components/ui/container'
import { BadgeDescriptions } from '@/components/NetworkingEvents'
import { NetworkingTips } from '@/components/NetworkingTips'

export default function NetworkingPage() {
  return (
    <PageTransition>
      <Container className="py-8">
        <h1 className="text-3xl font-bold mb-8">Networking</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <BadgeDescriptions />
          <NetworkingTips />
        </div>
      </Container>
    </PageTransition>
  )
} 