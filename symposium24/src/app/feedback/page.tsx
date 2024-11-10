import { PageTransition } from '@/components/PageTransition'
import { Container } from '@/components/ui/container'
import { FeedbackLink } from '@/components/FeedbackLink'
import { AnimatedCard } from '@/components/ui/animated-card'

export default function FeedbackPage() {
  return (
    <PageTransition>
      <Container className="py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Feedback</h1>
          
          <div className="space-y-8">
            <AnimatedCard delay={0.1}>
              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl text-background mb-4">Help Us Improve</h2>
                <p className="text-background">
                  Your feedback is invaluable in helping us make TechConf better. 
                  Wed love to hear about your experience with:
                </p>
                <ul className="list-disc pl-6 mb-4 text-background">
                  <li>Session content and presentations</li>
                  <li>Workshop organization and materials</li>
                  <li>Networking opportunities</li>
                  <li>Venue and facilities</li>
                  <li>Overall event organization</li>
                </ul>
                <p className="text-background">
                  The survey should take no more than 5 minutes to complete. 
                  Your responses will be anonymous and will help shape future events.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="text-center">
              <FeedbackLink />
            </AnimatedCard>
          </div>
        </div>
      </Container>
    </PageTransition>
  )
} 