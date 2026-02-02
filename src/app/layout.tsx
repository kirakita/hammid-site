import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Akande Hammid Olagunju | Software Engineer',
  description: 'Software Engineer. Lagos → Canada → UK. I build things.',
  openGraph: {
    title: 'Akande Hammid Olagunju | Software Engineer',
    description: 'Software Engineer. Lagos → Canada → UK. I build things.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akande Hammid Olagunju | Software Engineer',
    description: 'Software Engineer. Lagos → Canada → UK. I build things.',
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
        {children}
      </body>
    </html>
  )
}
