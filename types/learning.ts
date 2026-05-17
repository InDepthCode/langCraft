export interface Language {
  id: string; // e.g. 'es', 'fr', 'zh'
  name: string; // e.g. 'Spanish'
  nativeName: string; // e.g. 'Español'
  flag: string; // e.g. '🇪🇸'
  code: string; // ISO language code, e.g. 'es'
  isActive: boolean; // true if available for study
  description: string; // tagline, e.g. 'Learn the language of romance and history'
}

export interface Unit {
  id: string; // e.g. 'es-unit-1'
  languageId: string; // links to Language
  number: number; // e.g. 1, 2
  title: string; // e.g. 'Basics & Greetings'
  description: string; // e.g. 'Introduce yourself, ask simple questions, and say goodbye.'
}

export interface VocabularyItem {
  id: string;
  word: string;
  translation: string;
  pronunciation: string;
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb' | 'pronoun' | 'preposition' | 'conjunction' | 'greeting' | 'other';
  exampleSentence: string;
  exampleTranslation: string;
}

export interface PhraseItem {
  id: string;
  phrase: string;
  translation: string;
  pronunciation: string;
  context?: string; // situational description of when to use it
}

export type ActivityType = 'video' | 'audio' | 'chat' | 'multiple-choice' | 'translation' | 'vocabulary-match';

export interface ActivityBase {
  id: string;
  type: ActivityType;
  title: string;
  instructions: string;
  xpReward: number;
}

export interface VideoActivity extends ActivityBase {
  type: 'video';
  videoUrl?: string; // Optional URL if using a pre-recorded demo video
  streamVideoAgentId?: string; // Used for Stream Vision Agents integration
  aiPrompt: string; // Teacher instruction: e.g. 'You are a lively Spanish teacher...'
}

export interface AudioActivity extends ActivityBase {
  type: 'audio';
  phrasesToRepeat: {
    phrase: string;
    translation: string;
    pronunciation: string;
  }[];
}

export interface ChatActivity extends ActivityBase {
  type: 'chat';
  aiSystemPrompt: string; // Instructions for the AI tutor: 'Act as a barista at a coffee shop in Madrid...'
  initialMessage: string; // '¡Hola! ¿Qué te gustaría tomar hoy?'
}

export interface MultipleChoiceActivity extends ActivityBase {
  type: 'multiple-choice';
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation?: string;
}

export interface TranslationActivity extends ActivityBase {
  type: 'translation';
  sourceText: string; // e.g. 'Buenos días, ¿cómo estás?'
  targetText: string; // e.g. 'Good morning, how are you?'
  options?: string[]; // Scrambled words for the user to select from to build targetText
}

export interface VocabularyMatchActivity extends ActivityBase {
  type: 'vocabulary-match';
  pairs: {
    word: string; // Foreign word
    translation: string; // English translation
  }[];
}

export type Activity =
  | VideoActivity
  | AudioActivity
  | ChatActivity
  | MultipleChoiceActivity
  | TranslationActivity
  | VocabularyMatchActivity;

export interface Lesson {
  id: string; // e.g. 'es-lesson-1'
  unitId: string; // links to Unit
  number: number; // e.g. 1
  title: string; // e.g. 'Hello and Goodbye'
  description: string; // e.g. 'Learn standard greetings and farewells.'
  xpReward: number; // Total XP awarded for the entire lesson
  goals: string[]; // Key learning goals, e.g. ['Say hello and goodbye', 'Ask how someone is doing']
  aiPrompt: string; // System prompt for the future audio-based AI Vision Agent teacher
  activities: Activity[];
  vocabulary: VocabularyItem[];
  phrases: PhraseItem[];
}
