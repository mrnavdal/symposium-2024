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
      whileInView="animate"
      exit="exit"
      viewport={{ once: true }}
      transition={{ delay }}
      className={cn(
        'rounded-lg border bg-card p-6 shadow-sm',
        className
      )}
      // @ts-expect-error - Framer motion props incompatibility
      {...props}
    >
      {children}
    </motion.div>
  )
} 