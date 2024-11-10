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
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      transition={{ duration: 0.3 }}

      viewport={{ once: true }}
      
      className={cn(
        'rounded-lg border bg-card p-6 shadow-sm',
        className
      )}
      {...(props as any)} // Type assertion to fix incompatible event handler types
    >
      {children}
    </motion.div>
  )
} 