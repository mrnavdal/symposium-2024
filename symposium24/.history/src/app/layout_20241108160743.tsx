import './globals.css'
import { Inter } from 'next/font/google'
import PageTransition from '@/components/PageTransition'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TechConf 2024',
  description: 'Conference schedule and information',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen m-0 p-0`}>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  )
}
