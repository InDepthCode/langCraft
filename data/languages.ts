import { Language } from "@/types/learning";

export const languages: Language[] = [
  {
    id: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "https://flagcdn.com/w320/es.png",
    code: "es",
    isActive: true,
    description: "Learn the language of rich history, vibrant cultures, and warm conversations."
  },
  {
    id: "fr",
    name: "French",
    nativeName: "Français",
    flag: "https://flagcdn.com/w320/fr.png",
    code: "fr",
    isActive: true,
    description: "Learn the beautiful, melodic language of romance, cuisine, philosophy, and art."
  },
  {
    id: "ja",
    name: "Japanese",
    nativeName: "日本語",
    flag: "https://flagcdn.com/w320/jp.png",
    code: "ja",
    isActive: true,
    description: "Explore the language of ancient traditions, modern tech, and rich artistic culture."
  },
  {
    id: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "https://flagcdn.com/w320/de.png",
    code: "de",
    isActive: false, // Coming soon
    description: "Master the language of science, philosophy, and precision engineering."
  },
  {
    id: "it",
    name: "Italian",
    nativeName: "Italiano",
    flag: "https://flagcdn.com/w320/it.png",
    code: "it",
    isActive: false, // Coming soon
    description: "Immerse yourself in the musical language of music, architecture, and la dolce vita."
  }
];
