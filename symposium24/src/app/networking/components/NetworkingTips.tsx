'use client'

import { AnimatedCard } from '@/components/ui/animated-card'
import { Lightbulb, Users, MessageSquare, Link, UserPlus } from 'lucide-react'

interface NetworkingTip {
  icon: typeof Lightbulb
  title: string
  description: string
}


// Start of Selection
const networkingTips: NetworkingTip[] = [
  {
    icon: Users,
    title: 'Buď přístupný',
    description: 'Zaujmi otevřený postoj a příjemný výraz obličeje. Usmívej se a navazuj oční kontakt při rozhovoru s ostatními.'
  },
  {
    icon: MessageSquare,
    title: 'Polož otevřené otázky',
    description: 'Začni rozhovor otázkami, které vyžadují podrobné odpovědi, nikoliv pouze ano či ne.'
  },
  {
    icon: Link,
    title: 'Sdílej kontaktní informace',
    description: 'Vyměňte si kontaktní údaje a připojte se na LinkedIn. Pošli uvítací zprávu s odkazem na váš rozhovor.'
  },
  {
    icon: UserPlus,
    title: 'Sdílej svůj příběh',
    description: 'Připrav krátký, zajímavý osobní příběh, ale zachovej přirozenost.'
  },
  {
    icon: Lightbulb,
    title: 'Dodávej hodnotu',
    description: 'Zaměř se na to, jak můžeš ostatním pomoci, a ne jen na to, co můžeš získat z nových kontaktů.'
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