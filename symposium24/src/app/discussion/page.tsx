import { PageTransition } from '@/components/PageTransition'

import { PanelInfo } from './components/PanelInfo'
import { SlidoButton } from './components/SlidoButton'
import { AnimatedCard } from '@/components/ui/animated-card'

export default function DiscussionPage() {
  return (
    <PageTransition>
      <div className="p-4 md:p-8 min-h-screen bg-background pb-[80px] md:pb-4">
        <div className="w-full max-w-full">
          <h1 className="text-3xl font-bold mb-8">Panelová diskuse</h1>
          
          <div className="space-y-8 bg-background">

            <AnimatedCard delay={0.2} className="text-center">
              <h2 className="text-xl text-accent mb-4">Připoj se k diskuzi</h2>
              <p className="text-gray-light mb-6">
                Použij Slido k odeslání svých otázek.
              </p>
              <SlidoButton />
            </AnimatedCard>
            <AnimatedCard delay={0.1}>
              <PanelInfo />
            </AnimatedCard>
          </div>
        </div>
      </div>
    </PageTransition>
  )
} 