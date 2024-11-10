'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface PageTransitionProps {
  children: React.ReactNode
  className?: string
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
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