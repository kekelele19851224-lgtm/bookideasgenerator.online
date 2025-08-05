import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bookspark.com'
  const currentDate = new Date()

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/generator`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }
  ]

  // Genre-specific pages
  const genrePages = [
    'romance-book-ideas',
    'mystery-plot-generator',
    'fantasy-story-ideas',
    'science-fiction-concepts',
    'thriller-book-ideas',
    'young-adult-stories',
    'children-book-ideas'
  ].map(slug => ({
    url: `${baseUrl}/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Writing resource articles
  const resourceArticles = [
    'character-development-masterclass',
    'plot-structure-guide',
    'authentic-dialogue-writing',
    'show-dont-tell-guide',
    'building-believable-romance',
    'mystery-plot-devices',
    'fantasy-world-building',
    'science-fiction-toolkit',
    'self-publishing-guide',
    'overcoming-writers-block'
  ].map(slug => ({
    url: `${baseUrl}/resources/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Resource category pages
  const categoryPages = [
    'character-development',
    'plot-structure',
    'dialogue',
    'romance-writing',
    'mystery-writing',
    'fantasy-writing',
    'publishing',
    'writing-process'
  ].map(slug => ({
    url: `${baseUrl}/resources/category/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Additional resource pages
  const additionalPages = [
    {
      url: `${baseUrl}/resources/writing-prompts`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.7,
    }
  ]

  return [
    ...staticPages,
    ...genrePages,
    ...resourceArticles,
    ...categoryPages,
    ...additionalPages
  ]
}