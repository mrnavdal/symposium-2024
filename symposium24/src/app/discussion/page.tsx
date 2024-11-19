import { PageTransition } from '@/components/PageTransition'
import { Container } from '@/components/ui/container'
import { PanelInfo } from '@/components/PanelInfo'
import { SlidoButton } from '@/components/SlidoButton'
import { AnimatedCard } from '@/components/ui/animated-card'

export default function DiscussionPage() {
  return (
    <PageTransition>
      <Container className="pb-20 md:pb-10  md:pt-5 min-h-screen bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Panelová diskuse</h1>
          
          <div className="space-y-8 bg-background">
            <AnimatedCard delay={0.1}>
              <PanelInfo />
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="text-center">
              <h2 className="text-xl text-accent mb-4">Připoj se k diskuzi</h2>
              <p className="text-gray-light mb-6">
                Použij Slido k odeslání svých otázek.
              </p>
              <SlidoButton />
            </AnimatedCard>
          </div>
        </div>
      </Container>
    </PageTransition>
  )
} 