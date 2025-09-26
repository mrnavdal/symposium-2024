import { PageTransition } from '@/components/PageTransition'
import { Container } from '@/components/ui/container'
import { FeedbackLink } from './components/FeedbackLink'
import { AnimatedCard } from '@/components/ui/animated-card'

export default function FeedbackPage() {
  return (
    <PageTransition>
      <Container className="pb-20 md:pb-10  md:pt-5 min-h-screen bg-background">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Zpětná vazba</h1>
          
          <div className="">
            <AnimatedCard delay={0.1}>
              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl text-gray-light mb-4">Pomozte nám se zlepšit</h2>
                <p className="text-gray-light">
                  Vaše zpětná vazba je neocenitelná při pomoci nám zlepšit Symposium. 
                  Rádi bychom slyšeli o vaší zkušenosti s:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-light">
                  <li>Obsah a prezentace přednášek</li>
                  <li>Organizace a materiály workshopů</li>
                  <li>Příležitosti k networkingu</li>
                  <li>Místo konání a zařízení</li>
                  <li>Celková organizace akce</li>
                </ul>
                <p className="text-gray-light">
                  Vyplnění dotazníku by nemělo trvat déle než 5 minut. 
                  Vaše odpovědi budou anonymní a pomohou formovat budoucí akce.
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