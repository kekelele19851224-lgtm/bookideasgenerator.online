import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@/components/Analytics'
import { PWAProvider } from '@/components/PWAProvider'

export const metadata: Metadata = {
  title: 'BookSpark - Book Ideas Generator | Instant Story Concepts for Writers',
  description: 'Generate unlimited book ideas in seconds. AI-powered story concepts, plot generators, and writing prompts for fiction and non-fiction authors.',
  keywords: 'book ideas generator, story generator, plot ideas, writing prompts, novel concepts, fiction ideas, book inspiration, creative writing, author tools, story concepts',
  authors: [{ name: 'BookSpark' }],
  creator: 'BookSpark',
  publisher: 'BookSpark',
  openGraph: {
    title: 'BookSpark - Ignite Your Next Story',
    description: 'Generate unlimited creative book ideas instantly. Perfect for writers, authors, and storytellers.',
    url: 'https://bookspark.com',
    siteName: 'BookSpark',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BookSpark - Book Ideas Generator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BookSpark - Book Ideas Generator',
    description: 'Generate unlimited book ideas in seconds',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="BookSpark" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />
        
        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#6366f1" />
        <meta name="msapplication-TileImage" content="/icons/icon-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Performance Optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Global Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://bookspark.com/#website",
                  "url": "https://bookspark.com",
                  "name": "BookSpark",
                  "description": "AI-powered book idea generator for writers, authors, and storytellers. Generate unlimited creative inspiration instantly.",
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://bookspark.com/generator?genre={search_term_string}"
                      },
                      "query-input": "required name=search_term_string"
                    }
                  ]
                },
                {
                  "@type": "WebApplication",
                  "@id": "https://bookspark.com/#webapp",
                  "url": "https://bookspark.com/generator",
                  "name": "BookSpark Generator",
                  "description": "Generate unlimited book ideas with AI-powered story concepts, characters, and plots.",
                  "applicationCategory": "WritingApplication",
                  "operatingSystem": "Web Browser",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  },
                  "creator": {
                    "@type": "Organization",
                    "name": "BookSpark",
                    "url": "https://bookspark.com"
                  }
                },
                {
                  "@type": "Organization",
                  "@id": "https://bookspark.com/#organization",
                  "name": "BookSpark",
                  "url": "https://bookspark.com",
                  "description": "AI-powered creative writing tools and resources for authors and storytellers.",
                  "sameAs": [
                    "https://twitter.com/bookspark",
                    "https://facebook.com/bookspark"
                  ]
                }
              ]
            })
          }}
        />
        
        {/* Google Analytics 4 - Replace GA_MEASUREMENT_ID with your actual ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href,
                custom_map: {
                  'custom_dimension_1': 'genre',
                  'custom_dimension_2': 'book_type'
                }
              });
            `
          }}
        />
      </head>
      <body className="min-h-screen bg-gray-50 antialiased">
        <Analytics />
        <PWAProvider>
          {children}
        </PWAProvider>
      </body>
    </html>
  )
}