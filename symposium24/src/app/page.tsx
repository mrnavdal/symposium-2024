import { SocialLinks } from '@/components/SocialLinks'
import { HeroSection } from '@/components/HeroSection'
import { Container } from '@/components/ui/container'
import { PageTransition } from '@/components/PageTransition'
import { AnimatedCard } from '@/components/ui/animated-card'
import '@/styles/globals.css'; 
import '@/styles/calendar.css';


export default function HomePage() {
  return (
    <PageTransition>
      <Container className="min-h-screen bg-background">
        <HeroSection />
        <main className="px-4 pb-20 space-y-12">
          <AnimatedCard className="max-w-3xl mx-auto text-center bg-white" delay={0.2}>
            <h2 className="text-3xl text-gray-700 text-primary leading-relaxed">Vítej na Symposiu</h2>
            <p className="text-lg text-gray-700 dark:leading-text text-muted leading-relaxed">
               Přidej se k nám na celý den plný přednášek, workshopů a networkingu s významnými lidmi z oblasti businessu.
            </p>
          </AnimatedCard>
          <SocialLinks />
        </main>
      </Container>
    </PageTransition>
  )
}
