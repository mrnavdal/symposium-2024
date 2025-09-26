'use client'

import { cn } from '@/lib/utils'

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number
}

export function AnimatedCard({ 
  children, 
  className, 
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