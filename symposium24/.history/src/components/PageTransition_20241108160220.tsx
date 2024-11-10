'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/animations'

interface PageTransitionProps {
  children: React.ReactNode
  className?: string
}

export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <motion.div
    variants={fadeIn}
    initial="initial"
    animate="animate"
    exit="exit"
    className={className}
    transition={{ duration: 0.3 }}
    style={{ height: '100%' }} // Zajistí správné rozmístění
    >
      {children}
    </motion.div>
  )
} 