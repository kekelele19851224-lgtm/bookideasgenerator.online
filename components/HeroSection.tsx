import Link from 'next/link'
import { Sparkles, ArrowRight, BookOpen, Zap } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-orange-500 text-white py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/30">
            <Zap className="w-4 h-4" />
            <span>AI-Powered Story Generator</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Generate Your Next Bestseller Idea
            <span className="block text-orange-300 mt-2">in 3 Seconds</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white/90">
            AI-powered book concept generator for writers, authors, and storytellers. 
            Get unlimited creative inspiration instantly.
          </p>

          {/* Main CTA Button */}
          <div className="mb-12">
            <Link 
              href="/generator"
              className="inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 md:px-10 md:py-5 rounded-full text-lg md:text-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 min-h-touch"
            >
              <Sparkles className="w-6 h-6" />
              Start Creating Now
              <ArrowRight className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto">
            <div className="text-center p-4">
              <div className="text-3xl md:text-4xl font-bold text-orange-300 mb-2">∞</div>
              <div className="text-white/80 text-sm md:text-base">Unique Ideas Generated</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl md:text-4xl font-bold text-orange-300 mb-2">12+</div>
              <div className="text-white/80 text-sm md:text-base">Genres Covered</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl md:text-4xl font-bold text-orange-300 mb-2">3s</div>
              <div className="text-white/80 text-sm md:text-base">Average Generation Time</div>
            </div>
          </div>

          {/* Secondary CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/resources"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-200 backdrop-blur-sm min-h-touch"
            >
              <BookOpen className="w-5 h-5" />
              Writing Resources
            </Link>
            
            <Link 
              href="/about"
              className="text-white/80 hover:text-white font-medium transition-colors duration-200 px-4 py-3 min-h-touch flex items-center"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full animate-pulse backdrop-blur-sm"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 md:w-16 md:h-16 bg-orange-300/20 rounded-full animate-pulse delay-1000 backdrop-blur-sm"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 md:w-12 md:h-12 bg-white/20 rounded-full animate-pulse delay-500 backdrop-blur-sm"></div>
        <div className="absolute top-1/3 left-1/4 w-6 h-6 md:w-10 md:h-10 bg-orange-300/30 rounded-full animate-pulse delay-700 backdrop-blur-sm"></div>
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-purple-600/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/20 to-transparent"></div>
      </div>

      {/* Mobile-specific enhancements */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  )
}