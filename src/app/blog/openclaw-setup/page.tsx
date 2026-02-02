import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ShareButtons } from '@/components/ShareButtons'

// Feature image: Raspberry Pi Zero W macro by Gavin Allanwood (Unsplash)
const FEATURE_IMAGE = 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=1200&q=80'

const ARTICLE_URL = 'https://aholagunju.com/blog/openclaw-setup'
const ARTICLE_TITLE = 'I Run an AI Agent on a Raspberry Pi. It Prototypes While I Sleep.'
const ARTICLE_DESCRIPTION = 'How I set up OpenClaw on a £50 computer for 24/7 AI assistance — with proper isolation for security.'
const PUBLISH_DATE = '2026-02-02'

export const metadata: Metadata = {
  title: `${ARTICLE_TITLE} | Hammid Olagunju`,
  description: ARTICLE_DESCRIPTION,
  keywords: ['AI agent', 'OpenClaw', 'Raspberry Pi', 'automation', 'Claude', 'personal assistant', 'developer tools'],
  authors: [{ name: 'Hammid Olagunju', url: 'https://aholagunju.com' }],
  openGraph: {
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    type: 'article',
    publishedTime: PUBLISH_DATE,
    authors: ['Hammid Olagunju'],
    url: ARTICLE_URL,
    siteName: 'Hammid Olagunju',
    images: [{ url: FEATURE_IMAGE, width: 1200, height: 630, alt: 'Raspberry Pi circuit board macro' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    creator: '@aholagunju',
    images: [FEATURE_IMAGE],
  },
  alternates: {
    canonical: ARTICLE_URL,
  },
}

export default function OpenClawArticle() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <header className="mb-12">
        <Link href="/" className="text-terminal-dim text-sm hover:text-terminal-text">
          ← back
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold mt-6 mb-4">
          {ARTICLE_TITLE}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-terminal-dim text-sm mb-6">
          <time dateTime={PUBLISH_DATE}>February 2, 2026</time>
          <span>·</span>
          <span>2 min read</span>
        </div>
        <ShareButtons 
          url={ARTICLE_URL} 
          title={ARTICLE_TITLE} 
          description={ARTICLE_DESCRIPTION}
        />
        
        {/* Feature image */}
        <div className="mt-8 -mx-6 md:mx-0 md:rounded-lg overflow-hidden">
          <Image
            src={FEATURE_IMAGE}
            alt="Raspberry Pi circuit board macro - the hardware running my AI agent"
            width={1200}
            height={630}
            className="w-full h-auto"
            priority
          />
          <p className="text-xs text-terminal-dim mt-2 text-center">
            Photo by <a href="https://unsplash.com/@gavla" className="hover:text-terminal-text" target="_blank" rel="noopener noreferrer">Gavin Allanwood</a> on Unsplash
          </p>
        </div>
      </header>

      <article className="space-y-6 text-terminal-dim leading-relaxed">
        <p>
          AI coding agents are incredible. Claude, Cursor, GPT — they've made building things faster than ever.
        </p>

        <p>
          But here's the thing: <span className="text-terminal-text">you still have to be at your computer to use them.</span>
        </p>

        <p>
          I'd get ideas at random times — on the train, walking, half-asleep. I'd jot them in Apple Notes, hoping I'd remember the context later. Most didn't survive the journey back to my desk.
        </p>

        <p>
          So I set up something different.
        </p>

        <p>
          I have an AI agent running 24/7 on a Raspberry Pi. I message it on WhatsApp like a colleague. "Scaffold a landing page for X." "Set up the project structure." "Research this and give me options."
        </p>

        <p>
          <span className="text-terminal-text">By the time I sit down, the work is started. Sometimes it's done.</span>
        </p>

        <h2 className="text-terminal-text text-xl font-bold mt-10 mb-4">Why a Raspberry Pi?</h2>

        <p>
          Honestly? Isolation. I didn't want to give an AI agent full access to my main machine with all my credentials and files. The Pi has its own workspace, its own GitHub, its own API keys. I can SSH in anytime. It can't reach out to me.
        </p>

        <p>
          Clean separation. I control the boundary.
        </p>

        <div className="my-8 p-4 border border-terminal-dim rounded" role="figure" aria-label="Isolation setup diagram">
          <p className="text-terminal-dim text-sm mb-4">// isolation setup</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-terminal-text font-bold mb-2">My MacBook</p>
              <ul className="text-terminal-dim space-y-1">
                <li>🔐 Bank credentials</li>
                <li>🔑 SSH keys</li>
                <li>📧 Personal email</li>
                <li>🗂️ Private files</li>
              </ul>
            </div>
            <div>
              <p className="text-terminal-text font-bold mb-2">Raspberry Pi</p>
              <ul className="text-terminal-dim space-y-1">
                <li>🤖 OpenClaw agent</li>
                <li>📁 Agent workspace</li>
                <li>🔑 Dedicated API keys</li>
                <li>🐙 Separate GitHub</li>
              </ul>
            </div>
          </div>
          <p className="text-terminal-highlight text-sm mt-4">✅ I can SSH in → 🚫 Agent can't reach me</p>
        </div>

        <h2 className="text-terminal-text text-xl font-bold mt-10 mb-4">The Tool</h2>

        <p>
          The tool is called <a href="https://github.com/openclaw/openclaw" className="text-terminal-highlight hover:underline" rel="noopener noreferrer" target="_blank">OpenClaw</a> — open source, connects Claude to messaging apps and file systems. Still early, still rough edges. But the core idea works: an AI that can actually <em>do things</em>, not just talk about them.
        </p>

        <h2 className="text-terminal-text text-xl font-bold mt-10 mb-4">What I Use It For</h2>

        <ul className="space-y-2">
          <li className="prompt">Scaffolding side projects I'd been putting off</li>
          <li className="prompt">Researching topics and dumping structured summaries into Notion</li>
          <li className="prompt">Setting up calendar invites for my week</li>
          <li className="prompt">Running cron jobs to scan flight prices for upcoming trips</li>
          <li className="prompt">Monitoring AI news and giving me 4-hourly updates</li>
        </ul>

        <p className="mt-6">
          These aren't "tell me about X" tasks. These are <span className="text-terminal-text">"go do X and come back when it's done"</span> tasks.
        </p>

        <h2 className="text-terminal-text text-xl font-bold mt-10 mb-4">Still Early Days</h2>

        <p>
          It's not replacing my job. But for personal projects, research, and life admin? It's already saving me hours. The unlock is that it runs 24/7 on a £50 computer and acts on my behalf while I do other things.
        </p>

        <p className="text-terminal-text mt-8">
          Ideas no longer die in my notes app. That alone has been worth it.
        </p>
      </article>

      <footer className="mt-12 pt-8 border-t border-terminal-dim">
        <ShareButtons 
          url={ARTICLE_URL} 
          title={ARTICLE_TITLE} 
          description={ARTICLE_DESCRIPTION}
        />
        <div className="mt-8">
          <Link href="/" className="text-terminal-highlight hover:underline">
            ← back to home
          </Link>
        </div>
      </footer>
    </main>
  )
}
