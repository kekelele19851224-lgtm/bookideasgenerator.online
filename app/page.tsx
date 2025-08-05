import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { Sparkles, BookOpen, Lightbulb, Share2 } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-safe max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Spark Creativity
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From initial concept to fully-formed ideas, BookSpark provides the tools and inspiration you need.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Generation</h3>
              <p className="text-gray-600">AI-powered algorithms create unique and compelling book concepts tailored to your preferences.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multiple Genres</h3>
              <p className="text-gray-600">Support for fiction and non-fiction across dozens of genres and target audiences.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Writing Resources</h3>
              <p className="text-gray-600">Access curated writing tips, techniques, and best practices to improve your craft.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Sharing</h3>
              <p className="text-gray-600">Share your favorite ideas with writing groups, friends, or save them for later inspiration.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-500">
        <div className="container-safe max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Next Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of writers who have discovered their next bestseller with BookSpark.
          </p>
          <Link 
            href="/generator"
            className="btn bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Generate Ideas Now
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-safe max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gradient mb-4">BookSpark</h3>
              <p className="text-gray-400 mb-4">
                Ignite your creativity with AI-powered book idea generation. Perfect for writers, authors, and storytellers seeking inspiration.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Tools</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/generator" className="hover:text-white transition-colors">Idea Generator</Link></li>
                <li><Link href="/resources" className="hover:text-white transition-colors">Writing Resources</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BookSpark. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}