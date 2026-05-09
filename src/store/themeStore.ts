import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { storageKeys } from '@/services/storage/storageKeys';
import type { ColorSchemeName } from '@/theme/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type ThemeMode = ColorSchemeName | 'system';

type ThemeState = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: 'system',
      setMode: (mode) => set({ mode }),
    }),
    {
      name: storageKeys.themeMode,
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
