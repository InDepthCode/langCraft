import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface LearningState {
  completedActivityIds: string[];
  xp: number;
  streak: number;
  toggleActivityCompleted: (activityId: string, xpReward: number) => void;
  addXp: (amount: number) => void;
  incrementStreak: () => void;
  resetProgress: () => void;
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
}

export const useLearningStore = create<LearningState>()(
  persist(
    (set) => ({
      completedActivityIds: [],
      xp: 0, // Initial realistic visual representation
      streak: 0, // Initial active profile streak
      toggleActivityCompleted: (activityId, xpReward) =>
        set((state) => {
          const isCompleted = state.completedActivityIds.includes(activityId);
          if (isCompleted) {
            return {
              completedActivityIds: state.completedActivityIds.filter((id) => id !== activityId),
              xp: Math.max(0, state.xp - xpReward),
            };
          } else {
            return {
              completedActivityIds: [...state.completedActivityIds, activityId],
              xp: state.xp + xpReward,
            };
          }
        }),
      addXp: (amount) => set((state) => ({ xp: state.xp + amount })),
      incrementStreak: () => set((state) => ({ streak: state.streak + 1 })),
      resetProgress: () => set({ completedActivityIds: [], xp: 0, streak: 0 }),
      _hasHydrated: false,
      setHasHydrated: (state) => set({ _hasHydrated: state }),
    }),
    {
      name: "learning-storage",
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: (state) => {
        return () => {
          state?.setHasHydrated(true);
        };
      },
    }
  )
);
