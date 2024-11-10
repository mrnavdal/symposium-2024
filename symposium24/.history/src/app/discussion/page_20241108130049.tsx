import { PageTransition } from '@/components/PageTransition'
import { Container } from '@/components/ui/container'
import { PanelInfo } from '@/components/PanelInfo'
import { SlidoButton } from '@/components/SlidoButton'
import { AnimatedCard } from '@/components/ui/animated-card'

export default function DiscussionPage() {
  return (
    <PageTransition>
      <Container className="py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Panel Discussion</h1>
          
          <div className="space-y-8">
            <AnimatedCard delay={0.1}>
              <PanelInfo />
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="text-center">
              <h2 className="text-xl font-semibold mb-4">Join the Discussion</h2>
              <p className="text-muted-foreground mb-6">
                Use Slido to submit your questions and participate in live polls during the panel discussion.
              </p>
              <SlidoButton />
            </AnimatedCard>
          </div>
        </div>
      </Container>
    </PageTransition>
  )
} 