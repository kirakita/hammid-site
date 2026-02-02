import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aholagunju.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog/openclaw-setup`,
      lastModified: new Date('2026-02-02'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ]
}
