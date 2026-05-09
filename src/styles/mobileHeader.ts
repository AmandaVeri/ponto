import type { AppTheme } from '@/theme';

type AppColors = AppTheme['colors'];

export function getMobileHeaderStyle(colors: AppColors) {
  return {
    backgroundColor: colors.tertiary,
    borderBottomColor: colors.disabled,
    borderBottomWidth: 1,
  } as const;
}
