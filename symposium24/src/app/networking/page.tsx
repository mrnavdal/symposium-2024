import { PageTransition } from '@/components/PageTransition'
import { Container } from '@/components/ui/container'
import { BadgeDescriptions } from './components/BadgeDescriptions'
import { NetworkingTips } from './components/NetworkingTips'

export default function NetworkingPage() {
  return (
    <PageTransition>
      <Container className="pb-20 md:pb-10  md:pt-5 min-h-screen bg-background">
        <h1 className="text-3xl font-bold mb-8">Networking</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <BadgeDescriptions />
          <NetworkingTips />
        </div>
      </Container>
    </PageTransition>
  )
} 