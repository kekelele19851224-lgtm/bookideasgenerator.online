'use client'

import { useState, useEffect } from 'react'
import { GeneratorOptions, BookIdea } from '@/types'
import { generateBookIdea } from '@/lib/generator'
import { Sparkles, RefreshCw, ChevronDown, BookOpen, Users, Clock, Palette, Settings2 } from 'lucide-react'
import { clsx } from 'clsx'
import { analytics } from '@/components/Analytics'
import { IdeaStorage } from '@/lib/storage'

const fictionGenres = [
  { value: 'romance', label: 'Romance' },
  { value: 'mystery', label: 'Mystery' },
  { value: 'fantasy', label: 'Fantasy' },
  { value: 'science-fiction', label: 'Science Fiction' },
  { value: 'thriller', label: 'Thriller' },
  { value: 'horror', label: 'Horror' },
]

const nonFictionGenres = [
  { value: 'self-help', label: 'Self Help' },
  { value: 'business', label: 'Business' },
  { value: 'health', label: 'Health & Wellness' },
  { value: 'biography', label: 'Biography' },
  { value: 'travel', label: 'Travel' },
  { value: 'cooking', label: 'Cooking' },
  { value: 'memoir', label: 'Memoir' },
]

const lengthOptions = [
  { value: 'short-story', label: 'Short Story', desc: '1,000-7,500 words' },
  { value: 'novella', label: 'Novella', desc: '17,500-40,000 words' },
  { value: 'novel', label: 'Novel', desc: '50,000+ words' },
]

const targetAgeOptions = [
  { value: 'children', label: 'Children', desc: 'Ages 8-12' },
  { value: 'young-adult', label: 'Young Adult', desc: 'Ages 13-18' },
  { value: 'adult', label: 'Adult', desc: 'Ages 18+' },
]

const toneOptions = [
  { value: 'light', label: 'Light & Uplifting', icon: '☀️' },
  { value: 'serious', label: 'Serious & Thoughtful', icon: '🤔' },
  { value: 'humorous', label: 'Humorous & Fun', icon: '😄' },
  { value: 'dark', label: 'Dark & Intense', icon: '🌙' },
]

interface BookGeneratorProps {
  onIdeaGenerated: (idea: BookIdea) => void
}

interface RadioGroupProps {
  label: string
  value: string
  onChange: (value: string) => void
  options: Array<{ value: string; label: string; desc?: string; icon?: string }>
  className?: string
}

function RadioGroup({ label, value, onChange, options, className }: RadioGroupProps) {
  return (
    <div className={clsx('space-y-3', className)}>
      <label className="block text-base font-semibold text-gray-900 mb-4">{label}</label>
      <div className="grid grid-cols-1 gap-3">
        {options.map((option) => (
          <label
            key={option.value}
            className={clsx(
              'relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 min-h-touch',
              value === option.value
                ? 'border-purple-500 bg-purple-50 shadow-sm'
                : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
            )}
          >
            <input
              type="radio"
              name={label}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="sr-only"
            />
            <div className="flex items-center gap-3 w-full">
              {option.icon && (
                <span className="text-2xl flex-shrink-0">{option.icon}</span>
              )}
              <div className="flex-grow">
                <div className="font-medium text-gray-900">{option.label}</div>
                {option.desc && (
                  <div className="text-sm text-gray-500 mt-1">{option.desc}</div>
                )}
              </div>
              <div className={clsx(
                'w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0',
                value === option.value
                  ? 'border-purple-500 bg-purple-500'
                  : 'border-gray-300'
              )}>
                {value === option.value && (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  )
}

interface SelectProps {
  label: string
  value: string
  onChange: (value: string) => void
  options: Array<{ value: string; label: string }>
  icon?: React.ReactNode
}

function Select({ label, value, onChange, options, icon }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const selectedOption = options.find(opt => opt.value === value)

  return (
    <div className="space-y-3">
      <label className="block text-base font-semibold text-gray-900 flex items-center gap-2">
        {icon}
        {label}
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={clsx(
            'w-full flex items-center justify-between p-4 bg-white border-2 rounded-xl transition-all duration-200 min-h-touch',
            isOpen ? 'border-purple-500 shadow-sm' : 'border-gray-200 hover:border-gray-300'
          )}
        >
          <span className="font-medium text-gray-900">{selectedOption?.label}</span>
          <ChevronDown className={clsx(
            'w-5 h-5 text-gray-400 transition-transform duration-200',
            isOpen && 'rotate-180'
          )} />
        </button>
        
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-20 max-h-60 overflow-y-auto">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value)
                  setIsOpen(false)
                }}
                className={clsx(
                  'w-full text-left p-4 hover:bg-gray-50 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl min-h-touch',
                  value === option.value && 'bg-purple-50 text-purple-700 font-medium'
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export function BookGenerator({ onIdeaGenerated }: BookGeneratorProps) {
  const [options, setOptions] = useState<GeneratorOptions>({
    bookType: 'fiction',
    genre: 'romance',
    length: 'novel',
    targetAge: 'adult',
    tone: 'light',
  })
  const [isGenerating, setIsGenerating] = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [recentIdeas, setRecentIdeas] = useState<BookIdea[]>([])
  const [lastGeneratedIdea, setLastGeneratedIdea] = useState<BookIdea | null>(null)

  // Load recent ideas on component mount
  useEffect(() => {
    const saved = IdeaStorage.getRecentFavorites(5)
    setRecentIdeas(saved)
  }, [])

  const handleGenerate = async (customOptions?: Partial<GeneratorOptions>) => {
    setIsGenerating(true)
    try {
      // Simulate API delay for better UX
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const finalOptions = customOptions ? { ...options, ...customOptions } : options
      const idea = generateBookIdea(finalOptions)
      
      // Track analytics
      analytics.trackIdeaGeneration(finalOptions.genre, finalOptions.bookType)
      
      // Update state
      setLastGeneratedIdea(idea)
      onIdeaGenerated(idea)
      
      // Update recent ideas
      setRecentIdeas(prev => [idea, ...prev.slice(0, 4)])
    } catch (error) {
      console.error('Error generating book idea:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleRandomGenerate = async () => {
    const randomOptions: GeneratorOptions = {
      bookType: Math.random() > 0.5 ? 'fiction' : 'non-fiction',
      genre: '',
      length: ['short-story', 'novella', 'novel'][Math.floor(Math.random() * 3)] as any,
      targetAge: ['children', 'young-adult', 'adult'][Math.floor(Math.random() * 3)] as any,
      tone: ['light', 'serious', 'humorous', 'dark'][Math.floor(Math.random() * 4)] as any,
    }
    
    // Select random genre based on book type
    const genres = randomOptions.bookType === 'fiction' ? fictionGenres : nonFictionGenres
    randomOptions.genre = genres[Math.floor(Math.random() * genres.length)].value
    
    setOptions(randomOptions)
    await handleGenerate(randomOptions)
  }

  const handleMoreLikeThis = async () => {
    if (!lastGeneratedIdea) return
    
    // Generate with same options but potentially different tone/length for variety
    const variations: Partial<GeneratorOptions> = {}
    
    // 30% chance to vary the tone
    if (Math.random() < 0.3) {
      const tones = toneOptions.filter(t => t.value !== options.tone)
      variations.tone = tones[Math.floor(Math.random() * tones.length)].value as any
    }
    
    // 20% chance to vary the length
    if (Math.random() < 0.2) {
      const lengths = lengthOptions.filter(l => l.value !== options.length)
      variations.length = lengths[Math.floor(Math.random() * lengths.length)].value as any
    }
    
    await handleGenerate(variations)
  }

  const getGenreOptions = () => {
    return options.bookType === 'fiction' ? fictionGenres : nonFictionGenres
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Book Idea Generator</h2>
          <p className="text-gray-600 text-base md:text-lg">Customize your preferences to generate the perfect story concept</p>
        </div>

        <div className="space-y-8">
          {/* Book Type */}
          <RadioGroup
            label="What type of book?"
            value={options.bookType}
            onChange={(value) => setOptions({ 
              ...options, 
              bookType: value as 'fiction' | 'non-fiction',
              genre: value === 'fiction' ? 'romance' : 'self-help'
            })}
            options={[
              { value: 'fiction', label: 'Fiction', desc: 'Stories, novels, creative narratives' },
              { value: 'non-fiction', label: 'Non-Fiction', desc: 'Educational, informational, real-world topics' },
            ]}
          />

          {/* Genre */}
          <Select
            label="Choose your genre"
            value={options.genre}
            onChange={(value) => setOptions({ ...options, genre: value })}
            options={getGenreOptions()}
            icon={<BookOpen className="w-5 h-5 text-purple-600" />}
          />

          {/* Advanced Options Toggle */}
          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center justify-center gap-2 w-full p-4 text-purple-600 hover:text-purple-700 font-medium bg-purple-50 hover:bg-purple-100 rounded-xl transition-all duration-200 min-h-touch"
          >
            <Settings2 className="w-5 h-5" />
            {showAdvanced ? 'Hide' : 'Show'} Advanced Options
            <ChevronDown className={clsx(
              'w-5 h-5 transition-transform duration-200',
              showAdvanced && 'rotate-180'
            )} />
          </button>

          {/* Advanced Options */}
          {showAdvanced && (
            <div className="space-y-8 pt-4 border-t border-gray-200 animate-in slide-in-from-top duration-300">
              {/* Length */}
              <RadioGroup
                label="Book length"
                value={options.length}
                onChange={(value) => setOptions({ ...options, length: value as any })}
                options={lengthOptions}
              />

              {/* Target Age */}
              <RadioGroup
                label="Target audience"
                value={options.targetAge}
                onChange={(value) => setOptions({ ...options, targetAge: value as any })}
                options={targetAgeOptions}
              />

              {/* Tone */}
              <RadioGroup
                label="Writing tone"
                value={options.tone}
                onChange={(value) => setOptions({ ...options, tone: value as any })}
                options={toneOptions}
              />
            </div>
          )}

          {/* Quick Action Buttons */}
          <div className="space-y-4">
            {/* Main Generate Button */}
            <button
              onClick={() => handleGenerate()}
              disabled={isGenerating}
              className={clsx(
                'w-full bg-gradient-to-r from-purple-600 to-orange-500 text-white py-5 px-8 rounded-xl font-bold text-lg md:text-xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-touch flex items-center justify-center gap-3',
                isGenerating 
                  ? 'opacity-75 cursor-not-allowed' 
                  : 'hover:scale-105 active:scale-95'
              )}
            >
              {isGenerating ? (
                <>
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Generating Your Idea...
                </>
              ) : (
                <>
                  <RefreshCw className="w-6 h-6" />
                  Generate Book Idea
                </>
              )}
            </button>

            {/* Quick Action Buttons Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleRandomGenerate}
                disabled={isGenerating}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 min-h-touch disabled:opacity-50"
              >
                <Sparkles className="w-5 h-5" />
                Random Idea
              </button>
              
              {lastGeneratedIdea && (
                <button
                  onClick={handleMoreLikeThis}
                  disabled={isGenerating}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 min-h-touch disabled:opacity-50"
                >
                  <RefreshCw className="w-5 h-5" />
                  More Like This
                </button>
              )}
            </div>
          </div>

          {/* Recent Ideas */}
          {recentIdeas.length > 0 && (
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-600" />
                Recent Ideas
              </h3>
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {recentIdeas.map((idea, index) => (
                  <div
                    key={idea.id}
                    className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                    onClick={() => {
                      setLastGeneratedIdea(idea)
                      onIdeaGenerated(idea)
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 text-sm truncate">
                          {idea.title[0]}
                        </h4>
                        <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                          {idea.concept.slice(0, 100)}...
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                            {idea.genre}
                          </span>
                          <span className="text-xs text-gray-500">
                            {new Date(idea.generatedAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Help Text */}
          <div className="text-center text-sm text-gray-500 bg-gray-50 rounded-xl p-4">
            💡 <strong>Tip:</strong> Use "Random Idea" for instant inspiration or "More Like This" to generate similar concepts. Click on recent ideas to view them again.
          </div>
        </div>
      </div>
    </div>
  )
}