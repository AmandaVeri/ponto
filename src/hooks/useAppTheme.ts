import { useColorScheme } from 'react-native';

import { useThemeStore } from '@/store/themeStore';
import { themes } from '@/theme';
import type { ColorSchemeName } from '@/theme/colors';

export function useAppTheme() {
  const systemScheme = useColorScheme();
  const mode = useThemeStore((state) => state.mode);
  const resolvedScheme: ColorSchemeName =
    mode === 'system' ? (systemScheme === 'dark' ? 'dark' : 'light') : mode;

  return {
    mode,
    scheme: resolvedScheme,
    theme: themes[resolvedScheme],
    colors: themes[resolvedScheme].colors,
  };
}
