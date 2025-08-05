import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Search, Eye, Fingerprint, Sparkles, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mystery Plot Generator | 1000+ Crime & Detective Story Ideas',
  description: 'Generate unlimited mystery and crime story plots instantly. Create compelling detective stories, cozy mysteries, police procedurals, and psychological thrillers with unique twists.',
  keywords: 'mystery plot generator, detective story ideas, crime fiction plots, mystery writing prompts, cozy mystery ideas, police procedural concepts, whodunit plots',
  openGraph: {
    title: 'Mystery Plot Generator | Unlimited Crime & Detective Stories',
    description: 'Generate unlimited mystery plots with compelling crimes, clever detectives, and surprising twists. Perfect for mystery writers and crime fiction authors.',
    images: ['/og-mystery.png'],
    type: 'website',
  },
}

const popularMysteryPlots = [
  {
    title: "The Vanishing Bookstore Owner",
    concept: "When a beloved bookstore owner disappears without a trace, the only clue is a cryptic note hidden in a rare first edition. A retired librarian must decode literary puzzles to solve the mystery.",
    tags: ["Cozy Mystery", "Literary Clues", "Small Town"]
  },
  {
    title: "The Art Gallery Heist",
    concept: "A priceless painting is stolen from a high-security gallery, but surveillance shows no one entering or leaving. A detective must uncover an inside job with a shocking twist.",
    tags: ["Heist", "Inside Job", "Art Crime"]
  },
  {
    title: "The Digital Detective",
    concept: "A cybercrime specialist investigates a series of identity thefts that seem impossible, leading to a conspiracy involving deep fake technology and virtual reality.",
    tags: ["Cybercrime", "Technology", "Modern Mystery"]
  }
]

const mysterySubgenres = [
  {
    name: "Cozy Mystery",
    description: "Amateur sleuth in small town setting with minimal violence",
    icon: "🏘️"
  },
  {
    name: "Police Procedural", 
    description: "Detective work through official law enforcement procedures",
    icon: "👮"
  },
  {
    name: "Hard-boiled",
    description: "Gritty detective stories with cynical protagonists",
    icon: "🕵️"
  },
  {
    name: "Locked Room",
    description: "Impossible crimes in sealed environments",
    icon: "🔒"
  },
  {
    name: "Psychological Thriller",
    description: "Mind games and psychological manipulation",
    icon: "🧠"
  },
  {
    name: "Historical Mystery",
    description: "Crimes solved in historical settings",
    icon: "📜"
  }
]

export default function MysteryPlotGeneratorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-gray-50">
      <Navigation />
      
      <main className="py-6 md:py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Search className="w-4 h-4" />
              <span>Mystery Plot Generator</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Generate Compelling <span className="text-gradient">Mystery Plots</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Create captivating crime stories with our AI-powered mystery generator. From cozy mysteries to hard-boiled detective stories, 
              discover unlimited plot ideas with clever twists and compelling investigations.
            </p>
          </div>

          {/* Mystery Subgenres */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Mystery Subgenres We Cover
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {mysterySubgenres.map((subgenre, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center hover-card">
                  <div className="text-4xl mb-3">{subgenre.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{subgenre.name}</h3>
                  <p className="text-gray-600 text-sm">{subgenre.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Popular Plots */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Popular Mystery Plot Ideas
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {popularMysteryPlots.map((plot, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover-card">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{plot.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{plot.concept}</p>
                  <div className="flex flex-wrap gap-2">
                    {plot.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Generator CTA */}
          <section className="text-center py-12 bg-gradient-to-r from-slate-600 to-gray-600 rounded-2xl text-white mb-12">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Solve Your Next Mystery?</h2>
            <p className="text-lg mb-8 text-slate-100 max-w-2xl mx-auto">
              Generate unlimited mystery plots with compelling crimes, clever detectives, and surprising twists.
            </p>
            <Link 
              href="/generator?genre=mystery"
              className="inline-flex items-center gap-2 bg-white text-slate-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 min-h-touch"
            >
              <Sparkles className="w-5 h-5" />
              Generate Mystery Plot Now
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
            "name": "Mystery Plot Generator",
            "description": "Generate unlimited mystery and crime story plots with compelling crimes, clever detectives, and surprising twists.",
            "url": "https://bookspark.com/mystery-plot-generator",
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