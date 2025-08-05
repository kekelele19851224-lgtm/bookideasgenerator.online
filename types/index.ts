export interface BookIdea {
  id: string;
  title: string[];
  genre: string;
  concept: string;
  mainCharacter: string;
  setting: string;
  conflict: string;
  targetAudience: string;
  openingLine: string;
  themes: string[];
  generatedAt: Date;
}

export interface GeneratorOptions {
  bookType: 'fiction' | 'non-fiction';
  genre: string;
  length: 'short-story' | 'novella' | 'novel';
  targetAge: 'children' | 'young-adult' | 'adult';
  tone: 'light' | 'serious' | 'humorous' | 'dark';
}

export interface FictionTemplate {
  genres: string[];
  characters: {
    protagonists: string[];
    antagonists: string[];
    supportingCharacters: string[];
  };
  settings: {
    timeperiods: string[];
    locations: string[];
    worldBuilding: string[];
  };
  conflicts: {
    internal: string[];
    external: string[];
    societal: string[];
  };
  themes: string[];
  openingLines: string[];
  plotDevices: string[];
}

export interface NonFictionTemplate {
  categories: string[];
  approaches: string[];
  targetAudiences: string[];
  bookStructures: string[];
  researchMethods: string[];
  writingStyles: string[];
  topics: {
    [category: string]: string[];
  };
}

export interface WritingTip {
  id: string;
  title: string;
  category: 'plotting' | 'character' | 'dialogue' | 'setting' | 'editing' | 'publishing';
  content: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
}