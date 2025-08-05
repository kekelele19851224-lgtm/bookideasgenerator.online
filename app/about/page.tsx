import { Navigation } from '@/components/Navigation'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Sparkles, Target, Users, Zap, Heart, BookOpen } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Zap,
    title: 'AI-Powered Generation',
    description: 'Our advanced algorithms combine thousands of story elements to create unique, compelling book concepts that spark your imagination.'
  },
  {
    icon: Target,
    title: 'Customizable Options',
    description: 'Tailor your ideas to specific genres, audiences, tones, and lengths to match your writing goals and preferences.'
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Details',
    description: 'Each generated idea includes character profiles, settings, conflicts, themes, and even opening lines to jumpstart your writing.'
  },
  {
    icon: Users,
    title: 'Writer-Focused',
    description: 'Built by writers, for writers. Every feature is designed to support and enhance your creative writing process.'
  }
]

const stats = [
  { number: '10,000+', label: 'Story Elements' },
  { number: '50+', label: 'Genres Covered' },
  { number: '∞', label: 'Unique Combinations' },
  { number: '100%', label: 'Free to Use' }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="py-12">
        <div className="container-safe max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>About BookSpark</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Igniting Creativity</span> for Writers Everywhere
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              BookSpark was born from the belief that every writer has countless stories within them. 
              Sometimes all they need is a spark of inspiration to unlock their next masterpiece.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-16">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary-50 to-accent-50 border-primary-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                  To democratize storytelling by providing writers of all levels with endless inspiration, 
                  comprehensive resources, and the tools they need to bring their creative visions to life. 
                  We believe great stories come from great ideas, and great ideas should be accessible to everyone.
                </p>
              </div>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Makes BookSpark Special</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <Card key={index} variant="elevated" className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-16">
            <Card className="p-8 bg-gradient-to-r from-primary-600 to-accent-500 text-white">
              <h2 className="text-3xl font-bold text-center mb-8">BookSpark by the Numbers</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-lg opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Story Section */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Story Behind BookSpark</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    BookSpark was created by a team of passionate writers and developers who understood 
                    the struggle of staring at a blank page. We&apos;ve all been there - knowing we want to 
                    write, but not knowing where to start.
                  </p>
                  <p>
                    After countless brainstorming sessions and research into storytelling patterns, 
                    we realized that the best ideas often come from unexpected combinations of familiar 
                    elements. That&apos;s when we decided to build an AI-powered system that could generate 
                    these combinations at scale.
                  </p>
                  <p>
                    Today, BookSpark helps thousands of writers overcome creative blocks and discover 
                    stories they never knew they wanted to tell. Every generated idea is a doorway 
                    to a new world of possibilities.
                  </p>
                </div>
              </div>
              <div className="lg:text-center">
                <Card className="p-8 bg-gradient-to-br from-accent-50 to-primary-50 border-accent-200">
                  <blockquote className="text-lg italic text-gray-700 mb-4">
                    "The best stories are not found, they are sparked. BookSpark provides that initial 
                    flame that ignites the creative fire within every writer."
                  </blockquote>
                  <cite className="text-primary-600 font-medium">- The BookSpark Team</cite>
                </Card>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="p-12 bg-gradient-to-r from-primary-600 to-accent-500 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Find Your Next Story?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of writers who have discovered their inspiration with BookSpark.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/generator">
                  <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate Ideas
                  </Button>
                </Link>
                <Link href="/resources">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Writing Resources
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}