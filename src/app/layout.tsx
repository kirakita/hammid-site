import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ThemeToggle } from '@/components/ThemeToggle'

export const metadata: Metadata = {
  title: 'Hammid Olagunju | Software Engineer',
  description: 'Software Engineer. Based in the UK, available worldwide. I build things.',
  openGraph: {
    title: 'Hammid Olagunju | Software Engineer',
    description: 'Software Engineer. Based in the UK, available worldwide. I build things.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hammid Olagunju | Software Engineer',
    description: 'Software Engineer. Based in the UK, available worldwide. I build things.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-terminal-bg text-terminal-text font-mono antialiased">
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
