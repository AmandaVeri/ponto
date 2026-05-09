import { Platform } from 'react-native';

export const shadows = {
  none: {},
  sm: Platform.select({
    web: { boxShadow: '0 1px 2px rgba(16, 24, 40, 0.08)' },
    default: { elevation: 1, shadowOpacity: 0.08, shadowRadius: 2, shadowOffset: { width: 0, height: 1 } },
  }),
  md: Platform.select({
    web: { boxShadow: '0 8px 20px rgba(16, 24, 40, 0.10)' },
    default: { elevation: 4, shadowOpacity: 0.12, shadowRadius: 8, shadowOffset: { width: 0, height: 4 } },
  }),
} as const;
