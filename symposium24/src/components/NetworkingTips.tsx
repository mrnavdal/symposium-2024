'use client'

import { AnimatedCard } from './ui/animated-card'
import { Lightbulb, Users, MessageSquare, Link, UserPlus } from 'lucide-react'

interface NetworkingTip {
  icon: typeof Lightbulb
  title: string
  description: string
}

const networkingTips: NetworkingTip[] = [
  {
    icon: Users,
    title: 'Být přístupný',
    description: 'Mírně otevřené postoje a příjemný výraz tváře. Smíchej a udělej oči když mluvíš s ostatními.'
  },
  {
    icon: MessageSquare,
    title: 'Ptát se otevřených otázek',
    description: 'Začni konverzaci s otázkami, které vyžadují podrobné odpovědi, ne jednoduché ano/ne.'
  },
  {
    icon: Link,
    title: 'Sdílet kontaktní informace',
    description: 'Vyměň kontaktní informace a připoj se na LinkedIn. Pošli oslovující zprávu odkazující se na tvou konverzaci.'
  },
  {
    icon: UserPlus,
    title: 'Sdílet svůj příběh',
    description: 'Připrav krátkou, zajímavou vlastní prezentaci, ale nech to být přirozené.'
  },
  {
    icon: Lightbulb,
    title: 'Dodávat hodnotu',
    description: 'Zaměř se na to, jak můžeš pomoci ostatním, nejen na to, co můžeš získat z připojení.'
  }
]

export function NetworkingTips() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Tipy pro networking</h2>
      {networkingTips.map((tip, index) => (
        <AnimatedCard 
          key={tip.title}
          delay={index * 0.1}
          className="hover:shadow-md transition-shadow bg-white"
        >
          <div className="flex items-start gap-4 bg-white">
            <div className="p-2 rounded-full bg-primary/10">
              <tip.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-background mb-1">{tip.title}</h3>
              <p className="text-sm text-background">{tip.description}</p>
            </div>
          </div>
        </AnimatedCard>
      ))}
    </div>
  )
} 