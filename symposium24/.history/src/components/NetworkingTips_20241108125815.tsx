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
    title: 'Be Approachable',
    description: 'Maintain open body language and a friendly demeanor. Smile and make eye contact when speaking with others.'
  },
  {
    icon: MessageSquare,
    title: 'Ask Open Questions',
    description: 'Start conversations with questions that encourage detailed responses rather than simple yes/no answers.'
  },
  {
    icon: Link,
    title: 'Follow Up',
    description: 'Exchange contact information and connect on LinkedIn. Send a personalized message referencing your conversation.'
  },
  {
    icon: UserPlus,
    title: 'Share Your Story',
    description: 'Prepare a brief, engaging introduction about yourself and your work, but keep it conversational.'
  },
  {
    icon: Lightbulb,
    title: 'Add Value',
    description: 'Focus on how you can help others rather than just what you can gain from the connection.'
  }
]

export function NetworkingTips() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Networking Tips</h2>
      {networkingTips.map((tip, index) => (
        <AnimatedCard 
          key={tip.title}
          delay={index * 0.1}
          className="hover:shadow-md transition-shadow"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-full bg-primary/10">
              <tip.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{tip.title}</h3>
              <p className="text-sm text-muted-foreground">{tip.description}</p>
            </div>
          </div>
        </AnimatedCard>
      ))}
    </div>
  )
} 