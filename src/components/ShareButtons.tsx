'use client'

import { useState } from 'react'

interface ShareButtonsProps {
  url: string
  title: string
  description?: string
}

export function ShareButtons({ url, title, description }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDesc = encodeURIComponent(description || '')

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    hackernews: `https://news.ycombinator.com/submitlink?u=${encodedUrl}&t=${encodedTitle}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="flex flex-wrap gap-3 items-center text-sm">
      <span className="text-terminal-dim">Share:</span>
      
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1 border border-terminal-dim rounded hover:border-terminal-highlight hover:text-terminal-highlight transition-colors"
        aria-label="Share on X/Twitter"
      >
        𝕏
      </a>
      
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1 border border-terminal-dim rounded hover:border-terminal-highlight hover:text-terminal-highlight transition-colors"
        aria-label="Share on LinkedIn"
      >
        in
      </a>
      
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1 border border-terminal-dim rounded hover:border-terminal-highlight hover:text-terminal-highlight transition-colors"
        aria-label="Share on Facebook"
      >
        fb
      </a>
      
      <a
        href={shareLinks.reddit}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1 border border-terminal-dim rounded hover:border-terminal-highlight hover:text-terminal-highlight transition-colors"
        aria-label="Share on Reddit"
      >
        r/
      </a>
      
      <a
        href={shareLinks.hackernews}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1 border border-terminal-dim rounded hover:border-terminal-highlight hover:text-terminal-highlight transition-colors"
        aria-label="Share on Hacker News"
      >
        HN
      </a>
      
      <button
        onClick={copyToClipboard}
        className="px-3 py-1 border border-terminal-dim rounded hover:border-terminal-highlight hover:text-terminal-highlight transition-colors"
        aria-label="Copy link"
      >
        {copied ? '✓ copied' : 'copy'}
      </button>
    </div>
  )
}
