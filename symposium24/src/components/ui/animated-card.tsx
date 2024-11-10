'use client'

import { motion } from 'framer-motion'
import { scaleIn } from '@/lib/animations'
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
    <motion.div
      variants={scaleIn}
      initial="initial"
      whileInView="visible"
      exit="exit"
      transition={{ delay }}
      viewport={{ once: false }}
      className={cn(
        'rounded-lg border bg-card p-6 shadow-sm',
        className
      )}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(props as any)} 
    >
      {children}
    </motion.div>
  )
} 