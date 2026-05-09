export const lightColors = {
  background: '#f7f8fb',
  surface: '#ffffff',
  surfaceMuted: '#edf1f7',
  text: '#172033',
  textMuted: '#647086',
  border: '#d9e0ea',
  primary: '#1769e0',
  primaryForeground: '#ffffff',
  secondary: '#00a6a6',
  success: '#1f9d55',
  warning: '#b7791f',
  danger: '#d92d20',
  disabled: '#a7b0c0',
  overlay: 'rgba(23, 32, 51, 0.48)',
} as const;

export const darkColors = {
  background: '#101623',
  surface: '#161f2f',
  surfaceMuted: '#223047',
  text: '#f4f7fb',
  textMuted: '#aab4c5',
  border: '#324158',
  primary: '#67a2ff',
  primaryForeground: '#08111f',
  secondary: '#31d0c6',
  success: '#68d391',
  warning: '#f6c453',
  danger: '#ff7a70',
  disabled: '#59657a',
  overlay: 'rgba(0, 0, 0, 0.62)',
} as const;

export type AppColorName = keyof typeof lightColors;
export type ColorSchemeName = 'light' | 'dark';
