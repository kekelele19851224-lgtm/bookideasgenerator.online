import { GeneratorOptions, BookIdea } from '@/types'
import { generateId } from '@/lib/utils'
import fictionTemplates from '@/data/fiction-templates.json'
import nonfictionTemplates from '@/data/nonfiction-templates.json'

// Main generator function
export function generateBookIdea(options: GeneratorOptions): BookIdea {
  const template = getTemplate(options.genre, options.bookType)
  
  return {
    id: generateId(),
    title: generateTitles(template.titlePatterns, 3),
    genre: formatGenre(options.genre),
    concept: combineConcept(template.concepts || template.titlePatterns, options),
    mainCharacter: selectRandom(template.characters || template.subjects || ['The protagonist']),
    setting: selectRandom(template.settings || template.destinations || ['Contemporary setting']),
    conflict: selectRandom(template.conflicts || template.approaches || ['Central challenge']),
    targetAudience: formatTargetAudience(options.targetAge),
    openingLine: selectRandom(template.openingLines || generateDefaultOpenings()),
    themes: selectMultiple(template.themes || generateDefaultThemes(), 2),
    generatedAt: new Date()
  }
}

// Get template based on genre and book type
function getTemplate(genre: string, bookType: 'fiction' | 'non-fiction'): any {
  if (bookType === 'fiction') {
    return (fictionTemplates as any)[genre] || (fictionTemplates as any)['romance']
  } else {
    return (nonfictionTemplates as any)[genre] || (nonfictionTemplates as any)['self-help']
  }
}

// Generate multiple title variations
function generateTitles(patterns: string[], count: number): string[] {
  const titles: string[] = []
  const placeholders = {
    adjective: ['Amazing', 'Ultimate', 'Perfect', 'Hidden', 'Secret', 'Powerful', 'Complete', 'Essential', 'Modern', 'Revolutionary'],
    location: ['Paris', 'Tokyo', 'New York', 'London', 'Rome', 'Village', 'City', 'Island', 'Mountain', 'Coast'],
    place: ['Home', 'Heart', 'Dreams', 'Time', 'Life', 'Love', 'Hope', 'Future', 'Past', 'Journey'],
    profession: ["Doctor's", "Teacher's", "Artist's", "Chef's", "Writer's", "Pilot's", "Detective's", "Lawyer's", "Engineer's", "Musician's"],
    season: ['Spring', 'Summer', 'Fall', 'Winter', 'Christmas', 'Holiday'],
    emotion: ['Love', 'Hope', 'Joy', 'Dreams', 'Peace', 'Happiness', 'Wonder', 'Magic', 'Passion', 'Serenity'],
    color: ['Red', 'Blue', 'Golden', 'Silver', 'White', 'Black', 'Green', 'Purple', 'Crimson', 'Azure'],
    city: ['Paris', 'Venice', 'Prague', 'Vienna', 'Barcelona', 'Florence', 'Dublin', 'Copenhagen', 'Amsterdam', 'Edinburgh'],
    object: ['Book', 'Key', 'Letter', 'Photo', 'Ring', 'Map', 'Box', 'Diary', 'Watch', 'Mirror'],
    number: ['7', '10', '21', '30', '100', 'Five', 'Seven', 'Ten', 'Twelve', 'Fifty'],
    skill: ['Leadership', 'Communication', 'Creativity', 'Focus', 'Confidence', 'Resilience', 'Innovation', 'Success'],
    concept: ['Excellence', 'Innovation', 'Growth', 'Change', 'Success', 'Freedom', 'Power', 'Wisdom', 'Truth', 'Discovery'],
    achievement: ['Succeed', 'Excel', 'Win', 'Thrive', 'Grow', 'Transform', 'Achieve', 'Overcome', 'Master', 'Conquer'],
    potential: ['Potential', 'Power', 'Strength', 'Abilities', 'Talents', 'Gifts', 'Energy', 'Spirit', 'Mind', 'Heart'],
    limitation: ['Fear', 'Doubt', 'Limits', 'Barriers', 'Obstacles', 'Challenges', 'Problems', 'Blocks', 'Walls'],
    purpose: ['Purpose', 'Calling', 'Mission', 'Path', 'Destiny', 'Vision', 'Dream', 'Goal', 'Passion', 'Way'],
    fear: ['Fear', 'Anxiety', 'Worry', 'Stress', 'Doubt', 'Uncertainty', 'Insecurity', 'Overwhelm'],
    habit: ['Success', 'Productivity', 'Happiness', 'Focus', 'Energy', 'Balance', 'Mindfulness', 'Excellence'],
    challenge: ['Adversity', 'Obstacles', 'Challenges', 'Difficulties', 'Problems', 'Setbacks', 'Struggles'],
    success: ['Success', 'Achievement', 'Excellence', 'Mastery', 'Victory', 'Triumph', 'Breakthrough'],
    area: ['Life', 'Career', 'Relationships', 'Health', 'Mindset', 'Habits', 'Goals', 'Dreams']
  }
  
  for (let i = 0; i < count && i < patterns.length; i++) {
    let title = patterns[i]
    
    // Replace placeholders with random values
    Object.entries(placeholders).forEach(([key, values]) => {
      const placeholder = `{${key}}`
      if (title.includes(placeholder)) {
        title = title.replace(placeholder, selectRandom(values))
      }
    })
    
    titles.push(title)
  }
  
  // Fallback titles if not enough patterns
  while (titles.length < count) {
    titles.push(`The ${selectRandom(placeholders.adjective)} ${selectRandom(placeholders.concept)}`)
  }
  
  return titles
}

// Select random element from array
function selectRandom<T>(array: T[]): T {
  if (!array || array.length === 0) return '' as T
  return array[Math.floor(Math.random() * array.length)]
}

// Select multiple random elements
function selectMultiple<T>(array: T[], count: number): T[] {
  if (!array || array.length === 0) return []
  const shuffled = [...array].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, Math.min(count, array.length))
}

// Combine concept from various elements
function combineConcept(concepts: string[], options: GeneratorOptions): string {
  const toneAdjustments = {
    light: 'uplifting and inspiring',
    serious: 'thought-provoking and profound',
    humorous: 'engaging and entertaining',
    dark: 'intense and gripping'
  }
  
  const lengthAdjustments = {
    'short-story': 'concise narrative',
    'novella': 'focused exploration',
    'novel': 'comprehensive journey'
  }
  
  const audienceAdjustments = {
    children: 'accessible and age-appropriate',
    'young-adult': 'relatable and compelling',
    adult: 'sophisticated and nuanced'
  }
  
  if (options.bookType === 'fiction') {
    const baseConcept = selectRandom(concepts)
    return `A ${toneAdjustments[options.tone]} ${lengthAdjustments[options.length]} that follows ${baseConcept.toLowerCase()}. This ${audienceAdjustments[options.targetAge]} ${formatGenre(options.genre)} story explores themes of growth, challenge, and triumph while delivering an engaging reading experience.`
  } else {
    const baseConcept = selectRandom(concepts)
    return `${baseConcept} This ${audienceAdjustments[options.targetAge]} guide provides ${toneAdjustments[options.tone]} insights and practical strategies to help readers achieve their goals and transform their lives.`
  }
}

// Format genre for display
function formatGenre(genre: string): string {
  return genre
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// Format target audience
function formatTargetAudience(age: string): string {
  const audiences = {
    children: 'Children (Ages 8-12)',
    'young-adult': 'Young Adults (Ages 13-18)',
    adult: 'Adults (Ages 18+)'
  }
  
  return audiences[age as keyof typeof audiences] || 'General Audience'
}

// Generate default opening lines
function generateDefaultOpenings(): string[] {
  return [
    "It was a moment that would change everything.",
    "The journey began with a simple decision.",
    "Nobody could have predicted what happened next.",
    "The story starts where most stories end.",
    "This is not the story you think it is.",
    "Everything changed the moment they met.",
    "The secret had been hidden for too long.",
    "It was supposed to be an ordinary day.",
    "The letter arrived at the perfect time.",
    "The discovery would alter the course of history."
  ]
}

// Generate default themes
function generateDefaultThemes(): string[] {
  return [
    'Personal Growth',
    'Overcoming Challenges',
    'Love and Relationships',
    'Finding Purpose',
    'Courage and Bravery',
    'Family and Loyalty',
    'Hope and Perseverance',
    'Truth and Justice',
    'Redemption and Forgiveness',
    'Discovery and Adventure',
    'Transformation and Change',
    'Wisdom and Learning',
    'Freedom and Independence',
    'Unity and Cooperation',
    'Legacy and Heritage'
  ]
}