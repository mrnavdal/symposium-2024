'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { 
  Home, 
  Calendar, 
  Users, 
  MessageCircle, 
  MessageSquare,
  LucideIcon 
} from 'lucide-react'

interface NavItem {
  href: string
  label: string
  icon: LucideIcon
}

const navItems: NavItem[] = [
  { href: '/', label: 'Úvod', icon: Home },
  { href: '/schedule', label: 'Program', icon: Calendar },
  { href: '/networking', label: 'Networking', icon: Users },
  { href: '/discussion', label: 'Diskuse', icon: MessageCircle },
  { href: '/feedback', label: 'Feedback', icon:MessageSquare },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <>
      {/* Desktop Side Navigation */}
      <nav className="hidden md:flex fixed left-0 top-0 h-screen w-64 border-r bg-background p-4">
        <div className="space-y-4 w-full">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold">Symposium</h2>
          </div>
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                  pathname === item.href 
                    ? 'bg-secondary text-secondary-foreground' 
                    : 'hover:bg-secondary/80'
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-background z-50">
        <div className="grid grid-cols-5 w-full">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center gap-1 p-3 text-xs',
                pathname === item.href 
                  ? 'text-primary' 
                  : 'text-muted-foreground'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Content Padding for Mobile Bottom Nav */}
      <div className="pb-4 md:pb-0 md:pl-64 bg-background">
        {/* This div wraps the main content to provide padding */}
      </div>
    </>
  )
} 