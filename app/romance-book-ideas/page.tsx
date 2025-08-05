import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { BookGenerator } from '@/components/BookGenerator'
import { IdeaDisplay } from '@/components/IdeaDisplay'
import { BookIdea } from '@/types'
import { useState } from 'react'
import { Heart, Star, BookOpen, Users, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Romance Book Ideas Generator | 500+ Love Story Concepts & Plot Ideas',
  description: 'Generate unlimited romance book ideas instantly. From enemies-to-lovers to second chances, get creative love story concepts, characters, and plots for your next romantic novel.',
  keywords: 'romance book ideas, love story generator, romance novel concepts, romantic plot ideas, enemies to lovers, second chance romance, fake dating ideas, romance writing prompts',
  openGraph: {
    title: 'Romance Book Ideas Generator | Unlimited Love Story Concepts',
    description: 'Generate unlimited romance book ideas with compelling characters, emotional conflicts, and heartwarming plots. Perfect for romance writers and storytellers.',
    images: ['/og-romance.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Romance Book Ideas Generator',
    description: 'Generate unlimited romance book ideas instantly',
    images: ['/og-romance.png'],
  },
}

const popularRomanceIdeas = [
  {
    title: "The Wedding Planner's Second Chance",
    concept: "A successful wedding planner must organize her ex-fiancé's wedding, forcing them to confront their past and discover whether their love deserves a second chance.",
    tags: ["Second Chance", "Workplace Romance", "Emotional"]
  },
  {
    title: "Fake Dating the CEO",
    concept: "A struggling artist agrees to fake date a billionaire CEO to help him avoid an arranged marriage, but their pretend relationship becomes surprisingly real.",
    tags: ["Fake Dating", "Billionaire", "Opposites Attract"]
  },
  {
    title: "The Rival Coffee Shop",
    concept: "Two rival coffee shop owners in a small town are forced to work together for a community event, discovering that their heated competition masks a deeper attraction.",
    tags: ["Enemies to Lovers", "Small Town", "Business Rivals"]
  }
]

const romanceWritingTips = [
  {
    title: "Building Sexual Tension",
    description: "Learn how to create compelling romantic tension through dialogue, body language, and emotional conflict.",
    link: "/resources/building-sexual-tension"
  },
  {
    title: "Romance Tropes That Work",
    description: "Explore the most popular romance tropes and how to give them fresh, modern twists.",
    link: "/resources/romance-tropes"
  },
  {
    title: "Writing Authentic Dialogue",
    description: "Master the art of romantic dialogue that feels natural and emotionally resonant.",
    link: "/resources/romantic-dialogue"
  }
]

export default function RomanceIdeasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
      <Navigation />
      
      <main className="py-6 md:py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>Romance Ideas Generator</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Generate Your Next <span className="text-gradient">Love Story</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Create compelling romance novels with our AI-powered generator. From enemies-to-lovers to second chances, 
              discover unlimited romantic plot ideas, passionate characters, and emotional conflicts.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-pink-600 mb-1">500+</div>
                <div className="text-gray-600 text-sm">Romance Concepts</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-purple-600 mb-1">20+</div>
                <div className="text-gray-600 text-sm">Popular Tropes</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-pink-600 mb-1">∞</div>
                <div className="text-gray-600 text-sm">Unique Ideas</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-purple-600 mb-1">Free</div>
                <div className="text-gray-600 text-sm">Always</div>
              </div>
            </div>
          </div>

          {/* Popular Romance Ideas */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Popular Romance Story Ideas
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {popularRomanceIdeas.map((idea, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover-card">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{idea.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{idea.concept}</p>
                  <div className="flex flex-wrap gap-2">
                    {idea.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link 
                href="#generator"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
              >
                <Sparkles className="w-5 h-5" />
                Generate Your Own Romance Idea
              </Link>
            </div>
          </section>

          {/* Generator Section */}
          <section id="generator" className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Romance Book Idea Generator
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Generate unlimited romantic story concepts with compelling characters, emotional conflicts, and passionate relationships.
              </p>
            </div>
            {/* Note: The BookGenerator component would need to be modified to accept a default genre */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Romance Generator</h3>
                  <p className="text-gray-600">Create your perfect love story concept</p>
                </div>
                <div className="text-center">
                  <Link 
                    href="/generator?genre=romance"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 min-h-touch"
                  >
                    <Heart className="w-5 h-5" />
                    Start Generating Romance Ideas
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Writing Tips */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Romance Writing Tips
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {romanceWritingTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover-card">
                  <BookOpen className="w-12 h-12 text-pink-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{tip.title}</h3>
                  <p className="text-gray-600 mb-4">{tip.description}</p>
                  <Link 
                    href={tip.link}
                    className="text-pink-600 hover:text-pink-700 font-medium inline-flex items-center gap-1"
                  >
                    Read More →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Write Your Romance Novel?</h2>
            <p className="text-lg mb-8 text-pink-100 max-w-2xl mx-auto">
              Join thousands of romance writers who've found their perfect story using BookSpark's AI-powered generator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/generator"
                className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 min-h-touch"
              >
                <Sparkles className="w-5 h-5" />
                Start Creating Now
              </Link>
              <Link 
                href="/resources"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-200 min-h-touch"
              >
                <BookOpen className="w-5 h-5" />
                Writing Resources
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Romance Book Ideas Generator",
            "description": "Generate unlimited romance book ideas with compelling characters, emotional conflicts, and passionate relationships.",
            "url": "https://bookspark.com/romance-book-ideas",
            "applicationCategory": "WritingApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "creator": {
              "@type": "Organization",
              "name": "BookSpark"
            }
          })
        }}
      />
    </div>
  )
}