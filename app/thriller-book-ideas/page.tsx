import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Zap, Clock, AlertTriangle, Target, Sparkles, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Thriller Book Ideas Generator | Suspenseful Plots & High-Stakes Drama',
  description: 'Generate unlimited thriller story ideas with intense suspense, high-stakes drama, and edge-of-your-seat plots. Create psychological thrillers, action thrillers, and suspense novels.',
  keywords: 'thriller book ideas, suspense story generator, psychological thriller plots, action thriller concepts, high-stakes drama, thriller writing prompts',
  openGraph: {
    title: 'Thriller Book Ideas Generator | Unlimited Suspenseful Stories',
    description: 'Generate unlimited thriller plots with intense suspense, high-stakes drama, and psychological twists. Perfect for thriller and suspense writers.',
    images: ['/og-thriller.png'],
    type: 'website',
  },
}

const thrillerTypes = [
  {
    name: "Psychological Thriller",
    description: "Mind games, manipulation, and mental suspense",
    icon: "🧠",
    elements: ["Unreliable narrator", "Gaslighting", "Memory loss", "Identity crisis"]
  },
  {
    name: "Action Thriller",
    description: "High-octane chases and physical danger",
    icon: "💥",
    elements: ["Car chases", "Shootouts", "Explosions", "Combat scenes"]
  },
  {
    name: "Conspiracy Thriller",
    description: "Government cover-ups and hidden agendas",
    icon: "🕵️",
    elements: ["Secret organizations", "Whistleblowers", "Cover-ups", "Double agents"]
  },
  {
    name: "Medical Thriller",
    description: "Medical mysteries and biological threats",
    icon: "⚕️",
    elements: ["Pandemics", "Experimental drugs", "Medical malpractice", "Bioterrorism"]
  },
  {
    name: "Legal Thriller",
    description: "Courtroom drama and legal conspiracies",
    icon: "⚖️",
    elements: ["Corrupt judges", "False accusations", "Evidence tampering", "Jury intimidation"]
  },
  {
    name: "Techno Thriller",
    description: "Technology-based threats and cyber warfare",
    icon: "💻",
    elements: ["Hacking", "Cyber attacks", "AI threats", "Digital surveillance"]
  }
]

const thrillerPlots = [
  {
    title: "The Memory Thief",
    concept: "A neuroscientist discovers someone is stealing and implanting memories in patients at her clinic. As she investigates, she realizes her own memories may have been tampered with.",
    tags: ["Psychological", "Medical", "Identity"],
    urgency: "High"
  },
  {
    title: "48 Hour Countdown",
    concept: "A bomb specialist receives a call: there are five bombs hidden in the city, and they have 48 hours to find them. Each clue leads to a darker conspiracy involving their own past.",
    tags: ["Action", "Time Pressure", "Personal Stakes"],
    urgency: "Extreme"
  },
  {
    title: "The Whistleblower's Dilemma",
    concept: "An FBI agent discovers their own agency is involved in a massive cover-up. With nowhere to turn and assassins closing in, they must expose the truth while staying alive.",
    tags: ["Conspiracy", "Corruption", "Betrayal"],
    urgency: "High"
  }
]

export default function ThrillerBookIdeasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-orange-50">
      <Navigation />
      
      <main className="py-6 md:py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>Thriller Ideas Generator</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Create Heart-Pounding <span className="text-gradient">Thrillers</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Generate unlimited thriller concepts with intense suspense, high-stakes drama, and edge-of-your-seat plots. 
              From psychological mind games to action-packed adventures.
            </p>
          </div>

          {/* Thriller Types */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Thriller Subgenres
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {thrillerTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover-card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{type.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{type.name}</h3>
                      <p className="text-sm text-gray-600">{type.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {type.elements.map((element, elIndex) => (
                      <div key={elIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{element}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sample Plots */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              High-Stakes Thriller Plots
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {thrillerPlots.map((plot, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover-card">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      plot.urgency === 'Extreme' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {plot.urgency} Stakes
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{plot.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{plot.concept}</p>
                  <div className="flex flex-wrap gap-2">
                    {plot.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tension Elements */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Thriller Elements
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { element: "Ticking Clock", icon: "⏰" },
                { element: "Betrayal", icon: "🗡️" },
                { element: "Hidden Identity", icon: "🎭" },
                { element: "Chase Scenes", icon: "🏃" },
                { element: "Red Herrings", icon: "🐟" },
                { element: "Cliffhangers", icon: "🧗" },
                { element: "Plot Twists", icon: "🌪️" },
                { element: "High Stakes", icon: "🎯" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md border border-gray-200 p-4 text-center hover-card">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 text-sm">{item.element}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Generator CTA */}
          <section className="text-center py-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl text-white">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Create Your Thriller?</h2>
            <p className="text-lg mb-8 text-red-100 max-w-2xl mx-auto">
              Generate unlimited thriller plots with intense suspense, high-stakes drama, and psychological twists.
            </p>
            <Link 
              href="/generator?genre=thriller"
              className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 min-h-touch"
            >
              <Sparkles className="w-5 h-5" />
              Generate Thriller Plot Now
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
            "name": "Thriller Book Ideas Generator",
            "description": "Generate unlimited thriller story ideas with intense suspense, high-stakes drama, and edge-of-your-seat plots.",
            "url": "https://bookspark.com/thriller-book-ideas",
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