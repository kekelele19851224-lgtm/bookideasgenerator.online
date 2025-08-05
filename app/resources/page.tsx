import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { BookOpen, Users, Lightbulb, ArrowRight, Clock, Star, TrendingUp, Award, Pen, Target, Heart, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Writing Resources & Guides | BookSpark - Learn Creative Writing',
  description: 'Comprehensive writing resources for authors and storytellers. Learn character development, plot structure, dialogue writing, and publishing tips from professional writers.',
  keywords: 'writing resources, creative writing guides, character development, plot structure, dialogue writing, publishing tips, writing techniques, storytelling guides',
  openGraph: {
    title: 'Writing Resources & Guides | BookSpark',
    description: 'Comprehensive writing resources for authors and storytellers. Learn from professional writers and improve your craft.',
    images: ['/og-resources.png'],
    type: 'website',
  },
}

const writingGuides = [
  {
    title: "Character Development Masterclass",
    excerpt: "Learn how to create three-dimensional characters that readers will remember long after they finish your book. Covers personality, backstory, character arcs, and dialogue.",
    readTime: "15 min read",
    category: "Character Development",
    slug: "character-development-masterclass",
    popular: true,
    tags: ["Characters", "Psychology", "Development"]
  },
  {
    title: "Plot Structure That Actually Works",
    excerpt: "Master the three-act structure, the hero's journey, and modern plot frameworks. Learn how to create compelling story arcs with proper pacing and tension.",
    readTime: "12 min read", 
    category: "Plot & Structure",
    slug: "plot-structure-guide",
    popular: true,
    tags: ["Plot", "Structure", "Pacing"]
  },
  {
    title: "Writing Authentic Dialogue",
    excerpt: "Discover the secrets to writing dialogue that sounds natural, reveals character, and advances the plot. Includes examples from bestselling novels.",
    readTime: "10 min read",
    category: "Dialogue",
    slug: "authentic-dialogue-writing",
    popular: false,
    tags: ["Dialogue", "Voice", "Character"]
  },
  {
    title: "Show Don't Tell: A Complete Guide",
    excerpt: "Transform your writing from boring exposition to engaging narrative. Learn specific techniques to make your prose more vivid and immersive.",
    readTime: "8 min read",
    category: "Writing Technique",
    slug: "show-dont-tell-guide",
    popular: true,
    tags: ["Technique", "Description", "Prose"]
  },
  {
    title: "Building Believable Romance",
    excerpt: "Create authentic romantic relationships that readers will root for. Covers romantic tension, chemistry, conflict, and satisfying resolutions.",
    readTime: "14 min read",
    category: "Romance Writing",
    slug: "building-believable-romance",
    popular: false,
    tags: ["Romance", "Relationships", "Tension"]
  },
  {
    title: "Mystery Plot Devices That Work",
    excerpt: "Master the art of misdirection, red herrings, and fair play clues. Learn how to plant evidence and create satisfying mystery reveals.",
    readTime: "11 min read",
    category: "Mystery Writing",
    slug: "mystery-plot-devices",
    popular: false,
    tags: ["Mystery", "Plot", "Clues"]
  },
  {
    title: "World Building for Fantasy Writers", 
    excerpt: "Create immersive fantasy worlds with consistent magic systems, believable cultures, and rich histories that enhance your story.",
    readTime: "18 min read",
    category: "Fantasy Writing",
    slug: "fantasy-world-building",
    popular: true,
    tags: ["Fantasy", "World Building", "Magic"]
  },
  {
    title: "The Science Fiction Writer's Toolkit",
    excerpt: "Balance scientific accuracy with narrative needs. Learn how to research technology, create plausible futures, and handle exposition.",
    readTime: "13 min read",
    category: "Sci-Fi Writing",
    slug: "science-fiction-toolkit",
    popular: false,
    tags: ["Sci-Fi", "Technology", "Research"]
  },
  {
    title: "Self-Publishing Success Guide",
    excerpt: "Everything you need to know about self-publishing: formatting, cover design, marketing, and building an author platform.",
    readTime: "20 min read",
    category: "Publishing",
    slug: "self-publishing-guide",
    popular: true,
    tags: ["Publishing", "Marketing", "Platform"]
  },
  {
    title: "Overcoming Writer's Block",
    excerpt: "Proven strategies to break through creative blocks and maintain consistent writing productivity. Includes daily writing exercises.",
    readTime: "9 min read",
    category: "Writing Process",
    slug: "overcoming-writers-block",
    popular: false,
    tags: ["Productivity", "Creativity", "Process"]
  }
]

const writingPrompts = [
  "A character discovers their childhood imaginary friend was real and has been protecting them for years.",
  "Every lie you tell becomes true 24 hours later. You just told a big one.",
  "You inherit a bookstore where the stories change themselves when no one is watching.",
  "A time traveler keeps trying to prevent disasters but accidentally creates new ones.",
  "Your character can hear plants talking, and they're not happy about climate change."
]

const categories = [
  { name: "Character Development", count: 12, icon: Users },
  { name: "Plot & Structure", count: 8, icon: TrendingUp },
  { name: "Dialogue", count: 6, icon: Pen },
  { name: "Romance Writing", count: 5, icon: Heart },
  { name: "Mystery Writing", count: 7, icon: Search },
  { name: "Fantasy Writing", count: 9, icon: Star },
  { name: "Publishing", count: 11, icon: Award },
  { name: "Writing Process", count: 14, icon: Target }
]

export default function ResourcesPage() {
  const popularGuides = writingGuides.filter(guide => guide.popular)
  const allGuides = writingGuides.filter(guide => !guide.popular)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="py-6 md:py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Writing Resources</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Master Your <span className="text-gradient">Writing Craft</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Essential tools, tips, and guides to help you craft compelling stories and develop your writing skills. 
              Learn from professional writers and transform your creative ideas into published works.
            </p>
          </div>

          {/* Quick Links */}
          <section className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.slice(0, 4).map((category, index) => {
                const IconComponent = category.icon
                return (
                  <Link
                    key={index}
                    href={`/resources/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-white rounded-xl shadow-md border border-gray-200 p-4 hover-card text-center"
                  >
                    <IconComponent className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{category.name}</h3>
                    <p className="text-xs text-gray-600">{category.count} guides</p>
                  </Link>
                )
              })}
            </div>
          </section>

          {/* Popular Guides */}
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-8">
              <Star className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Most Popular Guides</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularGuides.map((guide, index) => (
                <article key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover-card">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                      Popular
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                      {guide.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{guide.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{guide.readTime}</span>
                    </div>
                    <Link 
                      href={`/resources/${guide.slug}`}
                      className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center gap-1"
                    >
                      Read Guide <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* All Guides */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">All Writing Guides</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allGuides.map((guide, index) => (
                <article key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover-card">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                      {guide.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{guide.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{guide.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{guide.readTime}</span>
                    </div>
                    <Link 
                      href={`/resources/${guide.slug}`}
                      className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center gap-1"
                    >
                      Read <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Writing Prompts */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Daily Writing Prompts</h2>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
              <div className="grid gap-4">
                {writingPrompts.map((prompt, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-500">
                    <p className="text-gray-700 italic">"{prompt}"</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <Link 
                  href="/resources/writing-prompts"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-200"
                >
                  <Lightbulb className="w-5 h-5" />
                  More Writing Prompts
                </Link>
              </div>
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="text-center py-12 bg-gradient-to-r from-purple-600 to-orange-500 rounded-2xl text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Writing Tips</h2>
            <p className="text-lg mb-8 text-purple-100 max-w-2xl mx-auto">
              Get weekly writing tips, new resources, and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 min-h-touch">
                Subscribe
              </button>
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
            "@type": "CollectionPage",
            "name": "Writing Resources & Guides",
            "description": "Comprehensive writing resources for authors and storytellers. Learn character development, plot structure, dialogue writing, and publishing tips.",
            "url": "https://bookspark.com/resources",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": writingGuides.map((guide, index) => ({
                "@type": "Article",
                "position": index + 1,
                "name": guide.title,
                "description": guide.excerpt,
                "url": `https://bookspark.com/resources/${guide.slug}`,
                "author": {
                  "@type": "Organization",
                  "name": "BookSpark"
                }
              }))
            }
          })
        }}
      />
    </div>
  )
}