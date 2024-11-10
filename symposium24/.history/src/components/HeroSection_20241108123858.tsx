'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <motion.div 
      className="relative h-[60vh] min-h-[400px] w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Image
        src="/hero-image.jpg"
        alt="Conference hall"
        fill
        priority
        className="object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black/40 rounded-lg" />
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className="text-center space-y-4 p-4">
          <h1 className="text-4xl md:text-6xl font-bold">TechConf 2024</h1>
          <p className="text-xl md:text-2xl">Shaping the Future of Technology</p>
        </div>
      </div>
    </motion.div>
  )
} 