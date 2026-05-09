import { darkColors, lightColors, type ColorSchemeName } from './colors';
import { radius, spacing } from './spacing';
import { shadows } from './shadows';
import { typography } from './typography';

export const themes = {
  light: {
    colors: lightColors,
    spacing,
    radius,
    shadows,
    typography,
  },
  dark: {
    colors: darkColors,
    spacing,
    radius,
    shadows,
    typography,
  },
} as const;

export type AppTheme = (typeof themes)[ColorSchemeName];
export { darkColors, lightColors, radius, shadows, spacing, typography };
