import { BookIdea } from '@/types'

export class IdeaStorage {
  private static STORAGE_KEY = 'bookSpark_favorites'
  
  static saveFavorite(idea: BookIdea): void {
    try {
      const existingIdeas = this.getFavorites()
      
      // Check if idea already exists
      const existingIndex = existingIdeas.findIndex(existing => existing.id === idea.id)
      
      if (existingIndex !== -1) {
        // Update existing idea
        existingIdeas[existingIndex] = idea
      } else {
        // Add new idea to the beginning
        existingIdeas.unshift(idea)
      }
      
      // Keep only the last 100 ideas to prevent storage bloat
      const trimmedIdeas = existingIdeas.slice(0, 100)
      
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(trimmedIdeas))
    } catch (error) {
      console.error('Error saving favorite idea:', error)
      throw new Error('Failed to save idea to storage')
    }
  }
  
  static getFavorites(): BookIdea[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY)
      if (!stored) return []
      
      const ideas = JSON.parse(stored)
      
      // Convert generatedAt back to Date objects and validate structure
      return ideas.map((idea: any) => ({
        ...idea,
        generatedAt: new Date(idea.generatedAt)
      })).filter((idea: any) => 
        // Basic validation
        idea.id && idea.title && idea.concept
      )
    } catch (error) {
      console.error('Error loading favorite ideas:', error)
      return []
    }
  }
  
  static removeFavorite(id: string): void {
    try {
      const existingIdeas = this.getFavorites()
      const filteredIdeas = existingIdeas.filter(idea => idea.id !== id)
      
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filteredIdeas))
    } catch (error) {
      console.error('Error removing favorite idea:', error)
      throw new Error('Failed to remove idea from storage')
    }
  }
  
  static clearFavorites(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY)
    } catch (error) {
      console.error('Error clearing favorite ideas:', error)
      throw new Error('Failed to clear favorites')
    }
  }
  
  static exportFavorites(): string {
    try {
      const ideas = this.getFavorites()
      return JSON.stringify(ideas, null, 2)
    } catch (error) {
      console.error('Error exporting favorite ideas:', error)
      return '[]'
    }
  }
  
  static importFavorites(jsonString: string): boolean {
    try {
      const importedIdeas = JSON.parse(jsonString)
      
      if (!Array.isArray(importedIdeas)) {
        throw new Error('Invalid format: expected array of ideas')
      }
      
      // Validate imported ideas structure
      for (const idea of importedIdeas) {
        if (!idea.id || !idea.title || !idea.concept) {
          throw new Error('Invalid idea format: missing required fields')
        }
      }
      
      // Merge with existing ideas
      const existingIdeas = this.getFavorites()
      const allIdeas = [...importedIdeas, ...existingIdeas]
      
      // Remove duplicates based on ID, keeping the imported version
      const uniqueIdeas = allIdeas.filter((idea, index, self) => 
        index === self.findIndex(i => i.id === idea.id)
      )
      
      // Keep only the latest 100 ideas
      const trimmedIdeas = uniqueIdeas.slice(0, 100)
      
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(trimmedIdeas))
      return true
    } catch (error) {
      console.error('Error importing favorite ideas:', error)
      return false
    }
  }
  
  static getFavoriteById(id: string): BookIdea | null {
    try {
      const favorites = this.getFavorites()
      return favorites.find(idea => idea.id === id) || null
    } catch (error) {
      console.error('Error finding favorite idea by ID:', error)
      return null
    }
  }
  
  static isFavorite(id: string): boolean {
    try {
      const favorites = this.getFavorites()
      return favorites.some(idea => idea.id === id)
    } catch (error) {
      console.error('Error checking if idea is favorite:', error)
      return false
    }
  }
  
  static getFavoritesByGenre(genre: string): BookIdea[] {
    try {
      const favorites = this.getFavorites()
      return favorites.filter(idea => 
        idea.genre.toLowerCase() === genre.toLowerCase()
      )
    } catch (error) {
      console.error('Error getting favorites by genre:', error)
      return []
    }
  }
  
  static getRecentFavorites(count: number = 10): BookIdea[] {
    try {
      const favorites = this.getFavorites()
      return favorites
        .sort((a, b) => new Date(b.generatedAt).getTime() - new Date(a.generatedAt).getTime())
        .slice(0, count)
    } catch (error) {
      console.error('Error getting recent favorites:', error)
      return []
    }
  }
  
  static searchFavorites(query: string): BookIdea[] {
    try {
      const favorites = this.getFavorites()
      const searchTerm = query.toLowerCase()
      
      return favorites.filter(idea => 
        idea.title.some(title => title.toLowerCase().includes(searchTerm)) ||
        idea.concept.toLowerCase().includes(searchTerm) ||
        idea.genre.toLowerCase().includes(searchTerm) ||
        idea.themes.some(theme => theme.toLowerCase().includes(searchTerm)) ||
        idea.mainCharacter.toLowerCase().includes(searchTerm)
      )
    } catch (error) {
      console.error('Error searching favorites:', error)
      return []
    }
  }
  
  static getFavoriteCount(): number {
    try {
      return this.getFavorites().length
    } catch (error) {
      console.error('Error getting favorite count:', error)
      return 0
    }
  }
}

// Legacy function exports for backward compatibility
export function saveIdeaToStorage(idea: BookIdea): void {
  IdeaStorage.saveFavorite(idea)
}

export function getSavedIdeas(): BookIdea[] {
  return IdeaStorage.getFavorites()
}

export function removeIdeaFromStorage(ideaId: string): void {
  IdeaStorage.removeFavorite(ideaId)
}

export function clearAllSavedIdeas(): void {
  IdeaStorage.clearFavorites()
}

export function getIdeaById(ideaId: string): BookIdea | null {
  return IdeaStorage.getFavoriteById(ideaId)
}

export function exportIdeasAsJSON(): string {
  return IdeaStorage.exportFavorites()
}

export function importIdeasFromJSON(jsonString: string): boolean {
  return IdeaStorage.importFavorites(jsonString)
}