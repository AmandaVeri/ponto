export const employeeTheme = {
  colors: {
    background: '#F7F8FA',
    surface: '#FFFFFF',
    text: '#111827',
    textMuted: '#6B7280',
    border: '#E5E7EB',
    shadow: '#101828',
    primary: '#00A651',
    primaryDark: '#008B43',
    orange: '#FF9F1C',
    blue: '#1E88E5',
    red: '#EF3E38',
    tabInactive: '#6B7280',
    handle: '#C7C9CC',
  },
  radius: {
    sm: 10,
    md: 18,
    lg: 24,
    xl: 28,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    '2xl': 24,
    '3xl': 32,
  },
  typography: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    '2xl': 32,
    clock: 58,
  },
} as const;

export type EmployeeColorName = keyof typeof employeeTheme.colors;
