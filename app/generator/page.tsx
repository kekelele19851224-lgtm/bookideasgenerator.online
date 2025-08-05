'use client'

import { useState } from 'react'
import { BookIdea } from '@/types'
import { Navigation } from '@/components/Navigation'
import { BookGenerator } from '@/components/BookGenerator'
import { IdeaDisplay } from '@/components/IdeaDisplay'
import { Sparkles, BookOpen, Users, Zap } from 'lucide-react'

export default function GeneratorPage() {
  const [currentIdea, setCurrentIdea] = useState<BookIdea | null>(null)

  const handleIdeaGenerated = (idea: BookIdea) => {
    setCurrentIdea(idea)
    // Smooth scroll to the generated idea on mobile
    setTimeout(() => {
      if (window.innerWidth < 768) {
        const ideaElement = document.getElementById('generated-idea')
        if (ideaElement) {
          ideaElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }, 100)
  }

  const handleRegenerate = () => {
    setCurrentIdea(null)
    // Scroll back to generator on mobile
    setTimeout(() => {
      if (window.innerWidth < 768) {
        const generatorElement = document.getElementById('generator')
        if (generatorElement) {
          generatorElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }, 100)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="py-6 md:py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Page Header */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4 md:mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Book Idea Generator</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Create Your Next <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">Bestseller</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Generate unique book concepts, compelling characters, and captivating plots tailored to your preferences.
            </p>
          </div>

          <div className="space-y-8 md:space-y-12">
            {/* Generator */}
            <div id="generator">
              <BookGenerator onIdeaGenerated={handleIdeaGenerated} />
            </div>

            {/* Generated Idea Display */}
            {currentIdea && (
              <div id="generated-idea" className="animate-in slide-in-from-bottom duration-700">
                <IdeaDisplay idea={currentIdea} onRegenerate={handleRegenerate} />
              </div>
            )}

            {/* Inspiration Section */}
            {!currentIdea && (
              <div className="text-center py-12 md:py-16">
                <div className="max-w-4xl mx-auto">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-10 h-10 text-purple-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Spark Your Creativity?</h2>
                  <p className="text-gray-600 mb-8 md:mb-12 text-base md:text-lg max-w-2xl mx-auto">
                    Customize your preferences above and generate a unique book idea. Each generation creates a completely original concept with detailed characters, settings, and plot elements.
                  </p>
                  
                  {/* Feature Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">Unique Characters</h3>
                      <p className="text-gray-600">Complex protagonists with detailed backgrounds and motivations</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">Rich Settings</h3>
                      <p className="text-gray-600">Immersive worlds and locations that bring your story to life</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">Compelling Conflicts</h3>
                      <p className="text-gray-600">Engaging plot tensions that drive your narrative forward</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                    <div className="text-center p-4">
                      <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">∞</div>
                      <div className="text-gray-600 text-sm">Unique Ideas</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-1">12+</div>
                      <div className="text-gray-600 text-sm">Genres</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">3s</div>
                      <div className="text-gray-600 text-sm">Generation Time</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-1">100%</div>
                      <div className="text-gray-600 text-sm">Free</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}