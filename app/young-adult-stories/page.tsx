import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Heart, Star, BookOpen, Users, Sparkles, GraduationCap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Young Adult Story Ideas Generator | Teen Fiction & Coming-of-Age Tales',
  description: 'Generate unlimited YA story ideas with teen protagonists, coming-of-age themes, and relatable conflicts. Create contemporary YA, fantasy YA, and dystopian teen fiction.',
  keywords: 'young adult story ideas, YA fiction generator, teen story concepts, coming of age plots, YA fantasy ideas, contemporary YA writing prompts',
  openGraph: {
    title: 'Young Adult Story Ideas Generator | Unlimited Teen Fiction',
    description: 'Generate unlimited YA stories with teen protagonists, coming-of-age themes, and relatable conflicts. Perfect for young adult fiction writers.',
    images: ['/og-ya.png'],
    type: 'website',
  },
}

const yaGenres = [
  {
    name: "Contemporary YA",
    description: "Modern teen life, relationships, and real-world issues",
    icon: "📱",
    themes: ["First love", "Identity crisis", "Family drama", "School struggles"]
  },
  {
    name: "YA Fantasy",
    description: "Magical worlds with teenage protagonists",
    icon: "✨",
    themes: ["Chosen one", "Magic school", "Prophecies", "Mythical creatures"]
  },
  {
    name: "YA Dystopian",
    description: "Dark futures and oppressive societies",
    icon: "🏢",
    themes: ["Rebellion", "Survival", "Government control", "Social classes"]
  },
  {
    name: "YA Romance",
    description: "Love stories for teen readers",
    icon: "💕",
    themes: ["First love", "Love triangles", "Forbidden romance", "Self-discovery"]
  },
  {
    name: "YA Mystery",
    description: "Teen detectives and school mysteries",
    icon: "🔍",
    themes: ["Missing persons", "School secrets", "Amateur sleuth", "Teen investigation"]
  },
  {
    name: "YA Sci-Fi",
    description: "Futuristic settings with young heroes",
    icon: "🚀",
    themes: ["Space travel", "AI companions", "Time travel", "Alien contact"]
  }
]

const yaStoryIdeas = [
  {
    title: "The Memory Academy",
    concept: "At an elite boarding school, students can trade memories like currency. When her best friend's memories start disappearing, Maya must uncover the dark truth behind the academy's memory market.",
    tags: ["Contemporary", "Boarding School", "Friendship"],
    age: "14-18"
  },
  {
    title: "Last Girl Standing",
    concept: "In a world where a virus killed all adults, 17-year-old Zoe leads a group of survivors. When they discover other colonies, she must decide whether to trust new allies or protect what they've built.",
    tags: ["Post-Apocalyptic", "Leadership", "Survival"],
    age: "15-18"
  },
  {
    title: "The Art of Letting Go",
    concept: "After her parents' divorce, Sage moves to a small town and discovers her grandmother's secret: she can paint doorways to other worlds. But each journey changes her family's past in unexpected ways.",
    tags: ["Contemporary Fantasy", "Family", "Coming of Age"],
    age: "13-17"
  }
]

const comingOfAgeThemes = [
  { theme: "Identity & Self-Discovery", icon: "🔍", description: "Finding who you really are" },
  { theme: "First Love & Heartbreak", icon: "💖", description: "Learning about relationships" },
  { theme: "Family Dynamics", icon: "👨‍👩‍👧‍👦", description: "Complex family relationships" },
  { theme: "Friendship & Loyalty", icon: "🤝", description: "Deep teenage friendships" },
  { theme: "School & Social Pressure", icon: "🎓", description: "Academic and social challenges" },
  { theme: "Mental Health", icon: "🧠", description: "Dealing with anxiety and depression" },
  { theme: "Social Justice", icon: "⚖️", description: "Fighting for what's right" },
  { theme: "Independence", icon: "🗽", description: "Breaking away from parents" }
]

export default function YoungAdultStoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
      <Navigation />
      
      <main className="py-6 md:py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              <span>Young Adult Stories</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Create Compelling <span className="text-gradient">Teen Fiction</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Generate unlimited young adult story ideas with authentic teen voices, coming-of-age themes, and relatable conflicts. 
              From contemporary drama to fantasy adventures perfect for 13-18 year old readers.
            </p>
          </div>

          {/* YA Genres */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Young Adult Genres
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {yaGenres.map((genre, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover-card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{genre.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{genre.name}</h3>
                      <p className="text-sm text-gray-600">{genre.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {genre.themes.map((theme, themeIndex) => (
                      <div key={themeIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{theme}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sample Stories */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              YA Story Concepts
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {yaStoryIdeas.map((story, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover-card">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                      Ages {story.age}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{story.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{story.concept}</p>
                  <div className="flex flex-wrap gap-2">
                    {story.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Coming of Age Themes */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Coming-of-Age Themes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {comingOfAgeThemes.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md border border-gray-200 p-4 text-center hover-card">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2">{item.theme}</h3>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Age Groups */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Target Age Groups
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">13-15</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Middle Grade YA</h3>
                <p className="text-gray-600 text-sm">School drama, first crushes, family issues, identity exploration</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">15-17</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Core YA</h3>
                <p className="text-gray-600 text-sm">Relationships, future planning, independence, complex social issues</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">17-18</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Upper YA</h3>
                <p className="text-gray-600 text-sm">College prep, serious relationships, adult responsibilities, life choices</p>
              </div>
            </div>
          </section>

          {/* Generator CTA */}
          <section className="text-center py-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl text-white">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Write for Teen Readers?</h2>
            <p className="text-lg mb-8 text-pink-100 max-w-2xl mx-auto">
              Generate unlimited YA stories with authentic teen voices and coming-of-age themes.
            </p>
            <Link 
              href="/generator?targetAge=young-adult"
              className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 min-h-touch"
            >
              <Sparkles className="w-5 h-5" />
              Generate YA Story Now
            </Link>
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
            "name": "Young Adult Story Ideas Generator",
            "description": "Generate unlimited YA story ideas with teen protagonists, coming-of-age themes, and relatable conflicts.",
            "url": "https://bookspark.com/young-adult-stories",
            "applicationCategory": "WritingApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }}
      />
    </div>
  )
}