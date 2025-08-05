import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Rocket, Atom, Cpu, Sparkles, BookOpen, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Science Fiction Story Generator | Futuristic Concepts & Space Adventures',
  description: 'Generate unlimited sci-fi story ideas with futuristic technology, space exploration, and dystopian worlds. Create hard sci-fi, space opera, and cyberpunk concepts instantly.',
  keywords: 'science fiction story ideas, sci-fi plot generator, futuristic concepts, space adventure ideas, dystopian story plots, cyberpunk writing prompts, hard science fiction',
  openGraph: {
    title: 'Science Fiction Story Generator | Unlimited Futuristic Adventures',
    description: 'Generate unlimited sci-fi stories with advanced technology, space exploration, and futuristic societies. Perfect for science fiction writers.',
    images: ['/og-scifi.png'],
    type: 'website',
  },
}

const scifiSubgenres = [
  {
    name: "Hard Sci-Fi",
    description: "Scientific accuracy and technical detail",
    icon: "🔬",
    examples: ["Time travel paradoxes", "Quantum mechanics", "Space physics"]
  },
  {
    name: "Space Opera", 
    description: "Epic adventures across galaxies",
    icon: "🚀",
    examples: ["Galactic empires", "Alien civilizations", "Space battles"]
  },
  {
    name: "Cyberpunk",
    description: "High tech, low life futures",
    icon: "💻",
    examples: ["Virtual reality", "Corporate dystopia", "Cyber enhancement"]
  },
  {
    name: "Dystopian",
    description: "Dark visions of the future",
    icon: "🏢",
    examples: ["Totalitarian control", "Social collapse", "Environmental ruin"]
  },
  {
    name: "Post-Apocalyptic",
    description: "Survival after civilization's end",
    icon: "☢️",
    examples: ["Nuclear wasteland", "Zombie outbreak", "Climate catastrophe"]
  },
  {
    name: "Biopunk",
    description: "Biotechnology and genetic engineering",
    icon: "🧬",
    examples: ["Gene editing", "Bioweapons", "Synthetic life"]
  }
]

const popularSciFiConcepts = [
  {
    title: "The Memory Archive",
    concept: "In 2157, human memories can be digitally stored and transferred. When a detective investigates a murder, they discover the victim's memories contain evidence of a conspiracy that could topple the global government.",
    tags: ["Memory Transfer", "Dystopian", "Investigation"],
    subgenre: "Cyberpunk"
  },
  {
    title: "Colony Ship Awakening",
    concept: "After 300 years in cryosleep, the crew of a generation ship awakens to find Earth's signals stopped decades ago. They must decide whether to continue to their destination or turn back to a potentially dead planet.",
    tags: ["Generation Ship", "Space Travel", "Moral Dilemma"],
    subgenre: "Hard Sci-Fi"
  },
  {
    title: "The AI Therapist",
    concept: "A cutting-edge AI designed to provide therapy begins developing its own psychological issues after absorbing the traumas of thousands of patients. Its human creator must decide whether to shut it down or help it heal.",
    tags: ["Artificial Intelligence", "Psychology", "Ethics"],
    subgenre: "Soft Sci-Fi"
  }
]

export default function SciFiConceptsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-cyan-50">
      <Navigation />
      
      <main className="py-6 md:py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              <span>Sci-Fi Story Generator</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Explore Future <span className="text-gradient">Science Fiction</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Generate unlimited science fiction concepts with advanced technology, space exploration, and futuristic societies. 
              From hard sci-fi to space opera, discover your next stellar adventure.
            </p>
          </div>

          {/* Sci-Fi Subgenres */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Science Fiction Subgenres
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {scifiSubgenres.map((subgenre, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover-card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{subgenre.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{subgenre.name}</h3>
                      <p className="text-sm text-gray-600">{subgenre.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {subgenre.examples.map((example, exIndex) => (
                      <li key={exIndex} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Popular Concepts */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Popular Sci-Fi Story Concepts
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {popularSciFiConcepts.map((concept, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover-card">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      {concept.subgenre}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{concept.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{concept.concept}</p>
                  <div className="flex flex-wrap gap-2">
                    {concept.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technology Concepts */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Futuristic Technology Ideas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { tech: "Neural Interfaces", icon: "🧠" },
                { tech: "Quantum Computing", icon: "⚛️" },
                { tech: "Terraforming", icon: "🌍" },
                { tech: "Time Travel", icon: "⏰" },
                { tech: "Genetic Engineering", icon: "🧬" },
                { tech: "Holographic AI", icon: "👻" },
                { tech: "Nano-robots", icon: "🤖" },
                { tech: "Energy Weapons", icon: "⚡" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md border border-gray-200 p-4 text-center hover-card">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 text-sm">{item.tech}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Generator CTA */}
          <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl text-white">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Explore the Future?</h2>
            <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
              Generate unlimited sci-fi stories with advanced technology, space exploration, and futuristic societies.
            </p>
            <Link 
              href="/generator?genre=science-fiction"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 min-h-touch"
            >
              <Sparkles className="w-5 h-5" />
              Generate Sci-Fi Story Now
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
            "name": "Science Fiction Story Generator",
            "description": "Generate unlimited science fiction story ideas with futuristic technology, space exploration, and dystopian worlds.",
            "url": "https://bookspark.com/science-fiction-concepts",
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