'use client'

import { AnimatedCard } from '@/components/ui/animated-card'
import { Circle } from 'lucide-react'

interface NetworkingRule {
  id: string
  color: string
  title: string
  description: string
  textColor: string
}

const networkingRules: NetworkingRule[] = [
  {
    id: '1',
    color: 'bg-green',
    textColor: 'text-green-500',
    title: 'Zelený proužek',
    description: '"Tiše se inspiruji. Zatím jsem nerozjel žádnou vlastní firmu, ale do budoucna to je možné."'
  },
  {
    id: '2',
    color: 'bg-red',
    textColor: 'text-red-500',
    title: 'Červený  proužek',
    description: '"Začínám podnikat. Můžeš se se mnou podělit o své zkušenosti."'
  },
  {
    id: '3',
    color: 'bg-blue',
    textColor: 'text-blue-500',
    title: 'Modrý proužek',
    description: '"Hledám business parťáka - Rojíždím firmu, nebo už nějakou mám rozjetou a hledám nové business parťáky."'
  }
]

export function BadgeDescriptions() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl dark:leading-text leading-text font-semibold mb-4">Proužky na jmenovce</h2>
      <p className="text-foreground mb-6">
        Každý účastník má na své jmenovce barevný proužek, který indikuje jeho vztah k podnikání:
      </p>
      {networkingRules.map((rule) => (
        <AnimatedCard 
          key={rule.id}
          delay={parseInt(rule.id) * 0.1}
          className="hover:shadow-md transition-shadow bg-white"
        >
          <div className="flex items-center gap-3 mb-3">
            <Circle className={`h-6 w-6 ${rule.color} rounded-full`} />
            <h3 className="text-xl text-background font-semibold">{rule.title}</h3>
          </div>
          <p className="text-background">{rule.description}</p>
        </AnimatedCard>
      ))}
    </div>
  )
} 