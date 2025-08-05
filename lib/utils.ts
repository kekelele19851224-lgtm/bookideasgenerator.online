import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

export function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

export function getRandomElements<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

export function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function formatGenre(genre: string): string {
  return genre
    .split('-')
    .map(word => capitalizeFirst(word))
    .join(' ')
}

export function generateTitleVariations(concept: string, genre: string): string[] {
  const words = concept.toLowerCase().split(' ')
  const keyWords = words.filter(word => word.length > 3)
  const genreWords = genre.split(' ')
  
  const variations = []
  
  // Simple key word combinations
  if (keyWords.length >= 2) {
    variations.push(
      `The ${capitalizeFirst(keyWords[0])} ${capitalizeFirst(keyWords[1])}`,
      `${capitalizeFirst(keyWords[0])} and ${capitalizeFirst(keyWords[1])}`,
      `Beyond the ${capitalizeFirst(keyWords[0])}`
    )
  }
  
  // Genre-inspired titles
  if (genre.includes('fantasy')) {
    variations.push(`The Chronicles of ${capitalizeFirst(keyWords[0] || 'Magic')}`)
  } else if (genre.includes('mystery')) {
    variations.push(`The ${capitalizeFirst(keyWords[0] || 'Secret')} Mystery`)
  } else if (genre.includes('romance')) {
    variations.push(`Love in ${capitalizeFirst(keyWords[0] || 'Time')}`)
  } else if (genre.includes('science')) {
    variations.push(`${capitalizeFirst(keyWords[0] || 'The')} Protocol`)
  }
  
  // Fallback titles
  if (variations.length < 3) {
    variations.push(
      `The Last ${capitalizeFirst(keyWords[0] || 'Guardian')}`,
      `Secrets of ${capitalizeFirst(keyWords[0] || 'Tomorrow')}`,
      `${capitalizeFirst(keyWords[0] || 'The')} Rising`
    )
  }
  
  return variations.slice(0, 3)
}

export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}