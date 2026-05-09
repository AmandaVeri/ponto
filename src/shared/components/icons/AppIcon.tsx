import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { TextStyle } from 'react-native';

export type AppIconName =
  | 'timeClock'
  | 'history'
  | 'profile'
  | 'dashboard'
  | 'employees'
  | 'records'
  | 'reports'
  | 'settings'
  | 'logout';

type AppIconProps = {
  name: AppIconName;
  size?: number;
  color?: string;
  style?: TextStyle;
};

const iconMap: Record<AppIconName, keyof typeof MaterialCommunityIcons.glyphMap> = {
  timeClock: 'clock-time-four-outline',
  history: 'history',
  profile: 'account-outline',
  dashboard: 'view-dashboard-outline',
  employees: 'account-multiple-outline',
  records: 'file-document-multiple-outline',
  reports: 'chart-box-outline',
  settings: 'cog-outline',
  logout: 'logout',
};

export function AppIcon({ name, size = 24, color = 'currentColor', style }: AppIconProps) {
  return <MaterialCommunityIcons name={iconMap[name]} size={size} color={color} style={style} />;
}
