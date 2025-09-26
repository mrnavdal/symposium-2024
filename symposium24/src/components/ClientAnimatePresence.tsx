"use client"

import { AnimatePresence } from "framer-motion"
import { ReactNode } from "react"

interface ClientAnimatePresenceProps {
  children: ReactNode
}

export function ClientAnimatePresence({ children }: ClientAnimatePresenceProps) {
  return <AnimatePresence mode="wait" initial={false}>{children}</AnimatePresence>
}
