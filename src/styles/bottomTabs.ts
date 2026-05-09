import type { AppTheme } from '@/theme';

type AppColors = AppTheme['colors'];

export function getBottomTabBarStyle(colors: AppColors) {
  return {
    height: 70,
    backgroundColor: colors.tertiary,
    borderTopColor: colors.disabled,
    borderTopWidth: 1,
  } as const;
}
