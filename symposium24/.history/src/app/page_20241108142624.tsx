import { SocialLinks } from '@/components/SocialLinks'
import { HeroSection } from '@/components/HeroSection'
import { Container } from '@/components/ui/container'
import { PageTransition } from '@/components/PageTransition'
import { AnimatedCard } from '@/components/ui/animated-card'

export default function HomePage() {
  return (
    <PageTransition>
      <Container className="min-h-screen space-y-12">
        <HeroSection />
        <main className="px-4 py-8 space-y-12">
          <AnimatedCard className="max-w-3xl mx-auto text-center" delay={0.2}>
            <h2 className="text-3xl dark:leading-text leading-text font-bold mb-6">Welcome to TechConf 2024</h2>
            <p className="text-lg text-gray-700 dark:leading-text leading-relaxed">
              Join us for three days of inspiring talks, hands-on workshops, and 
              networking opportunities with industry leaders in technology.
            </p>
          </AnimatedCard>
          <SocialLinks />
        </main>
      </Container>
    </PageTransition>
  )
}
