'use client'

import { AnimatedCard } from './ui/animated-card'
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
    color: 'bg-green-500',
    textColor: 'text-green-500',
    title: 'Zelený proužek',
    description: 'Účastník začíná s podnikáním nebo je teprve v přípravné fázi.'
  },
  {
    id: '2',
    color: 'bg-yellow-500',
    textColor: 'text-yellow-500',
    title: 'Žlutý proužek',
    description: 'Účastník již má vlastní firmu a aktivně podniká.'
  },
  {
    id: '3',
    color: 'bg-red-500',
    textColor: 'text-red-500',
    title: 'Červený proužek',
    description: 'Účastník zatím nepodniká, ale má o podnikání zájem.'
  }
]

export function BadgeDescriptions() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl dark:leading-text leading-text font-semibold mb-4">Pravidla networkingu</h2>
      <p className="text-muted-foreground mb-6">
        Každý účastník má na své jmenovce barevný proužek, který indikuje jeho podnikatelský status:
      </p>
      {networkingRules.map((rule) => (
        <AnimatedCard 
          key={rule.id}
          delay={parseInt(rule.id) * 0.1}
          className="hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-3 mb-3">
            <Circle className={`h-6 w-6 ${rule.color} rounded-full`} />
            <h3 className="text-xl text-leading-text dark:text-leading-text font-semibold">{rule.title}</h3>
          </div>
          <p className="text-muted-foreground">{rule.description}</p>
        </AnimatedCard>
      ))}
    </div>
  )
} 