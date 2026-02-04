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

const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-terminal-highlight hover:underline"
  >
    {children}
  </a>
)

// Blog posts data - imported at build time via server component would be cleaner,
// but keeping it simple for now. Update this array when adding new posts.
const posts = [
  {
    slug: 'openclaw-setup',
    title: 'How I Set Up OpenClaw on a Raspberry Pi',
    description: 'It prototypes while I sleep. Here\'s my setup.',
    date: '2026-02-02',
  },
]

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      {/* Header */}
      <header className="mb-16">
        <div className="text-terminal-dim text-sm mb-2">guest@aholagunju.com:~$</div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          {loaded ? <TypingText text="Hammid Olagunju" /> : 'Hammid Olagunju'}
        </h1>
        <p className="text-terminal-dim text-lg">
          Software Engineer. Based in the UK, available worldwide.
        </p>
        <p className="text-terminal-text mt-2">I build things.</p>
      </header>

      {/* About */}
      <Section title="about">
        <div className="space-y-3 text-terminal-dim">
          <p className="prompt">Senior Software Engineer at <span className="text-terminal-text">Virgin Media O2</span></p>
          <p className="prompt">Versatile across stacks. Currently into AI & distributed systems.</p>
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
              <ExternalLink href="https://dimmah.com">Dimmah</ExternalLink>
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
        <div className="space-y-4">
          {posts.map(post => (
            <a key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <h3 className="text-terminal-text group-hover:text-terminal-highlight">
                {post.title}
              </h3>
              <p className="text-terminal-dim text-sm mt-1">
                {post.description}
              </p>
              <p className="text-terminal-dim/50 text-xs mt-1">
                {new Date(post.date).toLocaleDateString('en-GB', { 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </p>
            </a>
          ))}
        </div>
      </Section>

      {/* Connect */}
      <Section title="connect">
        <div className="flex flex-wrap gap-6 text-sm">
          <ExternalLink href="https://github.com/princeede">GitHub</ExternalLink>
          <ExternalLink href="https://linkedin.com/in/abdul-hammid-olagunju">LinkedIn</ExternalLink>
          <ExternalLink href="https://twitter.com/aholagunju">Twitter</ExternalLink>
          <ExternalLink href="mailto:hammid@aholagunju.com">Email</ExternalLink>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-terminal-dim/30">
        <p className="text-terminal-dim text-sm">
          © {new Date().getFullYear()} Hammid Olagunju. Built with Next.js.
        </p>
      </footer>
    </main>
  )
}
