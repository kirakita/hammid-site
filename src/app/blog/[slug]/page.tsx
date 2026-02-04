import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPostSlugs, getPost, formatDate, getReadingTime } from '@/lib/blog'
import { ShareButtons } from '@/components/ShareButtons'

interface Props {
  params: Promise<{ slug: string }>
}

// Generate static paths for all posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map(slug => ({ slug }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  
  try {
    const post = await getPost(slug)
    const url = `https://aholagunju.com/blog/${slug}`
    
    return {
      title: `${post.title} | Hammid Olagunju`,
      description: post.description,
      keywords: ['AI agent', 'OpenClaw', 'Raspberry Pi', 'automation', 'Claude', 'personal assistant', 'developer tools'],
      authors: [{ name: post.author, url: 'https://aholagunju.com' }],
      openGraph: {
        title: post.title,
        description: post.description,
        type: 'article',
        publishedTime: post.date,
        authors: [post.author],
        url,
        siteName: 'Hammid Olagunju',
      },
      twitter: {
        card: 'summary',
        title: post.title,
        description: post.description,
        creator: '@aholagunju',
      },
      alternates: {
        canonical: url,
      },
    }
  } catch {
    return {
      title: 'Post Not Found | Hammid Olagunju',
    }
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  
  let post
  try {
    post = await getPost(slug)
  } catch {
    notFound()
  }
  
  const url = `https://aholagunju.com/blog/${slug}`
  const readingTime = getReadingTime(post.contentHtml)
  
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <header className="mb-12">
        <Link href="/" className="text-terminal-dim text-sm hover:text-terminal-text">
          ← back
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold mt-6 mb-4">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-terminal-dim text-sm mb-6">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>·</span>
          <span>{readingTime} min read</span>
        </div>
        <ShareButtons 
          url={url} 
          title={post.title} 
          description={post.description}
        />
      </header>

      <article 
        className="prose-terminal"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
      />

      <footer className="mt-12 pt-8 border-t border-terminal-dim">
        <ShareButtons 
          url={url} 
          title={post.title} 
          description={post.description}
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
