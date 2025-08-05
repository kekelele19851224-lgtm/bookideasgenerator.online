import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Smile, Star, BookOpen, Users, Sparkles, Baby } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Children\'s Book Ideas Generator | Picture Books & Early Reader Stories',
  description: 'Generate unlimited children\'s book ideas for ages 3-12. Create picture books, early readers, and middle grade stories with fun characters and valuable lessons.',
  keywords: 'children book ideas, picture book concepts, early reader stories, kids book generator, children story ideas, middle grade plots, educational stories',
  openGraph: {
    title: 'Children\'s Book Ideas Generator | Unlimited Kids\' Stories',
    description: 'Generate unlimited children\'s book ideas with fun characters, engaging plots, and valuable life lessons. Perfect for picture books and early readers.',
    images: ['/og-children.png'],
    type: 'website',
  },
}

const ageGroups = [
  {
    name: "Picture Books",
    ageRange: "Ages 3-6",
    description: "Simple stories with engaging illustrations",
    icon: "🎨",
    characteristics: ["32 pages or less", "Simple vocabulary", "Clear moral lessons", "Repetitive patterns"],
    themes: ["Friendship", "Sharing", "Bedtime", "Animals", "Family"]
  },
  {
    name: "Early Readers",
    ageRange: "Ages 5-8", 
    description: "Beginning independent reading",
    icon: "📖",
    characteristics: ["Short chapters", "Large font", "Simple sentences", "Familiar situations"],
    themes: ["School", "Pets", "Adventures", "Problem solving", "Growing up"]
  },
  {
    name: "Chapter Books",
    ageRange: "Ages 7-10",
    description: "Transitional independent reading",
    icon: "📚",
    characteristics: ["Multiple chapters", "Character development", "Plot progression", "Some illustrations"],
    themes: ["Friendship drama", "Family changes", "School challenges", "Hobbies", "Identity"]
  },
  {
    name: "Middle Grade",
    ageRange: "Ages 8-12",
    description: "Complex stories for pre-teens",
    icon: "🎒",
    characteristics: ["Full-length novels", "Complex plots", "Character growth", "Real-world issues"],
    themes: ["Coming of age", "Social justice", "Adventure", "Mystery", "Fantasy"]
  }
]

const storyIdeas = [
  {
    title: "The Grumpy Cloud",
    concept: "A little cloud is always raining because it's sad and lonely. When it meets a cheerful rainbow, it learns that showing emotions is okay and that friends can help us feel better.",
    ageGroup: "Picture Book",
    lesson: "Emotional expression and friendship",
    tags: ["Emotions", "Weather", "Friendship"]
  },
  {
    title: "Mia's Magical Lunchbox",
    concept: "Every day, Mia's lunchbox contains food from a different country. Through these meals, she learns about cultures around the world and makes new friends who share their traditions.",
    ageGroup: "Early Reader",
    lesson: "Cultural diversity and curiosity",
    tags: ["Food", "Culture", "School", "Diversity"]
  },
  {
    title: "The Secret Garden Club",
    concept: "Four kids start a secret garden in an abandoned lot, but they must work together to save it when developers want to build there. They learn about teamwork and environmental protection.",
    ageGroup: "Chapter Book", 
    lesson: "Environmental awareness and cooperation",
    tags: ["Environment", "Teamwork", "Community", "Nature"]
  }
]

const valueThemes = [
  { theme: "Kindness & Empathy", icon: "💝", examples: ["Helping others", "Understanding feelings", "Being considerate"] },
  { theme: "Courage & Bravery", icon: "🦁", examples: ["Facing fears", "Standing up for others", "Trying new things"] },
  { theme: "Friendship & Loyalty", icon: "🤝", examples: ["Making friends", "Being trustworthy", "Including others"] },
  { theme: "Honesty & Truth", icon: "📢", examples: ["Telling the truth", "Admitting mistakes", "Being authentic"] },
  { theme: "Perseverance", icon: "💪", examples: ["Not giving up", "Practice makes perfect", "Overcoming challenges"] },
  { theme: "Self-Acceptance", icon: "🌟", examples: ["Being unique", "Loving yourself", "Celebrating differences"] },
  { theme: "Family & Love", icon: "❤️", examples: ["Family bonds", "Unconditional love", "Supporting each other"] },
  { theme: "Learning & Growth", icon: "🧠", examples: ["Curiosity", "Making mistakes", "Learning new skills"] }
]

export default function ChildrenBookIdeasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-orange-50">
      <Navigation />
      
      <main className="py-6 md:py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Baby className="w-4 h-4" />
              <span>Children's Book Ideas</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Create Magical <span className="text-gradient">Children's Stories</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Generate unlimited children's book ideas for ages 3-12. Create picture books, early readers, and middle grade stories 
              with fun characters, engaging adventures, and valuable life lessons.
            </p>
          </div>

          {/* Age Groups */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Children's Book Categories
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {ageGroups.map((group, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover-card">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{group.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900">{group.name}</h3>
                    <p className="text-sm text-orange-600 font-medium">{group.ageRange}</p>
                    <p className="text-xs text-gray-600 mt-1">{group.description}</p>
                  </div>
                  <div className="space-y-2 mb-4">
                    <h4 className="text-sm font-semibold text-gray-900">Characteristics:</h4>
                    {group.characteristics.map((char, charIndex) => (
                      <div key={charIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                        <span className="text-xs text-gray-600">{char}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-gray-900">Common Themes:</h4>
                    <div className="flex flex-wrap gap-1">
                      {group.themes.map((theme, themeIndex) => (
                        <span key={themeIndex} className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                          {theme}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sample Stories */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Sample Children's Story Ideas
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {storyIdeas.map((story, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover-card">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                      {story.ageGroup}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{story.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{story.concept}</p>
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-gray-700">Lesson: </span>
                    <span className="text-xs text-gray-600">{story.lesson}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {story.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Value Themes */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Important Values & Life Lessons
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {valueThemes.map((value, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md border border-gray-200 p-4 hover-card">
                  <div className="text-center mb-3">
                    <div className="text-2xl mb-2">{value.icon}</div>
                    <h3 className="font-bold text-gray-900 text-sm mb-2">{value.theme}</h3>
                  </div>
                  <div className="space-y-1">
                    {value.examples.map((example, exIndex) => (
                      <div key={exIndex} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                        <span className="text-xs text-gray-600">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Educational Elements */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Educational Story Elements
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { element: "Numbers & Counting", icon: "🔢" },
                { element: "Letters & Alphabet", icon: "🔤" },
                { element: "Colors & Shapes", icon: "🌈" },
                { element: "Animals & Nature", icon: "🦋" },
                { element: "Seasons & Weather", icon: "🌞" },
                { element: "Community Helpers", icon: "👩‍🚒" },
                { element: "Healthy Habits", icon: "🥕" },
                { element: "Safety Rules", icon: "🚦" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md border border-gray-200 p-4 text-center hover-card">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 text-xs">{item.element}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Generator CTA */}
          <section className="text-center py-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl text-white">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Smile className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Inspire Young Minds?</h2>
            <p className="text-lg mb-8 text-yellow-100 max-w-2xl mx-auto">
              Generate unlimited children's stories with valuable lessons, fun characters, and engaging adventures.
            </p>
            <Link 
              href="/generator?targetAge=children"
              className="inline-flex items-center gap-2 bg-white text-yellow-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 min-h-touch"
            >
              <Sparkles className="w-5 h-5" />
              Generate Children's Story Now
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
            "name": "Children's Book Ideas Generator",
            "description": "Generate unlimited children's book ideas for ages 3-12 with fun characters, engaging plots, and valuable life lessons.",
            "url": "https://bookspark.com/children-book-ideas",
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