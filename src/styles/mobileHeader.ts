import type { AppTheme } from '@/theme';

type AppColors = AppTheme['colors'];

export function getMobileHeaderStyle(colors: AppColors) {
  return {
    backgroundColor: colors.disabledlight,
    borderBottomColor: colors.disabled,
    borderBottomWidth: 0,
  } as const;
}
