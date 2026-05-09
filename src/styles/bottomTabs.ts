import type { AppTheme } from '@/theme';

type AppColors = AppTheme['colors'];

export function getBottomTabBarStyle(colors: AppColors) {
  return {
    height: 70,
    backgroundColor: colors.disabledlight,
    borderTopColor: colors.disabled,
    borderTopWidth: 0,
  } as const;
}
