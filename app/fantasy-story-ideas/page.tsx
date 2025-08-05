import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Wand2, Crown, Dragon, Sparkles, BookOpen, Sword } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fantasy Story Ideas Generator | Epic Worlds & Magical Concepts',
  description: 'Generate unlimited fantasy story ideas with magical worlds, epic quests, and supernatural characters. Create high fantasy, urban fantasy, and magical realism concepts instantly.',
  keywords: 'fantasy story ideas, fantasy plot generator, magic story concepts, epic fantasy ideas, urban fantasy plots, fantasy writing prompts, magical world building',
  openGraph: {
    title: 'Fantasy Story Ideas Generator | Unlimited Magical Worlds',
    description: 'Generate unlimited fantasy stories with magical worlds, epic quests, and supernatural characters. Perfect for fantasy writers and worldbuilders.',
    images: ['/og-fantasy.png'],
    type: 'website',
  },
}

const popularFantasyIdeas = [
  {
    title: "The Last Magic Library",
    concept: "In a world where magic is fading, a young librarian discovers the last repository of magical knowledge hidden beneath her ordinary library. She must master ancient spells to prevent magic from disappearing forever.",
    tags: ["Magic System", "Hidden World", "Coming of Age"],
    subgenre: "High Fantasy"
  },
  {
    title: "Dragon Lawyer in Manhattan",
    concept: "A centuries-old dragon working as a corporate lawyer in modern New York must hide their true nature while defending supernatural beings in secret magical courts.",
    tags: ["Urban Fantasy", "Hidden Identity", "Legal Drama"],
    subgenre: "Urban Fantasy"
  },
  {
    title: "The Memory Thief",
    concept: "In a realm where memories can be stolen and traded like currency, a skilled memory thief discovers that some memories are too dangerous to possess.",
    tags: ["Unique Magic", "Heist", "Psychological"],
    subgenre: "Dark Fantasy"
  }
]

const fantasyWorldElements = [
  {
    element: "Magic Systems",
    examples: ["Elemental Control", "Blood Magic", "Rune-based", "Divine Powers"],
    icon: "✨"
  },
  {
    element: "Creatures",
    examples: ["Dragons", "Fae Folk", "Shadow Beings", "Crystal Entities"],
    icon: "🐉"
  },
  {
    element: "Realms",
    examples: ["Floating Islands", "Underground Kingdoms", "Parallel Dimensions", "Time Loops"],
    icon: "🏰"
  },
  {
    element: "Conflicts",
    examples: ["Ancient Prophecies", "Magical Wars", "Divine Interference", "Reality Tears"],
    icon: "⚔️"
  }
]

export default function FantasyStoryIdeasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-indigo-50">
      <Navigation />
      
      <main className="py-6 md:py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Wand2 className="w-4 h-4" />
              <span>Fantasy Story Generator</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Create Epic <span className="text-gradient">Fantasy Worlds</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Generate unlimited fantasy story ideas with magical worlds, legendary creatures, and epic quests. 
              From high fantasy to urban magic, discover your next enchanting adventure.
            </p>
          </div>

          {/* Fantasy Elements */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Fantasy World Elements
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {fantasyWorldElements.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover-card">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900">{item.element}</h3>
                  </div>
                  <ul className="space-y-2">
                    {item.examples.map((example, exIndex) => (
                      <li key={exIndex} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Popular Fantasy Ideas */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Popular Fantasy Story Concepts
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {popularFantasyIdeas.map((idea, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover-card">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                      {idea.subgenre}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{idea.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{idea.concept}</p>
                  <div className="flex flex-wrap gap-2">
                    {idea.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Subgenres Grid */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Fantasy Subgenres
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "High Fantasy", icon: "👑", desc: "Epic worlds with magic" },
                { name: "Urban Fantasy", icon: "🏙️", desc: "Magic in modern settings" },
                { name: "Dark Fantasy", icon: "🌙", desc: "Horror meets fantasy" },
                { name: "Romantic Fantasy", icon: "💕", desc: "Love and magic combined" },
                { name: "Steampunk", icon: "⚙️", desc: "Victorian tech and magic" },
                { name: "Portal Fantasy", icon: "🚪", desc: "Travel to other worlds" },
                { name: "Sword & Sorcery", icon: "⚔️", desc: "Action-packed adventures" },
                { name: "Magical Realism", icon: "✨", desc: "Subtle magic in reality" }
              ].map((subgenre, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md border border-gray-200 p-4 text-center hover-card">
                  <div className="text-2xl mb-2">{subgenre.icon}</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{subgenre.name}</h3>
                  <p className="text-xs text-gray-600">{subgenre.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Generator CTA */}
          <section className="text-center py-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl text-white">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Wand2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Build Your Fantasy World?</h2>
            <p className="text-lg mb-8 text-purple-100 max-w-2xl mx-auto">
              Generate unlimited fantasy stories with magical systems, legendary creatures, and epic quests.
            </p>
            <Link 
              href="/generator?genre=fantasy"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 min-h-touch"
            >
              <Sparkles className="w-5 h-5" />
              Generate Fantasy Story Now
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
            "name": "Fantasy Story Ideas Generator",
            "description": "Generate unlimited fantasy story ideas with magical worlds, epic quests, and supernatural characters.",
            "url": "https://bookspark.com/fantasy-story-ideas",
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