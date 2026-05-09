export const lightColors = {
  background: '#F9FAFC',
  primary: '#0E222C',
  secondary: '#469853',
  tertiary: '#FFFFFF',
  disabled: '#A3A7AB',
  disabledlight: '#E6E9EC',
} as const;

export const darkColors = {
  background: '#F9FAFC',
  primary: '#0E222C',
  secondary: '#469853',
  tertiary: '#FFFFFF',
  disabled: '#A3A7AB',
  disabledlight: '#E6E9EC',
} as const;

export type AppColorName = keyof typeof lightColors;
export type ColorSchemeName = 'light' | 'dark';
