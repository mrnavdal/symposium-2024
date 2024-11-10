import { ClientAnimatePresence } from '@/components/ClientAnimatePresence'
import { ThemeProvider } from '@/components/ThemeProvider'
import { TestAnimation } from '@/components/ui/TestAnimation'

export default function HomePage() {
  return (
    <PageTransition>
      <Container className="min-h-screen">
        <HeroSection />
        <main className="px-4 py-8 space-y-12">
          <AnimatedCard className="max-w-3xl mx-auto text-center" delay={0.2}>
            <h2 className="text-3xl text-gray-700 dark:leading-text leading-relaxed">Welcome to TechConf 2024</h2>
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
