import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Wifi, RefreshCw, BookOpen, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Offline - BookSpark',
  description: 'You are currently offline. Some features may be limited.',
  robots: 'noindex, nofollow'
}

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          {/* Offline Icon */}
          <div className="w-24 h-24 mx-auto mb-8 bg-orange-100 rounded-full flex items-center justify-center">
            <Wifi className="w-12 h-12 text-orange-500" />
          </div>

          {/* Main Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            You're Offline
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            It looks like you've lost your internet connection. Don't worry - you can still access 
            some features of BookSpark while offline.
          </p>

          {/* Available Features */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Available Offline</h2>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">View saved book ideas</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Browse your favorites</span>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCw className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Basic idea generation (limited)</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-gradient-to-r from-purple-600 to-orange-500 text-white py-4 px-8 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
            >
              <RefreshCw className="w-5 h-5 inline mr-2" />
              Try Again
            </button>

            <Link 
              href="/generator"
              className="block w-full bg-gray-200 text-gray-700 py-4 px-8 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-200"
            >
              Continue Offline
            </Link>
          </div>

          {/* Tips */}
          <div className="mt-12 p-6 bg-blue-50 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">💡 Offline Tips</h3>
            <ul className="text-sm text-blue-800 space-y-1 text-left">
              <li>• Your saved ideas are always available offline</li>
              <li>• New ideas generated offline will sync when you reconnect</li>
              <li>• Install BookSpark as an app for better offline experience</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}