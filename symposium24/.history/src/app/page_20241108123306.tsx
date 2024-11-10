import Image from 'next/image'
import { SocialLinks } from '@/components/SocialLinks'
import { HeroSection } from '@/components/HeroSection'
import { Container } from '@/components/ui/container'

export default function HomePage() {
  return (
    <Container className="min-h-screen">
      <HeroSection />
      <main className="px-4 py-8 space-y-12">
        <section className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Welcome to TechConf 2024</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Join us for three days of inspiring talks, hands-on workshops, and 
            networking opportunities with industry leaders in technology.
          </p>
        </section>
        <SocialLinks />
      </main>
    </Container>
  )
}
