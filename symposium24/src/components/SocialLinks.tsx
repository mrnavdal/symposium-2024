'use client'

import { motion } from 'framer-motion'
import { Instagram, Linkedin } from 'lucide-react'

export function SocialLinks() {
  return (
    <motion.div 
      className="flex justify-center gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <a
        href="https://www.instagram.com/symposium_konference/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <Instagram className="w-6 h-6" />
      </a>
      <a
        href="https://www.linkedin.com/company/79326950/admin/dashboard/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <Linkedin className="w-6 h-6" />
      </a>
    </motion.div>
  )
} 