import type { AppTheme } from '@/theme';

type AppColors = AppTheme['colors'];

export function getMobileHeaderStyle(colors: AppColors) {
  return {
    backgroundColor: colors.tertiary,
    borderBottomColor: 'transparent',
    borderBottomWidth: 0,
  } as const;
}
