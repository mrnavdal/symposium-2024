'use client'

import { cn } from '@/lib/utils'

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number
}

export function AnimatedCard({ 
  children, 
  className, 
  delay = 0,
  ...props 
}: AnimatedCardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border bg-card p-6 shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
} 