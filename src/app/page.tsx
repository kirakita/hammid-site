'use client'

import { useState, useEffect } from 'react'

const TypingText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1))
          i++
        } else {
          clearInterval(interval)
          setTimeout(() => setShowCursor(false), 1000)
        }
      }, 50)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timeout)
  }, [text, delay])

  return (
    <span>
      {displayed}
      {showCursor && <span className="cursor" />}
    </span>
  )
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-12">
    <h2 className="text-terminal-dim text-sm mb-4">// {title}</h2>
    {children}
  </section>
)

const Link = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-terminal-highlight hover:underline"
  >
    {children}
  </a>
)

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      {/* Header */}
      <header className="mb-16">
        <div className="text-terminal-dim text-sm mb-2">guest@hammid.dev:~$</div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          {loaded ? <TypingText text="Hammid Akande" /> : 'Hammid Akande'}
        </h1>
        <p className="text-terminal-dim text-lg">
          Software Engineer. Lagos → Canada → UK.
        </p>
        <p className="text-terminal-text mt-2">I build things.</p>
      </header>

      {/* About */}
      <Section title="about">
        <div className="space-y-3 text-terminal-dim">
          <p className="prompt">Lead Software Engineer at <span className="text-terminal-text">Virgin Media O2</span></p>
          <p className="prompt">Backend-focused. TypeScript ecosystem.</p>
          <p className="prompt">Part-time consulting — leading engineering teams</p>
          <p className="prompt">Nigerian 🇳🇬 | Based in UK 🇬🇧</p>
        </div>
        <blockquote className="mt-6 pl-4 border-l-2 border-terminal-dim text-terminal-highlight italic">
          "In a world where everyone is intelligent, speed is your only edge."
        </blockquote>
      </Section>

      {/* Building */}
      <Section title="building">
        <div className="space-y-6">
          <div>
            <h3 className="text-terminal-text font-bold">
              <Link href="https://dimmah.com">Dimmah</Link>
            </h3>
            <p className="text-terminal-dim text-sm mt-1">
              Full-service software agency. Web, mobile, cloud, AI.
            </p>
          </div>
          <div>
            <h3 className="text-terminal-text font-bold">
              Relo <span className="text-terminal-dim text-sm">(coming soon)</span>
            </h3>
            <p className="text-terminal-dim text-sm mt-1">
              WhatsApp bot for diaspora to pay family bills back home. 
              Electricity, TV, airtime — all from a chat.
            </p>
          </div>
        </div>
      </Section>

      {/* Writing */}
      <Section title="writing">
        <p className="text-terminal-dim mb-4">
          Thoughts on AI, dev tools, and building things fast.
        </p>
        <div className="space-y-2">
          <p className="text-terminal-dim text-sm">Coming soon...</p>
        </div>
      </Section>

      {/* Connect */}
      <Section title="connect">
        <div className="flex flex-wrap gap-6 text-sm">
          <Link href="https://github.com/hammid">GitHub</Link>
          <Link href="https://linkedin.com/in/hammidakande">LinkedIn</Link>
          <Link href="https://twitter.com/hammidakande">Twitter</Link>
          <Link href="mailto:hello@hammid.dev">Email</Link>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-terminal-dim/30">
        <p className="text-terminal-dim text-sm">
          © {new Date().getFullYear()} Hammid Akande. Built with Next.js.
        </p>
      </footer>
    </main>
  )
}
