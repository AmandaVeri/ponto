export const lightColors = {
  background: '#F9FAFC',
  primary: '#0E222C',
  secondary: '#469853',
  tertiary: '#FFFFFF',
  disabled: '#A3A7AB',
} as const;

export const darkColors = {
  background: '#F9FAFC',
  primary: '#0E222C',
  secondary: '#469853',
  tertiary: '#FFFFFF',
  disabled: '#A3A7AB',
} as const;

export type AppColorName = keyof typeof lightColors;
export type ColorSchemeName = 'light' | 'dark';
