import { create } from "zustand";

interface LanguageState {
  selectedLanguageId: string;
  setSelectedLanguageId: (id: string) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  selectedLanguageId: "es", // Default selected language is Spanish
  setSelectedLanguageId: (id) => set({ selectedLanguageId: id }),
}));
